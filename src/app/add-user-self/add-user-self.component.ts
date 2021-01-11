import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../api/authentication.service';

@Component({
  selector: 'app-add-user-self',
  templateUrl: './add-user-self.component.html',
  styleUrls: ['./add-user-self.component.css']
})
export class AddUserSelfComponent implements OnInit {

  addUser: FormGroup;
  constructor(private formBuilder: FormBuilder, private authService: AuthenticationService) { }


  ngOnInit(): void {
    this.addUser = this.formBuilder.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      email: ['', Validators.email],
      passwrd: ['', Validators.required]
    })
  }

  submitNewUser() { 
    if (this.addUser.valid) {
      this.authService.addUserSelf(this.addUser.value);
    }
  }

}
