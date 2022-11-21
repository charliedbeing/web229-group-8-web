import {QuestionModel} from './question.model'
// data modle define
export class QuestionnaireModel{
    userId?:string; // each user has own questionnaire
    id!:string; 
    title!: string; 
    starter!:string; 
    ending!:string;  
    state?:QuestionnaireState; 
    questionList?: QuestionModel[];  
    createDate?:string; 
    expireDate?:string;
    collectionDate?: Array <
    {
      version?:string;
      endDate?:string;
      data?:Array<QuestionModel[]>
    }
    > ;

  }
  
  //
  export const enum QuestionnaireState{
    Created,   // can be edit structures , keys are active.
    Published, // structures can not changed, collecting data. value active.
    Finished   // current version finished, value unactive.
  }