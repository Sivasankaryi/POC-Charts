import { TestBed } from '@angular/core/testing';

import { PonService } from './pon.service';

describe('PonService', () => {
  let service: PonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
