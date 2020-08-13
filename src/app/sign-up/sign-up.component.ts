import { Component, OnInit } from '@angular/core';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Router } from '@angular/router';
import { SignUpService } from './sign-up.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  signedUp: boolean;
  constructor(public signupService: SignUpService) {
  }

  ngOnInit(): void {
  }


  isSignedUp(): boolean {
    return ((this.signupService.userform.valid && this.signupService.signedUp) == true);
  }



}
