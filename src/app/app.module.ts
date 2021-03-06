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
import { ConfigComponent } from './artnet/config.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UniverseFormComponent } from './artnet/universe-form/universe-form.component';
import { HttpClientModule } from '@angular/common/http';
import { FrontageCanvasComponent } from './artnet/frontage-canvas/frontage-canvas.component';
import { SideFormComponent } from './artnet/side-form/side-form.component';
import { GenerateJsonDialogComponent } from './components/generate-json-dialog/generate-json-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    FappComponent,
    CalendarComponent,
    SettingsComponent,
    ConfigComponent,
    UniverseFormComponent,
    InitComponent,
    FrontageCanvasComponent,
    SideFormComponent,
    GenerateJsonDialogComponent
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
