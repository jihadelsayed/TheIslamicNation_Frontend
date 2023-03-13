import { TestBed } from '@angular/core/testing';

import { CreedService } from './creed.service';

describe('CreedService', () => {
  let service: CreedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
