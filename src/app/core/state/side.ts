import { Cell, Universe } from "./models/frontage";

export class Side {
  public frontage: Array<Array<Cell>>

  constructor(width: number, height: number, public name : string) {
    this.frontage = new Array(height);
    const row = [];
    for (let i = 0; i < height; i++) {
      this.frontage[i] = new Array(width);
      for (let j = 0; j < width; j++) {
        this.frontage[i][j] = { disabled: false };
      }
    }
  }

  public turnOffCell(column: number, line: number) {
    this.frontage[line][column].disabled = !this.frontage[line][column].disabled;
  }
}
