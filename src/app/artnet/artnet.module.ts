import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ArtnetRoutingModule } from './artnet-routing.module';
import { FrontageComponent } from './frontage/frontage.component';
import { CreationFormComponent } from './creation-form/creation-form.component';

import { MaterialModule } from './../material/material.module';

@NgModule({
  declarations: [CreationFormComponent, FrontageComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ArtnetRoutingModule,
    MaterialModule
  ]
})
export class ArtnetModule { }
