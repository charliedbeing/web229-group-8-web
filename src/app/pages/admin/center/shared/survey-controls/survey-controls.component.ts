import { Component, OnInit,Input,Output,EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionnaireModel} from '../../../../../service/questionnaire.model';

@Component({
  selector: 'survey-controls',
  templateUrl: './survey-controls.component.html',
  styleUrls: ['./survey-controls.component.css']
})
export class SurveyControlsComponent implements OnInit ,OnChanges{

  @Input()
  questionnaire: QuestionnaireModel = new QuestionnaireModel;
  @Output() deleteQuestionnaire: EventEmitter<any> = new EventEmitter();
  @Output() publishQuestionnaire: EventEmitter<any> = new EventEmitter();
  @Output() closeQuestionnaire: EventEmitter<any> = new EventEmitter();

  canAnswer:boolean|undefined = false;
  canPreview:boolean|undefined = false;

  constructor(private router: Router) {

   }

  ngOnInit(): void {

  
  }

  ngOnChanges(changes: SimpleChanges): void {

    if(this.questionnaire.state == 0){
      this.canAnswer =false;
      this.canPreview = true;
    }

    if(this.questionnaire.state == 1){
      this.canAnswer =true;
      this.canPreview = false;
    }
      
    if(this.questionnaire.state == 2){
      this.canAnswer =false;
      this.canPreview = true;
    }
      
  }



  
  onEdit(){
    this.router.navigateByUrl('admin/edit/' + this.questionnaire._id);
  }

  onPreview(){

    this.router.navigateByUrl('published/' + this.questionnaire._id);
  }

  onDelete(){
    this.deleteQuestionnaire.emit();
  }

  onPublish(){
    this.publishQuestionnaire.emit();
  }

  onClose(){
    this.closeQuestionnaire.emit();
  }

}
