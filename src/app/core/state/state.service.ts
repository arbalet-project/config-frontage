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
  /**
    * Boolean to know if the app is initialized (form to this dimension filled)
    */
  public initiliazed = false;
  /**
   * Listing of all frontage application.
   * The first argument is the name of the app.
   * The second is the boolean to illustrate if the app is activated.
   */
  public frontageApp = new Map<string, boolean>([
    ['Flags', true],
    ['RandomFlashing', true],
    ['SweepRand', true],
    ['SweepAsync', true],
    ['Tetris', true],
    ['Snake', true],
    ['Drawing', true]
  ]);

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

  /**
   * Toggle the activated boolean of one frontage application.
   *
   * @param name Name of the frontage application to toogle.
   * @throws If the name of the frontage app is not knows.
   */
  updateStatusFApp(name: string): void {
    if (this.frontageApp.has(name)) {
      this.frontageApp.set(name, !this.frontageApp.get(name));
    } else {
      throw Error("The name of the frontage app is not known")
    }
  }
}
