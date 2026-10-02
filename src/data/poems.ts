import { Poem, Era, ThemeCategory } from '../types';
import { POEMS_PART_1 } from './poemsData1';
import { POEMS_PART_2 } from './poemsData2';
import { POEMS_PART_3 } from './poemsData3';
import { POEMS_PART_4 } from './poemsData4';
import { getPoemEnrichment } from './poemMeanings';

const RAW_POEMS = [
  ...POEMS_PART_1,
  ...POEMS_PART_2,
  ...POEMS_PART_3,
  ...POEMS_PART_4,
];

export const POEMS: Poem[] = RAW_POEMS.map((p) => {
  const enrichment = getPoemEnrichment(p.id, p.title, p.author, p.era, p.theme);
  return {
    ...p,
    meaning: p.meaning || enrichment.meaning,
    vocabulary: p.vocabulary || enrichment.vocabulary,
  };
});


export const ERAS: Era[] = [
  'All',
  'Romanticism',
  'Victorian',
  'Renaissance',
  'Modernist',
  'Transcendentalist',
  'Mystic & Classical',
  'Harlem Renaissance',
  'Gothic & Decadent',
];

export const THEMES: ThemeCategory[] = [
  'All',
  'Love & Passion',
  'Mortality & Time',
  'Nature & Solitude',
  'Defiance & Valor',
  'Beauty & Art',
  'Spirit & Wonder',
  'Sorrow & Loss',
];

export const ERA_DESCRIPTIONS: Record<string, string> = {
  Romanticism: 'Sublime nature, intense emotion, and individual imagination (1780–1850)',
  Victorian: 'Industrial transformations, moral duty, and existential doubt (1837–1901)',
  Renaissance: 'Petrarchan passion, metaphysical conceits, and lyrical eloquence (1500–1660)',
  Modernist: 'Fragmented forms, psychological depths, and post-war realities (1890–1950)',
  Transcendentalist: 'Nature’s divinity, cosmic self-reliance, and transcendental spirit (1830–1880)',
  'Mystic & Classical': 'Ancient wisdom, Sufi ecstasy, and spiritual transcendence (1000–1930)',
  'Harlem Renaissance': 'Jazz rhythms, racial pride, and cultural rebirth (1918–1937)',
  'Gothic & Decadent': 'Macabre shadows, aesthetic decadence, and exquisite melancholy (1840–1900)',
};

export function getPoemOfTheDay(): Poem {
  // Deterministic poem based on day of year
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const diff = now.getTime() - start.getTime();
  const oneDay = 1000 * 60 * 60 * 24;
  const dayOfYear = Math.floor(diff / oneDay);
  const index = dayOfYear % POEMS.length;
  return POEMS[index];
}
