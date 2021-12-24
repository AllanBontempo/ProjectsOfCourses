import { TestBed } from '@angular/core/testing';

import { UserNotTakenValidatorService } from './user-not-taken.validator.service';

describe('UserNotTaken.ValidatorService', () => {
  let service: UserNotTakenValidatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserNotTakenValidatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
