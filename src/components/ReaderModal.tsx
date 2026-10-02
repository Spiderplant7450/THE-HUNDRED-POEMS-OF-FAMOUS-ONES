import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  ChevronLeft,
  ChevronRight,
  Volume2,
  Play,
  Pause,
  RotateCcw,
  Bookmark,
  CheckCircle,
  Copy,
  Check,
  Type,
  Maximize2,
  Minimize2,
  BookOpen,
  Lightbulb,
  Layers,
  Sparkles,
  Info,
} from 'lucide-react';
import { Poem, ReadingTheme, TypographySetting, FontSize, PoemFont, UIMode, PoetInfo } from '../types';
import { THEME_STYLES, MODERN_THEME_STYLES } from '../utils/themeStyles';
import { reciter, POET_TONES, PoetTone } from '../utils/audioReciter';
import { PoetHoverCard } from './PoetHoverCard';
import { VerseLineWithGloss } from './VerseLineWithGloss';

interface ReaderModalProps {
  poem: Poem | null;
  isOpen: boolean;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  theme: ReadingTheme;
  onThemeChange: (theme: ReadingTheme) => void;
  isBookmarked: boolean;
  isRead: boolean;
  onToggleBookmark: (id: number) => void;
  onToggleRead: (id: number) => void;
  hasPrev: boolean;
  hasNext: boolean;
  uiMode?: UIMode;
  onSelectPoet?: (poet: PoetInfo) => void;
}

type ReaderTab = 'verses' | 'meaning';

