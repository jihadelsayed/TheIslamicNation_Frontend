import { TestBed } from '@angular/core/testing';

import { MuslimsService } from './muslims.service';

describe('MuslimsService', () => {
  let service: MuslimsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MuslimsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
