import { TestBed } from '@angular/core/testing';

import { GenieService } from './genie.service';

describe('GenieService', () => {
  let service: GenieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
