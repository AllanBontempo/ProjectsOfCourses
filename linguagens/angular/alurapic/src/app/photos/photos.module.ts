import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PhotoComponent} from "./photo/photo.component";
import {HttpClientModule} from "@angular/common/http";



@NgModule({
  declarations: [
    PhotoComponent
  ],
  exports: [
    PhotoComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class PhotosModule { }
