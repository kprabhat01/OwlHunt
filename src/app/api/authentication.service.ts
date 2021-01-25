import { ThrowStmt } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { authenticationResponse, credential } from '../models/auth-model';
import { HttpRequestService } from '../services/http-request.service';
import { LocalstorageService } from '../services/localstorage.service';
import { NotificationService } from '../services/notification.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private httpRequest: HttpRequestService,
    private notification: NotificationService,
    private storage: LocalstorageService,
    private route: Router,
    private local: LocalstorageService
  ) { }

  authenticateUser(obj: credential) {
    this.httpRequest.post<authenticationResponse>("login", obj).subscribe(p => {
      if (p.Result === "Success" && p.user_id >= 1) {
        this.storage.saveData("userProperties", JSON.stringify(p));
        this.route.navigate(['/dashboard']);
      } else {
        this.notification.showError("Invaild Credentials!!");
      }

    }, err => {
      this.notification.showError(err.statusText);
    });
  }

  isAuthenticated(): boolean {
    const obj: authenticationResponse = JSON.parse(this.local.getData('userProperties'));
    if (obj) {
      let hasAuthentication: boolean = obj.user_id >= 1 && obj.accessToken ? true : false;
      return hasAuthentication;
    } else {
      return false;
    }
  }

  logOffUser() {
    this.local.clearStorage();
    this.route.navigate(['/login']);
  }

  addUserSelf(obj: any) {
    this.httpRequest.post('add_user', obj).subscribe(p => {
      if (p) {
        this.notification.showSuccess('User account has been added');
      }
    }, err => {
      this.notification.showError('Error while adding user');
    })
  }

  sendPasswordLink(obj: any) {
    this.httpRequest.post('reset_password', obj).subscribe(p => {
      if (p) {
        this.notification.showSuccess('An email has been sent to your email address');
      }
    }, err => {
      this.notification.showError('Error while sending request');
    })
  }

  checkTokenForRestPassword<T>(token: string): Observable<T> {
    return this.httpRequest.get<T>('verify_token/' + token);
  }

  resetPassword(obj: any) {
    this.httpRequest.post('verify_password', obj).subscribe(p => {
      if (p) {
        this.notification.showSuccess('Password has been changed successfull');
      }
    }, err => this.notification.showError('Error while changing password'));
  }


}
