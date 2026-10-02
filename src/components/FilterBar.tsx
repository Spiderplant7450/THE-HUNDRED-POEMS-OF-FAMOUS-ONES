import React from 'react';
import { Search, LayoutGrid, List, BookOpen, X } from 'lucide-react';
import { Era, ThemeCategory, ReadingTheme, UIMode } from '../types';
import { ERAS, THEMES } from '../data/poems';
import { THEME_STYLES, MODERN_THEME_STYLES } from '../utils/themeStyles';

export type SortOption = 'canonical' | 'title' | 'author' | 'year';
export type ViewLayout = 'grid' | 'ledger' | 'expanded';

interface FilterBarProps {
  theme: ReadingTheme;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedEra: Era;
  onEraChange: (era: Era) => void;
  selectedTheme: ThemeCategory;
  onThemeChange: (category: ThemeCategory) => void;
  sortBy: SortOption;
  onSortChange: (sort: SortOption) => void;
  viewLayout: ViewLayout;
  onViewLayoutChange: (layout: ViewLayout) => void;
  resultsCount: number;
  totalCount: number;
  uiMode?: UIMode;
}

export const FilterBar: React.FC<FilterBarProps> = ({
  theme,
  searchQuery,
  onSearchChange,
  selectedEra,
  onEraChange,
  selectedTheme,
  onThemeChange,
  sortBy,
  onSortChange,
  viewLayout,
  onViewLayoutChange,
  resultsCount,
  totalCount,
  uiMode = 'classic',
}) => {
  const currentTheme = THEME_STYLES[theme];
  const modernTheme = MODERN_THEME_STYLES[theme];
  const isModern = uiMode === 'modern';

  return (
    <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 ${isModern ? 'font-sans-ui' : ''}`}>
      <div
        className={`p-4 sm:p-5 shadow-sm space-y-4 transition-all ${
          isModern
            ? `border ${modernTheme.border} ${modernTheme.cardBg} ${modernTheme.text}`
            : `rounded-2xl border border-[#547076]/40 ${currentTheme.cardBg}`
        }`}
      >
        {/* Search row with view controls */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 sm:gap-4">
          {/* Search bar */}
          <div className="relative flex-1">
            <Search className={`absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 ${isModern ? modernTheme.textMuted : 'text-[#c2ae93]'}`} />
            <input
              id="poems-search-input"
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search 100 poems by title, poet, meaning, lines, or keywords..."
              className={`w-full pl-10 pr-10 py-2.5 text-xs sm:text-sm font-sans-ui focus:outline-none transition-all ${
                isModern
                  ? `border ${modernTheme.border} ${modernTheme.bg} ${modernTheme.text} placeholder:${modernTheme.textMuted}`
                  : `rounded-xl border border-[#547076]/40 bg-black/15 ${currentTheme.text} placeholder:${currentTheme.textMuted} focus:border-[#d6b43e]`
              }`}
            />
            {searchQuery && (
              <button
                onClick={() => onSearchChange('')}
                className={`absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-full cursor-pointer ${
                  isModern ? `${modernTheme.textMuted} hover:${modernTheme.text}` : 'text-[#c2ae93] hover:text-[#d6b43e]'
                }`}
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Theme Dropdown & Sort */}
          <div className="flex items-center gap-2">
            <select
              id="poems-theme-select"
              value={selectedTheme}
              onChange={(e) => onThemeChange(e.target.value as ThemeCategory)}
              className={`px-3 py-2 text-xs sm:text-sm font-sans-ui focus:outline-none cursor-pointer ${
                isModern
                  ? `border ${modernTheme.border} ${modernTheme.cardBg} ${modernTheme.text}`
                  : `rounded-xl border border-[#547076]/40 bg-black/20 ${currentTheme.text} focus:border-[#d6b43e]`
              }`}
            >
              {THEMES.map((th) => (
                <option key={th} value={th} className={isModern ? `${modernTheme.cardBg} ${modernTheme.text}` : 'bg-[#12191b] text-[#f5f2eb]'}>
                  {th === 'All' ? 'All Themes' : th}
                </option>
              ))}
            </select>

            <select
              id="poems-sort-select"
              value={sortBy}
              onChange={(e) => onSortChange(e.target.value as SortOption)}
              className={`px-3 py-2 text-xs sm:text-sm font-sans-ui focus:outline-none cursor-pointer ${
                isModern
                  ? `border ${modernTheme.border} ${modernTheme.cardBg} ${modernTheme.text}`
                  : `rounded-xl border border-[#547076]/40 bg-black/20 ${currentTheme.text} focus:border-[#d6b43e]`
              }`}
            >
              <option value="canonical" className={isModern ? `${modernTheme.cardBg} ${modernTheme.text}` : 'bg-[#12191b] text-[#f5f2eb]'}>
                Canonical (I–C)
              </option>
              <option value="title" className={isModern ? `${modernTheme.cardBg} ${modernTheme.text}` : 'bg-[#12191b] text-[#f5f2eb]'}>
                Title (A–Z)
              </option>
              <option value="author" className={isModern ? `${modernTheme.cardBg} ${modernTheme.text}` : 'bg-[#12191b] text-[#f5f2eb]'}>
                Poet (A–Z)
              </option>
              <option value="year" className={isModern ? `${modernTheme.cardBg} ${modernTheme.text}` : 'bg-[#12191b] text-[#f5f2eb]'}>
                Year
              </option>
            </select>

            {/* View Mode */}
            <div className={`flex items-center p-0.5 ${
              isModern ? `border ${modernTheme.border} ${modernTheme.bg}` : 'rounded-xl border border-[#547076]/40 bg-black/20'
            }`}>
              <button
                id="view-layout-grid-btn"
                onClick={() => onViewLayoutChange('grid')}
                className={`p-2 transition-all cursor-pointer ${
                  viewLayout === 'grid'
                    ? isModern ? `${modernTheme.buttonBg} ${modernTheme.buttonText} shadow-xs` : 'rounded-lg bg-[#793327] text-[#fdf9f5] shadow-xs'
                    : isModern ? `${modernTheme.textMuted} hover:${modernTheme.text}` : `rounded-lg ${currentTheme.textMuted} hover:${currentTheme.text}`
                }`}
                title="Grid"
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
              <button
                id="view-layout-expanded-btn"
                onClick={() => onViewLayoutChange('expanded')}
                className={`p-2 transition-all cursor-pointer ${
                  viewLayout === 'expanded'
                    ? isModern ? `${modernTheme.buttonBg} ${modernTheme.buttonText} shadow-xs` : 'rounded-lg bg-[#793327] text-[#fdf9f5] shadow-xs'
                    : isModern ? `${modernTheme.textMuted} hover:${modernTheme.text}` : `rounded-lg ${currentTheme.textMuted} hover:${currentTheme.text}`
                }`}
                title="Expanded"
              >
                <BookOpen className="w-4 h-4" />
              </button>
              <button
                id="view-layout-ledger-btn"
                onClick={() => onViewLayoutChange('ledger')}
                className={`p-2 transition-all cursor-pointer ${
                  viewLayout === 'ledger'
                    ? isModern ? `${modernTheme.buttonBg} ${modernTheme.buttonText} shadow-xs` : 'rounded-lg bg-[#793327] text-[#fdf9f5] shadow-xs'
                    : isModern ? `${modernTheme.textMuted} hover:${modernTheme.text}` : `rounded-lg ${currentTheme.textMuted} hover:${currentTheme.text}`
                }`}
                title="Ledger"
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Historical Eras Carousel */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-1 pt-1 no-scrollbar text-xs sm:text-sm">
          <span
            className={`text-xs font-bold uppercase tracking-wider shrink-0 mr-1 ${
              isModern ? `font-mono ${modernTheme.textMuted}` : 'font-royal text-[#c2ae93]'
            }`}
          >
            Epoch:
          </span>
          {ERAS.map((era) => {
            const isSelected = selectedEra === era;
            return (
              <button
                key={era}
                id={`era-pill-${era.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                onClick={() => onEraChange(era)}
                className={`px-3.5 py-1.5 text-xs sm:text-sm whitespace-nowrap transition-all shrink-0 font-semibold cursor-pointer ${
                  isSelected
                    ? isModern
                      ? `${modernTheme.buttonBg} ${modernTheme.buttonText} border ${modernTheme.border} shadow-xs font-sans-ui`
                      : 'rounded-full bg-[#793327] text-[#fdf9f5] shadow-sm border border-[#793327]'
                    : isModern
                    ? `border ${modernTheme.border} ${modernTheme.cardBg} ${modernTheme.text} hover:${modernTheme.cardHover} font-sans-ui`
                    : 'rounded-full border border-[#547076]/40 text-[#c2ae93] hover:text-[#f5f2eb] hover:border-[#c2ae93]/60 bg-black/10'
                }`}
              >
                {era}
              </button>
            );
          })}
        </div>

        {/* Results summary & Reset */}
        <div className={`flex items-center justify-between text-xs sm:text-sm font-sans-ui pt-1 ${isModern ? modernTheme.textMuted : 'text-[#c2ae93]'}`}>
          <div>
            Showing <strong className={isModern ? modernTheme.text : currentTheme.text}>{resultsCount}</strong> of {totalCount} poems
            {selectedEra !== 'All' && (
              <span>
                {' '}
                · <em className={`italic font-semibold ${isModern ? modernTheme.text : 'text-[#d6b43e]'}`}>{selectedEra}</em>
              </span>
            )}
            {selectedTheme !== 'All' && (
              <span>
                {' '}
                · <em className={`italic font-semibold ${isModern ? modernTheme.text : 'text-[#d6b43e]'}`}>{selectedTheme}</em>
              </span>
            )}
          </div>

          {(selectedEra !== 'All' || selectedTheme !== 'All' || searchQuery) && (
            <button
              onClick={() => {
                onEraChange('All');
                onThemeChange('All');
                onSearchChange('');
              }}
              className={`text-xs sm:text-sm font-bold hover:underline cursor-pointer ${
                isModern ? modernTheme.text : 'text-[#d6b43e]'
              }`}
            >
              Reset Filters
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
