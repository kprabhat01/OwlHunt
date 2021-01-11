import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { requisition } from '../models/requisition-model';
import { HttpRequestService } from '../services/http-request.service';
import { NotificationService } from '../services/notification.service';

@Injectable({
  providedIn: 'root'
})
export class RequisitionService {

  constructor(private http: HttpRequestService, private notification: NotificationService) {
  }

  getRequisitionByUserid(userid: Number): Observable<requisition[]> {
    return this.http.getWithParams<requisition[]>('display_req', { user_id: userid });
  }

  addRequisition(obj: any) {
    this.http.post('addreq', obj).subscribe(p => {
      if (p) {
        this.notification.showSuccess('Information has been save.');
      }
    }, err => {
      this.notification.showError('Error while saving information');
    })

  }

  getOrgUsers<orgUser>(userId: number) {
    return this.http.getWithParams<orgUser>('get_user', { "user_id": userId });
  }

  assignRequisition(obj: any) {
    this.http.post('assign_req', obj).subscribe(p => {
      if (p) {
        this.notification.showSuccess('Information has been assigned.');
      }
    }, err => {
      this.notification.showError('Error in assignment.');
    })

  }

}
