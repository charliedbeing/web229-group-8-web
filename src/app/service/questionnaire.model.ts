import {QuestionModel} from './question.model'
// data modle define
export class QuestionnaireModel{
    userId?:string; // each user has own questionnaire
    _id?:string; 
    title!: string; 
    starter!:string; 
    ending!:string;  
    state?:QuestionnaireState; 
    questionList?: QuestionModel[];  
    createDate?:Date; 
    expireDate?:Date;
    collectionData!: QuestionModel[][];

  }
  
  //
  export const enum QuestionnaireState{
    Created,   // can be edit structures , keys are active.
    Published, // structures can not changed, collecting data. value active.
    Finished ,  // current version finished, value unactive.
    Expired
  }