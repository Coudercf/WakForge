export const CLASS_CONSTANTS = {
  feca: 'feca',
  osamodas: 'osamodas',
  enutrof: 'enutrof',
  sram: 'sram',
  xelor: 'xelor',
  ecaflip: 'ecaflip',
  eniripsa: 'eniripsa',
  iop: 'iop',
  cra: 'cra',
  sadida: 'sadida',
  sacrier: 'sacrier',
  pandawa: 'pandawa',
  rogue: 'rogue',
  masqueraider: 'masqueraider',
  ouginak: 'ouginak',
  foggernaut: 'foggernaut',
  eliotrope: 'eliotrope',
  huppermage: 'huppermage',
};

export const ELEMENT_TYPE_ENUM = {
  empty: 0,
  fire: 1,
  earth: 2,
  water: 4,
  air: 8,
};

export const RUNE_TYPES = {
  meleeMastery: 27097,
  distanceMastery: 27098,
  berserkMastery: 27099,
  earthResistance: 27107,
  criticalMastery: 27100,
  rearMastery: 27101,
  dodge: 27103,
  initiative: 27104,
  fireResistance: 27105,
  elementalMastery: 27094,
  lock: 27102,
  waterResistance: 27106,
  airResistance: 27108,
  healthPoints: 27109,
  healingMastery: 27110,
};

// for these values, in reality a lot of them have a 0.5 in the game math. but, they are rounded down before being used for anything.
// so leaving out the 0.5 is equivalent and code-cleaner
export const RUNE_LEVEL_REQUIREMENTS = [0, 36, 51, 66, 81, 96, 126, 141, 171, 186, 216];
export const RUNE_MASTERY_LEVEL_VALUES = [1, 3, 4, 6, 7, 10, 15, 19, 24, 30, 33];
export const RUNE_RESISTANCE_LEVEL_VALUES = [2, 5, 7, 10, 12, 15, 17, 20, 22, 25, 27, 30];
export const RUNE_DODGE_LOCK_LEVEL_VALUES = [3, 6, 9, 12, 15, 21, 30, 39, 48, 60, 66];
export const RUNE_ELEMENTAL_MASTERY_LEVEL_VALUES = [1, 2, 3, 4, 5, 7, 10, 13, 16, 20, 22];
export const RUNE_INITIATIVE_LEVEL_VALUES = [2, 4, 6, 8, 10, 14, 20, 26, 32, 40, 44];
export const RUNE_HEALTH_LEVEL_VALUES = [4, 8, 12, 16, 20, 28, 40, 52, 64, 80, 88];

export const ITEM_SLOT_DATA = {
  HEAD: { id: 'HEAD', rawId: 0, name: 'constants.helmet', sortOrder: 1 },
  CHEST: { id: 'CHEST', rawId: 5, name: 'constants.breastplate', sortOrder: 2 },
  SHOULDERS: { id: 'SHOULDERS', rawId: 3, name: 'constants.epaulettes', sortOrder: 3 },
  LEGS: { id: 'LEGS', rawId: 12, name: 'constants.boots', sortOrder: 4 },
  NECK: { id: 'NECK', rawId: 4, name: 'constants.amulet', sortOrder: 5 },
  BACK: { id: 'BACK', rawId: 13, name: 'constants.cloak', sortOrder: 6 },
  BELT: { id: 'BELT', rawId: 10, name: 'constants.belt', sortOrder: 7 },
  FIRST_WEAPON: { id: 'FIRST_WEAPON', rawId: 15, name: 'constants.primaryWeapon', sortOrder: 8 },
  SECOND_WEAPON: { id: 'SECOND_WEAPON', name: 'constants.secondaryWeapon', sortOrder: 9 },
  LEFT_HAND: { id: 'LEFT_HAND', rawId: 7, name: 'constants.leftRing', sortOrder: 10 },
  RIGHT_HAND: { id: 'RIGHT_HAND', rawId: 8, name: 'constants.rightRing', sortOrder: 11 },
  ACCESSORY: { id: 'ACCESSORY', name: 'constants.emblem', sortOrder: 12 },
  PET: { id: 'PET', name: 'constants.pet', sortOrder: 13 },
  MOUNT: { id: 'MOUNT', name: 'constants.mount', sortOrder: 14 },
};

export const ITEM_SLOT_SORT_ORDER = Object.keys(ITEM_SLOT_DATA)
  .map((key) => {
    return {
      id: ITEM_SLOT_DATA[key].id,
      sortOrder: ITEM_SLOT_DATA[key].sortOrder,
    };
  })
  .sort((entry1, entry2) => {
    return entry1.sortOrder < entry2.sortOrder;
  })
  .map((item) => item.id);

