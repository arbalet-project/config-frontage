import { Injectable } from '@angular/core';
import { Cell } from './models/cell';
import { Universe, Mode, formResponse } from './models/universe';

@Injectable({
  providedIn: 'root'
})
export class FrontageService {

  public width: number;
  public height: number;
  public cells: Array<Array<Cell>>;
  public universe: Array<Universe> = [];
  constructor() { }

  getAllMode() {
    return Object.keys(Mode).filter(k => typeof Mode[k as any] === "number").map(v => v.toLowerCase());
  }

  addUniverse(response: formResponse) {
    let univ: Universe = {
      id: this.universe.length + 1,
      address: response.address,
      gap: response.step,
      color: Mode.RGB
    };

    switch (response.mode) {
      case "rgb":
        univ.color = Mode.RGB
        break;
      case "grb":
        univ.color = Mode.GRB
        break;
      default:
        console.error("an error occured, wrong choice for the mode.")
    }

    this.universe.push(univ);
  }
}
