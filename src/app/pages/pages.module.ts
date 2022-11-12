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


@NgModule({   
  imports:[CommonModule,BrowserModule,FormsModule,PartialsModule,
    RouterModule,ReactiveFormsModule 
  ],
  declarations: [
    AboutComponent,
    HomeComponent,
    ContactComponent,
    SurveyComponent,
    SurveyListComponent,
    AddSurveyComponent,
    SurveyDetailComponent


  ],
  exports: [
    AboutComponent,
    HomeComponent,
    ContactComponent,
    SurveyComponent,
    PartialsModule,
    SurveyListComponent,
    AddSurveyComponent,
    SurveyDetailComponent
    ]
})
export class PagesModule { }
