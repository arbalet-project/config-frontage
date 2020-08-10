import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FrontageService } from 'src/app/core/frontage/frontage.service'
import { Router } from '@angular/router';
import { AppService } from 'src/app/core/app.service';
import { ThrowStmt } from '@angular/compiler';
@Component({
  selector: 'app-creation-form',
  templateUrl: './creation-form.component.html',
  styleUrls: ['./creation-form.component.scss']
})
export class CreationFormComponent {
  public creationForm: FormGroup;

  public width = new FormControl(19, Validators.min(1));
  public height = new FormControl(4, Validators.min(1))

  constructor(public fb: FormBuilder, public frontage: FrontageService, public router: Router, public app: AppService) {
    this.creationForm = fb.group({
      width: this.width,
      height: this.height
    })
  }

  public create() {
    this.app.initiliazed = true;
    this.frontage.width = this.creationForm.value.width;
    this.frontage.height = this.creationForm.value.height;
    this.router.navigateByUrl('/artnet/frontage');
  }

}
