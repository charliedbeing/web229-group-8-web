import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { SurveyComponent } from './survey/survey.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { PartialsModule } from '../partials/partials.module'
import { RouterModule } from '@angular/router';
import { SurveyListComponent} from './survey-list/survey-list.component';
import { AddSurveyComponent } from './add-survey/add-survey.component';
import { SurveyDetailComponent} from './survey-detail/survey-detail.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';

import { AdminComponent } from './admin/admin.component';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';


import {QuestionCheckboxComponent} from './question/shared/question-checkbox/question-checkbox.component';
import {QuestionRadioComponent} from './question/shared/question-radio/question-radio.component';
import {QuestionScoreComponent} from './question/shared/question-score/question-score.component';
import {QuestionTextComponent} from './question/shared/question-text/question-text.component';



import { SurveyControlsComponent} from './admin/center/shared/survey-controls/survey-controls.component';
import {SurveyDetaillComponent} from './admin/center/shared/survey-detail/survey-detail.component';
import {SurveyItemComponent} from './admin/center/shared/survey-item/survey-item.component';
import { CenterComponent } from './admin/center/center.component';

import { QuestionSelectComponent} from './admin/edit/shared/question-select/question-select.component';
import { SurveyOutlineComponent } from './admin/edit/shared/survey-outline/survey-outline.component';
import { EditComponent } from './admin/edit/edit.component';

import { TabsModule } from 'ngx-bootstrap/tabs';
import { PublishedComponent } from './published/published.component';

import { StateStringPipe } from './../service/state.pipe';
import { AnswersComponent } from './answers/answers.component';

@NgModule({   
  imports:[CommonModule,BrowserModule,FormsModule,PartialsModule,
    ReactiveFormsModule,
    RouterModule,
    TabsModule.forRoot(),

  ],
  declarations: [
    AboutComponent,
    HomeComponent,
    ContactComponent,
    SurveyComponent,
    SurveyListComponent,
    SurveyDetailComponent,
    AddSurveyComponent,
    SigninComponent,
    SignupComponent,
    AdminComponent,
    StateStringPipe,
    

    QuestionCheckboxComponent,
    QuestionRadioComponent,
    QuestionScoreComponent,
    QuestionTextComponent,
    QuestionnaireComponent,

    // 
    CenterComponent,
    SurveyControlsComponent,
    SurveyDetaillComponent,
    SurveyItemComponent,

    // 
  
    SurveyOutlineComponent,
    QuestionSelectComponent,
    EditComponent,
    PublishedComponent,
    AnswersComponent,

  ],
  exports: [
    AboutComponent,
    HomeComponent,
    ContactComponent,
    SurveyComponent,
    PartialsModule,
    SurveyListComponent,
    AddSurveyComponent,

    QuestionCheckboxComponent,
    QuestionRadioComponent,
    QuestionScoreComponent,
    QuestionTextComponent,

    QuestionnaireComponent,

    CenterComponent,
    SurveyControlsComponent,
    SurveyDetaillComponent,
    SurveyItemComponent,
    
    SurveyOutlineComponent,
    QuestionSelectComponent,
    EditComponent,

    ]
})
export class PagesModule { }
