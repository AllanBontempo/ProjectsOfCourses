import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SigninModule} from "./signin/signin.module";
import {VmessageModule} from "../shared/components/vmessage/vmessage.module";
import {RouterModule} from "@angular/router";
import {SignupModule} from "./singup/signup.module";
import { HomeComponent } from './home.component';
import {HomeRoutingModule} from "./home.routing.module";
import {SignupService} from "./singup/signup.service";


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    SigninModule,
    SignupModule,
    VmessageModule,
    RouterModule,
    HomeRoutingModule
  ],
  providers: [SignupService]
})
export class HomeModule {
}
