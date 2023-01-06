import { TestBed } from '@angular/core/testing';

import { HardcodeAuthenticationService } from './hardcode-authentication.service';

describe('HardcodeAuthenticationService', () => {
  let service: HardcodeAuthenticationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HardcodeAuthenticationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
