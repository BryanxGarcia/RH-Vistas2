import { TestBed } from '@angular/core/testing';

import { EppPostesService } from './epp-postes.service';

describe('EppPostesService', () => {
  let service: EppPostesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EppPostesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
