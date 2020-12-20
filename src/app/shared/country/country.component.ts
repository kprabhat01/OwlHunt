import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  @Output() selectedCountryCode: EventEmitter<string> = new EventEmitter<string>();
  countryName: string;
  constructor() { }

  ngOnInit(): void {
  }

  onCountrySelect(countryName) {
    this.selectedCountryCode.emit(countryName);
  }

}
