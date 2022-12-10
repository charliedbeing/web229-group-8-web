import { Component, OnInit,Input,Output,EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionnaireModel} from '../../../../../service/questionnaire.model';
import { v4 as uuidv4 } from 'uuid';
import { OnlyOneService } from '../../../../../service/only-one.service';
import { AuthService } from '../../../../../shared/auth.service';
import { OnlyOne }from '../../../../../service/only-one.model';
@Component({
  selector: 'survey-controls',
  templateUrl: './survey-controls.component.html',
  styleUrls: ['./survey-controls.component.css']
})
export class SurveyControlsComponent implements OnInit ,OnChanges{

  @Input()
  questionnaire: QuestionnaireModel = new QuestionnaireModel;
  @Output() deleteQuestionnaire: EventEmitter<any> = new EventEmitter();
  @Output() publishQuestionnaire: EventEmitter<any> = new EventEmitter();
  @Output() closeQuestionnaire: EventEmitter<any> = new EventEmitter();

  canAnswer:boolean|undefined = false;
  canPreview:boolean|undefined = false;
  isNotExpire:boolean|undefined = true;
  constructor(private router: Router,
     private onlyOneServer: OnlyOneService,
     private userService:AuthService) {

   }

  ngOnInit(): void {

  
  }

  ngOnChanges(changes: SimpleChanges): void {

    if(this.questionnaire.expireDate !=undefined && this.questionnaire.createDate != undefined){
      let now = Date.parse(new Date().toDateString());
      let expire = Date.parse(this.questionnaire.expireDate.toString());

      if(now > expire){
        this.isNotExpire = false;
        this.canPreview= true;
        this.questionnaire.state =3;
      }
    }

    if(this.questionnaire.state == 0 && this.isNotExpire){
      this.canAnswer =false;
      this.canPreview = true;
    }

    if(this.questionnaire.state == 1 && this.isNotExpire){
      this.canAnswer =true;
      this.canPreview = false;
    }
    
    if(this.questionnaire.state == 2){
      this.canAnswer =false;
      this.canPreview = true;
    }



   
      
  }



  
  onEdit(){
    this.router.navigateByUrl('admin/edit/' + this.questionnaire._id);
  }

  onPreview(){

    this.router.navigateByUrl('published/' + this.questionnaire._id);
  }

  onDelete(){
    this.deleteQuestionnaire.emit();
  }

  onPublish(){
    this.publishQuestionnaire.emit();
  }

  onClose(){
    this.closeQuestionnaire.emit();
  }

  onPublic(){
    this.publishQuestionnaire.emit();
    //this.router.navigateByUrl('public/' + this.questionnaire._id);
    let onlyOne = uuidv4();
    console.log(onlyOne);
    let one = new OnlyOne();
    one.answerUUID =onlyOne;
    one.isAnswer =false;
    if(this.questionnaire._id !=undefined){
      one.questionnaireID = this.questionnaire._id;
    }
    one.userID = this.userService.getCurrentUserID();

    this.onlyOneServer.addOnlyOne(one).subscribe(res=>{

      this.router.navigate(['public/',this.questionnaire._id,  onlyOne]);


      
    })
   
  }

}
