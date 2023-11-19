import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { v4 as uuidv4 } from 'uuid';
import { EventBus, Events } from '@/eventBus';
import deepUnref from '@/plugins/deepUnref.js';

import { useBuildCodes } from '@/models/useBuildCodes';
import { ITEM_SLOT_DATA } from '@/models/useConstants';

export function useCharacterBuilds(masterData) {
  const currentCharacterId = ref(null);
  const currentCharacter = ref(null);
  let route = null;

  const { decodeBuildCode, parseBuildData } = useBuildCodes();

  // TODO load in builds from local storage

  const setup = () => {
    route = useRoute();

    watch([currentCharacterId, masterData], () => {
      if (currentCharacterId.value) {
        currentCharacter.value = masterData?.characters?.find((character) => {
          return character.id === currentCharacterId.value;
        });
        EventBus.emit(Events.UPDATE_STATS);
      }
    });

    return {
      currentCharacter,
    };
  };

  const setContext = () => {
    if (route.params?.characterId) {
      currentCharacterId.value = route.params.characterId;
    }
  };

  const createNewCharacter = () => {
    // first we grab our template character data object
    let newCharacterData = structuredClone(characterDataTemplate);
    newCharacterData.id = uuidv4(); // add a UUID

    // then add it to our list of builds
    masterData.characters.push(newCharacterData);

    return newCharacterData;
  };

  const createNewCharacterFromCode = (buildCode) => {
    let decodedData = decodeBuildCode(buildCode);
    let parsedData = parseBuildData(decodedData);

    let newCharacterData = structuredClone(characterDataTemplate);
    newCharacterData.id = uuidv4(); // add a UUID

    let newObject = mergeDeep(newCharacterData, parsedData);

    // then add it to our list of builds
    masterData.characters.push(newObject);

    return newObject;
  };

  const createNewCharacterFromAutoBuilder = (targetClass, targetLevel, itemSet) => {
    let newCharacterData = structuredClone(characterDataTemplate);
    newCharacterData.id = uuidv4(); // add a UUID
    newCharacterData.class = targetClass; // set the level
    newCharacterData.level = targetLevel; // set the class

    // equip all the items
    itemSet.forEach((item) => {
      let targetSlot = item.type.validSlots[0];

      if (targetSlot === ITEM_SLOT_DATA.LEFT_HAND.id && newCharacterData.equipment[ITEM_SLOT_DATA.LEFT_HAND.id] !== null) {
        targetSlot = ITEM_SLOT_DATA.RIGHT_HAND.id;
      }

      newCharacterData.equipment[targetSlot] = item;
    });

    // then add it to our list of builds
    masterData.characters.push(newCharacterData);

    return newCharacterData;
  };

  const deleteCharacter = (targetCharacterId) => {
    let targetIndex = masterData.characters
      .map((char) => {
        return char.id;
      })
      .indexOf(targetCharacterId);

    masterData.characters.splice(targetIndex, 1);
  };

  const overwriteCharacterData = (incomingData, targetCharacterId) => {
    let targetCharIndex = masterData.characters
      .map((char) => {
        return char.id;
      })
      .indexOf(targetCharacterId);
    let targetCharacter = masterData.characters[targetCharIndex];

    let characterCopy = structuredClone(deepUnref(targetCharacter));
    let newObject = mergeDeep(characterCopy, incomingData);

    masterData.characters[targetCharIndex] = newObject;
  };

  /**
   * Simple object check.
   * @param item
   * @returns {boolean}
   */
  const isObject = (item) => {
    return item && typeof item === 'object' && !Array.isArray(item);
  };

  /**
   * Deep merge two objects.
   * @param target
   * @param ...sources
   */
  const mergeDeep = (target, ...sources) => {
    if (!sources.length) {
      return target;
    }
    const source = sources.shift();

    if (isObject(target) && isObject(source)) {
      for (const key in source) {
        if (isObject(source[key])) {
          if (!target[key]) {
            Object.assign(target, { [key]: {} });
          }
          mergeDeep(target[key], source[key]);
        } else {
          Object.assign(target, { [key]: source[key] });
        }
      }
    }

    return mergeDeep(target, ...sources);
  };

  return {
    setup,
    setContext,
    createNewCharacter,
    createNewCharacterFromCode,
    createNewCharacterFromAutoBuilder,
    deleteCharacter,
    overwriteCharacterData,
  };
}

