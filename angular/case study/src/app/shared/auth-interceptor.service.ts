import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthinterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    if (sessionStorage.getItem('token') && sessionStorage.getItem('username')) {
      req = req.clone({
        setHeaders: {
          Authorization: sessionStorage.getItem('token')
        }
      })
    }
    return next.handle(req)
  }
}