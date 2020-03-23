import { TestBed } from '@angular/core/testing';

import { FireauthGuard } from './fireauth.guard';

describe('FireauthGuard', () => {
  let guard: FireauthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(FireauthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
