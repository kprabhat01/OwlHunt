import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable, throwError } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';
import { LocalstorageService } from '../services/localstorage.service';
import { NotificationService } from '../services/notification.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {

  constructor(
    private notifications: NotificationService,
    private spinner: NgxSpinnerService,
    private local: LocalstorageService,
    private route: Router) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
debugger;
    const token = JSON.parse(this.local.getData('userProperties'))?.accessToken;
    this.spinner.show();
    let clone: HttpRequest<any>;
    //let contentType = 'application/json';

    if (request.body instanceof FormData) {
      //contentType = 'multipart/form-data';
    }


    if (token) {

      clone = request.clone({
        setHeaders: {
          Accept: 'application/json',          
          Authorization: 'Bearer ' + token
        }

      });
    } else {
      clone = request.clone({
        setHeaders: {
          Accept: `application/json`,
          'Content-Type': `application/json`
        }
      });

    }

    // const AuthRequest = request.clone();
    return next.handle(clone).pipe(
      catchError(err => {
        if (err.status === 401) {
          this.local.clearStorage();
          this.route.navigate(['/login']);
        }
        return throwError(err);
      }),
      finalize(() => this.spinner.hide())
    );
  }
}
