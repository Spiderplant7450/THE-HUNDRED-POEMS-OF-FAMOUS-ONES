import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, Sparkles, Volume2, ArrowRight, Bookmark, Compass, Lightbulb, BookMarked, Zap } from 'lucide-react';
import { Poem, ReadingTheme, AppView, UIMode } from '../types';
import { THEME_STYLES, MODERN_THEME_STYLES, COLOR_SWATCHES } from '../utils/themeStyles';

interface HomeHeroViewProps {
  theme: ReadingTheme;
  dailyPoem: Poem;
  onReadPoem: (poem: Poem) => void;
  onNavigate: (view: AppView) => void;
  onQuickRecite: (poem: Poem) => void;
  totalPoems: number;
  uiMode?: UIMode;
  readCount?: number;
}

export const HomeHeroView: React.FC<HomeHeroViewProps> = ({
  theme,
  dailyPoem,
  onReadPoem,
  onNavigate,
  onQuickRecite,
  totalPoems,
  uiMode = 'classic',
  readCount = 0,
}) => {
  const currentTheme = THEME_STYLES[theme];
  const modernTheme = MODERN_THEME_STYLES[theme];
  const isModern = uiMode === 'modern';

  // MODERN UI FULL REDESIGN - DYNAMIC THEMES & COMPLETE TITLES
  if (isModern) {
    return (
      <div className={`w-full ${modernTheme.bg} ${modernTheme.text} border-b ${modernTheme.border} font-sans-ui transition-colors duration-300`}>
        {/* Full width split screen container */}
        <div className="max-w-[1500px] mx-auto grid grid-cols-1 lg:grid-cols-2">
          
          {/* LEFT COLUMN: HERO EDITORIAL */}
          <div className={`p-8 sm:p-12 lg:p-16 border-b lg:border-b-0 lg:border-r ${modernTheme.border} flex flex-col justify-between min-h-[600px] lg:min-h-[720px]`}>
            <div>
              {/* Archive Kicker - Complete Title Reference */}
              <div className="flex items-center space-x-3 mb-8">
                <span className={`font-mono text-xs tracking-widest ${modernTheme.textMuted} uppercase`}>
                  ARCHIVE // THE HUNDRED POEMS OF FAMOUS ONES
                </span>
              </div>

              {/* Massive Editorial Headline - COMPLETE TITLE */}
              <h1 className={`text-4xl sm:text-5xl md:text-6xl xl:text-[4.75rem] font-sans-ui font-black uppercase ${modernTheme.text} leading-[0.94] tracking-tight mb-8`}>
                THE HUNDRED<br />
                <span className="text-[#793327]">POEMS OF</span><br />
                FAMOUS ONES.
              </h1>

              {/* Editorial Subtitle */}
              <p className={`font-sans-ui text-base sm:text-lg ${modernTheme.textMuted} max-w-lg leading-relaxed mb-10`}>
                A contemporary index of one hundred canonical poems, complete with audio recitation, contextual meanings, and poetic glossary.
              </p>

              {/* Modern Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 mb-12">
                <button
                  id="modern-start-exploring-btn"
                  onClick={() => onNavigate('archive')}
                  className={`${modernTheme.buttonBg} ${modernTheme.buttonText} font-sans-ui font-bold text-xs uppercase tracking-widest px-8 py-3.5 transition-all shadow-xs cursor-pointer border ${modernTheme.border}`}
                >
                  START EXPLORING
                </button>
                <button
                  id="modern-consult-oracle-btn"
                  onClick={() => onNavigate('oracle')}
                  className={`bg-transparent ${modernTheme.cardHover} ${modernTheme.text} border ${modernTheme.border} font-sans-ui font-bold text-xs uppercase tracking-widest px-8 py-3.5 transition-all cursor-pointer`}
                >
                  CONSULT ORACLE
                </button>
              </div>
            </div>

            {/* Bottom Metrics Bar */}
            <div className={`pt-8 border-t ${modernTheme.border} flex items-end justify-between`}>
              <div>
                <span className={`block font-mono text-[11px] uppercase tracking-widest ${modernTheme.textMuted} mb-1`}>
                  ARCHIVE PROGRESS
                </span>
                <span className={`font-sans-ui font-black text-4xl sm:text-5xl tracking-tight ${modernTheme.text}`}>
                  {String(readCount).padStart(3, '0')}/100
                </span>
              </div>
              <div className="text-right">
                <span className={`block font-mono text-[11px] uppercase tracking-widest ${modernTheme.textMuted} mb-1`}>
                  CANONICAL ARCHIVE
                </span>
                <span className={`font-sans-ui font-black text-2xl sm:text-3xl tracking-tight uppercase ${modernTheme.text}`}>
                  100 VERSES
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: TODAY'S SELECTION CARD & GATEWAYS */}
          <div className={`p-8 sm:p-12 lg:p-16 flex flex-col justify-between ${modernTheme.bg}`}>
            {/* Today's Selection Brutalist Layered Card */}
            <div className="relative mb-10 pt-3">
              {/* Brutalist offset shadow block */}
              <div className={`absolute inset-0 translate-x-3 translate-y-3 ${modernTheme.border === 'border-stone-800' ? 'bg-stone-800' : 'bg-black'}`} />

              {/* Main foreground card */}
              <div className={`relative ${modernTheme.cardBg} border ${modernTheme.border} p-6 sm:p-8`}>
                {/* Top Selection Tab */}
                <div className={`absolute -top-3.5 left-4 ${modernTheme.pillBg} ${modernTheme.pillText} border ${modernTheme.border} px-3 py-0.5 text-[11px] font-bold font-mono uppercase tracking-wider`}>
                  TODAY'S SELECTION
                </div>

                {/* Card Header Row */}
                <div className="flex items-start justify-between gap-4 mb-4 pt-1">
                  <div>
                    <span className={`font-mono text-[11px] uppercase tracking-widest ${modernTheme.textMuted} block mb-1`}>
                      POEM {dailyPoem.romanId} • {dailyPoem.era.toUpperCase()}
                    </span>
                    <h2 className={`text-2xl sm:text-3xl font-black font-sans-ui ${modernTheme.text} uppercase tracking-tight`}>
                      {dailyPoem.title}
                    </h2>
                  </div>
                  <div className="text-right shrink-0">
                    <div className={`text-sm font-bold font-sans-ui ${modernTheme.text} uppercase`}>
                      {dailyPoem.author}
                    </div>
                    <div className={`font-mono text-[11px] ${modernTheme.textMuted}`}>
                      {dailyPoem.authorDates}
                    </div>
                  </div>
                </div>

                {/* Excerpt Quote */}
                <blockquote className={`text-xl sm:text-2xl font-serif ${modernTheme.text} leading-relaxed my-5 italic`}>
                  “{dailyPoem.famousExcerpt}”
                </blockquote>

                {/* Inset dashed commentary / meaning box */}
                <div className={`border border-dashed ${modernTheme.border} p-4 ${modernTheme.cardHover} mb-6`}>
                  <p className={`text-xs sm:text-sm font-sans-ui ${modernTheme.textMuted} leading-relaxed`}>
                    "{dailyPoem.meaning || dailyPoem.commentary}"
                  </p>
                </div>

                {/* Card Action Buttons */}
                <div className="flex flex-wrap items-center gap-3">
                  <button
                    id="modern-open-commentary-btn"
                    onClick={() => onReadPoem(dailyPoem)}
                    className={`${modernTheme.buttonBg} ${modernTheme.buttonText} px-5 py-2.5 font-sans-ui font-bold text-xs uppercase tracking-widest transition-all cursor-pointer border ${modernTheme.border}`}
                  >
                    OPEN COMMENTARY
                  </button>
                  <button
                    id="modern-recitation-btn"
                    onClick={() => onQuickRecite(dailyPoem)}
                    className={`${modernTheme.cardBg} ${modernTheme.cardHover} ${modernTheme.text} border ${modernTheme.border} px-5 py-2.5 font-sans-ui font-bold text-xs uppercase tracking-widest transition-all cursor-pointer`}
                  >
                    RECITATION
                  </button>
                </div>
              </div>
            </div>

            {/* Horizontal rule */}
            <hr className={`border-t ${modernTheme.border} my-6 opacity-30`} />

            {/* 3 Modern Gateways */}
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div
                  onClick={() => onNavigate('archive')}
                  className="cursor-pointer group"
                >
                  <h4 className={`font-mono text-xs sm:text-sm font-bold uppercase tracking-wider ${modernTheme.text} group-hover:text-[#793327] transition-colors mb-1`}>
                    01 // THE 100 POEMS OF FAMOUS ONES
                  </h4>
                  <p className={`text-xs sm:text-sm ${modernTheme.textMuted} leading-relaxed font-sans-ui`}>
                    Explore all one hundred immortal works in Roman sequence from Poem I to Poem C.
                  </p>
                </div>

                <div
                  onClick={() => onNavigate('oracle')}
                  className="cursor-pointer group"
                >
                  <h4 className={`font-mono text-xs sm:text-sm font-bold uppercase tracking-wider ${modernTheme.text} group-hover:text-[#d6b43e] transition-colors mb-1`}>
                    02 // THE ORACLE
                  </h4>
                  <p className={`text-xs sm:text-sm ${modernTheme.textMuted} leading-relaxed font-sans-ui`}>
                    Draw a randomly illuminated poetic card for personal reflection or literary inspiration.
                  </p>
                </div>
              </div>

              <div
                onClick={() => onNavigate('saved')}
                className={`cursor-pointer group pt-4 border-t ${modernTheme.border} opacity-90`}
              >
                <h4 className={`font-mono text-xs sm:text-sm font-bold uppercase tracking-wider ${modernTheme.text} group-hover:text-[#547076] transition-colors mb-1`}>
                  03 // REPOSITORY
                </h4>
                <p className={`text-xs sm:text-sm ${modernTheme.textMuted} leading-relaxed font-sans-ui`}>
                  Keep track of your favorite bookmarked poems and monitor your reading completion progress across all masterpieces.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }

  // CLASSIC HERITAGE HERO VIEW - 100% UNTOUCHED
  return (
    <div className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16`}>
      {/* Editorial Header & Title */}
      <div className="text-center max-w-4xl mx-auto mb-14 sm:mb-18">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block mb-4"
        >
          {isModern ? (
            <span className="text-xs sm:text-sm font-mono font-bold uppercase tracking-[0.25em] text-[#d6b43e] px-4 py-1.5 border border-[#d6b43e]/40 rounded-full bg-[#d6b43e]/10 shadow-xs">
              CANONICAL CENTUM // 100 MASTERPIECES
            </span>
          ) : (
            <span className="text-xs sm:text-sm font-royal font-bold uppercase tracking-[0.3em] text-[#d6b43e] px-4 py-1.5 border border-[#d6b43e]/40 rounded-full bg-[#d6b43e]/5">
              Archival Collection · Centum
            </span>
          )}
        </motion.div>

        {/* Grand Typographic Title */}
        {isModern ? (
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={`text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight uppercase ${currentTheme.text} leading-[1.05] mb-6`}
          >
            THE HUNDRED
            <span className="block text-3xl sm:text-5xl md:text-6xl text-[#d6b43e] mt-2 font-extrabold tracking-normal">
              POEMS OF FAMOUS ONES
            </span>
          </motion.h1>
        ) : (
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={`text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-royal font-extrabold tracking-[0.14em] uppercase ${currentTheme.text} leading-[1.15] mb-6`}
          >
            THE HUNDRED POEMS
            <span className={`block text-2xl sm:text-4xl md:text-5xl tracking-[0.22em] ${currentTheme.subtext} mt-2 font-normal`}>
              OF FAMOUS ONES
            </span>
          </motion.h1>
        )}

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`text-base sm:text-xl md:text-2xl ${
            isModern ? 'font-sans-ui font-medium' : 'font-poem italic'
          } ${currentTheme.textMuted} max-w-2xl mx-auto leading-relaxed mb-8`}
        >
          {isModern
            ? 'A minimalist modern index of 100 world-renowned canonical poems, complete with audio recitation, contextual meanings, and poetic glossary.'
            : '“A sanctuary of one hundred canonical verses, preserved in classical typography for quiet contemplation, deep meaning, and enduring resonance.”'}
        </motion.p>

        {/* Color Palette Display Bar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className={`max-w-xl mx-auto mb-10 p-3.5 rounded-2xl border ${currentTheme.border} ${currentTheme.cardBg} backdrop-blur-sm`}
        >
          <div className="grid grid-cols-4 gap-2 text-left">
            {COLOR_SWATCHES.map((swatch) => (
              <div key={swatch.name} className="flex flex-col space-y-1">
                <div
                  className="h-3.5 sm:h-4.5 rounded-md shadow-xs"
                  style={{ backgroundColor: swatch.hex }}
                />
                <span className={`text-xs font-semibold ${currentTheme.subtext} truncate font-sans-ui`}>
                  {swatch.name}
                </span>
                <span className={`text-xs font-mono opacity-70 truncate hidden sm:inline`}>
                  {swatch.hex}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <button
            id="home-explore-archive-btn"
            onClick={() => onNavigate('archive')}
            className={`px-8 py-3.5 rounded-xl bg-[#793327] hover:bg-[#8f3d2f] text-[#fdf9f5] font-bold text-xs sm:text-sm uppercase tracking-[0.18em] transition-all shadow-md flex items-center space-x-2.5 group ${
              isModern ? 'font-sans-ui' : 'font-royal'
            }`}
          >
            <span>Enter The 100 Poems</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            id="home-consult-oracle-btn"
            onClick={() => onNavigate('oracle')}
            className={`px-8 py-3.5 rounded-xl border border-[#d6b43e]/60 hover:bg-[#d6b43e]/15 text-[#d6b43e] font-bold text-xs sm:text-sm uppercase tracking-[0.18em] transition-all flex items-center space-x-2 ${
              isModern ? 'font-sans-ui' : 'font-royal'
            }`}
          >
            <Sparkles className="w-4 h-4 text-[#d6b43e]" />
            <span>Consult Oracle</span>
          </button>
        </motion.div>
      </div>

      {/* Featured Poem of the Day */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className={`rounded-2xl border ${currentTheme.border} ${
          currentTheme.cardBg
        } p-6 sm:p-10 md:p-12 mb-14 shadow-xl relative overflow-hidden transition-all`}
      >
        {/* Top Palette Accent Lines */}
        <div className="absolute top-0 left-0 right-0 h-1.5 grid grid-cols-4">
          <div className="bg-[#793327]" />
          <div className="bg-[#c2ae93]" />
          <div className="bg-[#d6b43e]" />
          <div className="bg-[#547076]" />
        </div>

        <div className={`flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b ${currentTheme.border} mb-8`}>
          <div>
            <div className="flex items-center space-x-3 mb-2.5">
              <span
                className={`text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-[#d6b43e] ${
                  isModern ? 'font-mono' : 'font-royal'
                }`}
              >
                POEM {dailyPoem.romanId} · TODAY’S SELECTION
              </span>
              <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full border ${currentTheme.border} ${currentTheme.subtext} uppercase tracking-wider font-sans-ui`}>
                {dailyPoem.era}
              </span>
            </div>
            <h2
              className={`text-2xl sm:text-3xl md:text-4xl font-bold ${currentTheme.text} ${
                isModern ? 'font-sans-ui font-black uppercase tracking-tight' : 'font-royal'
              }`}
            >
              {dailyPoem.title}
            </h2>
            <p className={`text-sm sm:text-base ${currentTheme.textMuted} font-sans-ui mt-1`}>
              Written by <strong className={currentTheme.text}>{dailyPoem.author}</strong> ({dailyPoem.authorDates}) ·
              Published {dailyPoem.year} · Theme: <span className="text-[#d6b43e] font-semibold">{dailyPoem.theme}</span>
            </p>
          </div>

          <div className="flex items-center space-x-3 shrink-0">
            <button
              id="home-recite-daily-btn"
              onClick={() => onQuickRecite(dailyPoem)}
              className={`px-4 py-2.5 rounded-xl border ${currentTheme.border} hover:border-[#d6b43e] text-xs sm:text-sm font-bold uppercase tracking-wider ${currentTheme.subtext} hover:text-[#d6b43e] transition-all flex items-center space-x-2`}
            >
              <Volume2 className="w-4 h-4" />
              <span>Listen</span>
            </button>
            <button
              id="home-read-daily-btn"
              onClick={() => onReadPoem(dailyPoem)}
              className="px-5 py-2.5 rounded-xl bg-[#793327] hover:bg-[#8f3d2f] text-[#fdf9f5] text-xs sm:text-sm font-bold uppercase tracking-wider transition-all flex items-center space-x-2 shadow-sm"
            >
              <BookOpen className="w-4 h-4" />
              <span>Read Verses & Meaning</span>
            </button>
          </div>
        </div>

        {/* Verses Excerpt */}
        <blockquote
          className={`my-6 pl-5 border-l-3 border-[#d6b43e] text-lg sm:text-xl md:text-2xl leading-relaxed ${currentTheme.text} ${
            isModern ? 'font-sans-ui font-medium italic' : 'font-poem italic'
          }`}
        >
          “{dailyPoem.famousExcerpt}”
        </blockquote>

        {/* Daily Poem Meaning Spotlight */}
        {dailyPoem.meaning && (
          <div className={`p-4 sm:p-5 rounded-xl border border-[#d6b43e]/30 mt-6 mb-4 ${theme === 'ecru' ? 'bg-[#ebd8bf]/40' : 'bg-black/25'}`}>
            <div className="flex items-center space-x-2 text-xs sm:text-sm font-bold text-[#d6b43e] uppercase tracking-wider mb-1.5">
              <Lightbulb className="w-4 h-4 text-[#d6b43e]" />
              <span>Poem Meaning & Wisdom</span>
            </div>
            <p className={`text-sm sm:text-base font-sans-ui ${currentTheme.text} leading-relaxed`}>
              {dailyPoem.meaning}
            </p>
          </div>
        )}

        <p className={`text-xs sm:text-sm font-sans-ui ${currentTheme.subtext} mt-4 leading-relaxed`}>
          {dailyPoem.commentary}
        </p>
      </motion.div>

      {/* 3 Archival Gateways */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
        <div
          onClick={() => onNavigate('archive')}
          className={`p-6 sm:p-7 rounded-2xl border border-[#547076]/40 ${
            currentTheme.cardBg
          } ${currentTheme.cardHover} transition-all cursor-pointer group flex flex-col justify-between`}
        >
          <div>
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#793327] block mb-2 font-mono">
              01 // TREASURY
            </span>
            <h3
              className={`text-xl sm:text-2xl font-bold ${
                currentTheme.text
              } group-hover:text-[#d6b43e] transition-colors mb-2 ${
                isModern ? 'font-sans-ui font-extrabold' : 'font-royal'
              }`}
            >
              The 100 Canonical Poems
            </h3>
            <p className={`text-sm ${currentTheme.textMuted} font-sans-ui leading-relaxed`}>
              Explore all one hundred immortal works in Roman sequence from Poem I (Ozymandias) to Poem C (The Rubáiyát), with full meanings and vocabulary.
            </p>
          </div>
          <div className="pt-4 mt-6 border-t border-[#547076]/25 flex items-center text-xs sm:text-sm font-bold text-[#d6b43e] uppercase tracking-wider group-hover:translate-x-1 transition-transform">
            <span>Browse Complete Index</span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </div>
        </div>

        <div
          onClick={() => onNavigate('oracle')}
          className={`p-6 sm:p-7 rounded-2xl border border-[#547076]/40 ${
            currentTheme.cardBg
          } ${currentTheme.cardHover} transition-all cursor-pointer group flex flex-col justify-between`}
        >
          <div>
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#d6b43e] block mb-2 font-mono">
              02 // REFLECTION
            </span>
            <h3
              className={`text-xl sm:text-2xl font-bold ${
                currentTheme.text
              } group-hover:text-[#d6b43e] transition-colors mb-2 ${
                isModern ? 'font-sans-ui font-extrabold' : 'font-royal'
              }`}
            >
              The Royal Oracle
            </h3>
            <p className={`text-sm ${currentTheme.textMuted} font-sans-ui leading-relaxed`}>
              Draw a randomly illuminated poetic card for personal reflection, meditation, or literary inspiration with defined meanings.
            </p>
          </div>
          <div className="pt-4 mt-6 border-t border-[#547076]/25 flex items-center text-xs sm:text-sm font-bold text-[#d6b43e] uppercase tracking-wider group-hover:translate-x-1 transition-transform">
            <span>Draw a Card</span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </div>
        </div>

        <div
          onClick={() => onNavigate('saved')}
          className={`p-6 sm:p-7 rounded-2xl border border-[#547076]/40 ${
            currentTheme.cardBg
          } ${currentTheme.cardHover} transition-all cursor-pointer group flex flex-col justify-between`}
        >
          <div>
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#547076] block mb-2 font-mono">
              03 // PERSONAL REPOSITORY
            </span>
            <h3
              className={`text-xl sm:text-2xl font-bold ${
                currentTheme.text
              } group-hover:text-[#d6b43e] transition-colors mb-2 ${
                isModern ? 'font-sans-ui font-extrabold' : 'font-royal'
              }`}
            >
              Saved & Completed Verses
            </h3>
            <p className={`text-sm ${currentTheme.textMuted} font-sans-ui leading-relaxed`}>
              Keep track of your favorite bookmarked poems and monitor your reading completion progress across all 100 canonical masterpieces.
            </p>
          </div>
          <div className="pt-4 mt-6 border-t border-[#547076]/25 flex items-center text-xs sm:text-sm font-bold text-[#d6b43e] uppercase tracking-wider group-hover:translate-x-1 transition-transform">
            <span>Open Saved Verses</span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </div>
        </div>
      </div>
    </div>
  );
};
