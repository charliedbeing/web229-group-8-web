import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyOutlineComponent } from './survey-outline.component';

describe('SurveyOutlineComponent', () => {
  let component: SurveyOutlineComponent;
  let fixture: ComponentFixture<SurveyOutlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurveyOutlineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SurveyOutlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
