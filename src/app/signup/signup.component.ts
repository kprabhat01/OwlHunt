import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SignupService } from '../api/signup.service';
import { NotificationService } from '../services/notification.service';
import { MustMatch } from '../validators/mustMatch-validator';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private forms: FormBuilder, private notification: NotificationService, private signUpService: SignupService) { }

  signUpForm: FormGroup;

  ngOnInit(): void {
    this.signUpForm = this.forms.group({
      first_name: ['', [Validators.required, Validators.maxLength(50)]],
      last_name: ['', [Validators.required, Validators.maxLength(50)]],
      email: ['', [Validators.required, Validators.email]],
      comp_name: ['', [Validators.required, Validators.maxLength(50)]],
      comp_country: ['', Validators.required],
      comp_type: ['', Validators.required],
      passwrd: ['', [Validators.required, Validators.minLength(4)]],
      confpasswrd: ['', Validators.required]

    }, {
      validator: MustMatch('passwrd', 'confpasswrd')
    });
  }
  onSelectOfCountry(countryCode) {
    this.signUpForm.patchValue({ comp_country: countryCode });
  }
  onConfirmPasswordEntered() { 
    if (this.signUpForm.value["passwrd"] != this.signUpForm.value["confpasswrd"]) {
      this.notification.showError("Password does not match with confirm password!!");
    }
  }

  onSelectedCompanyType(companyType) {
    this.signUpForm.patchValue({ comp_type: companyType });
  }

  onSubmit() {
    debugger;

    this.signUpService.signUpUser(this.signUpForm.value);
  }

}
