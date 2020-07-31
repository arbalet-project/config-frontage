import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArtnetComponent } from './artnet/artnet.component';
import { FappComponent } from './fapp/fapp.component';
import { CalendarComponent } from './calendar/calendar.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  { path: '', redirectTo: '/artnet', pathMatch: 'full' },
  { path: 'artnet', component: ArtnetComponent },
  { path: 'fapp', component: FappComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: 'settings', component: SettingsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
