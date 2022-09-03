import Phaser from 'phaser';

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

class Bullet extends Phaser.Physics.Arcade.Sprite {
  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y, 'bullet');
  }

  reset(x: number, y: number) {
    this.body.reset(x, y);
  }

  fire(rotation: number) {
    this.setRotation(rotation);
    this.setActive(true);
    this.setVisible(true);

    this.scene.physics.velocityFromRotation(
      this.rotation, BULLET_SPEED, this.body.velocity);
  }

  preUpdate(time: number, delta: number) {
    super.preUpdate(time, delta);
    this.setRotation(this.body.velocity.angle());

    // TODO remove after two bounces.
  }
}