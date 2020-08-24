import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { StateService } from 'src/app/core/state/state.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-init',
  templateUrl: './init.component.html',
})
export class InitComponent {
  public creationForm: FormGroup;

  constructor(public fb: FormBuilder, public state: StateService, public router: Router) {
    this.creationForm = fb.group({
      width: new FormControl(19, Validators.min(1)),
      height: new FormControl(4, Validators.min(1))
    });
  }

  public create(): void {
    this.state.initiliazed = true;
    this.state.dimension = {
      width: this.creationForm.value.width,
      height: this.creationForm.value.height
    };
    this.state.addSide('Main Side');

    this.router.navigateByUrl('config');
  }

}
