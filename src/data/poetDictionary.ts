import { VocabularyItem, Poem } from '../types';

export interface LexiconEntry {
  word: string;
  definition: string;
  partOfSpeech?: string;
  archaic?: boolean;
}

export const POETIC_LEXICON: Record<string, LexiconEntry> = {
  // Classical / Archaic Terms
  "wrought": { word: "Wrought", definition: "Carefully fashioned, crafted, or beaten into artistic form.", partOfSpeech: "verb / adj.", archaic: true },
  "turret": { word: "Turret", definition: "A small tower or high vantage point rising above a wall.", partOfSpeech: "noun" },
  "turrets": { word: "Turrets", definition: "Small towers extending above the walls of a castle or citadel.", partOfSpeech: "noun" },
  "ample": { word: "Ample", definition: "Spacious, generous, and abundant in scope or base.", partOfSpeech: "adj." },
  "slumber": { word: "Slumber", definition: "A state of sleep, repose, or spiritual inertia.", partOfSpeech: "noun / verb" },
  "slumbers": { word: "Slumbers", definition: "Rests in passive sleep or spiritual inaction.", partOfSpeech: "verb" },
  "bivouac": { word: "Bivouac", definition: "A temporary, open-air military camp, symbolizing the brevity of earthly life.", partOfSpeech: "noun" },
  "sublime": { word: "Sublime", definition: "Of supreme moral, aesthetic, or spiritual excellence inspiring awe.", partOfSpeech: "adj." },
  "vales": { word: "Vales", definition: "Valleys or rolling hollows between hills.", partOfSpeech: "noun", archaic: true },
  "sprightly": { word: "Sprightly", definition: "Animated, lively, and filled with vital spirit.", partOfSpeech: "adj." },
  "pensive": { word: "Pensive", definition: "Engaged in deep, reflective, or wistful contemplation.", partOfSpeech: "adj." },
  "fell": { word: "Fell", definition: "Cruel, deadly, or ferocious in circumstance or intent.", partOfSpeech: "adj." },
  "bludgeonings": { word: "Bludgeonings", definition: "Heavy, battering strikes or blows of misfortune.", partOfSpeech: "noun" },
  "menace": { word: "Menace", definition: "An impending threat, doom, or terrifying presence.", partOfSpeech: "noun" },
  "aspect": { word: "Aspect", definition: "Facial countenance, outward appearance, or serene gaze.", partOfSpeech: "noun" },
  "mellowed": { word: "Mellowed", definition: "Softened, ripened, and tempered into gentle harmony.", partOfSpeech: "adj." },
  "rove": { word: "Rove", definition: "To wander, roam, or journey without a fixed path.", partOfSpeech: "verb" },
  "roving": { word: "Roving", definition: "Wandering restlessly in pursuit of nocturnal love or adventure.", partOfSpeech: "noun / verb" },
  "sheath": { word: "Sheath", definition: "A protective scabbard for a blade; figuratively, the physical body.", partOfSpeech: "noun" },
  "visage": { word: "Visage", definition: "The face, facial countenance, or sculpted portrait.", partOfSpeech: "noun" },
  "pedestal": { word: "Pedestal", definition: "The architectural base supporting a monument or statue.", partOfSpeech: "noun" },
  "colossal": { word: "Colossal", definition: "Gigantic, immense, and awe-inspiring in physical proportion.", partOfSpeech: "adj." },
  "unravished": { word: "Unravished", definition: "Pure, pristine, untouched, and unblemished by decay.", partOfSpeech: "adj." },
  "sylvan": { word: "Sylvan", definition: "Associated with pastoral woodlands, groves, and rustling trees.", partOfSpeech: "adj." },
  "brede": { word: "Brede", definition: "An intricate intertwined braid, relief embroidery, or woven pattern.", partOfSpeech: "noun", archaic: true },
  "league": { word: "League", definition: "An ancient unit of nautical or overland distance, roughly three miles.", partOfSpeech: "noun" },
  "sundered": { word: "Sundered", definition: "Severed, violently split apart, or separated.", partOfSpeech: "adj. / verb" },
  "sabre": { word: "Sabre", definition: "A heavy cavalry sword with a curved cutting edge.", partOfSpeech: "noun" },
  "sabres": { word: "Sabres", definition: "Curved cavalry swords used in mounted combat charges.", partOfSpeech: "noun" },
  "beguiling": { word: "Beguiling", definition: "Charming, enchanting, or leading astray through sweet distraction.", partOfSpeech: "verb / adj." },
  "obeisance": { word: "Obeisance", definition: "A formal bow, curtsy, or gesture of humble deference.", partOfSpeech: "noun" },
  "nepenthe": { word: "Nepenthe", definition: "A mythical drug or elixir said to dispel all painful sorrow.", partOfSpeech: "noun", archaic: true },
  "surcease": { word: "Surcease", definition: "A complete cessation, relief, or respite from suffering.", partOfSpeech: "noun", archaic: true },
  "sepulchre": { word: "Sepulchre", definition: "A sacred tomb, vault, or stone burial monument.", partOfSpeech: "noun" },
  "sepulcher": { word: "Sepulcher", definition: "A burial vault or stone tomb for the departed.", partOfSpeech: "noun" },
  "tintinnabulation": { word: "Tintinnabulation", definition: "The ringing, pealing, or tinkling sound of bells (coined by Poe).", partOfSpeech: "noun" },
  "runic": { word: "Runic", definition: "Mysterious, ancient, and inscribed with secret magical runes.", partOfSpeech: "adj." },
  "euphony": { word: "Euphony", definition: "A pleasing, agreeable, and melodious combination of sounds.", partOfSpeech: "noun" },
  "monody": { word: "Monody", definition: "A solemn, solitary lament or funeral dirge.", partOfSpeech: "noun" },
  "paean": { word: "Paean", definition: "A triumphant song or shout of thanksgiving and victory.", partOfSpeech: "noun" },
  "knells": { word: "Knells", definition: "Rings solemn funeral bells sounding a person's death.", partOfSpeech: "verb / noun" },
  "lea": { word: "Lea", definition: "An open, grassy meadow or pastoral pasture.", partOfSpeech: "noun", archaic: true },
  "glebe": { word: "Glebe", definition: "Cultivated soil, farmland, or parish earth.", partOfSpeech: "noun", archaic: true },
  "jocund": { word: "Jocund", definition: "Cheerful, light-hearted, and joyful in spirit.", partOfSpeech: "adj." },
  "penury": { word: "Penury", definition: "Extreme poverty, destitution, and material hardship.", partOfSpeech: "noun" },
  "swain": { word: "Swain", definition: "A young country laborer, rustic youth, or pastoral lover.", partOfSpeech: "noun", archaic: true },
  "dirges": { word: "Dirges", definition: "Solemn funeral chants or mourning melodies.", partOfSpeech: "noun" },
  "epitaph": { word: "Epitaph", definition: "A commemorative inscription carved onto a tombstone.", partOfSpeech: "noun" },
  "sceptre": { word: "Sceptre", definition: "An ornamental royal staff held by a sovereign as an emblem of authority.", partOfSpeech: "noun" },
  "temporal": { word: "Temporal", definition: "Relating to worldly, secular, or earthly time rather than eternity.", partOfSpeech: "adj." },
  "strained": { word: "Strained", definition: "Constrained, forced, or extracted by compulsion.", partOfSpeech: "adj." },
  "enthroned": { word: "Enthroned", definition: "Invested with sovereign power and dwelling deeply within the heart.", partOfSpeech: "adj." },
  "attribute": { word: "Attribute", definition: "A quality, characteristic, or inherent property of divine nature.", partOfSpeech: "noun" },
  "feign": { word: "Feign", definition: "To invent imaginatively, represent fictitious fables, or pretend.", partOfSpeech: "verb", archaic: true },
  "bark": { word: "Bark", definition: "A small sailing vessel, ship, or barque traversing the waters.", partOfSpeech: "noun", archaic: true },
  "siren": { word: "Siren", definition: "A mythical sea nymph whose seductive songs lured sailors to reefs.", partOfSpeech: "noun" },
  "crypt": { word: "Crypt", definition: "An underground stone chamber, vault, or recessed recess.", partOfSpeech: "noun" },
  "irised": { word: "Irised", definition: "Shimmering with vibrant rainbow colors like mother-of-pearl.", partOfSpeech: "adj." },
  "triton": { word: "Triton", definition: "A Greek sea god, son of Poseidon, known for blowing his conch horn.", partOfSpeech: "proper noun" },
  "proteus": { word: "Proteus", definition: "An ancient prophetic Greek sea god capable of changing shape at will.", partOfSpeech: "proper noun" },
  "sordid": { word: "Sordid", definition: "Base, ignoble, avaricious, or degraded by worldly greed.", partOfSpeech: "adj." },
  "boon": { word: "Boon", definition: "A generous gift, blessing, or favor bestowed upon mortals.", partOfSpeech: "noun" },
  "forlorn": { word: "Forlorn", definition: "Desolate, forsaken, lonely, and bereft of solace.", partOfSpeech: "adj." },
  "clarion": { word: "Clarion", definition: "A shrill, clear, trumpet call summoning souls to action or awakening.", partOfSpeech: "noun" },
  "maenad": { word: "Maenad", definition: "A frenzied female nymph or ecstatic follower of Dionysus.", partOfSpeech: "noun" },
  "pumice": { word: "Pumice", definition: "Porous, light volcanic rock formed from cooled lava froth.", partOfSpeech: "noun" },
  "oozy": { word: "Oozy", definition: "Moist, marshy, or submerged in marine depths and soft slime.", partOfSpeech: "adj." },
  "cenotaph": { word: "Cenotaph", definition: "An empty monument or tomb erected in honor of someone buried elsewhere.", partOfSpeech: "noun" },
  "incantation": { word: "Incantation", definition: "A sacred chant, verbal spell, or ritual invocation possessing magical power.", partOfSpeech: "noun" },
  "rendezvous": { word: "Rendezvous", definition: "A predetermined meeting, tryst, or fateful gathering place.", partOfSpeech: "noun" },
  "barricade": { word: "Barricade", definition: "An improvised military barrier thrown across a road or trench.", partOfSpeech: "noun" },
  "quench": { word: "Quench", definition: "To extinguish, put out, or satisfy a burning desire or life flame.", partOfSpeech: "verb" },
  "nigh": { word: "Nigh", definition: "Close at hand, nearby, or imminent in space and time.", partOfSpeech: "adv. / adj.", archaic: true },
  "dominion": { word: "Dominion", definition: "Sovereign authority, empire, or territorial rule over realm and lands.", partOfSpeech: "noun" },
  "contrite": { word: "Contrite", definition: "Feeling or expressing deep, humble sorrow for moral wrongdoing.", partOfSpeech: "adj." },
  "reeking": { word: "Reeking", definition: "Emitting hot steam, smoke, or gunpowder fumes from warfare.", partOfSpeech: "adj." },
  "shard": { word: "Shard", definition: "A jagged piece of broken iron, shell casing, or pottery.", partOfSpeech: "noun" },
  "craven": { word: "Craven", definition: "A cowardly, spiritless person who retreats in the face of conflict.", partOfSpeech: "noun / adj." },
  "bestead": { word: "Bestead", definition: "Beset, placed in a perilous, difficult, or distressed situation.", partOfSpeech: "adj.", archaic: true },
  "languor": { word: "Languor", definition: "A state of pleasant, dreamy tiredness or tranquil stillness.", partOfSpeech: "noun" },
  "tremulous": { word: "Tremulous", definition: "Shaking, quivering, or vibrating with delicate emotion.", partOfSpeech: "adj." },
  "ecstasies": { word: "Ecstasies", definition: "Rapturous feelings of intense delight, transport, and joy.", partOfSpeech: "noun" },
  "heifer": { word: "Heifer", definition: "A young female cow that has not yet borne a calf.", partOfSpeech: "noun" },
  "sexton": { word: "Sexton", definition: "A church officer responsible for ringing the bells and tending churchyards.", partOfSpeech: "noun" },
  "noisome": { word: "Noisome", definition: "Offensive, foul-smelling, or disagreeable to the senses.", partOfSpeech: "adj.", archaic: true },
  "hermitage": { word: "Hermitage", definition: "The secluded dwelling, retreat, or cell of a contemplative hermit.", partOfSpeech: "noun" },
  "deity": { word: "Deity", definition: "Divine character, godhead, or supreme celestial creator.", partOfSpeech: "noun" },
  "rhodora": { word: "Rhodora", definition: "A wild deciduous shrub of northeastern America bearing delicate purple blossoms.", partOfSpeech: "noun" },
  "benedicite": { word: "Benedicite", definition: "A Latin canticle or blessing meaning 'bless ye the Lord.'", partOfSpeech: "noun / interj.", archaic: true },
  "shrives": { word: "Shrives", definition: "Hears confession, imposes penance, and grants absolution to a soul.", partOfSpeech: "verb", archaic: true },
  "dross": { word: "Dross", definition: "Worthless scum, impurity, or refuse separated from refined metals.", partOfSpeech: "noun" },
  "chalice": { word: "Chalice", definition: "A sacred ceremonial goblet or cup holding holy wine.", partOfSpeech: "noun" },
  "chanticleer": { word: "Chanticleer", definition: "A proud domestic rooster or cock, renowned for his morning crow.", partOfSpeech: "noun", archaic: true },
  "flail": { word: "Flail", definition: "A manual farming tool with a swinging bar used to thresh grain.", partOfSpeech: "noun" },
  "aghast": { word: "Aghast", definition: "Filled with horror, sudden shock, or awe-struck wonder.", partOfSpeech: "adj." },
  "genii": { word: "Genii", definition: "Guardian spirits or mystical entities dwelling within nature.", partOfSpeech: "noun" },
  "sanguine": { word: "Sanguine", definition: "Blood-red, ruddy, or cheerful and ardent in temperament.", partOfSpeech: "adj." },
  "woof": { word: "Woof", definition: "The threads that run crosswise across the warp on a weaving loom.", partOfSpeech: "noun", archaic: true },
  "girdle": { word: "Girdle", definition: "A belt, sash, or circular band encircling the waist.", partOfSpeech: "noun" },
  "chaise": { word: "Chaise", definition: "A two-wheeled light carriage drawn by a single horse ('one-hoss shay').", partOfSpeech: "noun", archaic: true },
  "thill": { word: "Thill", definition: "One of the two wooden shafts between which a draught horse is harnessed.", partOfSpeech: "noun", archaic: true },
  "thills": { word: "Thills", definition: "The twin wooden shafts harnessing a horse to a carriage.", partOfSpeech: "noun", archaic: true },
  "felloe": { word: "Felloe", definition: "The outer wooden rim of a spoked carriage wheel.", partOfSpeech: "noun", archaic: true },
  "thoroughbrace": { word: "Thoroughbrace", definition: "A heavy leather strap supporting the body of a carriage upon springs.", partOfSpeech: "noun", archaic: true },
  "linchpin": { word: "Linchpin", definition: "A locking pin passed through an axle to keep a wheel in place.", partOfSpeech: "noun" },
  "whippletree": { word: "Whippletree", definition: "A pivoted crossbar to which the harness traces of a horse are fastened.", partOfSpeech: "noun", archaic: true },
  "trysting": { word: "Trysting", definition: "Appointed for an agreed meeting or rendezvous.", partOfSpeech: "adj." },
  "burghers": { word: "Burghers", definition: "Prosperous citizens or town council members of a fortified city.", partOfSpeech: "noun" },
  "lucumo": { word: "Lucumo", definition: "An Etruscan prince, noble chieftain, or high-ranking ruler.", partOfSpeech: "noun", archaic: true },
  "palatinus": { word: "Palatinus", definition: "The Palatine Hill, the centermost of the seven historic hills of Rome.", partOfSpeech: "proper noun" },
  "galleon": { word: "Galleon", definition: "A multi-decked sailing ship of the 15th to 17th centuries used as a warship.", partOfSpeech: "noun" },
  "rapier": { word: "Rapier", definition: "A slender, sharply pointed two-edged sword used for thrusting.", partOfSpeech: "noun" },
  "ostler": { word: "Ostler", definition: "A stableman or groom at an inn who looks after traveler's horses.", partOfSpeech: "noun", archaic: true },
  "casement": { word: "Casement", definition: "A window frame hinged on one side that opens outward like a door.", partOfSpeech: "noun" },
  "bodkin": { word: "Bodkin", definition: "A small dagger or stiletto with a sharp slender blade.", partOfSpeech: "noun", archaic: true },
  "fardels": { word: "Fardels", definition: "Heavy burdens, bundles, or travelers' loads borne through life.", partOfSpeech: "noun", archaic: true },
  "quietus": { word: "Quietus", definition: "Final settlement of a debt; metaphorically, release from life in death.", partOfSpeech: "noun", archaic: true },
  "contumely": { word: "Contumely", definition: "Insolent, contemptuous, and humiliating rudeness or reproach.", partOfSpeech: "noun" },
  "husbandry": { word: "Husbandry", definition: "The careful management, thrift, and conservation of resources.", partOfSpeech: "noun" },
  "censure": { word: "Censure", definition: "Critical opinion, formal judgment, or moral appraisal.", partOfSpeech: "noun" },
  "unfledged": { word: "Unfledged", definition: "Untried, immature, or having undeveloped feathers.", partOfSpeech: "adj." },
  "gaudy": { word: "Gaudy", definition: "Extravagantly bright, tasteless, or showy in ornament.", partOfSpeech: "adj." },
  "aureole": { word: "Aureole", definition: "A golden radiant halo or luminous cloud surrounding a divine head.", partOfSpeech: "noun" },
  "citherns": { word: "Citherns", definition: "Renaissance stringed instruments resembling mandolins with wire strings.", partOfSpeech: "noun", archaic: true },
  "citoles": { word: "Citoles", definition: "Archaic pear-shaped plucked instruments played in medieval courts.", partOfSpeech: "noun", archaic: true },
  "damozel": { word: "Damozel", definition: "Archaic spelling of damsel; an unmarried maiden of noble birth.", partOfSpeech: "noun", archaic: true },
  "midge": { word: "Midge", definition: "A tiny two-winged fly or gnat; used to signify the minuscule earth.", partOfSpeech: "noun" },
  "pelf": { word: "Pelf", definition: "Money, riches, or worldly wealth gained through contemptible means.", partOfSpeech: "noun", archaic: true },
  "unwept": { word: "Unwept", definition: "Not mourned or lamented by weeping friends.", partOfSpeech: "adj." },
  "unhonored": { word: "Unhonored", definition: "Given no public reverence, dignity, or monuments.", partOfSpeech: "adj." },
  "unsung": { word: "Unsung", definition: "Not celebrated in poetry, verse, or song.", partOfSpeech: "adj." },
  "bairnies": { word: "Bairnies", definition: "Scottish term for little children or young infants.", partOfSpeech: "noun", archaic: true },
  "cuddle": { word: "Cuddle", definition: "To curl up comfortably and snuggle together in bed.", partOfSpeech: "verb" },
  "doon": { word: "Doon", definition: "Scottish dialect word for 'down'.", partOfSpeech: "adv.", archaic: true },
  "fash": { word: "Fash", definition: "Scottish dialect meaning trouble, worry, or restless bother.", partOfSpeech: "noun / verb", archaic: true },
  "waukrife": { word: "Waukrife", definition: "Scottish term meaning wakeful, sleepless, or prone to staying awake.", partOfSpeech: "adj.", archaic: true },
  "shoon": { word: "Shoon", definition: "Archaic and Scottish plural form of shoes.", partOfSpeech: "noun", archaic: true },
  "ilka": { word: "Ilka", definition: "Scottish dialect meaning 'each' or 'every'.", partOfSpeech: "adj.", archaic: true },
  "aboon": { word: "Aboon", definition: "Scottish dialect meaning 'above' or in heaven.", partOfSpeech: "adv.", archaic: true },
  "pows": { word: "Pows", definition: "Scottish dialect for polls, craniums, or heads.", partOfSpeech: "noun", archaic: true },
  "gowd": { word: "Gowd", definition: "Scottish dialect for gold; genuine intrinsic worth.", partOfSpeech: "noun", archaic: true },
  "hodden": { word: "Hodden", definition: "Coarse, undyed homespun woolen cloth worn by Scottish peasantry.", partOfSpeech: "adj. / noun", archaic: true },
  "birkie": { word: "Birkie", definition: "Scottish term for a proud, lively, or conceited young fellow.", partOfSpeech: "noun", archaic: true },
  "coof": { word: "Coof", definition: "Scottish word for a fool, simpleton, or blockhead.", partOfSpeech: "noun", archaic: true },
  "thanatopsis": { word: "Thanatopsis", definition: "A Greek-derived meditation or philosophical view on death.", partOfSpeech: "noun" },
  "patriarchs": { word: "Patriarchs", definition: "Venerable ancient fathers, founders, or leaders of earliest humanity.", partOfSpeech: "noun" },
  "caravan": { word: "Caravan", definition: "A long company of pilgrims traveling together toward eternity.", partOfSpeech: "noun" },
  "droll": { word: "Droll", definition: "Curiously amusing, whimsical, and comical in an odd way.", partOfSpeech: "adj." },
  "spinet": { word: "Spinet", definition: "An early harpsichord-like keyboard instrument with plucked strings.", partOfSpeech: "noun" },
  "gambrel": { word: "Gambrel", definition: "A ridged roof with two slopes on each side, the lower steeper than the upper.", partOfSpeech: "noun" },
  "runcible": { word: "Runcible", definition: "A whimsical fork-spoon utensil coined by Edward Lear.", partOfSpeech: "adj." }
};

