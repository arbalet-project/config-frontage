import { Component, ViewChild } from '@angular/core';
import { MatButtonToggleGroup } from '@angular/material/button-toggle';
import { MatDialog } from '@angular/material/dialog';
import { UniverseFormComponent } from './universe-form/universe-form.component';
import { SideFormComponent } from './side-form/side-form.component';
import { StateService } from '../core/state/state.service';
import { Side } from '../core/state/side';
import { Direction } from '../core/state/models/frontage';
import { FormResponse } from '../core/state/models/universe';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.scss']
})
export class ConfigComponent {
  @ViewChild('tools') tools: MatButtonToggleGroup;
  public universeIdChoosed: number = -1;
  public message = "You need to create an universe and choose one universe before to address some frontage. You can disable some frontage with the tools";
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
      case 'select_right':
        // TODO : Potential Bug here with the universeId (because not sure it's the same if we delete some id)
        event.side.updateAddress(event.column, event.line, Direction.RIGHT, this.state.universe[this.universeIdChoosed - 1]);
        break;
      case 'select_left':
        console.log(this.state.universe[this.universeIdChoosed - 1]);
        event.side.updateAddress(event.column, event.line, Direction.LEFT, this.state.universe[this.universeIdChoosed - 1]);
        break;
      case 'turn_off':
        event.side.turnOffCell(event.column, event.line);
        break;
      default:
        console.error('Tools not implemented');
    }
  }

  changeUniverse(id: number) {
    this.universeIdChoosed = id;
    console.log(id);
  }
}
