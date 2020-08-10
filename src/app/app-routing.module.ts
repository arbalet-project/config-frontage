import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FappComponent } from './fapp/fapp.component';
import { CalendarComponent } from './calendar/calendar.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  { path: '', redirectTo: '/artnet', pathMatch: 'full' },
  { path: 'fapp', component: FappComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'artnet', loadChildren: () => import('./artnet/artnet.module').then(m => m.ArtnetModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
