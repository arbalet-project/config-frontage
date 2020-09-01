import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
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
      latitude: new FormControl(0)
    });
  }

  updateSun(): void {
    this.timeApi.getAllTimes(this.geographyForm.value.longitude, this.geographyForm.value.latitude, 5);
  }

}
