import { TestBed } from '@angular/core/testing';

import { FrontageService } from './frontage.service';

describe('FrontageService', () => {
  let service: FrontageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FrontageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
