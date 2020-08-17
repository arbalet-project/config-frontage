export interface Dimension {
  width: number;
  height: number;
}

export interface Cell {
  disabled: boolean;
}

/**************************************
 *             Universe               *
 **************************************/

export enum ColorMode {
  RGB,
  GRB
}

export interface Universe {
  id: number;
  address: number;
  gap: number;
  color: ColorMode;
}
