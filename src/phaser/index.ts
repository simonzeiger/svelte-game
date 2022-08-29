import Phaser from 'phaser';
import config from './config';
import GameScene from './scenes/Game';

export const initGame = () => new Phaser.Game(
  Object.assign(config, {
    scene: [GameScene]
  })
);