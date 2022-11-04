import { TestBed } from '@angular/core/testing';

import { ChFournitureGuard } from './ch-fourniture.guard';

describe('ChFournitureGuard', () => {
  let guard: ChFournitureGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ChFournitureGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
