import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Search,
  BookOpen,
  Calendar,
  Compass,
  Feather,
  X,
  ExternalLink,
  ChevronRight,
  Quote,
  Sparkles,
} from 'lucide-react';
import { PoetInfo, Poem, ReadingTheme, UIMode } from '../types';
import { POETS } from '../data/poets';
import { POEMS } from '../data/poems';
import { THEME_STYLES, MODERN_THEME_STYLES } from '../utils/themeStyles';

interface PoetsGalleryViewProps {
  theme?: ReadingTheme;
  uiMode?: UIMode;
  onSelectPoem: (poem: Poem) => void;
  onNavigateHome?: () => void;
  onNavigateArchive?: () => void;
  initialSelectedPoetId?: string | null;
}

export function PoetsGalleryView({
  theme = 'medici',
  uiMode = 'classic',
  onSelectPoem,
  onNavigateHome,
  onNavigateArchive,
  initialSelectedPoetId = null,
}: PoetsGalleryViewProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedEra, setSelectedEra] = useState<string>('All');
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});
  const [activePoetModal, setActivePoetModal] = useState<PoetInfo | null>(() => {
    if (initialSelectedPoetId) {
      return POETS.find((p) => p.id === initialSelectedPoetId) || null;
    }
    return null;
  });

  const isModern = uiMode === 'modern';
  const modernColors = MODERN_THEME_STYLES[theme];
  const classicColors = THEME_STYLES[theme];

  // Colors & Typography mappings
  const pageBg = isModern ? modernColors.bg : classicColors.bg;
  const pageText = isModern ? modernColors.text : classicColors.text;
  const pageTextMuted = isModern ? modernColors.textMuted : classicColors.subtext;
  const pageBorder = isModern ? modernColors.border : classicColors.border;

  const cardBg = isModern
    ? `${modernColors.cardBg} border ${modernColors.border} ${modernColors.cardHover}`
    : `${classicColors.cardBg} border ${classicColors.border} ${classicColors.cardHover}`;

  const modalBg = isModern
    ? `${modernColors.cardBg} ${modernColors.text} border ${modernColors.border}`
    : `${classicColors.cardBg} ${classicColors.text} border ${classicColors.border}`;

  // Extract unique eras
  const eras = useMemo(() => {
    const set = new Set<string>();
    POETS.forEach((p) => set.add(p.era));
    return ['All', ...Array.from(set)];
  }, []);

  // Filtered poets
  const filteredPoets = useMemo(() => {
    return POETS.filter((poet) => {
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        poet.name.toLowerCase().includes(q) ||
        poet.summary.toLowerCase().includes(q) ||
        poet.nationality.toLowerCase().includes(q) ||
        poet.history.toLowerCase().includes(q) ||
        poet.era.toLowerCase().includes(q);

      const matchesEra = selectedEra === 'All' || poet.era === selectedEra;

      return matchesSearch && matchesEra;
    });
  }, [searchQuery, selectedEra]);

  // Find poems by active modal poet
  const activePoetPoems = useMemo(() => {
    if (!activePoetModal) return [];
    return POEMS.filter(
      (p) =>
        activePoetModal.poemIds.includes(p.id) ||
        p.author.toLowerCase().includes(activePoetModal.name.toLowerCase()) ||
        activePoetModal.name.toLowerCase().includes(p.author.toLowerCase())
    );
  }, [activePoetModal]);

  const handleImageError = (poetId: string) => {
    setFailedImages((prev) => ({ ...prev, [poetId]: true }));
  };

  return (
    <div className={`min-h-screen py-8 sm:py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${pageBg}`}>
      <div className="max-w-7xl mx-auto">
        {/* Page Hero Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div
            className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-widest mb-3 sm:mb-4 ${
              isModern
                ? `${modernColors.tagBg} ${modernColors.tagText} border ${modernColors.tagBorder} font-mono`
                : 'border border-[#d6b43e]/30 bg-[#d6b43e]/10 text-[#d6b43e] font-royal'
            }`}
          >
            <Feather className="w-3.5 h-3.5" />
            <span>Portraits & Chronicles</span>
          </div>

          <h1
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4 ${
              isModern
                ? `font-sans-ui font-black uppercase tracking-tight ${modernColors.text}`
                : 'font-royal text-[#d6b43e]'
            }`}
          >
            The Immortal Bards & Poets
          </h1>

          <p
            className={`text-sm sm:text-base leading-relaxed max-w-2xl mx-auto ${
              isModern ? `${modernColors.textMuted} font-sans-ui` : `${classicColors.subtext} font-serif`
            }`}
          >
            Historical chronicles and authentic oval portraits of the master poets featured in{' '}
            <em className="font-semibold">The Hundred and One Famous Poems</em>. Explore their origins, literary philosophies, and enduring verses.
          </p>

          {/* Search Bar */}
          <div className="mt-7 sm:mt-8 relative max-w-xl mx-auto">
            <Search
              className={`absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 ${
                isModern ? modernColors.textMuted : 'text-[#d6b43e]'
              }`}
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search poets by name, nation, era, or history..."
              className={`w-full pl-11 pr-10 py-3 text-sm font-sans-ui transition-all focus:outline-none focus:ring-2 ${
                isModern
                  ? `rounded-none border ${modernColors.border} ${modernColors.cardBg} ${modernColors.text} placeholder:${modernColors.textMuted} focus:ring-stone-500`
                  : `rounded-full border border-[#d6b43e]/30 ${
                      theme === 'ecru'
                        ? 'bg-white text-[#2d221a] placeholder-stone-400 focus:ring-[#793327]'
                        : 'bg-black/30 text-[#dfcfb3] placeholder-stone-500 focus:ring-[#d6b43e]'
                    }`
              }`}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-stone-400 hover:text-white transition-colors"
                title="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Era Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 mt-5">
            {eras.map((era) => {
              const isSelected = selectedEra === era;
              return (
                <button
                  key={era}
                  onClick={() => setSelectedEra(era)}
                  className={`px-3.5 py-1.5 text-xs font-semibold tracking-wider transition-all cursor-pointer ${
                    isModern
                      ? `rounded-none uppercase font-mono ${
                          isSelected
                            ? `${modernColors.pillBg} ${modernColors.pillText} shadow-xs border ${modernColors.border}`
                            : `${modernColors.cardBg} border ${modernColors.border} ${modernColors.textMuted} hover:${modernColors.text}`
                        }`
                      : `rounded-full font-sans-ui ${
                          isSelected
                            ? 'bg-[#d6b43e] text-stone-900 shadow-md scale-105 font-bold'
                            : 'bg-stone-500/15 hover:bg-stone-500/25 opacity-85'
                        }`
                  }`}
                >
                  {era}
                </button>
              );
            })}
          </div>
        </div>

        {/* Poets Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredPoets.map((poet) => {
            const isImgFailed = failedImages[poet.id];

            return (
              <motion.div
                key={poet.id}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
                className={`p-6 flex flex-col justify-between transition-all duration-300 group ${
                  isModern ? 'rounded-none' : 'rounded-2xl'
                } ${cardBg}`}
              >
                <div>
                  {/* OVAL SHAPED PORTRAIT MEDALLION */}
                  <div className="flex justify-center mb-5">
                    <div className="relative group-hover:scale-105 transition-transform duration-300">
                      <div
                        className={`w-28 h-36 rounded-[50%] overflow-hidden flex items-center justify-center relative ${
                          isModern
                            ? `border-2 ${modernColors.border} shadow-md bg-stone-900 ring-2 ring-stone-500/20`
                            : 'border-3 border-[#d6b43e] shadow-[0_6px_20px_rgba(0,0,0,0.4)] bg-stone-900 ring-4 ring-[#793327]/25'
                        }`}
                      >
                        {!isImgFailed ? (
                          <img
                            src={poet.portraitUrl}
                            alt={poet.name}
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover grayscale contrast-110 sepia-[0.2] transition-transform duration-500 group-hover:scale-110"
                            loading="lazy"
                            onError={() => handleImageError(poet.id)}
                          />
                        ) : null}

                        {/* Monogram Cameo Medal */}
                        <div
                          className={`absolute inset-0 flex flex-col items-center justify-center ${
                            isModern ? 'bg-stone-900 text-stone-100' : 'bg-stone-950 text-[#d6b43e]'
                          } pointer-events-none ${!isImgFailed ? '-z-10' : ''}`}
                        >
                          <span className={`text-2xl font-bold ${isModern ? 'font-mono' : 'font-royal'}`}>
                            {poet.name
                              .split(' ')
                              .map((n) => n[0])
                              .slice(0, 2)
                              .join('')}
                          </span>
                          <span className="text-[9px] uppercase tracking-widest opacity-60 mt-0.5">Poet</span>
                        </div>
                      </div>

                      {/* Archival Seal Badge */}
                      <div
                        className={`absolute -bottom-2.5 left-1/2 -translate-x-1/2 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest whitespace-nowrap shadow-sm ${
                          isModern
                            ? `rounded-none ${modernColors.pillBg} ${modernColors.pillText} font-mono border ${modernColors.border}`
                            : 'rounded-full bg-[#d6b43e] text-stone-950 font-royal border border-white/30'
                        }`}
                      >
                        {poet.nationality}
                      </div>
                    </div>
                  </div>

                  {/* Poet Name & Dates */}
                  <div className="text-center mt-3">
                    <h3
                      className={`text-xl font-bold tracking-wide transition-colors ${
                        isModern
                          ? `font-sans-ui font-black uppercase tracking-tight ${modernColors.text}`
                          : 'font-royal text-[#d6b43e] group-hover:text-amber-300'
                      }`}
                    >
                      {poet.name}
                    </h3>

                    <p
                      className={`text-xs mt-1 flex items-center justify-center gap-1 ${
                        isModern ? `${modernColors.textMuted} font-mono` : `${classicColors.subtext} font-sans-ui opacity-80`
                      }`}
                    >
                      <Calendar className={`w-3 h-3 ${isModern ? modernColors.textMuted : 'text-[#d6b43e]'}`} />
                      <span>{poet.dates}</span>
                    </p>

                    <div className="mt-2">
                      <span
                        className={`inline-block px-2 py-0.5 text-[10px] uppercase font-bold tracking-wider ${
                          isModern
                            ? `${modernColors.tagBg} ${modernColors.tagText} border ${modernColors.tagBorder} font-mono`
                            : 'rounded bg-stone-500/15 border border-stone-500/25 opacity-85 font-sans-ui'
                        }`}
                      >
                        {poet.era}
                      </span>
                    </div>
                  </div>

                  {/* Famous Quote */}
                  <div
                    className={`mt-4 p-3 border text-xs leading-relaxed ${
                      isModern
                        ? `rounded-none ${modernColors.cardBg} border ${modernColors.border} font-sans-ui ${modernColors.textMuted}`
                        : `rounded-lg bg-black/15 border-stone-500/15 italic font-serif opacity-90 ${classicColors.text}`
                    }`}
                  >
                    <Quote
                      className={`w-3 h-3 inline-block mr-1 -mt-1 ${
                        isModern ? modernColors.textMuted : 'text-[#d6b43e] opacity-75'
                      }`}
                    />
                    <span>"{poet.famousQuote}"</span>
                  </div>

                  {/* Summary */}
                  <p
                    className={`mt-3 text-xs leading-relaxed line-clamp-3 ${
                      isModern ? `${modernColors.textMuted} font-sans-ui` : `${classicColors.text} opacity-85 font-sans-ui`
                    }`}
                  >
                    {poet.summary}
                  </p>
                </div>

                {/* Card Footer Actions */}
                <div
                  className={`mt-6 pt-4 flex items-center justify-between border-t ${
                    isModern ? modernColors.border : 'border-stone-500/20'
                  }`}
                >
                  <span
                    className={`text-xs flex items-center gap-1.5 ${
                      isModern ? `${modernColors.textMuted} font-mono` : 'opacity-75 font-sans-ui'
                    }`}
                  >
                    <BookOpen className={`w-3.5 h-3.5 ${isModern ? modernColors.textMuted : 'text-[#d6b43e]'}`} />
                    <span>{poet.poemIds.length} in collection</span>
                  </span>

                  <button
                    type="button"
                    onClick={() => setActivePoetModal(poet)}
                    className={`inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider cursor-pointer group-hover:translate-x-0.5 transition-transform ${
                      isModern
                        ? `${modernColors.text} hover:underline font-mono`
                        : 'text-[#d6b43e] hover:text-white font-royal'
                    }`}
                  >
                    <span>Read Biography</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Empty State */}
        {filteredPoets.length === 0 && (
          <div className="text-center py-20">
            <Feather className={`w-12 h-12 opacity-40 mx-auto mb-4 ${isModern ? modernColors.textMuted : 'text-[#d6b43e]'}`} />
            <h3
              className={`text-lg font-bold ${
                isModern ? `font-sans-ui uppercase ${modernColors.text}` : 'font-royal text-[#d6b43e]'
              }`}
            >
              No Poets Found
            </h3>
            <p className={`text-sm mt-1 ${isModern ? modernColors.textMuted : 'opacity-75 font-serif'}`}>
              Try searching with a different term or resetting the era filter.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedEra('All');
              }}
              className={`mt-4 px-4 py-2 text-xs font-bold uppercase tracking-wider cursor-pointer ${
                isModern
                  ? `${modernColors.buttonBg} ${modernColors.buttonText} border ${modernColors.border} font-mono`
                  : 'rounded-full bg-[#d6b43e] text-stone-900'
              }`}
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* Comprehensive In-Depth Poet Biography Modal */}
      <AnimatePresence>
        {activePoetModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto"
            onClick={() => setActivePoetModal(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 16 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 16 }}
              className={`relative w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl p-6 sm:p-8 ${
                isModern ? 'rounded-none border' : 'rounded-2xl border'
              } ${modalBg}`}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setActivePoetModal(null)}
                className={`absolute top-5 right-5 p-2 transition-colors cursor-pointer ${
                  isModern
                    ? `border ${modernColors.border} ${modernColors.cardBg} ${modernColors.text}`
                    : 'rounded-full bg-stone-500/15 hover:bg-stone-500/30 text-stone-300 hover:text-white'
                }`}
                title="Close biography"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header: Grand Oval Portrait & Metadata */}
              <div
                className={`flex flex-col sm:flex-row items-center sm:items-start gap-6 pb-6 border-b ${
                  isModern ? modernColors.border : 'border-stone-500/25'
                }`}
              >
                {/* Grand Oval Portrait */}
                <div className="shrink-0">
                  <div
                    className={`w-32 h-40 rounded-[50%] overflow-hidden flex items-center justify-center relative ${
                      isModern
                        ? `border-2 ${modernColors.border} shadow-xl bg-stone-900 ring-2 ring-stone-400/20`
                        : 'border-3 border-[#d6b43e] shadow-xl bg-stone-900 ring-4 ring-[#793327]/35'
                    }`}
                  >
                    {!failedImages[activePoetModal.id] ? (
                      <img
                        src={activePoetModal.portraitUrl}
                        alt={activePoetModal.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover grayscale contrast-115 sepia-[0.2]"
                        onError={() => handleImageError(activePoetModal.id)}
                      />
                    ) : null}

                    {/* Fallback Cameo */}
                    <div
                      className={`absolute inset-0 flex flex-col items-center justify-center ${
                        isModern ? 'bg-stone-900 text-stone-100' : 'bg-stone-950 text-[#d6b43e]'
                      } pointer-events-none ${!failedImages[activePoetModal.id] ? '-z-10' : ''}`}
                    >
                      <span className={`text-3xl font-bold ${isModern ? 'font-mono' : 'font-royal'}`}>
                        {activePoetModal.name
                          .split(' ')
                          .map((n) => n[0])
                          .slice(0, 2)
                          .join('')}
                      </span>
                      <span className="text-[10px] uppercase tracking-widest opacity-60 mt-1">Poet</span>
                    </div>
                  </div>
                </div>

                {/* Details */}
                <div className="text-center sm:text-left flex-1">
                  <div
                    className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider mb-2 ${
                      isModern
                        ? `${modernColors.tagBg} ${modernColors.tagText} border ${modernColors.tagBorder} font-mono`
                        : 'rounded-full bg-[#d6b43e]/15 border border-[#d6b43e]/30 text-[#d6b43e]'
                    }`}
                  >
                    <Sparkles className="w-3 h-3" />
                    <span>{activePoetModal.era} Movement</span>
                  </div>

                  <h2
                    className={`text-2xl sm:text-3xl font-bold ${
                      isModern
                        ? `font-sans-ui font-black uppercase tracking-tight ${modernColors.text}`
                        : 'font-royal text-[#d6b43e]'
                    }`}
                  >
                    {activePoetModal.name}
                  </h2>

                  <p
                    className={`text-sm mt-1 flex items-center justify-center sm:justify-start gap-2 ${
                      isModern ? `${modernColors.textMuted} font-mono` : `${classicColors.subtext} font-sans-ui`
                    }`}
                  >
                    <Calendar className={`w-4 h-4 ${isModern ? modernColors.textMuted : 'text-[#d6b43e]'}`} />
                    <span>{activePoetModal.dates}</span>
                  </p>

                  <p
                    className={`text-xs mt-1 ${
                      isModern ? `${modernColors.textMuted} font-sans-ui` : `${classicColors.subtext} font-sans-ui`
                    }`}
                  >
                    Nationality: <strong className="opacity-100">{activePoetModal.nationality}</strong>
                    {activePoetModal.pdfPage && (
                      <span className="ml-3">
                        Page in 1922 Original Edition:{' '}
                        <strong className={isModern ? modernColors.text : 'text-[#d6b43e]'}>
                          {activePoetModal.pdfPage}
                        </strong>
                      </span>
                    )}
                  </p>

                  {/* Famous Quote Banner */}
                  <div
                    className={`mt-4 p-3 border text-xs sm:text-sm ${
                      isModern
                        ? `rounded-none ${modernColors.cardBg} border ${modernColors.border} ${modernColors.text} font-sans-ui`
                        : 'rounded-lg bg-black/20 border-[#d6b43e]/20 italic font-serif text-[#f6e5ad]'
                    }`}
                  >
                    "{activePoetModal.famousQuote}"
                  </div>
                </div>
              </div>

              {/* History & Biography Content */}
              <div className="py-6 space-y-6">
                <div>
                  <h4
                    className={`text-sm font-bold uppercase tracking-wider mb-2 flex items-center gap-2 ${
                      isModern ? `${modernColors.text} font-mono` : 'text-[#d6b43e] font-royal'
                    }`}
                  >
                    <Feather className="w-4 h-4" />
                    <span>Historical Chronicle & Life Story</span>
                  </h4>
                  <p
                    className={`text-sm sm:text-base leading-relaxed whitespace-pre-line text-justify ${
                      isModern ? `${modernColors.text} font-sans-ui` : `${classicColors.text} font-serif`
                    }`}
                  >
                    {activePoetModal.history}
                  </p>
                </div>

                <div>
                  <h4
                    className={`text-sm font-bold uppercase tracking-wider mb-2 flex items-center gap-2 ${
                      isModern ? `${modernColors.text} font-mono` : 'text-[#d6b43e] font-royal'
                    }`}
                  >
                    <Compass className="w-4 h-4" />
                    <span>Literary Style & Poetic Craft</span>
                  </h4>
                  <p
                    className={`text-sm leading-relaxed p-3.5 border ${
                      isModern
                        ? `rounded-none ${modernColors.cardBg} border ${modernColors.border} ${modernColors.text} font-sans-ui`
                        : `rounded-lg bg-stone-500/10 border-stone-500/15 font-sans-ui ${classicColors.text}`
                    }`}
                  >
                    {activePoetModal.literaryStyle}
                  </p>
                </div>

                {/* Poems in Anthology by this Poet */}
                <div>
                  <h4
                    className={`text-sm font-bold uppercase tracking-wider mb-3 flex items-center gap-2 ${
                      isModern ? `${modernColors.text} font-mono` : 'text-[#d6b43e] font-royal'
                    }`}
                  >
                    <BookOpen className="w-4 h-4" />
                    <span>Featured Poems in this Collection ({activePoetPoems.length})</span>
                  </h4>

                  {activePoetPoems.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {activePoetPoems.map((poem) => (
                        <div
                          key={poem.id}
                          onClick={() => {
                            setActivePoetModal(null);
                            onSelectPoem(poem);
                          }}
                          className={`p-3.5 border transition-all cursor-pointer flex items-center justify-between group ${
                            isModern
                              ? `rounded-none ${modernColors.cardBg} border ${modernColors.border} ${modernColors.cardHover}`
                              : 'rounded-xl border-stone-500/20 bg-stone-500/10 hover:bg-[#d6b43e]/15 hover:border-[#d6b43e]'
                          }`}
                        >
                          <div>
                            <span
                              className={`text-[10px] font-mono block ${
                                isModern ? modernColors.textMuted : 'text-[#d6b43e]'
                              }`}
                            >
                              NO. {poem.id} · {poem.year}
                            </span>
                            <h5
                              className={`text-sm font-bold line-clamp-1 transition-colors ${
                                isModern
                                  ? `font-sans-ui ${modernColors.text} group-hover:underline`
                                  : 'font-royal text-stone-100 group-hover:text-[#d6b43e]'
                              }`}
                            >
                              {poem.title}
                            </h5>
                          </div>
                          <span
                            className={`text-xs font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform ${
                              isModern ? modernColors.text : 'text-[#d6b43e]'
                            }`}
                          >
                            <span>Read</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                          </span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className={`text-xs italic ${isModern ? modernColors.textMuted : 'opacity-75 font-serif'}`}>
                      Poems by this author are catalogued in the extended prose and classical archive.
                    </p>
                  )}
                </div>
              </div>

              {/* Modal Footer */}
              <div
                className={`pt-4 border-t flex justify-end ${
                  isModern ? modernColors.border : 'border-stone-500/20'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setActivePoetModal(null)}
                  className={`px-5 py-2 text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                    isModern
                      ? `${modernColors.buttonBg} ${modernColors.buttonText} border ${modernColors.border} font-mono`
                      : 'rounded-full bg-[#d6b43e] text-stone-950 hover:bg-amber-300'
                  }`}
                >
                  Close Biography
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
