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
  direction: Vector2;
  pos: Vector2;
  health: number;
  isDead: boolean;
  attack?: PlayerAttack;
}

export interface GameState {
  // host player.
  playerState: PlayerState;
  enemyStates: Map<number, EnemyState>;
  mapState: MapState;
}

export function syncGameState(newState: GameState) {
  console.log(newState);
}

export function syncPeerPlayer(newState: PlayerState) {
  console.log(newState);
}