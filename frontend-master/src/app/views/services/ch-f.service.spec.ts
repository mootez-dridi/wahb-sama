import { TestBed } from '@angular/core/testing';

import { ChFService } from './ch-f.service';

describe('ChFService', () => {
  let service: ChFService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChFService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
