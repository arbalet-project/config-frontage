import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FrontageComponent } from './frontage/frontage.component';
import { CreationFormComponent } from './creation-form/creation-form.component';
import { InitGuard } from '../guard/init.guard';

const routes: Routes = [
  { path: '', canActivate: [InitGuard] },
  { path: 'creation', component: CreationFormComponent},
  { path: 'frontage', component: FrontageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArtnetRoutingModule { }
