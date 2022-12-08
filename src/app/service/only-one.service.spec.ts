import { TestBed } from '@angular/core/testing';

import { OnlyOneService } from './only-one.service';

describe('OnlyOneService', () => {
  let service: OnlyOneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OnlyOneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
