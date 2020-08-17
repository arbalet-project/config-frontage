import { Injectable } from '@angular/core';
import { Dimension, ColorMode, Universe, FormResponse } from './models/frontage';
import { Side } from './side';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  public dimension: Dimension;
  public sides: Array<Side> = [];
  public universe: Array<Universe> = [];

  constructor() { }

  public addSide(name: string): void {
    this.sides.push(new Side(this.dimension.width, this.dimension.height, name));
  }

  public getAllColorMode(): Array<string> {
    return Object.keys(ColorMode).filter(k => typeof ColorMode[k as any] === 'number').map(v => v.toLowerCase());
  }

  public addUniverse(response: FormResponse): void {
    const univ: Universe = {
      id: this.universe.length + 1,
      address: response.address,
      gap: response.step,
      color: ColorMode.RGB
    };

    switch (response.mode) {
      case 'rgb':
        univ.color = ColorMode.RGB;
        break;
      case 'grb':
        univ.color = ColorMode.GRB;
        break;
      default:
        console.error('an error occured, wrong choice for the mode.');
    }

    this.universe.push(univ);
  }

}
