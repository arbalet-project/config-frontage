import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontageComponent } from './frontage.component';

describe('FrontageComponent', () => {
  let component: FrontageComponent;
  let fixture: ComponentFixture<FrontageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrontageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
