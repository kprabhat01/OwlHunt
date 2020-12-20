import { ThrowStmt } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { authenticationResponse, credential } from '../models/auth-model';
import { HttpRequestService } from '../services/http-request.service';
import { LocalstorageService } from '../services/localstorage.service';
import { NotificationService } from '../services/notification.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpRequest: HttpRequestService, private notification: NotificationService, private storage: LocalstorageService) { }

  authenticateUser(obj: credential) {
    this.httpRequest.post<authenticationResponse>("login", obj).subscribe(p => {
      if (p.Result === "Success" && p.user_id >= 1) {
        this.storage.saveData("userProperties", p);
        this.notification.showInfo("User account has been loggedin Successfully");
      } else {
        this.notification.showError("Invaild Credentials!!");
      }

    }, err => {
      this.notification.showError(err.statusText);
    });
  }

}