// 0.0 represents a percentage type. others are integers
export const characterDataTemplate = {
  id: null,
  name: 'New Character',
  class: null, // Should always use a class constant, string
  level: 1,

  healthPoints: 0,
  armorPoints: 0,
  actionPoints: 0,
  movementPoints: 0,
  wakfuPoints: 0,
  quadrumentalBreeze: 0,

  masteries: {
    // elemental masteries
    water: 0,
    air: 0,
    earth: 0,
    fire: 0,

    // secondary masteries
    critical: 0,
    rear: 0,
    melee: 0,
    distance: 0,
    healing: 0,
    berserk: 0,
  },

  resistances: {
    water: 0.0,
    air: 0.0,
    earth: 0.0,
    fire: 0.0,

    critical: 0.0,
    rear: 0.0,
    elemental: 0.0,
  },

  stats: {
    damageInflicted: 0.0,
    criticalHit: 0.0,
    initiative: 0,
    dodge: 0,
    wisdom: 0,
    control: 0,
    healsPerformed: 0.0,
    block: 0.0,
    range: 0,
    lock: 0,
    prospecting: 0,
    forceOfWill: 0,
    // these are listed as 'secondary' stats
    armorGiven: 0.0,
    armorReceived: 0.0,
    indirectDamage: 0.0,
    healsReceived: 0.0,
  },

  characteristics: {
    limits: {
      intelligence: 0,
      strength: 0,
      agility: 0,
      fortune: 0,
      major: 0,
    },
    intelligence: {
      percentHealthPoints: 0,
      elementalResistance: 0,
      barrier: 0,
      percentHealsReceived: 0,
      percentArmorHeathPoints: 0,
    },
    strength: {
      elementalMastery: 0,
      meleeMastery: 0,
      distanceMastery: 0,
      healthPoints: 0,
    },
    agility: {
      lock: 0,
      dodge: 0,
      initiative: 0,
      lockAndDodge: 0,
      forceOfWill: 0,
    },
    fortune: {
      percentCriticalHit: 0,
      percentBlock: 0,
      criticalMastery: 0,
      rearMastery: 0,
      berserkMastery: 0,
      healingMastery: 0,
      rearResistance: 0,
      criticalResistance: 0,
    },
    major: {
      actionPoints: 0,
      movementPointsAndDamage: 0,
      rangeAndDamage: 0,
      wakfuPoints: 0,
      controlAndDamage: 0,
      percentDamageInflicted: 0,
      elementalResistance: 0,
    },
  },

  spells: {
    activeSlot1: null,
    activeSlot2: null,
    activeSlot3: null,
    activeSlot4: null,
    activeSlot5: null,
    activeSlot6: null,
    activeSlot7: null,
    activeSlot8: null,
    activeSlot9: null,
    activeSlot10: null,
    activeSlot11: null,
    activeSlot12: null,

    passiveSlot1: null,
    passiveSlot2: null,
    passiveSlot3: null,
    passiveSlot4: null,
    passiveSlot5: null,
    passiveSlot6: null,
  },

  equipment: {
    [ITEM_SLOT_DATA.HEAD.id]: null,
    [ITEM_SLOT_DATA.NECK.id]: null,
    [ITEM_SLOT_DATA.BELT.id]: null,
    [ITEM_SLOT_DATA.LEGS.id]: null,
    [ITEM_SLOT_DATA.CHEST.id]: null,
    [ITEM_SLOT_DATA.BACK.id]: null,
    [ITEM_SLOT_DATA.SHOULDERS.id]: null,
    [ITEM_SLOT_DATA.LEFT_HAND.id]: null,
    [ITEM_SLOT_DATA.RIGHT_HAND.id]: null,
    [ITEM_SLOT_DATA.SECOND_WEAPON.id]: null,
    [ITEM_SLOT_DATA.FIRST_WEAPON.id]: null,
    [ITEM_SLOT_DATA.ACCESSORY.id]: null,
    [ITEM_SLOT_DATA.PET.id]: null,
    [ITEM_SLOT_DATA.MOUNT.id]: null,
  },
};

// ========== Character Data Outline ==========
// Health Points = integer
// Action Points = integer
// Movement Points = integer
// Wakfu Points = integer

// Water Mastery = integer (Each Mastery point increases damage by 1%) (reduces damage somehow? need alg)
// Air Mastery = integer (Each Mastery point increases damage by 1%) (reduces damage somehow? need alg)
// Earth Mastery = integer (Each Mastery point increases damage by 1%) (reduces damage somehow? need alg)
// Fire Mastery = integer (Each Mastery point increases damage by 1%) (reduces damage somehow? need alg)

