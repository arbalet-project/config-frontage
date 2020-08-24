import { Component, OnInit } from '@angular/core';
import { StateService } from '../core/state/state.service';

@Component({
  selector: 'app-fapp',
  templateUrl: './fapp.component.html',
  styleUrls: ['./fapp.component.scss']
})
export class FappComponent implements OnInit {

  constructor(public state: StateService) { }

  ngOnInit(): void {
  }
  update(name: string): void {
    this.state.updateStatusFApp(name);
  }
}