export const ITEM_RARITY_DATA = [
  { id: 0, name: 'constants.common' },
  { id: 1, name: 'constants.unusual' },
  { id: 2, name: 'constants.rare' },
  { id: 3, name: 'constants.mythical' },
  { id: 4, name: 'constants.legendary' },
  { id: 5, name: 'constants.relic' },
  { id: 6, name: 'constants.souvenir' },
  { id: 7, name: 'constants.epic' },
];

export const LEVELABLE_ITEMS = [582, 611];

export const ITEM_TYPE_DATA = [
  { id: 'weaponsAndShields', rawId: 100, name: 'Weapons & Shields', validSlots: [] },
  { id: 'twoHandedAxe', rawId: 101, name: 'Axe (Two Handed)', validSlots: [ITEM_SLOT_DATA.FIRST_WEAPON] },
  { id: 'ring', rawId: 103, name: 'Ring', validSlots: [ITEM_SLOT_DATA.RIGHT_HAND, ITEM_SLOT_DATA.LEFT_HAND] },
  { id: 'consumables', rawId: 106, name: 'Consumables', validSlots: [] },
  { id: 'wand', rawId: 108, name: 'Wand (One Hand)', validSlots: [ITEM_SLOT_DATA.FIRST_WEAPON] },
  { id: 'sword', rawId: 110, name: 'Sword (One Hand)', validSlots: [ITEM_SLOT_DATA.FIRST_WEAPON] },
  { id: 'shovel', rawId: 111, name: 'Shovel (Two Handed)', validSlots: [ITEM_SLOT_DATA.FIRST_WEAPON] },
  { id: 'dagger', rawId: 112, name: 'Dagger (Secondary Weapon)', validSlots: [ITEM_SLOT_DATA.SECOND_WEAPON] },
  { id: 'staff', rawId: 113, name: 'Staff (One Hand)', validSlots: [ITEM_SLOT_DATA.FIRST_WEAPON] },
  { id: 'hammer', rawId: 114, name: 'Hammer (Two Handed)', validSlots: [ITEM_SLOT_DATA.FIRST_WEAPON] },
  { id: 'clockHand', rawId: 115, name: 'Clock Hand (One Hand)', validSlots: [ITEM_SLOT_DATA.FIRST_WEAPON] },
  { id: 'bow', rawId: 117, name: 'Bow (Two Handed)', validSlots: [ITEM_SLOT_DATA.FIRST_WEAPON] },
  { id: 'armor', rawId: 118, name: 'Armor', validSlots: [] },
  { id: 'boots', rawId: 119, name: 'Boots', validSlots: [ITEM_SLOT_DATA.LEGS] },
  { id: 'amulet', rawId: 120, name: 'Amulet', validSlots: [ITEM_SLOT_DATA.NECK] },
  { id: 'cloak', rawId: 132, name: 'Cloak', validSlots: [ITEM_SLOT_DATA.BACK] },
  { id: 'belt', rawId: 133, name: 'Belt', validSlots: [ITEM_SLOT_DATA.BELT] },
  { id: 'helmet', rawId: 134, name: 'Helmet', validSlots: [ITEM_SLOT_DATA.HEAD] },
  { id: 'breastplate', rawId: 136, name: 'Breastplate', validSlots: [ITEM_SLOT_DATA.CHEST] },
  { id: 'epaulettes', rawId: 138, name: 'Epaulettes', validSlots: [ITEM_SLOT_DATA.SHOULDERS] },
  { id: 'shield', rawId: 189, name: 'Shield (Secondary Weapon)', validSlots: [ITEM_SLOT_DATA.SECOND_WEAPON] },
  { id: 'bag', rawId: 218, name: 'Bag', validSlots: [] },
  { id: 'twoHandedSword', rawId: 223, name: 'Sword (Two Handed)', validSlots: [ITEM_SLOT_DATA.FIRST_WEAPON] },
  { id: 'resource', rawId: 226, name: 'Resource', validSlots: [] },
  { id: 'twoHandedStaff', rawId: 253, name: 'Staff (Two Handed)', validSlots: [ITEM_SLOT_DATA.FIRST_WEAPON] },
  { id: 'cards', rawId: 254, name: 'Cards (One Hand)', validSlots: [ITEM_SLOT_DATA.FIRST_WEAPON] },
  // eslint-disable-next-line quotes
  { id: 'minersHarvests', rawId: 281, name: "Miner's Harvests", validSlots: [] },
  // eslint-disable-next-line quotes
  { id: 'treapperHarvests', rawId: 282, name: "Trapper's Harvests", validSlots: [] },
  { id: 'havenGems', rawId: 294, name: 'Haven Gem', validSlots: [] },
  { id: 'havenBag', rawId: 295, name: 'Haven Bag', validSlots: [] },
  { id: 'displayWindow', rawId: 296, name: 'Display Window', validSlots: [] },
  // skipped 297, 306, 308, 309, 313, 317, 327
  { id: 'miscellaneous', rawId: 385, name: 'Miscellaneous', validSlots: [] },
  // skipped 393, 415, 416, 419, 447, 449, 463, 514, 515
  { id: 'oneHandedWeapons', rawId: 518, name: 'One Handed Weapon', validSlots: [ITEM_SLOT_DATA.FIRST_WEAPON] },
  { id: 'twoHandedWeapons', rawId: 519, name: 'Two Handed Weapon', validSlots: [ITEM_SLOT_DATA.FIRST_WEAPON] },
  { id: 'secondHand', rawId: 520, name: 'Second Hand', validSlots: [] },
  { id: 'accessory', rawId: 521, name: 'Accessory', validSlots: [ITEM_SLOT_DATA.ACCESSORY] },
  { id: 'cosmetic', rawId: 525, name: 'Cosmetic', validSlots: [] },
  // skipped 531, 534, 535
  { id: 'tool', rawId: 537, name: 'Tool', validSlots: [] },
  // skipped 546, 551, 566, 567, 568, 569, 570, 571, 574, 575, 576, 577, 578, 602
  { id: 'sets', rawId: 604, name: 'Set', validSlots: [] },
  // skipped 614, 630
  { id: 'emblem', rawId: 646, name: 'Emblem', validSlots: [ITEM_SLOT_DATA.ACCESSORY] },
  // skipped 652, 687, 701, 702
  { id: 'transmutation', rawId: 709, name: 'Transmutation', validSlots: [] },
  // skipped 719
  { id: 'transformation', rawId: 738, name: 'Transformations', validSlots: [] },
  // skipped 739, 745
  { id: 'consumable', rawId: 746, name: 'Consumable', validSlots: [] },
  { id: 'consumable2', rawId: 747, name: 'Consumable', validSlots: [] },
  // skipped 751, 756, 757, 758, 761, 809
  { id: 'enchantement', rawId: 811, name: 'Enchantement', validSlots: [] },
  { id: 'sublimationScroll', rawId: 812, name: 'Sublimation Scroll', validSlots: [] },
  // skipped 822
  // The ones below this point are from equipmentItemTypes.json
  { id: 'torches', rawId: 480, name: 'Torches', validSlots: [] },
  { id: 'pets', rawId: 582, name: 'Pets', validSlots: [ITEM_SLOT_DATA.PET] },
  { id: 'mounts', rawId: 611, name: 'Mounts', validSlots: [ITEM_SLOT_DATA.MOUNT] },
  { id: 'costumes', rawId: 647, name: 'Costumes', validSlots: [] },
];

