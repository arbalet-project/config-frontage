import { NgModule } from '@angular/core';

import { MatGridListModule } from '@angular/material/grid-list'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

const materialComponents = [
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatIconModule,
  MatMenuModule,
  MatToolbarModule,
  MatSidenavModule,
  MatGridListModule,
  MatListModule
];


@NgModule({
  imports: [materialComponents],
  exports: [materialComponents]
})
export class MaterialModule { }
