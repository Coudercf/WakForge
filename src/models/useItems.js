import { ref, computed, reactive, watch } from 'vue';
import itemData from './item_data.json';
import { EFFECT_TYPE_DATA, ITEM_RARITY_DATA, ITEM_TYPE_FILTERS, ITEM_SLOT_DATA } from '@/models/useConstants';
import { useI18n } from 'vue-i18n';

let sortedItemData = ref([]);
let currentSortBy = { id: 'none' };
let currentSortOrder = 'ascending';

export const sortOrderOptions = [
  { id: 'ascending', label: 'characterSheet.equipmentContent.itemFilters.smallToBig' },
  { id: 'descending', label: 'characterSheet.equipmentContent.itemFilters.bigToSmall' },
];

export const sortByOptions = [
  { id: 'none', label: 'characterSheet.equipmentContent.itemFilters.none' },
  { id: 'level', label: 'constants.level' },
  { id: 'name', label: 'constants.name' },

  { id: 20, label: 'characterSheet.equipmentContent.itemFilters.healthPoints' },
  { id: 120, label: 'constants.elementalMastery' },
  { id: 124, label: 'constants.waterMastery' },
  { id: 123, label: 'constants.earthMastery' },
  { id: 125, label: 'constants.airMastery' },
  { id: 122, label: 'constants.fireMastery' },

  { id: 1068, label: 'characterSheet.equipmentContent.itemFilters.randElemMasteryValue' },

  { id: 1052, label: 'constants.meleeMastery' },
  { id: 1053, label: 'constants.distanceMastery' },
  { id: 149, label: 'constants.criticalMastery' },
  { id: 180, label: 'constants.rearMastery' },
  { id: 1055, label: 'constants.berserkMastery' },

  { id: 150, label: 'characterSheet.equipmentContent.itemFilters.criticalHitChance' },
  { id: 875, label: 'characterSheet.equipmentContent.itemFilters.blockChance' },
  { id: 173, label: 'constants.lock' },
  { id: 175, label: 'constants.dodge' },
  { id: 177, label: 'constants.forceOfWill' },
  { id: 171, label: 'constants.initiative' },

  { id: 80, label: 'constants.elementalResistance' },
  { id: 83, label: 'constants.waterResistance' },
  { id: 84, label: 'constants.earthResistance' },
  { id: 85, label: 'constants.airResistance' },
  { id: 82, label: 'constants.fireResistance' },
  { id: 1069, label: 'characterSheet.equipmentContent.itemFilters.randElemResistanceValue' },

  { id: 988, label: 'constants.criticalResistance' },
  { id: 71, label: 'constants.rearResistance' },
];

const itemFilters = reactive({
  sortBy: sortByOptions[0],
  sortOrder: sortOrderOptions[0], // ascending means 'smallest to largest', descending means 'largest to smallest'
  searchTerm: '',
  startLevel: 0,
  endLevel: 230,
  effectFilters: [],
  rarityFilters: ITEM_RARITY_DATA.map((rarityEntry) => {
    return {
      ...rarityEntry,
      checked: true,
    };
  }),
  itemTypeFilters: ITEM_TYPE_FILTERS.map((entry) => {
    return { ...entry, checked: true };
  }),
  resetFilters() {
    this.sortBy = sortByOptions[0];
    this.sortOrder = sortOrderOptions[0];
    this.searchTerm = '';
    this.startLevel = 0;
    this.endLevel = 230;
    this.effectFilters = [];
    this.rarityFilters = ITEM_RARITY_DATA.map((rarityEntry) => {
      return {
        ...rarityEntry,
        checked: true,
      };
    });
    this.itemTypeFilters = ITEM_TYPE_FILTERS.map((entry) => {
      return { ...entry, checked: true };
    });
  },
});

