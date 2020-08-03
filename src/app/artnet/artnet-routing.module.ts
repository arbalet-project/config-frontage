import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FrontageComponent } from './frontage/frontage.component';
import { CreationFormComponent } from './creation-form/creation-form.component';

const routes: Routes = [
  { path: '', component: CreationFormComponent },
  { path: 'frontage', component: FrontageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArtnetRoutingModule {}
