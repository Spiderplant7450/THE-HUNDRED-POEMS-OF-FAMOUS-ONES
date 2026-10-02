import React from 'react';
import { motion } from 'motion/react';
import { Bookmark, CheckCircle, Volume2, BookOpen, Lightbulb } from 'lucide-react';
import { Poem, ReadingTheme, UIMode, PoetInfo } from '../types';
import { THEME_STYLES, MODERN_THEME_STYLES } from '../utils/themeStyles';
import { PoetHoverCard } from './PoetHoverCard';

interface PoemCardProps {
  poem: Poem;
  theme: ReadingTheme;
  isBookmarked: boolean;
  isRead: boolean;
  onToggleBookmark: (id: number) => void;
  onToggleRead: (id: number) => void;
  onReadPoem: (poem: Poem) => void;
  onQuickRecite: (poem: Poem) => void;
  onSelectPoet?: (poet: PoetInfo) => void;
  viewLayout: 'grid' | 'ledger' | 'expanded';
  uiMode?: UIMode;
}

export const PoemCard: React.FC<PoemCardProps> = ({
  poem,
  theme,
  isBookmarked,
  isRead,
  onToggleBookmark,
  onToggleRead,
  onReadPoem,
  onQuickRecite,
  onSelectPoet,
  viewLayout,
  uiMode = 'classic',
}) => {
  const currentTheme = THEME_STYLES[theme];
  const modernTheme = MODERN_THEME_STYLES[theme];
  const isModern = uiMode === 'modern';

  if (viewLayout === 'ledger') {
    return (
      <div
        className={`group flex items-center justify-between p-4 sm:p-5 border-b transition-all cursor-pointer ${
          isModern
            ? `border-${modernTheme.border} ${modernTheme.cardBg} ${modernTheme.cardHover} ${modernTheme.text} font-sans-ui`
            : `border-[#547076]/25 ${currentTheme.cardHover}`
        }`}
        onClick={() => onReadPoem(poem)}
      >
        <div className="flex items-center space-x-4 min-w-0">
          <span
            className={`w-14 text-xs sm:text-sm font-bold tracking-widest shrink-0 ${
              isModern ? `font-mono ${modernTheme.textMuted}` : 'font-royal text-[#d6b43e]'
            }`}
          >
            {poem.romanId}
          </span>
          <div className="min-w-0">
            <h4
              className={`text-base sm:text-lg font-bold truncate transition-colors ${
                isModern
                  ? `font-sans-ui font-black tracking-tight ${modernTheme.text} group-hover:text-[#793327]`
                  : `font-royal ${currentTheme.text} group-hover:text-[#d6b43e]`
              }`}
            >
              {poem.title}
            </h4>
            <p className={`text-xs sm:text-sm font-sans-ui ${isModern ? modernTheme.textMuted : 'text-[#c2ae93]'}`}>
              <PoetHoverCard authorName={poem.author} theme={theme} onSelectPoet={onSelectPoet}>
                <strong className={`${isModern ? modernTheme.text : currentTheme.text} hover:text-[#d6b43e] transition-colors border-b border-dotted border-[#d6b43e]/50 pb-0.5`}>
                  {poem.author}
                </strong>
              </PoetHoverCard>{' '}
              · <span className="italic">{poem.year}</span> · {poem.era} ·{' '}
              <span className={isModern ? modernTheme.text : 'text-[#d6b43e]'}>{poem.theme}</span>
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-2 shrink-0 ml-4" onClick={(e) => e.stopPropagation()}>
          <button
            onClick={() => onQuickRecite(poem)}
            className={`p-2 rounded-lg transition-all cursor-pointer ${
              isModern ? `${modernTheme.textMuted} hover:${modernTheme.text}` : 'text-[#547076] hover:text-[#d6b43e] hover:bg-stone-500/15'
            }`}
            title="Listen to recitation"
          >
            <Volume2 className="w-4 h-4" />
          </button>
          <button
            onClick={() => onToggleBookmark(poem.id)}
            className={`p-2 rounded-lg transition-all cursor-pointer ${
              isBookmarked
                ? isModern ? `${modernTheme.pillBg} ${modernTheme.pillText}` : 'text-[#d6b43e] bg-[#d6b43e]/15'
                : isModern ? `${modernTheme.textMuted} hover:${modernTheme.text}` : `text-[#547076] hover:${currentTheme.text}`
            }`}
            title={isBookmarked ? 'Remove Bookmark' : 'Bookmark Poem'}
          >
            <Bookmark className="w-4 h-4" />
          </button>
          <button
            onClick={() => onToggleRead(poem.id)}
            className={`p-2 rounded-lg transition-all cursor-pointer ${
              isRead
                ? 'text-emerald-500 bg-emerald-500/15'
                : isModern ? `${modernTheme.textMuted} hover:${modernTheme.text}` : `text-[#547076] hover:${currentTheme.text}`
            }`}
            title={isRead ? 'Mark as Unread' : 'Mark as Read'}
          >
            <CheckCircle className="w-4 h-4" />
          </button>
        </div>
      </div>
    );
  }

  if (viewLayout === 'expanded') {
    return (
      <motion.div
        layout
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className={`p-6 sm:p-8 mb-6 transition-all ${
          isModern
            ? `border ${modernTheme.border} ${modernTheme.cardBg} ${modernTheme.text} font-sans-ui shadow-sm`
            : `rounded-2xl border border-[#547076]/40 ${currentTheme.cardBg} shadow-md hover:border-[#d6b43e]/60`
        }`}
      >
        <div className="flex items-start justify-between mb-4">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span
                className={`text-xs sm:text-sm font-bold tracking-widest ${
                  isModern ? `font-mono ${modernTheme.textMuted}` : 'font-royal text-[#d6b43e]'
                }`}
              >
                POEM {poem.romanId}
              </span>
              <span className={`text-xs px-2.5 py-0.5 uppercase tracking-wider font-semibold ${
                isModern
                  ? `border ${modernTheme.tagBorder} ${modernTheme.tagBg} ${modernTheme.tagText}`
                  : 'rounded-full border border-[#547076]/40 text-[#c2ae93]'
              }`}>
                {poem.era}
              </span>
              <span className={`text-xs px-2.5 py-0.5 uppercase tracking-wider font-semibold ${
                isModern
                  ? `border ${modernTheme.border} ${modernTheme.pillBg} ${modernTheme.pillText}`
                  : 'rounded-full bg-[#793327]/25 text-[#fdf9f5] border border-[#793327]/40'
              }`}>
                {poem.theme}
              </span>
            </div>

            <h3
              onClick={() => onReadPoem(poem)}
              className={`text-2xl sm:text-3xl font-bold cursor-pointer transition-colors ${
                isModern
                  ? `font-sans-ui font-black tracking-tight uppercase ${modernTheme.text} hover:text-[#793327]`
                  : `font-royal ${currentTheme.text} hover:text-[#d6b43e]`
              }`}
            >
              {poem.title}
            </h3>

            <p className={`text-xs sm:text-sm font-sans-ui mt-1 ${isModern ? modernTheme.textMuted : 'text-[#c2ae93]'}`}>
              by{' '}
              <PoetHoverCard authorName={poem.author} theme={theme} onSelectPoet={onSelectPoet}>
                <strong className={`${isModern ? modernTheme.text : currentTheme.text} hover:text-[#d6b43e] transition-colors border-b border-dotted border-[#d6b43e]/50 pb-0.5`}>
                  {poem.author}
                </strong>
              </PoetHoverCard>{' '}
              ({poem.authorDates}) · {poem.year}
            </p>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => onQuickRecite(poem)}
              className={`p-2.5 border transition-all cursor-pointer ${
                isModern
                  ? `border ${modernTheme.border} ${modernTheme.cardBg} ${modernTheme.textMuted} hover:${modernTheme.text}`
                  : `rounded-xl border-[#547076]/40 text-[#c2ae93] hover:text-[#d6b43e] hover:border-[#d6b43e]`
              }`}
              title="Recite aloud"
            >
              <Volume2 className="w-4 h-4" />
            </button>
            <button
              onClick={() => onToggleBookmark(poem.id)}
              className={`p-2.5 border transition-all cursor-pointer ${
                isBookmarked
                  ? isModern ? `${modernTheme.pillBg} ${modernTheme.pillText} border ${modernTheme.border}` : 'bg-[#d6b43e]/20 text-[#d6b43e] border-[#d6b43e]/50 rounded-xl'
                  : isModern ? `border ${modernTheme.border} ${modernTheme.cardBg} ${modernTheme.textMuted} hover:${modernTheme.text}` : `rounded-xl border-[#547076]/40 text-[#c2ae93] hover:${currentTheme.text}`
              }`}
              title="Bookmark"
            >
              <Bookmark className="w-4 h-4" />
            </button>
            <button
              onClick={() => onToggleRead(poem.id)}
              className={`p-2.5 border transition-all cursor-pointer ${
                isRead
                  ? 'bg-emerald-500/15 text-emerald-500 border-emerald-500/40 rounded-xl'
                  : isModern ? `border ${modernTheme.border} ${modernTheme.cardBg} ${modernTheme.textMuted} hover:${modernTheme.text}` : `rounded-xl border-[#547076]/40 text-[#c2ae93] hover:${currentTheme.text}`
              }`}
              title="Mark as Read"
            >
              <CheckCircle className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Verses Preview */}
        <div
          className={`my-5 pl-4 border-l-3 space-y-2 text-base sm:text-lg leading-relaxed ${
            isModern
              ? `border-current font-sans-ui italic ${modernTheme.text}`
              : `border-[#d6b43e] font-poem italic text-[#f5f2eb]`
          }`}
        >
          {poem.stanzas.slice(0, 2).map((stanza, sIdx) => (
            <div key={sIdx} className="space-y-1">
              {stanza.map((line, lIdx) => (
                <p key={lIdx}>{line}</p>
              ))}
            </div>
          ))}
        </div>

        {/* Meaning preview if available */}
        {poem.meaning && (
          <div className={`p-3.5 border mb-4 flex items-start space-x-2 ${
            isModern
              ? `border ${modernTheme.border} ${modernTheme.bg} ${modernTheme.text}`
              : 'rounded-xl bg-black/20 border-[#d6b43e]/30'
          }`}>
            <Lightbulb className={`w-4 h-4 shrink-0 mt-0.5 ${isModern ? modernTheme.text : 'text-[#d6b43e]'}`} />
            <p className={`text-xs sm:text-sm font-sans-ui line-clamp-2 ${isModern ? modernTheme.textMuted : 'text-[#c2ae93]'}`}>
              <strong className={isModern ? modernTheme.text : 'text-[#d6b43e] font-semibold'}>Meaning: </strong>
              {poem.meaning}
            </p>
          </div>
        )}

        <div className={`flex items-center justify-between pt-4 border-t ${isModern ? `border ${modernTheme.border}` : 'border-[#547076]/30'}`}>
          <p className={`text-xs sm:text-sm italic font-sans-ui max-w-xl truncate ${isModern ? modernTheme.textMuted : 'text-[#c2ae93]'}`}>
            {poem.commentary}
          </p>
          <button
            onClick={() => onReadPoem(poem)}
            className={`px-4 py-2 font-bold text-xs sm:text-sm uppercase tracking-wider transition-all flex items-center space-x-2 shrink-0 ml-3 shadow-sm cursor-pointer ${
              isModern
                ? `${modernTheme.buttonBg} ${modernTheme.buttonText} font-sans-ui border ${modernTheme.border}`
                : 'rounded-xl bg-[#793327] hover:bg-[#8f3d2f] text-[#fdf9f5] font-royal'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>Read Verses & Meaning</span>
          </button>
        </div>
      </motion.div>
    );
  }

  // Standard Grid Card
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -3 }}
      transition={{ duration: 0.2 }}
      className={`border transition-all flex flex-col justify-between group relative overflow-hidden ${
        isModern
          ? `${modernTheme.cardBg} border ${modernTheme.border} ${modernTheme.text} p-6 font-sans-ui shadow-xs hover:shadow-md`
          : `rounded-2xl border-[#547076]/40 ${currentTheme.cardBg} p-5 sm:p-6 shadow-sm hover:border-[#d6b43e]/60`
      }`}
    >
      <div>
        {/* Header row */}
        <div className="flex items-center justify-between mb-3">
          <span
            className={`text-xs sm:text-sm font-bold tracking-widest ${
              isModern ? `font-mono ${modernTheme.textMuted}` : 'font-royal text-[#d6b43e]'
            }`}
          >
            POEM {poem.romanId}
          </span>

          <div className="flex items-center space-x-1">
            <button
              onClick={() => onQuickRecite(poem)}
              className={`p-1.5 transition-colors cursor-pointer ${
                isModern ? `${modernTheme.textMuted} hover:${modernTheme.text}` : 'rounded-lg text-[#547076] hover:text-[#d6b43e]'
              }`}
              title="Recite aloud"
            >
              <Volume2 className="w-4 h-4" />
            </button>
            <button
              onClick={() => onToggleBookmark(poem.id)}
              className={`p-1.5 transition-colors cursor-pointer ${
                isBookmarked
                  ? isModern ? `${modernTheme.pillBg} ${modernTheme.pillText}` : 'rounded-lg text-[#d6b43e] bg-[#d6b43e]/15'
                  : isModern ? `${modernTheme.textMuted} hover:${modernTheme.text}` : `rounded-lg text-[#547076] hover:${currentTheme.text}`
              }`}
              title={isBookmarked ? 'Bookmarked' : 'Bookmark'}
            >
              <Bookmark className="w-4 h-4" />
            </button>
            <button
              onClick={() => onToggleRead(poem.id)}
              className={`p-1.5 transition-colors cursor-pointer ${
                isRead
                  ? 'text-emerald-500 bg-emerald-500/15'
                  : isModern ? `${modernTheme.textMuted} hover:${modernTheme.text}` : `rounded-lg text-[#547076] hover:${currentTheme.text}`
              }`}
              title={isRead ? 'Marked Read' : 'Mark as Read'}
            >
              <CheckCircle className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Title */}
        <h3
          onClick={() => onReadPoem(poem)}
          className={`text-xl font-bold mb-1.5 cursor-pointer line-clamp-2 leading-snug transition-colors ${
            isModern
              ? `font-sans-ui font-black uppercase tracking-tight ${modernTheme.text} group-hover:text-[#793327]`
              : `font-royal ${currentTheme.text} group-hover:text-[#d6b43e]`
          }`}
        >
          {poem.title}
        </h3>

        {/* Author info */}
        <p className={`text-xs sm:text-sm font-sans-ui mb-3.5 ${isModern ? modernTheme.textMuted : 'text-[#c2ae93]'}`}>
          <PoetHoverCard authorName={poem.author} theme={theme} onSelectPoet={onSelectPoet}>
            <span className={`font-semibold ${isModern ? modernTheme.text : currentTheme.text} hover:text-[#d6b43e] transition-colors border-b border-dotted border-[#d6b43e]/50 pb-0.5`}>
              {poem.author}
            </span>
          </PoetHoverCard>{' '}
          · {poem.year}
        </p>

        {/* Famous Excerpt */}
        <blockquote
          className={`text-sm sm:text-base italic pl-3 border-l-2 mb-4 line-clamp-3 leading-relaxed ${
            isModern
              ? `font-serif ${modernTheme.text} border-current opacity-90`
              : 'font-poem text-[#f5f2eb] border-[#d6b43e]/60'
          }`}
        >
          “{poem.famousExcerpt}”
        </blockquote>
      </div>

      {/* Footer */}
      <div className={`pt-3 border-t flex items-center justify-between ${isModern ? `border ${modernTheme.border}` : 'border-[#547076]/25'}`}>
        <span className={`text-xs sm:text-sm font-sans-ui truncate max-w-[150px] font-medium ${isModern ? modernTheme.textMuted : 'text-[#c2ae93]'}`}>
          {poem.era}
        </span>

        <button
          onClick={() => onReadPoem(poem)}
          className={`px-3.5 py-1.5 text-xs sm:text-sm font-bold uppercase tracking-wider transition-all flex items-center space-x-1.5 shadow-sm cursor-pointer ${
            isModern
              ? `${modernTheme.buttonBg} ${modernTheme.buttonText} font-sans-ui border ${modernTheme.border}`
              : 'rounded-xl bg-[#793327] hover:bg-[#8f3d2f] text-[#fdf9f5] font-royal'
          }`}
        >
          <BookOpen className="w-3.5 h-3.5" />
          <span>Read</span>
        </button>
      </div>
    </motion.div>
  );
};