// Helper to cleanly extract drop cap initial letter, respecting quotes or apostrophes (e.g. 'Tis, “O)
function getDropCapParts(text: string): { dropChar: string; rest: string } {
  if (!text) return { dropChar: '', rest: '' };
  const match = text.match(/^(['"’“”])?([A-Za-z0-9])/);
  if (match) {
    const fullInitial = (match[1] || '') + match[2];
    return {
      dropChar: fullInitial,
      rest: text.slice(fullInitial.length),
    };
  }
  return {
    dropChar: text.charAt(0),
    rest: text.slice(1),
  };
}

export const ReaderModal: React.FC<ReaderModalProps> = ({
  poem,
  isOpen,
  onClose,
  onPrev,
  onNext,
  theme,
  onThemeChange,
  isBookmarked,
  isRead,
  onToggleBookmark,
  onToggleRead,
  hasPrev,
  hasNext,
  uiMode = 'classic',
  onSelectPoet,
}) => {
  const [activeTab, setActiveTab] = useState<ReaderTab>('verses');
  const [typography, setTypography] = useState<TypographySetting>({
    fontFamily: 'cormorant',
    fontSize: 'md',
    lineHeight: 'relaxed',
    dropCap: true,
  });

  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [isAudioPaused, setIsAudioPaused] = useState(false);
  const [activeSpeakingLine, setActiveSpeakingLine] = useState<number | null>(null);
  const [poetTone, setPoetTone] = useState<PoetTone>('classical-bard');
  const [activeVoiceName, setActiveVoiceName] = useState<string>('');
  const [selectedVoiceURI, setSelectedVoiceURI] = useState<string>('');
  const [availableVoices, setAvailableVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [typeMenuTab, setTypeMenuTab] = useState<'voice' | 'typography'>('voice');
  const [speechRate, setSpeechRate] = useState(0.84); // Measured lyrical poetic cadence
  const [copied, setCopied] = useState(false);
  const [showTypeMenu, setShowTypeMenu] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);

  // Setup recitation callbacks & detect voices
  useEffect(() => {
    const syncVoices = () => {
      setActiveVoiceName(reciter.getActiveVoiceDescription());
      setAvailableVoices(reciter.getAvailableVoices());
    };
    syncVoices();

    reciter.setCallbacks(
      (lineIdx) => {
        setActiveSpeakingLine(lineIdx);
      },
      () => {
        setIsPlayingAudio(false);
        setIsAudioPaused(false);
        setActiveSpeakingLine(null);
      }
    );

    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.addEventListener('voiceschanged', syncVoices);
      return () => {
        window.speechSynthesis.removeEventListener('voiceschanged', syncVoices);
        reciter.stop();
      };
    }

    return () => {
      reciter.stop();
    };
  }, []);

  // Auto-scroll to currently reciting verse
  useEffect(() => {
    if (activeSpeakingLine !== null) {
      const el = document.getElementById(`recite-line-${activeSpeakingLine}`);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    }
  }, [activeSpeakingLine]);

  // Stop recitation when poem changes or modal closes
  useEffect(() => {
    reciter.stop();
    setIsPlayingAudio(false);
    setIsAudioPaused(false);
    setActiveSpeakingLine(null);
    setActiveTab('verses');
  }, [poem?.id, isOpen]);

  // Refresh voice info when opened
  useEffect(() => {
    if (isOpen) {
      setActiveVoiceName(reciter.getActiveVoiceDescription());
    }
  }, [isOpen]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft' && hasPrev) {
        onPrev();
      } else if (e.key === 'ArrowRight' && hasNext) {
        onNext();
      } else if (e.key === ' ') {
        const target = e.target as HTMLElement | null;
        const isInteractive =
          target &&
          (target.tagName === 'INPUT' ||
            target.tagName === 'TEXTAREA' ||
            target.tagName === 'SELECT' ||
            target.tagName === 'BUTTON' ||
            target.isContentEditable);
        if (!isInteractive) {
          e.preventDefault();
          toggleAudioPlayback();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, hasPrev, hasNext, isPlayingAudio, isAudioPaused]);

  if (!isOpen || !poem) return null;

  const currentTheme = THEME_STYLES[theme];
  const modernTheme = MODERN_THEME_STYLES[theme];
  const isModern = uiMode === 'modern';

  // Responsive design tokens
  const containerBg = isModern ? modernTheme.bg : currentTheme.bg;
  const containerBorder = isModern ? modernTheme.border : currentTheme.border;
  const headerBg = isModern ? modernTheme.cardBg : currentTheme.cardBg;
  const primaryText = isModern ? modernTheme.text : currentTheme.text;
  const secondaryText = isModern ? modernTheme.textMuted : currentTheme.subtext;

  const toggleAudioPlayback = () => {
    if (!isPlayingAudio) {
      setIsPlayingAudio(true);
      setIsAudioPaused(false);
      reciter.recitePoem(poem.lines, 0, speechRate);
    } else if (isAudioPaused) {
      reciter.resume();
      setIsAudioPaused(false);
    } else {
      reciter.pause();
      setIsAudioPaused(true);
    }
  };

  const handleStopAudio = () => {
    reciter.stop();
    setIsPlayingAudio(false);
    setIsAudioPaused(false);
    setActiveSpeakingLine(null);
  };

  const handleRateChange = (newRate: number) => {
    setSpeechRate(newRate);
    reciter.setRate(newRate);
  };

  const handleVoiceSelect = (uri: string) => {
    setSelectedVoiceURI(uri);
    reciter.setSelectedVoice(uri ? uri : null);
    setActiveVoiceName(reciter.getActiveVoiceDescription());
    if (isPlayingAudio && !isAudioPaused && activeSpeakingLine !== null) {
      reciter.recitePoem(poem.lines, activeSpeakingLine, speechRate);
    }
  };

  const handleToneChange = (newTone: PoetTone) => {
    setPoetTone(newTone);
    reciter.setTone(newTone);
    const newRate = POET_TONES[newTone]?.rate ?? 0.84;
    setSpeechRate(newRate);
    setActiveVoiceName(reciter.getActiveVoiceDescription());
    if (isPlayingAudio && !isAudioPaused && activeSpeakingLine !== null) {
      reciter.recitePoem(poem.lines, activeSpeakingLine, newRate);
    }
  };

  const handleLineClick = (lineIndex: number) => {
    setIsPlayingAudio(true);
    setIsAudioPaused(false);
    reciter.recitePoem(poem.lines, lineIndex, speechRate);
  };

  const handleCopyPoem = () => {
    const text = `${poem.title.toUpperCase()}\nby ${poem.author} (${poem.year})\n\n${poem.lines.join(
      '\n'
    )}\n\n--- Meaning ---\n${poem.meaning}\n\nPreserved in THE HUNDRED POEMS OF FAMOUS ONES`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Font sizing map (increased for supreme readability on all devices)
  const fontSizeClasses: Record<FontSize, string> = {
    sm: 'text-base sm:text-lg leading-relaxed',
    md: 'text-lg sm:text-xl leading-relaxed',
    lg: 'text-xl sm:text-2xl leading-loose',
    xl: 'text-2xl sm:text-3xl leading-loose',
  };

  const fontFamClasses: Record<PoemFont, string> = {
    cormorant: 'font-poem',
    cinzel: 'font-royal',
    classic: 'font-serif',
    modern: 'font-sans-ui',
  };

  let runningLineCount = 0;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/85 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.96 }}
          className={`w-full ${
            isFullScreen ? 'h-full max-w-none rounded-none' : 'max-w-4xl h-[90vh]'
          } ${containerBg} border ${containerBorder} shadow-2xl flex flex-col relative overflow-hidden transition-all duration-300 theme-${theme} ${
            isModern ? 'font-sans-ui rounded-none' : 'rounded-2xl'
          }`}
          data-theme={theme}
        >
          {/* Top Accent Stripe / Header */}
          {isModern ? (
            <div className={`h-8 w-full border-b ${modernTheme.border} ${modernTheme.pillBg} ${modernTheme.pillText} px-4 flex items-center justify-between font-mono text-[11px] uppercase tracking-wider shrink-0`}>
              <span>ARCHIVE // THE HUNDRED POEMS OF FAMOUS ONES</span>
              <span>POEM {poem ? poem.romanId : ''}</span>
            </div>
          ) : (
            <div className="h-1.5 w-full grid grid-cols-4 shrink-0">
              <div className="bg-[#793327]" />
              <div className="bg-[#c2ae93]" />
              <div className="bg-[#d6b43e]" />
              <div className="bg-[#547076]" />
            </div>
          )}

          {/* Modal Header & Controls */}
          <div className={`border-b ${containerBorder} shrink-0 ${headerBg}`}>
            {/* Tier 1: Poem identification & Action Controls */}
            <div className="px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between gap-3">
              {/* Left: Poem identification & Title */}
              <div className="min-w-0 flex-1">
                <div className="flex items-center space-x-2">
                  <span
                    className={`text-xs font-bold tracking-widest text-[#d6b43e] uppercase ${
                      isModern ? 'font-mono' : 'font-royal'
                    }`}
                  >
                    POEM {poem.romanId} · #{poem.id.toString().padStart(3, '0')}
                  </span>
                  <span className={`text-xs ${secondaryText} hidden sm:inline`}>
                    · {poem.era}
                  </span>
                </div>
                <h3
                  className={`text-base sm:text-lg md:text-xl font-bold ${primaryText} truncate leading-tight mt-0.5 ${
                    isModern ? 'font-sans-ui font-black uppercase tracking-tight' : 'font-royal'
                  }`}
                  title={poem.title}
                >
                  {poem.title}
                </h3>
              </div>

              {/* Right: Audio recitation & reading options */}
              <div className="flex items-center space-x-1 sm:space-x-1.5 shrink-0">
              {/* Recitation play/pause */}
              <button
                id="reader-recite-btn"
                onClick={toggleAudioPlayback}
                className={`h-8 sm:h-8.5 px-2.5 sm:px-3 ${isModern ? 'rounded-none' : 'rounded-lg'} text-xs font-bold border transition-all flex items-center space-x-1.5 cursor-pointer whitespace-nowrap shrink-0 ${
                  isPlayingAudio
                    ? 'border-[#d6b43e] bg-[#d6b43e]/20 text-[#d6b43e]'
                    : isModern
                    ? `${modernTheme.cardBg} ${modernTheme.cardHover} ${modernTheme.text} border ${modernTheme.border}`
                    : `border-stone-500/40 ${secondaryText} hover:${primaryText}`
                }`}
                title={isPlayingAudio ? (isAudioPaused ? 'Resume' : 'Pause') : 'Recite aloud'}
              >
                {isPlayingAudio && !isAudioPaused ? (
                  <Pause className="w-3.5 h-3.5" />
                ) : (
                  <Play className="w-3.5 h-3.5" />
                )}
                <span className="hidden md:inline">
                  {isPlayingAudio ? (isAudioPaused ? 'Resume' : 'Playing') : 'Recite'}
                </span>
              </button>

              {isPlayingAudio && (
                <button
                  onClick={handleStopAudio}
                  className={`h-8 w-8 sm:h-8.5 sm:w-8.5 inline-flex items-center justify-center ${isModern ? 'rounded-none' : 'rounded-lg'} border ${containerBorder} ${secondaryText} hover:${primaryText} cursor-pointer shrink-0`}
                  title="Stop recitation"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              )}

              {/* Typography & Voice Recitation Menu */}
              <div className="relative shrink-0">
                <button
                  id="reader-typography-btn"
                  onClick={() => setShowTypeMenu(!showTypeMenu)}
                  className={`h-8 w-8 sm:h-8.5 sm:w-8.5 inline-flex items-center justify-center ${isModern ? 'rounded-none' : 'rounded-lg'} border ${containerBorder} ${secondaryText} hover:${primaryText} transition-all cursor-pointer`}
                  title="Voice, Pacing & Typeface"
                >
                  <Type className="w-4 h-4" />
                </button>

                {showTypeMenu && (
                  <div
                    className={`absolute right-0 top-full mt-2 w-80 sm:w-84 ${isModern ? 'rounded-none' : 'rounded-xl'} shadow-2xl border ${containerBorder} ${headerBg} p-4 z-50 backdrop-blur-xl`}
                  >
                    {/* Header & Tabs */}
                    <div className="flex items-center justify-between mb-3 pb-2 border-b border-stone-500/30">
                      <div className="flex items-center space-x-3">
                        <button
                          onClick={() => setTypeMenuTab('voice')}
                          className={`text-xs font-bold uppercase tracking-wider pb-1 transition-all cursor-pointer ${
                            typeMenuTab === 'voice'
                              ? 'text-[#d6b43e] border-b-2 border-[#d6b43e]'
                              : `${secondaryText} hover:${primaryText}`
                          }`}
                        >
                          Poet Voice
                        </button>
                        <button
                          onClick={() => setTypeMenuTab('typography')}
                          className={`text-xs font-bold uppercase tracking-wider pb-1 transition-all cursor-pointer ${
                            typeMenuTab === 'typography'
                              ? 'text-[#d6b43e] border-b-2 border-[#d6b43e]'
                              : `${secondaryText} hover:${primaryText}`
                          }`}
                        >
                          Typography
                        </button>
                      </div>
                      <button
                        onClick={() => setShowTypeMenu(false)}
                        className={`${secondaryText} hover:${primaryText} p-1 cursor-pointer`}
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>

                    {typeMenuTab === 'voice' ? (
                      <div className="space-y-3.5">
                        {/* Voice Profile Tone */}
                        <div>
                          <label className={`text-xs font-bold uppercase tracking-wider ${secondaryText} block mb-1.5`}>
                            Poetic Voice & Tone
                          </label>
                          <div className="space-y-1.5">
                            {[
                              { id: 'classical-bard', label: 'Lyrical Bard (British & Classical)', desc: 'Eloquent, rhythmic Shakespearean verse cadence' },
                              { id: 'poetic-muse', label: 'Poetic Muse (Warm & Melodious)', desc: 'Melodious, heartfelt delivery with fluid warmth' },
                              { id: 'resonant-sage', label: 'Resonant Sage (Majestic & Deep)', desc: 'Dignified, deep chest resonance for solemn verse' },
                              { id: 'contemplative', label: 'Contemplative Solitude (Intimate)', desc: 'Quiet, reverent pace with delicate phrasing' },
                            ].map((t) => (
                              <button
                                key={t.id}
                                onClick={() => handleToneChange(t.id as PoetTone)}
                                className={`w-full text-left px-2.5 py-2 ${isModern ? 'rounded-none' : 'rounded-lg'} border transition-all cursor-pointer ${
                                  poetTone === t.id
                                    ? 'border-[#d6b43e] bg-[#d6b43e]/20 text-[#d6b43e]'
                                    : `border-stone-500/30 ${secondaryText} hover:${primaryText} hover:bg-stone-500/10`
                                }`}
                              >
                                <div className="text-xs font-bold">{t.label}</div>
                                <div className="text-[11px] opacity-75">{t.desc}</div>
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Current Voice Detected & Browser Voice Selector */}
                        <div className={`p-2.5 rounded-lg border border-stone-500/20 bg-stone-500/5 space-y-2`}>
                          <div className="flex items-center justify-between">
                            <span className="text-[11px] font-bold uppercase tracking-wider text-[#d6b43e]">
                              Active Voice
                            </span>
                            <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#d6b43e]/20 text-[#d6b43e] font-semibold">
                              Poetic Cadence
                            </span>
                          </div>
                          <p className={`text-xs ${primaryText} truncate font-medium`}>
                            {activeVoiceName || 'Natural Poetic Voice'}
                          </p>

                          {availableVoices.length > 0 && (
                            <div className="pt-1">
                              <label className={`text-[10px] font-medium ${secondaryText} block mb-1`}>
                                Voice Engine (Auto or Device Voice):
                              </label>
                              <select
                                value={selectedVoiceURI}
                                onChange={(e) => handleVoiceSelect(e.target.value)}
                                className={`w-full text-xs px-2 py-1.5 rounded border border-stone-500/30 bg-stone-900/80 text-[#dfcfb3] focus:outline-none focus:border-[#d6b43e] cursor-pointer`}
                              >
                                <option value="">✨ Auto-Selected Best Poetic Voice</option>
                                {availableVoices.map((v) => (
                                  <option key={v.voiceURI} value={v.voiceURI}>
                                    {v.name} ({v.lang})
                                  </option>
                                ))}
                              </select>
                            </div>
                          )}
                        </div>

                        {/* Recitation Pace */}
                        <div>
                          <label className={`text-xs font-bold uppercase tracking-wider ${secondaryText} block mb-1.5`}>
                            Recitation Pace ({speechRate}x)
                          </label>
                          <div className="flex items-center space-x-1.5">
                            {[
                              { rate: 0.78, label: 'Solemn' },
                              { rate: 0.84, label: 'Poetic' },
                              { rate: 0.92, label: 'Fluent' },
                            ].map((r) => (
                              <button
                                key={r.rate}
                                onClick={() => handleRateChange(r.rate)}
                                className={`flex-1 py-1.5 ${isModern ? 'rounded-none' : 'rounded-lg'} text-xs font-semibold border transition-all cursor-pointer ${
                                  speechRate === r.rate
                                    ? 'border-[#d6b43e] bg-[#d6b43e]/20 text-[#d6b43e]'
                                    : `border-stone-500/40 ${secondaryText}`
                                }`}
                              >
                                {r.label} ({r.rate}x)
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div>
                        {/* Font Family */}
                        <div className="mb-3">
                          <label className={`text-xs font-bold uppercase tracking-wider ${secondaryText} block mb-1.5`}>
                            Typeface
                          </label>
                          <div className="grid grid-cols-2 gap-1.5">
                            {[
                              { id: 'cormorant', label: 'Cormorant' },
                              { id: 'cinzel', label: 'Cinzel' },
                              { id: 'classic', label: 'Georgia' },
                              { id: 'modern', label: 'Modern Sans' },
                            ].map((f) => (
                              <button
                                key={f.id}
                                onClick={() => setTypography({ ...typography, fontFamily: f.id as any })}
                                className={`px-2.5 py-1.5 ${isModern ? 'rounded-none' : 'rounded-lg'} text-xs sm:text-sm text-center border transition-all cursor-pointer ${
                                  typography.fontFamily === f.id
                                    ? 'border-[#d6b43e] bg-[#d6b43e]/20 text-[#d6b43e] font-bold'
                                    : `border-stone-500/40 ${secondaryText}`
                                }`}
                              >
                                {f.label}
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Font Size */}
                        <div className="mb-3">
                          <label className={`text-xs font-bold uppercase tracking-wider ${secondaryText} block mb-1.5`}>
                            Scale
                          </label>
                          <div className="grid grid-cols-4 gap-1">
                            {(['sm', 'md', 'lg', 'xl'] as const).map((size) => (
                              <button
                                key={size}
                                onClick={() => setTypography({ ...typography, fontSize: size })}
                                className={`px-2 py-1.5 ${isModern ? 'rounded-none' : 'rounded-lg'} text-xs font-bold uppercase border transition-all cursor-pointer ${
                                  typography.fontSize === size
                                    ? 'border-[#d6b43e] bg-[#d6b43e]/20 text-[#d6b43e]'
                                    : `border-stone-500/40 ${secondaryText}`
                                }`}
                              >
                                {size}
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Drop Cap */}
                        <div className="flex items-center justify-between pt-2 border-t border-stone-500/30">
                          <span className={`text-xs sm:text-sm ${primaryText}`}>Decorative Drop Cap</span>
                          <input
                            type="checkbox"
                            checked={typography.dropCap}
                            onChange={(e) => setTypography({ ...typography, dropCap: e.target.checked })}
                            className="rounded border-[#547076] text-[#793327] focus:ring-[#793327] cursor-pointer w-4 h-4"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Bookmark */}
              <button
                id="reader-bookmark-btn"
                onClick={() => onToggleBookmark(poem.id)}
                className={`h-8 w-8 sm:h-8.5 sm:w-8.5 inline-flex items-center justify-center ${isModern ? 'rounded-none' : 'rounded-lg'} border transition-all cursor-pointer shrink-0 ${
                  isBookmarked
                    ? 'border-[#d6b43e] bg-[#d6b43e]/20 text-[#d6b43e]'
                    : `${containerBorder} ${secondaryText} hover:${primaryText}`
                }`}
                title={isBookmarked ? 'Bookmarked' : 'Bookmark'}
              >
                <Bookmark className="w-4 h-4" />
              </button>

              {/* Mark Read */}
              <button
                id="reader-read-btn"
                onClick={() => onToggleRead(poem.id)}
                className={`h-8 w-8 sm:h-8.5 sm:w-8.5 inline-flex items-center justify-center ${isModern ? 'rounded-none' : 'rounded-lg'} border transition-all cursor-pointer shrink-0 ${
                  isRead
                    ? 'border-emerald-500/60 bg-emerald-500/20 text-emerald-400'
                    : `${containerBorder} ${secondaryText} hover:${primaryText}`
                }`}
                title={isRead ? 'Mark as Unread' : 'Mark as Read'}
              >
                <CheckCircle className="w-4 h-4" />
              </button>

              {/* Copy */}
              <button
                id="reader-copy-btn"
                onClick={handleCopyPoem}
                className={`h-8 w-8 sm:h-8.5 sm:w-8.5 inline-flex items-center justify-center ${isModern ? 'rounded-none' : 'rounded-lg'} border ${containerBorder} ${secondaryText} hover:${primaryText} transition-all cursor-pointer shrink-0`}
                title="Copy Poem & Meaning"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>

              {/* Fullscreen */}
              <button
                onClick={() => setIsFullScreen(!isFullScreen)}
                className={`hidden sm:inline-flex h-8 w-8 sm:h-8.5 sm:w-8.5 items-center justify-center ${isModern ? 'rounded-none' : 'rounded-lg'} border ${containerBorder} ${secondaryText} hover:${primaryText} transition-all cursor-pointer shrink-0`}
                title={isFullScreen ? 'Exit Fullscreen' : 'Fullscreen'}
              >
                {isFullScreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
              </button>

              {/* Close */}
              <button
                id="reader-close-btn"
                onClick={onClose}
                className={`h-8 w-8 sm:h-8.5 sm:w-8.5 inline-flex items-center justify-center ${isModern ? 'rounded-none' : 'rounded-lg'} border ${containerBorder} ${secondaryText} hover:${primaryText} hover:bg-stone-500/20 transition-all cursor-pointer shrink-0 ml-0.5 sm:ml-1`}
                title="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Tier 2: Dedicated Segmented Reader Tabs */}
          <div className={`px-4 sm:px-6 py-1.5 sm:py-2 border-t ${containerBorder} flex items-center justify-between gap-3 bg-black/10`}>
            <div className={`inline-flex items-center p-0.5 sm:p-1 ${isModern ? `border ${modernTheme.border} ${modernTheme.cardBg} rounded-none` : 'rounded-xl bg-black/20 border border-[#547076]/30'}`}>
              <button
                id="tab-verses-btn"
                onClick={() => setActiveTab('verses')}
                className={`h-7 sm:h-8 px-3 sm:px-4 ${isModern ? 'rounded-none' : 'rounded-lg'} text-xs font-bold uppercase tracking-wider transition-all inline-flex items-center space-x-1.5 cursor-pointer whitespace-nowrap ${
                  activeTab === 'verses'
                    ? isModern
                      ? `${modernTheme.buttonBg} ${modernTheme.buttonText} shadow-xs border ${modernTheme.border}`
                      : 'bg-[#793327] text-[#fdf9f5] shadow-xs'
                    : `${secondaryText} hover:${primaryText}`
                }`}
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Verses</span>
              </button>

              <button
                id="tab-meaning-btn"
                onClick={() => setActiveTab('meaning')}
                className={`h-7 sm:h-8 px-3 sm:px-4 ${isModern ? 'rounded-none' : 'rounded-lg'} text-xs font-bold uppercase tracking-wider transition-all inline-flex items-center space-x-1.5 cursor-pointer whitespace-nowrap ${
                  activeTab === 'meaning'
                    ? isModern
                      ? `${modernTheme.buttonBg} ${modernTheme.buttonText} shadow-xs border ${modernTheme.border}`
                      : 'bg-[#793327] text-[#fdf9f5] shadow-xs'
                    : `${secondaryText} hover:${primaryText}`
                }`}
              >
                <Lightbulb className="w-3.5 h-3.5 text-[#d6b43e]" />
                <span>Meaning</span>
              </button>
            </div>

            {/* Right side of Tier 2: Clean Line & Era Metadata */}
            <div className="flex items-center space-x-2">
              {/* In-verse vocabulary helper badge */}
              <div className={`text-[11px] font-sans-ui ${secondaryText} hidden sm:flex items-center space-x-1.5 px-2.5 py-1 rounded-md bg-stone-500/10 border ${containerBorder}`}>
                <span className="w-1.5 h-1.5 rounded-full bg-[#d6b43e] animate-pulse"></span>
                <span>Hover underlined words for meanings</span>
              </div>

              {/* Reader metadata status on Tier 2 */}
              <div className={`text-[11px] font-mono ${secondaryText} hidden md:flex items-center space-x-2`}>
                <span className="capitalize">{poem.theme}</span>
                <span>·</span>
                <span>{poem.lines.length} lines</span>
              </div>
            </div>
          </div>
        </div>

          {/* Reading Scroll Body */}
          <div className="flex-1 overflow-y-auto p-5 sm:p-10 md:p-14 scrollbar-thin">
            <div className="max-w-2xl mx-auto">
              {/* Poem Header Banner */}
              <div className={`text-center mb-8 pb-6 border-b ${containerBorder}`}>
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <span
                    className={`text-xs sm:text-sm font-bold tracking-[0.25em] text-[#d6b43e] uppercase ${
                      isModern ? 'font-mono' : 'font-royal'
                    }`}
                  >
                    POEM {poem.romanId}
                  </span>
                  <span className={secondaryText}>·</span>
                  <span className={`text-xs sm:text-sm font-sans-ui font-semibold ${secondaryText} uppercase tracking-wider`}>
                    {poem.era}
                  </span>
                </div>

                <h1
                  className={`text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight ${primaryText} mb-3 leading-tight ${
                    isModern ? 'font-sans-ui font-black uppercase' : 'font-royal'
                  }`}
                >
                  {poem.title}
                </h1>

                <p className={`text-sm sm:text-base italic ${secondaryText} font-serif`}>
                  by{' '}
                  <PoetHoverCard authorName={poem.author} theme={theme} onSelectPoet={onSelectPoet}>
                    <strong className={`font-normal ${primaryText} not-italic font-sans-ui font-semibold hover:text-[#d6b43e] cursor-pointer transition-colors border-b border-dotted border-[#d6b43e]/50 pb-0.5`}>
                      {poem.author}
                    </strong>
                  </PoetHoverCard>{' '}
                  ({poem.authorDates})
                </p>

                <p className={`text-xs sm:text-sm font-sans-ui ${secondaryText} mt-1.5 font-medium`}>
                  {poem.authorNationality} · Published {poem.year} · Theme:{' '}
                  <span className="text-[#d6b43e]">{poem.theme}</span>
                </p>
              </div>

              {/* TAB 1: VERSES VIEW */}
              {activeTab === 'verses' && (
                <div>
                  <div
                    className={`space-y-8 ${fontSizeClasses[typography.fontSize]} ${
                      fontFamClasses[typography.fontFamily]
                    }`}
                  >
                    {poem.stanzas.map((stanza, sIdx) => (
                      <div key={sIdx} className="space-y-2.5">
                        {stanza.map((line, lIdx) => {
                          const overallLineIndex = runningLineCount;
                          runningLineCount++;
                          const isLineSpeaking = activeSpeakingLine === overallLineIndex;
                          const isFirstLetter = sIdx === 0 && lIdx === 0 && typography.dropCap;

                          return (
                            <p
                              key={lIdx}
                              id={`recite-line-${overallLineIndex}`}
                              onClick={() => handleLineClick(overallLineIndex)}
                              className={`cursor-pointer transition-all duration-300 px-3.5 py-1.5 -mx-3.5 rounded-lg flex items-baseline relative ${
                                isLineSpeaking
                                  ? theme === 'ecru'
                                    ? 'bg-[#793327]/10 border-l-4 border-l-[#793327] border-y border-r border-[#793327]/25 text-[#2d221a] font-medium shadow-xs'
                                    : 'bg-[#d6b43e]/12 border-l-4 border-l-[#d6b43e] border-y border-r border-[#d6b43e]/30 text-[#fdf9f5] font-medium shadow-[0_0_16px_rgba(214,180,62,0.12)]'
                                  : `${primaryText} hover:bg-stone-500/10 border-l-4 border-transparent`
                              }`}
                              title="Click to recite from this verse"
                            >
                              {isLineSpeaking && (
                                <span className="inline-flex items-center mr-2.5 shrink-0 select-none self-center">
                                  <Volume2 className={`w-4 h-4 ${theme === 'ecru' ? 'text-[#793327]' : 'text-[#d6b43e]'} animate-pulse`} />
                                </span>
                              )}
                              <span className="flex-1">
                                {isFirstLetter ? (
                                  (() => {
                                    const { dropChar, rest } = getDropCapParts(line);
                                    const dropCapThemeColor =
                                      theme === 'ecru'
                                        ? 'text-[#793327]'
                                        : theme === 'noir'
                                        ? 'text-[#e5c158]'
                                        : 'text-[#d6b43e]';
                                    return (
                                      <span className="inline-flex items-baseline flex-wrap">
                                        <span className={`drop-cap ${dropCapThemeColor}`}>
                                          {dropChar}
                                        </span>
                                        <VerseLineWithGloss
                                          line={rest}
                                          poemVocabulary={poem.vocabulary}
                                          theme={theme}
                                        />
                                      </span>
                                    );
                                  })()
                                ) : (
                                  <VerseLineWithGloss
                                    line={line}
                                    poemVocabulary={poem.vocabulary}
                                    theme={theme}
                                  />
                                )}
                              </span>
                            </p>
                          );
                        })}
                      </div>
                    ))}
                  </div>

                  {/* Poetic Meaning & Interpretation Box */}
                  <div className={`mt-14 p-6 ${isModern ? `border border-dashed ${modernTheme.border} ${modernTheme.cardHover}` : `rounded-2xl ${theme === 'ecru' ? 'bg-[#ebd8bf]/40' : 'bg-black/25'} border border-[#d6b43e]/35 shadow-lg`}`}>
                    <div className="flex items-center space-x-2.5 mb-2">
                      <Lightbulb className="w-5 h-5 text-[#d6b43e]" />
                      <h4
                        className={`text-sm sm:text-base font-bold uppercase tracking-wider text-[#d6b43e] ${
                          isModern ? 'font-sans-ui' : 'font-royal'
                        }`}
                      >
                        Poem Meaning & Philosophical Interpretation
                      </h4>
                    </div>
                    <p className={`text-sm sm:text-base font-sans-ui ${primaryText} leading-relaxed mb-4`}>
                      {poem.meaning}
                    </p>
                    <div className={`pt-3 border-t ${containerBorder}`}>
                      <h5 className={`text-xs font-bold uppercase tracking-wider ${secondaryText} mb-1`}>
                        Historical Commentary
                      </h5>
                      <p className={`text-xs sm:text-sm font-sans-ui ${secondaryText} leading-relaxed`}>
                        {poem.commentary}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 2: MEANING & PHILOSOPHY VIEW */}
              {activeTab === 'meaning' && (
                <div className="space-y-6 animate-in fade-in duration-200">
                  <div className={`p-6 sm:p-8 ${isModern ? `border ${modernTheme.border} ${modernTheme.cardBg}` : `rounded-2xl ${theme === 'ecru' ? 'bg-[#ebd8bf]/40' : 'bg-black/30'} border-2 border-[#d6b43e]/40 shadow-xl`}`}>
                    <div className="flex items-center space-x-3 mb-4">
                      <Lightbulb className="w-6 h-6 text-[#d6b43e]" />
                      <h3
                        className={`text-lg sm:text-xl font-bold uppercase tracking-wider text-[#d6b43e] ${
                          isModern ? 'font-sans-ui font-black' : 'font-royal'
                        }`}
                      >
                        Core Philosophical Meaning
                      </h3>
                    </div>

                    <p className={`text-base sm:text-lg font-sans-ui ${primaryText} leading-relaxed mb-6`}>
                      {poem.meaning}
                    </p>

                    <blockquote className="pl-4 border-l-3 border-[#d6b43e] py-2 text-base sm:text-lg italic font-serif text-[#d6b43e] mb-6 bg-[#d6b43e]/5 rounded-r-xl pr-4">
                      “{poem.famousExcerpt}”
                    </blockquote>

                    <div className={`pt-5 border-t ${containerBorder} space-y-2`}>
                      <h4 className={`text-xs sm:text-sm font-bold uppercase tracking-wider ${secondaryText}`}>
                        Historical & Cultural Context
                      </h4>
                      <p className={`text-sm sm:text-base font-sans-ui ${secondaryText} leading-relaxed`}>
                        {poem.commentary}
                      </p>
                    </div>
                  </div>

                  <div className={`p-5 ${isModern ? `border ${modernTheme.border} ${modernTheme.cardBg}` : `rounded-xl ${theme === 'ecru' ? 'bg-[#ebd8bf]/30' : 'bg-[#547076]/10'} border ${currentTheme.border}`} flex items-center justify-between`}>
                    <div>
                      <span className={`text-xs ${secondaryText} block`}>Era & Epoch Theme</span>
                      <strong className={`text-sm ${primaryText}`}>{poem.era} · {poem.theme}</strong>
                    </div>
                    <button
                      onClick={() => setActiveTab('verses')}
                      className={`px-4 py-2 text-xs font-bold uppercase tracking-wider cursor-pointer ${
                        isModern
                          ? `${modernTheme.buttonBg} ${modernTheme.buttonText} border ${modernTheme.border}`
                          : 'rounded-lg bg-[#793327] hover:bg-[#8f3d2f] text-white'
                      }`}
                    >
                      Read Verses
                    </button>
                  </div>
                </div>
              )}

              {/* Bottom Nav */}
              <div className={`flex items-center justify-between mt-12 pt-6 border-t ${containerBorder}`}>
                <button
                  onClick={onPrev}
                  disabled={!hasPrev}
                  className={`flex items-center space-x-2 text-xs sm:text-sm font-bold tracking-wider cursor-pointer ${
                    hasPrev ? 'text-[#d6b43e] hover:underline' : 'opacity-20 cursor-not-allowed text-stone-500'
                  } ${isModern ? 'font-mono' : 'font-royal'}`}
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Previous Poem</span>
                </button>

                <span
                  className={`text-xs sm:text-sm font-bold tracking-widest ${secondaryText} ${
                    isModern ? 'font-mono' : 'font-royal'
                  }`}
                >
                  {poem.romanId} / C · {poem.id}/100
                </span>

                <button
                  onClick={onNext}
                  disabled={!hasNext}
                  className={`flex items-center space-x-2 text-xs sm:text-sm font-bold tracking-wider cursor-pointer ${
                    hasNext ? 'text-[#d6b43e] hover:underline' : 'opacity-20 cursor-not-allowed text-stone-500'
                  } ${isModern ? 'font-mono' : 'font-royal'}`}
                >
                  <span>Next Poem</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
