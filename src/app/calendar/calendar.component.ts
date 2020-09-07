import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { TimeService } from 'src/app/core/time.service';
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent {
  public geographyForm: FormGroup;

  constructor(public fb: FormBuilder, public timeApi: TimeService) {
    this.geographyForm = this.fb.group({
      longitude: new FormControl(0),
      latitude: new FormControl(0),
      years: new FormControl(1, [Validators.min(1), Validators.max(10)])
    });
  }

  updateSun(): void {
    this.timeApi.getAllTimes(this.geographyForm.value.longitude, this.geographyForm.value.latitude, this.geographyForm.value.years);
  }

}
