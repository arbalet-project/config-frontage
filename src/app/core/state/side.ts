import { Cell, Direction, Position } from './models/frontage';
import { Universe } from './models/universe';
import { v4 } from 'uuid';
export class Side {
  public frontage: Array<Array<Cell>>;
  public uuid: string;
  constructor(width: number, height: number, public name: string) {
    this.frontage = new Array(height);

    for (let i = 0; i < height; i++) {
      this.frontage[i] = new Array(width);
      for (let j = 0; j < width; j++) {
        this.frontage[i][j] = {
          disabled: false,
          universeId: -1,
          address: -1
        };
      }
    }

    this.uuid = v4();
  }

  public turnOffCell(position: Position): void {
    this.frontage[position.line][position.column].disabled = !this.frontage[position.line][position.column].disabled;
  }

  public updateAddress(start: Position, end: Position, universe: Universe): void {
    if (universe === undefined) { return; }
    if (start.line == end.line) {
      let step = start.column < end.column ? 1 : -1;
      const cond = start.column < end.column
        ? (i) => { return i <= end.column; }
        : (i) => { return i >= end.column; }

      for (let i = start.column; cond(i); i = i + step) {
        if (!this.frontage[start.line][i].disabled) {
          this.frontage[start.line][i].address = universe.getNewAddress(this.uuid);
          this.frontage[start.line][i].universeId = universe.id;
        }
      }
    } else if (start.column == end.column) {
      let step = start.line < end.line ? 1 : -1;
      const cond = start.line < end.line
        ? (i) => { return i <= end.line; }
        : (i) => { return i >= end.line; }

      for (let i = start.line; cond(i); i = i + step) {
        if (!this.frontage[i][start.column].disabled) {
          this.frontage[i][start.column].address = universe.getNewAddress(this.uuid);
          this.frontage[i][start.column].universeId = universe.id;
        }
      }
    }
  }
}
