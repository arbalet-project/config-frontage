import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  /**
   * Boolean to know if the creation form is filled a first time
   */
  public initiliazed = false;

  public frontageApp = new Map<string, boolean>([
    ['Flags', true],
    ['RandomFlashing', true],
    ['SweepRand', true],
    ['SweepAsync', true],
    ['Tetris', true],
    ['Snake', true],
    ['Drawing', true]
  ])

  constructor() {}

  updateStatusFApp(name: string) {
    if (this.frontageApp.has(name)) {
      this.frontageApp.set(name, !this.frontageApp.get(name));
    } else {
      console.error("The name of the frontage app is not known");
    }
  }
}