export const ITEM_TYPE_FILTERS = [
  { id: 'helmet', rawId: 134, name: 'constants.helmet', category: 'armor', advanced: false, validSlots: [ITEM_SLOT_DATA.HEAD] },
  { id: 'amulet', rawId: 120, name: 'constants.amulet', category: 'armor', advanced: false, validSlots: [ITEM_SLOT_DATA.NECK] },
  { id: 'epaulettes', rawId: 138, name: 'constants.epaulettes', category: 'armor', advanced: false, validSlots: [ITEM_SLOT_DATA.SHOULDERS] },
  { id: 'breastplate', rawId: 136, name: 'constants.breastplate', category: 'armor', advanced: false, validSlots: [ITEM_SLOT_DATA.CHEST] },
  { id: 'cloak', rawId: 132, name: 'constants.cloak', category: 'armor', advanced: false, validSlots: [ITEM_SLOT_DATA.BACK] },
  { id: 'belt', rawId: 133, name: 'constants.belt', category: 'armor', advanced: false, validSlots: [ITEM_SLOT_DATA.BELT] },
  { id: 'boots', rawId: 119, name: 'constants.boots', category: 'armor', advanced: false, validSlots: [ITEM_SLOT_DATA.LEGS] },
  { id: 'ring', rawId: 103, name: 'constants.ring', category: 'armor', advanced: false, validSlots: [ITEM_SLOT_DATA.RIGHT_HAND, ITEM_SLOT_DATA.LEFT_HAND] },

  // eslint-disable-next-line prettier/prettier
  { id: 'oneHandedWeapons', rawIds: [108, 110, 113, 115, 254], name: 'constants.oneHandedWeapons', category: 'weapons', advanced: false, validSlots: [ITEM_SLOT_DATA.FIRST_WEAPON] },
  // eslint-disable-next-line prettier/prettier
  { id: 'twoHandedWeapons', rawIds: [223, 101, 253, 114, 117, 111], name: 'constants.twoHandedWeapons', category: 'weapons', advanced: false, validSlots: [ITEM_SLOT_DATA.FIRST_WEAPON] },

  { id: 'wand', rawId: 108, name: 'constants.wandOneHand', category: 'weapons', advanced: true, validSlots: [ITEM_SLOT_DATA.FIRST_WEAPON] },
  { id: 'sword', rawId: 110, name: 'constants.swordOneHand', category: 'weapons', advanced: true, validSlots: [ITEM_SLOT_DATA.FIRST_WEAPON] },
  { id: 'staff', rawId: 113, name: 'constants.staffOneHand', category: 'weapons', advanced: true, validSlots: [ITEM_SLOT_DATA.FIRST_WEAPON] },
  { id: 'clockHand', rawId: 115, name: 'constants.clockHandOneHand', category: 'weapons', advanced: true, validSlots: [ITEM_SLOT_DATA.FIRST_WEAPON] },
  { id: 'cards', rawId: 254, name: 'constants.cardsOneHand', category: 'weapons', advanced: true, validSlots: [ITEM_SLOT_DATA.FIRST_WEAPON] },

  { id: 'twoHandedSword', rawId: 223, name: 'constants.swordTwoHanded', category: 'weapons', advanced: true, validSlots: [ITEM_SLOT_DATA.FIRST_WEAPON] },
  { id: 'twoHandedAxe', rawId: 101, name: 'constants.axeTwoHanded', category: 'weapons', advanced: true, validSlots: [ITEM_SLOT_DATA.FIRST_WEAPON] },
  { id: 'twoHandedStaff', rawId: 253, name: 'constants.staffTwoHanded', category: 'weapons', advanced: true, validSlots: [ITEM_SLOT_DATA.FIRST_WEAPON] },
  { id: 'hammer', rawId: 114, name: 'constants.hammerTwoHanded', category: 'weapons', advanced: true, validSlots: [ITEM_SLOT_DATA.FIRST_WEAPON] },
  { id: 'bow', rawId: 117, name: 'constants.bowTwoHanded', category: 'weapons', advanced: true, validSlots: [ITEM_SLOT_DATA.FIRST_WEAPON] },
  { id: 'shovel', rawId: 111, name: 'constants.shovelTwoHanded', category: 'weapons', advanced: true, validSlots: [ITEM_SLOT_DATA.FIRST_WEAPON] },

  { id: 'dagger', rawId: 112, name: 'constants.daggerSecondaryWeapon', category: 'weapons', advanced: false, validSlots: [ITEM_SLOT_DATA.SECOND_WEAPON] },
  { id: 'shield', rawId: 189, name: 'constants.shieldSecondaryWeapon', category: 'weapons', advanced: false, validSlots: [ITEM_SLOT_DATA.SECOND_WEAPON] },

  { id: 'emblem', rawId: 646, name: 'constants.emblem', category: 'miscellaneous', advanced: false, validSlots: [ITEM_SLOT_DATA.ACCESSORY] },
  { id: 'pets', rawId: 582, name: 'constants.pets', category: 'miscellaneous', advanced: false, validSlots: [ITEM_SLOT_DATA.PET] },
  { id: 'mounts', rawId: 611, name: 'constants.mounts', category: 'miscellaneous', advanced: false, validSlots: [ITEM_SLOT_DATA.MOUNT] },
  { id: 'tool', rawId: 537, name: 'constants.tool', category: 'miscellaneous', advanced: true, validSlots: [] },
  { id: 'torches', rawId: 480, name: 'constants.torches', category: 'miscellaneous', advanced: true, validSlots: [] },
  { id: 'costumes', rawId: 647, name: 'constants.costumes', category: 'miscellaneous', advanced: true, validSlots: [] },
  // { id: 'sublimationScroll', rawId: 812, name: 'constants.sublimationScroll', category: 'miscellaneous', advanced: true, validSlots: [] },
  // { id: 'enchantement', rawId: 811, name: 'constants.enchantment', category: 'miscellaneous', advanced: true, validSlots: [] },
];

