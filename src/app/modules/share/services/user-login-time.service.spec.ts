import { TestBed } from '@angular/core/testing';

import { UserLoginTimeService } from './user-login-time.service';

describe('UserLoginTimeService', () => {
  let service: UserLoginTimeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserLoginTimeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
