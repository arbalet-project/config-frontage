import { Component, ViewChild } from '@angular/core';
import { MatButtonToggleGroup } from '@angular/material/button-toggle';
import { MatDialog } from '@angular/material/dialog';
import { UniverseFormComponent } from './universe-form/universe-form.component';
import { SideFormComponent } from './side-form/side-form.component';
import { StateService } from '../core/state/state.service';
import { Side } from '../core/state/side';
import { FormResponse } from '../core/state/models/frontage';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
})
export class ConfigComponent {
  @ViewChild('tools') tools: MatButtonToggleGroup;

  constructor(public state: StateService, public dialog: MatDialog) { }

  addUniverse(): void {
    const dRef = this.dialog.open(UniverseFormComponent, {
      width: '350px'
    });

    dRef.afterClosed().subscribe((result: FormResponse) => {
      if (result) { this.state.addUniverse(result); }
    });
  }

  addSide(): void {
    const dRef = this.dialog.open(SideFormComponent, {
      width: '350px'
    });

    dRef.afterClosed().subscribe((result: { name: string }) => {
      if (result) { this.state.addSide(result.name); }
    });
  }

  updateCell(event: { column: number, line: number, side: Side }): void {
    if (event.column < 0 || event.line < 0) { return; }

    switch (this.tools.value) {
      case 'select':
        console.log('todo');
        break;
      case 'turn_off':
        event.side.turnOffCell(event.column, event.line);
        break;
      default:
        console.error('Tools not implemented');
    }
  }
}
