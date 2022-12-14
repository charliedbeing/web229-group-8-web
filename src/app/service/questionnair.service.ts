import { Injectable } from '@angular/core';
import { Observable ,throwError} from 'rxjs';
import { HttpClient, HttpHeaders ,  HttpErrorResponse} from '@angular/common/http';
import {QuestionnaireModel,QuestionnaireState } from '../service/questionnaire.model';
import { catchError, map } from 'rxjs/operators';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class QuestionnairService {
 
  //https://web-229-group-8-server.herokuapp.com
  //http://localhost:8000/questionnaire-api
//https://web-229-group-8-server.herokuapp.com/questionnaire-api
  REST_API: string = 'https://web-229-group-8-server.herokuapp.com/questionnaire-api';

  // Http Header
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private httpClient: HttpClient) {}

  // Add questionnaire Questionnaire
  AddQuestionnair(data: QuestionnaireModel): Observable<any> {
    let API_URL = `${this.REST_API}/add-questionnaire`;

    // console.log('--to -server--- ');
    // console.log(data);

    
    delete data._id;
    
    return this.httpClient
      .post(API_URL, data)
      .pipe(catchError(this.handleError));
  }

  // Get all objects
  GetQuestionnaires() {
    return this.httpClient.get(`${this.REST_API}/questionnaires`)
    .pipe(
      map((res:any)=><QuestionnaireModel[]> res),
      catchError(this.handleError)
    );
  }
  GetQuestionnairesForPublic() {
    return this.httpClient.get(`${this.REST_API}/questionnairesPublic`)
    .pipe(
      map((res:any)=><QuestionnaireModel[]> res),
      catchError(this.handleError)
    );
  }


    // Get all objects by userId
    GetQuestionnairesByUserId(userId:any) {
      return this.httpClient.get(`${this.REST_API}/questionnaires/${userId}`)
      .pipe(
        map((res:any)=><QuestionnaireModel[]> res),
        catchError(this.handleError)
      );
    }

  // Get single object
  GetQuestionnaireById(id: any): Observable<any> {
    let API_URL = `${this.REST_API}/questionnaire/${id}`;
    return this.httpClient.get(API_URL, { headers: this.httpHeaders }).pipe(
      map((res: any) => {
        return res || {};
      }),
      catchError(this.handleError)
    );
  }

  // Update
  updateQuestionnaire(id: any, data: any): Observable<any> {
    let API_URL = `${this.REST_API}/questionnaire/${id}`;
    return this.httpClient
      .put(API_URL, data, { headers: this.httpHeaders })
      .pipe(catchError(this.handleError));
  }

   // Update
   updateQuestionnaireState(id: any, data: any): Observable<any> {

    //console.log(data);


    let API_URL = `${this.REST_API}/questionnaire/${id}`;
    return this.httpClient
      .put(API_URL, data, { headers: this.httpHeaders })
      .pipe(catchError(this.handleError));
  }

  // Delete
  deleteQuestionnaire(id: any): Observable<any> {
    let API_URL = `${this.REST_API}/questionnaire/${id}`;
    return this.httpClient
      .delete(API_URL, { headers: this.httpHeaders })
      .pipe(catchError(this.handleError));
  }

  // Error
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Handle client error
      errorMessage = error.error.message;
    } else {
      // Handle server error
      errorMessage = `Error Code: ${error.status}nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

}
