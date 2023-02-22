import { TestBed } from '@angular/core/testing';

import { FakeProductAPIService } from './fake-product-api.service';

describe('FakeProductAPIService', () => {
  let service: FakeProductAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FakeProductAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
