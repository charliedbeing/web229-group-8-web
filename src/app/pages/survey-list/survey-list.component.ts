import { Component, OnInit } from '@angular/core';
import { SurveyCrudService } from './../../service/survey-crud.service';
import { AuthService}from './../../shared/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-survey-list',
  templateUrl: './survey-list.component.html',
  styleUrls: ['./survey-list.component.css']
})
export class SurveyListComponent implements OnInit {

  Surveys: any = [];

  constructor(private crudService: SurveyCrudService ,   public authService: AuthService,
    public router: Router ) {}

  ngOnInit(): void {
    this.crudService.GetSurveys().subscribe((res) => {
      console.log(res);
      this.Surveys = res;
    });
  }

  delete(id: any, i: any) {
    console.log(id);
    if (window.confirm('Do you want to go ahead? Plese log in first')) {
      if(this.authService.isLoggedIn){
        this.crudService.deleteSurvey(id).subscribe((res) => {
          this.Surveys.splice(i, 1);
        });
      }else{
        this.router.navigate(['log-in']);
      }
    
    }
  }

}
