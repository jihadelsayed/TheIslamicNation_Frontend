import { TestBed } from '@angular/core/testing';

import { MuslimService } from './muslim.service';

describe('MuslimService', () => {
  let service: MuslimService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MuslimService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
