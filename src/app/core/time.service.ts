import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { interval } from 'rxjs';
import { StateService } from './state/state.service';
import { SunriseResponse } from './state/models/sunrise';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class TimeService {
  private apiUrl = 'https://api.sunrise-sunset.org/json';

  constructor(public http: HttpClient, private state: StateService, private snackBar: MatSnackBar) { }

  private getDay(longitude: number, latitude: number, date: string): void {
    this.http.get<SunriseResponse>(`${this.apiUrl}?lat=${latitude}&lng=${longitude}&formatted=0&date=${date}`).subscribe(({ results }) => {
      this.state.sunriseTime.set(date, { sunrise: results.sunrise, sunset: results.sunset });
      console.log(this.state.sunriseTime)
    });
  }

  public getAllTimes(longitude: number, latitude: number, years: number): void {
    const date = new Date();

    const sub = interval(200).subscribe(
      () => {
        if (date.getFullYear() - new Date().getFullYear() >= years) {
          sub.unsubscribe();
          this.snackBar.open('Finish imports of all informations', 'Ok', {
            duration: 10000,
          });
        }
        this.getDay(longitude, latitude, date.toISOString().substring(0, 10));
        date.setDate(date.getDate() + 1);
      }
    );
  }
}
