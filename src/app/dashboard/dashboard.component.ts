import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../api/authentication.service';
import { authenticationResponse } from '../models/auth-model';
import { LocalstorageService } from '../services/localstorage.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  username: string;
  constructor(
    private local: LocalstorageService,
    private authService: AuthenticationService
  ) { }

  ngOnInit() {
    const obj: authenticationResponse = JSON.parse(this.local.getData('userProperties'));
    this.username = obj.user_name;
  }

  logoutUser() {
    this.authService.logOffUser();
  }

}
