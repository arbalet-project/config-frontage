import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FappComponent } from './fapp.component';

describe('FappComponent', () => {
  let component: FappComponent;
  let fixture: ComponentFixture<FappComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FappComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
