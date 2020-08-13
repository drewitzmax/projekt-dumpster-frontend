import { Component, OnInit, OnChanges } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginService } from './login.service';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  submitted: boolean;
  authenticated: boolean;
  isUser: boolean;

  username: string;
  inputIsEmpty: boolean;

  constructor(private loginService: LoginService, private router: Router) {
    if (this.loginService.currentUserValue) { 
      console.log(`Logged in as: ${localStorage.getItem('currentUserName')}`)
      this.username = localStorage.getItem('currentUserName');
      
    } else {
      console.log("Not logged in")
    }
    this.authenticated = this.loginService.isLoggedin();
    this.isUser = this.loginService.getIsUser();

   }

  loginForm = new FormGroup({
    username : new FormControl('',Validators.required),
    password : new FormControl('',Validators.required)
  });



  onSubmit() {
    this.submitted = true;
    
    let username = this.loginForm.controls.username.value;
    let password = this.loginForm.controls.password.value;
    
    let resp = this.loginService.login(username,password);
    resp
    .pipe(first())
    .subscribe(data=>{
      console.log(data);
      if(data=="[user]"||data=="[provider]") this.authenticated = true;
      if(data=="[user]") {
        this.isUser = true;
      } else if(data=="[provider]"){
        this.isUser = false;
      } 
      
    },error=> {
      let errorMessage = error.error;
      if(error.status==401) errorMessage = "invalid username/email \nor password";
      window.alert(errorMessage);
    }
    );
    this.authenticated = this.loginService.authenticated;
    this.isUser = this.loginService.isUser;
    this.username = username;
  }

  onLogout() {
    this.loginService.logout();
    this.authenticated = this.loginService.authenticate();
    this.isUser = this.loginService.getIsUser();
  }

}
