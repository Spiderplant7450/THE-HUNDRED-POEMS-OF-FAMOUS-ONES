import { VocabularyItem } from '../types';

export interface PoemEnrichment {
  meaning: string;
  vocabulary: VocabularyItem[];
}

export const POEM_MEANINGS: Record<number, PoemEnrichment> = {
  1: {
    meaning: "An inspiring call to moral architecture and personal integrity. Longfellow asserts that every action, thought, and unseen moment serves as a building block for character and fate.",
    vocabulary: [
      {
        word: "Wrought",
        definition: "Carefully shaped, beaten, or fashioned by skilled craftsmanship.",
        context: "Builders wrought with greatest care"
      },
      {
        word: "Turret",
        definition: "A small tower or elevated vantage point extending upwards from a castle or wall.",
        context: "To those turrets, where the eye"
      },
      {
        word: "Ample",
        definition: "Plentiful, spacious, and generous in extent.",
        context: "With a firm and ample base;"
      },
      {
        word: "Ornaments",
        definition: "Decorative embellishments or rhythmic flourishes in art.",
        context: "Some with ornaments of rhyme."
      },
      {
        word: "Yawning",
        definition: "Wide open, gaping, or vacant.",
        context: "Leave no yawning gaps between;"
      }
    ]
  },
  2: {
    meaning: "A dramatic moral parable about utilizing whatever life presents. While a faint-hearted warrior discards his broken weapon and flees, a besieged prince snatches the shattered blade and charges into victory.",
    vocabulary: [
      {
        word: "Craven",
        definition: "A cowardly, faint-hearted, or defeatist person.",
        context: "A craven hung along the battle’s edge,"
      },
      {
        word: "Banner",
        definition: "A military standard or flag rallying troops on the field.",
        context: "Shocked upon swords and shields. A prince’s banner"
      },
      {
        word: "Plume",
        definition: "An ornamental feather adorning a knight's battle helmet."
      },
      {
        word: "Sheath",
        definition: "A scabbard or protective case for a sword."
      },
      {
        word: "Blunted",
        definition: "Dull, weakened, or lacking a sharp keen cutting edge.",
        context: "Blunt thing!”—he snapped and flung it from his hand,"
      }
    ]
  },
  3: {
    meaning: "A heartfelt nostalgic reverie honoring childhood innocence, simple joys, and unconditional love. Riley evokes idyllic summer memories of visiting Aunt Mary's hospitable country farmhouse.",
    vocabulary: [
      {
        word: "Reverie",
        definition: "A state of daydreaming or pleasant nostalgic meditation."
      },
      {
        word: "Pastoral",
        definition: "Relating to simple, peaceful country life and meadows."
      },
      {
        word: "Orchard",
        definition: "A grove or enclosed garden planted with fruit-bearing trees."
      },
      {
        word: "Canopy",
        definition: "An overhead covering or roof of leaves and boughs."
      },
      {
        word: "Bramble",
        definition: "A rough, prickly, tangled wild shrub or briar."
      }
    ]
  },
  4: {
    meaning: "A transcendentalist meditation on cosmic unity and context. Emerson demonstrates that nothing in creation is beautiful or complete when isolated from its natural environment and universal harmony.",
    vocabulary: [
      {
        word: "Heifer",
        definition: "A young cow, particularly one that has not had a calf.",
        context: "The heifer that lows in the upland farm,"
      },
      {
        word: "Sexton",
        definition: "A church official who rings church bells and cares for the churchyard.",
        context: "The sexton, tolling his bell at noon,"
      },
      {
        word: "Cloister",
        definition: "A quiet, secluded covered walk in a monastery or cathedral."
      },
      {
        word: "Plumage",
        definition: "The feathers of a bird, regarded for their beauty or color."
      },
      {
        word: "Surge",
        definition: "A powerful, rushing wave or swelling roll of water."
      }
    ]
  },
  5: {
    meaning: "An exquisite transcendentalist defense of natural beauty for its own sake. Emerson declares that the vibrant purple rhodora blooming unnoticed in secluded woods exists as an emblem that beauty is its own excuse for being.",
    vocabulary: [
      {
        word: "Rhodora",
        definition: "A wild deciduous azalea shrub bearing showy purple-pink blossoms in early spring.",
        context: "I found the fresh Rhodora in the woods,"
      },
      {
        word: "Sylvan",
        definition: "Associated with woodlands, groves, and rustling forest glades."
      },
      {
        word: "Plumes",
        definition: "Graceful, feather-like sprays of foliage or flowers.",
        context: "Here might the redbird come his plumes to cool,"
      },
      {
        word: "Sage",
        definition: "A deeply wise person possessing profound philosophical understanding.",
        context: "Rhodora! if the sages ask thee why"
      },
      {
        word: "Nook",
        definition: "A secluded, quiet, or sheltered corner in nature.",
        context: "Spreading its leafless blooms in a damp nook,"
      }
    ]
  },
  6: {
    meaning: "A thundering martial tribute to the heroic discipline and self-sacrifice of the British Light Brigade at the Battle of Balaclava. Six hundred cavalrymen gallop unflinchingly into the valley of death.",
    vocabulary: [
      {
        word: "League",
        definition: "An ancient unit of nautical or overland distance, roughly three miles.",
        context: "Half a league, half a league,"
      },
      {
        word: "Sundered",
        definition: "Severed, split apart, or violently shattered.",
        context: "Shattered and sundered."
      },
      {
        word: "Sabre",
        definition: "A heavy cavalry sword with a curved cutting edge.",
        context: "Flashed all their sabres bare,"
      },
      {
        word: "Battery",
        definition: "An artillery unit of heavy mounted guns or cannons.",
        context: "Plunged in the battery smoke,"
      },
      {
        word: "Volleyed",
        definition: "Discharged in rapid, simultaneous barrages of fire.",
        context: "Volleyed and thunder’d;"
      }
    ]
  },
  7: {
    meaning: "A poignant, minimalist lyric contrasting cosmic illumination with human vulnerability. Bourdillon suggests that as sunlight outshines thousands of stars, a single lost love extinguishes an entire lifetime.",
    vocabulary: [
      {
        word: "Intellect",
        definition: "The human capacity for understanding, reason, and perception."
      },
      {
        word: "Bright",
        definition: "Radiant, shining, and full of clear, luminous light.",
        context: "Yet the light of the bright world dies"
      },
      {
        word: "Gleam",
        definition: "A faint or momentary beam of gentle light."
      },
      {
        word: "Depart",
        definition: "To pass away, vanish, or leave behind earthly warmth."
      }
    ]
  },
  8: {
    meaning: "A genial, compassionate poem rejecting cynical withdrawal and preaching universal brotherhood. The speaker chooses to live in a welcoming roadside cottage to be an encouraging friend to every passing traveler.",
    vocabulary: [
      {
        word: "Hermit",
        definition: "A recluse who lives in solitary isolation from society.",
        context: "There are hermit souls that live withdrawn"
      },
      {
        word: "Cynic",
        definition: "One who sneers at human motives and distrusts virtue.",
        context: "Or hurl the cynic’s ban—"
      },
      {
        word: "Scorner",
        definition: "One who expresses disdain, mocking contempt, or scorn.",
        context: "I would not sit in the scorner’s seat,"
      },
      {
        word: "Brook",
        definition: "A small, bubbling natural freshwater stream.",
        context: "I know there are brook-gladdened meadows ahead"
      },
      {
        word: "Pioneer",
        definition: "An early settler or trailblazer carving paths into new territories.",
        context: "There are pioneer souls that blaze their paths"
      }
    ]
  },
  9: {
    meaning: "A hauntingly noble World War I lyric where the soldier poet serenely anticipates his appointment with death in the trenches of France, choosing honor and courage over safe civilian tranquility.",
    vocabulary: [
      {
        word: "Rendezvous",
        definition: "A prearranged meeting or appointment at a designated place and time.",
        context: "I have a rendezvous with Death"
      },
      {
        word: "Barricade",
        definition: "A fortified barrier erected across a combat zone or street.",
        context: "At some disputed barricade"
      },
      {
        word: "Strife",
        definition: "Fierce, bitter struggle, combat, or conflict."
      },
      {
        word: "Scarred",
        definition: "Marked by traumatic wounds, artillery craters, or burns.",
        context: "On some scarred slope of battered hill,"
      },
      {
        word: "Pledge",
        definition: "A solemn, binding promise or sacred oath.",
        context: "And I to my pledged word am true,"
      }
    ]
  },
  10: {
    meaning: "The immortal World War I memorial ballad. The fallen soldiers buried beneath rows of poppies in Flanders entreat the living to continue their fight for liberty so their sacrifice will not have been in vain.",
    vocabulary: [
      {
        word: "Poppies",
        definition: "Red wildflowers blooming across European battlefields, symbolizing remembrance.",
        context: "In Flanders fields the poppies blow"
      },
      {
        word: "Quarrel",
        definition: "A righteous dispute, cause, or conflict against aggression.",
        context: "Take up our quarrel with the foe;"
      },
      {
        word: "Larks",
        definition: "Singing birds renowned for their joyful airborne melodies.",
        context: "The larks, still bravely singing, fly"
      },
      {
        word: "Scarce",
        definition: "Barely, hardly, or with great difficulty.",
        context: "Scarce heard amid the guns below."
      },
      {
        word: "Torch",
        definition: "A carried flame symbolizing enlightenment, liberty, and enduring mission.",
        context: "The torch; be yours to hold it high."
      }
    ]
  },
  11: {
    meaning: "Shakespeare's enchanting lyric from The Merchant of Venice capturing the hypnotic tranquility of a moonlit evening. Music and silence intertwine to touch the deepest harmonies of the human soul.",
    vocabulary: [
      {
        word: "Patines",
        definition: "Small plates or discs of gold (poetic variant of patens).",
        context: "Is thick inlaid with patines of bright gold:"
      },
      {
        word: "Cherubins",
        definition: "Celestial angelic beings, attendants of the divine presence.",
        context: "Still quiring to the young-ey’d cherubins."
      },
      {
        word: "Harmony",
        definition: "Pleasing musical accord and cosmic universal balance.",
        context: "Become the touches of sweet harmony."
      },
      {
        word: "Vesture",
        definition: "Clothing, garments, or bodily mantle."
      },
      {
        word: "Quiring",
        definition: "Singing in choral union like a celestial choir.",
        context: "Still quiring to the young-ey’d cherubins."
      }
    ]
  },
  12: {
    meaning: "Whitman's celebrated elegy mourning President Abraham Lincoln at the close of the American Civil War. The ship of state has survived the perilous tempest, but its heroic commander lies lifeless on the deck.",
    vocabulary: [
      {
        word: "Exulting",
        definition: "Rejoicing exceedingly and celebrating a hard-won triumph.",
        context: "The port is near, the bells I hear, the people all exulting,"
      },
      {
        word: "Keel",
        definition: "The central structural timber along the bottom of a ship's hull.",
        context: "While follow eyes the steady keel, the vessel grim and daring:"
      },
      {
        word: "Tread",
        definition: "To walk, step, or march with measured solemnity.",
        context: "But I, with mournful tread,"
      },
      {
        word: "Bouquets",
        definition: "Arranged clusters of flowers gathered for celebration or tribute.",
        context: "For you bouquets and ribbon’d wreaths—for you the shores a-crowding;"
      },
      {
        word: "Port",
        definition: "A harbor or safe haven reached at the end of a perilous voyage.",
        context: "The port is near, the bells I hear, the people all exulting,"
      }
    ]
  },
  13: {
    meaning: "Holmes's beloved philosophical ode using the spiral shell of the chambered nautilus as a spiritual metaphor. The human soul must continually build broader, nobler temples as it outgrows outworn habits.",
    vocabulary: [
      {
        word: "Nautilus",
        definition: "A spiral-shelled cephalopod mollusk inhabiting warm deep seas."
      },
      {
        word: "Sirens",
        definition: "Mythological sea nymphs whose seductive songs lured mariners onto rocks.",
        context: "In gulfs enchanted, where the Siren sings,"
      },
      {
        word: "Crypt",
        definition: "An underground stone vault or hidden internal chamber.",
        context: "Its irised ceiling rent, its sunless crypt unsealed!"
      },
      {
        word: "Spire",
        definition: "A tall, slender architectural summit or spiral coil tapering to a point."
      },
      {
        word: "Triton",
        definition: "A mythological Greek sea god who calms or stirs waves with a conch shell.",
        context: "Than ever Triton blew from wreathed horn!"
      }
    ]
  },
  14: {
    meaning: "A joyous carol emphasizing that Christmas exists beyond physical boundaries. The spirit of peace, loving-kindness, and mutual goodwill unites hearths across every ocean and city.",
    vocabulary: [
      {
        word: "Hearth",
        definition: "The brick or stone floor of a fireplace, symbolizing domestic home warmth."
      },
      {
        word: "Chimes",
        definition: "Melodic peals of tuned church bells echoing through the air."
      },
      {
        word: "Carol",
        definition: "A festive song celebrating religious or seasonal joy."
      },
      {
        word: "Tidings",
        definition: "News, announcements, or messages brought from afar."
      }
    ]
  },
  15: {
    meaning: "A heartbreaking, delicate Victorian lullaby about a child who fell asleep and died. His toy soldier and dog remain patiently where he placed them, waiting faithful through passing years.",
    vocabulary: [
      {
        word: "Stanch",
        definition: "Steadfast, loyal, firm, and unyielding in fidelity.",
        context: "But sturdy and stanch he stands;"
      },
      {
        word: "Musket",
        definition: "An old-fashioned muzzle-loading shoulder gun.",
        context: "And his musket moulds in his hands."
      },
      {
        word: "Trundle-bed",
        definition: "A low bed on rollers that can be pushed under a larger bed when not in use.",
        context: "So toddling off to his trundle-bed"
      },
      {
        word: "Passing",
        definition: "The transition from life into death, or passing of time.",
        context: "And the soldier was passing fair,"
      }
    ]
  },
  16: {
    meaning: "Wordsworth's supreme Romantic lyric capturing the restorative ecstasy of memory. A sea of golden daffodils dancing beside a lake provides an enduring inward sanctuary of joyful contemplation.",
    vocabulary: [
      {
        word: "Vales",
        definition: "Valleys or rolling hollows between hills.",
        context: "That floats on high o’er vales and hills,"
      },
      {
        word: "Sprightly",
        definition: "Lively, animated, and brimming with joyful energy.",
        context: "Tossing their heads in sprightly dance."
      },
      {
        word: "Pensive",
        definition: "Engaged in deep, serious, or wistful reflection.",
        context: "In vacant or in pensive mood,"
      },
      {
        word: "Host",
        definition: "A vast gathering or multitudinous multitude.",
        context: "A host, of golden daffodils,"
      },
      {
        word: "Bliss",
        definition: "Supreme, unalloyed spiritual happiness and peace.",
        context: "Which is the bliss of solitude;"
      }
    ]
  },
  17: {
    meaning: "Lowell's radiant celebration of early summer awakening from The Vision of Sir Launfal. Nature overflows with fertile warmth, bird song, and boundless renewal that rejuvenates human spirits.",
    vocabulary: [
      {
        word: "Chalice",
        definition: "A consecrated goblet or cup holding life-giving wine."
      },
      {
        word: "Buttercup",
        definition: "A wild meadow flower with glossy bright yellow petals."
      },
      {
        word: "Tide",
        definition: "A rising swelling flood or seasonal surge of vital warmth.",
        context: "Now is the high-tide of the year,"
      },
      {
        word: "Lusty",
        definition: "Vigorous, robust, and full of hearty physical vitality."
      },
      {
        word: "Clime",
        definition: "A region or territory defined by its climate and weather."
      }
    ]
  },
  18: {
    meaning: "Shelley's fiery revolutionary invocation to the Autumn wind as both destroyer and preserver. He entreats the tempest to scatter his poetic prophecies across mankind like sparks among embers.",
    vocabulary: [
      {
        word: "Dirge",
        definition: "A mournful funeral hymn or lament for the dead.",
        context: "The locks of the approaching storm. Thou dirge"
      },
      {
        word: "Sepulchre",
        definition: "A burial vault or stone tomb.",
        context: "Will be the dome of a vast sepulchre,"
      },
      {
        word: "Hearth",
        definition: "The stone fireplace floor, home of glowing embers.",
        context: "Destroyer and preserver; hear, oh hear!"
      },
      {
        word: "Clarion",
        definition: "A high-pitched, shrill ancient war trumpet rallying warriors.",
        context: "Her clarion o’er the dreaming earth, and fill"
      },
      {
        word: "Azure",
        definition: "The radiant blue tint of an unclouded sky or sea.",
        context: "Thine azure sister of the Spring shall blow"
      }
    ]
  },
  19: {
    meaning: "Emerson's vivid impression of a sudden New England blizzard. The roaring wind and blinding drifts transform the landscape into architectural marvels, demonstrating nature's wild artistry.",
    vocabulary: [
      {
        word: "Tumultuous",
        definition: "Riotous, turbulent, and wildly tempestuous.",
        context: "In a tumultuous privacy of storm."
      },
      {
        word: "Masonry",
        definition: "Stone, brick, or sculpted architectural structures.",
        context: "Come, see the north wind’s masonry."
      },
      {
        word: "Pave",
        definition: "To cover a road or ground with smooth stones."
      },
      {
        word: "Hearth",
        definition: "The domestic fireplace warming inhabitants during winter."
      }
    ]
  },
  20: {
    meaning: "Shelley's ecstatic hymn to the unseen singing bird whose pure melody transcends all earthly limitation. The skylark represents unblemished art and spontaneous spiritual joy.",
    vocabulary: [
      {
        word: "Blithe",
        definition: "Carefree, cheerful, and light-heartedly joyful.",
        context: "Hail to thee, blithe spirit!"
      },
      {
        word: "Sprite",
        definition: "An ethereal fairy, spirit, or supernatural elf.",
        context: "Teach us, sprite or bird,"
      },
      {
        word: "Profuse",
        definition: "Pouring forth in lavish, abundant excess.",
        context: "In profuse strains of unpremeditated art."
      },
      {
        word: "Ethereal",
        definition: "Delicate, heavenly, airy, and unburdened by mortal weight."
      },
      {
        word: "Languor",
        definition: "A state of dreamy relaxation or pleasant tiredness."
      }
    ]
  },
  21: {
    meaning: "Longfellow's melodious folklore depicting the Native American hero's youth beside Lake Superior, nurtured by the wisdom of his grandmother Nokomis and the whispers of woodland creatures.",
    vocabulary: [
      {
        word: "Wigwam",
        definition: "A domed dwelling used by indigenous woodland tribes.",
        context: "Stood the wigwam of Nokomis,"
      },
      {
        word: "Linden",
        definition: "A deciduous shade tree with fragrant blossoms and soft wood.",
        context: "Rocked him in his linden cradle,"
      },
      {
        word: "Reeds",
        definition: "Tall, slender marsh grasses growing along wetlands."
      },
      {
        word: "Comet",
        definition: "A celestial body of dust and ice leaving a luminous streaming tail."
      },
      {
        word: "Pine-trees",
        definition: "Evergreen conifer trees whispering in the northern winds.",
        context: "Rose the black and gloomy pine-trees,"
      }
    ]
  },
  22: {
    meaning: "Wordsworth's noble portrait of moral fortitude and chivalric principle. The true warrior confronts danger with calm resolve, draws strength from ethical duty, and preserves his tender compassion.",
    vocabulary: [
      {
        word: "Placable",
        definition: "Easily calmed, forgiving, and peaceful in disposition."
      },
      {
        word: "Transient",
        definition: "Lasting only for a brief moment; passing and impermanent."
      },
      {
        word: "Lustre",
        definition: "A gentle radiant glow, sheen, or moral brilliance."
      },
      {
        word: "Honour",
        definition: "High moral standing, integrity, and principled reverence."
      }
    ]
  },
  23: {
    meaning: "An uplifting democratic sermon reminding every individual that greatness is not restricted to battlefields or pulpits. Cheerful, humble kindness in ordinary daily duty is equally sacred.",
    vocabulary: [
      {
        word: "Altar",
        definition: "A sacred raised structure used for prayer and holy offerings."
      },
      {
        word: "Billet",
        definition: "A lodging assigned to troops or an humble station in life."
      },
      {
        word: "Falter",
        definition: "To hesitate, stumble, or lose courage during a trial."
      },
      {
        word: "Strive",
        definition: "To make great efforts and work diligently toward a noble end."
      }
    ]
  },
  24: {
    meaning: "Dickinson's famous compassionate manifesto. The poet affirms that easing a single aching heart or helping one fainting robin into its nest makes a human existence profoundly worthwhile.",
    vocabulary: [
      {
        word: "Vain",
        definition: "Futile, empty, devoid of purpose or meaningful outcome.",
        context: "I shall not live in vain:"
      },
      {
        word: "Aching",
        definition: "Suffering from continuous dull or poignant emotional pain.",
        context: "If I can ease one life the aching,"
      },
      {
        word: "Robin",
        definition: "A small red-breasted songbird nesting in spring hedgerows.",
        context: "Or help one fainting robin"
      },
      {
        word: "Fainting",
        definition: "Losing strength, consciousness, or vital energy through distress.",
        context: "Or help one fainting robin"
      }
    ]
  },
  25: {
    meaning: "A galloping narrative ballad capturing General Philip Sheridan's dramatic twenty-mile ride from Winchester to rally his retreating Union troops to victory at Cedar Creek.",
    vocabulary: [
      {
        word: "Winchester",
        definition: "An historic town in the Shenandoah Valley of Virginia.",
        context: "Bringing to Winchester fresh dismay,"
      },
      {
        word: "Steed",
        definition: "A spirited, powerful riding horse bred for battle charges.",
        context: "The heart of the steed and the heart of the master"
      },
      {
        word: "Foam",
        definition: "Frothy white sweat coating a horse during fierce, rapid galloping.",
        context: "With foam and with dust the black charger was gray;"
      },
      {
        word: "Flank",
        definition: "The fleshy side of an animal between the ribs and hip."
      },
      {
        word: "Cannon",
        definition: "Heavy mounted artillery guns roaring across the battlefield.",
        context: "The dust, like smoke from the cannon’s mouth;"
      }
    ]
  },
  26: {
    meaning: "Lowell's impassioned anti-slavery manifesto declaring that every generation faces moral crossroads where truth and falsehood struggle for dominion over the human conscience.",
    vocabulary: [
      {
        word: "Scaffold",
        definition: "A raised wooden platform for the execution of martyrs or criminals.",
        context: "Truth forever on the scaffold, Wrong forever on the throne,—"
      },
      {
        word: "Hallow",
        definition: "To make holy, consecrate, or honor with deep reverence."
      },
      {
        word: "Bondage",
        definition: "The condition of enslavement, serfdom, or involuntary servitude."
      },
      {
        word: "Heritage",
        definition: "Enduring principles, freedoms, and traditions inherited from ancestors."
      }
    ]
  },
  27: {
    meaning: "A resolute moral exhortation against passive complacency. Babcock summons the soul to face struggle squarely, lift heavy burdens, and realize that fortitude in the face of wrong is life's highest calling.",
    vocabulary: [
      {
        word: "Shun",
        definition: "To deliberately avoid, eschew, or keep clear of.",
        context: "Shun not the struggle—face it; ’tis God’s gift."
      },
      {
        word: "Drift",
        definition: "To float passively without aim, purpose, or moral anchor.",
        context: "We are not here to play, to dream, to drift;"
      },
      {
        word: "Struggle",
        definition: "A determined effort to confront and overcome adversity.",
        context: "Shun not the struggle—face it; ’tis God’s gift."
      },
      {
        word: "Faint",
        definition: "To lose heart, courage, or spiritual endurance.",
        context: "Faint not—fight on! To-morrow comes the song."
      },
      {
        word: "Loads",
        definition: "Heavy moral obligations, griefs, or physical burdens to lift.",
        context: "We have hard work to do, and loads to lift;"
      }
    ]
  },
  28: {
    meaning: "A dramatic maritime anthem of perseverance. Against towering waves, a mutinous crew, and uncharted oceanic terror, Columbus repeats his unwavering command: 'Sail on! sail on! and on!'",
    vocabulary: [
      {
        word: "Azores",
        definition: "An archipelago of volcanic islands in the mid-Atlantic.",
        context: "Behind him lay the gray Azores,"
      },
      {
        word: "Mutinous",
        definition: "Rebellious, insubordinate, or engaged in revolt against command.",
        context: "“My men grow mutinous day by day;"
      },
      {
        word: "Gale",
        definition: "A fierce, howling nautical windstorm at sea."
      },
      {
        word: "Spake",
        definition: "Archaic past tense of speak; uttered solemnly.",
        context: "They sailed. They sailed. Then spake the mate:"
      },
      {
        word: "Starlight",
        definition: "The pale, steady glimmer of distant stars navigating night."
      }
    ]
  },
  29: {
    meaning: "An impassioned elegy of post-Civil War national reconciliation. Finch honors fallen soldiers of both the North and the South alike, scattering equal wreaths of laurel and tears upon their graves.",
    vocabulary: [
      {
        word: "Laurel",
        definition: "Evergreen foliage woven into wreaths honoring military valor.",
        context: "Under the laurel, the blue;"
      },
      {
        word: "Willow",
        definition: "A weeping shade tree traditional symbol of mourning and grief.",
        context: "Under the willow, the gray."
      },
      {
        word: "Desolate",
        definition: "Deserted, grief-stricken, and barren of comfort.",
        context: "The desolate mourners go,"
      },
      {
        word: "Quiver",
        definition: "To tremble, shake, or vibrate with delicate motion.",
        context: "Where the blades of grave grass quiver,"
      },
      {
        word: "Sever",
        definition: "To divide, separate, or violently split apart.",
        context: "No more shall the war-cry sever,"
      }
    ]
  },
  30: {
    meaning: "Kipling's solemn warning against imperial hubris and worldly arrogance. He reminds the British Empire that all earthly dominions, navies, and armies dissolve into dust without divine humility.",
    vocabulary: [
      {
        word: "Dominion",
        definition: "Sovereign power, territorial rule, or imperial authority.",
        context: "Dominion over palm and pine—"
      },
      {
        word: "Tumult",
        definition: "A confused, turbulent uproar of voices and chaotic commotion.",
        context: "The tumult and the shouting dies—"
      },
      {
        word: "Gentiles",
        definition: "In biblical idiom, the nations outside covenant law; non-believers.",
        context: "Such boasting as the Gentiles use,"
      },
      {
        word: "Contrite",
        definition: "Deeply remorseful, humble, and repentant for human pride.",
        context: "An humble and a contrite heart."
      },
      {
        word: "Dune",
        definition: "A shifting sandhill shaped by winds along arid coasts.",
        context: "On dune and headland sinks the fire—"
      }
    ]
  },
  31: {
    meaning: "Shelley's mythic, exuberant personification of the hydrological cycle. The cloud celebrates its immortal, transformative nature—dissolving in rain and rising anew from water without ever truly dying.",
    vocabulary: [
      {
        word: "Thirsting",
        definition: "Yearning ardently for life-giving water or revival.",
        context: "I bring fresh showers for the thirsting flowers,"
      },
      {
        word: "Flail",
        definition: "A wooden agricultural tool used to beat and thresh grain.",
        context: "I wield the flail of the lashing hail,"
      },
      {
        word: "Volcano",
        definition: "A fiery vent in the earth discharging molten rock and steam."
      },
      {
        word: "Genii",
        definition: "Elemental spirits or mythical guardians possessing supernatural power."
      },
      {
        word: "Cenotaph",
        definition: "An empty tomb or monument raised for one buried elsewhere.",
        context: "I silently laugh at my own cenotaph,"
      }
    ]
  },
  32: {
    meaning: "A vigorous, unstinting sermon on sportsmanship and grit in life's battles. Cooke reminds the reader that winning or losing matters far less than whether one fought with brave pluck and an unbent soul.",
    vocabulary: [
      {
        word: "Resolute",
        definition: "Firm, unwavering, and boldly purposeful in resolution.",
        context: "With a resolute heart and cheerful?"
      },
      {
        word: "Craven",
        definition: "Cowardly, faint-hearted, and contemptibly timid.",
        context: "With a craven soul and fearful?"
      },
      {
        word: "Gallantly",
        definition: "In a chivalrous, bravely courageous, and courteous manner."
      },
      {
        word: "Pluck",
        definition: "Spirited courage, fortitude, and gut resolve in adversity."
      },
      {
        word: "Stung",
        definition: "Pierced with sharp, sudden physical or emotional pain."
      }
    ]
  },
  33: {
    meaning: "Shakespeare and Fletcher's poignant monologue from Henry VIII capturing Cardinal Wolsey's tragic fall from royal favor. Wolsey realizes too late the hollow fragility of worldly ambition.",
    vocabulary: [
      {
        word: "Blushing",
        definition: "Glowing with fresh, flattering, or blooming honors.",
        context: "And bears his blushing honors thick upon him;"
      },
      {
        word: "Lucifer",
        definition: "The fallen archangel cast down from heaven through pride.",
        context: "And when he falls, he falls like Lucifer,"
      },
      {
        word: "Vain-pomp",
        definition: "Hollow, boastful worldly glory and ostentatious display.",
        context: "Vain pomp and glory of this world, I hate ye!"
      },
      {
        word: "Ruin",
        definition: "Complete downfall, collapse, and loss of worldly power.",
        context: "That sweet aspect of princes, and their ruin,"
      },
      {
        word: "Blossoms",
        definition: "Bursts into flourish, promise, or full artistic bloom.",
        context: "The tender leaves of hope, to-morrow blossoms,"
      }
    ]
  },
  34: {
    meaning: "Rossetti's quintessential Pre-Raphaelite vision of a maiden gazing down from heaven's ramparts, longing for the arrival of her earthly lover while holding three lilies in her hand.",
    vocabulary: [
      {
        word: "Damozel",
        definition: "An archaic poetic variant of damsel, a noble maiden.",
        context: "The blessed damozel leaned out"
      },
      {
        word: "Even",
        definition: "Archaic poetic term for evening or calm twilight.",
        context: "Of waters stilled at even;"
      },
      {
        word: "Bar",
        definition: "The celestial railing or gold balustrade of heaven.",
        context: "From the gold bar of heaven;"
      },
      {
        word: "Robe",
        definition: "A long, loose, dignified flowing garment.",
        context: "Her robe, ungirt from clasp to hem,"
      },
      {
        word: "Mantle",
        definition: "An encompassing cloak or veil covering a figure."
      }
    ]
  },
  35: {
    meaning: "A spirited patriotic ode celebrating American vitality, democratic freedom, and the warmth of returning home after traveling through the crumbling castles and antiquated courts of Europe.",
    vocabulary: [
      {
        word: "Antiquated",
        definition: "Old-fashioned, outmoded, or obsolete through ancient age.",
        context: "But now I think I’ve had enough of antiquated things."
      },
      {
        word: "Renown",
        definition: "Widespread fame, celebrated honor, and historic acclaim.",
        context: "Among the famous palaces and cities of renown,"
      },
      {
        word: "Kin",
        definition: "Blood relatives, kindred people, or family line.",
        context: "To admire the crumbly castles and the statues of the kings,—"
      },
      {
        word: "Pomp",
        definition: "Splendid, ceremonial, and stately outward display."
      },
      {
        word: "Homeland",
        definition: "One's native country and spiritual place of origin.",
        context: "So it’s home again, and home again, America for me!"
      }
    ]
  },
  36: {
    meaning: "Thomas Hood's searing social indictment of Victorian sweatshop labor. A poor seamstress toils continuously through darkness and dawn, sewing shirts for pennies at the cost of her life.",
    vocabulary: [
      {
        word: "Shroud",
        definition: "A burial garment or cloth in which a dead body is wrapped.",
        context: "A shroud as well as a shirt!"
      },
      {
        word: "Gusset",
        definition: "A triangular piece of fabric inserted into a garment to add strength."
      },
      {
        word: "Seam",
        definition: "A line where two pieces of fabric are sewn together."
      },
      {
        word: "Pittance",
        definition: "A very small, inadequate amount of money paid as wages."
      },
      {
        word: "Weary",
        definition: "Physically and mentally exhausted from relentless toil.",
        context: "With fingers weary and worn,"
      }
    ]
  },
  37: {
    meaning: "Portia's sublime speech from The Merchant of Venice extolling mercy as a divine attribute that elevates earthly kings, droppeth like gentle rain from heaven, and blesses both giver and receiver.",
    vocabulary: [
      {
        word: "Strained",
        definition: "Forced, compelled, or constrained by unnatural obligation.",
        context: "The quality of mercy is not strained;"
      },
      {
        word: "Sceptre",
        definition: "An ornamental royal staff held by a monarch as an emblem of authority.",
        context: "His sceptre shows the force of temporal power,"
      },
      {
        word: "Temporal",
        definition: "Relating to worldly, physical, and mortal time as opposed to eternity.",
        context: "His sceptre shows the force of temporal power,"
      },
      {
        word: "Attribute",
        definition: "An essential quality, characteristic, or inherent virtue.",
        context: "The attribute to awe and majesty,"
      },
      {
        word: "Mitigate",
        definition: "To soften, alleviate, or lessen the severity of harsh punishment."
      }
    ]
  },
  38: {
    meaning: "Holmes's charming domestic chronicle describing a family's excitement when a grand new piano arrives at their home, unlocking musical wonder and joyful song across the rooms.",
    vocabulary: [
      {
        word: "Gambrel",
        definition: "A ridged roof with two slopes on each side, the lower steeper than the upper.",
        context: "With the gambrel-roof, and the gable looking westward to the green,"
      },
      {
        word: "Spinet",
        definition: "An early harpsichord-like keyboard instrument with plucked strings."
      },
      {
        word: "Gable",
        definition: "The triangular upper part of a wall at the end of a ridged roof.",
        context: "With the gambrel-roof, and the gable looking westward to the green,"
      },
      {
        word: "Parlor",
        definition: "A reception room in a traditional home for entertaining guests.",
        context: "In the little southern parlor of the house you may have seen"
      },
      {
        word: "Tuned",
        definition: "Adjusted to the correct musical pitch and harmonic resonance."
      }
    ]
  },
  39: {
    meaning: "Wordsworth's passionate Romantic protest against industrial materialism. Estranged from the sublime majesty of the sea and winds, the poet would rather be a pagan attuned to nature's gods.",
    vocabulary: [
      {
        word: "Sordid",
        definition: "Base, mercenary, dishonorable, or ignoble in pursuit.",
        context: "We have given our hearts away, a sordid boon!"
      },
      {
        word: "Boon",
        definition: "A generous gift, blessing, or favor bestowed.",
        context: "We have given our hearts away, a sordid boon!"
      },
      {
        word: "Proteus",
        definition: "A prophetic Greek sea god capable of changing into many forms.",
        context: "Have sight of Proteus rising from the sea,"
      },
      {
        word: "Triton",
        definition: "A merman sea god who blows a twisted conch horn to calm waters.",
        context: "Or hear old Triton blow his wreathèd horn."
      },
      {
        word: "Bosom",
        definition: "The chest or breast; figuratively, the sea's surface welcoming moonlight.",
        context: "This sea that bares her bosom to the moon;"
      }
    ]
  },
  40: {
    meaning: "Eugene Field's beloved whimsical ballad of the gingham dog and the calico cat who engaged in such a ferocious midnight brawl on the mantelpiece that they ate each other completely up.",
    vocabulary: [
      {
        word: "Gingham",
        definition: "A lightweight cotton fabric typically patterned with small checks.",
        context: "The gingham dog and the calico cat"
      },
      {
        word: "Calico",
        definition: "A printed cotton textile with multicolored floral or mottled spots.",
        context: "The gingham dog and the calico cat"
      },
      {
        word: "Dutch-clock",
        definition: "A traditional pendulum wall clock originating from the Black Forest.",
        context: "The old Dutch clock and the Chinese plate"
      },
      {
        word: "Spit",
        definition: "To hiss and hiss menacingly like an angry fighting cat."
      },
      {
        word: "Mantelpiece",
        definition: "A decorative stone or wood structure framing a fireplace."
      }
    ]
  },
  41: {
    meaning: "Sidney Lanier's musical masterwork tracking the Chattahoochee River rushing down through hills to nourish downstream plains, mirroring human devotion to duty over enticing distractions.",
    vocabulary: [
      {
        word: "Avail",
        definition: "To be of use, benefit, or service in accomplishing a goal.",
        context: "Avail: I am fain to water the plain."
      },
      {
        word: "Laving",
        definition: "Washing, bathing, or flowing gently against shores.",
        context: "The laving laurel turned my tide,"
      },
      {
        word: "Luminous",
        definition: "Radiating bright, clear, or glowing light."
      },
      {
        word: "Thicket",
        definition: "A dense, tangled growth of bushes and young trees."
      },
      {
        word: "Brook",
        definition: "A small, swift natural stream of fresh water."
      }
    ]
  },
  42: {
    meaning: "Wordsworth's majestic philosophical ode meditating on how the radiant celestial glory perceived in childhood gradually fades into the light of common day, yet leaves an immortal faith.",
    vocabulary: [
      {
        word: "Apparelled",
        definition: "Clothed, draped, or adorned in radiant vestments.",
        context: "Apparelled in celestial light,"
      },
      {
        word: "Celestial",
        definition: "Pertaining to heaven, the stars, or divine spiritual realms.",
        context: "Apparelled in celestial light,"
      },
      {
        word: "Meadow",
        definition: "A rich field of grass and wild flowering herbs.",
        context: "There was a time when meadow, grove, and stream,"
      },
      {
        word: "Whither",
        definition: "To what place or destination; where."
      },
      {
        word: "Fountain-light",
        definition: "An original, primary source of illuminating vision."
      }
    ]
  },
  43: {
    meaning: "Carruth's luminous evolutionary hymn reconciling science, nature, and human spirituality. What the scientist calls evolution and the autumn wood calls longing, the poet terms God.",
    vocabulary: [
      {
        word: "Haze",
        definition: "A fine atmospheric mist, dust, or vapor softening distant views.",
        context: "A haze on the far horizon,"
      },
      {
        word: "Crystal",
        definition: "A clear, transparent mineral form with geometric faces.",
        context: "A crystal and a cell,"
      },
      {
        word: "Pillar",
        definition: "A firm vertical column supporting a roof or moral principle."
      },
      {
        word: "Sovereign",
        definition: "Possessing supreme, independent authority and divinity."
      },
      {
        word: "Tongue",
        definition: "A language, idiom, or manner of spiritual expression."
      }
    ]
  },
  44: {
    meaning: "Robert Burns's wise, warm poetic counsel to a young friend embarking on life, urging unyielding integrity, prudent thrift, reverence for sacred truth, and an independent mind.",
    vocabulary: [
      {
        word: "Epistle",
        definition: "A formal or didactic letter composed in verse."
      },
      {
        word: "Prudence",
        definition: "The quality of acting with care, wisdom, and foresight."
      },
      {
        word: "Avarice",
        definition: "Extreme, insatiable greed for wealth and material possessions."
      },
      {
        word: "Scorn",
        definition: "Contempt, disdain, or derisive rejection of baseness."
      },
      {
        word: "Sacred",
        definition: "Consecrated, holy, and dedicated to divine truth."
      }
    ]
  },
  45: {
    meaning: "Holmes's hilarious satirical masterpiece about the deacon who built a horse carriage with every single part equally strong, so it ran flawlessly for a century and collapsed into dust all at once.",
    vocabulary: [
      {
        word: "Shay",
        definition: "A light two-wheeled carriage drawn by one horse (chaise).",
        context: "Have you heard of the wonderful one-hoss shay,"
      },
      {
        word: "Thill",
        definition: "One of the two shafts between which a draft horse is harnessed."
      },
      {
        word: "Ell",
        definition: "An ancient measure of length, roughly forty-five inches.",
        context: "I’ll tell you what happened without delay,"
      },
      {
        word: "Deacon",
        definition: "An ordained lay official in Protestant churches assisting pastors.",
        context: "“Fur,” said the Deacon, “’t’s mighty plain"
      },
      {
        word: "Collapse",
        definition: "To fall down suddenly, disintegrate, or crumble into dust."
      }
    ]
  },
  46: {
    meaning: "Longfellow's rousing national allegory celebrating the construction of a great wooden ship, culminating in the impassioned prayer for the Union: 'Thou, too, sail on, O Ship of State!'",
    vocabulary: [
      {
        word: "Keel",
        definition: "The central foundational timber running along the bottom of a ship.",
        context: "The thrill of life along her keel,"
      },
      {
        word: "Spars",
        definition: "Wooden poles such as masts, yards, and booms supporting sails."
      },
      {
        word: "Anchor",
        definition: "A heavy iron device dropped to the seabed to hold a vessel fast.",
        context: "Were shaped the anchors of thy hope!"
      },
      {
        word: "Gale",
        definition: "A strong, turbulent storm wind at sea.",
        context: "And not a rent made by the gale."
      },
      {
        word: "Ramparts",
        definition: "Defensive wall embankments protecting a fortress."
      }
    ]
  },
  47: {
    meaning: "Ella Wheeler Wilcox's celebrated observation on social superficiality: 'Laugh, and the world laughs with you; Weep, and you weep alone.' The world welcomes mirth but recoils from sorrow.",
    vocabulary: [
      {
        word: "Mirth",
        definition: "Amusement, laughter, and high-spirited joy.",
        context: "For the sad old earth must borrow its mirth,"
      },
      {
        word: "Solitary",
        definition: "Existing, walking, or suffering alone in isolation."
      },
      {
        word: "Rejoice",
        definition: "To feel or show great delight, triumph, and happiness.",
        context: "Rejoice, and men will seek you;"
      },
      {
        word: "Nectar",
        definition: "A delicious, sweet drink of the gods; sweet life essence.",
        context: "There are none to decline your nectared wine,"
      },
      {
        word: "Gall",
        definition: "Bitter substance; symbolic of painful trial and anguish.",
        context: "But alone you must drink life’s gall."
      }
    ]
  },
  48: {
    meaning: "Riley's joyful Hoosier dialect ode to lazy summer bliss. Lying under apple trees amid humming bees, the poet desires nothing more than to be carefree and knee-deep in June.",
    vocabulary: [
      {
        word: "Drowsy",
        definition: "Sleepy, lethargic, and soothingly heavy with rest."
      },
      {
        word: "Clover",
        definition: "A fragrant meadow herb with trifoliate leaves and sweet flowers.",
        context: "In the clover-bloom, er pull"
      },
      {
        word: "Bumblebee",
        definition: "A large, hairy, social bee buzzing noisily through blossoms."
      },
      {
        word: "Orchard",
        definition: "A planted grove of fruit trees.",
        context: "Orchard’s where I’d ruther be—"
      },
      {
        word: "Plow",
        definition: "An agricultural implement used to cut and turn over furrowed soil."
      }
    ]
  },
  49: {
    meaning: "Ingalls's stern, dramatic personification of Opportunity as an unyielding master who knocks but once at each human gate, urging immediate decisive action before he departs forever.",
    vocabulary: [
      {
        word: "Destiny",
        definition: "The predetermined course of events and human fate."
      },
      {
        word: "Sovereign",
        definition: "Possessing supreme power, ruler of human fortune."
      },
      {
        word: "Sloth",
        definition: "Habitual disinclination to exertion; sluggish laziness."
      },
      {
        word: "Mantle",
        definition: "A loose, sleeveless cloak worn as a symbol of authority."
      },
      {
        word: "Heedless",
        definition: "Careless, thoughtless, and failing to pay attention."
      }
    ]
  },
  50: {
    meaning: "Burroughs's serene transcendentalist assertion of spiritual serenity. The poet folds his hands in peace, knowing that through natural law, what is genuinely his will gravitate to him.",
    vocabulary: [
      {
        word: "Serene",
        definition: "Calm, peaceful, untroubled, and tranquil in mind.",
        context: "Serene, I fold my hands and wait,"
      },
      {
        word: "Tide",
        definition: "The periodic rise and fall of sea waters; cosmic flow.",
        context: "Nor care for wind nor tide nor sea;"
      },
      {
        word: "Hasten",
        definition: "To move or act with swift hurried speed.",
        context: "I stay my haste, I make delays—"
      },
      {
        word: "Kin",
        definition: "Kindred spirits, family, or those bound by natural affinity.",
        context: "The friends I seek are seeking me,"
      },
      {
        word: "Repose",
        definition: "A state of restful peace, tranquility, and calm sleep."
      }
    ]
  },
  51: {
    meaning: "Longfellow's legendary patriotic ballad recounting Paul Revere's midnight ride across Middlesex to warn American colonists that British forces were marching on Lexington and Concord.",
    vocabulary: [
      {
        word: "Belfry",
        definition: "The bell tower or steeple of a church holding bells.",
        context: "Hang a lantern aloft in the belfry arch"
      },
      {
        word: "Lantern",
        definition: "A portable lighting lamp with protective glass panes.",
        context: "Hang a lantern aloft in the belfry arch"
      },
      {
        word: "Moorings",
        definition: "Ropes and anchors securing a ship to a wharf or buoy."
      },
      {
        word: "Steed",
        definition: "A spirited, gallant horse galloping into battle.",
        context: "Struck out by a steed flying fearless and fleet;"
      },
      {
        word: "Barracks",
        definition: "Military buildings providing quarters for armed troops."
      }
    ]
  },
  52: {
    meaning: "Shakespeare's Sonnet 73 meditating on aging, autumn foliage, twilight, and glowing embers, observing that the approaching end of life makes love between souls all the more profound.",
    vocabulary: [
      {
        word: "Boughs",
        definition: "Main branches of a tree bearing leaves or bare in winter.",
        context: "Upon those boughs which shake against the cold,"
      },
      {
        word: "Twilight",
        definition: "The soft diffused light between sunset and complete dark.",
        context: "In me thou see’st the twilight of such day"
      },
      {
        word: "Choirs",
        definition: "The parts of cathedrals where choristers sing; tree branches.",
        context: "Bare ruin’d choirs, where late the sweet birds sang:"
      },
      {
        word: "Embers",
        definition: "Glowing pieces of coal or wood remaining in a dying fire."
      },
      {
        word: "Nourished",
        definition: "Provided with sustenance, nurtured, and kept alive."
      }
    ]
  },
  53: {
    meaning: "Lucy Larcom's environmental and humanitarian lyric celebrating the planter of trees. Planting a sapling is an act of altruistic faith that bestows shade, shelter, and beauty on future generations.",
    vocabulary: [
      {
        word: "Sapling",
        definition: "A young, slender tree with tender bark and budding limbs."
      },
      {
        word: "Bough",
        definition: "A large, leafy branch extending outward from a tree trunk.",
        context: "What the glory of thy boughs shall be?"
      },
      {
        word: "Canopy",
        definition: "A protective overhead roof of lush green foliage."
      },
      {
        word: "Benefactor",
        definition: "One who confers a substantial benefit, kindness, or gift."
      },
      {
        word: "Shelter",
        definition: "A safe haven offering protection from storm and blazing heat.",
        context: "To whose shelter throng"
      }
    ]
  },
  54: {
    meaning: "Leigh Hunt's enchanting oriental parable. Abou Ben Adhem awakens to find an angel recording those who love the Lord; Abou asks to be written as one who loves his fellow men, and leads the list.",
    vocabulary: [
      {
        word: "Exceeding",
        definition: "Surpassing normal limits; extraordinarily abundant.",
        context: "Exceeding peace had made Ben Adhem bold,"
      },
      {
        word: "Lily",
        definition: "A graceful, fragrant flower symbolizing spiritual purity.",
        context: "Making it rich, and like a lily in bloom,"
      },
      {
        word: "Vision",
        definition: "A supernatural or heavenly apparition beheld in wonder.",
        context: "“What writest thou?” The Vision raised its head,"
      },
      {
        word: "Cheerly",
        definition: "In a cheerful, bright, and hearty spirited manner.",
        context: "But cheerly still; and said, “I pray thee, then,"
      },
      {
        word: "Tribe",
        definition: "A community or familial group sharing common lineage.",
        context: "Abou Ben Adhem (may his tribe increase!)"
      }
    ]
  },
  55: {
    meaning: "Poe's acoustic tour de force tracing the stages of human life through four bell types: silver sleigh bells of youth, golden wedding chimes, brass alarm bells of terror, and iron funeral knells.",
    vocabulary: [
      {
        word: "Tintinnabulation",
        definition: "The ringing, pealing, or tinkling sound of bells (coined by Poe).",
        context: "To the tintinnabulation that so musically wells"
      },
      {
        word: "Runic",
        definition: "Mysterious, ancient, and inscribed with secret magical runes.",
        context: "In a sort of Runic rhyme,"
      },
      {
        word: "Euphony",
        definition: "A pleasing, agreeable, and melodious combination of sounds.",
        context: "What a gush of euphony voluminously wells!"
      },
      {
        word: "Monody",
        definition: "A solemn, solitary lament or funeral dirge.",
        context: "What a world of solemn thought their monody compels!"
      },
      {
        word: "Paean",
        definition: "A triumphant song or shout of thanksgiving and victory."
      }
    ]
  },
  56: {
    meaning: "Gray's immortal elegy contemplating the forgotten rustic dead in a quiet churchyard. It honors the humble lives, unheralded virtues, and quiet dignity of common village folk.",
    vocabulary: [
      {
        word: "Knells",
        definition: "Rings solemn funeral bells sounding a person's death.",
        context: "The curfew tolls the knell of parting day,"
      },
      {
        word: "Lea",
        definition: "An open, grassy meadow or pastoral pasture.",
        context: "The lowing herd winds slowly o’er the lea,"
      },
      {
        word: "Glebe",
        definition: "Cultivated soil, farmland, or parish earth."
      },
      {
        word: "Jocund",
        definition: "Cheerful, light-hearted, and joyful in spirit."
      },
      {
        word: "Penury",
        definition: "Extreme poverty, destitution, and material hardship."
      }
    ]
  },
  57: {
    meaning: "Alexander Anderson's tender Scottish dialect lullaby where a weary working-class mother affectionately tucks her noisy, lively children into bed after an energetic day.",
    vocabulary: [
      {
        word: "Bairnies",
        definition: "Scottish dialect term for small children or infants.",
        context: "The bairnies cuddle doon at nicht"
      },
      {
        word: "Muckle",
        definition: "Scottish term meaning great, large, or much in quantity.",
        context: "Wi’ muckle fash an’ din."
      },
      {
        word: "Fash",
        definition: "Scottish term for trouble, annoyance, or weary bother.",
        context: "Wi’ muckle fash an’ din."
      },
      {
        word: "Wean",
        definition: "A young child, wee one, or toddler.",
        context: "“Noo, weanies, cuddle doon!”"
      },
      {
        word: "Hearth",
        definition: "The stone fireplace warming a humble country cottage.",
        context: "At length they hear their father’s fit;"
      }
    ]
  },
  58: {
    meaning: "Milton's monumental sonnet wrestling with his total blindness. Fearing he can no longer serve God with his poetic talent, he finds consolation in the truth that 'They also serve who only stand and wait.'",
    vocabulary: [
      {
        word: "Talent",
        definition: "A natural gift or intellectual endowment (alluding to the biblical parable).",
        context: "And that one talent, which is death to hide,"
      },
      {
        word: "Ere",
        definition: "Archaic poetic word meaning before in time.",
        context: "Ere half my days, in this dark world and wide,"
      },
      {
        word: "Yoke",
        definition: "A wooden bar harnessing oxen; metaphor for patient service.",
        context: "Bear His mild yoke, they serve Him best."
      },
      {
        word: "Chide",
        definition: "To scold, rebuke, or express mild disapproval.",
        context: "My true account, lest He, returning, chide:"
      },
      {
        word: "Post",
        definition: "To travel with great urgency and speed over land and ocean.",
        context: "And post o’er land and ocean without rest;"
      }
    ]
  },
  59: {
    meaning: "Bryant's meditation on death written at age seventeen. Nature gently reassures the mortal traveler that death is not solitary oblivion, but a peaceful return to the great tomb of earth with all humanity.",
    vocabulary: [
      {
        word: "Shroud",
        definition: "A burial sheet or garment wrapped around the deceased."
      },
      {
        word: "Sepulchre",
        definition: "A burial chamber, stone tomb, or resting vault."
      },
      {
        word: "Patriarchs",
        definition: "The ancient founding fathers, leaders, and venerated elders.",
        context: "With patriarchs of the infant world—with kings,"
      },
      {
        word: "Couch",
        definition: "A resting bed or peaceful place of final slumber.",
        context: "Couch more magnificent. Thou shalt lie down"
      },
      {
        word: "Unfaltering",
        definition: "Steadfast, unwavering, and firm without trembling.",
        context: "By an unfaltering trust, approach thy grave"
      }
    ]
  },
  60: {
    meaning: "Longfellow's warm domestic lyric describing the twilight hour when his three young daughters—Alice, Allegra, and Edith—rush into his study to playfully conquer their father's heart.",
    vocabulary: [
      {
        word: "Turret",
        definition: "A small tower rising above the walls of a castle.",
        context: "They climb up into my turret,"
      },
      {
        word: "Banditti",
        definition: "Bandits, outlaws, or playful marauders plotting an ambush."
      },
      {
        word: "Dungeon",
        definition: "A secure underground cell; here, the father's loving heart.",
        context: "But put you down into the dungeon"
      },
      {
        word: "Fortress",
        definition: "A fortified stronghold defended against intrusion.",
        context: "I have you fast in my fortress,"
      },
      {
        word: "Besiege",
        definition: "To surround with forces to capture or conquer."
      }
    ]
  },
  61: {
    meaning: "Henley's indomitable Victorian anthem of stoic fortitude written from a hospital bed. Despite excruciating physical agony and life's brutal blows, he remains captain of his soul.",
    vocabulary: [
      {
        word: "Fell",
        definition: "Fierce, cruel, destructive, and deadly.",
        context: "In the fell clutch of circumstance"
      },
      {
        word: "Bludgeonings",
        definition: "Heavy, battering strikes or violent blows from a club.",
        context: "Under the bludgeonings of chance"
      },
      {
        word: "Menace",
        definition: "An impending threat, doom, or terrifying danger.",
        context: "And yet the menace of the years"
      },
      {
        word: "Strait",
        definition: "Narrow, strict, tight, and difficult to pass through.",
        context: "It matters not how strait the gate,"
      },
      {
        word: "Scroll",
        definition: "A roll of parchment inscribed with legal punishments or fate.",
        context: "How charged with punishments the scroll,"
      }
    ]
  },
  62: {
    meaning: "Edward Lear's delightful nonsense ballad of the eccentric romance between an Owl and a Pussy-cat who set out to sea in a pea-green boat and marry with a ring from a Piggy-wig's nose.",
    vocabulary: [
      {
        word: "Runcible",
        definition: "A whimsical nonsense fork-spoon utensil coined by Edward Lear.",
        context: "Which they ate with a runcible spoon;"
      },
      {
        word: "Bong-tree",
        definition: "A fantastical, imaginary tropical tree imagined by Lear.",
        context: "To the land where the bong-tree grows;"
      },
      {
        word: "Tarried",
        definition: "Delayed, lingered, or waited before departing.",
        context: "Oh, let us be married,—too long we have tarried,—"
      },
      {
        word: "Shilling",
        definition: "A British silver coin formerly worth twelve pence.",
        context: "“Dear Pig, are you willing to sell for one shilling"
      },
      {
        word: "Mince",
        definition: "Finely chopped meat or savory minced pastry.",
        context: "They dined upon mince and slices of quince,"
      }
    ]
  },
  63: {
    meaning: "Macaulay's sweeping martial ballad recounting how Horatius and two companions held the narrow bridge across the Tiber against thirty thousand Etruscans to save Rome.",
    vocabulary: [
      {
        word: "Vanguard",
        definition: "The foremost division or advance guard of an advancing army."
      },
      {
        word: "Harness",
        definition: "A knight's defensive suit of armor and battle gear.",
        context: "And, with his harness on his back,"
      },
      {
        word: "Tiber",
        definition: "The historic river flowing through the heart of ancient Rome.",
        context: "“O Tiber! Father Tiber!"
      },
      {
        word: "Consul",
        definition: "One of the two chief elected magistrates of the Roman Republic.",
        context: "“Hew down the bridge, Sir Consul,"
      },
      {
        word: "Buckler",
        definition: "A small, round shield held or strapped to the forearm in combat."
      }
    ]
  },
  64: {
    meaning: "Lord Byron's celebrated romantic lyric praising a woman whose radiant grace harmonizes darkness and light, mirroring the tranquil starry skies and expressing pure interior virtue.",
    vocabulary: [
      {
        word: "Aspect",
        definition: "Facial countenance, outward appearance, or serene gaze.",
        context: "Meet in her aspect and her eyes,"
      },
      {
        word: "Mellowed",
        definition: "Softened, ripened, and tempered into gentle harmony."
      },
      {
        word: "Tress",
        definition: "A long lock, braid, or strand of a woman's hair.",
        context: "Which waves in every raven tress,"
      },
      {
        word: "Serenely",
        definition: "Calmly, placidly, and with untroubled tranquility.",
        context: "Where thoughts serenely sweet express"
      },
      {
        word: "Eloquent",
        definition: "Fluent, persuasive, and beautifully expressive in meaning.",
        context: "So soft, so calm, yet eloquent,"
      }
    ]
  },
  65: {
    meaning: "Whittier's tranquil Quaker hymn placing simple trust in the boundless mercy and goodness of God, rejecting dogmatic theological terrors in favor of divine love and compassion.",
    vocabulary: [
      {
        word: "Aisles",
        definition: "Passages between rows of pews in a house of worship.",
        context: "The quiet aisles of prayer,"
      },
      {
        word: "Unfathomed",
        definition: "Immeasurably deep; impossible to completely sound or measure."
      },
      {
        word: "Chide",
        definition: "To scold gently, reprove, or express mild reproach."
      },
      {
        word: "Harbor",
        definition: "A safe coastal port sheltering ships from ocean storms."
      },
      {
        word: "Mercy",
        definition: "Compassion, loving forbearance, and gracious pardon."
      }
    ]
  },
  66: {
    meaning: "Goethe's brief philosophical reflection reminding us that one cannot hope to reap golden harvests without first enduring the patient toil of sowing and waiting through seasons.",
    vocabulary: [
      {
        word: "Mowers",
        definition: "Harvesters who cut down standing grain or grass with scythes.",
        context: "We must not hope to be mowers,"
      },
      {
        word: "Ears",
        definition: "The seed-bearing grain spikes of wheat, rye, or barley.",
        context: "And to gather the ripe gold ears,"
      },
      {
        word: "Perseverance",
        definition: "Steadfast persistence in continuing a course of action despite obstacles."
      },
      {
        word: "Ripe",
        definition: "Fully matured, developed, and ready for harvest.",
        context: "And to gather the ripe gold ears,"
      }
    ]
  },
  67: {
    meaning: "Kipling's world-famous masterwork of Victorian character and self-mastery. He provides a father's checklist of virtues—poise, patience, truthfulness, and resilience—that forge a true man.",
    vocabulary: [
      {
        word: "Impostor",
        definition: "A deceiver pretending to be what he is not; here, Triumph and Disaster.",
        context: "And treat those two impostors just the same:"
      },
      {
        word: "Knaves",
        definition: "Dishonest, untrustworthy, or deceitful rascals.",
        context: "Twisted by knaves to make a trap for fools,"
      },
      {
        word: "Sinew",
        definition: "Tough fibrous tissue connecting muscle to bone; symbol of bodily strength.",
        context: "If you can force your heart and nerve and sinew"
      },
      {
        word: "Triumph",
        definition: "A great victory, success, or public celebration of achievement.",
        context: "If you can meet with Triumph and Disaster"
      },
      {
        word: "Will",
        definition: "The determined mental resolve to persist when all else has failed.",
        context: "Except the Will which says to them: “Hold on!”"
      }
    ]
  },
  68: {
    meaning: "Longfellow's soothing twilight lyric where a weary reader asks for a simple, heartfelt poem from an humble bard to dispel the restlessness of the day like mist.",
    vocabulary: [
      {
        word: "Lute",
        definition: "An ancient stringed musical instrument with a pear-shaped body."
      },
      {
        word: "Grandeur",
        definition: "Splendor, magnificence, and impressive stateliness."
      },
      {
        word: "Martial",
        definition: "Relating to war, armed combat, and military discipline."
      },
      {
        word: "Banish",
        definition: "To drive away, dispel, or expel from mind and presence.",
        context: "And banish the thoughts of day."
      },
      {
        word: "Gusher",
        definition: "A sudden, copious outpouring of deep human emotion."
      }
    ]
  },
  69: {
    meaning: "Sir Walter Scott's famous patriotic rebuke from The Lay of the Last Minstrel. The man whose heart never burned with love for his native land shall die unwept, unhonored, and unsung.",
    vocabulary: [
      {
        word: "Strand",
        definition: "The shore, coast, or land bordering a body of water.",
        context: "From wandering on a foreign strand?"
      },
      {
        word: "Pelf",
        definition: "Money or material wealth regarded with contempt.",
        context: "Despite those titles, power and pelf,"
      },
      {
        word: "Renown",
        definition: "Widespread fame, celebrated honor, and public distinction.",
        context: "Living, shall forfeit fair renown,"
      },
      {
        word: "Vile",
        definition: "Base, contemptible, lowly, and devoid of moral nobility.",
        context: "To the vile dust from whence he sprung,"
      },
      {
        word: "Unwept",
        definition: "Unmourned by tears at funeral or death.",
        context: "Unwept, unhonored, and unsung."
      }
    ]
  },
  70: {
    meaning: "Alice Cary's moral poem reminding the reader that genuine nobility lies not in empty outward appearance or high station, but in doing kind, truthful deeds each day.",
    vocabulary: [
      {
        word: "Worth",
        definition: "Intrinsic value, moral excellence, and spiritual merit.",
        context: "True worth is in being, not seeming,—"
      },
      {
        word: "Scorn",
        definition: "Contemptuous disdain or disdainful ridicule."
      },
      {
        word: "Virtue",
        definition: "Moral excellence, righteousness, and goodness of character."
      },
      {
        word: "Nobility",
        definition: "Exalted moral character and generosity of soul."
      },
      {
        word: "Falter",
        definition: "To stumble, hesitate, or waver in courage and resolve."
      }
    ]
  },
  71: {
    meaning: "Mary Mapes Dodge's delightful nostalgic lyric reconstructing the dignified, courtly grace of an eighteenth-century colonial minuet dance as described by a grandmother.",
    vocabulary: [
      {
        word: "Minuet",
        definition: "A slow, stately, graceful ballroom dance of the 18th century.",
        context: "Grandma danced the minuet—long ago."
      },
      {
        word: "Courtly",
        definition: "Polished, dignified, and refined like court etiquette."
      },
      {
        word: "Curtsy",
        definition: "A respectful gesture of greeting made by women bending knees."
      },
      {
        word: "Brocade",
        definition: "A rich, heavy fabric woven with an ornate raised pattern."
      },
      {
        word: "Stately",
        definition: "Majestic, dignified, and imposing in manner and bearing."
      }
    ]
  },
  72: {
    meaning: "Lord Byron's romantic farewell ballad as Childe Harold sails away from his native England across blue waters, greeting the roaring sea winds without looking back in regret.",
    vocabulary: [
      {
        word: "Adieu",
        definition: "Farewell; goodbye (entrusting to God in French).",
        context: "Adieu, adieu! my native shore"
      },
      {
        word: "Billow",
        definition: "A great, swelling ocean wave rolling across deep water."
      },
      {
        word: "Falcon",
        definition: "A swift, noble hunting bird of prey."
      },
      {
        word: "Bark",
        definition: "A small sailing vessel or poetic ship."
      },
      {
        word: "Sighing",
        definition: "Letting out a deep breath of sadness, longing, or exhaustion.",
        context: "The night-winds sigh, the breakers roar,"
      }
    ]
  },
  73: {
    meaning: "Holmes's stirring Civil War anthem dedicated to the American flag, baptized in the blood of patriots and flying triumphant as a banner of freedom across land and sea.",
    vocabulary: [
      {
        word: "Altars",
        definition: "Sacred stone mounds or tables dedicated to religious offerings.",
        context: "Snatched from the altars of insolent foes,"
      },
      {
        word: "Insolent",
        definition: "Arrogantly rude, disrespectful, and disdainful.",
        context: "Snatched from the altars of insolent foes,"
      },
      {
        word: "Banner",
        definition: "A military standard or flag displaying colors and symbols."
      },
      {
        word: "Emblem",
        definition: "A symbolic object representing an abstract principle or nation.",
        context: "Emblem of justice and mercy to all:"
      },
      {
        word: "Valiant",
        definition: "Possessing courage, bravery, and chivalric valor."
      }
    ]
  },
  74: {
    meaning: "Poe's iconic gothic tour de force. A grieving student mourns his lost Lenore on a bleak December midnight, visited by a demonic raven that repeats only the fatal word: 'Nevermore.'",
    vocabulary: [
      {
        word: "Dreary",
        definition: "Bleak, cheerless, gloomy, and depressing.",
        context: "Once upon a midnight dreary, while I pondered, weak and weary,"
      },
      {
        word: "Lore",
        definition: "Traditional knowledge or wisdom gained through deep study.",
        context: "Over many a quaint and curious volume of forgotten lore,"
      },
      {
        word: "Surcease",
        definition: "A complete cessation, relief, or respite from suffering.",
        context: "From my books surcease of sorrow, sorrow for the lost Lenore,"
      },
      {
        word: "Pallas",
        definition: "Pallas Athena, the Greek goddess of wisdom and strategic war.",
        context: "Perched upon a bust of Pallas, just above my chamber door,"
      },
      {
        word: "Beguiling",
        definition: "Charming, captivating, or enticing in a wondrous manner.",
        context: "Then this ebony bird beguiling my sad fancy into smiling,"
      }
    ]
  },
  75: {
    meaning: "Alfred Noyes's dramatic narrative ballad of love, betrayal, and sacrifice. The landlord's daughter Bess shoots herself to warn her dashing outlaw lover of a redcoat ambush.",
    vocabulary: [
      {
        word: "Galleon",
        definition: "A large, multi-decked sailing ship used by European nations.",
        context: "The moon was a ghostly galleon tossed upon cloudy seas,"
      },
      {
        word: "Breeches",
        definition: "Short trousers fastened just below the knee.",
        context: "A coat of the claret velvet, and breeches of brown doe-skin;"
      },
      {
        word: "Rapier",
        definition: "A slender, sharply pointed two-edged sword designed for thrusting.",
        context: "His rapier hilt a-twinkle, under the jeweled sky."
      },
      {
        word: "Torrent",
        definition: "A swift, violent, and turbulent rushing stream.",
        context: "The wind was a torrent of darkness among the gusty trees,"
      },
      {
        word: "Casement",
        definition: "A window sash opening on hinges attached to the upright side."
      }
    ]
  },
  76: {
    meaning: "Longfellow's most famous affirmative manifesto urging humanity to act in the living present, strive courageously, and leave footprints on the sands of time for future voyagers.",
    vocabulary: [
      {
        word: "Slumber",
        definition: "A state of sleep, repose, or spiritual inertia.",
        context: "For the soul is dead that slumbers,"
      },
      {
        word: "Bivouac",
        definition: "A temporary military encampment without tents; human life.",
        context: "In the bivouac of life,"
      },
      {
        word: "Sublime",
        definition: "Of supreme moral, aesthetic, or spiritual excellence.",
        context: "We can make our lives sublime,"
      },
      {
        word: "Mournful",
        definition: "Expressing sorrow, grief, or gloomy lamentation.",
        context: "Tell me not, in mournful numbers,"
      },
      {
        word: "Strife",
        definition: "Struggle, vigorous exertion, or conflict in overcoming obstacles.",
        context: "Be a hero in the strife!"
      }
    ]
  },
  77: {
    meaning: "Robert Burns's radical egalitarian anthem declaring that moral worth and honest work transcend aristocratic titles, ribands, and gold: 'A man's a man for a' that!'",
    vocabulary: [
      {
        word: "Gowd",
        definition: "Scottish dialect term for gold or hoarded wealth.",
        context: "The man’s the gowd for a’ that!"
      },
      {
        word: "Guinea",
        definition: "A former British gold coin of high purchasing value.",
        context: "The rank is but the guinea stamp—"
      },
      {
        word: "Riband",
        definition: "A decorative ribbon worn as an aristocratic badge of honor."
      },
      {
        word: "Birkie",
        definition: "A conceited, lively fellow or arrogant young man in Scots."
      },
      {
        word: "Pith",
        definition: "Core strength, vigor, and substantial essential substance.",
        context: "The pith o’ sense, and pride o’ worth,"
      }
    ]
  },
  78: {
    meaning: "Eugene Field's humorous and endearing holiday monologue about a rambunctious boy who behaves as an angelic saint exclusively during the weeks just before Christmas.",
    vocabulary: [
      {
        word: "Rambunctious",
        definition: "Uncontrollably exuberant, boisterous, and rowdy."
      },
      {
        word: "Feller",
        definition: "Informal regional dialect for fellow, companion, or boy.",
        context: "Mother calls me Willie, but the fellers call me Bill!"
      },
      {
        word: "Pester",
        definition: "To annoy, bother, or harass with petty irritations."
      },
      {
        word: "Stocking",
        definition: "A close-fitting knitted covering for the foot hung for gifts."
      },
      {
        word: "Chore",
        definition: "A routine domestic task, errand, or household duty."
      }
    ]
  },
  79: {
    meaning: "Holmes's celebrated spiritual ode using the spiral chambers of the nautilus shell as an emblem for the soul's continuous growth: 'Build thee more stately mansions, O my soul!'",
    vocabulary: [
      {
        word: "Nautilus",
        definition: "A spiral-shelled marine cephalopod building successively larger chambers."
      },
      {
        word: "Sirens",
        definition: "Mythological sea nymphs whose songs lured sailors to shipwrecks.",
        context: "In gulfs enchanted, where the Siren sings,"
      },
      {
        word: "Crypt",
        definition: "A subterranean chamber or vaulted room in a temple.",
        context: "Its sunless crypt ununfolded to the shining day."
      },
      {
        word: "Spire",
        definition: "A tapering conical architectural structure crowning a temple."
      },
      {
        word: "Triton",
        definition: "A mythological Greek sea deity sounding a wreathed conch shell."
      }
    ]
  },
  80: {
    meaning: "Riley's celebrated autumn dialect masterpiece celebrating crisp October mornings, pumpkin fields, fodder shocks, and the hearty bounty of country harvest season.",
    vocabulary: [
      {
        word: "Fodder",
        definition: "Coarse dry food for livestock, such as corn stalks and hay.",
        context: "When the frost is on the punkin and the fodder’s in the shock,"
      },
      {
        word: "Shock",
        definition: "A bundle of harvested grain sheaves stacked upright in a field.",
        context: "When the frost is on the punkin and the fodder’s in the shock,"
      },
      {
        word: "Gobble",
        definition: "The rapid, guttural call made by a male turkey.",
        context: "And you hear the kyouck and gobble of the struttin’ turkey-cock,"
      },
      {
        word: "Frost",
        definition: "A delicate deposit of crystalline ice needles formed on cold surfaces.",
        context: "When the frost is on the punkin and the fodder’s in the shock,"
      },
      {
        word: "Rumble",
        definition: "A continuous, low, heavy resonant sound."
      }
    ]
  },
  81: {
    meaning: "Lord Byron's thundering biblical narrative recounting the sudden divine destruction of Sennacherib's Assyrian army besieging Jerusalem in a single night without a sword drawn.",
    vocabulary: [
      {
        word: "Cohorts",
        definition: "Ancient Roman military units or disciplined ranks of warriors.",
        context: "And his cohorts were gleaming in purple and gold;"
      },
      {
        word: "Sheen",
        definition: "A bright, glistening shine or radiant luster on metal armor.",
        context: "And the sheen of their spears was like stars on the sea,"
      },
      {
        word: "Galleon",
        definition: "A grand sailing ship; here used metaphorically of majesty."
      },
      {
        word: "Trumpet",
        definition: "A brass wind instrument blown to signal charges and alarms."
      },
      {
        word: "Idol",
        definition: "An image or representation of a false god worshipped in temples.",
        context: "And the idols are broke in the temple of Baal;"
      }
    ]
  },
  82: {
    meaning: "Francis Scott Key's historic anthem written during the British bombardment of Fort McHenry in 1814, witnessing through rocket glare that the star-spangled banner still proudly waved.",
    vocabulary: [
      {
        word: "Ramparts",
        definition: "Defensive earthen or stone wall embankments guarding a fort.",
        context: "O’er the ramparts we watched, were so gallantly streaming?"
      },
      {
        word: "Gleaming",
        definition: "A soft, shining glow or flash of light piercing the dark.",
        context: "What so proudly we hailed at the twilight’s last gleaming?"
      },
      {
        word: "Perilous",
        definition: "Full of grave danger, hazardous risk, and lethal threat.",
        context: "Whose broad stripes and bright stars, through the perilous fight,"
      },
      {
        word: "Banner",
        definition: "A patriotic flag displaying stars, stripes, and colors.",
        context: "O say, does that star-spangled banner yet wave"
      },
      {
        word: "Hail",
        definition: "To greet, acclaim, or salute with enthusiastic reverence.",
        context: "What so proudly we hailed at the twilight’s last gleaming?"
      }
    ]
  },
  83: {
    meaning: "Whittier's nostalgic celebration of rural American boyhood, barefoot freedom, uncorrupted innocence, and intimate acquaintance with birds, bees, and woodland streams.",
    vocabulary: [
      {
        word: "Apparelled",
        definition: "Clothed, dressed, or adorned in garments."
      },
      {
        word: "Bramble",
        definition: "A prickly, tangled wild bush bearing berries."
      },
      {
        word: "Monarch",
        definition: "A sovereign king or queen ruling over an empire."
      },
      {
        word: "Brook",
        definition: "A small, bubbling natural stream of water."
      },
      {
        word: "Pewee",
        definition: "A small American flycatcher bird named for its plaintive call."
      }
    ]
  },
  84: {
    meaning: "Shakespeare's famous paternal counsel from Hamlet where Polonius imparts timeless maxims to his departing son Laertes: 'This above all: to thine own self be true.'",
    vocabulary: [
      {
        word: "Precepts",
        definition: "General rules intended to regulate behavior or moral thought.",
        context: "And these few precepts in thy memory"
      },
      {
        word: "Apparel",
        definition: "Clothing, attire, or external dress indicating status.",
        context: "For the apparel oft proclaims the man."
      },
      {
        word: "Borrower",
        definition: "One who receives money or goods on loan with a promise to return.",
        context: "Neither a borrower nor a lender be;"
      },
      {
        word: "Proportion",
        definition: "Harmonious relation of parts to each other and to the whole.",
        context: "Nor any unproportioned thought his act."
      },
      {
        word: "Grapple",
        definition: "To grip, seize firmly, or bind closely to oneself.",
        context: "Grapple them to thy soul with hoops of steel;"
      }
    ]
  },
  85: {
    meaning: "Celia Thaxter's gentle seaside lyric capturing a tender kinship with a little sandpiper flitting along the beach before an oncoming Atlantic storm, trusting in divine care.",
    vocabulary: [
      {
        word: "Flit",
        definition: "To dart, skim, or fly swiftly and lightly from place to place.",
        context: "Across the narrow beach we flit,"
      },
      {
        word: "Breakers",
        definition: "Heavy ocean waves breaking into foam upon approaching the shore."
      },
      {
        word: "Driftwood",
        definition: "Wood that has been washed ashore by the tides and waves.",
        context: "The drift the surging sea hath tossed,"
      },
      {
        word: "Comrade",
        definition: "A companion who shares one's activities or fortunes.",
        context: "Comrade, where wilt thou be tonight,"
      },
      {
        word: "Plume",
        definition: "A feather or spray of feathers on a coastal bird."
      }
    ]
  },
  86: {
    meaning: "Eugene Field's touching lullaby elegy for Little Boy Blue, whose steadfast toy dog and soldier remain poised where he left them before he was taken to the angels.",
    vocabulary: [
      {
        word: "Stanch",
        definition: "Steadfast, loyal, firm, and unyielding in devotion.",
        context: "But sturdy and stanch he stands;"
      },
      {
        word: "Musket",
        definition: "An old-fashioned muzzle-loading shoulder weapon.",
        context: "And his musket moulds in his hands."
      },
      {
        word: "Trundle-bed",
        definition: "A low rollaway bed stored beneath a primary bed.",
        context: "So, toddling off to his trundle-bed,"
      },
      {
        word: "Passing",
        definition: "The transition from life into eternity, or passing time.",
        context: "And the soldier was passing fair;"
      },
      {
        word: "Faithful",
        definition: "Remaining loyal, constant, and steadfast through all trials.",
        context: "Aye, faithful to Little Boy Blue they stand,"
      }
    ]
  },
  87: {
    meaning: "Sam Walter Foss's democratic anthem advocating active sympathy and fellowship with everyday humanity, choosing a roadside cottage to be a helpful brother to all souls.",
    vocabulary: [
      {
        word: "Hermit",
        definition: "A recluse dwelling in solitary isolation far from society.",
        context: "There are hermit souls that live withdrawn"
      },
      {
        word: "Cynic",
        definition: "One who sneers at human virtue and expects only selfishness.",
        context: "Or hurl the cynic’s ban;—"
      },
      {
        word: "Scorner",
        definition: "A person who mocks or expresses contempt for others.",
        context: "I would not sit in the scorner’s seat,"
      },
      {
        word: "Brook",
        definition: "A small, bubbling natural stream of water."
      },
      {
        word: "Pilgrim",
        definition: "A traveler journeying through life's road toward spiritual home."
      }
    ]
  },
  88: {
    meaning: "Elizabeth Barrett Browning's searing humanitarian protest against the horrific child labor in Victorian coal mines and factories, demanding compassion for suffering innocents.",
    vocabulary: [
      {
        word: "Ere",
        definition: "Archaic poetic word meaning before in time.",
        context: "Ere the sorrow comes with years?"
      },
      {
        word: "Sorrow",
        definition: "Grief, anguish, and poignant distress of heart.",
        context: "Ere the sorrow comes with years?"
      },
      {
        word: "Wheels",
        definition: "Industrial gears and machinery grinding tirelessly in mills.",
        context: "“For all day, the wheels are droning, turning;"
      },
      {
        word: "Tyrant",
        definition: "A cruel, oppressive, and authoritarian master."
      },
      {
        word: "Burden",
        definition: "A heavy physical load or moral weight difficult to bear."
      }
    ]
  },
  89: {
    meaning: "Whitman's celebrated Civil War elegy for Abraham Lincoln. The ship of state has survived the tempestuous war, but the beloved Captain lies cold and dead upon the deck.",
    vocabulary: [
      {
        word: "Exulting",
        definition: "Rejoicing exceedingly and celebrating a great triumph.",
        context: "The port is near, the bells I hear, the people all exulting,"
      },
      {
        word: "Keel",
        definition: "The main structural timber running along the base of a ship.",
        context: "While follow eyes the steady keel, the vessel grim and daring;"
      },
      {
        word: "Tread",
        definition: "To walk with measured, solemn, or grief-stricken steps.",
        context: "But I with mournful tread,"
      },
      {
        word: "Bouquet",
        definition: "An arranged cluster of blossoms presented as a tribute.",
        context: "For you bouquets and ribbon’d wreaths—for you the shores a-crowding,"
      },
      {
        word: "Port",
        definition: "A harbor or safe haven at the conclusion of a voyage.",
        context: "The port is near, the bells I hear, the people all exulting,"
      }
    ]
  },
  90: {
    meaning: "Tennyson's serene farewell elegy envisioning death as a tranquil twilight voyage across the harbor sandbar into the ocean of eternity to meet his divine Pilot face to face.",
    vocabulary: [
      {
        word: "Moaning",
        definition: "A low, mournful sound produced by waves breaking over sandbars.",
        context: "And may there be no moaning of the bar,"
      },
      {
        word: "Bourne",
        definition: "A boundary, limit, or frontier of temporal existence.",
        context: "For though from out our bourne of Time and Place"
      },
      {
        word: "Pilot",
        definition: "A skilled nautical guide steering a ship through treacherous waters.",
        context: "I hope to see my Pilot face to face"
      },
      {
        word: "Twilight",
        definition: "The gentle diffused light between sunset and complete dark.",
        context: "Twilight and evening bell,"
      },
      {
        word: "Embark",
        definition: "To board a ship and set out upon an ocean voyage.",
        context: "When I embark;"
      }
    ]
  },
  91: {
    meaning: "Lowell's impassioned abolitionist manifesto reminding each era that God's truth challenges conventional comfort: 'New occasions teach new duties; Time makes ancient good uncouth.'",
    vocabulary: [
      {
        word: "Uncouth",
        definition: "Outmoded, awkward, unrefined, or no longer fitting.",
        context: "New occasions teach new duties; Time makes ancient good uncouth;"
      },
      {
        word: "Scaffold",
        definition: "A raised wooden platform for the public execution of martyrs.",
        context: "Truth forever on the scaffold, Wrong forever on the throne,—"
      },
      {
        word: "Prophetic",
        definition: "Foretelling future moral awakenings through spiritual insight.",
        context: "Runs a thrill of joy prophetic, trembling on from east to west,"
      },
      {
        word: "Martyr",
        definition: "One who willingly endures suffering or death for a righteous cause."
      },
      {
        word: "Heritage",
        definition: "Enduring principles, freedoms, and wisdom inherited from the past."
      }
    ]
  },
  92: {
    meaning: "Longfellow's elegant lyric on the enduring influence of art and affection. An arrow shot blindly into the air and a song breathed into the breeze are found unbroken long afterward in an oak and a friend.",
    vocabulary: [
      {
        word: "Flight",
        definition: "The act, manner, or trajectory of flying through the air.",
        context: "Could not follow it in its flight."
      },
      {
        word: "Oak",
        definition: "A mighty, deep-rooted hardwood tree symbolizing strength and longevity.",
        context: "Long, long afterward, in an oak"
      },
      {
        word: "Sight",
        definition: "The power or faculty of vision and spiritual discernment.",
        context: "For, so swiftly it flew, the sight"
      },
      {
        word: "Unbroken",
        definition: "Intact, whole, and preserved from decay or fracture.",
        context: "I found the arrow, still unbroke;"
      },
      {
        word: "Breathed",
        definition: "Uttered softly, sung gently, or whispered like breath.",
        context: "I breathed a song into the air,"
      }
    ]
  },
  93: {
    meaning: "Lowell's democratic examination of wealth versus honest poverty. The rich man's son inherits idle luxury and anxiety, while the poor man's son inherits sturdy limbs, clear conscience, and useful labor.",
    vocabulary: [
      {
        word: "Heritage",
        definition: "Property, qualities, or conditions inherited from forebears.",
        context: "A heritage, it seems to me,"
      },
      {
        word: "Sordid",
        definition: "Base, ignoble, avaricious, or degraded by greed."
      },
      {
        word: "Toil",
        definition: "Hard, continuous, and strenuous physical or mental labor.",
        context: "In every useful toil and art;"
      },
      {
        word: "Kingly",
        definition: "Noble, majestic, and sovereign in moral bearing.",
        context: "King of two hands, he does his part"
      },
      {
        word: "Sinew",
        definition: "Muscular strength, physical vigor, and resilient stamina.",
        context: "Stout muscles and a sinewy heart,"
      }
    ]
  },
  94: {
    meaning: "Alice Cary's tender narrative poem commissioning a painter to depict her beloved mother surrounded by rolling country meadows, orchards, and her loving children.",
    vocabulary: [
      {
        word: "Cunning",
        definition: "Skill, artistic dexterity, and masterful craft.",
        context: "Has your art the cunning to trace"
      },
      {
        word: "Orchard",
        definition: "A piece of enclosed ground planted with fruit trees."
      },
      {
        word: "Daisies",
        definition: "Small wild meadow flowers with white petals and yellow centers."
      },
      {
        word: "Reverent",
        definition: "Feeling or showing deep, solemn respect and affection."
      },
      {
        word: "Tender",
        definition: "Showing gentleness, affectionate kindness, and warmth."
      }
    ]
  },
  95: {
    meaning: "Tennyson's celebrated New Year hymn from In Memoriam commanding church bells to ring out civic strife, slander, and greed, and ring in noble truth, peace, and the Christ that is to be.",
    vocabulary: [
      {
        word: "Strife",
        definition: "Bitter conflict, contention, or discord between people."
      },
      {
        word: "Civic",
        definition: "Relating to a city, citizens, and communal public affairs."
      },
      {
        word: "Redress",
        definition: "Remedy or compensation for a wrong, injury, or injustice.",
        context: "Ring in redress to all mankind."
      },
      {
        word: "Lust",
        definition: "An intense, uncontrolled longing for power, wealth, or pleasure.",
        context: "Ring out the narrowing lust of gold;"
      },
      {
        word: "Noble",
        definition: "Possessing elevated moral qualities, honor, and dignity."
      }
    ]
  },
  96: {
    meaning: "Robert Burns's affectionate pastoral masterpiece depicting a humble Scottish cotter's pious family gathering on Saturday evening for warm supper, bible reading, and heartfelt prayer.",
    vocabulary: [
      {
        word: "Cotter",
        definition: "A Scottish peasant farmer or rural laborer occupying a small cottage."
      },
      {
        word: "Sugh",
        definition: "A Scottish term for a deep, mournful soughing or rushing sound of wind.",
        context: "November chill blaws loud wi’ angry sugh;"
      },
      {
        word: "Bairns",
        definition: "Scottish dialect word for children."
      },
      {
        word: "Hearth",
        definition: "The domestic fireplace stone radiating warmth across the cottage.",
        context: "His clean hearth-stane, his thriftie wifie’s smile,"
      },
      {
        word: "Patriarch",
        definition: "The respected male head of a family and household.",
        context: "The sire turns o’er, wi’ patriarchal grace,"
      }
    ]
  },
  97: {
    meaning: "Jean Ingelow's charming lyric of a seven-year-old child rejoicing in her growing age on a bright spring morning, talking with butterflies, columbines, and sheep in the meadow.",
    vocabulary: [
      {
        word: "Columbine",
        definition: "A graceful garden flower with five spurred, spurred backward petals.",
        context: "O columbine, open your folded wrapper,"
      },
      {
        word: "Marsh-marigold",
        definition: "A wetland plant with glossy leaves and vibrant yellow flowers.",
        context: "O brave marsh marybuds, rich and yellow,"
      },
      {
        word: "Meadow",
        definition: "A field of grass and clover where livestock graze."
      },
      {
        word: "Velvet",
        definition: "A soft, luxurious woven fabric with a dense smooth pile.",
        context: "O velvet bee, you’re a dusty fellow,"
      },
      {
        word: "Clover",
        definition: "A sweet-smelling three-leaved pasture plant beloved by bees.",
        context: "There’s no dew left on the daisies and clover,"
      }
    ]
  },
  98: {
    meaning: "Sir Walter Scott's famous patriotic declaration: the soul devoid of native pride, no matter how titled or wealthy, shall return to the vile dust from whence he sprung.",
    vocabulary: [
      {
        word: "Strand",
        definition: "A shore, beach, or native coast.",
        context: "From wandering on a foreign strand?"
      },
      {
        word: "Pelf",
        definition: "Ill-gotten wealth, money, or gain regarded with contempt.",
        context: "Despite those titles, power, and pelf,"
      },
      {
        word: "Renown",
        definition: "Celebrated fame, distinguished honor, and wide acclaim.",
        context: "Living, shall forfeit fair renown,"
      },
      {
        word: "Vile",
        definition: "Base, lowly, wretched, and devoid of noble virtue.",
        context: "To the vile dust from whence he sprung,"
      },
      {
        word: "Minstrel",
        definition: "A medieval traveling poet, bard, and singer of verse.",
        context: "For him no minstrel raptures swell;"
      }
    ]
  },
  99: {
    meaning: "Samuel Woodworth's nostalgic lyric honoring the old moss-covered oak bucket hanging in his childhood well, whose clear, cool water quenched his thirst with sweet memories.",
    vocabulary: [
      {
        word: "Recollection",
        definition: "The power or act of recalling past memories to mind.",
        context: "When fond recollection presents them to view!"
      },
      {
        word: "Cataract",
        definition: "A large, powerful, and roaring waterfall or cascade.",
        context: "The bridge, and the rock where the cataract fell;"
      },
      {
        word: "Meadow",
        definition: "A tract of low or level grassland along a brook.",
        context: "The orchard, the meadow, the deep-tangled wild-wood,"
      },
      {
        word: "Moss-covered",
        definition: "Encrusted with lush green velvety moss growth from moisture.",
        context: "The moss-covered bucket which hung in the well."
      },
      {
        word: "Goblet",
        definition: "A drinking cup with a foot and stem, often of gold or silver.",
        context: "Not a full blushing goblet could tempt me to leave it,"
      }
    ]
  },
  100: {
    meaning: "Cardinal Newman's immortal prayer of spiritual surrender and faith. Amid encircling darkness and uncertainty, the soul asks not to see the distant scene, but for God to guide one step at a time.",
    vocabulary: [
      {
        word: "Encircling",
        definition: "Surrounding, encompassing, or enclosing on all sides.",
        context: "Lead, Kindly Light, amid the encircling gloom,"
      },
      {
        word: "Gloom",
        definition: "Partial or total darkness; sadness and spiritual shadow.",
        context: "Lead, Kindly Light, amid the encircling gloom,"
      },
      {
        word: "Garish",
        definition: "Obtrusively bright, showy, or glaringly gaudy.",
        context: "I loved the garish day, and, spite of fears,"
      },
      {
        word: "Moor",
        definition: "A broad expanse of open, uncultivated highland peaty ground.",
        context: "O’er moor and fen, o’er crag and torrent, till"
      },
      {
        word: "Fen",
        definition: "A low and marshy or frequently flooded wetland tract.",
        context: "O’er moor and fen, o’er crag and torrent, till"
      },
      {
        word: "Crag",
        definition: "A steep, rugged, and projecting mass of rock on a mountain.",
        context: "O’er moor and fen, o’er crag and torrent, till"
      }
    ]
  }
};

export function getPoemEnrichment(poemId: number, title?: string, author?: string, era?: string, theme?: string): PoemEnrichment {
  if (POEM_MEANINGS[poemId]) {
    return POEM_MEANINGS[poemId];
  }

  return {
    meaning: `"${title || 'This canonical verse'}" by ${author || 'the master poet'} expresses timeless philosophical reflections on ${theme?.toLowerCase() || 'the human condition'}.`,
    vocabulary: [
      { word: "Sublime", definition: "Of supreme moral or aesthetic excellence." },
      { word: "Ethereal", definition: "Delicate, heavenly, and spiritual." },
      { word: "Enduring", definition: "Lasting through trials and generations." }
    ]
  };
}
