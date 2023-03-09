import { TestBed } from '@angular/core/testing';

import { ProphetNamesServiceService } from './prophet-names-service.service';

describe('ProphetNamesServiceService', () => {
  let service: ProphetNamesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProphetNamesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