export const EFFECT_TYPE_DATA = {
  // unsure if this first one is correct
  damageInflicted: { id: 'damageInflicted', rawIds: [1], text: 'constants.percentDamageInflicted' },
  healthPoints: { id: 'healthPoints', rawIds: [20, 21], text: 'constants.hp' },
  // healthPointReduction: { id: 'healthPointReduction', rawId: 21, text: 'HP', isNegative: true },
  healthSteal: { id: 'healthSteal', rawIds: [24], text: 'constants.healthSteal' },
  healingMastery: { id: 'healingMastery', rawIds: [26], text: 'constants.healingMastery' },
  actionPoints: { id: 'actionPoints', rawIds: [31, 56], text: 'constants.ap' },
  // armorReceived: { id: 'armorReceived', rawId: 39, text: '% Armor Received' },
  // armorReceivedReduction: { id: 'armorReceivedReduction', rawId: 40, text: '% Armor Received', isNegative: true },
  movementPoints: { id: 'movementPoints', rawIds: [41, 42, 57], text: 'constants.mp' },
  // movementPointsReductionOld: { id: 'movementPointsReductionOld', rawId: 42, text: 'MP (Old)', isNegative: true },
  // actionPointsReduction: { id: 'actionPointsReduction', rawId: 56, text: 'AP', isNegative: true },
  // movementPointsReduction: { id: 'movementPointsReduction', rawId: 57, text: 'MP', isNegative: true },
  rearResistance: { id: 'rearResistance', rawIds: [71, 1063], text: 'constants.rearResistance' },
  elementalResistance: { id: 'elementalResistance', rawIds: [80, 90], text: 'constants.elementalResistance' },
  fireResistance: { id: 'fireResistance', rawIds: [82, 97], text: 'constants.fireResistance' },
  waterResistance: { id: 'waterResistance', rawIds: [83, 98], text: 'constants.waterResistance' },
  earthResistance: { id: 'earthResistance', rawIds: [84, 96], text: 'constants.earthResistance' },
  airResistance: { id: 'airResistance', rawIds: [85], text: 'constants.airResistance' },
  // elementalResistanceReduction: { id: 'elementalResistanceReduction', rawId: 90, text: 'Elemental Resistance', isNegative: true },
  // earthResistanceReduction: { id: 'earthResistanceReduction', rawId: 96, text: 'Earth Resistance (without cap)', isNegative: true },
  // fireResistanceReduction: { id: 'fireResistanceReduction', rawId: 97, text: 'Fire Resistance (without cap)', isNegative: true },
  // waterResistanceReduction: { id: 'waterResistanceReduction', rawId: 98, text: 'Water Resistance (without cap)', isNegative: true },
  elementalResistanceReductionNoCap: { id: 'elementalResistanceReduction', rawIds: [100], text: 'Elemental Resistance (without cap)', isNegative: true },
  elementalMastery: { id: 'elementalMastery', rawIds: [120, 130], text: 'constants.elementalMastery' },
  fireMastery: { id: 'fireMastery', rawIds: [122, 132], text: 'constants.fireMastery' },
  earthMastery: { id: 'earthMastery', rawIds: [123], text: 'constants.earthMastery' },
  waterMastery: { id: 'waterMastery', rawIds: [124], text: 'constants.waterMastery' },
  airMastery: { id: 'airMastery', rawIds: [125], text: 'constants.airMastery' },
  // elementalMasteryReduction: { id: 'elementalMasteryReduction', rawId: 130, text: 'Elemental Mastery', isNegative: true },
  // fireMasteryReduction: { id: 'fireMasteryReduction', rawId: 132, text: 'Fire Mastery', isNegative: true },
  criticalMastery: { id: 'criticalMastery', rawIds: [149, 1056], text: 'constants.criticalMastery' },
  criticalHit: { id: 'criticalHit', rawIds: [150, 168], text: 'constants.percentCriticalHit' },
  range: { id: 'range', rawIds: [160, 161], text: 'constants.range' },
  // rangeReduction: { id: 'range', rawId: 161, text: 'Range', isNegative: true },
  prospecting: { id: 'prospecting', rawIds: [162], text: 'constants.prospecting' },
  wisdom: { id: 'wisdom', rawIds: [166], text: 'constants.wisdom' },
  // criticalHitReduction: { id: 'criticalHitReduction', rawId: 168, text: '% Critical Hit', isNegative: true },
  initiative: { id: 'initiative', rawIds: [171, 172], text: 'constants.initiative' },
  // initiativeReduction: { id: 'initiativeReduction', rawId: 172, text: 'Initiative', isNegative: true },
  lock: { id: 'lock', rawIds: [173, 174], text: 'constants.lock' },
  // lockReduction: { id: 'lockReduction', rawId: 174, text: 'Lock', isNegative: true },
  dodge: { id: 'dodge', rawIds: [175, 176], text: 'constants.dodge' },
  // dodgeReduction: { id: 'dodgeReduction', rawId: 176, text: 'Dodge', isNegative: true },
  forceOfWill: { id: 'forceOfWill', rawIds: [177], text: 'constants.forceOfWill' },
  rearMastery: { id: 'rearMastery', rawIds: [180, 181], text: 'constants.rearMastery' },
  // rearMasteryReduction: { id: 'rearMasteryReduction', rawId: 181, text: 'Rear Mastery', isNegative: true },
  control: { id: 'control', rawIds: [184], text: 'constants.control' },
  wakfuPoints: { id: 'wakfuPoints', rawIds: [191, 192, 194], text: 'constants.wp' },
  // wakfuPointsReduction: { id: 'wakfuPointsReduction', rawId: 192, text: 'Wakfu Points', isNegative: true },
  // wakfuPointsReduction2: { id: 'wakfuPointsReduction2', rawId: 194, text: 'Wakfu Points', isNegative: true },
  appliesEffect: { id: 'appliesEffect', rawIds: [304], text: 'Applies Effect' }, // TODO this one is complicated. figure it out
  executesEffects: { id: 'executesEffects', rawIds: [330], text: 'Executes Effect Group' }, // TODO this one is complicated. figure it out
  emptyEffect: { id: 'emptyEffect', rawIds: [400], text: 'Empty Effect' },
  spellLevels: { id: 'spellLevels', rawIds: [832], text: 'Adds Spell Levels' }, // TODO this one is complicated. figure it out
  // skipped 843
  // skipped 865
  percentBlock: { id: 'percentBlock', rawIds: [875, 876], text: 'constants.percentBlock' },
  // percentBlockReduction: { id: 'percentBlockReduction', rawId: 876, text: 'Block', isNegative: true },
  levelsToElementalSpells: { id: 'levelsToElementalSpells', rawIds: [979], text: 'Levels to Elemental Spells' },
  criticalResistance: { id: 'criticalResistance', rawIds: [988, 1062], text: 'constants.criticalResistance' },
  // skipped 1020. only used by the Makabrakfire Ring
  meleeMastery: { id: 'meleeMastery', rawIds: [1052, 1059], text: 'constants.meleeMastery' },
  distanceMastery: { id: 'distanceMastery', rawIds: [1053, 1060], text: 'constants.distanceMastery' },
  berserkMastery: { id: 'berserkMastery', rawIds: [1055, 1061], text: 'constants.berserkMastery' },
  // criticalMasteryReduction: { id: 'criticalMasteryReduction', rawId: 1056, text: 'Critical Mastery', isNegative: true },
  // meleeMasteryReduction: { id: 'meleeMasteryReduction', rawId: 1059, text: 'Melee Mastery', isNegative: true },
  // distanceMasteryReduction: { id: 'distanceMasteryReduction', rawId: 1060, text: 'Distance Mastery', isNegative: true },
  // berserkMasteryReduction: { id: 'berserkMasteryReduction', rawId: 1061, text: 'Berserk Mastery', isNegative: true },
  // criticalResistanceReduction: { id: 'criticalResistanceReduction', rawId: 1062, text: 'Critical Resistance', isNegative: true },
  // rearResistanceReduction: { id: 'rearResistanceReduction', rawId: 1063, text: 'Rear Resistance', isNegative: true },
  randomElementalMasteries: { id: 'randomElementalMasteries', rawIds: [1068], text: 'constants.randElemMastery' },
  randomElementalResistances: { id: 'randomElementalResistances', rawIds: [1069], text: 'constants.randElemResistances' },
  // skipped 1083
  // skipped 1084
  harvestingQuantity: { id: 'harvestingQuantity', rawIds: [2001], text: 'constants.harvestingQuantity' }, // TODO figure this one out

  // ones below this point were picked out manually
  armorGiven: { id: 'armorGiven', rawIds: [10000], text: 'constants.percentArmorGiven' },
  armorReceived: { id: 'armorReceived', rawIds: [10001], text: 'constants.percentArmorReceived' },
  healsPerformed: { id: 'healsPerformed', rawIds: [10002], text: 'constants.percentHealsPerformed' },
  indirectDamageInflicted: { id: 'indirectDamageInflicted', rawIds: [10003], text: 'constants.percentIndirectDamageInflicted' },
  dodgeOverride: { id: 'dodgeOverride', rawIds: [10004], text: 'constants.dodgeOverride' },
  healsReceived: { id: 'healsReceived', rawIds: [10005], text: 'constants.percentHealsReceived' },
  healthPointsFromLevel: { id: 'healthPointsFromLevel', rawIds: [10006], text: 'constants.healthFromLevel' },
  lockOverride: { id: 'lockOverride', rawIds: [10007], text: 'constants.lockOverride' },
  percentHealthPoints: { id: 'percentHealthPoints', rawIds: [10008], text: 'constants.percentHealthPoints' },
  lockDoubled: { id: 'lockDoubled', rawIds: [10009], text: 'constants.lockDoubled' },
  dodgeFromLevel: { id: 'dodgeFromLevel', rawIds: [10010], text: 'constants.dodgeFromLevel' },
  lockFromLevel: { id: 'lockFromLevel', rawIds: [10011], text: 'constants.lockFromLevel' },
  percentDodge: { id: 'percentDodge', rawIds: [10012], text: 'constants.percentDodge' },
};

