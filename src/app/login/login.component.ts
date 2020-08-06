import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  url = "http://localhost:8080";

  
  constructor(private http: HttpClient) {

   }
  submitted: boolean;

  loginForm = new FormGroup({
    username : new FormControl('',Validators.required),
    password : new FormControl('',Validators.required)
  });

  ngOnInit(): void {
  }

  onSubmit() {
    this.http.get(this.url + "/login").subscribe(
      data => {console.log(data);
    })
    
    this.submitted = true;
    console.log("submitted");

  }

}
