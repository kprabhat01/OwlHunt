import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { NotificationService } from '../services/notification.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {

  constructor(private notifications: NotificationService, private spinner: NgxSpinnerService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    this.spinner.show();
    const AuthRequest = request.clone();
    return next.handle(AuthRequest).pipe(finalize(() => this.spinner.hide()));
  }
}
