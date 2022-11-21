import { Component, OnInit ,Input} from '@angular/core';
import { QuestionnaireModel} from '../../../../../service/questionnaire.model';

@Component({
  selector: 'questionnaire-outline',
  templateUrl: './survey-outline.component.html',
  styleUrls: ['./survey-outline.component.css']
})
export class SurveyOutlineComponent implements OnInit {

  @Input() questionnaire: QuestionnaireModel | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
