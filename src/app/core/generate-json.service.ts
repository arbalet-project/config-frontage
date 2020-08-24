import { Injectable } from '@angular/core';
import { StateService } from './state/state.service'

@Injectable({
  providedIn: 'root'
})
export class GenerateJsonService {

  constructor(public state : StateService) { }

  public generate() {
  }
}
