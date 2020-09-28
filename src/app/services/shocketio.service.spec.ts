import { TestBed } from '@angular/core/testing';

import { ShocketioService } from './shocketio.service';

describe('ShocketioService', () => {
  let service: ShocketioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShocketioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
