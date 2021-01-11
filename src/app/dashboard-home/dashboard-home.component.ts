import { Component, OnInit, ViewChild } from '@angular/core';
import { RequisitionService } from '../api/requisition.service';
import { authenticationResponse } from '../models/auth-model';
import { requisition } from '../models/requisition-model';
import { LocalstorageService } from '../services/localstorage.service';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.css']
})
export class DashboardHomeComponent implements OnInit {

  constructor(private request: RequisitionService, private notification: NotificationService, private local: LocalstorageService) { }

  userRequisition: requisition[] = [];
  requestCount: number;
  modalName: string;
  authObj: authenticationResponse;

  ngOnInit(): void {
    this.authObj = JSON.parse(localStorage.getItem('userProperties'));
    this.request.getRequisitionByUserid(this.authObj.user_id).subscribe(p => {
      this.userRequisition = p;
    }, err => {
      this.notification.showError(err.statusText);
    });
  }

  showPopUpModal(contentName: string) {
    this.modalName = contentName;
  }

  searchResume(requestId) {
    if (this.authObj) {
      this.modalName = "resumeSearch**" + JSON.stringify({
        "user_id": this.authObj?.user_id,
        "req_id": requestId
      });
    }
  }

  showModalAddreq() {
    this.modalName = "AddReq";
  }

  assignRequisition(requestId) {
    var obj = {
      "requestId": requestId,
      "userId": this.authObj.user_id
    }
    this.modalName = "AssignRequisition**" + JSON.stringify(obj);
  }

  addUserSelf() {
    this.modalName = "AddUserSelf";
  }

}