export const useItems = (character = ref(null)) => {
  const currentCharacter = character;

  const { t } = useI18n();

  const setup = () => {
    const currentItemList = computed(() => {
      handleSortingLogic();
      return getFilteredItems();
    });

    return {
      currentItemList,
    };
  };

  const handleSortingLogic = () => {
    let targetSortBy = itemFilters.sortBy;
    let targetSortOrder = itemFilters.sortOrder;

    if (targetSortBy === currentSortBy && targetSortOrder === currentSortOrder) {
      // there was no sorting change, so don't sort
      return;
    }

    // we want to perform a sort
    // first copy the original data incase the sort is 'none'
    sortedItemData.value = structuredClone(itemData);

    // save the current sort settings for next time
    currentSortBy = targetSortBy;
    currentSortOrder = targetSortOrder;

    // if the sortBy is none, don't sort
    if (targetSortBy.id === 'none') {
      return;
    }

    // otherwise we want to do a sort
    sortedItemData.value.sort((itemA, itemB) => {
      if (targetSortBy.id === 'level') {
        // we handle level sorting manually
        return targetSortOrder.id === 'ascending' ? itemA.level - itemB.level : itemB.level - itemA.level;
      } else if (targetSortBy.id === 'name') {
        // we handle name sorting manually
        let nameA = itemA.name.toLowerCase(),
          nameB = itemB.name.toLowerCase();

        if (targetSortOrder.id === 'ascending') {
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          return 0;
        } else {
          if (nameA > nameB) {
            return -1;
          }
          if (nameA < nameB) {
            return 1;
          }
          return 0;
        }
      } else {
        // we use this function to sort by an equip effect
        return sortByEquipEffect(itemA, itemB, targetSortBy, targetSortOrder);
      }
    });
  };

  const sortByEquipEffect = (itemA, itemB, targetSortBy, targetSortOrder) => {
    // these are the vars that will contain the sorting data.
    // we set them to very negative initially to handle items that don't have the target equip effect
    let itemAStatValue = -10000;
    let itemBStatValue = -10000;

    // this finds the target effect and gets its value if it exists for item A
    if (itemA.equipEffects?.length) {
      let itemAStat = itemA.equipEffects.find((equipEffect) => {
        return equipEffect.id === targetSortBy.id;
      });

      if (itemAStat !== undefined) {
        itemAStatValue = itemAStat.values[0];
      }
    }

    // this finds the target effect and gets its value if it exists for item B
    if (itemB.equipEffects?.length) {
      let itemBStat = itemB.equipEffects.find((equipEffect) => {
        return equipEffect.id === targetSortBy.id;
      });

      if (itemBStat !== undefined) {
        itemBStatValue = itemBStat.values[0];
      }
    }

    // we do math here based on the sort order in order to sort them based on their values
    return targetSortOrder.id === 'ascending' ? itemAStatValue - itemBStatValue : itemBStatValue - itemAStatValue;
  };

  const getFilteredItems = () => {
    // Filter Logic
    // (itemType OR itemType OR ...) AND (level range check) AND (itemMod AND itemMod AND ...) AND (rarity OR rarity OR ...)

    let filteredItems = sortedItemData.value.filter((item) => {
      // TODO missing some from the item type filters
      return hasSearchTerm(item) && isWithinLevelRange(item) && matchesEffectFilters(item) && matchesRarityFilters(item) && matchesItemTypeFilters(item);
    });

    return filteredItems;
  };

  const hasSearchTerm = (item) => {
    return t(`items.${item.id}`).toLowerCase().includes(itemFilters.searchTerm.toLowerCase());
  };

  const isWithinLevelRange = (item) => {
    return itemFilters.startLevel <= item.level && item.level <= itemFilters.endLevel;
  };

  const matchesEffectFilters = (item) => {
    if (itemFilters.effectFilters.length === 0) {
      return true;
    }

    if (item.equipEffects?.length === undefined || item.equipEffects.length === 0) {
      return false;
    }

    // we assume the item is valid. innocent until proven guilty. now onto the gauntlet
    let validItem = true;

    // First we need to iterate over each filter
    itemFilters.effectFilters.some((filter) => {
      // we get the target filter's data from our constants so we can translate to the raw ID
      let targetFilterEffectData = EFFECT_TYPE_DATA[filter.type.value];

      // Then we iterate over each of the item's effects
      let hadEffect = false;
      item.equipEffects.some((itemEffect) => {
        // if the item has the effect, then we need to check it against our filters
        if (targetFilterEffectData.rawIds.includes(itemEffect.id)) {
          hadEffect = true;

          if (filter.comparator.id === 'equalTo') {
            validItem = itemEffect.values[0] === filter.value;
          } else if (filter.comparator.id === 'greaterThanOrEqualTo') {
            validItem = itemEffect.values[0] >= filter.value;
          } else if (filter.comparator.id === 'lessThanOrEqualTo') {
            validItem = itemEffect.values[0] <= filter.value;
          } else {
            console.error('Unknown comparator when trying to evaluate effect filters.');
          }

          // we want to break out of this loop
          return true;
        }

        // if we hit here, we want to continue the loop
        return false;
      });

      if (hadEffect === false) {
        validItem = false;
      }

      if (validItem === false) {
        return true;
      }

      return false;
    });

    return validItem;
  };

  const matchesRarityFilters = (item) => {
    let itemRarity = item.rarity;
    let validItem = false; // we assume false because if one rarity matches, we want it

    itemFilters.rarityFilters.some((rarityEntry) => {
      if (rarityEntry.checked && rarityEntry.id === itemRarity) {
        validItem = true;
        return true;
      }

      return false;
    });

    return validItem;
  };

  const matchesItemTypeFilters = (item) => {
    if (itemFilters.itemTypeFilters.length === 0) {
      return true;
    }

    let itemTypeRawId = item.type.id;
    let validItem = false; // we assume false because if one type matches, we want it

    itemFilters.itemTypeFilters.some((itemTypeEntry) => {
      if (itemTypeEntry.checked && itemTypeEntry.rawId === itemTypeRawId) {
        validItem = true;
        return true;
      }

      return false;
    });

    return validItem;
  };

  const equipItem = (item, event, confirm) => {
    let isRing = item.type.validSlots.includes(ITEM_SLOT_DATA.LEFT_HAND.id) || item.type.validSlots.includes(ITEM_SLOT_DATA.RIGHT_HAND.id);
    // this one handles equipping a 2H weaon while a second weapon is equipped
    let twoHandedWeaponConflict =
      item.type.disabledSlots.includes(ITEM_SLOT_DATA.SECOND_WEAPON.id) && currentCharacter.value.equipment[ITEM_SLOT_DATA.SECOND_WEAPON.id] !== null;
    // this one handles equipping a second weapon while a 2H one is equipped
    let secondWeaponConflict =
      item.type.validSlots[0] === ITEM_SLOT_DATA.SECOND_WEAPON.id &&
      currentCharacter.value.equipment[ITEM_SLOT_DATA.FIRST_WEAPON.id] !== null &&
      currentCharacter.value.equipment[ITEM_SLOT_DATA.FIRST_WEAPON.id].type.disabledSlots.includes(ITEM_SLOT_DATA.SECOND_WEAPON.id);

    let hasRelicConflict = false;
    let existingRelicSlotId = null;
    let hasEpicConflict = false;
    let existingEpicSlotId = null;

    Object.keys(currentCharacter.value.equipment).forEach((slotKey) => {
      if (item.rarity === 5 && currentCharacter.value.equipment[slotKey] !== null && currentCharacter.value.equipment[slotKey].rarity === 5) {
        hasRelicConflict = true;
        existingRelicSlotId = slotKey;
      }

      if (item.rarity === 7 && currentCharacter.value.equipment[slotKey] !== null && currentCharacter.value.equipment[slotKey].rarity === 7) {
        hasEpicConflict = true;
        existingEpicSlotId = slotKey;
      }
    });

    let confirmMessage = null;
    if (hasRelicConflict) {
      confirmMessage = t('characterSheet.equipmentContent.hasRelicWarning');
    }

    if (hasEpicConflict) {
      confirmMessage = t('characterSheet.equipmentContent.hasEpicWarning');
    }

    if (twoHandedWeaponConflict) {
      confirmMessage = t('characterSheet.equipmentContent.twoHandedWeaponWarning');
    }

    if (secondWeaponConflict) {
      confirmMessage = t('characterSheet.equipmentContent.secondWeaponWarning');
    }

    if (hasRelicConflict && twoHandedWeaponConflict) {
      confirmMessage = t('characterSheet.equipmentContent.relicAndTwoHandedWarning');
    }

    if (hasRelicConflict && secondWeaponConflict) {
      confirmMessage = t('characterSheet.equipmentContent.relicAndSecondWeaponWarning');
    }

    if (hasRelicConflict && twoHandedWeaponConflict) {
      confirmMessage = t('characterSheet.equipmentContent.epicAndTwoHandedWarning');
    }

    if (hasRelicConflict && secondWeaponConflict) {
      confirmMessage = t('characterSheet.equipmentContent.epicAndSecondWeaponWarning');
    }

    let hasConflict = twoHandedWeaponConflict || secondWeaponConflict || hasRelicConflict || hasEpicConflict;

    if (hasConflict) {
      if (confirm && event) {
        confirm.require({
          target: event.currentTarget,
          message: confirmMessage,
          accept: () => {
            if (isRing) {
              if (currentCharacter.value.equipment[ITEM_SLOT_DATA.LEFT_HAND.id] === null) {
                currentCharacter.value.equipment[ITEM_SLOT_DATA.LEFT_HAND.id] = item;
              } else {
                currentCharacter.value.equipment[ITEM_SLOT_DATA.RIGHT_HAND.id] = item;
              }
            }

            if (twoHandedWeaponConflict) {
              currentCharacter.value.equipment[ITEM_SLOT_DATA.FIRST_WEAPON.id] = item;
              currentCharacter.value.equipment[ITEM_SLOT_DATA.SECOND_WEAPON.id] = null;
            }

            if (secondWeaponConflict) {
              currentCharacter.value.equipment[ITEM_SLOT_DATA.FIRST_WEAPON.id] = null;
              currentCharacter.value.equipment[ITEM_SLOT_DATA.SECOND_WEAPON.id] = item;
            }

            if (hasRelicConflict) {
              // there is a relic conflict and they have opted to remove it
              currentCharacter.value.equipment[existingRelicSlotId] = null;
              currentCharacter.value.equipment[item.type.validSlots[0]] = item;
            }

            if (hasEpicConflict) {
              // there is a relic conflict and they have opted to remove it
              currentCharacter.value.equipment[existingEpicSlotId] = null;
              currentCharacter.value.equipment[item.type.validSlots[0]] = item;
            }
          },
        });
      } else {
        if (isRing) {
          if (currentCharacter.value.equipment[ITEM_SLOT_DATA.LEFT_HAND.id] === null) {
            currentCharacter.value.equipment[ITEM_SLOT_DATA.LEFT_HAND.id] = item;
          } else {
            currentCharacter.value.equipment[ITEM_SLOT_DATA.RIGHT_HAND.id] = item;
          }
        }

        if (twoHandedWeaponConflict) {
          currentCharacter.value.equipment[ITEM_SLOT_DATA.FIRST_WEAPON.id] = item;
          currentCharacter.value.equipment[ITEM_SLOT_DATA.SECOND_WEAPON.id] = null;
        }

        if (secondWeaponConflict) {
          currentCharacter.value.equipment[ITEM_SLOT_DATA.FIRST_WEAPON.id] = null;
          currentCharacter.value.equipment[ITEM_SLOT_DATA.SECOND_WEAPON.id] = item;
        }

        if (hasRelicConflict) {
          // there is a relic conflict and they have opted to remove it
          currentCharacter.value.equipment[existingRelicSlotId] = null;
          currentCharacter.value.equipment[item.type.validSlots[0]] = item;
        }

        if (hasEpicConflict) {
          // there is a relic conflict and they have opted to remove it
          currentCharacter.value.equipment[existingEpicSlotId] = null;
          currentCharacter.value.equipment[item.type.validSlots[0]] = item;
        }
      }
    } else {
      // no conflicts, just equip it normally
      if (isRing) {
        if (currentCharacter.value.equipment[ITEM_SLOT_DATA.LEFT_HAND.id] === null) {
          currentCharacter.value.equipment[ITEM_SLOT_DATA.LEFT_HAND.id] = item;
        } else {
          currentCharacter.value.equipment[ITEM_SLOT_DATA.RIGHT_HAND.id] = item;
        }
      } else if (item.type.validSlots.length > 1) {
        console.log('There is an item type with 2 valid slots that we are not handling', item.type);
      } else {
        currentCharacter.value.equipment[item.type.validSlots[0]] = item;
      }
    }
  };

  const getNumTotalItems = () => {
    return itemData.length;
  };

  const getRunes = () => {
    return itemData.filter((item) => {
      return item.type.id === 811 && item.id !== 27095 && item.id !== 27096;
    });
  };

  const getSublimations = () => {
    return itemData.filter((item) => {
      return item.type.id === 812;
    });
  };

  const getItemById = (itemId) => {
    let potentialitem = itemData.find((item) => {
      return item.id === itemId;
    });
    return potentialitem || null;
  };

  const canSublimationFit = (item, sublimation) => {
    if (!item) {
      return false;
    }

    let runeSlotColors = [];
    runeSlotColors.push(item.runeSlot1?.color);
    runeSlotColors.push(item.runeSlot2?.color);
    runeSlotColors.push(item.runeSlot3?.color);
    runeSlotColors.push(item.runeSlot4?.color);

    let sublimationColorRequirements = sublimation?.sublimationParameters?.slotColorPattern || [];

    // there are two 'sub arrays' we need to check
    let firstRuneSubArray = runeSlotColors.filter((_, i) => i !== 3); // just the first three elements
    let secondRuneSubArray = runeSlotColors.filter((_, i) => i !== 0); // just the last three elements

    // we assume it is valid from the start
    let isValid = true;

    // check the first sub array
    sublimationColorRequirements.forEach((colorId, index) => {
      if (firstRuneSubArray[index] !== colorId && firstRuneSubArray[index] !== 0) {
        // if it does not match or it is not a white
        isValid = false;
      }
    });

    if (isValid) {
      // if we are still valid after the first check, we're good to return
      return isValid;
    }

    // next we check the second sub array, reseting our isValid beforehand
    isValid = true;
    sublimationColorRequirements.forEach((colorId, index) => {
      if (secondRuneSubArray[index] !== colorId && secondRuneSubArray[index] !== 0) {
        // if it does not match or it is not a white
        isValid = false;
      }
    });

    return isValid;
  };

  return {
    setup,
    itemFilters,
    getFilteredItems,
    getNumTotalItems,
    equipItem,
    getItemById,
    getRunes,
    getSublimations,
    canSublimationFit,
  };
};
