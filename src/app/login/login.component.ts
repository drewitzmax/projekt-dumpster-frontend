import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginService } from './login.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  submitted: boolean;
  authenticated: boolean;

  constructor(private loginService: LoginService) {
    this.authenticated = this.loginService.authenticated;
    if (this.loginService.currentUserValue) { 
      console.log(`Logged in as: ${localStorage.getItem('currentUserName')}`)
    } else {
      console.log("Not logged in")
    }

   }

  loginForm = new FormGroup({
    username : new FormControl('',Validators.required),
    password : new FormControl('',Validators.required)
  });

  ngOnInit(): void {
  }

  onSubmit() {
    this.submitted = true;

    let username = this.loginForm.controls.username.value;
    let password = this.loginForm.controls.password.value;
    
    let resp = this.loginService.login(username,password);
    resp
    .pipe(first())
    .subscribe(data=>{
      console.log(data);
    })
  }

  onLogout() {
    this.loginService.logout();
  }

  

}
