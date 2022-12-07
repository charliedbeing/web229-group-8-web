import { Component, EventEmitter, Input, Output,OnInit} from '@angular/core';
import { QuestionComponent } from '../../question.component';
import { QuestionModel } from '../../../../service/question.model';

@Component({
  selector: 'question-radio',
  templateUrl: './question-radio.component.html',
  styleUrls: ['./question-radio.component.css']
})
export class QuestionRadioComponent extends QuestionComponent implements OnInit{

  @Input()
  override question: QuestionModel = new QuestionModel;
	@Input()
  override editable: boolean = false;
	@Output()override  deleteQuestionRequest: EventEmitter<any> = new EventEmitter();
  private key: number|undefined;

  constructor() { super()}


   ngOnInit() {
    this.copyQuestion();
    let options = this.question.options || [];
    if(options.length>0){
      this.key =options[options.length-1].key;
    }else if(options.length ==0){
      this.key =0;
    }
    
   
   
  }

  onDeleteOption(index:number) {
    this.question.options = this.question.options || [];
    
    if(this.question.options.length <= 1) {
      return;
    }
    this.question?.options?.splice(index, 1);
  }

  onAddOption() {


    if(this.key != undefined){
      if(this.key>=0){
        this.question.options?.push({key: ++ this.key, value:'' });
      }
    }
  
    

    
  }

  setSelectedValue(checked: boolean, value: string) {
    let selected = this.question?.answer.selected;
    let index:number = selected.indexOf(value);

   // console.log(index);

}

}
