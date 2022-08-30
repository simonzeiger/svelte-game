import Phaser from 'phaser';
import { Player } from '../game_objects/player';
import type { GameState, PeerPlayerState } from 'src/lib/game_state';
import { getIsHost } from '../../globals';
import { sendGameUpdate, sendPeerPlayerUpdate } from '../../lib/connection';
import type { Cursors } from '../type_defs';

export class GameScene extends Phaser.Scene {
  hostPlayer: Player;
  peerPlayer: Player;
  cursors: Cursors;

  constructor() {
    super('GameScene');
  }

  syncGameState(gameState: GameState) {
    this.hostPlayer.setAngle(gameState.hostPlayerState.angle);
    this.hostPlayer.setPosition(...gameState.hostPlayerState.position);
    this.hostPlayer.setTurretRotation(gameState.hostPlayerState.turretRotation);

    this.peerPlayer.setAngle(gameState.peerPlayerState.angle);
    this.peerPlayer.setPosition(...gameState.peerPlayerState.position);
    this.peerPlayer.setTurretRotation(gameState.peerPlayerState.turretRotation);
  }

  syncPeerPlayerState(peerPlayerState: PeerPlayerState) {
    this.peerPlayer.setAngle(this.peerPlayer.computePlayerAngle(
      peerPlayerState.cursors.isLeftPressed, peerPlayerState.cursors.isRightPressed));
    const computedVelocity = this.peerPlayer.computePlayerVelocity(peerPlayerState.cursors.isDownPressed, peerPlayerState.cursors.isUpPressed);
    this.peerPlayer.setVelocity(computedVelocity.x, computedVelocity.y);
    this.peerPlayer.setTurretRotation(this.peerPlayer.computeTurretRotation(...peerPlayerState.mousePosition));
  }

  preload() {
    this.load.image('tiles', 'src/assets/tilesets/grass.png');
    this.load.tilemapTiledJSON("map", "src/assets/tilemaps/map.json");
    Player.preload(this);
  }

  create() {
    const map = this.make.tilemap({ key: "map", tileHeight: 32, tileWidth: 32, });

    // Parameters are the name you gave the tileset in Tiled and then the key of the tileset image in
    // Phaser's cache (i.e. the name you used in preload)
    const tileset = map.addTilesetImage("grass", "tiles");

    // Parameters: layer name (or index) from Tiled, tileset, x, y
    const worldLayer = map.createLayer("Tile Layer 1", tileset, 0, 0);

    worldLayer.setCollisionByProperty({ collides: true });

    // this.cursors = this.input.keyboard.createCursorKeys();
    this.cursors = this.input.keyboard.addKeys(
      {
        W: Phaser.Input.Keyboard.KeyCodes.W,
        S: Phaser.Input.Keyboard.KeyCodes.S,
        A: Phaser.Input.Keyboard.KeyCodes.A,
        D: Phaser.Input.Keyboard.KeyCodes.D,
        UP: Phaser.Input.Keyboard.KeyCodes.UP,
        DOWN: Phaser.Input.Keyboard.KeyCodes.DOWN,
        LEFT: Phaser.Input.Keyboard.KeyCodes.LEFT,
        RIGHT: Phaser.Input.Keyboard.KeyCodes.RIGHT,
      }) as Cursors;

    this.hostPlayer = new Player(this, new Phaser.Math.Vector2(400, 350), /** isUserControlled = */ getIsHost(), this.cursors, worldLayer);
    this.peerPlayer = new Player(this, new Phaser.Math.Vector2(700, 350), /** isUserControlled = */ false, this.cursors, worldLayer);
    this.physics.add.collider(this.hostPlayer.player, this.peerPlayer.player);
  }

  update(time: number, delta: number) {
    this.hostPlayer.update(time, delta);
    this.peerPlayer.update(time, delta);

    if (getIsHost()) {
      sendGameUpdate({
        hostPlayerState: this.hostPlayer.getCurrentState(),
        peerPlayerState: this.peerPlayer.getCurrentState(),
        enemyStates: new Map(),
        mapState: { mapGrid: [] }
      });
    } else {
      sendPeerPlayerUpdate({
        cursors: {
          isLeftPressed: this.cursors.LEFT.isDown || this.cursors.A.isDown,
          isUpPressed: this.cursors.UP.isDown || this.cursors.W.isDown,
          isRightPressed: this.cursors.RIGHT.isDown || this.cursors.D.isDown,
          isDownPressed: this.cursors.DOWN.isDown || this.cursors.S.isDown,
        },
        mousePosition: [this.input.x, this.input.y]
      });
    }
  }
}