import { Component, Input, OnInit } from '@angular/core';
import { OnlyOneService } from  '../../service/only-one.service';
import { QuestionnairService } from '../../service/questionnair.service';
import { OnlyOne } from '../../service/only-one.model';
import { ActivatedRoute } from '@angular/router';
// import { AuthService } from '../../shared/auth.service';


@Component({
  selector: 'app-ready-survey',
  templateUrl: './ready-survey.component.html',
  styleUrls: ['./ready-survey.component.css']
})
export class ReadySurveyComponent implements OnInit {

  questionnaireIDToPublic:string[] =[];

  constructor(private onlyOneService:OnlyOneService,
     private route: ActivatedRoute,
     private questionnaireService:QuestionnairService
 
     ) { 
  }


  publicQuestions :OnlyOne[] = [];
  linkString:string[]=[];

  ngOnInit(): void {

    this.questionnaireService.GetQuestionnairesForPublic().subscribe(res=>{
        for(let i=0;i<res.length;i++){
           let temp =res[i]._id;
          if(temp != undefined){
            this.questionnaireIDToPublic.push(temp);
          }      
        }
        if(this.questionnaireIDToPublic.length >0){

          this.onlyOneService.getPublicQuestionnaire(this.questionnaireIDToPublic).subscribe(res=>{

            for(var i =0;i<res.length;i++){
              if(!res[i].isAnswer){
                this.publicQuestions.push(res[i]);
              }
            }
      
            for(var j=0;j < this.publicQuestions.length; j++){
              let one = this.publicQuestions[j];
              let link = 'public/'+one.questionnaireID+'/'+one.answerUUID;
              this.linkString.push(link);
            }
         });
      
        }
    })


  }





}
