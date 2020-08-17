import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { StateService } from 'src/app/core/state/state.service';

@Component({
  selector: 'app-universe-form',
  templateUrl: './universe-form.component.html',
  styleUrls: ['./universe-form.component.scss']
})
export class UniverseFormComponent {
  public colorMode: Array<string>;
  public universeForm: FormGroup;
  constructor(public dialogRef: MatDialogRef<UniverseFormComponent>, public fb: FormBuilder, public state: StateService) {
    this.universeForm = this.fb.group({
      address: new FormControl(0),
      step: new FormControl(0), // Validators to be sure that a number ?
      mode: new FormControl('rgb') // Validators between two values ?
    });

    this.colorMode = this.state.getAllColorMode();
  }

}
