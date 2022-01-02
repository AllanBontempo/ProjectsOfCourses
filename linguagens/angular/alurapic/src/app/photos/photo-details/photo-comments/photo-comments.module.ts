import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoCommentsComponent } from './photo-comments.component';
import {RouterModule} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";
import {VmessageModule} from "../../../shared/components/vmessage/vmessage.module";



@NgModule({
  declarations: [
    PhotoCommentsComponent,
  ],
  exports: [
    PhotoCommentsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    VmessageModule
  ]
})
export class PhotoCommentsModule { }
