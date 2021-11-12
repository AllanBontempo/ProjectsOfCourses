import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {CommonModule} from "@angular/common";

import {PhotosModule} from "./photos/photos.module";

@NgModule({
    declarations: [
        AppComponent,
    ],
  imports: [
    CommonModule,
    BrowserModule,
    PhotosModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
