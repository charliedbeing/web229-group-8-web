import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { QuestionnairService } from '../../service/questionnair.service';
import { QuestionnaireModel,QuestionnaireState } from '../../service/questionnaire.model';
import { Location } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.css']
})
export class AnswersComponent implements OnInit {


  id:string ;
  data: Object;
  downloadJsonHref:any;

  constructor(private activatedRoute:ActivatedRoute,
    private questionnaireService :QuestionnairService,
    private location: Location,
    private sanitizer: DomSanitizer
    ) { 
    this.id="";
    this.data =[];
  }

  generateDownloadJsonUri() {
    var theJSON = JSON.stringify(this.data);
    var uri = this.sanitizer.bypassSecurityTrustUrl("data:text/json;charset=UTF-8," + encodeURIComponent(theJSON));
    this.downloadJsonHref = uri;
}

  ngOnInit(): void {

    this.id = this.activatedRoute.snapshot.params['id'];
    
    if (this.id && this.id !== '0') {
      this.questionnaireService.GetQuestionnaireById(this.id)
        .subscribe(
 
          questionnaire =>{
       
            this.data = questionnaire.collectionData;

            var theJSON = JSON.stringify(this.data);
            var uri = this.sanitizer.bypassSecurityTrustUrl("data:text/json;charset=UTF-8," + encodeURIComponent(theJSON));
            this.downloadJsonHref = uri;
 
          } ,
          error => console.log(error)
        );
    }

  }

  onBack(){
    this.location.back();
  }

}
