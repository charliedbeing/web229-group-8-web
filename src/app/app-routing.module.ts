import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { SurveyComponent } from './pages/survey/survey.component';

import {AddSurveyComponent} from './pages/add-survey/add-survey.component';
import {SurveyListComponent} from './pages/survey-list/survey-list.component';
import {SurveyDetailComponent} from './pages/survey-detail/survey-detail.component';

import {SigninComponent} from './pages/auth/signin/signin.component'
import {SignupComponent} from './pages/auth/signup/signup.component';
import {AuthGuard} from './shared/auth.guard';


import {AdminComponent} from './pages/admin/admin.component';
import { CenterComponent }from './pages/admin/center/center.component';
import { EditComponent } from './pages/admin/edit/edit.component';

import { PublishedComponent} from './pages/published/published.component';
import { AnswersComponent } from './pages/answers/answers.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent, data: { title: 'Home' } },
  { path: 'about', component: AboutComponent, data: { title: 'About' } },
  { path: 'contact', component: ContactComponent, data: { title: 'Contact' } },
  { path: 'survey', component: SurveyComponent, data: { title: 'Survey' } },
  { path: 'survey-list', component: SurveyListComponent },
  { path: 'add-survey', component: AddSurveyComponent,canActivate: [AuthGuard] },
  { path: 'edit-survey/:id', component: SurveyDetailComponent,canActivate: [AuthGuard] },
  // auth

  { path: 'log-in', component: SigninComponent },
  { path: 'sign-up', component: SignupComponent },
  
  {
    path:'admin',
    component:AdminComponent,
    canActivate:[AuthGuard],
    children:[
      {
        path:'',
        children:[
          {path:'center',component:CenterComponent},
          {path:'edit/:id', component:EditComponent}
        ]
      }
    ]
  },
  {
    path: 'published/:id',
    component: PublishedComponent
  },
  {
    path: 'answer/:id',
    component: AnswersComponent
  }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
