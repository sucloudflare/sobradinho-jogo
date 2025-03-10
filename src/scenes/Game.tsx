import React, { useEffect, useState } from 'react';
import Phaser from 'phaser';
import { GameScene } from '../game/scenes/GameScene';

export function Game() {
  const [currentLevel, setCurrentLevel] = useState('Vila São Joaquim');
  const [health, setHealth] = useState(100);
  const [enemiesLeft, setEnemiesLeft] = useState(5);

  useEffect(() => {
    const config: Phaser.Types.Core.GameConfig = {
      type: Phaser.AUTO,
      parent: 'game-container',
      width: 800,
      height: 600,
      physics: {
        default: 'arcade',
        arcade: {
          gravity: { y: 0 },
          debug: false
        }
      },
      scene: GameScene,
      pixelArt: true,
      scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
      },
      backgroundColor: '#1a1a1a'
    };

    const game = new Phaser.Game(config);

    return () => {
      game.destroy(true);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black p-4">
      <div className="game-container" id="game-container" />
      
      <div className="mt-4 w-full max-w-4xl flex items-center justify-between px-4">
        <div className="flex items-center gap-4">
          <div className="health-bar w-48" style={{ width: `${health}%` }} />
          <div className="text-sm">HP: {health}/100</div>
        </div>
        
        <div className="text-sm text-right">
          <p>Fase: {currentLevel}</p>
          <p>Inimigos Restantes: {enemiesLeft}</p>
        </div>
      </div>

      <div className="mt-4 text-sm text-center text-gray-500">
        <p>Controles: Setas para mover, Espaço para atacar</p>
        <p>Objetivo: Elimine todos os inimigos para avançar</p>
      </div>
    </div>
  );
}