// Damage Inflicted = percentage (Increases the percentage of Damage that you inflict)
// Critical Hit = percentage (Each Critical Hit point increases your chances of landing a Critical Hit by 1%. Critical Hits increase damage by 25%.)
// Initiative = integer
// Dodge = integer (Dodge increases your ability to distance yourself from an adjacent enemy. This characteristic is counterbalanced by your adversary's Lock.)
// Wisdom = integer (Each Wisdom point increases the amount of experience gained at the end of a fight by 1%. (Max 200% bonus))
// Control = integer (Control defines the number of summoned creatures and mechanisms you can have in play at one time.)
// Heals Performed = percentage (Increases the percentage of Heals that you perform.)
// Block = percentage (Each Block point makes you 1% more likely to reduce Damage received by 20%.)
// Range = integer (The Range Bonus increases the range of your distance spells by one cell.)
// Lock = integer (Lock increases your ability to keep an adversary in close combat. This characteristic is counterbalanaced by your adversary's Dodge.)
// Prospecting = integer (Each Prospecting point increases your chances of finding items after combat by 1%. (Max 200% bonus))
// Force of Will = integer (Increases your ability to remove AP and MP, as well as your resistance to AP and MP loss.)

// Critical Mastery = integer (Critical Mastery is added to Elemental Mastery to increase damage dealt from Critical Hits)
// Rear Mastery = integer (Rear Mastery is added to Elemental Mastery to increase damage when attacking a target from behind)
// Melee Mastery = integer (Melee Mastery is added to Elemental Mastery to increase damage dealt to targets 2 cells or less from the attacker)
// Distance Mastery = integer (Distance Master is added to Elemental Mastery to increase damage dealt to targets that are 3 cells or more from the attacker)
// Healing Mastery = integer (Healing Mastery is added to Elemental Mastery to increase the effectiveness of healing spells)
// Berserk Mastery = integer (Berserk Mastery is added to Elemental Mastery to increase damage inflicted when you have less than 50% of your max HP)
// Critical Resistance = percentage? (Critical Resistance reduces the damage you suffer from critical attacks)
// Rear Resistance = percentage (Rear Resistance reduces the Damage from attacks that are suffered from behind)
// Armor Given = percentage (Increases only the percentage of Armor you give you allies other than yourself. Armor is limited to 50% of max HP)
// Armor Received = percentage (Increases the percentage of Armor you receive. Armor is limited to 50% of max HP)
// Indirect Damage = Increases the percentage of damage you inflict using glyphs, poisons, traps, ect. Anything that isn't directly inflicted by a spell or weapon.)

// "Abilities"? Where you input points

// Intelligence
//  % Health Points = +4% per point?
//  Elemental Resistance = 10 Elem Res per point?
//  Barrier = Barrier of 50% of level, -XX damage received a number of times per turn equal to the num of points?
//  % Heals Received = +6% per point?
//  % Armor Health Points = +4 per point?

// Strength
//  Elemental Mastery = +5 Elem Mast per point?
//  Melee Mastery = +8 Melee Mast per point?
//  Distance Mastery = +8 Dist Mast per point?
//  Health Points = +20 HP per point?

// Agility
//  Lock = +6 Lock per point?
//  Dodge = +6 Dodge per point?
//  Initiative = +4 Initiative per point?
//  Lock and Dodge = +4 Dodge and +4 Lock per point?
//  Force of Will = +1 FoW per point?

// Fortune
//  % Critical Hit = +1% per point?
//  % Block = +1% per point?
//  Critical Mastery = +1 Crit Mast per point?
//  Rear Mastery = +6 Rear Mast per point?
//  Berserk Mastery = +8 Bers Mast per point?
//  Healing Mastery = +6 Heal Mast per point?
//  Rear Resistance = +4 Rear Res per point?
//  Critical Resistance = +4 Crit Res per point?

// Major
//  Action Points = +1 AP per point?
//  Movement Points and Damage = +1 MP and +20 Elem Mast per point?
//  Range and Damage = +1 Range and +40 Elem Mastery per point?
//  Wakfu Points = +2 WP per point? (Or +150 QB? what is QB?)
//  Control and Damage = +2 Control and +40 Elem Mastery per point?
//  % Damage Inflicted = +10% Damage Inflicted per point?
//  Elemental Resistance = +50 Elem Res per point?
