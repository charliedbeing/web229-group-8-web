import { Component, OnInit, Input } from '@angular/core';
import { QuestionnaireModel } from '../../../../../service/questionnaire.model';

@Component({
  selector: 'survey-detail',
  templateUrl: './survey-detail.component.html',
  styleUrls: ['./survey-detail.component.css']
})
export class SurveyDetaillComponent implements OnInit {

  @Input() questionnaire: QuestionnaireModel|undefined;
  
  constructor() { }

  ngOnInit(): void {
  }

}
