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

export const ITEM_SLOT_DATA = {
  HEAD: { id: 'HEAD', name: 'Helmet' },
  CHEST: { id: 'CHEST', name: 'Breastplace' },
  SHOULDERS: { id: 'SHOULDERS', name: 'Epaulettes' },
  LEGS: { id: 'LEGS', name: 'Boots' },
  NECK: { id: 'NECK', name: 'Amulet' },
  BACK: { id: 'BACK', name: 'Cloak' },
  BELT: { id: 'BELT', name: 'Belt' },
  FIRST_WEAPON: { id: 'FIRST_WEAPON', name: 'Primary Weapon' },
  SECOND_WEAPON: { id: 'SECOND_WEAPON', name: 'Secondary Weapon' },
  LEFT_HAND: { id: 'LEFT_HAND', name: 'Left Ring' },
  RIGHT_HAND: { id: 'RIGHT_HAND', name: 'Right Ring' },
  ACCESSORY: { id: 'ACCESSORY', name: 'Emblem' },
};

export const ITEM_RARITY_DATA = [
  { id: 0, name: 'Common' },
  { id: 1, name: 'Unusual' },
  { id: 2, name: 'Rare' },
  { id: 3, name: 'Mythical' },
  { id: 4, name: 'Legendary' },
  { id: 5, name: 'Relic' },
  { id: 6, name: 'Souvenir' },
  { id: 7, name: 'Epic' },
];

export const ITEM_TYPE_DATA = [
  { id: 'weaponsAndShields', rawId: 100, name: 'Weapons & Shields' },
  { id: 'twoHandedAxe', rawId: 101, name: 'Axe (Two Handed)' },
  { id: 'ring', rawId: 103, name: 'Ring' },
  { id: 'consumables', rawId: 106, name: 'Consumables' },
  { id: 'wand', rawId: 108, name: 'Wand (One Hand)' },
  { id: 'sword', rawId: 110, name: 'Sword (One Hand)' },
  { id: 'shovel', rawId: 111, name: 'Shovel (Two Handed)' },
  { id: 'dagger', rawId: 112, name: 'Dagger (Secondary Weapon)' },
  { id: 'staff', rawId: 113, name: 'Staff (One Hand)' },
  { id: 'hammer', rawId: 114, name: 'Hammer (Two Handed)' },
  { id: 'clockHand', rawId: 115, name: 'Clock Hand (One Hand)' },
  { id: 'bow', rawId: 117, name: 'Bow (Two Handed)' },
  { id: 'armor', rawId: 118, name: 'Armor' },
  { id: 'boots', rawId: 119, name: 'Boots' },
  { id: 'amulet', rawId: 120, name: 'Amulet' },
  { id: 'cloak', rawId: 132, name: 'Cloak' },
  { id: 'belt', rawId: 133, name: 'Belt' },
  { id: 'helmet', rawId: 134, name: 'Helmet' },
  { id: 'breastplate', rawId: 136, name: 'Breastplate' },
  { id: 'epaulettes', rawId: 138, name: 'Epaulettes' },
  { id: 'shield', rawId: 189, name: 'Shield (Secondary Weapon)' },
  { id: 'bag', rawId: 218, name: 'Bag' },
  { id: 'twoHandedSword', rawId: 223, name: 'Sword (Two Handed)' },
  { id: 'resource', rawId: 226, name: 'Resource' },
  { id: 'twoHandedStaff', rawId: 253, name: 'Staff (Two Handed)' },
  { id: 'cards', rawId: 254, name: 'Cards (One Hand)' },
  // eslint-disable-next-line quotes
  { id: 'minersHarvests', rawId: 281, name: "Miner's Harvests" },
  // eslint-disable-next-line quotes
  { id: 'treapperHarvests', rawId: 282, name: "Trapper's Harvests" },
  { id: 'havenGems', rawId: 294, name: 'Haven Gem' },
  { id: 'havenBag', rawId: 295, name: 'Haven Bag' },
  { id: 'displayWindow', rawId: 296, name: 'Display Window' },
  // skipped 297, 306, 308, 309, 313, 317, 327
  { id: 'miscellaneous', rawId: 385, name: 'Miscellaneous' },
  // skipped 393, 415, 416, 419, 447, 449, 463, 514, 515
  { id: 'oneHandedWeapons', rawId: 518, name: 'One Handed Weapon' },
  { id: 'twoHandedWeapons', rawId: 519, name: 'Two Handed Weapon' },
  { id: 'secondHand', rawId: 520, name: 'Second Hand' },
  { id: 'accessory', rawId: 521, name: 'Accessory' },
  { id: 'cosmetic', rawId: 525, name: 'Cosmetic' },
  // skipped 531, 534, 535
  { id: 'tool', rawId: 537, name: 'Tool' },
  // skipped 546, 551, 566, 567, 568, 569, 570, 571, 574, 575, 576, 577, 578, 602
  { id: 'sets', rawId: 604, name: 'Set' },
  // skipped 614, 630
  { id: 'emblem', rawId: 646, name: 'Emblem' },
  // skipped 652, 687, 701, 702
  { id: 'transmutation', rawId: 709, name: 'Transmutation' },
  // skipped 719
  { id: 'transformation', rawId: 738, name: 'Transformations' },
  // skipped 739, 745
  { id: 'consumable', rawId: 746, name: 'Consumable' },
  { id: 'consumable2', rawId: 747, name: 'Consumable' },
  // skipped 751, 756, 757, 758, 761, 809
  { id: 'enchantement', rawId: 811, name: 'Enchantement' },
  { id: 'sublimationScroll', rawId: 812, name: 'Sublimation Scroll' },
  // skipped 822
];

