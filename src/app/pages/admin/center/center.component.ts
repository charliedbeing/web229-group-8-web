import { Component, OnInit, ChangeDetectorRef, OnChanges, SimpleChanges } from '@angular/core';
import { QuestionnairService} from '../../../service/questionnair.service';
import { QuestionnaireModel,QuestionnaireState } from '../../../service/questionnaire.model';

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

  ) {
    this.selectedQuestionnaire = new QuestionnaireModel();
   }

  ngOnInit(): void {

    // this.questionnaireService.GetQuestionnaires()
    // .subscribe(
    //   questionnaires => {
    //     // 后端返回空对象或者空的Questionnaire数组
    //     console.log(questionnaires.length)
    //     // if(!questionnaires || questionnaires.length === 0){
    //     //   this.isEmpty = true;
    //     //   return;
    //     // }
    //     // this.isEmpty = false;
    //     // this.questionnaires = questionnaires;
    //     // this.selectedQuestionnaire = this.questionnaires[0];
    //     // this.selectedIndex = 0;
    //   },
    //   error => console.error(error)
    // );
    


    this.questionnaireService.GetQuestionnaires().subscribe((res) => {
      console.log(res);
      console.log(typeof res);
      
    

      if(!this.questionnaires || this.questionnaires.length === 0){
        this.isEmpty = true;
        return
      }
      this.isEmpty =false;
      this.questionnaires = res;
      this.selectedQuestionnaire = this.questionnaires[0];
      this.selectedIndex =0;

    });


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
   

}
