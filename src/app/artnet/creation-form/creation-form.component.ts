import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-creation-form',
  templateUrl: './creation-form.component.html',
  styleUrls: ['./creation-form.component.scss']
})
export class CreationFormComponent {
  public creationForm: FormGroup;

  public width = new FormControl(19, Validators.min(1));
  public height = new FormControl(4, Validators.min(1))

  constructor(public fb : FormBuilder) {
    this.creationForm = fb.group({
      width : this.width,
      height: this.height
    })
    }

  public create() {
    console.log(this.creationForm.value)
  }

}
