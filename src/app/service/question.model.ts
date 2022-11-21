export class QuestionModel {
    title!: String; 
    type!: QuestionType;  
    options?:any[]; //answer's option
    answer:any;    //questions' answer
  }
  

  export const enum QuestionType{
    Text,
    SingleSelect,
    MultiSelect,
    Score
  }
  