/**
 * Normalizes a word by stripping punctuation and lowercasing
 */
export function cleanWord(raw: string): string {
  if (!raw) return '';
  return raw
    .replace(/^[^a-zA-Z0-9'’]+|[^a-zA-Z0-9'’]+$/g, '')
    .replace(/’/g, "'")
    .replace(/^'+|'+$/g, '')
    .toLowerCase();
}

/**
 * Retrieves word definition from poem-specific vocabulary or shared poetic lexicon
 */
export function lookupWord(rawWord: string, poemVocabulary?: VocabularyItem[]): VocabularyItem | null {
  const cleaned = cleanWord(rawWord);
  if (!cleaned || cleaned.length < 3) return null;

  // 1. Check poem-specific vocabulary first
  if (poemVocabulary && poemVocabulary.length > 0) {
    const matched = poemVocabulary.find((v) => {
      const vClean = cleanWord(v.word);
      if (!vClean) return false;
      if (vClean === cleaned) return true;

      // Check common suffixes & conjugations
      if (cleaned.length >= 4 && vClean.length >= 4) {
        if (cleaned === vClean + 's' || cleaned === vClean + 'es') return true;
        if (cleaned === vClean + 'd' || cleaned === vClean + 'ed') return true;
        if (cleaned === vClean + "'d") return true;
        if (cleaned === vClean + 'ing' || cleaned === vClean.replace(/e$/, '') + 'ing') return true;
        if (cleaned === vClean + 'eth' || cleaned === vClean + 'est') return true;
        if (cleaned === vClean + 'ly') return true;
        if (vClean.startsWith(cleaned) && cleaned.length >= 5) return true;
        if (cleaned.startsWith(vClean) && vClean.length >= 5) return true;
      }
      return false;
    });

    if (matched) {
      return matched;
    }
  }

  // 2. Check global poetic lexicon with morphological stems
  const stems = [
    cleaned,
    cleaned.replace(/'d$/, 'ed'),
    cleaned.replace(/'d$/, ''),
    cleaned.endsWith('s') ? cleaned.slice(0, -1) : null,
    cleaned.endsWith('es') ? cleaned.slice(0, -2) : null,
    cleaned.endsWith('ed') ? cleaned.slice(0, -2) : null,
    cleaned.endsWith('ed') ? cleaned.slice(0, -1) : null,
    cleaned.endsWith('ing') ? cleaned.slice(0, -3) : null,
    cleaned.endsWith('eth') ? cleaned.slice(0, -3) : null,
    cleaned.endsWith('est') ? cleaned.slice(0, -3) : null,
    cleaned.endsWith('ly') ? cleaned.slice(0, -2) : null
  ].filter(Boolean) as string[];

  for (const stem of stems) {
    if (POETIC_LEXICON[stem]) {
      const entry = POETIC_LEXICON[stem];
      return {
        word: entry.word,
        definition: entry.definition,
        context: entry.partOfSpeech ? `(${entry.partOfSpeech})` : undefined
      };
    }
  }

  return null;
}

/**
 * Returns all recognized vocabulary words found inside a single line of poetry
 */
export function getLineVocabulary(line: string, poemVocabulary?: VocabularyItem[]): { word: string; item: VocabularyItem }[] {
  const tokens = line.split(/\s+/);
  const found: { word: string; item: VocabularyItem }[] = [];
  const seen = new Set<string>();

  for (const token of tokens) {
    const cleaned = cleanWord(token);
    if (!cleaned || seen.has(cleaned)) continue;

    const item = lookupWord(token, poemVocabulary);
    if (item) {
      seen.add(cleaned);
      found.push({ word: token.replace(/^[^\w]+|[^\w]+$/g, ''), item });
    }
  }

  return found;
}

/**
 * Returns all vocabulary items present in the entire poem (both custom and lexicon)
 */
export function getAllPoemVocabulary(poem: Poem): VocabularyItem[] {
  const map = new Map<string, VocabularyItem>();

  // Add poem custom vocabulary
  if (poem.vocabulary) {
    for (const item of poem.vocabulary) {
      map.set(cleanWord(item.word), item);
    }
  }

  // Scan all lines of poem against lexicon
  for (const line of poem.lines) {
    const words = line.split(/\s+/);
    for (const w of words) {
      const cleaned = cleanWord(w);
      if (!map.has(cleaned)) {
        const item = lookupWord(w, poem.vocabulary);
        if (item) {
          map.set(cleaned, item);
        }
      }
    }
  }

  return Array.from(map.values());
}
