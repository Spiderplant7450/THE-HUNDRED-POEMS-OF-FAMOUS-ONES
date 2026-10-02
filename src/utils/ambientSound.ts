export type AmbientAtmosphere = 'off' | 'rain' | 'fireplace' | 'library' | 'drone';

const AUDIO_TRACKS: Record<Exclude<AmbientAtmosphere, 'off'>, string> = {
  rain: 'https://actions.google.com/sounds/v1/weather/rain_heavy.ogg',
  fireplace: 'https://actions.google.com/sounds/v1/ambiences/fireplace.ogg',
  library: 'https://actions.google.com/sounds/v1/ambiences/wind_soft.ogg',
  drone: '', // Procedural harmonic drone
};

class AmbientAudioEngine {
  private ctx: AudioContext | null = null;
  private currentMode: AmbientAtmosphere = 'off';
  private masterGain: GainNode | null = null;
  private noiseNode: AudioNode | null = null;
  private droneOscs: OscillatorNode[] = [];
  private audioElement: HTMLAudioElement | null = null;
  private volume: number = 0.6; // Default pleasant volume
  private isUsingSyntheticFallback: boolean = false;

  private initContext() {
    if (!this.ctx) {
      const AudioContextClass =
        window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioContextClass();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(this.volume * 0.25, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {});
    }
  }

  public setVolume(vol: number) {
    this.volume = Math.max(0, Math.min(1, vol));
    if (this.audioElement) {
      this.audioElement.volume = this.volume;
    }
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setValueAtTime(this.volume * 0.25, this.ctx.currentTime);
    }
  }

  public getVolume(): number {
    return this.volume;
  }

  public setMode(mode: AmbientAtmosphere) {
    this.stop();
    this.currentMode = mode;
    if (mode === 'off') return;

    const audioUrl = AUDIO_TRACKS[mode];
    if (audioUrl) {
      try {
        const audio = new Audio();
        audio.src = audioUrl;
        audio.loop = true;
        audio.volume = this.volume;
        audio.crossOrigin = 'anonymous';

        const playPromise = audio.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              this.audioElement = audio;
            })
            .catch((err) => {
              console.warn('HTML5 ambient audio play interrupted or blocked; falling back to synthesizer:', err);
              this.startProceduralFallback(mode);
            });
        } else {
          this.audioElement = audio;
        }

        audio.onerror = () => {
          console.warn('Audio track failed to load, switching to procedural sound generator.');
          this.startProceduralFallback(mode);
        };
      } catch (err) {
        console.warn('Error initiating audio element, falling back to Web Audio synthesis:', err);
        this.startProceduralFallback(mode);
      }
    } else {
      this.startProceduralFallback(mode);
    }
  }

  private startProceduralFallback(mode: Exclude<AmbientAtmosphere, 'off'>) {
    this.isUsingSyntheticFallback = true;
    this.initContext();
    if (!this.ctx || !this.masterGain) return;

    if (mode === 'rain') {
      this.startRainSynth();
    } else if (mode === 'fireplace') {
      this.startFireplaceSynth();
    } else if (mode === 'library') {
      this.startLibrarySynth();
    } else if (mode === 'drone') {
      this.startHarmonicDrone();
    }
  }

  private startRainSynth() {
    if (!this.ctx || !this.masterGain) return;
    const bufferSize = this.ctx.sampleRate * 2;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    let lastOut = 0.0;
    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      data[i] = (lastOut + 0.02 * white) / 1.02; // Pink noise
      lastOut = data[i];
    }

    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;
    noise.loop = true;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(800, this.ctx.currentTime);

    noise.connect(filter);
    filter.connect(this.masterGain);
    noise.start();
    this.noiseNode = noise;
  }

  private startFireplaceSynth() {
    if (!this.ctx || !this.masterGain) return;
    const bufferSize = this.ctx.sampleRate * 3;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      // Crackle bursts & warm low roar
      const isPop = Math.random() < 0.003;
      data[i] = isPop ? (Math.random() * 2 - 1) * 0.8 : (Math.random() * 2 - 1) * 0.025;
    }

    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;
    noise.loop = true;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(350, this.ctx.currentTime);
    filter.Q.setValueAtTime(0.8, this.ctx.currentTime);

    noise.connect(filter);
    filter.connect(this.masterGain);
    noise.start();
    this.noiseNode = noise;
  }

  private startLibrarySynth() {
    if (!this.ctx || !this.masterGain) return;
    const bufferSize = this.ctx.sampleRate * 2;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = (Math.random() * 2 - 1) * 0.012;
    }

    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;
    noise.loop = true;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(320, this.ctx.currentTime);

    noise.connect(filter);
    filter.connect(this.masterGain);
    noise.start();
    this.noiseNode = noise;
  }

  private startHarmonicDrone() {
    if (!this.ctx || !this.masterGain) return;
    const freqs = [73.42, 110.0, 146.83, 185.0];
    this.droneOscs = [];

    freqs.forEach((freq, idx) => {
      if (!this.ctx || !this.masterGain) return;
      const osc = this.ctx.createOscillator();
      const oscGain = this.ctx.createGain();

      osc.type = idx === 0 ? 'triangle' : 'sine';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

      oscGain.gain.setValueAtTime(0.06 / (idx + 1), this.ctx.currentTime);
      osc.connect(oscGain);
      oscGain.connect(this.masterGain);

      osc.start();
      this.droneOscs.push(osc);
    });
  }

  public stop() {
    if (this.audioElement) {
      try {
        this.audioElement.pause();
        this.audioElement.currentTime = 0;
        this.audioElement.src = '';
      } catch {
        // silent
      }
      this.audioElement = null;
    }
    if (this.noiseNode) {
      try {
        (this.noiseNode as AudioScheduledSourceNode).stop();
      } catch {
        // silent
      }
      this.noiseNode.disconnect();
      this.noiseNode = null;
    }
    this.droneOscs.forEach((osc) => {
      try {
        osc.stop();
      } catch {
        // silent
      }
      osc.disconnect();
    });
    this.droneOscs = [];
    this.currentMode = 'off';
    this.isUsingSyntheticFallback = false;
  }

  public getMode(): AmbientAtmosphere {
    return this.currentMode;
  }
}

export const ambientSound = new AmbientAudioEngine();

