import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PhotoFormComponent} from "./photo-form.component";
import {ReactiveFormsModule} from "@angular/forms";
import {VmessageModule} from "../../shared/components/vmessage/vmessage.module";
import {PhotoModule} from "../photo/photo.module";
import {ImmediateClickModule} from "../../shared/directives/immediate-click/immediate-click.module";



@NgModule({
  declarations: [
    PhotoFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    VmessageModule,
    PhotoModule,
    ImmediateClickModule
  ]
})
export class PhotoFormModule { }
