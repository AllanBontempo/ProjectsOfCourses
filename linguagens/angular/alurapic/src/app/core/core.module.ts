import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderModule} from "./header/header.module";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {RequestInterceptor} from "./auth/request.interceptor";
import {AlertModule} from "../shared/components/alert/alert.module";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HeaderModule,
    AlertModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptor,
      multi: true
    }
  ]
})
export class CoreModule {
}
