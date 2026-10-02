import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, Sparkles } from 'lucide-react';
import { VocabularyItem, ReadingTheme } from '../types';

interface WordGlossaryTooltipProps {
  word: string;
  item: VocabularyItem;
  theme?: ReadingTheme;
}

export function WordGlossaryTooltip({
  word,
  item,
  theme = 'medici',
}: WordGlossaryTooltipProps) {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setIsOpen(true);
    }, 100);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 150);
  };

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  // Theme styling for tooltip card
  const tooltipBg =
    theme === 'ecru'
      ? 'bg-[#f5ecdd] text-[#2d2016] border-[#793327]/30 shadow-[0_10px_25px_rgba(121,51,39,0.22)]'
      : theme === 'russet'
      ? 'bg-[#3b1712] text-[#f2e7d3] border-[#d6b43e]/40 shadow-[0_10px_25px_rgba(0,0,0,0.55)]'
      : theme === 'noir'
      ? 'bg-[#0f1214] text-[#f0eeea] border-[#d6b43e]/30 shadow-[0_10px_25px_rgba(0,0,0,0.85)]'
      : 'bg-[#182326] text-[#dfcfb3] border-[#d6b43e]/40 shadow-[0_10px_25px_rgba(0,0,0,0.65)]';

  const underlineColor =
    theme === 'ecru'
      ? 'decoration-[#793327] hover:text-[#793327]'
      : 'decoration-[#d6b43e] hover:text-[#f3dfa2]';

  return (
    <span
      className="relative inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span
        onClick={handleClick}
        className={`underline underline-offset-4 decoration-dotted decoration-[1.5px] cursor-help transition-all duration-150 ${underlineColor}`}
        title={`Hover to reveal definition of "${item.word}"`}
      >
        {word}
      </span>

      <AnimatePresence>
        {isOpen && (
          <motion.span
            initial={{ opacity: 0, y: 6, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.95 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 sm:w-72 p-3 rounded-lg border z-50 pointer-events-auto text-left select-none not-italic font-sans-ui block ${tooltipBg}`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header: Defined Word + Definition badge */}
            <div className="flex items-center justify-between pb-1.5 mb-1.5 border-b border-stone-500/20">
              <div className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#d6b43e] shrink-0" />
                <span className="text-xs font-bold font-royal tracking-wide text-[#d6b43e]">
                  {item.word}
                </span>
              </div>
              <span className="text-[9px] uppercase tracking-wider px-1.5 py-0.5 rounded bg-stone-500/15 opacity-75 font-semibold">
                Glossary
              </span>
            </div>

            {/* Definition */}
            <p className="text-xs leading-relaxed opacity-95 mb-1.5 font-normal">
              {item.definition}
            </p>

            {/* Context from poem if available */}
            {item.context && (
              <p className="text-[10px] italic opacity-70 border-t border-stone-500/15 pt-1 mt-1 font-serif line-clamp-2">
                "{item.context}"
              </p>
            )}

            {/* Downward triangle arrow */}
            <span
              className={`absolute top-full left-1/2 -translate-x-1/2 -mt-px w-0 h-0 border-x-5 border-x-transparent border-t-5 ${
                theme === 'ecru'
                  ? 'border-t-[#f5ecdd]'
                  : theme === 'russet'
                  ? 'border-t-[#3b1712]'
                  : theme === 'noir'
                  ? 'border-t-[#0f1214]'
                  : 'border-t-[#182326]'
              }`}
            />
          </motion.span>
        )}
      </AnimatePresence>
    </span>
  );
}
