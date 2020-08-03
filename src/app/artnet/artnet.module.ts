import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArtnetRoutingModule } from './artnet-routing.module';
import { FrontageComponent } from './frontage/frontage.component';
import { CreationFormComponent } from './creation-form/creation-form.component';


@NgModule({
  declarations: [CreationFormComponent, FrontageComponent],
  imports: [
    CommonModule,
    ArtnetRoutingModule
  ]
})
export class ArtnetModule { }
