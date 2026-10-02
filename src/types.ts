export type Era =
  | 'All'
  | 'Romanticism'
  | 'Victorian'
  | 'Renaissance'
  | 'Modernist'
  | 'Transcendentalist'
  | 'Mystic & Classical'
  | 'Harlem Renaissance'
  | 'Gothic & Decadent';

export type ThemeCategory =
  | 'All'
  | 'Love & Passion'
  | 'Mortality & Time'
  | 'Nature & Solitude'
  | 'Defiance & Valor'
  | 'Beauty & Art'
  | 'Spirit & Wonder'
  | 'Sorrow & Loss';

export interface VocabularyItem {
  word: string;
  definition: string;
  context?: string;
  partOfSpeech?: string;
  archaic?: boolean;
}

export interface Poem {
  id: number;
  romanId: string;
  title: string;
  author: string;
  authorDates: string;
  authorNationality: string;
  year: string;
  era: Exclude<Era, 'All'>;
  theme: Exclude<ThemeCategory, 'All'>;
  stanzas: string[][];
  lines: string[];
  famousExcerpt: string;
  commentary: string;
  meaning?: string;
  vocabulary?: VocabularyItem[];
}

export type ReadingTheme = 'medici' | 'ecru' | 'russet' | 'noir';
export type AppView = 'home' | 'archive' | 'poets' | 'oracle' | 'saved';
export type UIMode = 'classic' | 'modern';
export type FontSize = 'sm' | 'md' | 'lg' | 'xl';
export type PoemFont = 'cormorant' | 'cinzel' | 'classic' | 'modern';

export interface PoetInfo {
  id: string;
  name: string;
  dates: string;
  birthYear?: number;
  deathYear?: number;
  nationality: string;
  era: string;
  portraitUrl: string;
  summary: string;
  history: string;
  literaryStyle: string;
  famousQuote: string;
  pdfPage?: number;
  poemIds: number[];
}

export interface TypographySetting {
  fontFamily: PoemFont;
  fontSize: FontSize;
  lineHeight: 'tight' | 'normal' | 'relaxed';
  dropCap: boolean;
}