export const SHARED_PASSIVE_SPELLS = [
  {
    class: 'all',
    name: 'Evasion',
    description: 'This passive is ideal for getting away from it all!',
    iconId: 4957,
    normalEffects: {
      // eslint-disable-next-line prettier/prettier
      '1': {
        level: '1',
        equipEffects: [
          {
            id: 'Dodge',
            rawId: 175,
            text: 'Dodge',
            value: 60,
          },
        ],
      },
      // eslint-disable-next-line prettier/prettier
      '2': {
        level: '2',
        equipEffects: [
          {
            id: 'dodge',
            rawId: 175,
            text: 'Dodge',
            value: 180,
          },
        ],
      },
    },
    id: 20000,
    category: 'passive',
  },
  {
    class: 'all',
    name: 'Interception',
    // eslint-disable-next-line prettier/prettier
    description: 'Hey, where do you think you\'re going? You\'re staying right there!',
    iconId: 4958,
    normalEffects: {
      // eslint-disable-next-line prettier/prettier
      '1': {
        level: '1',
        equipEffects: [
          {
            id: 'lock',
            rawId: 173,
            text: 'Lock',
            value: 60,
          },
        ],
      },
      // eslint-disable-next-line prettier/prettier
      '2': {
        level: '2',
        equipEffects: [
          {
            id: 'lock',
            rawId: 173,
            text: 'Lock',
            value: 180,
          },
        ],
      },
    },
    id: 20001,
    category: 'passive',
  },
  {
    class: 'all',
    name: 'Inhalation',
    description: 'A deep breath, a cold drink, and... to battle!',
    iconId: 4956,
    normalEffects: {
      // eslint-disable-next-line prettier/prettier
      '1': {
        level: '1',
        equipEffects: [
          {
            id: 'initiative',
            rawId: 171,
            text: 'Initiative',
            value: 60,
          },
        ],
      },
      // eslint-disable-next-line prettier/prettier
      '2': {
        level: '2',
        equipEffects: [
          {
            id: 'initiative',
            rawId: 171,
            text: 'Initiative',
            value: 120,
          },
        ],
      },
    },
    id: 20002,
    category: 'passive',
  },
  {
    class: 'all',
    name: 'Motivation',
    // eslint-disable-next-line prettier/prettier
    description: 'It\s easy to be one step ahead of your enemies if you are Motivated.',
    iconId: 5237,
    normalEffects: {
      // eslint-disable-next-line prettier/prettier
      '1': {
        level: '1',
        equipEffects: [
          {
            id: 'actionPoints',
            rawId: 31,
            text: 'AP',
            value: 1,
          },
          {
            id: 'damageInflicted',
            rawId: 1,
            text: '% Damage Inflicted',
            value: 20,
            isNegative: true,
          },
        ],
      },
      // eslint-disable-next-line prettier/prettier
      '2': {
        level: '2',
        equipEffects: [
          {
            id: 'actionPoints',
            rawId: 1,
            text: 'AP',
            value: 1,
          },
          {
            id: 'damageInflicted',
            rawId: 1,
            text: '% Damage Inflicted',
            value: 20,
            isNegative: true,
          },
          {
            id: 'forceOfWill',
            rawId: 177,
            text: 'Force of Will',
            value: 10,
          },
        ],
      },
    },
    id: 20003,
    category: 'passive',
  },
  {
    class: 'all',
    name: 'Medicine',
    description: 'Need a healer in your team? Here I am!',
    iconId: 5146,
    normalEffects: {
      // eslint-disable-next-line prettier/prettier
      '1': {
        level: '1',
        equipEffects: [
          {
            id: 'healsPerformed',
            rawId: 10002,
            text: '% Heals Performed',
            value: 25,
          },
          {
            id: 'armorGiven',
            rawId: 10000,
            text: '% Armor Given',
            value: 20,
          },
          {
            id: 'damageInflicted',
            rawId: 1,
            text: '% Damage Inflicted',
            value: 15,
            isNegative: true,
          },
        ],
      },
      // eslint-disable-next-line prettier/prettier
      '2': {
        level: '2',
        equipEffects: [
          {
            id: 'healsPerformed',
            rawId: 10002,
            text: '% Heals Performed',
            value: 30,
          },
          {
            id: 'armorGiven',
            rawId: 10000,
            text: '% Armor Given',
            value: 25,
          },
          {
            id: 'damageInflicted',
            rawId: 1,
            text: '% Damage Inflicted',
            value: 15,
            isNegative: true,
          },
        ],
      },
    },
    id: 20004,
    category: 'passive',
  },
  {
    class: 'all',
    name: 'Rock',
    description: 'Solid as a rock, let me take that damage for you!',
    iconId: 5145,
    normalEffects: {
      // eslint-disable-next-line prettier/prettier
      '1': {
        level: '1',
        equipEffects: [
          {
            id: 'percentHealthPoints',
            rawId: 10008,
            text: '% Health Points',
            value: 30,
          },
          {
            id: 'healsReceived',
            rawId: 10005,
            text: '% Heals Received',
            value: 20,
          },
          {
            id: 'damageInflicted',
            rawId: 1,
            text: '% Damage Inflicted',
            value: 25,
            isNegative: true,
          },
          {
            id: 'healsPerformed',
            rawId: 10002,
            text: '% Heals Performed',
            value: 50,
            isNegative: true,
          },
        ],
      },
      // eslint-disable-next-line prettier/prettier
      '2': {
        level: '2',
        equipEffects: [
          {
            id: 'percentHealthPoints',
            rawId: 10008,
            text: '% Health Points',
            value: 60,
          },
          {
            id: 'healsReceived',
            rawId: 10005,
            text: '% Heals Received',
            value: 25,
          },
          {
            id: 'damageInflicted',
            rawId: 1,
            text: '% Damage Inflicted',
            value: 25,
            isNegative: true,
          },
          {
            id: 'healsPerformed',
            rawId: 10002,
            text: '% Heals Performed',
            value: 50,
            isNegative: true,
          },
        ],
      },
    },
    id: 20005,
    category: 'passive',
  },
  {
    class: 'all',
    name: 'Carnage',
    description: 'Want to know the secret ingredient in carnage rolls, extra damage!',
    iconId: 5144,
    normalEffects: {
      // eslint-disable-next-line prettier/prettier
      '1': {
        level: '1',
        equipEffects: [
          {
            id: 'damageInflicted',
            rawId: 1,
            text: '% Damage Inflicted',
            value: 10,
          },
          {
            id: 'healsPerformed',
            rawId: 10002,
            text: '% Heals Performed',
            value: 30,
            isNegative: true,
          },
        ],
      },
      // eslint-disable-next-line prettier/prettier
      '2': {
        level: '2',
        equipEffects: [
          {
            id: 'damageInflicted',
            rawId: 1,
            text: '% Damage Inflicted',
            value: 15,
          },
          {
            id: 'healsPerformed',
            rawId: 10002,
            text: '% Heals Performed',
            value: 30,
            isNegative: true,
          },
        ],
      },
    },
    id: 20006,
    category: 'passive',
  },
  {
    class: 'all',
    name: 'Fluctuation',
    description:
      'Fluctuation increases the damages of the next spell cast on this target by whoever placed this state. Fluctuation is consumed in the process.',
    iconId: 5621,
    normalEffects: {},
    id: 20007,
    category: 'passive',
  },
];

