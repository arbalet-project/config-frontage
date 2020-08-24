import { Injectable } from '@angular/core';
import { StateService } from './state/state.service'

export interface JSONInterface {
  apps: Array<string>,
  general: {
    id: string,
    name: string
  },
  mapping: {},
  sunrise: {}
}

@Injectable({
  providedIn: 'root'
})
export class GenerateJsonService {

  constructor(public state: StateService) { }

  public generate(): JSONInterface {
    let json: JSONInterface = {
      apps: [],
      general: {
        name: this.state.name,
        id: this.state.id
      },
      mapping: {},
      sunrise: {}
    }

    // Fill apps
    this.state.frontageApp.forEach((value, key) => {
      if (value) {
        json.apps.push(key);
      }
    })

    // Fill Mapping
    console.log("TODO");

    return json;
  }
}
