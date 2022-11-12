import { Component, OnInit,NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { SurveyCrudService } from './../../service/survey-crud.service';
import { FormGroup, FormBuilder,ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-survey',
  templateUrl: './add-survey.component.html',
  styleUrls: ['./add-survey.component.css']
})
export class AddSurveyComponent implements OnInit {
  surveyForm: FormGroup;

  constructor( 
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private crudService: SurveyCrudService) { 

      this.surveyForm = this.formBuilder.group({
        userId: [''],
        title: [''],
        starter: [''],
        ender: [''],
        state: [''],
        questionList: [[]],
        createDate:['']
      });
    }

  ngOnInit(): void {
  }
  onSubmit(): any {
    this.crudService.AddSurvey(this.surveyForm.value).subscribe(
      () => {
        console.log('Data added successfully!');
    
        this.ngZone.run(() => this.router.navigateByUrl('/survey-list'));
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
