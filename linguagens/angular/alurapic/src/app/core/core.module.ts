import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderModule} from "./header/header.module";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {RequestInterceptor} from "./auth/request.interceptor";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HeaderModule,

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
