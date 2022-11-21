import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { AuthService } from '../../shared/auth.service';

import { QuestionModel } from '../../service/question.model';
import { QuestionnaireModel ,QuestionnaireState } from '../../service/questionnaire.model';

@Component({
  selector: 'questionnaire',
  styleUrls:['questionnaire.component.css'],
  templateUrl: 'questionnaire.component.html'
})
export class QuestionnaireComponent implements OnInit {

  @Input() questionnaire: QuestionnaireModel|undefined;
  @Output() submitQuestionnaire = new EventEmitter();
  @Output() questionnaireChange =new EventEmitter<QuestionnaireModel>()


  editable: boolean = false;

  ngOnInit() {
    this.editable = false;
    this.questionnaire = this.questionnaire || {
      id:'',
      title:'',
      starter:'',
      ending:'',
      state:QuestionnaireState.Created,
      questionList:[],
      userId: '',
      createDate:new Date().toISOString(),
      collectionDate:[],
    }

    // this.editable = this.questionnaire && this.questionnaire.state === QuestionnaireState.Created;
    if(this.questionnaire){
      this.questionnaire.userId= "";
    }
   
  }

  ngOnChanges(){
    if(this.questionnaire){
      console.log(this.questionnaire.questionList);
    }
      
  }


  onDeleteQuestion(index: number) {
    if(this.questionnaire?.questionList){
      this.questionnaire.questionList.splice(index, 1);
    }
    
  }

  onSubmit() {
      console.log(this.questionnaire);
      this.submitQuestionnaire.emit(this.questionnaire);
  }


}
