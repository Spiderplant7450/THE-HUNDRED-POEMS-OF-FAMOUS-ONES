export type PoetTone =
  | 'classical-bard'
  | 'poetic-muse'
  | 'resonant-sage'
  | 'contemplative'
  | 'deep-baritone'
  | 'resonant-orator';

export interface PoetToneConfig {
  id: PoetTone;
  label: string;
  description: string;
  pitch: number;
  rate: number;
}

export const POET_TONES: Record<PoetTone, PoetToneConfig> = {
  'classical-bard': {
    id: 'classical-bard',
    label: 'Lyrical Bard (Classical & British)',
    description: 'Eloquent, rhythmic cadence reminiscent of classical Shakespearean stage recitation',
    pitch: 1.0,  // Natural, unwarped, crisp voice
    rate: 0.84,  // Lyrical, thoughtful rhythm
  },
  'poetic-muse': {
    id: 'poetic-muse',
    label: 'Poetic Muse (Warm & Melodious)',
    description: 'Gentle, musical, heartfelt delivery with fluid expressive warmth',
    pitch: 1.03, // Warm, clear, musical inflection
    rate: 0.83,  // Deliberate melodious pace
  },
  'resonant-sage': {
    id: 'resonant-sage',
    label: 'Resonant Sage (Majestic & Deep)',
    description: 'Grounded, dignified chest resonance for epic and solemn verses',
    pitch: 0.88, // Dignified baritone without digital rasp
    rate: 0.80,  // Measured, profound gravity
  },
  'contemplative': {
    id: 'contemplative',
    label: 'Contemplative Solitude (Intimate)',
    description: 'Quiet, reverent, reflective pace with delicate poetic breaths',
    pitch: 0.96, // Soft, intimate speaking tone
    rate: 0.78,  // Very thoughtful, slow reflective rhythm
  },
  // Backward compatibility aliases
  'deep-baritone': {
    id: 'deep-baritone',
    label: 'Resonant Sage (Majestic & Deep)',
    description: 'Grounded, dignified chest resonance for epic and solemn verses',
    pitch: 0.88,
    rate: 0.80,
  },
  'resonant-orator': {
    id: 'resonant-orator',
    label: 'Dramatic Orator',
    description: 'Low, profound, theatrical timbre suited for epic heroic verse',
    pitch: 0.85,
    rate: 0.78,
  },
};

// Renowned voices celebrated for poetic, theatrical, or literary delivery across platforms
const POETIC_PREFERRED_VOICES = [
  // Natural / Neural British English (ideal for Shakespeare, Keats, Wordsworth, Shelley)
  'microsoft sonia online',
  'microsoft libby online',
  'microsoft ryan online',
  'microsoft oliver online',
  'microsoft george online',
  'microsoft guy online',
  'microsoft serena online',
  'microsoft jenny online',
  'microsoft aria online',
  'daniel', // Legendary Apple UK English
  'serena', // Apple UK natural expressive
  'arthur', // Apple UK dramatic
  'oliver', // Apple UK expressive
  'kate',   // Apple UK expressive
  'george',
  'google uk english male',
  'google uk english female',
  'google us english',
  'alex',   // Classic Apple high-fidelity voice
  'samantha',
  'victoria',
  'karen',
];

export class PoemReciter {
  private synth: SpeechSynthesis | null = null;
  private currentUtterance: SpeechSynthesisUtterance | null = null;
  private onLineChange: ((lineIndex: number) => void) | null = null;
  private onFinished: (() => void) | null = null;
  private isSpeaking: boolean = false;
  private isPaused: boolean = false;
  private lines: string[] = [];
  private currentLineIndex: number = 0;
  private tone: PoetTone = 'classical-bard';
  private customRate: number | null = null;
  private cachedVoices: SpeechSynthesisVoice[] = [];
  private selectedVoiceURI: string | null = null;

