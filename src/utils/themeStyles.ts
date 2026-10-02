import { ReadingTheme } from '../types';

export interface ThemeColors {
  name: ReadingTheme;
  label: string;
  bg: string;
  cardBg: string;
  cardHover: string;
  text: string;
  textMuted: string;
  subtext: string;
  quote: string;
  goldText: string;
  border: string;
  // Exact 4 palette colors
  russet: string;
  ecru: string;
  ocher: string;
  medici: string;
  // Border and background classes
  russetBorder: string;
  russetBg: string;
  ocherBorder: string;
  ocherBg: string;
  mediciBorder: string;
  mediciBg: string;
  accent: string;
}

export const THEME_STYLES: Record<ReadingTheme, ThemeColors> = {
  medici: {
    name: 'medici',
    label: 'Dark Medici Blue',
    bg: 'bg-[#12191b]',
    cardBg: 'bg-[#182326]',
    cardHover: 'hover:bg-[#1f2d30]',
    text: 'text-[#f5f2eb]',
    textMuted: 'text-[#c2ae93]',
    subtext: 'text-[#c2ae93]',
    quote: 'text-[#f5f2eb]',
    goldText: 'text-[#d6b43e]',
    border: 'border-[#547076]/30',
    russet: 'text-[#793327]',
    ecru: 'text-[#c2ae93]',
    ocher: 'text-[#d6b43e]',
    medici: 'text-[#547076]',
    russetBorder: 'border-[#793327]',
    russetBg: 'bg-[#793327]/15',
    ocherBorder: 'border-[#d6b43e]/40',
    ocherBg: 'bg-[#d6b43e]/15',
    mediciBorder: 'border-[#547076]/40',
    mediciBg: 'bg-[#547076]/20',
    accent: '#d6b43e',
  },
  ecru: {
    name: 'ecru',
    label: 'Ecru Parchment',
    bg: 'bg-[#faf7f0]',
    cardBg: 'bg-[#ffffff]',
    cardHover: 'hover:bg-[#f5eedf]',
    text: 'text-[#18130f]',
    textMuted: 'text-[#524133]',
    subtext: 'text-[#524133]',
    quote: 'text-[#18130f]',
    goldText: 'text-[#8f6d14]',
    border: 'border-[#baa386]',
    russet: 'text-[#793327]',
    ecru: 'text-[#826649]',
    ocher: 'text-[#8f6d14]',
    medici: 'text-[#2e4c52]',
    russetBorder: 'border-[#793327]/50',
    russetBg: 'bg-[#793327]/12',
    ocherBorder: 'border-[#8f6d14]/40',
    ocherBg: 'bg-[#8f6d14]/12',
    mediciBorder: 'border-[#2e4c52]/40',
    mediciBg: 'bg-[#2e4c52]/12',
    accent: '#793327',
  },
  russet: {
    name: 'russet',
    label: "Hay's Russet",
    bg: 'bg-[#1c0f0d]',
    cardBg: 'bg-[#251512]',
    cardHover: 'hover:bg-[#2f1b17]',
    text: 'text-[#fdf9f5]',
    textMuted: 'text-[#c2ae93]',
    subtext: 'text-[#c2ae93]',
    quote: 'text-[#fdf9f5]',
    goldText: 'text-[#d6b43e]',
    border: 'border-[#793327]/50',
    russet: 'text-[#a64737]',
    ecru: 'text-[#c2ae93]',
    ocher: 'text-[#d6b43e]',
    medici: 'text-[#547076]',
    russetBorder: 'border-[#793327]',
    russetBg: 'bg-[#793327]/25',
    ocherBorder: 'border-[#d6b43e]/40',
    ocherBg: 'bg-[#d6b43e]/15',
    mediciBorder: 'border-[#547076]/40',
    mediciBg: 'bg-[#547076]/20',
    accent: '#d6b43e',
  },
  noir: {
    name: 'noir',
    label: 'Obsidian & Gold',
    bg: 'bg-[#0f1113]',
    cardBg: 'bg-[#15191b]',
    cardHover: 'hover:bg-[#1d2225]',
    text: 'text-[#f3f0e8]',
    textMuted: 'text-[#c2ae93]',
    subtext: 'text-[#c2ae93]',
    quote: 'text-[#f3f0e8]',
    goldText: 'text-[#d6b43e]',
    border: 'border-stone-800',
    russet: 'text-[#793327]',
    ecru: 'text-[#c2ae93]',
    ocher: 'text-[#d6b43e]',
    medici: 'text-[#547076]',
    russetBorder: 'border-[#793327]/60',
    russetBg: 'bg-[#793327]/20',
    ocherBorder: 'border-[#d6b43e]/40',
    ocherBg: 'bg-[#d6b43e]/15',
    mediciBorder: 'border-[#547076]/30',
    mediciBg: 'bg-[#547076]/15',
    accent: '#d6b43e',
  },
};

