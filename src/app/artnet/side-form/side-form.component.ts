import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-side-form',
  templateUrl: './side-form.component.html',
})
export class SideFormComponent {
  public frontageForm: FormGroup;

  constructor(public dialogRef: MatDialogRef<SideFormComponent>, public fb: FormBuilder) {
    this.frontageForm = this.fb.group({
      name: new FormControl()
    });
  }
}
