import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-universe-form',
  templateUrl: './universe-form.component.html',
  styleUrls: ['./universe-form.component.scss']
})
export class UniverseFormComponent {

  constructor(public dialogRef: MatDialogRef<UniverseFormComponent>) { }

  stop() {
    this.dialogRef.close();
  }
}
