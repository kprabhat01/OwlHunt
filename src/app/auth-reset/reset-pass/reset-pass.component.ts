import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from 'src/app/api/authentication.service';
import { userTokenResponse } from 'src/app/models/auth-model';
import { NotificationService } from 'src/app/services/notification.service';
import { MustMatch } from 'src/app/validators/mustMatch-validator';

@Component({
  selector: 'app-reset-pass',
  templateUrl: './reset-pass.component.html',
  styleUrls: ['./reset-pass.component.css']
})
export class ResetPassComponent implements OnInit {

  constructor(private route: ActivatedRoute, private form: FormBuilder, private notification: NotificationService, private authentication: AuthenticationService) { }
  authForms: FormGroup;
  showResetPassword: boolean = false;
  userName: string;

  ngOnInit(): void {
    this.setUpForm();

    this.route.params.subscribe(p => {
      let token = p.token;
      if (token) {
        this.authentication.checkTokenForRestPassword<userTokenResponse>(token).subscribe(p => {
          if (p) {
            this.showResetPassword = true;
            this.authForms.patchValue({
              user_id: p['User id']
            });
            debugger;
            this.userName = p.User_name;
          }
        }, err => this.showResetPassword = false);
      }
    });
  }

  setUpForm() {
    this.authForms = this.form.group({
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      user_id: ['']
    },
      {
        validator: MustMatch('password', 'confirmPassword')
      });
  }

  onSubmit() {
    debugger;
    if (this.authForms.valid) {
      this.authentication.resetPassword(this.authForms.value);
    }
  }

  onConfirmPasswordEntered() {
    if (this.authForms.value["password"] != this.authForms.value["confirmPassword"]) {
      this.notification.showError("Password does not match with confirm password!!");
    }
  }

}