export interface ModernThemeColors {
  name: ReadingTheme;
  label: string;
  bg: string;
  cardBg: string;
  cardHover: string;
  headerBg: string;
  text: string;
  textMuted: string;
  border: string;
  accent: string;
  accentBg: string;
  accentText: string;
  pillBg: string;
  pillText: string;
  buttonBg: string;
  buttonText: string;
  tagBorder: string;
  tagBg: string;
  tagText: string;
}

export const MODERN_THEME_STYLES: Record<ReadingTheme, ModernThemeColors> = {
  medici: {
    name: 'medici',
    label: 'Medici Minimalist',
    bg: 'bg-[#fcfbfa]',
    cardBg: 'bg-white',
    cardHover: 'hover:bg-stone-50',
    headerBg: 'bg-[#fcfbfa]',
    text: 'text-[#12191b]',
    textMuted: 'text-[#547076]',
    border: 'border-black',
    accent: '#547076',
    accentBg: 'bg-[#547076]',
    accentText: 'text-white',
    pillBg: 'bg-[#182022]',
    pillText: 'text-white',
    buttonBg: 'bg-[#182022] hover:bg-[#253336]',
    buttonText: 'text-white',
    tagBorder: 'border-black/30',
    tagBg: 'bg-stone-100',
    tagText: 'text-[#12191b]',
  },
  ecru: {
    name: 'ecru',
    label: 'Ecru Editorial',
    bg: 'bg-[#f7f3ea]',
    cardBg: 'bg-[#ffffff]',
    cardHover: 'hover:bg-[#fcfaf5]',
    headerBg: 'bg-[#f7f3ea]',
    text: 'text-[#1a140e]',
    textMuted: 'text-[#594738]',
    border: 'border-[#261e17]',
    accent: '#793327',
    accentBg: 'bg-[#793327]',
    accentText: 'text-[#fdfaf5]',
    pillBg: 'bg-[#261e17]',
    pillText: 'text-[#f7f3ea]',
    buttonBg: 'bg-[#261e17] hover:bg-[#3d3126]',
    buttonText: 'text-[#fdfaf5]',
    tagBorder: 'border-[#261e17]/30',
    tagBg: 'bg-[#eee8db]',
    tagText: 'text-[#261e17]',
  },
  russet: {
    name: 'russet',
    label: "Hay's Russet Modern",
    bg: 'bg-[#faf4f2]',
    cardBg: 'bg-white',
    cardHover: 'hover:bg-[#fdf9f8]',
    headerBg: 'bg-[#faf4f2]',
    text: 'text-[#1f1311]',
    textMuted: 'text-[#793327]',
    border: 'border-[#793327]',
    accent: '#793327',
    accentBg: 'bg-[#793327]',
    accentText: 'text-white',
    pillBg: 'bg-[#793327]',
    pillText: 'text-[#fdf9f5]',
    buttonBg: 'bg-[#793327] hover:bg-[#8f3d2f]',
    buttonText: 'text-white',
    tagBorder: 'border-[#793327]/40',
    tagBg: 'bg-[#793327]/10',
    tagText: 'text-[#793327]',
  },
  noir: {
    name: 'noir',
    label: 'Obsidian & Ocher Modern',
    bg: 'bg-[#0d1113]',
    cardBg: 'bg-[#151a1d]',
    cardHover: 'hover:bg-[#1b2226]',
    headerBg: 'bg-[#0d1113]',
    text: 'text-[#f6f6f6]',
    textMuted: 'text-[#9ca3af]',
    border: 'border-[#38454a]',
    accent: '#d6b43e',
    accentBg: 'bg-[#d6b43e]',
    accentText: 'text-[#12191b]',
    pillBg: 'bg-[#d6b43e]',
    pillText: 'text-[#12191b]',
    buttonBg: 'bg-[#d6b43e] hover:bg-[#e4c34e]',
    buttonText: 'text-[#12191b]',
    tagBorder: 'border-[#38454a]',
    tagBg: 'bg-[#1e262a]',
    tagText: 'text-[#d6b43e]',
  },
};

export const COLOR_SWATCHES = [
  { name: "Hay's Russet", hex: '#793327', description: 'Classical dignity & historical passion' },
  { name: 'Ecru', hex: '#c2ae93', description: 'Aged parchment & tranquil restraint' },
  { name: 'Olive Ocher', hex: '#d6b43e', description: 'Gilded illumination & poetic brilliance' },
  { name: 'Dark Medici Blue', hex: '#547076', description: 'Renaissance depth & solemn majesty' },
];
