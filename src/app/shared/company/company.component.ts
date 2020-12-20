import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  @Output() selectedCompanyType: EventEmitter<string> = new EventEmitter<string>();
  compnayType: string;
 

  constructor() { }

  ngOnInit(): void {

  }

  onSelectCompanyType(companyType) {
    this.selectedCompanyType.emit(companyType);
  }

}
