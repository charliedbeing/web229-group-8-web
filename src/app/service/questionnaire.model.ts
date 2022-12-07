import {QuestionModel} from './question.model'
// data modle define
export class QuestionnaireModel{
    userId?:String; // each user has own questionnaire
    _id?:String; 
    title!: String; 
    starter!:String; 
    ending!:String;  
    state?:QuestionnaireState; 
    questionList?: QuestionModel[];  
    createDate?:Date; 
    expireDate?:String;
    collectionData!: QuestionModel[][];

  }
  
  //
  export const enum QuestionnaireState{
    Created,   // can be edit structures , keys are active.
    Published, // structures can not changed, collecting data. value active.
    Finished   // current version finished, value unactive.
  }