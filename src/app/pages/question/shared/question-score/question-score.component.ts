import { Component, EventEmitter, Input, Output,OnInit } from '@angular/core';
import { QuestionComponent } from '../../question.component';
import { QuestionModel } from '../../../../service/question.model';

@Component({
  selector: 'question-score',
  templateUrl: './question-score.component.html',
  styleUrls: ['./question-score.component.css']
})
export class QuestionScoreComponent extends QuestionComponent implements OnInit{


  @Input()
  override question: QuestionModel = new QuestionModel;
	@Input()
  override editable: boolean = false;
	@Output()override  deleteQuestionRequest: EventEmitter<any> = new EventEmitter();
  
  constructor() {super() }

  ngOnInit() {
    this.copyQuestion();
 
  }

}
