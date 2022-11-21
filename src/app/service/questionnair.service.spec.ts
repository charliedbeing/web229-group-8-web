import { TestBed } from '@angular/core/testing';

import { QuestionnairService } from './questionnair.service';

describe('QuestionnairService', () => {
  let service: QuestionnairService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuestionnairService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
