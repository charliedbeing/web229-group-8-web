import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { QuestionType } from '../../../service/question.model';
import { QuestionnairService } from '../../../service/questionnair.service';
import { QuestionnaireModel, QuestionnaireState } from '../../../service/questionnaire.model';
import { AuthService } from '../../../shared/auth.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

   questionnaire :QuestionnaireModel;

   id: string|undefined;


  constructor(
    private questionnaireService:QuestionnairService,
    private userService:AuthService,
    private activatedRoute:ActivatedRoute,
    private router:Router
  ) { 
    //init an empty questionnaire object
    this.questionnaire ={
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


  }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    let ref = this;
    if(this.id && this.id !=='0'){
      this.questionnaireService.GetQuestionnaireById(this.id).subscribe(
        {
         next(res) {
          ref.questionnaire = res;        
         }, 
         error:(e)=>console.log(e)
        }
      )
    }
  }

  onAddQuestion(type: QuestionType) {
    //add question to questionList
    switch(type){
      case QuestionType.Text:
      case QuestionType.Score:
        this.questionnaire.questionList?.push({
          title: 'Question Title',
          type: type,
          answer: ''
        });
        break;
      case QuestionType.SingleSelect:
        this.questionnaire.questionList?.push({
          title: 'Question Title',
          type: type,
          options: [{'key': 0, 'value': 'option1'}],
          answer:''
        });
        break;
      case QuestionType.MultiSelect:
        this.questionnaire.questionList?.push({
          title: 'Question Title',
          type: type,
          options: [{'key': 0, 'value': 'option1'}],
          answer:{}
        });
        break;
    }
  }

  onSubmitQuestionniare(questionnaire: QuestionnaireModel) {
    //保存问卷或回收答案
    let ref = this;
    if (questionnaire.state == QuestionnaireState.Created) {
      if (this.id && this.id !== '0') {

         //edit created and not published
         this.questionnaireService.updateQuestionnaire(this.id,questionnaire)
         .subscribe(
          {
            next() {
                ref.gotoCenter();        
             }, 
             error:(e)=>console.log(e)
          }
         ); 
      } else {
        //create new 
        this.questionnaireService.AddQuestionnair(questionnaire)
        .subscribe(
          {
            next() {
              ref.gotoCenter();        
           }, 
           error:(e)=>console.log(e)
          }
        );
      }
    }
  }
  
  gotoCenter() {
    this.router.navigateByUrl('admin/center');
  }

}
