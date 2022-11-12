import { Component, OnInit } from '@angular/core';
import { SurveyCrudService } from './../../service/survey-crud.service';

@Component({
  selector: 'app-survey-list',
  templateUrl: './survey-list.component.html',
  styleUrls: ['./survey-list.component.css']
})
export class SurveyListComponent implements OnInit {

  Surveys: any = [];

  constructor(private crudService: SurveyCrudService) {}

  ngOnInit(): void {
    this.crudService.GetSurveys().subscribe((res) => {
      console.log(res);
      this.Surveys = res;
    });
  }

  delete(id: any, i: any) {
    console.log(id);
    if (window.confirm('Do you want to go ahead?')) {
      this.crudService.deleteSurvey(id).subscribe((res) => {
        this.Surveys.splice(i, 1);
      });
    }
  }

}
