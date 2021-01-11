import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ResumeServiceService } from '../api/resume-service.service';
import { resumeSearch } from '../models/resume-search.modal';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-resume-search',
  templateUrl: './resume-search.component.html',
  styleUrls: ['./resume-search.component.css']
})
export class ResumeSearchComponent implements OnChanges {

  @Input() resumeSearchDetails: any;
  noInput: boolean = false;
  resumeResult: resumeSearch;

  constructor(private resume: ResumeServiceService, private notification: NotificationService) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.resume.searchResume<resumeSearch>(JSON.parse(this.resumeSearchDetails.split('**')[1])).subscribe(p => {
      this.noInput = true;
      this.resumeResult = p;
    },
      err => {
        if (err.status == 404) {
          this.notification.showError(err.statusText);
          this.noInput = false;
        }
      });
  }



}
