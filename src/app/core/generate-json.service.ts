import { Injectable } from '@angular/core';
import { StateService } from './state/state.service';
import { Side } from './state/side';
import { ColorMode } from './state/models/universe';

export interface Mapping {
  dmx: number;
  universe: number;
  colorMode: string;
  disabled: boolean;
}

export interface JSONInterface {
  apps: Array<string>;
  general: {
    id: string,
    name: string;
    description: string
  };
  mappings: Array<Array<Array<Mapping>>>;
  sunrise: {};
}

@Injectable({
  providedIn: 'root'
})
export class GenerateJsonService {

  constructor(public state: StateService) { }

  public generate(): JSONInterface {
    const json: JSONInterface = {
      apps: [],
      general: {
        name: this.state.name,
        id: this.state.id,
        description: this.state.description
      },
      mappings: [],
      sunrise: {}
    };

    // Fill apps
    this.state.frontageApp.forEach((value, key) => {
      if (value) {
        json.apps.push(key);
      }
    });

    // Fill Mapping
    this.state.sides.forEach(side => {
      json.mappings = new Array(side.frontage.length);
      for (let i = 0; i < side.frontage.length; i++) {
        json.mappings[i] = new Array(side.frontage[i].length);
        for (let j = 0; j < side.frontage[i].length; j++) {
          json.mappings[i][j] = new Array();
          const disabled = side.frontage[i][j].disabled;
          const uId = side.frontage[i][j].universeId;

          if (disabled) {
            json.mappings[i][j].push({
            dmx: -1,
            universe: -1,
            colorMode:'rgb',
            disabled : true
          });
          continue;
        }

          json.mappings[i][j].push({
            dmx: side.frontage[i][j].address,
            universe: uId,
            colorMode: this.state.universe[uId - 1].color === ColorMode.RGB ? 'rgb' : 'grb',
            disabled : disabled
          });
        }
      }
    });

    // Fill sunrise, sunset
    this.state.sunriseTime.forEach((value, key) => {
      json.sunrise[key] = value;
    });

    return json;
  }
}