export const PASSIVE_SPELL_LEVEL_MAP = {
  20000: 105, // Evasion
  20001: 115, // Interception
  20002: 125, // Inhalation
  20003: 135, // Motivation
  20004: 155, // Medicine
  20005: 165, // Rock
  20006: 175, // Carnage
  20007: 185, // Fluctuation
  4608: 110, // Sram Murderer
  5123: 120, // Sram Bloody Blade
  4606: 130, // Sram Brutal Assault
  4607: 140, // Sram Shadow Master
  4609: 150, // Sram Trap Master
  5089: 160, // Sram Crazy Scheme
  5122: 170, // Sram Ambush
  5124: 180, // Sram Fraud
  5126: 190, // Sram Dupery
  4610: 200, // Sram Sram to the Bone
  4795: 110, // Iop Virility
  4797: 120, // Iop Authority
  4798: 130, // Iop Show Off
  4799: 140, // Iop Locking Pro
  5102: 150, // Iop King of the Hill
  4796: 160, // Iop Compulsion
  5101: 170, // Iop Furious Charge
  5104: 180, // Iop Seismic Rift
  5100: 190, // Iop Bravery
  5103: 200, // Iop Tormentor
  917: 110, // Sadida Knowledge of Dolls
  4959: 120, // Sadida Sadida Prayer
  916: 130, // Sadida Doll Link
  913: 140, // Sadida Green Guard
  933: 150, // Sadida Explodoll
  5055: 160, // Sadida Harmless Toxin
  912: 170, // Sadida Lone Sadida
  5058: 180, // Sadida Wild Whispers
  5234: 190, // Sadida Venomous
  7053: 200, // Sadida Common Ground
  4722: 110, // Pandawa Cocktail
  4723: 120, // Pandawa Master of Merriment
  4724: 130, // Pandawa Bottomless Barrel
  4725: 140, // Pandawa Aggressive Barrel
  4726: 150, // Pandawa Milky Instinct
  5148: 160, // Pandawa Bambottle
  5149: 170, // Pandawa Poisoned Chalice
  5150: 180, // Pandawa Refreshment
  5151: 190, // Pandawa Pandemic
  6846: 200, // Pandawa Buzzed
};
