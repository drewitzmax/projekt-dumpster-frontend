import {$, browser, ElementFinder} from 'protractor';

export class SignUp {
  dropDownButton: ElementFinder;

  constructor() {
    this.dropDownButton = $('#dropdownMenuButton');
  }

  async navigateTo(): Promise<void> {
    await browser.get('/signup');
  }

  async chooseFoodProvider(): Promise<void> {
    await this.dropDownButton.click();
    await $('a[routerlink=supplier]').click();
  }

  async chooseUser(): Promise<void> {
    await this.dropDownButton.click();
    await $('a[routerlink=user]').click();
  }
}
