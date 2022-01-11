import {ErrorHandler, Injectable, Injector} from '@angular/core';
import * as StackTrace from 'stacktrace-js';
import {LocationStrategy, PathLocationStrategy} from "@angular/common";
import {UserService} from "../../core/user/user.service";
import {ServerLogService} from "./server-log.service";
import {Router} from "@angular/router";

@Injectable()
export class GlobalErrorHandlerInterceptor implements ErrorHandler {

  constructor(
    private injector: Injector
  ) {
  }

  handleError(error: any) {
    const location = this.injector.get(LocationStrategy);
    const userService = this.injector.get(UserService);
    const serverLogService = this.injector.get(ServerLogService);
    const router = this.injector.get(Router);
    const url = location instanceof PathLocationStrategy ? location.path() : '';
    const message = error.message ? error.message : error.toString();
    router.navigate(['/error']);

    StackTrace.fromError(error)
      .then((stackFrames) => {
        const stackAsString = stackFrames.map(stack => stack.toString()).join('\n');
        serverLogService.log(
          {
            message,
            url,
            userName: userService.getUserName(),
            stack: stackAsString
          }
        ).subscribe(() => console.log('error logged on server')
          , err => console.log('Fail to send log to server', err));
      });
  }

}
