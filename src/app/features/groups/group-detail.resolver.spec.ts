import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { groupDetailResolver } from './group-detail.resolver';

describe('groupDetailResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => groupDetailResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
