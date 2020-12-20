import { ThrowStmt } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { HttpRequestService } from '../services/http-request.service';
import { NotificationService } from '../services/notification.service';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http: HttpRequestService, private notification: NotificationService) { }

  signUpUser(obj: any) {
    this.http.post("register", obj).subscribe(p => {
      debugger;
      console.log(p);
      if (p) {
        this.notification.showSuccess("Information has been saved successfully");
      }
    }, err => {
      this.notification.showError(err.statusText);
    });
  }

}
