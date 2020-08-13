import { Component, OnChanges, OnInit, DoCheck } from '@angular/core';
import { LoginService } from './login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnChanges, OnInit, DoCheck{
  title = 'skip-diving';
  authenticated: boolean;
  isUser: boolean;
  constructor(private loginService: LoginService){
    this.authenticated = this.loginService.authenticated;
    this.isUser = this.loginService.isUser;
  }
  ngDoCheck(){
    this.authenticated = this.loginService.authenticated;
    this.isUser = this.loginService.isUser;

  }

  ngOnInit() {
    
  }
  ngOnChanges() {
    
  }
}
