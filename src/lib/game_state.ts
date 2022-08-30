import { getGame } from "../phaser/index";
import type { GameScene } from "../phaser/scenes/Game";

type Vector2 = [number, number];

enum AttackType {
  BULLET,
  BOMB,
}

interface PlayerMove {
  x: number;
  y: number;
}

interface PlayerAttack {
  type: AttackType;
}

interface EnemyAttack {
  type: AttackType;
}

interface EnemyState {
  direction: Vector2;
  pos: Vector2;
  attack?: EnemyAttack;
  health: number;
  isDead: boolean;
}

interface TileState {
  isBroken: boolean;
}

interface MapState {
  mapGrid: TileState[][];
}

export interface PlayerState {
  position: Vector2;
  velocity: Vector2;
  angle: number;
  turretRotation: number;
  health: number;
  isDead: boolean;
  attack?: PlayerAttack;
}

export interface PeerPlayerState {
  cursors: { isLeftPressed: boolean, isUpPressed: boolean, isRightPressed: boolean, isDownPressed: boolean };
  mousePosition: Vector2;
}

export interface GameState {
  hostPlayerState: PlayerState;
  peerPlayerState: PlayerState;
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