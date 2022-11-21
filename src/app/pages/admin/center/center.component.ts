import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { QuestionnairService} from '../../../service/questionnair.service';
import { QuestionnaireModel,QuestionnaireState } from '../../../service/questionnaire.model';

@Component({
  selector: 'app-center',
  templateUrl: './center.component.html',
  styleUrls: ['./center.component.css']
})
export class CenterComponent implements OnInit {

   questionnaires:QuestionnaireModel[] = [];
   selectedQuestionnaire: QuestionnaireModel = new QuestionnaireModel;
   selectedIndex!: number;
   isEmpty: boolean = false;

  constructor(
    private cd:ChangeDetectorRef,
    private questionnaireService: QuestionnairService,

  ) { }

  ngOnInit(): void {

    this.questionnaireService.GetQuestionnaires()
    .subscribe(
      questionnaires => {
        // 后端返回空对象或者空的问卷数组
        if(!questionnaires || questionnaires.length === 0){
          this.isEmpty = true;
          return;
        }
        this.isEmpty = false;
        this.questionnaires = questionnaires;
        this.selectedQuestionnaire = this.questionnaires[0];
        this.selectedIndex = 0;
      },
      error => console.error(error)
    );


  }

  onSelect(questionnaire:QuestionnaireModel, index:number) {
    this.selectedQuestionnaire = questionnaire;
    this.selectedIndex = index;
  }

  onDeleteQuestionnaire() {
    this.questionnaireService.deleteQuestionnaire(this.selectedQuestionnaire.id)
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

  onPublishQuestionnaire(){
    this.questionnaireService.updateQuestionnaireState(this.selectedQuestionnaire.id, QuestionnaireState.Published)
          .subscribe(
            questionnaire => {
              this.selectedQuestionnaire.state = QuestionnaireState.Published;
              this.questionnaires[this.selectedIndex] = Object.assign({}, this.selectedQuestionnaire);
              this.cd.detectChanges();
            },
            error => console.log(error)
          );
  }

}
