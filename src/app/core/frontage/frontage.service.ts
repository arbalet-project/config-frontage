import { Injectable } from '@angular/core';
import { Cell } from './models/cell';
@Injectable({
  providedIn: 'root'
})
export class FrontageService {

  public width: number;
  public height: number;
  public cells: Array<Array<Cell>>;

  constructor() { }
}
