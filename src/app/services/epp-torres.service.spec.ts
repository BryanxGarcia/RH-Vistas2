import { TestBed } from '@angular/core/testing';

import { EppTorresService } from './epp-torres.service';

describe('EppTorresService', () => {
  let service: EppTorresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EppTorresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
