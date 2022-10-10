import Phaser from 'phaser';
import { Player } from '../game_objects/player';
import { isGameOver, didWin } from '../../lib/game_state';
import type { GameState, PeerPlayerState } from '../../lib/game_state';
import { getIsHost } from '../../globals';
import { sendGameUpdate, sendPeerPlayerUpdate } from '../../lib/connection';
import type { Cursors } from '../type_defs';
import { BulletGroup, Bullet } from '../game_objects/bullet';

export const SCREEN_WIDTH = 1920;
export const SCREEN_HEIGHT = 1280;

export class GameScene extends Phaser.Scene {
  hostPlayer: Player;
  peerPlayer: Player;
  cursors: Cursors;
  bullets: BulletGroup;
  worldLayer: Phaser.Tilemaps.TilemapLayer;

  constructor() {
    super('GameScene');
  }

  playAgain() {
    this.hostPlayer.reset();
    this.peerPlayer.reset();
  }

  syncGameState(gameState: GameState) {
    this.hostPlayer.setAngle(gameState.hostPlayerState.angle);
    this.hostPlayer.setPosition(...gameState.hostPlayerState.position);
    this.hostPlayer.setTurretRotation(gameState.hostPlayerState.turretRotation);
    if (gameState.hostPlayerState.isDead) {
      this.hostPlayer.kill();
    }

    this.peerPlayer.setAngle(gameState.peerPlayerState.angle);
    this.peerPlayer.setPosition(...gameState.peerPlayerState.position);
    this.peerPlayer.setTurretRotation(gameState.peerPlayerState.turretRotation);
    if (gameState.peerPlayerState.isDead) {
      this.peerPlayer.kill();
    }

    this.bullets.setState(gameState.bulletState);
  }

  syncPeerPlayerState(peerPlayerState: PeerPlayerState) {
    this.peerPlayer.setAngle(this.peerPlayer.computePlayerAngle(
      peerPlayerState.keys.isLeftPressed, peerPlayerState.keys.isRightPressed));
    const computedVelocity = this.peerPlayer.computePlayerVelocity(
      peerPlayerState.keys.isDownPressed, peerPlayerState.keys.isUpPressed);
    this.peerPlayer.setVelocity(computedVelocity.x, computedVelocity.y);
    this.peerPlayer.setTurretRotation(this.peerPlayer.computeTurretRotation(...peerPlayerState.mouse.position));
    this.peerPlayer.setAttack(peerPlayerState.mouse.leftPressed, peerPlayerState.mouse.rightPressed);
  }

  preload() {
    this.load.image('tiles', 'src/assets/tilesets/grass.png');
    this.load.tilemapTiledJSON("map", "src/assets/tilemaps/map.json");
    this.load.atlas('tanks', 'src/assets/characters/tank/tanks.png', 'src/assets/characters/tank/tanks.json');
    this.load.atlas('tanks_peer', 'src/assets/characters/tank/tanks_peer.png', 'src/assets/characters/tank/tanks.json');
    this.load.image('bullet', 'src/assets/characters/bullet.png');
  }

  create() {
    const map = this.make.tilemap({ key: "map", tileHeight: 32, tileWidth: 32, });

    // Parameters are the name you gave the tileset in Tiled and then the key of the tileset image in
    // Phaser's cache (i.e. the name you used in preload)
    const tileset = map.addTilesetImage("grass", "tiles");

    // Parameters: layer name (or index) from Tiled, tileset, x, y
    this.worldLayer = map.createLayer("Tile Layer 1", tileset, 0, 0).setScale(2);

    this.worldLayer.setCollisionByProperty({ collides: true });

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

    this.bullets = new BulletGroup(this);


    this.initPlayers();
    this.initColliders();
  }

  initPlayers() {
    this.hostPlayer = new Player(
      this,
      /** isHostPlayer = */ true,
      /** isUserControlled = */ getIsHost(),
      this.cursors,
      this.input.activePointer,
      this.bullets
    );

    this.peerPlayer = new Player(
      this,
      /** isHostPlayer = */ false,
      /** isUserControlled = */ false,
      this.cursors,
      this.input.activePointer,
      this.bullets
    );
  }

  initColliders() {
    this.physics.add.collider(this.peerPlayer, this.worldLayer);
    this.physics.add.collider(this.hostPlayer, this.worldLayer);

    if (getIsHost()) {
      this.physics.add.collider(this.bullets, this.peerPlayer, (_, bullet as Bullet) => {
        bullet.setVisible(false);
        bullet.setActive(false);
        bullet.disableBody();
        this.peerPlayer.takeDamage();
      });

      this.physics.add.collider(this.bullets, this.hostPlayer, (_, bullet as Bullet) => {
        bullet.setVisible(false);
        bullet.setActive(false);
        bullet.disableBody();
        this.hostPlayer.takeDamage();
      });
    }

    this.physics.add.collider(this.bullets, this.worldLayer, (bullet as Bullet, ) => {
      bullet.onBounceOffWall();
    });

    this.physics.add.collider(this.hostPlayer, this.peerPlayer);
  }

  update(time: number, delta: number) {
    super.update(time, delta);

    if (this.peerPlayer.getIsDead() || this.hostPlayer.getIsDead()) {
      isGameOver.set(true);
      if (getIsHost()) {
        if (this.peerPlayer.getIsDead()) {
          didWin.set(true);
        } else {
          didWin.set(false);
        }
      } else {
        if (this.hostPlayer.getIsDead()) {
          didWin.set(true);
        } else {
          didWin.set(false);
        }
      }
    }

    if (getIsHost()) {
      sendGameUpdate({
        hostPlayerState: this.hostPlayer.getCurrentState(),
        peerPlayerState: this.peerPlayer.getCurrentState(),
        enemyStates: new Map(),
        mapState: { mapGrid: [] },
        bulletState: this.bullets.getState(),
      });
    } else {
      sendPeerPlayerUpdate({
        keys: {
          isLeftPressed: this.cursors.LEFT.isDown || this.cursors.A.isDown,
          isUpPressed: this.cursors.UP.isDown || this.cursors.W.isDown,
          isRightPressed: this.cursors.RIGHT.isDown || this.cursors.D.isDown,
          isDownPressed: this.cursors.DOWN.isDown || this.cursors.S.isDown,
        },
        mouse: {
          position: [this.input.x, this.input.y],
          leftPressed: this.input.activePointer.leftButtonDown(),
          rightPressed: this.input.activePointer.rightButtonDown(),
        },
      });
    }
  }
}