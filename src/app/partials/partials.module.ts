import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BasePageComponent } from './base-page/base-page.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({

  imports: [BrowserModule, FormsModule, RouterModule],
  declarations: [
    BasePageComponent,
    HeaderComponent,
    FooterComponent
  ],
  exports: [
    BasePageComponent,
    FooterComponent,
    HeaderComponent,
  ],
})
export class PartialsModule { }
