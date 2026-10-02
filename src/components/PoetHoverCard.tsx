import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, ExternalLink, Calendar, Compass, Feather } from 'lucide-react';
import { PoetInfo, ReadingTheme } from '../types';
import { getPoetByName } from '../data/poets';

interface PoetHoverCardProps {
  authorName: string;
  theme?: ReadingTheme;
  onSelectPoet?: (poet: PoetInfo) => void;
  className?: string;
  children?: React.ReactNode;
}

export function PoetHoverCard({
  authorName,
  theme = 'medici',
  onSelectPoet,
  className = '',
  children,
}: PoetHoverCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const poet = getPoetByName(authorName);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setIsOpen(true);
    }, 180);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 220);
  };

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (poet && onSelectPoet) {
      onSelectPoet(poet);
      setIsOpen(false);
    }
  };

  // Theme styling for popup
  const cardBg =
    theme === 'ecru'
      ? 'bg-[#f4ebd9] text-[#2d221a] border-[#793327]/30 shadow-[0_12px_32px_rgba(121,51,39,0.18)]'
      : theme === 'russet'
      ? 'bg-[#3d1812] text-[#dfcfb3] border-[#d6b43e]/40 shadow-[0_12px_32px_rgba(0,0,0,0.5)]'
      : theme === 'noir'
      ? 'bg-[#0d1012] text-[#e0deda] border-[#d6b43e]/30 shadow-[0_12px_32px_rgba(0,0,0,0.8)]'
      : 'bg-[#1a2326] text-[#dfcfb3] border-[#d6b43e]/35 shadow-[0_12px_32px_rgba(0,0,0,0.6)]';

  const goldAccent = theme === 'ecru' ? 'text-[#793327]' : 'text-[#d6b43e]';

  return (
    <span
      className="relative inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span
        onClick={handleClick}
        className={`cursor-pointer transition-all hover:underline decoration-dotted decoration-[#d6b43e] ${className}`}
        title={`Click or hover to explore ${authorName}'s life and history`}
      >
        {children || authorName}
      </span>

      <AnimatePresence>
        {isOpen && poet && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.96 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-72 sm:w-80 p-4 rounded-xl border z-50 pointer-events-auto ${cardBg} text-left select-none`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header: Oval Portrait & Basic Info */}
            <div className="flex items-start space-x-3.5 mb-3">
              {/* OVAL SHAPED PORTRAIT FRAME (from the 1922 Cable Company book style) */}
              <div className="shrink-0 relative">
                <div className="w-14 h-18 rounded-[50%] overflow-hidden border-2 border-[#d6b43e] shadow-md bg-stone-900 flex items-center justify-center relative ring-2 ring-[#793327]/30">
                  <img
                    src={poet.portraitUrl}
                    alt={poet.name}
                    className="w-full h-full object-cover grayscale contrast-110 sepia-[0.18]"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      // Fallback vintage monogram badge
                      (e.currentTarget as HTMLElement).style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center text-xs font-serif font-bold text-[#d6b43e] bg-stone-900/90 pointer-events-none -z-10">
                    {poet.name
                      .split(' ')
                      .map((n) => n[0])
                      .slice(0, 2)
                      .join('')}
                  </div>
                </div>
              </div>

              <div className="flex-1 min-w-0">
                <h4 className={`text-sm font-bold font-royal leading-tight truncate ${goldAccent}`}>
                  {poet.name}
                </h4>
                <p className="text-[11px] opacity-75 font-sans-ui mt-0.5 flex items-center gap-1">
                  <Calendar className="w-3 h-3 shrink-0" />
                  <span className="truncate">{poet.dates}</span>
                </p>
                <div className="flex items-center gap-1.5 mt-1 text-[10px] uppercase tracking-wider font-semibold font-sans-ui opacity-80">
                  <span className="px-1.5 py-0.5 rounded bg-[#d6b43e]/15 text-[#d6b43e] border border-[#d6b43e]/25">
                    {poet.era}
                  </span>
                  <span>{poet.nationality}</span>
                </div>
              </div>
            </div>

            {/* Concise History Summary */}
            <p className="text-xs leading-relaxed opacity-90 line-clamp-3 mb-3 font-sans-ui">
              {poet.summary}
            </p>

            {/* Anthology Poems Count & Action Button */}
            <div className="pt-2.5 border-t border-stone-500/20 flex items-center justify-between">
              <span className="text-[11px] opacity-75 flex items-center gap-1 font-sans-ui">
                <BookOpen className="w-3 h-3 text-[#d6b43e]" />
                {poet.poemIds.length} {poet.poemIds.length === 1 ? 'poem' : 'poems'} in archive
              </span>

              <button
                type="button"
                onClick={handleClick}
                className="inline-flex items-center gap-1 text-[11px] font-bold text-[#d6b43e] hover:text-[#fff] transition-colors uppercase tracking-wider cursor-pointer"
              >
                <span>Full History</span>
                <ExternalLink className="w-3 h-3" />
              </button>
            </div>

            {/* Little pointing triangle arrow */}
            <div
              className={`absolute top-full left-1/2 -translate-x-1/2 -mt-px w-0 h-0 border-x-6 border-x-transparent border-t-6 ${
                theme === 'ecru'
                  ? 'border-t-[#f4ebd9]'
                  : theme === 'russet'
                  ? 'border-t-[#3d1812]'
                  : theme === 'noir'
                  ? 'border-t-[#0d1012]'
                  : 'border-t-[#1a2326]'
              }`}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </span>
  );
}
