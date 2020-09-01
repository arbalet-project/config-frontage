import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { interval } from 'rxjs';
import { StateService } from './state/state.service';
import { Sunrise } from './state/models/sunrise';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class TimeService {
  private apiUrl = 'https://api.sunrise-sunset.org/json';

  constructor(public http: HttpClient, private state: StateService, private snackBar: MatSnackBar) { }

  private getDay(longitude: number, latitude: number, date: string): void {
    this.http.get<Sunrise>(`${this.apiUrl}?lat=${latitude}&lng=${longitude}&formatted=0&date=${date}`).subscribe((result) => {
      this.state.sunriseTime.set(date, result);
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
