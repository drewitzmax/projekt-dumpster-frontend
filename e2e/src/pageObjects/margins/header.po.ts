import {$, ElementFinder} from 'protractor';

export class Header {
  headerImg: ElementFinder;
  homeButton: ElementFinder;
  signUpButton: ElementFinder;
  aboutButton: ElementFinder;
  dropDownButton: ElementFinder;
  logoutButton: ElementFinder;
  loginButton: ElementFinder;

  constructor() {
    this.headerImg = $('img[class=headerimage]');
    this.homeButton = $('a[href="/"]');
    this.signUpButton = $('button[routerlink="signup"]');
    this.aboutButton = $('a[href="/about"]');
    this.dropDownButton = $('#dropdownMenu1');
    this.logoutButton = $('#logout-btn');
    this.loginButton = $('button[type=submit]');
  }


  async login(username: string, password: string): Promise<void> {
    await this.dropDownButton.click();
    await $('input[formControlName=username]').sendKeys(username);
    await $('input[formControlName=password]').sendKeys(password);
    await $('button[type=submit]').click();
  }
}

