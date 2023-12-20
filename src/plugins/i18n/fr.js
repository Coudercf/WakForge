/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
import frItemTranslations from './itemTranslations/fr_items.json';
import frStatesTranslations from './statesTranslations/fr_states.json';

export const fr = {
  items: frItemTranslations,
  states: frStatesTranslations,
  app: {
    disclaimer: 'WAKFU est un MMORPG édité par Ankama. "WakForge" est un site non-officiel sans aucun lien avec Ankama.',
    globalErrorMessage: "Il y a eu une erreur critique qui a empêché l'application de fonctionner correctement.",
    globalErrorContact: 'Merci de contacter Fryke sur Discord le plus tôt possible avec les informations ci-dessous.',
  },
  sidebar: {
    charactersTab: 'Personnages',
    dataTab: 'Données',
    guidesTab: 'Guides', // NEEDS TRANSLATION
    discordTab: 'Discord',
    githubTab: 'GitHub',
    language: 'Langage',
    english: 'Anglais',
    spanish: 'Espagnol',
    french: 'Français',
    theme: 'Thème',
    colorTheme: 'Couleur Thème',
    amakna: 'Amakna',
    bonta: 'Bonta',
    brakmar: 'Brâkmar',
    sufokia: 'Sufokia',
  },
  charactersPage: {
    title: 'Bienvenue sur Wakforge',
    description: "Si vous rencontrez le moindre problème, n'hésitez pas à contacter Fryke (fryke) sur Discord.",
    codeInputLabel: 'Code Build',
    codeInputPlaceholder: 'Entrer le Build Code',
    codeInputButton: "Créer à partir d'un code",
    invalidBuildCode: 'Build Code invalide.',
    savedCharactersTitle: 'Personnages Sauvegardés',
    createNewCharacterButton: 'Créer un nouveau Personnage',
    createNewGroupButton: 'Créer nouveau groupe',
    newGroup: 'Nouveau groupe',
  },
  guidesPage: {
    title: 'General Guides', // NEEDS TRANSLATION
    description: 'Here you can find general game guides. If you are looking for class specific guides, go check the Guides tab in one of your character builds.', // NEEDS TRANSLATION
  },
  dataPage: {
    title: "Gestion des données de l'application",
    importDescription: 'Vous pouvez upload ici un fichier JSON pour importer des personnages.',
    selectJson: 'Sélectionner un fichier JSON',
    dragOrDrop: 'ou glisser/déposer le fichier JSON ici.',
    dataNotRecognized: 'Les données actuelles ne sont pas reconnues comme des données WakForge.',
    beforeImport: "Avant d'importer les personnages, la version de vos données sera vérifiée.",
    needsMigration:
      "Il semble que vous utilisez des données d'une ancienne version nécessitant d'être mises à jour avant d'être utilisées. Ceci est une opération sans risque et ne fera aucun changement permanent sur vos données existantes.",
    goodToGo: 'Vos données sont prêtes.',
    dataSize: 'Taille des données',
    numberOfCharacters: 'Nombre de personnages',
    noCharactersFound: 'Aucun personnage trouvé',
    operatesOffLocalstorage: 'WakForge fonctionne avec des données sauvegardées dans le navigateur via LocalStorage.',
    currentLocalstorageKey: 'La clé utilisée pour les données du LocalStorage est',
    storageLimit: 'Le LocalStorage a une taille limite de 10Mo.',
    currentStorageSize: 'Votre stockage a une taille actuelle de',
    contactForHelp: 'Si vous approchez de cette limite, merci de contacter Fryke (fryke) sur Discord.',
    warning: 'ATTENTION',
    warningMessage:
      "Éditer les données du LocalStorage directement est dangereux et peut corrompre définitivement vos données. Ne le faites qu'après avoir fait une sauvegarde et si vous savez ce que vous faites.",
    mustDownloadFirst: "Vous devez d'abort télecharger vos données",
    invalidJSON: 'JSON invalide',
    saveToLocalstorage: 'Sauvegarder dans le LocalStorage',
    downloadData: 'Télécharger les données actuelles',
    deleteAllData: 'Supprimer toutes les données',
    migrateData: 'Migrer les données',
    importCharacters: 'Importer les personnages sélectionnés',
    noDataFound: 'Aucune donnée trouvée',
  },
  characterSheet: {
    selectAClass: 'Sélectionner une classe',
    level: 'Niveau',
    buildCopyPaste: 'Vous pouvez copier-coller ce code pour partager ce build',
    buildCode: 'Code Build',
    copy: 'Copier',
    characteristics: 'Caractéristiques',
    equipment: 'Équipement',
    autoItemSolver: 'Auto Item Solver',
    runesAndSubs: 'Runes & Sublimations',
    spellsAndPassives: 'Sorts & Passifs',
    codeDisclaimer: "Oui, c'est normal. Ne soyez pas inquiet.",
    codeInfo:
      "Ces caractères sont intentionnels. Pour que le code reste court, nous sommes allés vers les profondeurs obscures de l'encodage en base2048. Contemplez la majesté de ces runes du code du Build. Puisse-t-il vous apporter l'illumination.",

    statsDisplay: {
      ar: 'AR',
      qb: 'BQ',
      water: 'Eau',
      air: 'Air',
      earth: 'Terre',
      fire: 'Feu',
      elmentalResistances: 'Résistances Elémentaires',
      battle: 'Combat',
      criticalHit: 'Coup Critique',
      block: 'Parade',
      secondary: 'Secondaire',
      armorReceived: 'Armure reçue',
      indirectDamage: 'Dommages Indirects',
      totalMastery: 'Total Mastery', // NEEDS TRANSLATION
      statsSummary: 'Résumé Stats',
      effectiveHpAgainst: 'Effective HP Against {type} Damage', // NEEDS TRANSLATION
      numSelected: '{num} Selected', // NEEDS TRANSLATION
    },

    guidesContent: {
      doYouHaveAGuide: "Do you have a guide you would like to list here? Contact us in the Discord server. We'd love to add it.", // NEEDS TRANSLATION
      classGuides: '{class} Guides', // NEEDS TRANSLATION
      openGuide: 'Open Guide', // NEEDS TRANSLATION
    },

    characteristicsContent: {
      points: 'Points',
      intelligence: 'Intelligence',
      barrier: 'Barrière',
      percentArmorHealthPoints: '% Points de Vie en Armure',
      strength: 'Force',
      elementalMastery: 'Maîtrise élémentaire',
      agility: 'Agilité',
      lockAndDodge: 'Tacle et Esquive',
      fortune: 'Chance',
      major: 'Majeur',
      movementPointsAndDamage: 'Point de Mouvement et dégâts',
      rangeAndDamage: 'Portée et dégâts',
      controlAndDamage: 'Contrôle et dégâts',
    },

    equipmentContent: {
      sortBy: 'Trier par',
      newSort: 'New Sort', // NEEDS TRANSLATION
      resultsOutOf: 'Résultats sur',
      itemsTotal: 'Items au total',
      displayStats: 'Afficher les stats',
      displayTotals: 'Display Totals', // NEEDS TRANSLATION
      compareToEquipped: 'Compare to Equipped', // NEEDS TRANSLATION
      itemLevel: "Niveau de l'item",
      openEncyclopediaPage: "Ouvrir la page de l'encyclopédie",
      noItemsFound: "Aucun item n'a été trouvé avec ces filtres. N'hésitez pas à changer votre recherche.",
      hasRelicWarning: 'Vous avez déjà un item Relique équipé. Ce dernier sera retiré avec cette action. Êtes-vous sûr ?',
      hasEpicWarning: 'Vous avez déjà un item Epique équipé. Ce dernier sera retiré avec cette action. Êtes-vous sûr ?',
      twoHandedWeaponWarning: "Ceci est une arme à deux mains et il existe déjà un item dans le slot d'arme secondaire. Êtes-vous sûr ?",
      secondWeaponWarning: 'Vous avez une arme à deux mains équipée. Cette dernière sera retirée avec cette action. Êtes-vous sûr ?',
      relicAndTwoHandedWarning:
        "Vous avez un item dans le slot d'arme secondaire et un item Relique équipés. Ces derniers seront retirés avec cette action. Êtes-vous sûr ?",
      relicAndSecondWeaponWarning: 'Vous avez une arme à deux main et un item Relique équipés. Ces derniers seront retirés avec cette action. Êtes-vous sûr ?',
      epicAndTwoHandedWarning:
        "Vous avez un item dans le slot d'arme secondaire et un item Epique équipés. Ces derniers seront retirés avec cette action. Êtes-vous sûr ?",
      epicAndSecondWeaponWarning: 'Vous avez une arme à deux main et un item Epique équipés. Ces derniers seront retirés avec cette action. Êtes-vous sûr ?',

      itemFilters: {
        searchItems: 'Recherche Items',
        resetFilters: 'Reset Filtres',
        rarities: 'Raretés',
        all: 'Tout',
        none: 'Aucun',
        itemTypes: 'Types Item',
        showAllFilters: 'Montrer tous les filtres',
        newFilter: 'Nouveau Filtre',
        equalTo: 'Égal à',
        lessThanOrEqualTo: 'Inférieur ou égale à',
        greaterThanOrEqualTo: 'Supérieur ou égale à',
        smallToBig: 'Croissant',
        bigToSmall: 'Décroissant',
        healthPoints: 'Points de vie (PV)',
        randElemMasteryValue: 'Maîtrise élem. aléatoire',
        criticalHitChance: 'Chance Coup Critique',
        blockChance: 'Parade',
        randElemResistanceValue: 'Résis. élem. aléatoire',
        ctrlClickToSelectOne: 'CTRL-Click to select one and remove all others.',
      },
    },

    itemSolverContent: {
      numElements: "Nombre d'éléments",
      apTooltip: 'Combien de PA au total vous souhaitez.',
      mpTooltip: 'Combien de PM au total vous souhaitez.',
      rangeTooltip: 'Combien de PO au total vous souhaitez.',
      wakfuTooltip: 'Combien de PW au total vous souhaitez.',
      numElementsTooltip: "Combien d'éléments vous souhaitez sur chaque item.",
      meleeMasteryTooltip: 'La Maîtrise Mêlée doit-elle être inclue si possible ?',
      distanceMasteryTooltip: 'La Maîtrise Distance doit-elle être inclue si possible ?',
      healingMasteryTooltip: 'La Maîtrise Soin doit-elle être inclue si possible ?',
      rearMasteryTooltip: 'La Maîtrise Dos doit-elle être inclue si possible ?',
      berserkMasteryTooltip: 'La Maîtrise Berserk doit-elle être inclue si possible ?',
      poweredBy: "Powered by {credit}'s code.", // NEEDS TRANSLATION, context = "Powered by Apple's code"
      problemMessage: "Il y a eu un souci avec l'auto-solver. Si vous pensez qu'il s'agit d'un bug, merci de contacter Fryke sur Discord.",
      instructions: 'Entrer vos paramètres au-dessus et cliquer sur "Générer un set d\'items".',
      ifYouNeedHelp: "Si vous avez besoin d'assistance, n'hésitez pas à nous contacter sur Discord avec vos questions.",
      loadingMessage: 'Jimmy est en pleine réflexion avec ses maths... Merci de patienter...',
      loadingDisclaimer: "N'oubliez pas qu'en fonction des options, celà peut prendre du temps.",
      normal: 'Normal',
      prioritized: 'Priorisée',
      preferNoNegatives: 'Préférée non négative',
      heavilyPreferNoNegatives: 'Priorisée non négative',
      targetStatsInfo: "Ce sont les stats totales visées pour l'ensemble du build.",
      prioritiesInfo: "C'est la priorité avec laquelle vous souhaitez que les maîtrises soient prises en CompositionEvent.",
      elementaryMasteryInfo:
        "Quelles maîtrises élémentaires doivent être privilégier ? Celle affectera également le nombre de slot d'éléments aléatoires recherchés par le solver.",
      sinbadErrorInfo: 'Si vous voyez ceci, merci de contacter Keeper of Time (sinbad) sur Discord avec les informations suivantes.',
      priorities: 'Priorités',
      totalTargetStats: 'Stats totales ciblées',
      apWarning: 'Vous demandez au moins 6 PA par les items, ce qui peut être impossible.',
      rangeForLevelWarning: "Vous demandez plus de PO qu'il n'est possible pour votre niveau.",
      rangeImpossibleWarning: 'Vous demandez un nombre en PO qui peut être impossible.',
      combinedApMpWarning: "Vous demandez une somme AP+MP qui n'est pas possible à votre niveau.",
      showAllItems: 'Show All Items', // NEEDS TRANSLATION
      displayTotals: 'Display Totals', // NEEDS TRANSLATION
    },

    runesAndSubsContent: {
      hotkeysAndShortcuts: 'Raccourcis',
      dragAndDrop: "Glisser-Déposer une rune pour l'affecter.",
      dragReplace: 'Déposer une rune sur une autre pour la remplacer.',
      ctrlClick: 'CTRL-Clic sur une rune pour la remplacer.',
      shiftClick: 'SHIFT-Clic sur une rune pour la rendre blanche.',
      rightClick: "Clic-Droit sur une rune pour plus d'options.",
      hightlightClick: "Sélectionner un slot et cliquer sur une rune à droite pour l'assigner.",
      runeLevelTooltip: `Le niveau maximum possible d'une rune est dépendant du niveau de l'item mais pour les besoins du builder, je limite ce champs par le niveau du personnage.`,
      runeLevel: 'Niveau Rune',
      toggleWhite: 'Rendre Blanche',
      removeAllRunes: 'Enlever toutes les runes/subl.',
      sortByMatching: 'Sort by Matching', // NEEDS TRANSLATION
      sortByMatchingNote: 'If an equipment slot is hightlighted, this will sort the sublimations by whether they match the rune colors on that equipment slot.', // NEEDS TRANSLATION
      searchSublimations: 'Search Sublimations...', // NEEDS TRANSLATION
      searchEpicAndRelicSubs: 'Search Epic/Relic Sublimations...', // NEEDS TRANSLATION
      addsStateLevelsShort: '+{num_0} levels of', // NEEDS TRANSLATION, context = "+1 levels of Abandon"
      stateStackingWarning: 'This state only stacks up to level {num_0}', // NEEDS TRANSLATION
      relicSub: 'Relic Sub', // NEEDS TRANSLATION, context = shorthand for "Relic Sublimation"
      epicSub: 'Epic Sub', // NEEDS TRANSLATION, context = shorthand for "Epic Sublimation"
      itemMustBeEquipped: 'An item must be equipped', // NEEDS TRANSLATION
    },

    spellsAndPassivesContent: {
      activeSpells: 'Sorts actifs (WIP)',
      activesNote:
        "Les sorts actifs n'ont aucune influence directe sur les stats d'un build et sont extrêmement difficiles à parser. C'est pourquoi ils ne seront pas disponibles pour le moment.",
      passives: 'Passifs',
      passivesNote: "Si vous trouvez un passif qui n'applique pas correctement les bonnes valeurs, merci de nous informer sur Discord.",
    },
  },
  classes: {
    feca: 'Feca',
    osamodas: 'Osamodas',
    enutrof: 'Enutrof',
    sram: 'Sram',
    xelor: 'Xélor',
    ecaflip: 'Ecaflip',
    eniripsa: 'Eniripsa',
    iop: 'Iop',
    cra: 'Crâ',
    sadida: 'Sadida',
    sacrier: 'Sacrieur',
    pandawa: 'Pandawa',
    rogue: 'Roublard',
    masqueraider: 'Zobal',
    ouginak: 'Ouginak',
    foggernaut: 'Steamer',
    eliotrope: 'Eliotrope',
    huppermage: 'Huppermage',
  },
  constants: {
    common: 'Commun',
    unusual: 'Inhabituel',
    rare: 'Rare',
    mythical: 'Mythique',
    legendary: 'Légendaire',
    relic: 'Relique',
    souvenir: 'Souvenir',
    epic: 'Épique',

    helmet: 'Casque',
    breastplate: 'Plastron',
    epaulettes: 'Épaulettes',
    boots: 'Bottes',
    amulet: 'Amulette',
    cloak: 'Cape',
    belt: 'Ceinture',
    primaryWeapon: 'Arme Principale',
    secondaryWeapon: 'Arme Secondaire',
    leftRing: 'Anneau Gauche',
    rightRing: 'Anneau Droit',
    ring: 'Anneau',
    emblem: 'Emblème',
    pet: 'Familier',
    pets: 'Familiers',
    mount: 'Monture',
    mounts: 'Montures',
    tool: 'Outil',
    torches: 'Torches',
    costumes: 'Costumes',
    sublimationScroll: 'Parchemin de Sublimation',
    enchantment: 'Rune',

    epicSublimation: 'Epic Sublimation', // NEEDS TRANSLATION
    relicSublimation: 'Relic Sublimation', // NEEDS TRANSLATION

    oneHandedWeapons: 'Armes à 1 main',
    twoHandedWeapons: 'Armes à 2 mains',
    wandOneHand: 'Baguette (1 main)',
    swordOneHand: 'Épée (1 main)',
    staffOneHand: 'Bâton (1 main)',
    clockHandOneHand: 'Aiguille (1 main)',
    cardsOneHand: 'Cartes (1 main)',
    swordTwoHanded: 'Épée (2 mains)',
    axeTwoHanded: 'Hache (2 mains)',
    staffTwoHanded: 'Bâton (2 mains)',
    hammerTwoHanded: 'Marteau (2 mains)',
    bowTwoHanded: 'Arc (2 mains)',
    shovelTwoHanded: 'Pelle (2 mains)',
    daggerSecondaryWeapon: 'Dague (Arme Secondaire)',
    shieldSecondaryWeapon: 'Bouclier (Arme Secondaire)',

    percentDamageInflicted: '% Dommages infligés',
    percentCriticalHit: '% Coup Critique',
    hp: 'PV',
    ap: 'PA',
    mp: 'PM',
    wp: 'PW',
    healthSteal: 'Vol de vie',
    range: 'PO',
    prospecting: 'Prospection',
    wisdom: 'Sagesse',
    control: 'Contrôle',
    percentBlock: '% Parade',
    movementPoints: 'Points de Mouvement',

    elementalMasteries: 'Maîtrises Elémentaires',
    meleeMastery: 'Maîtrise Mêlée',
    distanceMastery: 'Maîtrise Distance',
    lock: 'Tacle',
    dodge: 'Esquive',
    initiative: 'Initiative',
    forceOfWill: 'Volonté',
    criticalMastery: 'Maîtrise Critique',
    rearMastery: 'Maîtrise Dos',
    berserkMastery: 'Maîtrise Berserk',
    healingMastery: 'Maîtrise Soin',
    rearResistance: 'Résistance Dos',
    criticalResistance: 'Résistance Critique',
    actionPoints: "Points d'actions",
    wakfuPoints: 'Points Wakfu',
    elementalResistance: 'Résistance Elémentaire',
    waterResistance: 'Résistance Eau',
    earthResistance: 'Résistance Terre',
    airResistance: 'Résistance Air',
    fireResistance: 'Résistance Feu',
    level: 'Niveau',
    name: 'Nom',
    elementalMastery: 'Maîtrise élémentaire',
    waterMastery: 'Maîtrise Eau',
    earthMastery: 'Maîtrise Terre',
    airMastery: 'Maîtrise Air',
    fireMastery: 'Maîtrise Feu',

    percentArmorGiven: '% Armure donnée',
    percentArmorReceived: '% Armure reçue',
    percentHealsPerformed: '% Soins réalisés',
    percentIndirectDamageInflicted: '% Dommages indirects infligés',
    dodgeOverride: "Ignorer l'esquive",
    percentHealsReceived: '% Soins reçus',
    healthFromLevel: 'Points de vie par niveau',
    lockOverride: 'Ignorer le tacle',
    percentHealthPoints: '% Points de Vie',
    lockDoubled: 'Tacle Augmenté',
    dodgeFromLevel: 'Esquive par niveau',
    lockFromLevel: 'Tacle par niveau',
    percentDodge: '% Esquive',
    damageInflicted: 'Dommages Infligés',
    healsPerformed: 'Soins réalisés',
    healsReceived: 'Soins reçus',
    armorGiven: 'Armure donnée',
    healthPoints: 'Points de Vie',

    remove: 'Remove', // NEEDS TRANSLATION
  },
  confirms: {
    irreversable: 'Êtes-vous sûr ? Ceci est irréversible.',
    areYouSure: 'Êtes-vous sûr ?',
    willReplaceItems: 'Êtes-vous sûr ? Ceci remplacera tous les items équipés qui sont dans les slots en conflit.',
  },
  tooltips: {
    randomMasteryValue: '+{num_0} Mastery of {num_1} random elements', // NEEDS TRANSLATION
    randomResistanceValue: '+{num_0} Resistance of {num_1} random elements', // NEEDS TRANSLATION
    addsStateLevels: 'Adds +{num_0} levels of', // NEEDS TRANSLATION, context = "Adds +1 level of Abandon"
    stateAtLevel: 'State at level {num_0} (Max {num_1})', // NEEDS TRANSLATION, context = "Abandon State at level 1 (Max 6)"
    missingInfoAboutState: 'We are missing information about this state. If you have any, please let us know in the Discord server.', // NEEDS TRANSLATION
  },
};
