import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {TokenService} from "../token/token.service";

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

  constructor(
    private tokenService: TokenService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    if (this.tokenService.hasToken()) {
      const token = this.tokenService.token;
      request = request.clone({
        setHeaders: {
          'x-access-token': token as string
        }
      });
    }
    return next.handle(request);
  }
}
