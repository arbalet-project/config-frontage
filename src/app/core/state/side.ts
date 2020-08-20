import { Cell, Direction } from './models/frontage';
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

  public turnOffCell(column: number, line: number): void {
    this.frontage[line][column].disabled = !this.frontage[line][column].disabled;
    this.frontage[line][column].universeId = -1;
    this.frontage[line][column].address = -1;
  }

  public updateAddress(column: number, line: number, dir: Direction, universe: Universe): void {
    if (universe === undefined) { return; }

    switch (dir) {
      case Direction.LEFT:
        for (let i = column; i >= 0; i--) {
          if (!this.frontage[line][i].disabled) {
            this.frontage[line][i].address = universe.getNewAddress(this.uuid);
            this.frontage[line][i].universeId = universe.id;
          }
        }
        break;
      case Direction.RIGHT:
        for (let i = column; i < this.frontage[line].length; i++) {
          if (!this.frontage[line][i].disabled) {
            this.frontage[line][i].address = universe.getNewAddress(this.uuid);
            this.frontage[line][i].universeId = universe.id;
          }
        }
        break;
      default:
        console.error("Wrong direction provided (or not implemented)");
    }
  }
}
