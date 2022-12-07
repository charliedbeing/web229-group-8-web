import { Component, OnInit, ChangeDetectorRef, OnChanges, SimpleChanges } from '@angular/core';
import { QuestionnairService} from '../../../service/questionnair.service';
import { QuestionnaireModel,QuestionnaireState } from '../../../service/questionnaire.model';
import { Router } from '@angular/router';
import { PreviousRouteServiceService} from '../../../service/previous-route-service.service';

@Component({
  selector: 'app-center',
  templateUrl: './center.component.html',
  styleUrls: ['./center.component.css']
})
export class CenterComponent implements OnInit ,OnChanges{

   questionnaires:QuestionnaireModel[] = [];
   selectedQuestionnaire: QuestionnaireModel;
   selectedIndex!: number;
   isEmpty: boolean = false;

  constructor(
    private cd:ChangeDetectorRef,
    private questionnaireService: QuestionnairService,
    private router: Router,
    private preurlService:PreviousRouteServiceService

  ) {
    this.selectedQuestionnaire = new QuestionnaireModel();
   }

  ngOnInit(): void {



    this.questionnaireService.GetQuestionnaires().subscribe((res) => {
    

      if(res.length === 0){
        this.isEmpty = true;
        return
      }
      this.isEmpty =false;
      this.questionnaires = res;
      let id = this.preurlService.getPreviousUrl().split("/")[2];
      this.selectedQuestionnaire = this.questionnaires[this.getId(id)];
      this.selectedIndex = 0;

    });


    

  }

  private getId(id:string):number{
    let result =0;

    for(var i =0;i<this.questionnaires.length;i++){
        if(id == this.questionnaires[i]._id){
          result =i;
          break;
        }
    }

    return result;
  }

  ngOnChanges(changes: SimpleChanges): void {


   
  }

  onSelect(questionnaire:QuestionnaireModel, index:number) {

    this.selectedQuestionnaire = questionnaire;
    this.selectedIndex = index;


  }


  onDeleteQuestionnaire() {
    if(this.selectedQuestionnaire){
      this.questionnaireService.deleteQuestionnaire(this.selectedQuestionnaire._id)
      .subscribe(
          res => {
            this.questionnaires.splice(this.selectedIndex, 1);
            //全部删除
            if(this.questionnaires.length === 0){
              this.isEmpty = true;
            } else {
              this.selectedQuestionnaire = this.questionnaires[0];
              this.selectedIndex = 0;
            }
          },
          error => console.log(error)

      );
    }
    
  }

  onPublishQuestionnaire(){
    if(this.selectedQuestionnaire!= undefined){
      this.selectedQuestionnaire.state = QuestionnaireState.Published;
      this.questionnaireService.updateQuestionnaireState(this.selectedQuestionnaire._id, this.selectedQuestionnaire)
      .subscribe(
        questionnaire => {
          if(this.selectedQuestionnaire!= undefined){
            this.selectedQuestionnaire.state = QuestionnaireState.Published;
            this.questionnaires[this.selectedIndex] = Object.assign({}, this.selectedQuestionnaire);
            this.cd.detectChanges();
          }
          
        },
        error => console.log(error)
      );
      }
    }

    onCloseQuestionnaire(){

      if(this.selectedQuestionnaire!= undefined){
        this.selectedQuestionnaire.state = QuestionnaireState.Finished;
        this.questionnaireService.updateQuestionnaireState(this.selectedQuestionnaire._id, this.selectedQuestionnaire)
        .subscribe(
          questionnaire => {
            if(this.selectedQuestionnaire!= undefined){
              this.selectedQuestionnaire.state = QuestionnaireState.Finished;
              this.questionnaires[this.selectedIndex] = Object.assign({}, this.selectedQuestionnaire);
              this.cd.detectChanges();
            }
            
          },
          error => console.log(error)
        );
        }
    }
   

}
