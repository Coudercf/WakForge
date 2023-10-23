import { ref, inject, watch } from 'vue';
import { EventBus, Events } from '../eventBus';
import { masterData } from '@/models/useStorage.js';
import { CLASS_CONSTANTS, EFFECT_TYPE_DATA } from '@/models/useConstants';

export const useStats = (currentCharacter) => {
  const setup = () => {
    EventBus.on(Events.UPDATE_STATS, () => {
      updateStats();
    });

    watch(
      masterData,
      () => {
        // this watch handles live saving to local storage
        updateStats();
      },
      { immediate: true }
    );

    // updateStats();
  };

  const updateStats = () => {
    if (currentCharacter.value) {
      currentCharacter.value.healthPoints = Math.floor(
        (50 +
          currentCharacter.value.characteristics.strength.healthPoints * 20 +
          calcItemContribution(EFFECT_TYPE_DATA.healthPoints.rawId) +
          10 * currentCharacter.value.level) *
          (1 + currentCharacter.value.characteristics.intelligence.percentHealthPoints * 0.04)
      );
      currentCharacter.value.actionPoints =
        6 + currentCharacter.value.characteristics.major.actionPoints + calcItemContribution(EFFECT_TYPE_DATA.actionPoints.rawId);
      currentCharacter.value.movementPoints =
        3 + currentCharacter.value.characteristics.major.movementPointsAndDamage + calcItemContribution(EFFECT_TYPE_DATA.movementPoints.rawId);
      currentCharacter.value.wakfuPoints =
        (currentCharacter.value.class === CLASS_CONSTANTS.xelor ? 12 : 6) +
        currentCharacter.value.characteristics.major.wakfuPoints * 2 +
        calcItemContribution(EFFECT_TYPE_DATA.wakfuPoints.rawId);
      currentCharacter.value.quadrumentalBreeze =
        (currentCharacter.value.class === CLASS_CONSTANTS.huppermage ? 500 : 0) + currentCharacter.value.characteristics.major.wakfuPoints * 150;

      // Elemental masteries
      currentCharacter.value.masteries.water = calcElemMasteryBonus() + calcItemContribution(EFFECT_TYPE_DATA.waterMastery.rawId);
      currentCharacter.value.masteries.air = calcElemMasteryBonus() + calcItemContribution(EFFECT_TYPE_DATA.airMastery.rawId);
      currentCharacter.value.masteries.earth = calcElemMasteryBonus() + calcItemContribution(EFFECT_TYPE_DATA.earthMastery.rawId);
      currentCharacter.value.masteries.fire = calcElemMasteryBonus() + calcItemContribution(EFFECT_TYPE_DATA.fireMastery.rawId);

      // Other masteries
      currentCharacter.value.masteries.melee =
        currentCharacter.value.characteristics.strength.meleeMastery * 8 + calcItemContribution(EFFECT_TYPE_DATA.meleeMastery.rawId);
      currentCharacter.value.masteries.distance =
        currentCharacter.value.characteristics.strength.distanceMastery * 8 + calcItemContribution(EFFECT_TYPE_DATA.distanceMastery.rawId);
      currentCharacter.value.masteries.critical =
        currentCharacter.value.characteristics.fortune.criticalMastery * 1 + calcItemContribution(EFFECT_TYPE_DATA.criticalMastery.rawId);
      currentCharacter.value.masteries.rear =
        currentCharacter.value.characteristics.fortune.rearMastery * 6 + calcItemContribution(EFFECT_TYPE_DATA.rearMastery.rawId);
      currentCharacter.value.masteries.berserk =
        currentCharacter.value.characteristics.fortune.berserkMastery * 8 + calcItemContribution(EFFECT_TYPE_DATA.berserkMastery.rawId);
      currentCharacter.value.masteries.healing =
        currentCharacter.value.characteristics.fortune.healingMastery * 6 + calcItemContribution(EFFECT_TYPE_DATA.healingMastery.rawId);

      // Resistances
      currentCharacter.value.resistances.water = calcElemResistanceBonus() + calcItemContribution(EFFECT_TYPE_DATA.waterResistance.rawId);
      currentCharacter.value.resistances.air = calcElemResistanceBonus() + calcItemContribution(EFFECT_TYPE_DATA.airResistance.rawId);
      currentCharacter.value.resistances.earth = calcElemResistanceBonus() + calcItemContribution(EFFECT_TYPE_DATA.earthResistance.rawId);
      currentCharacter.value.resistances.fire = calcElemResistanceBonus() + calcItemContribution(EFFECT_TYPE_DATA.fireResistance.rawId);

      currentCharacter.value.resistances.critical =
        currentCharacter.value.characteristics.fortune.criticalResistance * 4 + calcItemContribution(EFFECT_TYPE_DATA.criticalResistance.rawId);
      currentCharacter.value.resistances.rear =
        currentCharacter.value.characteristics.fortune.rearResistance * 4 + calcItemContribution(EFFECT_TYPE_DATA.rearResistance.rawId);

      // Other stats
      currentCharacter.value.stats.lock =
        currentCharacter.value.characteristics.agility.lock * 6 +
        currentCharacter.value.characteristics.agility.lockAndDodge * 4 +
        calcItemContribution(EFFECT_TYPE_DATA.lock.rawId);
      currentCharacter.value.stats.dodge =
        currentCharacter.value.characteristics.agility.dodge * 6 +
        currentCharacter.value.characteristics.agility.lockAndDodge * 4 +
        calcItemContribution(EFFECT_TYPE_DATA.dodge.rawId);
      currentCharacter.value.stats.initiative =
        currentCharacter.value.characteristics.agility.initiative * 6 + calcItemContribution(EFFECT_TYPE_DATA.initiative.rawId);
      currentCharacter.value.stats.forceOfWill =
        currentCharacter.value.characteristics.agility.forceOfWill * 1 + calcItemContribution(EFFECT_TYPE_DATA.forceOfWill.rawId);

      currentCharacter.value.stats.criticalHit =
        (currentCharacter.value.characteristics.fortune.percentCriticalHit * 0.01 + calcItemContribution(EFFECT_TYPE_DATA.criticalHit.rawId) * 0.01) * 100;
      currentCharacter.value.stats.damageInflicted = currentCharacter.value.characteristics.major.percentDamageInflicted * 0.1 * 100;

      currentCharacter.value.stats.range = currentCharacter.value.characteristics.major.rangeAndDamage + calcItemContribution(EFFECT_TYPE_DATA.range.rawId);
      currentCharacter.value.stats.control =
        currentCharacter.value.characteristics.major.controlAndDamage * 2 + calcItemContribution(EFFECT_TYPE_DATA.control.rawId);
    }
  };

  const calcElemMasteryBonus = () => {
    let bonus =
      currentCharacter.value.characteristics.strength.elementalMastery * 5 +
      currentCharacter.value.characteristics.major.movementPointsAndDamage * 20 +
      currentCharacter.value.characteristics.major.rangeAndDamage * 40 +
      currentCharacter.value.characteristics.major.controlAndDamage * 40 +
      calcItemContribution(EFFECT_TYPE_DATA.elementalMastery.rawId);

    return bonus;
  };

  const calcElemResistanceBonus = () => {
    let bonus =
      currentCharacter.value.characteristics.major.elementalResistance * 50 +
      currentCharacter.value.characteristics.intelligence.elementalResistance * 10 +
      calcItemContribution(EFFECT_TYPE_DATA.elementalResistance.rawId);
    return bonus;
  };

  const calcItemContribution = (targetEffectRawId) => {
    let contribution = 0;

    // So to pull this off we need to iterate over each item slot
    Object.keys(currentCharacter.value.equipment).forEach((slotKey) => {
      // if the item slot has an item assigned, we're good to go
      if (currentCharacter.value.equipment[slotKey] !== null) {
        // grab the item
        let item = currentCharacter.value.equipment[slotKey];

        // now we have to go over each of the item's effects and look for the one we want
        item.equipEffects.forEach((effect) => {
          // we specifically compare the raw IDs here because that's what we get from the JSON
          if (targetEffectRawId === effect.id) {
            // console.log('Effect being applied', effect.description, effect.values[0]);
            // we have a match. we want to add its effect to the total tally
            contribution += effect.values[0]; // generally it seems we want the first number
          }
        });
      }
    });

    // at this point we have iterated over all the items, so we should be done
    return contribution;
  };

  const calcElemResistancePercentage = (resistanceValue) => {
    return ((1 - Math.pow(0.8, resistanceValue / 100)) * 100).toFixed(2);
  };

  return {
    setup,
    calcElemResistancePercentage,
  };
};
