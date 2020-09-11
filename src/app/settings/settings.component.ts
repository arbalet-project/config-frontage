import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { StateService } from '../core/state/state.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {
  settingsForm: FormGroup;

  constructor(public fb: FormBuilder, public state: StateService) {
    this.settingsForm = this.fb.group({
      name: new FormControl(this.state.name),
      id: new FormControl(this.state.id),
      description: new FormControl(this.state.description)
    });
  }

  update(): void {
    this.state.id = this.settingsForm.value.id;
    this.state.name = this.settingsForm.value.name;
    this.state.description = this.settingsForm.value.description
    console.log(this.state.description)
  }
}
