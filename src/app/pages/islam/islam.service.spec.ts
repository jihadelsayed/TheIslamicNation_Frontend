import { TestBed } from '@angular/core/testing';

import { IslamService } from './islam.service';

describe('IslamService', () => {
  let service: IslamService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IslamService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
