import { getGame } from "../phaser/index";
import type { GameScene } from "../phaser/scenes/Game";

type Vector2 = [number, number];

export enum AttackType {
  BULLET,
  BOMB,
}

interface EnemyState {
  direction: Vector2;
  pos: Vector2;
  attack?: AttackType;
  health: number;
  isDead: boolean;
}

interface TileState {
  isBroken: boolean;
}

interface MapState {
  mapGrid: TileState[][];
}

export interface BulletState {
  rotation: number;
  position: Vector2;
  visible: boolean;
}

export interface PlayerState {
  position: Vector2;
  angle: number;
  turretRotation: number;
  health: number;
  isDead: boolean;
  attack?: AttackType;
}

export interface PeerPlayerState {
  keys: { isLeftPressed: boolean, isUpPressed: boolean, isRightPressed: boolean, isDownPressed: boolean };
  mouse: { position: Vector2, leftPressed: boolean, rightPressed: boolean };
}

export interface GameState {
  hostPlayerState: PlayerState;
  peerPlayerState: PlayerState;
  bulletState: BulletState[];
  enemyStates: Map<number, EnemyState>;
  mapState: MapState;
}

let gameScene: GameScene;
function resolveGameScene() {
  if (!gameScene) {
    gameScene = getGame().scene.getScene("GameScene") as GameScene;
  }
  return gameScene;
}

export function syncGameState(newState: string) {
  resolveGameScene().syncGameState(JSON.parse(newState) as GameState);
}

export function syncPeerPlayer(newState: string) {
  resolveGameScene().syncPeerPlayerState(JSON.parse(newState) as PeerPlayerState);
}