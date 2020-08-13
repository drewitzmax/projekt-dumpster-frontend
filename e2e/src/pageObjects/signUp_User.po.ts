import {$, ElementFinder} from 'protractor';

export class SignUpUser {
  firstname: ElementFinder;
  lastname: ElementFinder;
  email: ElementFinder;
  username: ElementFinder;
  password: ElementFinder;
  signUp: ElementFinder;

  constructor() {
    this.firstname = $('input[formcontrolname=firstName]');
    this.lastname = $('input[formcontrolname=lastName]');
    this.email = $('input[formcontrolname=email]');
    this.username = $('#user-username');
    this.password = $('#user-password');
    this.signUp = $('input[value=SignUp]');
  }
}
