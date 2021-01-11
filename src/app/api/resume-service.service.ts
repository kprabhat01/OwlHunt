import { ThrowStmt } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { HttpRequestService } from '../services/http-request.service';
import { NotificationService } from '../services/notification.service';

@Injectable({
  providedIn: 'root'
})
export class ResumeServiceService {

  constructor(private http: HttpRequestService, private notification: NotificationService) { }


  uploadResume(obj: any) {

    this.http.post('resume_upload', obj).subscribe(p => {
      if (p) {
        this.notification.showSuccess('The information has been saved successfully');
      }
    }, err => {
      this.notification.showError(err.statusText);
    })
  }

  searchResume<resumeSearch>(obj: any) {
    return this.http.post<resumeSearch>('resume_search', obj);
  }

}
