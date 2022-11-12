import { TestBed } from '@angular/core/testing';

import { SurveyCrudService } from './survey-crud.service';

describe('SurveyCrudService', () => {
  let service: SurveyCrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SurveyCrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