export const EFFECT_TYPE_DATA = {
  // skipped 1
  healthPoints: {
    id: 'healthPoints',
    rawId: 20,
    text: 'HP',
  },
  healthPointReduction: {
    id: 'healthPointReduction',
    rawId: 21,
    text: 'HP',
    isNegative: true,
  },
  healthSteal: {
    id: 'healthSteal',
    rawId: 24,
    text: 'Health Steal',
  },
  healingMastery: {
    id: 'healingMastery',
    rawId: 26,
    text: 'Healing Mastery',
  },
  actionPoints: {
    id: 'actionPoints',
    rawId: 31,
    text: 'AP',
  },
  armorReceived: {
    id: 'armorReceived',
    rawId: 39,
    text: 'Armor Received',
  },
  armorReceivedReduction: {
    id: 'armorReceivedReduction',
    rawId: 40,
    text: 'Armor Received',
    isNegative: true,
  },
  movementPoints: {
    id: 'movementPoints',
    rawId: 41,
    text: 'MP',
  },
  movementPointsReductionOld: {
    id: 'movementPointsReductionOld',
    rawId: 42,
    text: 'MP (Old)',
    isNegative: true,
  },
  actionPointsReduction: {
    id: 'actionPointsReduction',
    rawId: 56,
    text: 'AP',
    isNegative: true,
  },
  movementPointsReduction: {
    id: 'movementPointsReduction',
    rawId: 57,
    text: 'MP',
    isNegative: true,
  },
  rearResistance: {
    id: 'rearResistance',
    rawId: 71,
    text: 'Rear Resistance',
  },
  elementalResistance: {
    id: 'elementalResistance',
    rawId: 80,
    text: 'Elemental Resistance',
  },
  fireResistance: {
    id: 'fireResistance',
    rawId: 82,
    text: 'Fire Resistance',
  },
  waterResistance: {
    id: 'waterResistance',
    rawId: 83,
    text: 'Water Resistance',
  },
  earthResistance: {
    id: 'earthResistance',
    rawId: 84,
    text: 'Earth Resistance',
  },
  airResistance: {
    id: 'airResistance',
    rawId: 85,
    text: 'Air Resistance',
  },
  elementalResistanceReduction: {
    id: 'elementalResistanceReduction',
    rawId: 90,
    text: 'Elemental Resistance',
    isNegative: true,
  },
  earthResistanceReduction: {
    id: 'earthResistanceReduction',
    rawId: 96,
    text: 'Earth Resistance (without cap)',
    isNegative: true,
  },
  fireResistanceReduction: {
    id: 'fireResistanceReduction',
    rawId: 97,
    text: 'Fire Resistance (without cap)',
    isNegative: true,
  },
  waterResistanceReduction: {
    id: 'waterResistanceReduction',
    rawId: 98,
    text: 'Water Resistance (without cap)',
    isNegative: true,
  },
  elementalResistanceReductionNoCap: {
    id: 'elementalResistanceReduction',
    rawId: 100,
    text: 'Elemental Resistance (without cap)',
    isNegative: true,
  },
  elementalMastery: {
    id: 'elementalMastery',
    rawId: 120,
    text: 'Elemental Mastery',
  },
  fireMastery: {
    id: 'fireMastery',
    rawId: 122,
    text: 'Fire Mastery',
  },
  earthMastery: {
    id: 'earthMastery',
    rawId: 123,
    text: 'Earth Mastery',
  },
  waterMastery: {
    id: 'waterMastery',
    rawId: 124,
    text: 'Water Mastery',
  },
  airMastery: {
    id: 'airMastery',
    rawId: 125,
    text: 'Air Mastery',
  },
  elementalMasteryReduction: {
    id: 'elementalMasteryReduction',
    rawId: 130,
    text: 'Elemental Mastery',
    isNegative: true,
  },
  fireMasteryReduction: {
    id: 'fireMasteryReduction',
    rawId: 132,
    text: 'Fire Mastery',
    isNegative: true,
  },
  criticalMastery: {
    id: 'criticalMastery',
    rawId: 149,
    text: 'Critical Mastery',
  },
  criticalHit: {
    id: 'criticalHit',
    rawId: 150,
    text: '% Critical Hit',
  },
  range: {
    id: 'range',
    rawId: 160,
    text: 'Range',
  },
  rangeReduction: {
    id: 'range',
    rawId: 161,
    text: 'Range',
    isNegative: true,
  },
  prospecting: {
    id: 'prospecting',
    rawId: 162,
    text: 'Prospecting',
  },
  wisdom: {
    id: 'wisdom',
    rawId: 166,
    text: 'Wisdom',
  },
  criticalHitReduction: {
    id: 'criticalHitReduction',
    rawId: 168,
    text: '% Critical Hit',
    isNegative: true,
  },
  initiative: {
    id: 'initiative',
    rawId: 171,
    text: 'Initiative',
  },
  initiativeReduction: {
    id: 'initiativeReduction',
    rawId: 172,
    text: 'Initiative',
    isNegative: true,
  },
  lock: {
    id: 'lock',
    rawId: 173,
    text: 'Lock',
  },
  lockReduction: {
    id: 'lockReduction',
    rawId: 174,
    text: 'Lock',
    isNegative: true,
  },
  dodge: {
    id: 'dodge',
    rawId: 175,
    text: 'Dodge',
  },
  dodgeReduction: {
    id: 'dodgeReduction',
    rawId: 176,
    text: 'Dodge',
    isNegative: true,
  },
  forceOfWill: {
    id: 'forceOfWill',
    rawId: 177,
    text: 'Force of Will',
  },
  rearMastery: {
    id: 'rearMastery',
    rawId: 180,
    text: 'Rear Mastery',
  },
  rearMasteryReduction: {
    id: 'rearMasteryReduction',
    rawId: 181,
    text: 'Rear Mastery',
    isNegative: true,
  },
  control: {
    id: 'control',
    rawId: 184,
    text: 'Control',
  },
  wakfuPoints: {
    id: 'wakfuPoints',
    rawId: 191,
    text: 'Wakfu Points',
  },
  wakfuPointsReduction: {
    id: 'wakfuPointsReduction',
    rawId: 192,
    text: 'Wakfu Points',
    isNegative: true,
  },
  wakfuPointsReduction2: {
    id: 'wakfuPointsReduction2',
    rawId: 194,
    text: 'Wakfu Points',
    isNegative: true,
  },
  appliesEffect: {
    // TODO this one is complicated. figure it out
    id: 'appliesEffect',
    rawId: 304,
    text: 'Applies Effect',
  },
  executesEffects: {
    // TODO this one is complicated. figure it out
    id: 'executesEffects',
    rawId: 330,
    text: 'Executes Effect Group',
  },
  emptyEffect: {
    id: 'emptyEffect',
    rawId: 400,
    text: 'Empty Effect',
  },
  spellLevels: {
    // TODO this one is complicated. figure it out
    id: 'spellLevels',
    rawId: 832,
    text: 'Adds Spell Levels',
  },
  // skipped 843
  // skipped 865
  percentBlock: {
    id: 'percentBlock',
    rawId: 875,
    text: 'Block',
  },
  percentBlockReduction: {
    id: 'percentBlockReduction',
    rawId: 876,
    text: 'Block',
    isNegative: true,
  },
  levelsToElementalSpells: {
    id: 'levelsToElementalSpells',
    rawId: 979,
    text: 'Levels to Elemental Spells',
  },
  criticalResistance: {
    id: 'criticalResistance',
    rawId: 988,
    text: 'Critical Resistance',
  },
  // skipped 1020. only used by the Makabrakfire Ring
  meleeMastery: {
    id: 'meleeMastery',
    rawId: 1052,
    text: 'Melee Mastery',
  },
  distanceMastery: {
    id: 'distanceMastery',
    rawId: 1053,
    text: 'Distance Mastery',
  },
  berserkMastery: {
    id: 'berserkMastery',
    rawId: 1055,
    text: 'Berserk Mastery',
  },
  criticalMasteryReduction: {
    id: 'criticalMasteryReduction',
    rawId: 1056,
    text: 'Critical Mastery',
    isNegative: true,
  },
  meleeMasteryReduction: {
    id: 'meleeMasteryReduction',
    rawId: 1059,
    text: 'Melee Mastery',
    isNegative: true,
  },
  distanceMasteryReduction: {
    id: 'distanceMasteryReduction',
    rawId: 1060,
    text: 'Distance Mastery',
    isNegative: true,
  },
  berserkMasteryReduction: {
    id: 'berserkMasteryReduction',
    rawId: 1061,
    text: 'Berserk Mastery',
    isNegative: true,
  },
  criticalResistanceReduction: {
    id: 'criticalResistanceReduction',
    rawId: 1062,
    text: 'Critical Resistance',
    isNegative: true,
  },
  rearResistanceReduction: {
    id: 'rearResistanceReduction',
    rawId: 1063,
    text: 'Rear Resistance',
    isNegative: true,
  },
  randomElementalMasteries: {
    // TODO figure this one out
    id: 'randomElementalMasteries',
    rawId: 1068,
    text: 'Gain ?? Random Elemental Masteries',
  },
  randomElementalResistances: {
    // TODO figure this one out
    id: 'randomElementalResistances',
    rawId: 1069,
    text: 'Gain ?? Random Elemental Resistances',
  },
  // skipped 1083
  // skipped 1084
  harvestingQuantity: {
    // TODO figure this one out
    id: 'harvestingQuantity',
    rawId: 2001,
    text: 'Harvesting Quantity',
  },
};
