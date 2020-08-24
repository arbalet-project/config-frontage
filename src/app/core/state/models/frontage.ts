export interface Dimension {
  width: number;
  height: number;
}

export interface Cell {
  disabled: boolean;
  address: number;
  universeId: number;
}

export enum Direction {
  LEFT,
  RIGHT
}

export interface Position {
  column: number;
  line: number;
}
