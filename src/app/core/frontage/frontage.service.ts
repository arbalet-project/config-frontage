import { Injectable } from '@angular/core';
import { Cell, Dimension } from './models/frontage';
import { Universe, Mode, FormResponse } from './models/universe';

@Injectable({
  providedIn: 'root'
})
export class FrontageService {
  public dimension: Dimension;
  public frontage: Array<Array<Cell>>;
  public universe: Array<Universe> = [];
  constructor() { }

  public fillCells(): void {
    // this.frontage = Array.from(Array(this.dimension.height), () => new Array(this.dimension.width).fill({
    //   disabled: false
    // }));
    this.frontage = new Array(this.dimension.height);
    for (let i = 0; i < this.dimension.height; i++) {
      this.frontage[i] = new Array(this.dimension.width);
      for (let j = 0; j < this.dimension.width; j++) {
        this.frontage[i][j] = { disabled: false };
      }
    }

    console.log("finish");

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
    this.frontage[line][column].disabled = true;
    console.log(this.frontage);
  }
}
