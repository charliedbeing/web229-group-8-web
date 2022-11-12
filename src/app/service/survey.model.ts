import { QuestionModel } from "./question.model";

export class Survey {
    _id!: String;
    userId!: String;
    title!: String;
    starter!: String;
    ender!: String;
    state!:SurveyState;
    questionList!:QuestionModel[];
    creatDate!: String;
  }
  
export const enum SurveyState{
    Created,   
    Published, 
    Finished   
  }
  