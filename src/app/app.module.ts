import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MensajeComponent } from './mensaje/mensaje.component';
import { FormsModule } from '@angular/forms'; 
import { Clipboard } from '@angular/cdk/clipboard'; //npm install @angular/material @angular/cdk --force o npm install @angular/material @angular/cdk --legacy-peer-deps
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    MensajeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [Clipboard ],
  bootstrap: [AppComponent]
})
export class AppModule { }
