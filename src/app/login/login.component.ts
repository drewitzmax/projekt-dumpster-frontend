import { Component, OnInit, OnChanges } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginService } from './login.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  submitted: boolean;
  authenticated: boolean;
  username: string;
  inputIsEmpty: boolean;

  constructor(private loginService: LoginService) {
    if (this.loginService.currentUserValue) { 
      console.log(`Logged in as: ${localStorage.getItem('currentUserName')}`)
      this.username = localStorage.getItem('currentUserName');
      
    } else {
      console.log("Not logged in")
    }
    this.authenticated = this.loginService.isLoggedin();

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
    });
    this.authenticated = this.loginService.authenticated;
    this.username = username;

  }

  onLogout() {
    this.loginService.logout();
    this.authenticated = this.loginService.authenticate();
  }

}
