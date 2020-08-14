import { Component, OnInit, ElementRef, ViewChild, Output, EventEmitter } from '@angular/core';
import { FrontageService } from 'src/app/core/frontage/frontage.service';
import { Dimension } from 'src/app/core/frontage/models/frontage';
import { toBase64String } from '@angular/compiler/src/output/source_map';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-frontage-canvas',
  templateUrl: './frontage-canvas.component.html',
  styleUrls: ['./frontage-canvas.component.scss']
})
export class FrontageCanvasComponent implements OnInit {
  @ViewChild('canvas', { static: true }) canvas: ElementRef<HTMLCanvasElement>;
  private ctx: CanvasRenderingContext2D;

  private areaFrontage: Dimension;
  private areaCell: Dimension = {
    width: 0,
    height: 100
  };
  private gutter = 50;

  @Output('clickCell') clickCell = new EventEmitter();

  constructor(public frontage: FrontageService) { }

  ngOnInit(): void {
    this.ctx = this.canvas.nativeElement.getContext('2d');
    this.updateDimension();

    this.draw();
  }

  private updateDimension() {
    this.ctx.canvas.width = window.innerWidth;
    this.ctx.canvas.height = (this.areaCell.height * this.frontage.dimension.height) + this.gutter;

    this.areaFrontage = {
      width: this.ctx.canvas.width - (2 * this.gutter),
      height: this.ctx.canvas.height - this.gutter
    }
    this.areaCell.width = this.areaFrontage.width / this.frontage.dimension.width;
  }

  draw() {
    this.drawFrontage();
  }

  drawFrontage() {
    this.ctx.translate(50, 50);
    this.ctx.strokeStyle = 'white';

    this.ctx.strokeRect(0, 0, this.areaFrontage.width, this.areaFrontage.height);

    // Draw lines (columns)
    for (let i = 1; i < this.frontage.dimension.width; i++) {
      this.ctx.beginPath();
      this.ctx.moveTo(i * this.areaCell.width, 0);
      this.ctx.lineTo(i * this.areaCell.width, this.areaFrontage.height);
      this.ctx.stroke();
    }

    // Draw lines (rows)
    for (let j = 1; j < this.frontage.dimension.height; j++) {
      this.ctx.beginPath();
      this.ctx.moveTo(0, this.areaCell.height * j);
      this.ctx.lineTo(this.areaFrontage.width, this.areaCell.height * j);
      this.ctx.stroke();
    }

    this.ctx.setTransform(1, 0, 0, 1, 0, 0);
  }

  updateState(event) {
    const rect = this.canvas.nativeElement.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const c = Math.floor((x - this.gutter) / this.areaCell.width)
    const l = Math.floor((y - this.gutter) / this.areaCell.height)
    this.clickCell.emit({ column : c, line: l});
  }
}
