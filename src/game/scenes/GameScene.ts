import Phaser from 'phaser';
import { Howl } from 'howler';

interface GameObject {
  x: number;
  y: number;
  width: number;
  height: number;
}

interface Boss {
  name: string;
  health: number;
  damage: number;
  sprite: Phaser.Physics.Arcade.Sprite;
}

export class GameScene extends Phaser.Scene {
  private player!: Phaser.Physics.Arcade.Sprite;
  private cursors!: Phaser.Types.Input.Keyboard.CursorKeys;
  private enemies!: Phaser.Physics.Arcade.Group;
  private buildings!: Phaser.Physics.Arcade.StaticGroup;
  private currentLevel: string = 'Vila São Joaquim';
  private levelText!: Phaser.GameObjects.Text;
  private playerHealth: number = 100;
  private score: number = 0;
  private highScore: number = 0;
  private currentBoss: Boss | null = null;
  private attackKey!: Phaser.Input.Keyboard.Key;
  private isAttacking: boolean = false;
  private attackCooldown: number = 0;
  private backgroundMusic!: Howl;
  private soundEffects: {
    attack: Howl;
    hit: Howl;
    enemyDeath: Howl;
    playerHurt: Howl;
    levelComplete: Howl;
  };

  private readonly LEVELS = [
    'Vila São Joaquim',
    'Portelinha',
    'Vila São Francisco',
    'Barragem',
    'Balneário Chico Periquito',
    'Vila Santana'
  ];

  private readonly BOSSES = {
    'Clevinho Sampaio': { health: 200, damage: 20 },
    'Vicente Bert': { health: 250, damage: 25 }
  };

  constructor() {
    super({ key: 'GameScene' });
    
    this.soundEffects = {
      attack: new Howl({ src: ['https://freesound.org/data/previews/316/316913_5385832-lq.mp3'] }),
      hit: new Howl({ src: ['https://freesound.org/data/previews/131/131657_2398403-lq.mp3'] }),
      enemyDeath: new Howl({ src: ['https://freesound.org/data/previews/264/264981_4486188-lq.mp3'] }),
      playerHurt: new Howl({ src: ['https://freesound.org/data/previews/110/110113_1675065-lq.mp3'] }),
      levelComplete: new Howl({ src: ['https://freesound.org/data/previews/270/270404_5123851-lq.mp3'] })
    };
  }

  preload() {
    // Load city assets
    this.load.image('tiles', 'https://examples.phaser.io/assets/tilemaps/tiles/kenny_platformer_tiles.png');
    this.load.image('player', 'https://examples.phaser.io/assets/sprites/phaser-dude.png');
    this.load.image('enemy', 'https://examples.phaser.io/assets/sprites/red_ball.png');
    this.load.image('building1', 'https://examples.phaser.io/assets/sprites/platform.png');
    this.load.image('building2', 'https://examples.phaser.io/assets/sprites/platform2.png');
    this.load.spritesheet('attack', 'https://examples.phaser.io/assets/sprites/slash.png', { 
      frameWidth: 32, 
      frameHeight: 32 
    });
    
    // Load boss sprites
    this.load.image('boss_clevinho', 'https://examples.phaser.io/assets/sprites/boss1.png');
    this.load.image('boss_vicente', 'https://examples.phaser.io/assets/sprites/boss2.png');
  }

  create() {
    // Initialize background music
    this.backgroundMusic = new Howl({
      src: ['https://freesound.org/data/previews/415/415805_5121236-lq.mp3'],
      loop: true,
      volume: 0.5
    });
    this.backgroundMusic.play();

    // Create city environment
    this.createCityBackground();
    this.createBuildings();

    // Create player
    this.player = this.physics.add.sprite(400, 300, 'player');
    this.player.setCollideWorldBounds(true);
    this.player.setDepth(1);
    
    // Setup attack key
    this.attackKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

    // Create enemies
    this.createEnemies();

    // Add collisions
    this.physics.add.collider(this.player, this.buildings);
    this.physics.add.collider(this.enemies, this.buildings);
    this.physics.add.collider(this.player, this.enemies, this.handleCollision, undefined, this);

    // Setup controls
    this.cursors = this.input.keyboard.createCursorKeys();

    // Add UI elements
    this.createUI();

    // Setup camera
    this.cameras.main.startFollow(this.player);
    this.cameras.main.setBounds(0, 0, 2400, 1800);

    // Load high score
    this.highScore = Number(localStorage.getItem('highScore')) || 0;

    // Setup mobile controls if on touch device
    if (this.sys.game.device.input.touch) {
      this.createMobileControls();
    }
  }

