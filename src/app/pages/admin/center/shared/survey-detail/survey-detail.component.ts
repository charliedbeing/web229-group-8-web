import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { QuestionnaireModel } from '../../../../../service/questionnaire.model';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'survey-detail',
  templateUrl: './survey-detail.component.html',
  styleUrls: ['./survey-detail.component.css']
})
export class SurveyDetaillComponent implements OnInit,OnChanges {

  @Input() questionnaire: QuestionnaireModel|undefined;
  questionnaireAnswerAmount:number|undefined;
  canData:boolean =false;

  constructor(    private router: Router,) {

    if(this.questionnaire?.collectionData != undefined){
      this.questionnaireAnswerAmount = this.questionnaire?.collectionData.length;

   
    }
    
   }

  ngOnInit(): void {

    if(this.questionnaireAnswerAmount!= undefined){
      if(this.questionnaireAnswerAmount>0){
        this.canData= true;
      }else{
        this.canData =false;
      }
  
    }
   
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    if(this.questionnaire?.collectionData != undefined){
      this.questionnaireAnswerAmount = this.questionnaire?.collectionData.length;

      if(this.questionnaireAnswerAmount>0){
        this.canData= true;
      }
      else{
        this.canData =false;
      }
    }
  }

  onShowAnswer() {
   
     this.router.navigateByUrl('answer/' + this.questionnaire?._id);
  }

}
