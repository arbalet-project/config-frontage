import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GenerateJsonDialogComponent } from './components/generate-json-dialog/generate-json-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public constructor(public dialog: MatDialog) { }

  public saveConfig(): void {
    this.dialog.open(GenerateJsonDialogComponent, {
      width: '350px'
    });
  }
}
