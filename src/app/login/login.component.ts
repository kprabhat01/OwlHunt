import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AuthenticationService } from '../api/authentication.service';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  authForms: FormGroup;

  constructor(private froms: FormBuilder, private auth: AuthenticationService) { }



  ngOnInit(): void {
    this.authForms = this.froms.group({
      email: ['', Validators.required],
      passwd: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.authForms.valid) {
      this.auth.authenticateUser(this.authForms.value);
    }
  }

}
