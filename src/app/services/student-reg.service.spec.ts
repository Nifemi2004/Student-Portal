import { TestBed } from '@angular/core/testing';

import { StudentRegService } from './student-reg.service';

describe('StudentRegService', () => {
  let service: StudentRegService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentRegService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
