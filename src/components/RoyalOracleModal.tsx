import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, X, RotateCcw, BookOpen, Compass, Lightbulb, BookMarked, ArrowRight } from 'lucide-react';
import { Poem, ReadingTheme, UIMode } from '../types';
import { THEME_STYLES, MODERN_THEME_STYLES } from '../utils/themeStyles';

interface RoyalOracleModalProps {
  isOpen: boolean;
  onClose: () => void;
  poems: Poem[];
  onSelectPoem: (poem: Poem) => void;
  theme: ReadingTheme;
  uiMode?: UIMode;
}

export const RoyalOracleModal: React.FC<RoyalOracleModalProps> = ({
  isOpen,
  onClose,
  poems,
  onSelectPoem,
  theme,
  uiMode = 'classic',
}) => {
  const [drawnPoem, setDrawnPoem] = useState<Poem | null>(null);
  const [isShuffling, setIsShuffling] = useState(false);

  if (!isOpen) return null;

  const currentTheme = THEME_STYLES[theme];
  const modernTheme = MODERN_THEME_STYLES[theme];
  const isModern = uiMode === 'modern';

  const drawCard = () => {
    setIsShuffling(true);
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * poems.length);
      setDrawnPoem(poems[randomIndex]);
      setIsShuffling(false);
    }, 450);
  };

  // MODERN UI ORACLE PRESENTATION
  if (isModern) {
    return (
      <AnimatePresence>
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-sm overflow-y-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className={`w-full max-w-2xl ${modernTheme.cardBg} border ${modernTheme.border} ${modernTheme.text} shadow-2xl p-6 sm:p-8 relative font-sans-ui my-6`}
          >
            {/* Close button */}
            <button
              id="oracle-modern-close-btn"
              onClick={onClose}
              className={`absolute top-4 right-4 p-2 ${modernTheme.cardHover} ${modernTheme.text} border ${modernTheme.border} transition-colors cursor-pointer`}
              title="Close Oracle"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Header / Brand Banner */}
            <div className="mb-6">
              <div className="flex items-center space-x-2 mb-2">
                <span className={`font-mono text-[11px] uppercase tracking-widest ${modernTheme.textMuted}`}>
                  ARCHIVE // THE HUNDRED POEMS OF FAMOUS ONES
                </span>
                <span className={`text-[10px] px-2 py-0.5 font-mono uppercase font-bold border ${modernTheme.tagBorder} ${modernTheme.tagBg} ${modernTheme.tagText}`}>
                  ORACLE
                </span>
              </div>
              <h2 className={`text-2xl sm:text-3xl font-black uppercase tracking-tight ${modernTheme.text}`}>
                Poetic Oracle & Reflection
              </h2>
              <p className={`text-sm ${modernTheme.textMuted} font-sans-ui mt-1`}>
                Draw a randomly illuminated work from the hundred canonical poems for contemplative insight.
              </p>
            </div>

            {/* Card Content Area */}
            <div className="min-h-[300px] flex items-center justify-center mb-6">
              {!drawnPoem ? (
                <div
                  onClick={drawCard}
                  className={`w-full max-w-md p-8 sm:p-10 border-2 border-dashed ${modernTheme.border} ${modernTheme.cardHover} text-center cursor-pointer transition-all flex flex-col items-center justify-center group`}
                >
                  <div className={`w-16 h-16 border ${modernTheme.border} ${modernTheme.pillBg} ${modernTheme.pillText} flex items-center justify-center font-mono font-bold text-xl mb-4 group-hover:scale-105 transition-transform`}>
                    100
                  </div>
                  <h3 className={`font-mono text-sm sm:text-base font-bold uppercase tracking-wider ${modernTheme.text} mb-1`}>
                    {isShuffling ? 'CONSULTING ARCHIVE...' : 'TOUCH TO DRAW A VERSE'}
                  </h3>
                  <p className={`text-xs ${modernTheme.textMuted} font-sans-ui`}>
                    Click anywhere to reveal an immortal poem & wisdom
                  </p>
                </div>
              ) : (
                <motion.div
                  key={drawnPoem.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`w-full border ${modernTheme.border} ${modernTheme.bg} p-5 sm:p-7 relative`}
                >
                  {/* Card Pill */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className={`font-mono text-xs font-bold uppercase tracking-widest ${modernTheme.textMuted}`}>
                      POEM {drawnPoem.romanId} • #{drawnPoem.id.toString().padStart(3, '0')}
                    </span>
                    <span className={`text-[10px] px-2 py-0.5 font-mono uppercase font-bold border ${modernTheme.tagBorder} ${modernTheme.tagBg} ${modernTheme.tagText}`}>
                      {drawnPoem.era}
                    </span>
                  </div>

                  <h3 className={`text-2xl sm:text-3xl font-black uppercase tracking-tight ${modernTheme.text} mb-1`}>
                    {drawnPoem.title}
                  </h3>

                  <p className={`text-xs sm:text-sm font-sans-ui ${modernTheme.textMuted} mb-4`}>
                    by <strong className={modernTheme.text}>{drawnPoem.author}</strong> ({drawnPoem.year}) · Theme: {drawnPoem.theme}
                  </p>

                  <blockquote className={`text-lg sm:text-xl font-serif italic ${modernTheme.text} my-4 pl-4 border-l-2 ${modernTheme.border} leading-relaxed`}>
                    “{drawnPoem.famousExcerpt}”
                  </blockquote>

                  {drawnPoem.meaning && (
                    <div className={`p-4 border border-dashed ${modernTheme.border} ${modernTheme.cardHover} mb-4`}>
                      <span className={`block font-mono text-[11px] font-bold uppercase tracking-wider ${modernTheme.accentText} mb-1`}>
                        MEANING & CONTEMPLATION
                      </span>
                      <p className={`text-xs sm:text-sm font-sans-ui ${modernTheme.text} leading-relaxed`}>
                        {drawnPoem.meaning}
                      </p>
                    </div>
                  )}

                  {/* Actions */}
                  <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-black/15">
                    <button
                      id="oracle-modern-read-btn"
                      onClick={() => {
                        onSelectPoem(drawnPoem);
                        onClose();
                      }}
                      className={`${modernTheme.buttonBg} ${modernTheme.buttonText} px-6 py-2.5 font-mono text-xs uppercase font-bold tracking-wider cursor-pointer border ${modernTheme.border} flex items-center space-x-2`}
                    >
                      <span>OPEN FULL COMMENTARY</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                    <button
                      id="oracle-modern-draw-again-btn"
                      onClick={drawCard}
                      className={`${modernTheme.cardBg} ${modernTheme.cardHover} ${modernTheme.text} border ${modernTheme.border} px-4 py-2.5 font-mono text-xs uppercase font-bold tracking-wider cursor-pointer flex items-center space-x-2`}
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>DRAW AGAIN</span>
                    </button>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Bottom Button if not drawn */}
            {!drawnPoem && (
              <div className="text-center pt-2">
                <button
                  id="oracle-modern-trigger-btn"
                  onClick={drawCard}
                  disabled={isShuffling}
                  className={`${modernTheme.buttonBg} ${modernTheme.buttonText} px-8 py-3.5 font-mono text-xs font-bold uppercase tracking-widest border ${modernTheme.border} cursor-pointer inline-flex items-center space-x-2`}
                >
                  <Sparkles className="w-4 h-4" />
                  <span>{isShuffling ? 'CONSULTING ARCHIVE...' : 'DRAW CANONICAL VERSE'}</span>
                </button>
              </div>
            )}
          </motion.div>
        </div>
      </AnimatePresence>
    );
  }

  // CLASSIC UI ORACLE PRESENTATION (High Contrast Ecru Support)
  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.94 }}
          className={`w-full max-w-xl rounded-2xl ${currentTheme.cardBg} border ${currentTheme.border} shadow-2xl p-6 sm:p-8 text-center relative overflow-hidden my-6`}
        >
          {/* Top Palette Stripe */}
          <div className="absolute top-0 left-0 right-0 h-1.5 grid grid-cols-4">
            <div className="bg-[#793327]" />
            <div className="bg-[#c2ae93]" />
            <div className="bg-[#d6b43e]" />
            <div className="bg-[#547076]" />
          </div>

          {/* Close button */}
          <button
            id="oracle-close-btn"
            onClick={onClose}
            className={`absolute top-4 right-4 p-2.5 rounded-lg ${currentTheme.subtext} hover:${currentTheme.text} hover:bg-stone-500/20 transition-all z-10`}
            title="Close Oracle"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header Title */}
          <div className="mb-2 mt-2">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-[#d6b43e] font-royal">
              Poetic Reflection
            </span>
          </div>

          <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold ${currentTheme.text} mb-2 font-royal`}>
            The Royal Oracle
          </h2>

          <p className={`text-[16px] text-base leading-relaxed ${currentTheme.subtext} mb-6 max-w-md mx-auto font-poem italic`}>
            “Draw an immortal verse inscribed for your present contemplation, literary sanctuary, and inner wisdom.”
          </p>

          {/* Interactive Card Presentation */}
          <div className="min-h-[320px] flex items-center justify-center mb-6">
            {!drawnPoem ? (
              <motion.div
                whileHover={{ scale: 1.02 }}
                onClick={drawCard}
                className={`w-64 h-84 rounded-2xl border-2 border-dashed border-[#d6b43e]/40 ${theme === 'ecru' ? 'bg-[#ebd8bf]/40' : 'bg-black/25'} flex flex-col items-center justify-center p-6 cursor-pointer group shadow-xl hover:border-[#d6b43e] transition-all`}
              >
                <div className="w-20 h-20 rounded-2xl border-2 border-[#d6b43e]/50 flex items-center justify-center mb-5 group-hover:border-[#d6b43e] group-hover:scale-105 transition-all bg-[#d6b43e]/10">
                  <span className="text-2xl font-bold text-[#d6b43e] font-royal">
                    100
                  </span>
                </div>
                <span className="text-base sm:text-lg font-bold text-[#d6b43e] tracking-widest mb-2 uppercase font-royal">
                  {isShuffling ? 'Consulting Canon...' : 'Touch to Draw'}
                </span>
                <span className={`text-xs sm:text-sm font-sans-ui font-medium ${currentTheme.subtext}`}>
                  One of 100 Canonical Poems
                </span>
              </motion.div>
            ) : (
              <motion.div
                key={drawnPoem.id}
                initial={{ rotateY: 90, opacity: 0 }}
                animate={{ rotateY: 0, opacity: 1 }}
                transition={{ duration: 0.45 }}
                className={`w-full rounded-2xl border ${currentTheme.border} ${currentTheme.bg} p-5 sm:p-6 shadow-2xl text-left relative overflow-hidden`}
              >
                {/* Card Header */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs sm:text-sm font-bold tracking-widest text-[#d6b43e] font-royal">
                    POEM {drawnPoem.romanId} · #{drawnPoem.id.toString().padStart(3, '0')}
                  </span>
                  <span className={`text-xs sm:text-sm font-sans-ui font-semibold uppercase tracking-wider px-3 py-1 rounded-full border ${currentTheme.border} ${currentTheme.subtext}`}>
                    {drawnPoem.era}
                  </span>
                </div>

                <h3 className={`text-xl sm:text-2xl font-bold ${currentTheme.text} mb-1 font-royal`}>
                  {drawnPoem.title}
                </h3>

                <p className={`text-xs sm:text-sm ${currentTheme.subtext} font-sans-ui mb-4`}>
                  by <strong className={currentTheme.text}>{drawnPoem.author}</strong> ({drawnPoem.year}) ·{' '}
                  <span className="text-[#d6b43e] font-medium">{drawnPoem.theme}</span>
                </p>

                {/* Excerpt Quote */}
                <blockquote className={`text-base sm:text-lg pl-4 border-l-3 border-[#d6b43e] mb-4 leading-relaxed ${currentTheme.text} font-poem italic`}>
                  “{drawnPoem.famousExcerpt}”
                </blockquote>

                {/* Poetic Meaning Section */}
                {drawnPoem.meaning && (
                  <div className={`p-3.5 rounded-xl border border-[#d6b43e]/30 mb-3 ${theme === 'ecru' ? 'bg-[#ebd8bf]/40' : 'bg-black/25'}`}>
                    <div className="flex items-center space-x-2 text-xs sm:text-sm font-bold text-[#d6b43e] uppercase tracking-wider mb-1">
                      <Lightbulb className="w-4 h-4 shrink-0 text-[#d6b43e]" />
                      <span>Meaning & Reflection</span>
                    </div>
                    <p className={`text-xs sm:text-sm ${currentTheme.text} leading-relaxed font-sans-ui`}>
                      {drawnPoem.meaning}
                    </p>
                  </div>
                )}

                {/* Vocabulary preview */}
                {drawnPoem.vocabulary && drawnPoem.vocabulary.length > 0 && (
                  <div className={`p-3 rounded-xl border ${currentTheme.border} mb-4 ${theme === 'ecru' ? 'bg-[#ebd8bf]/30' : 'bg-[#547076]/10'}`}>
                    <div className={`flex items-center space-x-2 text-xs font-bold ${currentTheme.subtext} uppercase tracking-wider mb-1.5`}>
                      <BookMarked className="w-3.5 h-3.5 text-[#d6b43e]" />
                      <span>Key Defined Term: <strong className={currentTheme.text}>{drawnPoem.vocabulary[0].word}</strong></span>
                    </div>
                    <p className={`text-xs sm:text-sm ${currentTheme.subtext} font-sans-ui`}>
                      {drawnPoem.vocabulary[0].definition}
                    </p>
                  </div>
                )}

                {/* Card Actions */}
                <div className={`flex items-center space-x-2 pt-3 border-t ${currentTheme.border}`}>
                  <button
                    id="oracle-read-btn"
                    onClick={() => {
                      onSelectPoem(drawnPoem);
                      onClose();
                    }}
                    className="flex-1 py-2.5 rounded-xl bg-[#793327] hover:bg-[#8f3d2f] text-[#fdf9f5] font-bold text-xs sm:text-sm uppercase tracking-wider transition-all flex items-center justify-center space-x-2 shadow-sm font-royal"
                  >
                    <BookOpen className="w-4 h-4" />
                    <span>Read Full Poem & Meaning</span>
                  </button>
                  <button
                    onClick={drawCard}
                    className={`p-2.5 rounded-xl border ${currentTheme.border} ${currentTheme.subtext} hover:${currentTheme.text} hover:bg-stone-500/20 transition-all flex items-center space-x-1.5`}
                    title="Draw Another Card"
                  >
                    <RotateCcw className="w-4 h-4" />
                    <span className="text-xs font-sans-ui font-semibold hidden sm:inline">Draw Again</span>
                  </button>
                </div>
              </motion.div>
            )}
          </div>

          {/* Action Trigger */}
          {!drawnPoem && (
            <button
              id="oracle-draw-action-btn"
              onClick={drawCard}
              disabled={isShuffling}
              className="px-8 py-3.5 rounded-xl bg-[#793327] hover:bg-[#8f3d2f] text-[#fdf9f5] font-bold text-xs sm:text-sm uppercase tracking-widest transition-all shadow-md inline-flex items-center space-x-2.5 font-royal"
            >
              <Sparkles className="w-4 h-4 text-[#d6b43e]" />
              <span>{isShuffling ? 'Revealing Verse...' : 'Draw Royal Verse'}</span>
            </button>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

