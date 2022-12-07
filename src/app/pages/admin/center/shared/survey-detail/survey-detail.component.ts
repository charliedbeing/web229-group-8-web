import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { QuestionnaireModel } from '../../../../../service/questionnaire.model';

@Component({
  selector: 'survey-detail',
  templateUrl: './survey-detail.component.html',
  styleUrls: ['./survey-detail.component.css']
})
export class SurveyDetaillComponent implements OnInit,OnChanges {

  @Input() questionnaire: QuestionnaireModel|undefined;
  questionnaireAnswerAmount:number|undefined;

  constructor() {

    if(this.questionnaire?.collectionData != undefined){
      this.questionnaireAnswerAmount = this.questionnaire?.collectionData.length;
    }
    
   }

  ngOnInit(): void {

   
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    if(this.questionnaire?.collectionData != undefined){
      this.questionnaireAnswerAmount = this.questionnaire?.collectionData.length;
    }
  }

}
