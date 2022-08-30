import Phaser from 'phaser';
import { Player } from './Player';
import type { GameState, PlayerState, PeerPlayerState } from 'src/lib/game_state';
import { getIsHost } from '../../globals';
import { sendGameUpdate, sendPeerPlayerUpdate } from '../../lib/connection';

export class GameScene extends Phaser.Scene {
  hostPlayer: Player;
  peerPlayer: Player;
  cursors: Phaser.Types.Input.Keyboard.CursorKeys;

  constructor() {
    super('GameScene');
  }

  syncGameState(gameState: GameState) {
    this.hostPlayer.setAngle(gameState.hostPlayerState.angle);
    this.hostPlayer.setVelocity(...gameState.hostPlayerState.velocity);
    this.hostPlayer.setTurretRotation(gameState.hostPlayerState.turretRotation);

    this.peerPlayer.setAngle(gameState.peerPlayerState.angle);
    this.peerPlayer.setVelocity(...gameState.peerPlayerState.velocity);
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

    this.cursors = this.input.keyboard.createCursorKeys();
    this.input.keyboard.addKeys('W,S,A,D');

    this.hostPlayer = new Player(this, new Phaser.Math.Vector2(400, 350), /** isUserControlled = */ getIsHost(), this.cursors, worldLayer);
    this.peerPlayer = new Player(this, new Phaser.Math.Vector2(700, 350), /** isUserControlled = */ false, this.cursors, worldLayer);
    if (getIsHost()) {
      this.physics.add.collider(this.hostPlayer.player, this.peerPlayer.player);
    }
  }

  update(time: number, delta: number) {
    this.hostPlayer.update(time, delta);
    this.peerPlayer.update(time, delta);

    if (getIsHost()) {
      const hostPlayerState: PlayerState = {
        position: [this.hostPlayer.player.body.position.x, this.hostPlayer.player.body.position.y],
        velocity: [this.hostPlayer.player.body.velocity.x, this.hostPlayer.player.body.velocity.y],
        angle: this.hostPlayer.player.angle,
        turretRotation: this.hostPlayer.turret.rotation,
        health: 0,
        isDead: false,
      };

      const peerPlayerState: PlayerState = {
        position: [this.peerPlayer.player.body.position.x, this.peerPlayer.player.body.position.y],
        velocity: [this.peerPlayer.player.body.velocity.x, this.peerPlayer.player.body.velocity.y],
        angle: this.peerPlayer.player.angle,
        turretRotation: this.peerPlayer.turret.rotation,
        health: 0,
        isDead: false,
      };

      sendGameUpdate({ hostPlayerState, peerPlayerState, enemyStates: new Map(), mapState: { mapGrid: [] } });
    } else {
      sendPeerPlayerUpdate({
        cursors: {
          isLeftPressed: this.cursors.left.isDown, isUpPressed: this.cursors.up.isDown,
          isRightPressed: this.cursors.right.isDown, isDownPressed: this.cursors.down.isDown,
        },
        mousePosition: [this.input.x, this.input.y]
      });
    }
  }
}