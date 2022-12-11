import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { OnlyOne } from './only-one.model'


import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OnlyOneService {


    // http://localhost:8000/questionnaire-api
    //'https://web-229-group-8-server.herokuapp.com/survey-api'
    // 'http://localhost:8000/answer-api'

    REST_API: string = 'https://web-229-group-8-server.herokuapp.com/answer-api';

    httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

    constructor(private httpClient: HttpClient) { }



 addOnlyOne(data: OnlyOne): Observable<any> {
    let API_URL = `${this.REST_API}/onlyone`;
    return this.httpClient
      .post(API_URL, data)
      .pipe(catchError(this.handleError));
  }

  getPublicQuestionnaire(ids:string[]){
    let API_URL = `${this.REST_API}/onlyones`;
    return this.httpClient
      .post(API_URL,ids,{ headers: this.httpHeaders }).pipe(
        map((res: any) => <OnlyOne[]> res),
        catchError(this.handleError)
        );
  }


  getPublicQuestionnaire_bak(){
    let API_URL = `${this.REST_API}/onlyones`;
    return this.httpClient
      .get(API_URL,{ headers: this.httpHeaders }).pipe(
        map((res: any) => <OnlyOne[]> res),
        catchError(this.handleError)
        );
  }

  getPublicQuestionnaireByUserId(userId:string){
    let API_URL = `${this.REST_API}/onlyones/${userId}`;
    return this.httpClient
      .get(API_URL,{ headers: this.httpHeaders }).pipe(
        map((res: any) => <OnlyOne[]> res),
        catchError(this.handleError)
        );
  }


    // // Get all objects by userId
    // GetQuestionnairesByUserId(userId:any) {
    //   return this.httpClient.get(`${this.REST_API}/questionnaires/${userId}`)
    //   .pipe(
    //     map((res:any)=><QuestionnaireModel[]> res),
    //     catchError(this.handleError)
    //   );
    // }



  checkIsAnswer(uudi: string): Observable<any> {
    let API_URL = `${this.REST_API}/onlyone/${uudi}`;
    return this.httpClient
      .get(API_URL,{ headers: this.httpHeaders }).pipe(
        map((res: any) => {
          return res || {};
        }),
        catchError(this.handleError)
        );
    
  }



  updatehasAnswered(uudi: string, data:any): Observable<any> {
    let API_URL = `${this.REST_API}/onlyone/${uudi}`;
    return this.httpClient
      .put(API_URL,data,{ headers: this.httpHeaders }).pipe(
        map((res: any) => {
          return res || {};
        }),
        catchError(this.handleError)
        );
    
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
