import Phaser from 'phaser';
import type { BulletGroup } from './bullet';
import type { PlayerState } from '../../lib/game_state';
import { AttackType } from '../../lib/game_state';
import type { Cursors } from '../type_defs';

const PLAYER_SPEED = 300;
const PLAYER_DECEL = 16;
const ANGLE_DELTA = 3;
const MAX_PLAYER_HEALTH = 3;
const MAX_BULLETS = 8;

const HOST_INIT_POS = new Phaser.Math.Vector2(400, 650);
const PEER_INIT_POS = new Phaser.Math.Vector2(1500, 650);

export class Player extends Phaser.Physics.Arcade.Sprite {
  private currentSpeed: number = 0;
  private shadow: Phaser.GameObjects.Sprite;
  private isReverse = false;
  private didFire = false;
  private health = MAX_PLAYER_HEALTH;
  private isDead = false;
  private bulletCount = MAX_BULLETS;
  turret: Phaser.GameObjects.Sprite;

  constructor(
    public scene: Phaser.Scene,
    private isHostPlayer: boolean,
    private isUserControlled: boolean,
    private cursors: Cursors,
    private pointer: Phaser.Input.Pointer,
    private bullets: BulletGroup,
  ) {
    const initialPos = isHostPlayer ? HOST_INIT_POS : PEER_INIT_POS;
    const spriteName = isHostPlayer ? "tanks" : "tanks_peer";

    super(scene, initialPos.x, initialPos.y, spriteName, "tank1");

    scene.add.existing(this);
    scene.physics.add.existing(this);

    this.setPushable(false);
    this.setOrigin(0.5, 0.5);

    const animConfig = {
      key: 'move',
      frames: this.anims.generateFrameNames(spriteName, {
        prefix: 'tank',
        start: 1,
        end: 6,
      }),
      frameRate: 20,
      repeat: -1
    };

    this.anims.create(animConfig);
    this.play('move');

    this.shadow = this.scene.add.sprite(0, 0, spriteName, "shadow");
    this.shadow.setOrigin(.5, .5);

    this.turret = this.scene.add.sprite(0, 0, spriteName, 'turret');
    this.turret.setOrigin(0.3, 0.5);

    this.shadow.setDepth(1);
    this.setDepth(2);
    this.turret.setDepth(3);
  }

  reset() {
    const initialPos = this.isHostPlayer ? HOST_INIT_POS : PEER_INIT_POS;
    this.setPosition(initialPos.x, initialPos.y);
    this.isDead = false;
    this.health = MAX_PLAYER_HEALTH;
    this.currentSpeed = 0;
    this.shadow.setVisible(true);
    this.turret.setVisible(true);
    this.setActive(true);
    this.setVisible(true);
  }

  takeDamage() {
    this.health--;
    if (this.health <= 0) {
      this.kill();
    }
  }

  getIsDead() {
    return this.isDead;
  }

  kill() {
    this.isDead = true;
    this.shadow.setVisible(false);
    this.turret.setVisible(false);
    this.setActive(false);
    this.setVisible(false);
  }

  fire() {
    if (!this.didFire) {
      this.bulletCount--;
      this.didFire = true;
      this.bullets.fireBullet(this.x, this.y, this.turret.rotation);

      if (this.bulletCount <= 0) {
        this.scene.time.delayedCall(1200, () => {
          this.didFire = false;
          this.bulletCount = MAX_BULLETS;
        });
      } else {
        this.scene.time.delayedCall(300, () => this.didFire = false);
      }
    }
  }

  getCurrentState(): PlayerState {
    return {
      position: [this.x, this.y],
      angle: this.angle,
      turretRotation: this.turret.rotation,
      health: 0,
      isDead: this.isDead,
      attack: this.didFire ? AttackType.BULLET : undefined,
    };
  }

  setTurretRotation(rotation: number) {
    this.turret.rotation = rotation;
  }

  setAttack(leftButtonDown: boolean, rightButtonDown: boolean) {
    if (leftButtonDown) {
      this.fire();
    }
  }

  computePlayerAngle(leftPressed: boolean, rightPressed: boolean) {
    let multi: number;
    if (leftPressed) {
      multi = -1;
    }
    else if (rightPressed) {
      multi = 1;
    } else {
      multi = 0;
    }

    if (this.isReverse) {
      multi *= -1;
    }

    return this.angle + (ANGLE_DELTA * multi);
  }

  computePlayerVelocity(downPressed: boolean, upPressed: boolean) {
    if (upPressed || downPressed) {
      this.currentSpeed = PLAYER_SPEED;
      if (downPressed) {
        this.isReverse = true;
      } else {
        this.isReverse = false;
      }
    }
    else {
      if (this.currentSpeed > 0) {
        this.currentSpeed -= PLAYER_DECEL;
      }
    }

    if (this.currentSpeed > 0) {
      return this.scene.physics.velocityFromRotation(
        this.rotation, (this.isReverse ? -1 : 1) * this.currentSpeed);
    } else {
      this.isReverse = false;
      return Phaser.Math.Vector2.ZERO;
    }
  }

  computeTurretRotation(mouseX: number, mouseY: number) {
    return Phaser.Math.Angle.Between(this.x, this.y, mouseX, mouseY);
  }

  preUpdate(time: number, delta: number) {
    super.preUpdate(time, delta);

    if (this.isUserControlled) {
      this.setAngle(this.computePlayerAngle(this.cursors.LEFT.isDown || this.cursors.A.isDown,
        this.cursors.RIGHT.isDown || this.cursors.D.isDown));
      const computedVelocity = this.computePlayerVelocity(this.cursors.DOWN.isDown || this.cursors.S.isDown,
        this.cursors.UP.isDown || this.cursors.W.isDown);
      this.setVelocity(computedVelocity.x, computedVelocity.y);
      this.setAttack(this.pointer.leftButtonDown(), this.pointer.rightButtonDown());
    }

    this.shadow.x = this.x;
    this.shadow.y = this.y;
    this.shadow.rotation = this.rotation;

    this.turret.x = this.x;
    this.turret.y = this.y;
    if (this.isUserControlled) {
      this.setTurretRotation(this.computeTurretRotation(this.scene.input.x, this.scene.input.y));
    }
  }
}