import { Options } from '@angular-slider/ngx-slider/options';
import { ThrowStmt } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ResumeServiceService } from '../api/resume-service.service';
import { authenticationResponse } from '../models/auth-model';
import { LocalstorageService } from '../services/localstorage.service';

@Component({
  selector: 'app-resume-file',
  templateUrl: './resume-file.component.html',
  styleUrls: ['./resume-file.component.css']
})
export class ResumeFileComponent implements OnInit {

  @Input() showDownload: boolean;
  resumeUpload: FormGroup;
  resumeFormDetails = new FormData();

  value: number = 0;
  options: Options = {
    floor: 0,
    ceil: 60
  };

  constructor(private formGroup: FormBuilder, private resume: ResumeServiceService, private local: LocalstorageService) { }

  ngOnInit(): void {
    this.resumeUpload = this.formGroup.group({
      resume_name: ['', Validators.required],
      resume_exp: ['', Validators.required],
      file: ['', Validators.required],
      user_id: ['']
    });

    this.pathResumeExperience();
  }
  uploadFile(event) {
    const resumeFile = (event.target as HTMLInputElement).files[0];
    this.resumeUpload.patchValue({
      file: resumeFile
    });
    this.resumeFormDetails.append('file', resumeFile);
  }

  onFileUploadSubmit() {

    this.pathResumeExperience();

    if (this.resumeUpload.valid) {

      let authResponse: authenticationResponse = JSON.parse(this.local.getData('userProperties'));
      this.resumeFormDetails.append('user_id', authResponse.user_id.toString());
      this.resumeFormDetails.append('resume_name', this.resumeUpload.get('resume_name').value);
      this.resumeFormDetails.append('resume_exp', this.resumeUpload.get('resume_exp').value);
      this.resume.uploadResume(this.resumeFormDetails);
    }
  }

  pathResumeExperience() {
    this.resumeUpload.patchValue({
      resume_exp: this.value
    });
  }

}
