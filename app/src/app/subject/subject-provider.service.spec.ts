import { TestBed } from '@angular/core/testing';

import { SubjectProviderService } from './subject-provider.service';

describe('SubjectProviderService', () => {
  let service: SubjectProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubjectProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
