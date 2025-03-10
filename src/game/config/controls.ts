export const CONTROLS_CONFIG = {
  keyboard: {
    up: 'W',
    down: 'S',
    left: 'A',
    right: 'D',
    attack: 'SPACE',
    special: 'SHIFT',
    pause: 'ESC'
  },
  mobile: {
    movement: {
      type: 'joystick',
      position: { x: 100, y: -100 },
      size: 80,
      base: 'joystick_base',
      stick: 'joystick_stick'
    },
    buttons: [
      {
        action: 'attack',
        position: { x: -100, y: -100 },
        size: 60,
        sprite: 'button_attack'
      },
      {
        action: 'special',
        position: { x: -180, y: -100 },
        size: 60,
        sprite: 'button_special'
      }
    ]
  }
};