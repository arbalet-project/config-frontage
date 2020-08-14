import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FappComponent } from './fapp/fapp.component';
import { CalendarComponent } from './calendar/calendar.component';
import { SettingsComponent } from './settings/settings.component';

import { MaterialModule } from './core/material/material.module';
import { LayoutModule } from '@angular/cdk/layout';

import { FlexLayoutModule } from '@angular/flex-layout';
import { InitComponent } from './init/init.component';
import { FrontageComponent } from './artnet/frontage.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UniverseFormComponent } from './artnet/universe-form/universe-form.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FappComponent,
    CalendarComponent,
    SettingsComponent,
    FrontageComponent,
    UniverseFormComponent,
    InitComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    LayoutModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
