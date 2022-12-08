import { Component, OnInit } from '@angular/core';

import { ActivatedRoute,Router } from '@angular/router';
import { Location } from '@angular/common';
import { QuestionnaireModel,QuestionnaireState } from '../../service/questionnaire.model';
import { QuestionnairService } from '../../service/questionnair.service';
import { isNgTemplate } from '@angular/compiler';
import { SurveyControlsComponent } from '../admin/center/shared/survey-controls/survey-controls.component';
import { QuestionModel } from 'src/app/service/question.model';

import { OnlyOneService } from  '../../service/only-one.service';
import { OnlyOne } from '../../service/only-one.model';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.css']
})
export class PublicComponent implements OnInit {

  questionnaire: QuestionnaireModel;
   id: string;
  result:string;
  once:boolean;
  token:string;
  onlyOne:OnlyOne;
 constructor(private questionnaireService:QuestionnairService,
    private activatedRoute:ActivatedRoute,
     private router: Router,
     private location: Location,    
     private onlyOneService:OnlyOneService)
  {
    this.questionnaire = new QuestionnaireModel();
    this.id = "1";
    this.result="";
    this.once =false;
    this.token ="";
    this.onlyOne = new OnlyOne();
    
   }

 ngOnInit() {
   this.id = this.activatedRoute.snapshot.params['id'];
   this.token = this.activatedRoute.snapshot.params['token'];

   console.log(this.token);

   if(this.token && this.token != ''){

       this.onlyOneService.checkIsAnswer(this.token).subscribe(res =>{
          this.onlyOne = res[0];
          this.once = this.onlyOne.isAnswer;
          console.log(this.once);
      });



   }


   if (this.id && this.id !== '0') {
     this.questionnaireService.GetQuestionnaireById(this.id)
       .subscribe(

         questionnaire =>{
      
           this.questionnaire = questionnaire;
           this.initData();
         } ,
         error => console.log(error)
       );
   }
 }

 onSubmitQuestionniare(questionnaire: QuestionnaireModel) {
   //Save Questionnaire or collection survey data

   // console.log("is include answers?");
   // console.log(this.questionnaire.state);

      let ref = this;
     if (this.id && this.id !== '0') {
        
         // edit questionnaire
        if(this.questionnaire.state ==0){
         this.questionnaireService.updateQuestionnaire(this.id,questionnaire)
         .subscribe(
          // questionnaire => this.gotoCenter(),
          questionnaire =>{
            ref.result ="Submit Success, Thank you !"
          });
        
        }
       
        // collectate questionnaire data
       if(this.questionnaire.state ==1){
         this.collecteData();
         this.questionnaireService.updateQuestionnaire(this.id,this.questionnaire)
         .subscribe(
           questionnaire => {
            ref.result ="Submit Success, Thank you !"
            this.onlyOne.isAnswer = true;
            this.onlyOneService.updatehasAnswered(this.onlyOne._id,this.onlyOne).subscribe(res=>{
              ref.result ="Submit Success, Thank you !, this link will be inactived";
            });

           },
           error => console.log(error));
         }
     }
     
     else {
       // create new Questionnaire
       this.questionnaireService.AddQuestionnair(questionnaire)
       .subscribe(
           questionnaire => this.gotoCenter(),
           error=> console.error(error));
     }
   
 }


 private  collecteData():void{
 
   if(this.questionnaire.questionList != undefined){

     this.questionnaire.collectionData.push(this.questionnaire.questionList);
   
   }
 }

 // title!: String; 
 // type!: QuestionType;  
 // options?:any[]; //answer's option
 // answer:any;    //questions' answer

 private  initData():void{
 
   if(this.questionnaire.questionList != undefined){

     for(var i =0; i< this.questionnaire.questionList.length;i++){
       let answer = this.questionnaire.questionList[i].answer;
       if(typeof answer =='string'){
         this.questionnaire.questionList[i].answer ='';
       }
       if(typeof answer =='number'){
         this.questionnaire.questionList[i].answer ='';
       }
       if(answer instanceof Object){
         this.questionnaire.questionList[i].answer = [];
       }
     }
   
   }
 }

 onBack():void {
 //  console.log('back');

   this.location.back();
 }

 gotoCenter() {
   this.router.navigateByUrl('admin/center');
 }

}

