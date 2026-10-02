import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUp, ArrowRight, Bookmark, CheckCircle, Search, Zap } from 'lucide-react';
import { Poem, Era, ThemeCategory, ReadingTheme, AppView, UIMode, PoetInfo } from './types';
import { POEMS, getPoemOfTheDay } from './data/poems';
import { THEME_STYLES, MODERN_THEME_STYLES } from './utils/themeStyles';
import { ambientSound, AmbientAtmosphere } from './utils/ambientSound';

import { RoyalHeader } from './components/RoyalHeader';
import { HomeHeroView } from './components/HomeHeroView';
import { FilterBar, SortOption, ViewLayout } from './components/FilterBar';
import { PoemCard } from './components/PoemCard';
import { ReaderModal } from './components/ReaderModal';
import { RoyalOracleModal } from './components/RoyalOracleModal';
import { PoetsGalleryView } from './components/PoetsGalleryView';

export default function App() {
  // Current view: home or archive or oracle or saved
  const [currentView, setCurrentView] = useState<AppView>('home');

  // UI Mode: 'classic' or 'modern'
  const [uiMode, setUiMode] = useState<UIMode>(() => {
    const saved = localStorage.getItem('royal_anthology_ui_mode');
    return (saved as UIMode) || 'classic';
  });

  // Reading theme from exact requested palette
  const [theme, setTheme] = useState<ReadingTheme>(() => {
    const saved = localStorage.getItem('royal_anthology_theme');
    return (saved as ReadingTheme) || 'medici';
  });

  // Ambient sound atmosphere (rain, fireplace, library, drone, off)
  const [ambientMode, setAmbientMode] = useState<AmbientAtmosphere>('off');

  // Bookmarks & Read items
  const [bookmarks, setBookmarks] = useState<number[]>(() => {
    try {
      const saved = localStorage.getItem('royal_anthology_bookmarks');
      return saved ? JSON.parse(saved) : [1, 7, 13, 20, 31];
    } catch {
      return [1, 7, 13, 20, 31];
    }
  });

  const [readPoems, setReadPoems] = useState<number[]>(() => {
    try {
      const saved = localStorage.getItem('royal_anthology_read');
      return saved ? JSON.parse(saved) : [1, 2];
    } catch {
      return [1, 2];
    }
  });

  // Filter & Search states
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedEra, setSelectedEra] = useState<Era>('All');
  const [selectedTheme, setSelectedTheme] = useState<ThemeCategory>('All');
  const [sortBy, setSortBy] = useState<SortOption>('canonical');
  const [viewLayout, setViewLayout] = useState<ViewLayout>('grid');

  // Modals & Active Poem
  const [activePoem, setActivePoem] = useState<Poem | null>(null);
  const [isOracleOpen, setIsOracleOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Daily Poem
  const dailyPoem = useMemo(() => getPoemOfTheDay(), []);

  // Sync UI mode
  useEffect(() => {
    localStorage.setItem('royal_anthology_ui_mode', uiMode);
  }, [uiMode]);

  // Sync theme
  useEffect(() => {
    localStorage.setItem('royal_anthology_theme', theme);
  }, [theme]);

  // Sync bookmarks
  useEffect(() => {
    localStorage.setItem('royal_anthology_bookmarks', JSON.stringify(bookmarks));
  }, [bookmarks]);

  // Sync read items
  useEffect(() => {
    localStorage.setItem('royal_anthology_read', JSON.stringify(readPoems));
  }, [readPoems]);

  // Scroll listener
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleToggleUIMode = () => {
    setUiMode((prev) => (prev === 'classic' ? 'modern' : 'classic'));
  };

  // Navigation helper
  const handleNavigate = (view: AppView) => {
    if (view === 'oracle') {
      setIsOracleOpen(true);
    } else {
      setCurrentView(view);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSelectPoet = (_poet: PoetInfo) => {
    setCurrentView('poets');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Ambient sound handler
  const handleAmbientChange = (mode: AmbientAtmosphere) => {
    setAmbientMode(mode);
    ambientSound.setMode(mode);
  };

  // Bookmark toggle
  const handleToggleBookmark = (id: number) => {
    setBookmarks((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Read status toggle
  const handleToggleRead = (id: number) => {
    setReadPoems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Filter & Sort computation
  const filteredPoems = useMemo(() => {
    let result = [...POEMS];

    if (currentView === 'saved') {
      result = result.filter((p) => bookmarks.includes(p.id) || readPoems.includes(p.id));
    }

    if (selectedEra !== 'All') {
      result = result.filter((p) => p.era === selectedEra);
    }

    if (selectedTheme !== 'All') {
      result = result.filter((p) => p.theme === selectedTheme);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.author.toLowerCase().includes(q) ||
          p.era.toLowerCase().includes(q) ||
          p.theme.toLowerCase().includes(q) ||
          p.famousExcerpt.toLowerCase().includes(q) ||
          (p.meaning && p.meaning.toLowerCase().includes(q)) ||
          p.lines.some((l) => l.toLowerCase().includes(q))
      );
    }

    result.sort((a, b) => {
      if (sortBy === 'canonical') return a.id - b.id;
      if (sortBy === 'title') return a.title.localeCompare(b.title);
      if (sortBy === 'author') return a.author.localeCompare(b.author);
      if (sortBy === 'year') {
        const numA = parseInt(a.year.replace(/[^0-9]/g, '')) || 0;
        const numB = parseInt(b.year.replace(/[^0-9]/g, '')) || 0;
        return numA - numB;
      }
      return 0;
    });

    return result;
  }, [currentView, bookmarks, readPoems, selectedEra, selectedTheme, searchQuery, sortBy]);

  const currentPoemIndex = activePoem
    ? filteredPoems.findIndex((p) => p.id === activePoem.id)
    : -1;

  const handlePrevPoem = () => {
    if (currentPoemIndex > 0) {
      setActivePoem(filteredPoems[currentPoemIndex - 1]);
    }
  };

  const handleNextPoem = () => {
    if (currentPoemIndex >= 0 && currentPoemIndex < filteredPoems.length - 1) {
      setActivePoem(filteredPoems[currentPoemIndex + 1]);
    }
  };

  const currentTheme = THEME_STYLES[theme];
  const modernTheme = MODERN_THEME_STYLES[theme];
  const isModern = uiMode === 'modern';

  return (
    <div
      className={`min-h-screen transition-colors duration-300 flex flex-col theme-${theme} ${
        isModern
          ? `${modernTheme.bg} ${modernTheme.text} font-sans-ui selection:bg-[#d6b43e] selection:text-[#12191b]`
          : `${currentTheme.bg} ${currentTheme.text} font-royal selection:bg-[#d6b43e] selection:text-[#12191b]`
      }`}
      data-theme={theme}
    >
      {/* Header with Mode Toggle & Fixed Theme Dropdown */}
      <RoyalHeader
        currentView={currentView}
        onNavigate={handleNavigate}
        theme={theme}
        onThemeChange={setTheme}
        bookmarksCount={bookmarks.length}
        readCount={readPoems.length}
        totalCount={POEMS.length}
        ambientMode={ambientMode}
        onAmbientChange={handleAmbientChange}
        uiMode={uiMode}
        onUIModeToggle={handleToggleUIMode}
      />

      {/* Main Content Area */}
      <main className="flex-1 pb-20">
        {currentView === 'home' ? (
          /* SEPARATE HOME HERO VIEW */
          <HomeHeroView
            theme={theme}
            dailyPoem={dailyPoem}
            onReadPoem={(p) => setActivePoem(p)}
            onNavigate={handleNavigate}
            onQuickRecite={(p) => setActivePoem(p)}
            totalPoems={POEMS.length}
            uiMode={uiMode}
            readCount={readPoems.length}
          />
        ) : currentView === 'poets' ? (
          /* DEDICATED POETS & BARDS GALLERY VIEW */
          <PoetsGalleryView
            theme={theme}
            uiMode={uiMode}
            onSelectPoem={(p: Poem) => setActivePoem(p)}
            onNavigateHome={() => handleNavigate('home')}
            onNavigateArchive={() => handleNavigate('archive')}
          />
        ) : (
          /* ARCHIVE & SAVED VIEW */
          <div className="pt-8 sm:pt-12">
            {/* View Title Bar */}
            <div
              className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 sm:mb-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 ${
                isModern ? `border-b ${modernTheme.border}` : `border-b ${currentTheme.border}`
              }`}
            >
              <div>
                <span
                  className={`text-xs sm:text-sm font-bold tracking-[0.25em] uppercase block mb-1 ${
                    isModern ? `font-mono ${modernTheme.textMuted}` : 'font-royal text-[#d6b43e]'
                  }`}
                >
                  {currentView === 'saved'
                    ? '[PERSONAL REPOSITORY // SANCTUARY]'
                    : '[CANONICAL CENTUM // 100 POEMS]'}
                </span>
                <h2
                  className={`text-2xl sm:text-4xl font-bold uppercase tracking-wider ${
                    isModern ? `font-sans-ui font-black tracking-tight ${modernTheme.text}` : `font-royal ${currentTheme.text}`
                  }`}
                >
                  {currentView === 'saved' ? 'Saved & Completed Verses' : 'All One Hundred Poems'}
                </h2>
                <p
                  className={`text-xs sm:text-sm font-sans-ui mt-1 font-medium ${
                    isModern ? modernTheme.textMuted : currentTheme.subtext
                  }`}
                >
                  {currentView === 'saved'
                    ? `Reviewing your ${bookmarks.length} saved bookmarks and ${readPoems.length} completed verses.`
                    : 'A comprehensive archive arranged from Poem I through Poem C in chronological and canonical order with meanings and definitions.'}
                </p>
              </div>

              {currentView === 'saved' && (
                <button
                  onClick={() => setCurrentView('archive')}
                  className={`px-4 py-2 border text-xs sm:text-sm font-bold uppercase tracking-wider transition-all flex items-center space-x-2 ${
                    isModern
                      ? `${modernTheme.border} ${modernTheme.cardBg} ${modernTheme.cardHover} ${modernTheme.text} font-sans-ui`
                      : `rounded-xl border-[#547076]/40 ${currentTheme.subtext} hover:text-[#d6b43e] hover:border-[#d6b43e] font-royal`
                  }`}
                >
                  <span>Return to Full 100</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Filter Controls */}
            <FilterBar
              theme={theme}
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              selectedEra={selectedEra}
              onEraChange={setSelectedEra}
              selectedTheme={selectedTheme}
              onThemeChange={setSelectedTheme}
              sortBy={sortBy}
              onSortChange={setSortBy}
              viewLayout={viewLayout}
              onViewLayoutChange={setViewLayout}
              resultsCount={filteredPoems.length}
              totalCount={currentView === 'saved' ? bookmarks.length : POEMS.length}
              uiMode={uiMode}
            />

            {/* Poems Grid / Ledger / Expanded */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {filteredPoems.length === 0 ? (
                <div
                  className={`text-center py-20 border ${
                    isModern
                      ? `${modernTheme.border} ${modernTheme.cardBg} ${modernTheme.text}`
                      : `border-[#547076]/40 rounded-2xl ${currentTheme.cardBg}`
                  } p-8 max-w-xl mx-auto shadow-sm`}
                >
                  <h3
                    className={`text-xl sm:text-2xl font-bold ${
                      isModern ? `font-sans-ui font-extrabold ${modernTheme.text}` : `font-royal ${currentTheme.text}`
                    } mb-2`}
                  >
                    No Verses Found
                  </h3>
                  <p className={`text-xs sm:text-sm font-sans-ui mb-6 ${isModern ? modernTheme.textMuted : 'text-[#c2ae93]'}`}>
                    {currentView === 'saved'
                      ? 'You have not saved any poems yet. Bookmark poems while exploring to preserve them here.'
                      : 'No poems matched your current filter criteria.'}
                  </p>
                  <button
                    onClick={() => {
                      setSelectedEra('All');
                      setSelectedTheme('All');
                      setSearchQuery('');
                      if (currentView === 'saved') setCurrentView('archive');
                    }}
                    className={`px-6 py-3 font-bold text-xs sm:text-sm uppercase tracking-wider transition-all shadow-sm cursor-pointer ${
                      isModern
                        ? `${modernTheme.buttonBg} ${modernTheme.buttonText} font-sans-ui border ${modernTheme.border}`
                        : 'rounded-xl bg-[#793327] hover:bg-[#8f3d2f] text-[#fdf9f5] font-royal'
                    }`}
                  >
                    Explore The 100 Poems
                  </button>
                </div>
              ) : viewLayout === 'ledger' ? (
                <div
                  className={`border ${
                    isModern
                      ? `${modernTheme.border} ${modernTheme.cardBg}`
                      : `rounded-2xl border-[#547076]/35 ${currentTheme.cardBg}`
                  } shadow-sm overflow-hidden`}
                >
                  {filteredPoems.map((poem) => (
                    <PoemCard
                      key={poem.id}
                      poem={poem}
                      theme={theme}
                      isBookmarked={bookmarks.includes(poem.id)}
                      isRead={readPoems.includes(poem.id)}
                      onToggleBookmark={handleToggleBookmark}
                      onToggleRead={handleToggleRead}
                      onReadPoem={(p) => setActivePoem(p)}
                      onQuickRecite={(p) => setActivePoem(p)}
                      onSelectPoet={handleSelectPoet}
                      viewLayout={viewLayout}
                      uiMode={uiMode}
                    />
                  ))}
                </div>
              ) : viewLayout === 'expanded' ? (
                <div className="max-w-4xl mx-auto space-y-6">
                  {filteredPoems.map((poem) => (
                    <PoemCard
                      key={poem.id}
                      poem={poem}
                      theme={theme}
                      isBookmarked={bookmarks.includes(poem.id)}
                      isRead={readPoems.includes(poem.id)}
                      onToggleBookmark={handleToggleBookmark}
                      onToggleRead={handleToggleRead}
                      onReadPoem={(p) => setActivePoem(p)}
                      onQuickRecite={(p) => setActivePoem(p)}
                      onSelectPoet={handleSelectPoet}
                      viewLayout={viewLayout}
                      uiMode={uiMode}
                    />
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredPoems.map((poem) => (
                    <PoemCard
                      key={poem.id}
                      poem={poem}
                      theme={theme}
                      isBookmarked={bookmarks.includes(poem.id)}
                      isRead={readPoems.includes(poem.id)}
                      onToggleBookmark={handleToggleBookmark}
                      onToggleRead={handleToggleRead}
                      onReadPoem={(p) => setActivePoem(p)}
                      onQuickRecite={(p) => setActivePoem(p)}
                      onSelectPoet={handleSelectPoet}
                      viewLayout={viewLayout}
                      uiMode={uiMode}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className={`border-t ${isModern ? `${modernTheme.border} ${modernTheme.cardBg} ${modernTheme.text}` : `border-[#547076]/35 ${currentTheme.cardBg} ${currentTheme.text}`} py-12 transition-colors`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3
            className={`text-lg sm:text-xl font-bold uppercase tracking-[0.24em] mb-2 ${
              isModern ? `font-sans-ui font-black ${modernTheme.text}` : `font-royal ${currentTheme.text}`
            }`}
          >
            THE HUNDRED POEMS OF FAMOUS ONES
          </h3>

          <p
            className={`text-sm sm:text-base italic max-w-md mx-auto mb-6 leading-relaxed ${
              isModern ? `font-sans-ui not-italic font-medium ${modernTheme.textMuted}` : `font-poem ${currentTheme.subtext}`
            }`}
          >
            “Poetry is the rhythmical creation of beauty in words.” — Edgar Allan Poe
          </p>

          <div
            className={`flex flex-wrap justify-center items-center gap-4 sm:gap-8 text-xs sm:text-sm font-semibold tracking-widest mb-6 ${
              isModern ? `font-mono ${modernTheme.textMuted}` : `font-royal ${currentTheme.subtext}`
            }`}
          >
            <span>One Hundred Canonical Poems</span>
            <span>·</span>
            <span>Eight Historic Epochs</span>
            <span>·</span>
            <span>Meanings & Lexicon Defined</span>
          </div>

          <div className="flex items-center justify-center space-x-2 text-xs font-sans-ui opacity-75">
            <span className="w-3 h-3 rounded-full bg-[#793327]" title="Hay's Russet" />
            <span className="w-3 h-3 rounded-full bg-[#c2ae93]" title="Ecru" />
            <span className="w-3 h-3 rounded-full bg-[#d6b43e]" title="Olive Ocher" />
            <span className="w-3 h-3 rounded-full bg-[#547076]" title="Dark Medici Blue" />
            <span className="ml-2 font-medium">Hay's Russet · Ecru · Olive Ocher · Dark Medici</span>
          </div>
        </div>
      </footer>

      {/* Floating Back to Top Button */}
      {showScrollTop && (
        <button
          id="scroll-to-top-btn"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 p-3.5 rounded-full border border-[#d6b43e]/60 bg-[#182326] text-[#d6b43e] shadow-xl hover:scale-110 transition-all z-40"
          title="Return to top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}

      {/* Immersive Reader Modal */}
      <ReaderModal
        poem={activePoem}
        isOpen={!!activePoem}
        onClose={() => setActivePoem(null)}
        onPrev={handlePrevPoem}
        onNext={handleNextPoem}
        theme={theme}
        onThemeChange={setTheme}
        isBookmarked={activePoem ? bookmarks.includes(activePoem.id) : false}
        isRead={activePoem ? readPoems.includes(activePoem.id) : false}
        onToggleBookmark={handleToggleBookmark}
        onToggleRead={handleToggleRead}
        hasPrev={currentPoemIndex > 0}
        hasNext={currentPoemIndex >= 0 && currentPoemIndex < filteredPoems.length - 1}
        uiMode={uiMode}
        onSelectPoet={handleSelectPoet}
      />

      {/* Royal Oracle Divination Modal */}
      <RoyalOracleModal
        isOpen={isOracleOpen}
        onClose={() => setIsOracleOpen(false)}
        poems={POEMS}
        onSelectPoem={(p) => setActivePoem(p)}
        theme={theme}
        uiMode={uiMode}
      />
    </div>
  );
}
