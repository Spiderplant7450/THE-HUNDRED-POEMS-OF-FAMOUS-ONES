import React, { useState, useRef, useEffect } from 'react';
import { Bookmark, Sparkles, BookOpen, Volume2, VolumeX, Sun, Moon, ChevronDown, Check } from 'lucide-react';
import { ReadingTheme, AppView, UIMode } from '../types';
import { THEME_STYLES, MODERN_THEME_STYLES } from '../utils/themeStyles';
import { AmbientAtmosphere, ambientSound } from '../utils/ambientSound';

interface RoyalHeaderProps {
  currentView: AppView;
  onNavigate: (view: AppView) => void;
  theme: ReadingTheme;
  onThemeChange: (theme: ReadingTheme) => void;
  bookmarksCount: number;
  readCount: number;
  totalCount: number;
  ambientMode: AmbientAtmosphere;
  onAmbientChange: (mode: AmbientAtmosphere) => void;
  uiMode: UIMode;
  onUIModeToggle: () => void;
}

export const RoyalHeader: React.FC<RoyalHeaderProps> = ({
  currentView,
  onNavigate,
  theme,
  onThemeChange,
  bookmarksCount,
  readCount,
  totalCount,
  ambientMode,
  onAmbientChange,
  uiMode,
  onUIModeToggle,
}) => {
  const currentTheme = THEME_STYLES[theme];
  const modernTheme = MODERN_THEME_STYLES[theme];
  const [isThemeOpen, setIsThemeOpen] = useState(false);
  const [isAmbientOpen, setIsAmbientOpen] = useState(false);
  const [volume, setVolume] = useState(() => ambientSound.getVolume());

  const themeRef = useRef<HTMLDivElement>(null);
  const ambientRef = useRef<HTMLDivElement>(null);

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (themeRef.current && !themeRef.current.contains(e.target as Node)) {
        setIsThemeOpen(false);
      }
      if (ambientRef.current && !ambientRef.current.contains(e.target as Node)) {
        setIsAmbientOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    ambientSound.setVolume(val);
  };

  const isModern = uiMode === 'modern';

  return (
    <header
      className={`sticky top-0 z-40 border-b transition-colors duration-300 ${
        isModern
          ? `${modernTheme.headerBg} ${modernTheme.border} ${modernTheme.text} font-sans-ui`
          : `${currentTheme.border} ${currentTheme.bg} backdrop-blur-md`
      }`}
    >
      {/* Top 4-Color Palette Signature Stripe */}
      <div className="h-1.5 w-full grid grid-cols-4">
        <div className="bg-[#793327]" title="Hay's Russet" />
        <div className="bg-[#c2ae93]" title="Ecru" />
        <div className="bg-[#d6b43e]" title="Olive Ocher" />
        <div className="bg-[#547076]" title="Dark Medici Blue" />
      </div>

      <div className={isModern ? 'w-full px-4 sm:px-6 lg:px-12' : 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'}>
        <div className="flex items-center justify-between h-16 sm:h-18 md:h-18 lg:h-20 gap-2 sm:gap-3 lg:gap-6">
          {/* LOGO TYPOGRAPHY - COMPLETE NAME WITHOUT WRAPPING */}
          <div
            onClick={() => onNavigate('home')}
            className="cursor-pointer group select-none py-1 shrink-0"
          >
            {isModern ? (
              <div className="flex flex-col">
                <span className={`font-sans-ui font-black text-sm sm:text-base md:text-lg lg:text-xl tracking-tight uppercase leading-tight whitespace-nowrap ${modernTheme.text}`}>
                  THE HUNDRED POEMS
                </span>
                <span className={`font-sans-ui font-black text-[10px] sm:text-[11px] lg:text-xs tracking-[0.22em] uppercase whitespace-nowrap ${modernTheme.textMuted} mt-0.5`}>
                  OF FAMOUS ONES
                </span>
              </div>
            ) : (
              <div className="flex flex-col">
                <span
                  className={`font-royal font-bold text-sm sm:text-base md:text-lg lg:text-xl tracking-[0.14em] uppercase whitespace-nowrap leading-tight ${currentTheme.text} group-hover:text-[#d6b43e] transition-colors`}
                >
                  THE HUNDRED POEMS
                </span>
                <span
                  className={`font-royal text-[10px] sm:text-[11px] lg:text-xs tracking-[0.24em] uppercase whitespace-nowrap ${currentTheme.subtext} group-hover:text-[#d6b43e] transition-colors mt-0.5`}
                >
                  OF FAMOUS ONES
                </span>
              </div>
            )}
          </div>

          {/* Navigation Links with uniform height, balanced padding, and no wrapping */}
          {isModern ? (
            <nav className="hidden md:flex items-center space-x-1 lg:space-x-1.5 xl:space-x-2 shrink-0">
              <button
                id="nav-overview-btn"
                onClick={() => onNavigate('home')}
                className={`h-9 px-2.5 lg:px-3.5 inline-flex items-center justify-center text-xs font-sans-ui font-bold uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap ${
                  currentView === 'home'
                    ? `${modernTheme.text} font-black border-b-2 border-current`
                    : `${modernTheme.textMuted} hover:${modernTheme.text}`
                }`}
              >
                OVERVIEW
              </button>

              <button
                id="nav-archive-btn"
                onClick={() => onNavigate('archive')}
                className={`h-9 px-2.5 lg:px-3.5 inline-flex items-center justify-center text-xs font-sans-ui font-bold uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap ${
                  currentView === 'archive'
                    ? `${modernTheme.text} font-black border-b-2 border-current`
                    : `${modernTheme.textMuted} hover:${modernTheme.text}`
                }`}
              >
                <span className="hidden xl:inline">THE 100 POEMS</span>
                <span className="xl:hidden">POEMS</span>
              </button>

              <button
                id="nav-poets-btn"
                onClick={() => onNavigate('poets')}
                className={`h-9 px-2.5 lg:px-3.5 inline-flex items-center justify-center text-xs font-sans-ui font-bold uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap ${
                  currentView === 'poets'
                    ? `${modernTheme.text} font-black border-b-2 border-current`
                    : `${modernTheme.textMuted} hover:${modernTheme.text}`
                }`}
              >
                POETS
              </button>

              <button
                id="nav-oracle-btn"
                onClick={() => onNavigate('oracle')}
                className={`h-9 px-2.5 lg:px-3.5 inline-flex items-center justify-center text-xs font-sans-ui font-bold uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap ${
                  currentView === 'oracle'
                    ? `${modernTheme.text} font-black border-b-2 border-current`
                    : `${modernTheme.textMuted} hover:${modernTheme.text}`
                }`}
              >
                ORACLE
              </button>

              <button
                id="nav-saved-btn"
                onClick={() => onNavigate('saved')}
                className={`h-9 px-2.5 lg:px-3.5 inline-flex items-center justify-center text-xs font-sans-ui font-bold uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap ${
                  currentView === 'saved'
                    ? `${modernTheme.text} font-black border-b-2 border-current`
                    : `${modernTheme.textMuted} hover:${modernTheme.text}`
                }`}
              >
                SAVED ({bookmarksCount})
              </button>
            </nav>
          ) : (
            <nav className="hidden md:flex items-center space-x-1 lg:space-x-1.5 xl:space-x-2 shrink-0">
              <button
                id="nav-home-btn"
                onClick={() => onNavigate('home')}
                className={`h-9 px-2.5 lg:px-3.5 inline-flex items-center justify-center rounded-lg text-xs uppercase transition-all font-royal tracking-wider font-semibold whitespace-nowrap cursor-pointer ${
                  currentView === 'home'
                    ? `bg-[#793327] text-[#fdf9f5] font-bold shadow-xs`
                    : `${currentTheme.textMuted} hover:${currentTheme.text} hover:bg-stone-500/10`
                }`}
              >
                Home
              </button>

              <button
                id="nav-archive-btn"
                onClick={() => onNavigate('archive')}
                className={`h-9 px-2.5 lg:px-3.5 inline-flex items-center justify-center rounded-lg text-xs uppercase transition-all font-royal tracking-wider font-semibold whitespace-nowrap cursor-pointer ${
                  currentView === 'archive'
                    ? `bg-[#793327] text-[#fdf9f5] font-bold shadow-xs`
                    : `${currentTheme.textMuted} hover:${currentTheme.text} hover:bg-stone-500/10`
                }`}
              >
                <span className="hidden xl:inline">The 100 Poems</span>
                <span className="xl:hidden">Poems</span>
              </button>

              <button
                id="nav-poets-btn"
                onClick={() => onNavigate('poets')}
                className={`h-9 px-2.5 lg:px-3.5 inline-flex items-center justify-center rounded-lg text-xs uppercase transition-all font-royal tracking-wider font-semibold whitespace-nowrap cursor-pointer ${
                  currentView === 'poets'
                    ? `bg-[#793327] text-[#fdf9f5] font-bold shadow-xs`
                    : `${currentTheme.textMuted} hover:${currentTheme.text} hover:bg-stone-500/10`
                }`}
              >
                <span className="hidden xl:inline">Poets & Bards</span>
                <span className="xl:hidden">Poets</span>
              </button>

              <button
                id="nav-oracle-btn"
                onClick={() => onNavigate('oracle')}
                className={`h-9 px-2.5 lg:px-3.5 inline-flex items-center justify-center rounded-lg text-xs uppercase transition-all font-royal tracking-wider font-semibold whitespace-nowrap cursor-pointer ${
                  currentView === 'oracle'
                    ? `bg-[#793327] text-[#fdf9f5] font-bold shadow-xs`
                    : `${currentTheme.textMuted} hover:${currentTheme.text} hover:bg-stone-500/10`
                }`}
              >
                <span className="hidden xl:inline">Royal Oracle</span>
                <span className="xl:hidden">Oracle</span>
              </button>

              <button
                id="nav-saved-btn"
                onClick={() => onNavigate('saved')}
                className={`h-9 px-2.5 lg:px-3.5 inline-flex items-center justify-center rounded-lg text-xs uppercase transition-all font-royal tracking-wider font-semibold whitespace-nowrap cursor-pointer ${
                  currentView === 'saved'
                    ? `bg-[#793327] text-[#fdf9f5] font-bold shadow-xs`
                    : `${currentTheme.textMuted} hover:${currentTheme.text} hover:bg-stone-500/10`
                }`}
              >
                <span>Saved</span>
                {bookmarksCount > 0 && (
                  <span className="ml-1.5 px-1.5 py-0.5 text-[10px] font-sans-ui rounded-full bg-[#d6b43e] text-[#12191b] font-bold leading-none">
                    {bookmarksCount}
                  </span>
                )}
              </button>
            </nav>
          )}

          {/* Right Controls Bar - Exact same 36px (h-9) height across all items */}
          <div className="flex items-center space-x-1.5 sm:space-x-2 shrink-0">
            {/* Reading Progress (Classic only) */}
            {!isModern && (
              <div className="hidden xl:inline-flex h-9 items-center space-x-1.5 px-3 rounded-lg border border-[#547076]/30 text-xs font-sans-ui shrink-0 select-none">
                <span className="text-[#c2ae93]">Read:</span>
                <strong className={currentTheme.text}>{readCount}</strong>
                <span className="text-[#547076]">/</span>
                <span className={currentTheme.textMuted}>{totalCount}</span>
              </div>
            )}

            {/* MODERN / CLASSIC UI SWITCHER BUTTON */}
            {isModern ? (
              <button
                id="nav-ui-mode-toggle-btn"
                onClick={onUIModeToggle}
                className={`h-9 px-2.5 lg:px-3.5 inline-flex items-center justify-center text-xs font-bold uppercase tracking-wider font-sans-ui transition-all shadow-xs cursor-pointer border whitespace-nowrap shrink-0 ${modernTheme.buttonBg} ${modernTheme.buttonText} ${modernTheme.border}`}
                title="Switch back to Classic Heritage UI"
              >
                <span className="hidden xl:inline">ROYAL HERITAGE</span>
                <span className="xl:hidden">HERITAGE</span>
              </button>
            ) : (
              <button
                id="nav-ui-mode-toggle-btn"
                onClick={onUIModeToggle}
                className={`h-9 px-2.5 lg:px-3.5 inline-flex items-center justify-center rounded-lg border text-xs font-sans-ui font-semibold tracking-wider uppercase transition-all duration-200 shadow-xs cursor-pointer whitespace-nowrap shrink-0 ${
                  theme === 'ecru'
                    ? 'border-[#2d221a] bg-[#2d221a] text-[#faf6f0] hover:bg-[#45362a] hover:border-[#45362a]'
                    : theme === 'russet'
                    ? 'border-[#793327]/50 bg-[#251815] text-[#f5ebd7] hover:bg-[#36221d] hover:border-[#a04838] hover:text-white'
                    : theme === 'noir'
                    ? 'border-stone-700/60 bg-[#161618] text-[#e5e5e5] hover:bg-[#242428] hover:border-stone-500 hover:text-white'
                    : 'border-[#547076]/40 bg-[#172327] text-[#ede5d8] hover:bg-[#203136] hover:border-[#7ea1a7] hover:text-white'
                }`}
                title="Switch to Modern UI Edition"
              >
                <span className="hidden xl:inline">Modern Edition</span>
                <span className="xl:hidden">Modern</span>
              </button>
            )}

            {/* Ambient Sound Atmosphere Dropdown with Volume Slider */}
            <div className="relative shrink-0" ref={ambientRef}>
              <button
                id="header-ambient-btn"
                onClick={() => {
                  setIsAmbientOpen(!isAmbientOpen);
                  setIsThemeOpen(false);
                }}
                className={`h-9 px-2.5 inline-flex items-center justify-center space-x-1 transition-all cursor-pointer ${
                  isModern
                    ? ambientMode !== 'off'
                      ? `${modernTheme.border} ${modernTheme.tagBg} ${modernTheme.tagText} border`
                      : `border ${modernTheme.tagBorder} opacity-75 hover:opacity-100`
                    : ambientMode !== 'off'
                    ? 'rounded-lg border border-[#d6b43e] bg-[#d6b43e]/15 text-[#d6b43e]'
                    : `rounded-lg border border-[#547076]/40 ${currentTheme.textMuted} hover:${currentTheme.text}`
                }`}
                title="Atmosphere Sound"
              >
                {ambientMode === 'off' ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                <ChevronDown className="w-3 h-3 opacity-60" />
              </button>

              {isAmbientOpen && (
                <div
                  className={`absolute right-0 top-full mt-2 w-64 rounded-xl shadow-2xl border ${
                    isModern
                      ? `${modernTheme.cardBg} ${modernTheme.border} ${modernTheme.text}`
                      : `border-[#547076]/40 ${currentTheme.cardBg}`
                  } p-3.5 z-50 backdrop-blur-xl animate-in fade-in zoom-in-95 duration-150`}
                >
                  <div className={`px-2 py-1 text-xs font-bold tracking-widest uppercase border-b mb-2 flex items-center justify-between ${
                    isModern ? `${modernTheme.accentText === 'text-white' ? 'text-inherit font-mono' : 'text-inherit'} border-current/20` : 'text-[#d6b43e] border-[#547076]/30'
                  }`}>
                    <span>Atmosphere</span>
                    <span className="text-[11px] font-mono opacity-70">
                      {ambientMode === 'off' ? 'MUTED' : ambientMode.toUpperCase()}
                    </span>
                  </div>

                  <div className="space-y-1 mb-3">
                    {[
                      { mode: 'off', label: 'Silence', desc: 'Natural quietude' },
                      { mode: 'rain', label: 'Twilight Rain', desc: 'Gentle falling raindrops' },
                      { mode: 'fireplace', label: 'Warm Fireplace', desc: 'Crackling hearth embers' },
                      { mode: 'library', label: 'Imperial Library', desc: 'Soft wind and calm halls' },
                      { mode: 'drone', label: 'Harmonic Strings', desc: 'Warm royal acoustic chords' },
                    ].map((item) => (
                      <button
                        key={item.mode}
                        onClick={() => {
                          onAmbientChange(item.mode as any);
                          if (item.mode === 'off') {
                            setIsAmbientOpen(false);
                          }
                        }}
                        className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all flex items-center justify-between cursor-pointer ${
                          ambientMode === item.mode
                            ? isModern
                              ? `${modernTheme.pillBg} ${modernTheme.pillText} font-bold`
                              : 'text-[#d6b43e] font-bold bg-[#d6b43e]/15 border border-[#d6b43e]/40'
                            : isModern
                            ? `${modernTheme.text} ${modernTheme.cardHover}`
                            : `${currentTheme.text} hover:bg-stone-500/15`
                        }`}
                      >
                        <div>
                          <div className="font-medium">{item.label}</div>
                          <div className="text-xs opacity-70">{item.desc}</div>
                        </div>
                        {ambientMode === item.mode && <Check className="w-4 h-4 shrink-0" />}
                      </button>
                    ))}
                  </div>

                  {/* Volume Slider */}
                  <div className="pt-2 border-t border-current/20 px-2">
                    <div className="flex items-center justify-between text-xs opacity-80 mb-1.5">
                      <span>Atmosphere Volume</span>
                      <span className="font-mono text-xs">{Math.round(volume * 100)}%</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="1"
                      step="0.05"
                      value={volume}
                      onChange={handleVolumeChange}
                      className="w-full cursor-pointer accent-[#d6b43e]"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Theme Selector Palette Dropdown — Matching 36px height */}
            <div className="relative shrink-0" ref={themeRef}>
              <button
                id="header-theme-btn"
                onClick={() => {
                  setIsThemeOpen(!isThemeOpen);
                  setIsAmbientOpen(false);
                }}
                className={`h-9 px-2.5 inline-flex items-center justify-center space-x-1.5 transition-all cursor-pointer ${
                  isModern
                    ? `border ${modernTheme.border} ${modernTheme.cardBg} ${modernTheme.text} shadow-xs`
                    : `rounded-lg border border-[#547076]/40 ${currentTheme.cardBg} ${currentTheme.textMuted} hover:${currentTheme.text}`
                }`}
                title="Select Historic Color Palette"
              >
                {theme === 'ecru' ? (
                  <Sun className="w-4 h-4 text-[#793327]" />
                ) : (
                  <Moon className="w-4 h-4 text-[#d6b43e]" />
                )}
                <ChevronDown className="w-3 h-3 opacity-70" />
              </button>

              {isThemeOpen && (
                <div
                  className={`absolute right-0 top-full mt-2 w-64 rounded-xl shadow-2xl border ${
                    isModern
                      ? `${modernTheme.cardBg} ${modernTheme.border} ${modernTheme.text}`
                      : `border-[#547076]/40 ${currentTheme.cardBg}`
                  } p-2.5 z-50 backdrop-blur-xl animate-in fade-in zoom-in-95 duration-150`}
                >
                  <div className={`px-3 py-1.5 text-xs font-bold tracking-widest uppercase border-b mb-2 ${
                    isModern ? 'font-mono text-inherit border-current/20' : 'text-[#d6b43e] border-[#547076]/30'
                  }`}>
                    {isModern ? 'Modern Palette Theme' : 'Historic Palette'}
                  </div>
                  <div className="space-y-1">
                    {(['medici', 'ecru', 'russet', 'noir'] as ReadingTheme[]).map((th) => {
                      const itemTheme = THEME_STYLES[th];
                      const modItemTheme = MODERN_THEME_STYLES[th];
                      const paletteDot =
                        th === 'medici'
                          ? '#547076'
                          : th === 'ecru'
                          ? '#c2ae93'
                          : th === 'russet'
                          ? '#793327'
                          : '#d6b43e';

                      return (
                        <button
                          key={th}
                          onClick={() => {
                            onThemeChange(th);
                            setIsThemeOpen(false);
                          }}
                          className={`w-full text-left px-3 py-2 rounded-lg text-sm font-sans-ui transition-all flex items-center justify-between ${
                            theme === th
                              ? isModern
                                ? `${modItemTheme.pillBg} ${modItemTheme.pillText} font-bold`
                                : 'text-[#d6b43e] font-bold bg-[#d6b43e]/15 border border-[#d6b43e]/40'
                              : isModern
                              ? `${modernTheme.text} ${modernTheme.cardHover}`
                              : `${currentTheme.text} hover:bg-stone-500/15`
                          }`}
                        >
                          <div className="flex items-center space-x-2.5">
                            <span
                              className="w-3.5 h-3.5 rounded-full border border-black/20 shadow-xs shrink-0"
                              style={{ backgroundColor: paletteDot }}
                            />
                            <div className="flex flex-col">
                              <span className="font-semibold text-xs sm:text-sm">
                                {isModern ? modItemTheme.label : itemTheme.label}
                              </span>
                            </div>
                          </div>
                          {theme === th && <Check className="w-4 h-4 shrink-0" />}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Mobile Nav Switcher */}
            <div className="flex md:hidden items-center space-x-1">
              <button
                onClick={() => onNavigate('archive')}
                className={`px-2 py-1 rounded text-[11px] font-bold uppercase cursor-pointer ${
                  currentView === 'archive'
                    ? 'bg-[#793327] text-white'
                    : 'text-stone-300 hover:text-white'
                }`}
              >
                Poems
              </button>
              <button
                onClick={() => onNavigate('poets')}
                className={`px-2 py-1 rounded text-[11px] font-bold uppercase cursor-pointer ${
                  currentView === 'poets'
                    ? 'bg-[#793327] text-white'
                    : 'text-stone-300 hover:text-white'
                }`}
              >
                Poets
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
