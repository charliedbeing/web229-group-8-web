import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { SurveyComponent } from './pages/survey/survey.component';

import {AddSurveyComponent} from './pages/add-survey/add-survey.component';
import {SurveyListComponent} from './pages/survey-list/survey-list.component';
import {SurveyDetailComponent} from './pages/survey-detail/survey-detail.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, data: { title: 'Home' } },
  { path: 'about', component: AboutComponent, data: { title: 'About' } },
  { path: 'contact', component: ContactComponent, data: { title: 'Contact' } },
  { path: 'survey', component: SurveyComponent, data: { title: 'Survey' } },
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  // { path: '**', redirectTo: '/home' },

  { path: 'survey-list', component: SurveyListComponent },
  { path: 'add-survey', component: AddSurveyComponent },
  { path: 'edit-survey/:id', component: SurveyDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
