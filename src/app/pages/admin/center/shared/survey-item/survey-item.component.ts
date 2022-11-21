import { Component, OnInit,OnChanges,SimpleChanges, Input } from '@angular/core';
import {QuestionnaireModel, QuestionnaireState } from '../../../../../service/questionnaire.model';

@Component({
  selector: 'survey-item',
  templateUrl: './survey-item.component.html',
  styleUrls: ['./survey-item.component.css']
})
export class SurveyItemComponent implements OnInit, OnChanges {
  
  @Input()
  questionnaire: QuestionnaireModel = new QuestionnaireModel;
   stateText:String | undefined;
   stateClass:String | undefined;

  constructor() { }



  ngOnChanges(changes: SimpleChanges){
    let questionnaireChange = changes['questionnaire'];
    if(questionnaireChange && questionnaireChange.previousValue && questionnaireChange.previousValue.state &&
          questionnaireChange.currentValue.state !== questionnaireChange.previousValue.state){
        this.questionnaire = changes['questionnaire'].currentValue;
        this.setState();
    }
}

ngOnInit(): void {
}

setState(){
  switch(this.questionnaire?.state){
      case QuestionnaireState.Created:
        this.stateText = '已创建';
        this.stateClass = 'label-warning';
        break;
    case QuestionnaireState.Published:
        this.stateText = '回收中';
        this.stateClass = 'label-info';
        break;
    case QuestionnaireState.Finished:
        this.stateText = '已结束';
        this.stateClass = 'label-success';
        break;
    default:
        break;
  }
}

}
