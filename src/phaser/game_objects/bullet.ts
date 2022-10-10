import Phaser from 'phaser';
import type { BulletState } from 'src/lib/game_state';

export class BulletGroup extends Phaser.Physics.Arcade.Group {
  constructor(scene: Phaser.Scene) {
    // Call the super constructor, passing in a world and a scene
    super(scene.physics.world, scene);

    // Initialize the group
    this.createMultiple({
      classType: Bullet,
      frameQuantity: 30, // Create 30 instances in the pool
      active: false,
      visible: false,
      key: 'bullet'
    })
  }

  setState(state: BulletState[]) {
    const children = this.getChildren() as Bullet[];
    for (let i = 0; i < state.length; i++) {
      const bullet = children[i];
      if (state[i].visible) {
        bullet.setPosition(...state[i].position);
        bullet.setRotation(state[i].rotation);
        bullet.setActive(true);
        bullet.setVisible(true);
      } else {
        bullet.setActive(false);
        bullet.setVisible(false);
      }
    }
  }

  getState(): BulletState[] {
    return this.getChildren().map((bullet: Bullet) => {
      return {
        rotation: bullet.rotation,
        position: [bullet.x, bullet.y],
        visible: bullet.visible,
      };
    });
  }

  fireBullet(initX: number, initY: number, rotation: number) {
    const bullet = this.getFirstDead(false);

    if (bullet) {
      bullet.setBounce(1);
      bullet.reset(initX, initY);
      bullet.fire(rotation);
    }
  }
}

const BULLET_SPEED = 600;
const MAX_BOUNCES = 2;

export class Bullet extends Phaser.Physics.Arcade.Sprite {
  userFired = false;
  private bounces = 0;

  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y, 'bullet');
  }

  onBounceOffWall() {
    if (this.bounces === MAX_BOUNCES) {
      this.setActive(false);
      this.setVisible(false);
      this.disableBody();
      this.bounces = 0;
      this.userFired = false;
    } else {
      this.bounces++;
    }
  }

  disable() {
    this.setActive(false);
    this.setVisible(false);
    this.disableBody();
  }

  reset(x: number, y: number) {
    this.enableBody(true, x, y, true, true);
  }

  fire(rotation: number) {
    this.userFired = true;
    this.setRotation(rotation);
    this.setActive(true);
    this.setVisible(true);

    this.scene.physics.velocityFromRotation(
      this.rotation, BULLET_SPEED, this.body.velocity);
  }

  preUpdate(time: number, delta: number) {
    super.preUpdate(time, delta);
    if (this.userFired) {
      this.setRotation(this.body.velocity.angle());
    }
  }
}