import { useEffect } from 'react';
import { Howl } from 'howler';

export function useKeyboardSound() {
  useEffect(() => {
    // Create keyboard sound effects
    const keySound = new Howl({
      src: ['https://assets.codepen.io/385852/key-press.mp3'],
      volume: 0.2,
      rate: 1.5,
    });

    const spaceSound = new Howl({
      src: ['https://assets.codepen.io/385852/key-space.mp3'],
      volume: 0.2,
    });

    const enterSound = new Howl({
      src: ['https://assets.codepen.io/385852/key-enter.mp3'],
      volume: 0.3,
    });

    // Handle keydown events
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't play sounds for modifier keys
      if (['Shift', 'Control', 'Alt', 'Meta', 'CapsLock', 'Tab'].includes(e.key)) {
        return;
      }

      // Play different sounds for different keys
      if (e.key === ' ' || e.code === 'Space') {
        spaceSound.play();
      } else if (e.key === 'Enter') {
        enterSound.play();
      } else {
        // Slightly randomize the rate for natural variation
        keySound.rate(1.4 + Math.random() * 0.2);
        keySound.play();
      }
    };

    // Add event listener
    window.addEventListener('keydown', handleKeyDown);

    // Clean up
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);
}