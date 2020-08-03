import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  /**
   * Boolean to know if the creation form is filled a first time
   */
  public initiliazed: boolean = false;

  constructor() { }
}
