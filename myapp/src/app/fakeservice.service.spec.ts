import { TestBed } from '@angular/core/testing';

import { FakeserviceService } from './fakeservice.service';

describe('FakeserviceService', () => {
  let service: FakeserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FakeserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
