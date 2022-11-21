import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { QuestionCheckboxComponent} from './shared/question-checkbox/question-checkbox.component';
import { QuestionRadioComponent} from './shared/question-radio/question-radio.component';
import { QuestionScoreComponent} from './shared/question-score/question-score.component';
import { QuestionTextComponent } from './shared/question-text/question-text.component';

@NgModule({
  declarations: [
    // QuestionCheckboxComponent,
    // QuestionRadioComponent,
    // QuestionScoreComponent,
    // QuestionTextComponent
  ],
  imports: [
    CommonModule,FormsModule
  ],
  exports:[
    // QuestionCheckboxComponent,
    // QuestionRadioComponent,
    // QuestionScoreComponent,
    // QuestionTextComponent
  ]
})
export class QuestionSharedModule { }
