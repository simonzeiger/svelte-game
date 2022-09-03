import Phaser from 'phaser';
import { GameScene } from './scenes/Game';

export default {
  type: Phaser.AUTO,
  parent: 'game',
  backgroundColor: '#33A5E7',
  pixelArt: true,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: 1920,
    height: 1280,
  },
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 0 } // Top down game, so no gravity
    }
  },
  scene: [GameScene],
};