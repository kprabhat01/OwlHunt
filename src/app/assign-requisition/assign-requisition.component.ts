import { Component, Input, OnInit } from '@angular/core';
import { RequisitionService } from '../api/requisition.service';
import { orgUser } from '../models/org-user';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-assign-requisition',
  templateUrl: './assign-requisition.component.html',
  styleUrls: ['./assign-requisition.component.css']
})
export class AssignRequisitionComponent implements OnInit {

  @Input() searchUserId: string;
  userDetails: orgUser;
  reqObj: any;

  constructor(private requisition: RequisitionService, private notification: NotificationService) { }

  ngOnInit(): void {
    this.reqObj = JSON.parse(this.searchUserId.split('**')[1]);

    this.requisition.getOrgUsers<orgUser>(this.reqObj.userId).subscribe(p => {
      if (p) {
        this.userDetails = p;
      }
    }, err => {
      this.notification.showError(err.statusText);
    })
  }

  assignUser(userId) {
    var obj = {
      "req_owner_id": userId,
      "req_id": this.reqObj.requestId
    }

    this.requisition.assignRequisition(obj);
  }
  

}
