import { Component,EventEmitter, Input, OnInit, Output} from '@angular/core';
import { QuestionComponent } from '../../question.component';
import { QuestionModel } from '../../../../service/question.model';

@Component({
  selector: 'question-checkbox',
  templateUrl: './question-checkbox.component.html',
  styleUrls: ['./question-checkbox.component.css']
})
export class QuestionCheckboxComponent extends QuestionComponent implements OnInit {

  @Input()
  override question: QuestionModel = new QuestionModel;
	@Input()
  override editable: boolean = false;
	@Output()override  deleteQuestionRequest: EventEmitter<any> = new EventEmitter();
	private key: number |undefined;

  constructor() {super() ;
    this.question.options= this.question.options|| [];
  }


  ngOnInit() {
    
    this.copyQuestion();
    let options = this.question.options|| [];

    if(options.length ==0){
      this.key =0;
    }else if(options.length >0){
      this.key = options[options.length-1].key;
    }
   
      
    if(!this.question.answer.selected){
          this.question.answer.selected = [];
    }  

	}

  onDeleteOption(index: number) {

    if(this.question?.options){
      if(this.question.options.length <= 1) {
        return;
      }
  
      this.question.options.splice(index, 1);
    }
   
  }

  onAddOption() {

    if(this.key != undefined){
      if(this.key >= 0){
        this.question?.options?.push({key:  ++ this.key, value:'' });
      }
    }
   
  
  }

  setSelectedValue(checked:boolean, value: string) {
    
      let selected = this.question?.answer.selected;
      
      let index:number = selected.indexOf(value);
      
      if(checked){
          if(index < 0){
              selected.push(value);
          }
      }else{
          if(index > -1){
              selected.splice(index, 1);
          }
      }
  }
}
