export const LEVEL_CONFIG = {
  'Vila São Joaquim': {
    background: 'bg_vila_sao_joaquim',
    music: 'music_vila',
    enemies: {
      guardinha: 3,
      novinha: 2,
      inchadinha: 1
    },
    powerups: ['health', 'speed'],
    boss: null
  },
  'Portelinha': {
    background: 'bg_portelinha',
    music: 'music_portelinha',
    enemies: {
      guardinha: 4,
      novinha: 3,
      inchadinha: 2
    },
    powerups: ['health', 'damage'],
    boss: null
  },
  'Vila São Francisco': {
    background: 'bg_vila_sao_francisco',
    music: 'music_vila_sf',
    enemies: {
      guardinha: 5,
      novinha: 4,
      inchadinha: 3
    },
    powerups: ['health', 'speed', 'damage'],
    boss: 'CLEVINHO'
  },
  'Barragem': {
    background: 'bg_barragem',
    music: 'music_barragem',
    enemies: {
      guardinha: 4,
      novinha: 5,
      inchadinha: 4
    },
    powerups: ['health', 'invincibility'],
    boss: null,
    environment: {
      water: true,
      boats: true,
      fishingSpots: true
    }
  },
  'Balneário Chico Periquito': {
    background: 'bg_balneario',
    music: 'music_balneario',
    enemies: {
      guardinha: 6,
      novinha: 5,
      inchadinha: 4
    },
    powerups: ['health', 'speed', 'damage', 'invincibility'],
    boss: null,
    environment: {
      water: true,
      beach: true,
      swimmers: true
    }
  },
  'Vila Santana': {
    background: 'bg_vila_santana',
    music: 'music_boss',
    enemies: {
      guardinha: 7,
      novinha: 6,
      inchadinha: 5
    },
    powerups: ['health', 'speed', 'damage', 'invincibility'],
    boss: 'VICENTE'
  }
};

export const ENVIRONMENT_OBJECTS = {
  BARRAGEM: {
    dam: {
      sprite: 'obj_barragem',
      scale: 3,
      depth: 5
    },
    water: {
      sprite: 'obj_water',
      animation: 'water_flow',
      depth: 1
    },
    boats: {
      sprite: 'obj_boat',
      count: 3,
      movement: 'patrol'
    }
  },
  BALNEARIO: {
    beach: {
      sprite: 'obj_beach',
      depth: 0
    },
    umbrellas: {
      sprite: 'obj_umbrella',
      count: 5,
      random: true
    },
    swimmers: {
      sprite: 'obj_swimmer',
      animation: 'swim',
      count: 3
    }
  }
};