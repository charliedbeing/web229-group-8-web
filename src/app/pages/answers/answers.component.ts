import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { QuestionnairService } from '../../service/questionnair.service';
import { QuestionnaireModel,QuestionnaireState } from '../../service/questionnaire.model';
import { Location } from '@angular/common';

@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.css']
})
export class AnswersComponent implements OnInit {


  id:string ;
  data: Object;

  constructor(private activatedRoute:ActivatedRoute,
    private questionnaireService :QuestionnairService,
    private location: Location
    ) { 
    this.id="";
    this.data =[];
  }

  ngOnInit(): void {

    this.id = this.activatedRoute.snapshot.params['id'];
    
    if (this.id && this.id !== '0') {
      this.questionnaireService.GetQuestionnaireById(this.id)
        .subscribe(
 
          questionnaire =>{
       
            this.data = questionnaire.collectionData;
 
          } ,
          error => console.log(error)
        );
    }

  }

  onBack(){
    this.location.back();
  }

}
