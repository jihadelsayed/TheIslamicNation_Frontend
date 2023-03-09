import { TestBed } from '@angular/core/testing';

import { MessengerNamesServiceService } from './messenger-names-service.service';

describe('MessengerNamesServiceService', () => {
  let service: MessengerNamesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessengerNamesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
