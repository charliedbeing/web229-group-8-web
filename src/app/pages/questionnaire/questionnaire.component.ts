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
  @Input() submitFromPublic: boolean|undefined;


  editable: boolean = false;
  submitAvailable:boolean =false;
  submitName:string="Submit";

  constructor(private userService:AuthService,){
 
  }

  ngOnInit() {
    this.editable = false;
    this.questionnaire = this.questionnaire || {
      _id:'',
      title:'',
      starter:'',
      ending:'',
      state:QuestionnaireState.Created,
      questionList:[],
      userId: this.userService.getCurrentUserID(),
      createDate:new Date(),
      collectionData:[],
    }

     this.editable = this.questionnaire && this.questionnaire.state === QuestionnaireState.Created;

  }

  ngOnChanges(){
    if(this.questionnaire){
      console.log(this.questionnaire);
    }

    //Edit Questionnaire Structure Submit
      if(this.questionnaire != undefined){
        if(this.questionnaire.state ==0){
          this.submitAvailable = true;
          this.submitName ="Edit Questionnaire Submit";
        }
        if(this.questionnaire.state ==1){
          this.submitAvailable = true;
          this.submitName ="Collect Data Submit";
        }

        if(this.submitFromPublic == true){
          this.submitAvailable = false;
        }
      }

    // collect data submit 


      
  }


  onDeleteQuestion(index: number) {
    if(this.questionnaire?.questionList){
      this.questionnaire.questionList.splice(index, 1);
    }
    
  }

  onSubmit() {
    //  console.log(this.questionnaire);
      this.submitQuestionnaire.emit(this.questionnaire);
  }


}
