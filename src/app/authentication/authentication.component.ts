import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {

  isSignUp = false;
  isActive = false;
  logInForm!: FormGroup;
  signUpForm!:FormGroup;
  constructor() { 

  }

  ngOnInit(): void {
    this.logInForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)])
    })
    this.signUpForm = new FormGroup({
      username : new FormControl(null, Validators.required),
      phone: new FormControl(null, [Validators.required, Validators.maxLength(10), Validators.minLength(10)]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      gender: new FormControl(null, Validators.required),
      dob: new FormControl(null, Validators.required),
      location: new FormControl(null, Validators.required)
    })
  }

  openLogIn(){
    this.isSignUp = false;
    this.isActive = false;
  }

  openSignUp(){
    this.isSignUp = true;
    this.isActive = true;
  }

  onLogIn(){
    console.log(this.logInForm.value);
  }

  onSignUp(){
    console.log(this.signUpForm.value);
  }

}
