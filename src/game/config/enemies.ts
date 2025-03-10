export const ENEMY_TYPES = {
  GUARDINHA: {
    name: 'Guardinha',
    health: 50,
    damage: 10,
    speed: 80,
    sprite: 'enemy_guardinha',
    scale: 1,
    behavior: 'patrol',
    attackRange: 100,
    attackCooldown: 2000
  },
  NOVINHA: {
    name: 'Novinha',
    health: 40,
    damage: 15,
    speed: 120,
    sprite: 'enemy_novinha',
    scale: 0.9,
    behavior: 'chase',
    attackRange: 60,
    attackCooldown: 1500
  },
  INCHADINHA: {
    name: 'Inchadinha',
    health: 80,
    damage: 20,
    speed: 60,
    sprite: 'enemy_inchadinha',
    scale: 1.2,
    behavior: 'ambush',
    attackRange: 150,
    attackCooldown: 3000
  }
};

export const BOSS_TYPES = {
  CLEVINHO: {
    name: 'Clevinho',
    health: 300,
    damage: 25,
    speed: 90,
    sprite: 'boss_clevinho',
    scale: 2,
    attacks: [
      {
        name: 'dash',
        damage: 30,
        cooldown: 4000
      },
      {
        name: 'summonMinions',
        cooldown: 10000
      }
    ]
  },
  VICENTE: {
    name: 'Vicente Bert',
    health: 400,
    damage: 35,
    speed: 70,
    sprite: 'boss_vicente',
    scale: 2.2,
    attacks: [
      {
        name: 'groundSlam',
        damage: 40,
        cooldown: 5000
      },
      {
        name: 'energyBeam',
        damage: 25,
        cooldown: 8000
      }
    ]
  }
};