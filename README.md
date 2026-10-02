# 📜 The Hundred Poems of Famous Ones
### *A Canonical Royal Anthology of Classical, Renaissance, Romantic & Victorian Verse*

[![GitHub Pages Deployment](https://img.shields.io/badge/GitHub_Pages-Ready-2ea44f?style=for-the-badge&logo=github)](https://pages.github.com/)
[![React 19](https://img.shields.io/badge/React-19.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

---

## 🎨 Historic Color System & Royal Palette

The design is governed by the authentic Renaissance and illuminated manuscript pigment system:

| Swatch | Color Name | Hex Code | Purpose & Semantic Role |
| :---: | :--- | :---: | :--- |
| <img src="https://via.placeholder.com/24/793327/793327.png" width="20" height="20" /> | **Hay's Russet** | `#793327` | Primary royal accent, button fills, illuminated drop caps, seals |
| <img src="https://via.placeholder.com/24/c2ae93/c2ae93.png" width="20" height="20" /> | **Ecru Canvas** | `#c2ae93` | Historic parchment undertones, secondary captions, era pill borders |
| <img src="https://via.placeholder.com/24/d6b43e/d6b43e.png" width="20" height="20" /> | **Olive Ocher / Gold** | `#d6b43e` | Glossary highlights, word definitions, gold leaf badges, active indicators |
| <img src="https://via.placeholder.com/24/547076/547076.png" width="20" height="20" /> | **Dark Medici Blue** | `#547076` | Night canvas backdrop, container borders, philosophical dividers |
| <img src="https://via.placeholder.com/24/12191b/12191b.png" width="20" height="20" /> | **Deep Medici Night** | `#12191b` | Default obsidian parchment canvas |

---

## ✨ Features & Architecture

### 1. 🪶 100 Canonical Poems (Poem I to Poem C)
- Full uncompromised canon spanning **8 Historic Eras**:
  - *Elizabethan & Jacobean* (Shakespeare, Donne, Jonson, Spenser, Herrick, Herbert)
  - *Restoration & Augustan* (Milton, Dryden, Pope, Marvell, Gray)
  - *Romantic Dawn & High Romanticism* (Blake, Wordsworth, Coleridge, Byron, Shelley, Keats, Burns)
  - *Victorian Epoch* (Tennyson, Robert Browning, Elizabeth Barrett Browning, Arnold, Rossetti, Hopkins)
  - *American Renaissance* (Poe, Dickinson, Whitman, Longfellow, Melville, Emerson)
  - *Decadence & Aestheticism* (Wilde, Dowson, Swinburne, Symons)
  - *Early Modernism* (Yeats, Hardy, Housman, Thomas)
- Each poem includes full multi-stanza verses, philosophical commentary, historical genesis, and thematic tags (*Love, Mortality, Nature, Eternity, Melancholy, Beauty, Divine, Heroism*).

### 2. 🖼️ Poet Biographies & Oval Renaissance Portraits
- **Dedicated Poets & Bards Gallery (`/poets` view)**:
  - Browse every canonical bard from William Shakespeare to Emily Dickinson, John Keats, and Lord Byron.
  - Original **oval-shaped Renaissance museum portrait frames** with gilded gold borders and shadow depth.
  - Comprehensive historical life chronicles, literary movements, signature styles, and direct links to their poems.
- **Interactive Poet Hover Cards**:
  - Hover over any poet's name anywhere on poem cards, ledger rows, or within the reader modal to open an instant preview card with their oval portrait, birth/death dates, era, and summary.

### 3. 📖 Interactive Word Meanings & "See All at Once" Glossaries
- **Underlined In-Verse Vocabulary**:
  - Archaic, classical, and poetic words (*e.g., "visage", "temperate", "dulcimer", "chariot", "slumber", "elysian"*) are delicately underlined in gold.
  - **Hover Tooltip**: Hovering over any word presents an illuminated definition card with pronunciation, part of speech, and poetic context.
- **"See All at Once" Button**:
  - Toggle the **See All Meanings** control in the reader toolbar to instantly highlight all vocabulary throughout the poem and open an illuminated dictionary panel listing every defined word side by side.

### 4. 🎙️ Poetic Cadence & Voice Selection
- **Measured Recitation**: Speech synthesis calibrated for poetic meter, lyrical pauses between stanzas, and stanza-by-stanza highlighting.
- **Poet Voice Profiles**:
  - *Classical Bard* (measured, deep resonance)
  - *Romantic Lyrical* (gentle, rhythmic cadence)
  - *Victorian Dignified* (formal, clear articulation)
  - *Mystic Oracle* (slow, solemn timbre)

### 5. 🔮 Royal Oracle of Bibliomancy
- Cast random poetic divination: draw a poem based on fate, mood, or inquiry to receive personal philosophical reflection.

### 6. 🌓 Dual Aesthetic Editions
- **Royal Heritage Edition**: Gilded parchment typography, Renaissance serif headers, antique drop caps.
- **Modern Editorial Edition**: Brutalist Swiss layout, bold monochrome contrast, high-density ledger grid.

---

## 🚀 GitHub Pages Deployment

The repository is pre-configured with relative base paths (`./`) in `vite.config.ts` and automated GitHub Pages build workflows.

### Option A: Automatic Deployment (Recommended)
1. Push this repository to GitHub on `main` or `master`.
2. Go to **Settings** → **Pages** on your repository.
3. Under **Build and deployment** → **Source**, select **GitHub Actions**.
4. The workflow in `.github/workflows/deploy.yml` will automatically build and publish your site!

### Option B: Manual Command-Line Deployment
```bash
# 1. Install dependencies
npm install

# 2. Build and publish directly to the gh-pages branch
npm run deploy
```

The `npm run deploy` script executes `predeploy` (`npm run build`) and publishes the `dist/` folder via the `gh-pages` CLI package.

---

## 🛠️ Local Development

```bash
# Install dependencies
npm install

# Start Vite development server
npm run dev

# Run TypeScript lint verification
npm run lint

# Compile production bundle
npm run build
```

---

## 🏛️ Project Directory Structure

```
├── .github/workflows/
│   └── deploy.yml            # Automated GitHub Pages CI/CD workflow
├── src/
│   ├── components/
│   │   ├── FilterBar.tsx          # Multi-criterion era/theme/sort filter controls
│   │   ├── HomeHeroView.tsx       # Illuminated editorial landing & Poem of the Day
│   │   ├── PoemCard.tsx           # Grid, ledger, and expanded verse preview cards
│   │   ├── PoetHoverCard.tsx      # Hover card with oval Renaissance portrait
│   │   ├── PoetsGalleryView.tsx   # Dedicated Poets & Bards biographical gallery
│   │   ├── ReaderModal.tsx        # Immersive reading chamber with voice & glossary
│   │   ├── RoyalHeader.tsx        # 4-color pigment navigation bar & theme switcher
│   │   ├── RoyalOracleModal.tsx   # Bibliomancy divination chamber
│   │   ├── VerseLineWithGloss.tsx # Tokenizer & inline vocabulary glossing engine
│   │   └── WordGlossaryTooltip.tsx# Illuminated golden word definition popover
│   ├── data/
│   │   ├── poetDictionary.ts      # Shared poetic lexicon & dynamic line glossing
│   │   ├── poets.ts               # Complete biographical records & portrait URLs
│   │   ├── poemMeanings.ts        # Philosophical commentary and interpretations
│   │   └── poems.ts               # Canonical Centum (Poems 1 - 100)
│   ├── utils/
│   │   ├── ambientSound.ts        # Web Audio atmospheric synthesizers
│   │   ├── audioReciter.ts        # SpeechSynthesis poetic cadence engine
│   │   └── themeStyles.ts         # Authentic 4-color palette configuration
│   ├── types.ts                   # TypeScript interfaces & domain types
│   ├── App.tsx                    # Root orchestrator & navigation dispatcher
│   └── main.tsx                   # React 19 entry point
├── package.json                   # Dependencies, build scripts & gh-pages config
└── vite.config.ts                 # Base path './' for universal static deployment
```

---

*“A poem should be equal to: / Not true. / For all the history of grief / An empty doorway and a maple leaf.” — Archibald MacLeish*
