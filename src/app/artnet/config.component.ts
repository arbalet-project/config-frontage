import { Component, ViewChild } from '@angular/core';
import { FrontageService } from 'src/app/core/frontage/frontage.service';
import { MatButtonToggleGroup } from '@angular/material/button-toggle';
import { FormResponse } from 'src/app/core/frontage/models/universe';
import { MatDialog } from '@angular/material/dialog';
import { UniverseFormComponent } from './universe-form/universe-form.component';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
})
export class ConfigComponent {
  @ViewChild('tools') tools: MatButtonToggleGroup;

  constructor(public frontage: FrontageService, public dialog: MatDialog) { }

  addUniverse(): void {
    const dRef = this.dialog.open(UniverseFormComponent, {
      width: '350px'
    });

    dRef.afterClosed().subscribe((result: FormResponse) => {
      if (result === undefined) {
        return;
      }
      this.frontage.addUniverse(result);
    });
  }

  updateCell(event: { column: number, line: number }): void {
    switch (this.tools.value) {
      case 'select':
        console.log('todo');
        break;
      case 'turn_off':
        this.frontage.turnOffCell(event.column, event.line);
        break;
      default:
        console.error('Tools not implemented');
    }
  }
}
