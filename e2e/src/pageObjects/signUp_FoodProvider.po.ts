import {$, ElementFinder} from 'protractor';

export class SignUpFoodProvider {
  name: ElementFinder;
  address: ElementFinder;
  email: ElementFinder;
  password: ElementFinder;
  phone: ElementFinder;
  homepage: ElementFinder;
  picture: ElementFinder;
  signUp: ElementFinder;

  constructor() {
    this.name = $('input[formcontrolname=companyName]');
    this.address = $('input[formcontrolname=address]');
    this.email = $('input[formcontrolname=email]');
    this.password = $('#supplier-password');
    this.phone = $('input[formcontrolname=phonenumber]');
    this.homepage = $('input[formcontrolname=homepage]');
    this.picture = $('input[formcontrolname=picture]');
    this.signUp = $('input[value=SignUp]');
  }
}
