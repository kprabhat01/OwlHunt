import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from "@angular/common";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title: string = 'theowlhunt';
  showHeardFooterComponents: boolean = true;

  constructor(private route: Router, private location: Location) { }

  ngOnInit() {
    this.route.events.subscribe(p => {
      if (this.location.path().includes('/dashboard')) {
        this.showHeardFooterComponents = false;
      }
      else {
        this.showHeardFooterComponents = true;
      }
    })

  }

}
