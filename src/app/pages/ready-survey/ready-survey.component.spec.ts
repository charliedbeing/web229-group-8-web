import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadySurveyComponent } from './ready-survey.component';

describe('ReadySurveyComponent', () => {
  let component: ReadySurveyComponent;
  let fixture: ComponentFixture<ReadySurveyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadySurveyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReadySurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
