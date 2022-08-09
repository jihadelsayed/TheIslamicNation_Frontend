import { TestBed } from '@angular/core/testing';

import { NamesOfAllahService } from './names-of-allah.service';

describe('NamesOfAllahService', () => {
  let service: NamesOfAllahService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NamesOfAllahService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
