import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth/auth.service';
import { DatasService } from '../services/datas/datas.service';
import countryData from "../phone-codes.json"

// import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {
  data!: any[];
  isSignUp = false;
  isActive = false;
  logInForm!: FormGroup;
  signUpForm!:FormGroup;
  country:any;
  constructor(private service:AuthService, private service2:DatasService) { 
    
  }

  ngOnInit(): void {
    this.country = countryData
    this.logInForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)])
    })
    this.signUpForm = new FormGroup({
      username : new FormControl(null, Validators.required),
      phone: new FormControl(null, [Validators.required, Validators.pattern("^((\\+91-?) |0)?[0-9]{10}$")]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      gender: new FormControl(null, Validators.required),
      dob: new FormControl(null, Validators.required),
      location: new FormControl(null, Validators.required),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
      country: new FormControl(null, Validators.required),
      // data: this.service2.getMenProducts()
      
    })
    // const data = this.service2.getMenProducts()
    // console.log(data);
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
    this.service.SignIn(this.logInForm.value)
  }

  onSignUp(){
    console.log(this.signUpForm.value);
    // this.service.signUpData(this.signUpForm.value)
    // this.service.SignUp(this.signUpForm.value)
    this.service.SignUp(this.signUpForm.value)
    this.isSignUp = false;
    this.isActive = false;
  }

}
