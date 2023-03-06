import { TestBed } from '@angular/core/testing';

import { ProductStateService } from './product-state.service';

describe('ProductStateService', () => {
  let service: ProductStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
