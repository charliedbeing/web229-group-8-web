import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionnaireModel} from '../../../../../service/questionnaire.model';

@Component({
  selector: 'survey-controls',
  templateUrl: './survey-controls.component.html',
  styleUrls: ['./survey-controls.component.css']
})
export class SurveyControlsComponent implements OnInit {

  @Input()
  questionnaire: QuestionnaireModel = new QuestionnaireModel;
  @Output() deleteQuestionnaire: EventEmitter<any> = new EventEmitter();
  @Output() publishQuestionnaire: EventEmitter<any> = new EventEmitter();

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  
  onEdit(){
    this.router.navigateByUrl('admin/edit/' + this.questionnaire.id);
  }

  onPreview(){
    this.router.navigateByUrl('published/' + this.questionnaire.id);
  }

  onDelete(){
    this.deleteQuestionnaire.emit();
  }

  onPublish(){
    this.publishQuestionnaire.emit();
  }

}
