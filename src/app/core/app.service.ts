import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  /**
   * Boolean to know if the creation form is filled a first time
   */
  public initiliazed = false;

  public frontageApp = new Map<string, boolean>()

  constructor() {
    this.frontageApp.set('Flags', true);
    this.frontageApp.set('RandomFlashing', true);
    this.frontageApp.set('SweepRand', true);
    this.frontageApp.set('SweepAsync', true);
    this.frontageApp.set('Tetris', true);
    this.frontageApp.set('Snake', true);
    this.frontageApp.set('Drawing', true);
  }

  updateStatusFApp(name: string) {
    if (this.frontageApp.has(name)) {
      this.frontageApp.set(name, !this.frontageApp.get(name));
    } else {
      console.error("The name of the frontage app is not known");
    }
  }
}
