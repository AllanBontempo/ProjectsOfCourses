import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SigninModule} from "./signin/signin.module";
import {VmessageModule} from "../shared/components/vmessage/vmessage.module";
import {RouterModule} from "@angular/router";
import {SignupModule} from "./singup/signup.module";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SigninModule,
    SignupModule,
    VmessageModule,
    RouterModule
  ]
})
export class HomeModule {
}
