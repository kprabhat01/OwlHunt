import { Options } from '@angular-slider/ngx-slider';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RequisitionService } from '../api/requisition.service';

@Component({
  selector: 'app-add-requisition',
  templateUrl: './add-requisition.component.html',
  styleUrls: ['./add-requisition.component.css']
})
export class AddRequisitionComponent implements OnInit {

  reqForm: FormGroup;
  value: number = 0;
  highValue: number = 5;
  options: Options = {
    floor: 0,
    ceil: 60
  };

  constructor(private formBuilder: FormBuilder, private requisition: RequisitionService) { }

  ngOnInit(): void {
    this.reqForm = this.formBuilder.group({
      Req_name: ['', Validators.required],
      Req_roles: ['', Validators.required],
      req_duties: ['', Validators.required],
      req_max_exp: ['', Validators.required],
      req_min_exp: ['', Validators.required],
      req_skills: ['', Validators.required]
    });

    this.pathValueOfExperiance();
  }

  SubmitReq() {
    this.pathValueOfExperiance();

    if (this.reqForm.valid) {
      this.requisition.addRequisition(this.reqForm.value);
    }
  }

  pathValueOfExperiance() {
    this.reqForm.patchValue({
      req_min_exp: this.value,
      req_max_exp: this.highValue
    });
  }
}
