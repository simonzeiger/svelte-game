import Phaser from 'phaser';

type SpriteFactory = (x: number, y: number, texture: string | Phaser.Textures.Texture, frame?: string | number) => Phaser.GameObjects.Sprite;

const PLAYER_SPEED = 300;
const PLAYER_DECEL = 4;
const ANGLE_DELTA = 4;

export class Player {
  static preload(scene: Phaser.Scene) {
    scene.load.atlas('tanks', 'src/assets/characters/tank/tanks.png', 'src/assets/characters/tank/tanks.json');
  }

  player: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody;


  private currentSpeed: number;
  private shadow: Phaser.GameObjects.Sprite;
  turret: Phaser.GameObjects.Sprite;

  constructor(
    private scene: Phaser.Scene,
    initialPos: Phaser.Math.Vector2,
    private isUserControlled: boolean,
    private cursors: Phaser.Types.Input.Keyboard.CursorKeys,
    collider: Phaser.Tilemaps.TilemapLayer,
  ) {
    this.player = scene.physics.add.sprite(initialPos.x, initialPos.y, "tanks", "tank1");

    this.player.setOrigin(0.5, 0.5);

    scene.physics.add.collider(this.player, collider);

    const animConfig = {
      key: 'move',
      frames: this.player.anims.generateFrameNames('tanks', {
        prefix: 'tank',
        start: 1,
        end: 6,
      }),
      frameRate: 20,
      repeat: -1
    };

    this.player.anims.create(animConfig);
    this.player.play('move');

    this.shadow = scene.add.sprite(0, 0, "tanks", "shadow");
    this.shadow.setOrigin(.5, .5);

    this.turret = scene.add.sprite(0, 0, 'tanks', 'turret');
    this.turret.setOrigin(0.3, 0.5);

    this.shadow.setDepth(1);
    this.player.setDepth(2);
    this.turret.setDepth(3);
  }

  setAngle(angle: number) {
    this.player.angle = angle;
  }

  setVelocity(x: number, y: number) {
    this.player.body.setVelocity(x, y)
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

    return this.player.angle + (ANGLE_DELTA * multi);
  }

  computePlayerVelocity(downPressed: boolean, upPressed: boolean) {
    if (upPressed) {
      this.currentSpeed = PLAYER_SPEED;
    }
    else {
      if (this.currentSpeed > 0) {
        this.currentSpeed -= PLAYER_DECEL;
      }
    }

    if (this.currentSpeed > 0) {
      return this.scene.physics.velocityFromRotation(this.player.rotation, this.currentSpeed);
    } else {
      return Phaser.Math.Vector2.ZERO;
    }
  }

  computeTurretRotation(mouseX: number, mouseY: number) {
    return Phaser.Math.Angle.Between(this.player.x, this.player.y, mouseX, mouseY);
  }

  update(time: number, delta: number) {
    if (this.isUserControlled) {
      this.setAngle(this.computePlayerAngle(this.cursors.left.isDown, this.cursors.right.isDown));
      const computedVelocity = this.computePlayerVelocity(this.cursors.down.isDown, this.cursors.up.isDown);
      this.setVelocity(computedVelocity.x, computedVelocity.y);
    }

    this.shadow.x = this.player.x;
    this.shadow.y = this.player.y;
    this.shadow.rotation = this.player.rotation;

    this.turret.x = this.player.x;
    this.turret.y = this.player.y;
    if (this.isUserControlled) {
      this.setTurretRotation(this.computeTurretRotation(this.scene.input.x, this.scene.input.y));
    }
  }
}