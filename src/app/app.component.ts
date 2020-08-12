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
  constructor(private loginService: LoginService){
    this.authenticated = this.loginService.authenticated;
  }
  ngDoCheck(){
/*     this.authenticated = this.loginService.authenticated;
    console.log('appcomponent doCheck: authenticated : '+this.authenticated);
    console.log('appcomponent loginservice doCheck: authenticated : '+this.loginService.authenticated); */
  }

  ngOnInit() {
    
  }
  ngOnChanges() {
    
  }
}
