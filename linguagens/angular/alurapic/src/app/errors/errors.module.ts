import {ErrorHandler, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';
import {GlobalErrorHandlerInterceptor} from "./global-error-handler/global-error-handler.interceptor";
import { GlobalErrorComponent } from './global-error/global-error.component';
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    NotFoundComponent,
    GlobalErrorComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  providers: [
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandlerInterceptor
    }
  ]
})
export class ErrorsModule { }
