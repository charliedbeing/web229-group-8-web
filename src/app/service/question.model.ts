export class QuestionModel {
    title:String | undefined; 
    type:QuestionType | undefined;  
    options?:any[]; //answer's option
    answer:any;    //questions' answer
  }
  

  export const enum QuestionType{
    Text,
    SingleSelect,
    MultiSelect,
    Score
  }
  