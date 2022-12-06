import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';
import { QuestionComponent } from '../../question.component';
import { QuestionModel } from '../../../../service/question.model';
@Component({
  selector: 'question-text',
  templateUrl: './question-text.component.html',
  styleUrls: ['./question-text.component.css']
})
export class QuestionTextComponent extends QuestionComponent  {
 
   @Input()
  override question: QuestionModel = new QuestionModel;
   @Input()
  override editable: boolean = false;
   @Output() override deleteQuestionRequest: EventEmitter<any> = new EventEmitter();


}
