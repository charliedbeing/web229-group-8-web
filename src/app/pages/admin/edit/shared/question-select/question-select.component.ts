import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { QuestionType } from '../../../../../service/question.model';

@Component({
  selector: 'question-select',
  templateUrl: './question-select.component.html',
  styleUrls: ['./question-select.component.css']
})
export class QuestionSelectComponent implements OnInit {
  @Output() addQuestionRequest = new EventEmitter();
  controls :any[]|undefined;

  constructor() {
    this.controls = [
      {type: QuestionType.Text, label: 'Text', iconClass: 'icon-text'},
      {type: QuestionType.SingleSelect, label: 'Single-Select', iconClass: 'icon-radio'},
      {type: QuestionType.MultiSelect, label: 'Multi-Select', iconClass: 'icon-checkbox'},
      {type: QuestionType.Score, label: 'Score ', iconClass: 'icon-star'}
    ];
   }

   onAddQuestion(control: any) {
    this.addQuestionRequest.emit(control.type);
  }

  ngOnInit(): void {
  }

}
