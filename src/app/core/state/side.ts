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
        this.frontage[i][j] = { disabled: false };
      }
    }

    this.uuid = v4();
  }

  public turnOffCell(column: number, line: number): void {
    this.frontage[line][column].disabled = !this.frontage[line][column].disabled;
  }

  public updateAddress(column: number, line: number, dir: Direction, universe: Universe): void {
    // TODO
    console.log('TODO');
  }
}
