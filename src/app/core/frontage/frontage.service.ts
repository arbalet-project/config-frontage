import { Injectable } from '@angular/core';
import { Cell, Dimension } from './models/frontage';
import { Universe, Mode, FormResponse } from './models/universe';

@Injectable({
  providedIn: 'root'
})
export class FrontageService {
  public dimension: Dimension;
  public matrix: Array<Array<Cell>>;
  public universe: Array<Universe> = [];
  constructor() { }

  public fillCells(): void {
    this.matrix = new Array(this.dimension.height);
    for (let i = 0; i < this.dimension.height; i++) {
      this.matrix[i] = new Array(this.dimension.width);
      for (let j = 0; j < this.dimension.width; j++) {
        this.matrix[i][j] = { disabled: false };
      }
    }
  }

  public getAllMode(): Array<string> {
    return Object.keys(Mode).filter(k => typeof Mode[k as any] === 'number').map(v => v.toLowerCase());
  }

  public addUniverse(response: FormResponse): void {
    const univ: Universe = {
      id: this.universe.length + 1,
      address: response.address,
      gap: response.step,
      color: Mode.RGB
    };

    switch (response.mode) {
      case 'rgb':
        univ.color = Mode.RGB;
        break;
      case 'grb':
        univ.color = Mode.GRB;
        break;
      default:
        console.error('an error occured, wrong choice for the mode.');
    }

    this.universe.push(univ);
  }

  public turnOffCell(column: number, line: number) {
    this.matrix[line][column].disabled = !this.matrix[line][column].disabled;
  }
}