  createCityBackground() {
    // Create layered city background
    const bgLayers = 3;
    for (let i = 0; i < bgLayers; i++) {
      const depth = i / bgLayers;
      const color = Phaser.Display.Color.GetColor(
        40 + (i * 20),
        40 + (i * 20),
        60 + (i * 20)
      );
      
      // Create buildings silhouette
      for (let j = 0; j < 20; j++) {
        const x = Phaser.Math.Between(0, 2400);
        const y = Phaser.Math.Between(600, 1200);
        const width = Phaser.Math.Between(100, 300);
        const height = Phaser.Math.Between(200, 500);
        
        const building = this.add.rectangle(x, y, width, height, color);
        building.setAlpha(0.5 - (depth * 0.3));
        building.setDepth(-10 + i);
      }
    }

    // Add ambient particles using the new particle system
    const particles = this.add.particles('particle');
    const emitter = particles.createEmitter({
      x: { min: 0, max: 2400 },
      y: { min: 0, max: 1800 },
      scale: { start: 0.2, end: 0 },
      alpha: { start: 0.3, end: 0 },
      speed: 20,
      lifespan: 3000,
      quantity: 2,
      blendMode: 'ADD'
    });

    // Create a simple white pixel for particles if no texture is loaded
    const graphics = this.add.graphics();
    graphics.fillStyle(0xffffff);
    graphics.fillRect(0, 0, 2, 2);
    const texture = graphics.generateTexture('particle', 2, 2);
    graphics.destroy();

    emitter.setTexture('particle');
  }

  createMobileControls() {
    const joystickBase = this.add.circle(100, this.game.config.height - 100, 50, 0x888888, 0.5);
    joystickBase.setScrollFactor(0);
    
    const joystick = this.add.circle(100, this.game.config.height - 100, 25, 0xcccccc, 0.5);
    joystick.setScrollFactor(0);
    
    let dragging = false;
    let dragVector = { x: 0, y: 0 };
    
    this.input.on('pointerdown', (pointer: Phaser.Input.Pointer) => {
      if (pointer.x < this.game.config.width / 2) {
        dragging = true;
        joystick.setPosition(pointer.x, pointer.y);
      } else {
        this.handleAttack();
      }
    });
    
    this.input.on('pointermove', (pointer: Phaser.Input.Pointer) => {
      if (dragging) {
        const dx = pointer.x - joystickBase.x;
        const dy = pointer.y - joystickBase.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 50) {
          joystick.setPosition(pointer.x, pointer.y);
        } else {
          const angle = Math.atan2(dy, dx);
          joystick.setPosition(
            joystickBase.x + Math.cos(angle) * 50,
            joystickBase.y + Math.sin(angle) * 50
          );
        }
        
        dragVector = {
          x: (joystick.x - joystickBase.x) / 50,
          y: (joystick.y - joystickBase.y) / 50
        };
      }
    });
    
    this.input.on('pointerup', () => {
      dragging = false;
      dragVector = { x: 0, y: 0 };
      joystick.setPosition(joystickBase.x, joystickBase.y);
    });
    
    // Attack button
    const attackButton = this.add.circle(
      this.game.config.width - 100,
      this.game.config.height - 100,
      40,
      0xff0000,
      0.5
    );
    attackButton.setScrollFactor(0);
    attackButton.setInteractive();
    attackButton.on('pointerdown', () => this.handleAttack());
  }

  createUI() {
    const uiContainer = this.add.container(16, 16);
    uiContainer.setScrollFactor(0);

    // Level text
    this.levelText = this.add.text(0, 0, `Fase: ${this.currentLevel}`, {
      fontSize: '18px',
      color: '#ffffff',
      stroke: '#000000',
      strokeThickness: 4
    });
    
    // Health bar
    const healthBar = this.add.graphics();
    this.updateHealthBar(healthBar);
    
    // Score text
    const scoreText = this.add.text(0, 40, `Score: ${this.score}`, {
      fontSize: '16px',
      color: '#ffffff'
    });
    
    // High score text
    const highScoreText = this.add.text(0, 60, `High Score: ${this.highScore}`, {
      fontSize: '16px',
      color: '#ffff00'
    });

    uiContainer.add([this.levelText, healthBar, scoreText, highScoreText]);
  }

  updateHealthBar(healthBar: Phaser.GameObjects.Graphics) {
    healthBar.clear();
    healthBar.fillStyle(0xff0000);
    healthBar.fillRect(0, 20, 200 * (this.playerHealth / 100), 10);
    healthBar.lineStyle(2, 0xffffff);
    healthBar.strokeRect(0, 20, 200, 10);
  }

  handleCollision(player: Phaser.Physics.Arcade.Sprite, enemy: Phaser.Physics.Arcade.Sprite) {
    // Player takes damage
    this.playerHealth -= 10;
    this.soundEffects.playerHurt.play();
    
    // Flash player red
    this.tweens.add({
      targets: player,
      alpha: 0.5,
      duration: 100,
      yoyo: true,
      repeat: 3
    });

    // Check game over
    if (this.playerHealth <= 0) {
      this.scene.restart();
      this.playerHealth = 100;
      this.score = 0;
    }
  }
}