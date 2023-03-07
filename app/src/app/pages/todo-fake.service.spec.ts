import { TestBed } from '@angular/core/testing';

import { TodoFakeService } from './todo-fake.service';

describe('TodoFakeService', () => {
  let service: TodoFakeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoFakeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
