import { TitleStrategy } from "@angular/router";

export class HomeAndAbout{
    home:string
    about:string

    constructor(){
        this.home=`This is a survey website`;
        this.about =`You can do most thing about your survey as you want`;
    }

    getHome(){
        return this.home;
    }

    getAbout(){
        return this.about;
    }
}