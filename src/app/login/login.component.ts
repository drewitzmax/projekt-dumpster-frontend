import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  submitted: boolean;
  greeting = {};

  
  constructor(private loginService: LoginService) {

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
    resp.subscribe(data=>{
      console.log(data);
    })
    


  }

}
