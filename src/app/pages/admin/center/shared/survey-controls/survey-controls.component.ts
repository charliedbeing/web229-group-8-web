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

  constructor(private router: Router) { }

  ngOnInit(): void {

  
  }

  ngOnChanges(changes: SimpleChanges): void {

        // console.log(this.questionnaire.state);
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

}
