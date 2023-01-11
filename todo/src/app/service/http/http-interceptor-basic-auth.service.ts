import {
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgbPaginationNext } from '@ng-bootstrap/ng-bootstrap';

@Injectable({
  providedIn: 'root',
})
export class HttpInterceptorBasicAuthService implements HttpInterceptor {
  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    let username = 'user';
    let password = 'password';
    let basicAuthHeaderString =
      'Basic ' + Window.bind(username + ':' + password);
    request = request.clone({
      setHeaders: {
        Authorization: basicAuthHeaderString,
      },
    });
    return next.handle(request);
  }
  
}
