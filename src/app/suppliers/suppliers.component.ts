import { Component, OnInit } from '@angular/core';
import { SuppliersService } from './suppliers.service';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-suppliers',
  templateUrl: './suppliers.component.html',
  styleUrls: ['./suppliers.component.scss'],
  providers: [SuppliersService]
})
export class SuppliersComponent implements OnInit {

  constructor(private supService: SuppliersService, private loginService: LoginService) {
    if (this.loginService.currentUserValue) { 
      console.log(`Logged in as: ${this.loginService.username}`)
    }else {
      console.log("Not logged in")
    }
   }

  ngOnInit() {
  }

}
