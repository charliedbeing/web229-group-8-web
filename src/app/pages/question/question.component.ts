import { Component, OnInit,EventEmitter } from '@angular/core';
import { QuestionModel } from '../../service/question.model';

// @Component({
//   selector: 'app-question',
//   templateUrl: './question.component.html',
//   styleUrls: ['./question.component.css']
// })

export class QuestionComponent  {

  
  question: QuestionModel |undefined;
  backupQuestion: QuestionModel |undefined;
  editable: boolean = false;
  isEditing: boolean = false;
  deleteQuestionRequest: EventEmitter<any> = new EventEmitter();

  // ngOnInit(){
  //   this.copyQuestion();
  // }

  private copy(source: QuestionModel): QuestionModel {
    return <QuestionModel>JSON.parse(JSON.stringify(source));
  }

  public copyQuestion() {
    if(this.question){
      this.backupQuestion = this.copy(this.question);
    }
    

  }

  onEdit() {
    this.isEditing = true;
  }

  onSave() {
    this.copyQuestion();
    this.isEditing = false;
  }

  onCancel() {
    if(this.backupQuestion){
      this.question = this.copy(this.backupQuestion);
    }
   
    this.isEditing = false;
  }

  onDelete() {
    this.deleteQuestionRequest.emit(this.question);
  }

}
