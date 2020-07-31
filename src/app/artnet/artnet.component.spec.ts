import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtnetComponent } from './artnet.component';

describe('ArtnetComponent', () => {
  let component: ArtnetComponent;
  let fixture: ComponentFixture<ArtnetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtnetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtnetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
