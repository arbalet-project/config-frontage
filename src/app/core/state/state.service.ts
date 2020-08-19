import { Injectable } from '@angular/core';
import { Dimension } from './models/frontage';
import { Side } from './side';
import { Universe, ColorMode, FormResponse } from './models/universe';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  /**
   * @description Dimension (number columns and rows) of all sides.
   */
  public dimension: Dimension;

  /**
   * @description Represent the different side handle by the website.
   */
  public sides: Array<Side> = [];
  /**
   * @description Array of all universe needs by the app.
   */
  public universe: Array<Universe> = [];

  /**
   * @description Public name of the frontage.
   */
  public name: string;
  /**
   * @description Private name of the frontage.
   */
  public id: string;

  constructor() { }

  public addSide(name: string): void {
    this.sides.push(new Side(this.dimension.width, this.dimension.height, name));
  }

  public getAllColorMode(): Array<string> {
    return Object.keys(ColorMode).filter(k => typeof ColorMode[k as any] === 'number').map(v => v.toLowerCase());
  }

  public addUniverse(response: FormResponse): void {
    const univ = new Universe(
      this.universe.length + 1,
      response.address,
      response.step
    );

    switch (response.mode) {
      case 'rgb':
        univ.color = ColorMode.RGB;
        break;
      case 'grb':
        univ.color = ColorMode.GRB;
        break;
      default:
        console.error('an error occured, wrong choice for the color mode.');
    }
    this.sides.forEach(side => univ.registerSide(side.uuid));

    this.universe.push(univ);
  }

}
