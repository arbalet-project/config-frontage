export enum Mode {
  RGB,
  GRB
}

export interface Universe {
  id: number;
  address: number;
  gap: number;
  color: Mode;
}

export interface FormResponse {
  address: number;
  step: number;
  mode: string;
}
