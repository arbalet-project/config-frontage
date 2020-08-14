import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FappComponent } from './fapp/fapp.component';
import { CalendarComponent } from './calendar/calendar.component';
import { SettingsComponent } from './settings/settings.component';
import { InitComponent } from './init/init.component';
import { FrontageComponent } from './artnet/frontage.component';
import { InitGuard } from './guard/init.guard';

const routes: Routes = [
  { path: '', component: InitComponent, canActivate: [InitGuard]},
  { path: 'config', component: FrontageComponent, canActivate: [InitGuard] },
  { path: 'fapp', component: FappComponent, canActivate: [InitGuard] },
  { path: 'calendar', component: CalendarComponent, canActivate: [InitGuard] },
  { path: 'settings', component: SettingsComponent, canActivate: [InitGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
