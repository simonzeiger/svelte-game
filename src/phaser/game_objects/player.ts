import Phaser from 'phaser';
import { BulletGroup } from './bullet';
import type { PlayerState } from 'src/lib/game_state';
import type { Cursors } from '../type_defs';

const PLAYER_SPEED = 300;
const PLAYER_DECEL = 16;
const ANGLE_DELTA = 3;

export class Player extends Phaser.Physics.Arcade.Sprite {
  private currentSpeed: number = 0;
  private shadow: Phaser.GameObjects.Sprite;
  private isReverse = false;
  private isFiring = false;
  turret: Phaser.GameObjects.Sprite;

  constructor(
    public scene: Phaser.Scene,
    initialPos: Phaser.Math.Vector2,
    private isUserControlled: boolean,
    private cursors: Cursors,
    private collider: Phaser.GameObjects.GameObject,
    private bullets: BulletGroup,
  ) {
    super(scene, initialPos.x, initialPos.y, "tanks", "tank1");

    scene.add.existing(this);
    scene.physics.add.existing(this);

    scene.physics.add.collider(this, collider);

    this.setPushable(false);
    this.setOrigin(0.5, 0.5);

    const animConfig = {
      key: 'move',
      frames: this.anims.generateFrameNames('tanks', {
        prefix: 'tank',
        start: 1,
        end: 6,
      }),
      frameRate: 20,
      repeat: -1
    };

    this.anims.create(animConfig);
    this.play('move');

    this.shadow = this.scene.add.sprite(0, 0, "tanks", "shadow");
    this.shadow.setOrigin(.5, .5);

    this.turret = this.scene.add.sprite(0, 0, 'tanks', 'turret');
    this.turret.setOrigin(0.3, 0.5);

    this.shadow.setDepth(1);
    this.setDepth(2);
    this.turret.setDepth(3);

    if (this.isUserControlled) {
      this.scene.input.on('pointerdown', (pointer) => {
        this.isFiring = true;
      });
    }
  }

  fire() {
    this.isFiring = true;
  }

  getCurrentState(): PlayerState {
    return {
      position: [this.x, this.y],
      angle: this.angle,
      turretRotation: this.turret.rotation,
      health: 0,
      isDead: false,
    };
  }

  setTurretRotation(rotation: number) {
    this.turret.rotation = rotation;
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
    }

    this.shadow.x = this.x;
    this.shadow.y = this.y;
    this.shadow.rotation = this.rotation;

    this.turret.x = this.x;
    this.turret.y = this.y;
    if (this.isUserControlled) {
      this.setTurretRotation(this.computeTurretRotation(this.scene.input.x, this.scene.input.y));
    }
    if (this.isFiring) {
      this.bullets.fireBullet(this.x, this.y, this.turret.rotation);
      this.isFiring = false;
    }
  }
}