import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FrontageService } from 'src/app/core/frontage/frontage.service';
import { MatButtonToggleGroup } from '@angular/material/button-toggle';

@Component({
  selector: 'app-frontage',
  templateUrl: './frontage.component.html',
  styleUrls: ['./frontage.component.scss']
})
export class FrontageComponent implements OnInit {
  @ViewChild('canvas', { static: true }) canvas: ElementRef<HTMLCanvasElement>;
  @ViewChild('tools') tools: MatButtonToggleGroup;

  public dimensions = {
    width: 2000,
    height: 2000
  }

  public universe: Array<string> = ["Univers 1"];
  private ctx: CanvasRenderingContext2D;

  constructor(public frontage: FrontageService) { }

  ngOnInit(): void {
    this.ctx = this.canvas.nativeElement.getContext('2d');
    this.init();
  }



  public init() {
    this.dimensions = {
      width: window.innerWidth - 100,
      height: 100 * this.frontage.height
    }

    this.ctx.canvas.width = this.dimensions.width + 100;
    this.ctx.canvas.height = this.dimensions.height + 100;

    this.ctx.strokeStyle = 'white';
    this.ctx.strokeRect(50, 50, this.dimensions.width, this.dimensions.height);


    let w_row = this.dimensions.width / this.frontage.width;
    for (let i = 1; i < this.frontage.width; i++) {
      this.ctx.beginPath();
      this.ctx.moveTo(i * w_row + 50, 50);
      this.ctx.lineTo(i * w_row + 50, 50 + this.dimensions.height);
      this.ctx.stroke();
    }

    for (let j = 1; j < this.frontage.height; j++) {
      this.ctx.beginPath();
      this.ctx.moveTo(50, 100 * j + 50);
      this.ctx.lineTo(this.dimensions.width + 50, 100 * j + 50);
      this.ctx.stroke();
    }
  }

  updateState(event) {
    const rect = this.canvas.nativeElement.getBoundingClientRect();

    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    console.log("x: " + x + " y: " + y)
    console.log(this.tools.value);
  }

  addUniverse() {
    this.universe.push("Univers " + (this.universe.length + 1));
    console.log("test");
  }
}
