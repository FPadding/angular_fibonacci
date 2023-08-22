import { TestBed } from '@angular/core/testing';

import { InputNumberService } from './input-number.service';

describe('InputNumberService', () => {
  let service: InputNumberService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InputNumberService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
