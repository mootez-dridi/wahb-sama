import { TestBed } from '@angular/core/testing';

import { ChInfoGuard } from './ch-info.guard';

describe('ChInfoGuard', () => {
  let guard: ChInfoGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ChInfoGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
