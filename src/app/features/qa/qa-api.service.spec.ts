import { TestBed } from '@angular/core/testing';

import { QaApiService } from './qa-api.service';

describe('QaApiService', () => {
  let service: QaApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QaApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
