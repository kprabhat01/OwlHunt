import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/api/authentication.service';

@Component({
  selector: 'app-reset-auth',
  templateUrl: './reset-auth.component.html',
  styleUrls: ['./reset-auth.component.css']
})
export class ResetAuthComponent implements OnInit {

  authForms: FormGroup;
  constructor(private form: FormBuilder, private auth: AuthenticationService) { }

  ngOnInit(): void {
    this.authForms = this.form.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }
  onSubmit() {
    if (this.authForms.valid) {
      this.auth.sendPasswordLink(this.authForms.value);
    }
  }

}
