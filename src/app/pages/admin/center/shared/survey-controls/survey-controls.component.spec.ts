import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyControlsComponent } from './survey-controls.component';

describe('SurveyControlsComponent', () => {
  let component: SurveyControlsComponent;
  let fixture: ComponentFixture<SurveyControlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurveyControlsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SurveyControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
