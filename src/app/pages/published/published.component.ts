import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { QuestionnaireModel,QuestionnaireState } from '../../service/questionnaire.model';
import { QuestionnairService } from '../../service/questionnair.service';
import { isNgTemplate } from '@angular/compiler';
import { SurveyControlsComponent } from '../admin/center/shared/survey-controls/survey-controls.component';
@Component({
  selector: 'app-published',
  templateUrl: './published.component.html',
  styleUrls: ['./published.component.css']
})
export class PublishedComponent implements OnInit {

   questionnaire: QuestionnaireModel;
    id: string;

  constructor(private questionnaireService:QuestionnairService, private activatedRoute:ActivatedRoute, private router: Router)
   {
     this.questionnaire = new QuestionnaireModel();
     this.id = "1";
    }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];
    if (this.id && this.id !== '0') {
      this.questionnaireService.GetQuestionnaireById(this.id)
        .subscribe(
          questionnaire => this.questionnaire = questionnaire,
          error => console.log(error)
        );
    }
  }

  onSubmitQuestionniare(questionnaire: QuestionnaireModel) {
    //Save Questionnaire or collection survey data

    console.log("is include answers?");
    console.log(this.questionnaire.state);


      if (this.id && this.id !== '0') {
         
          // edit questionnaire
         if(this.questionnaire.state ==0){
          this.questionnaireService.updateQuestionnaire(this.id,questionnaire)
          .subscribe(
            questionnaire => this.gotoCenter(),
            error => console.log(error));
         }
        
         // collectate questionnaire data
        if(this.questionnaire.state ==1){
          console.log("enter here ???")
          this.collecteData();
          this.questionnaireService.updateQuestionnaire(this.id,this.questionnaire)
          .subscribe(
            questionnaire => this.gotoCenter(),
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
    
     

    console.log(this.questionnaire);
 
  }

  gotoCenter() {
    this.router.navigateByUrl('admin/center');
  }

}