  constructor() {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      this.synth = window.speechSynthesis;
      this.initVoices();
    }
  }

  private initVoices() {
    if (!this.synth) return;
    const load = () => {
      this.cachedVoices = this.synth?.getVoices() || [];
    };
    load();
    if (this.synth.onvoiceschanged !== undefined) {
      this.synth.onvoiceschanged = load;
    }
  }

  public setCallbacks(
    onLineChange: (lineIndex: number) => void,
    onFinished: () => void
  ) {
    this.onLineChange = onLineChange;
    this.onFinished = onFinished;
  }

  public setTone(tone: PoetTone) {
    this.tone = tone;
  }

  public getTone(): PoetTone {
    return this.tone;
  }

  public setRate(newRate: number) {
    this.customRate = newRate;
  }

  public getRate(): number {
    return this.customRate ?? POET_TONES[this.tone].rate;
  }

  public setSelectedVoice(voiceURI: string | null) {
    this.selectedVoiceURI = voiceURI;
  }

  public getSelectedVoiceURI(): string | null {
    return this.selectedVoiceURI;
  }

  public getAvailableVoices(): SpeechSynthesisVoice[] {
    if (!this.synth) return [];
    const voices = this.cachedVoices.length > 0 ? this.cachedVoices : this.synth.getVoices();
    // Return English voices first, sorted with high-quality / natural voices at top
    return [...voices]
      .filter((v) => v.lang.startsWith('en') || v.lang.includes('en'))
      .sort((a, b) => {
        const aNat = /natural|neural|online|enhanced/i.test(a.name);
        const bNat = /natural|neural|online|enhanced/i.test(b.name);
        if (aNat && !bNat) return -1;
        if (!aNat && bNat) return 1;
        return a.name.localeCompare(b.name);
      });
  }

  public getBestVoice(): SpeechSynthesisVoice | null {
    if (!this.synth) return null;
    const voices = this.cachedVoices.length > 0 ? this.cachedVoices : this.synth.getVoices();
    if (voices.length === 0) return null;

    // If user explicitly picked a voice
    if (this.selectedVoiceURI) {
      const explicit = voices.find((v) => v.voiceURI === this.selectedVoiceURI);
      if (explicit) return explicit;
    }

    let bestVoice: SpeechSynthesisVoice | null = null;
    let highestScore = -9999;

    for (const voice of voices) {
      let score = 0;
      const nameLower = voice.name.toLowerCase();
      const uriLower = voice.voiceURI.toLowerCase();
      const langLower = voice.lang.toLowerCase();

      // Only English voices suitable for classical English verses
      if (!langLower.startsWith('en')) {
        score -= 500;
      }

      // British / Commonwealth English has the quintessential classical poetic cadence
      if (langLower.includes('en-gb') || langLower.includes('en_gb') || langLower.includes('uk')) {
        score += 90;
      } else if (langLower.startsWith('en')) {
        score += 40;
      }

      // Natural, Neural, Online, Enhanced voices have authentic human prosody
      if (
        nameLower.includes('natural') ||
        nameLower.includes('neural') ||
        nameLower.includes('online') ||
        nameLower.includes('enhanced') ||
        nameLower.includes('premium')
      ) {
        score += 120;
      }

      // Match against renowned poetic voice names
      for (let i = 0; i < POETIC_PREFERRED_VOICES.length; i++) {
        const preferred = POETIC_PREFERRED_VOICES[i];
        if (nameLower.includes(preferred) || uriLower.includes(preferred)) {
          score += 260 - i * 6;
          break;
        }
      }

      // Tone-specific nuances
      if (this.tone === 'resonant-sage' || this.tone === 'deep-baritone' || this.tone === 'resonant-orator') {
        if (/guy|ryan|daniel|arthur|steffan|male/i.test(nameLower)) {
          score += 50;
        }
      } else if (this.tone === 'poetic-muse') {
        if (/sonia|libby|serena|jenny|aria|samantha|female/i.test(nameLower)) {
          score += 50;
        }
      } else if (this.tone === 'classical-bard') {
        if (/daniel|oliver|arthur|sonia|libby|george|uk|british/i.test(nameLower)) {
          score += 60;
        }
      }

      if (score > highestScore) {
        highestScore = score;
        bestVoice = voice;
      }
    }

    return bestVoice || voices[0] || null;
  }

  public getActiveVoiceDescription(): string {
    const voice = this.getBestVoice();
    if (!voice) return 'Natural Poetic Voice';
    const cleanName = voice.name
      .replace(/Microsoft /g, '')
      .replace(/ Online \(Natural\)/g, ' (Natural)')
      .replace(/ - English \([^)]+\)/g, '');
    return cleanName;
  }

  public recitePoem(lines: string[], startFromLine: number = 0, rate?: number) {
    if (rate !== undefined) {
      this.customRate = rate;
    }
    this.start(lines, startFromLine);
  }

  public start(lines: string[], startFromLine: number = 0) {
    if (!this.synth) return;
    this.stop();
    this.lines = lines;
    this.currentLineIndex = startFromLine;
    this.isSpeaking = true;
    this.isPaused = false;
    this.speakNextLine();
  }

  private speakNextLine() {
    if (!this.synth || !this.isSpeaking) return;

    // Check if previous line had a stanza break
    let isStanzaBreak = false;
    while (
      this.currentLineIndex < this.lines.length &&
      !this.lines[this.currentLineIndex].trim()
    ) {
      this.currentLineIndex++;
      isStanzaBreak = true;
    }

    if (this.currentLineIndex >= this.lines.length) {
      this.isSpeaking = false;
      this.currentLineIndex = 0;
      if (this.onFinished) this.onFinished();
      return;
    }

    const rawLine = this.lines[this.currentLineIndex];
    if (this.onLineChange) {
      this.onLineChange(this.currentLineIndex);
    }

    // Normalize archaic typographic marks for speech synthesis
    // Convert typographic curly apostrophes to straight so synthesizers articulate words correctly
    const textToSpeak = rawLine
      .replace(/[’‘]/g, "'")
      .replace(/[“”]/g, '"')
      .replace(/—/g, ' , ')
      .trim();

    const config = POET_TONES[this.tone] || POET_TONES['classical-bard'];
    const utterance = new SpeechSynthesisUtterance(textToSpeak);

    // Poetic vocal pitch and cadence
    utterance.pitch = config.pitch;
    utterance.rate = this.customRate ?? config.rate;

    const voice = this.getBestVoice();
    if (voice) {
      utterance.voice = voice;
    }

    // Natural poetic pause calculated from verse cadence and punctuation
    const trimmed = rawLine.trim();
    let pauseDuration = 320; // Standard verse breath

    if (trimmed.endsWith('.') || trimmed.endsWith('!') || trimmed.endsWith('?')) {
      pauseDuration = 520; // Full cadence stop
    } else if (trimmed.endsWith(';') || trimmed.endsWith(':')) {
      pauseDuration = 400; // Poetic caesura
    } else if (trimmed.endsWith(',') || trimmed.endsWith('—') || trimmed.endsWith('–')) {
      pauseDuration = 300; // Lyrical breath
    }

    // Contemplative inter-stanza pause
    if (isStanzaBreak) {
      pauseDuration = Math.max(pauseDuration, 680);
    }

    utterance.onend = () => {
      if (this.isSpeaking && !this.isPaused) {
        this.currentLineIndex++;
        setTimeout(() => {
          this.speakNextLine();
        }, pauseDuration);
      }
    };

    utterance.onerror = (e) => {
      if (e.error !== 'interrupted' && e.error !== 'canceled') {
        this.stop();
      }
    };

    this.currentUtterance = utterance;
    this.synth.speak(utterance);
  }

  public pause() {
    if (this.synth && this.isSpeaking) {
      this.synth.pause();
      this.isPaused = true;
    }
  }

  public resume() {
    if (this.synth && this.isPaused) {
      this.synth.resume();
      this.isPaused = false;
    }
  }

  public stop() {
    if (this.synth) {
      this.synth.cancel();
    }
    this.isSpeaking = false;
    this.isPaused = false;
    this.currentLineIndex = 0;
    if (this.onFinished) this.onFinished();
  }

  public getStatus() {
    return {
      isSpeaking: this.isSpeaking,
      isPaused: this.isPaused,
      currentLineIndex: this.currentLineIndex,
      activeVoice: this.getActiveVoiceDescription(),
      tone: this.tone,
    };
  }
}

export const reciter = new PoemReciter();
