import { Component, OnInit } from '@angular/core';
import { AppService } from '../core/app.service';

@Component({
  selector: 'app-fapp',
  templateUrl: './fapp.component.html',
  styleUrls: ['./fapp.component.scss']
})
export class FappComponent implements OnInit {

  constructor(public app: AppService) { }

  ngOnInit(): void {
  }
  update(name : string) {
    this.app.updateStatusFApp(name);
  }
}
