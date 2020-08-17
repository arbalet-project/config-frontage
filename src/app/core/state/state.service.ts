import { Injectable } from '@angular/core';
import { Dimension, ColorMode } from './models/frontage';
import { Side } from './side';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  public dimension: Dimension;
  public sides: Array<Side> = [];

  constructor() {
  }

  public addSide(name : string) {
    this.sides.push(new Side(this.dimension.width, this.dimension.height, name));
  }

  public getAllMode(): Array<string> {
    return Object.keys(ColorMode).filter(k => typeof ColorMode[k as any] === 'number').map(v => v.toLowerCase());
  }

  public addUniverse() {

  }

}
