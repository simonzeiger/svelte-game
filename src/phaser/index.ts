import Phaser from 'phaser';
import config from './config';

let game: Phaser.Game;
export function getGame() {
  return game;
}

export function initGame() {
  game = new Phaser.Game(config);
}