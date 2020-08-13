import { TestBed } from '@angular/core/testing';

import { IsProviderGuard } from './is-provider.guard';

describe('IsProviderGuard', () => {
  let guard: IsProviderGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(IsProviderGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
