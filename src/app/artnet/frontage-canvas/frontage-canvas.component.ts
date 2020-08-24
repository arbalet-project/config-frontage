import { Component, OnInit, ElementRef, ViewChild, Output, EventEmitter, Input } from '@angular/core';

import { timer } from 'rxjs';
import { Side } from 'src/app/core/state/side';
import { StateService } from 'src/app/core/state/state.service';
import { Dimension } from 'src/app/core/state/models/frontage';
import { Position } from 'src/app/core/state/models/frontage';

@Component({
  selector: 'app-frontage-canvas',
  templateUrl: './frontage-canvas.component.html',
})
export class FrontageCanvasComponent implements OnInit {
  @Input() side: Side;

  @ViewChild('canvas', { static: true }) canvas: ElementRef<HTMLCanvasElement>;
  private ctx: CanvasRenderingContext2D;

  private areaFrontage: Dimension;
  private areaCell: Dimension = {
    width: 0,
    height: 100
  };
  private gutter = 50;

  @Output() clickCell = new EventEmitter();

  private cellStart: Position;

  constructor(public state: StateService) { }

  ngOnInit(): void {
    this.ctx = this.canvas.nativeElement.getContext('2d');
    this.updateCanvasDimension();
    timer(0, 60).subscribe(() => {
      this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
      this.draw();
    });
  }

  private updateCanvasDimension(): void {
    this.ctx.canvas.width = window.innerWidth - 50;
    this.ctx.canvas.height = (this.areaCell.height * this.state.dimension.height) + this.gutter;

    this.areaFrontage = {
      width: this.ctx.canvas.width - (2 * this.gutter),
      height: this.ctx.canvas.height - this.gutter
    };
    this.areaCell.width = this.areaFrontage.width / this.state.dimension.width;
  }

  draw(): void {
    this.drawFrontage();
    this.drawDisabled();
    this.drawAddress();
  }

  drawFrontage(): void {
    this.ctx.translate(50, 50);
    this.ctx.strokeStyle = 'white';

    this.ctx.strokeRect(0, 0, this.areaFrontage.width, this.areaFrontage.height);

    // Draw lines (columns)
    for (let i = 1; i < this.state.dimension.width; i++) {
      this.ctx.beginPath();
      this.ctx.moveTo(i * this.areaCell.width, 0);
      this.ctx.lineTo(i * this.areaCell.width, this.areaFrontage.height);
      this.ctx.stroke();
    }

    // Draw lines (rows)
    for (let j = 1; j < this.state.dimension.height; j++) {
      this.ctx.beginPath();
      this.ctx.moveTo(0, this.areaCell.height * j);
      this.ctx.lineTo(this.areaFrontage.width, this.areaCell.height * j);
      this.ctx.stroke();
    }

    this.ctx.setTransform(1, 0, 0, 1, 0, 0);
  }

  public drawDisabled(): void {
    for (let i = 0; i < this.state.dimension.height; i++) {
      for (let j = 0; j < this.state.dimension.width; j++) {
        if (this.side.frontage[i][j].disabled) {
          this.ctx.fillStyle = '#8c071b';
          this.ctx.strokeStyle = 'none';
          this.ctx.fillRect(
            j * this.areaCell.width + this.gutter + 1,
            i * this.areaCell.height + this.gutter + 1,
            this.areaCell.width - 2,
            this.areaCell.height - 2);
        }
      }
    }
  }

  public drawAddress() {
    for (let i = 0; i < this.state.dimension.height; i++) {
      for (let j = 0; j < this.state.dimension.width; j++) {
        if (this.side.frontage[i][j].address >= 0) {
          this.ctx.fillStyle = '#07ad2b';
          this.ctx.strokeStyle = 'none';
          this.ctx.fillRect(
            j * this.areaCell.width + this.gutter + 1,
            i * this.areaCell.height + this.gutter + 1,
            this.areaCell.width - 2,
            this.areaCell.height - 2);
        }
      }
    }
  }

  calculatePosition(event: MouseEvent): Position {
    const rect = this.canvas.nativeElement.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const column = Math.floor((x - this.gutter) / this.areaCell.width);
    const line = Math.floor((y - this.gutter) / this.areaCell.height);

    return { column, line }
  }

  updateState(event: MouseEvent): void {
    const { column, line } = this.calculatePosition(event)
    this.clickCell.emit({ column, line, side: this.side });
  }

  start(event: MouseEvent) {
    const { column, line } = this.calculatePosition(event);
    this.cellStart = {
      column,
      line
    }
  }

  stop(event: MouseEvent) {
    const { column, line } = this.calculatePosition(event);
    this.clickCell.emit({ start: this.cellStart, end: { column, line }, side: this.side });

  }

}
