import { TestBed } from '@angular/core/testing';

import { RealProductAPIService } from './real-product-api.service';

describe('RealProductAPIService', () => {
  let service: RealProductAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RealProductAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
