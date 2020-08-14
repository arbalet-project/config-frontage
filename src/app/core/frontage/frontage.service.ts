import { Injectable } from '@angular/core';
import { Cell } from './models/cell';
import { Universe, Mode } from './models/universe';

@Injectable({
  providedIn: 'root'
})
export class FrontageService {

  public width: number;
  public height: number;
  public cells: Array<Array<Cell>>;
  public Universe: Array<Universe>
  constructor() { }

  getAllMode() {
    return Object.keys(Mode).filter(k => typeof Mode[k as any] === "number").map(v => v.toLowerCase());
  }
}
