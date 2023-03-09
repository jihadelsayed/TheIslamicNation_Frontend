import { TestBed } from '@angular/core/testing';

import { AngleNamesServiceService } from './angle-names-service.service';

describe('AngleNamesServiceService', () => {
  let service: AngleNamesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngleNamesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
