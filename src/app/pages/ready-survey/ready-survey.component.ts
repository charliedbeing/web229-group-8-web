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

  questionnaireIDAndTitleToPublic:{id:string,title:string}[] =[];

  constructor(private onlyOneService:OnlyOneService,
     private route: ActivatedRoute,
     private questionnaireService:QuestionnairService
 
     ) { 
  }


  publicQuestions :OnlyOne[] = [];
  linkTitleString:{link:string, title:string}[]=[];

  ngOnInit(): void {

    this.questionnaireService.GetQuestionnairesForPublic().subscribe(res=>{
        for(let i=0;i<res.length;i++){
           let id =res[i]._id;
           let title = res[i].title;
          if(id != undefined){
            this.questionnaireIDAndTitleToPublic.push({id,title});
            this.questionnaireIDToPublic.push(id);
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
              let title = this.getTitle(this.questionnaireIDAndTitleToPublic,one.questionnaireID);
              this.linkTitleString.push({link, title});
            }
         });
      
        }
    })
  }

  private getTitle(arr:{id:string,title:string}[], id:string):string{
        let result ='';
        for(let i=0;i<arr.length; i++){
          if(arr[i].id == id){
            result = arr[i].title;
            break;
          }
        }
        return result;
  }





}
