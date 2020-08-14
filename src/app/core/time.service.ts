import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TimeService {
  private apiUrl = 'https://api.sunrise-sunset.org/json';

  constructor(public http: HttpClient) { }

  private getDay(longitude: number, latitude: number, date: string): void {
    this.http.get(`${this.apiUrl}?lat=${latitude}&lng=${longitude}&formatted=0&date=${date}`).subscribe((result) => {
      console.log(result);
    });
  }

  public getAllTimes(longitude: number, latitude: number, years: number): void {
    const date = new Date();

    while (date.getFullYear() - new Date().getFullYear() <= years) {
      this.getDay(longitude, latitude, date.toISOString().substring(0, 10));
      // Add one day
      date.setDate(date.getDate() + 1);
    }
  }
}
