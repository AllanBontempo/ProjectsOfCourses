import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SigninModule} from "./signin/signin.module";
import {VmessageModule} from "../shared/components/vmessage/vmessage.module";
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SigninModule,
    VmessageModule,
    RouterModule
  ]
})
export class HomeModule {
}
