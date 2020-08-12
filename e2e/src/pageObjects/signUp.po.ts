import {browser, by, element, $, $$, ElementFinder, ElementArrayFinder} from 'protractor';

export class SignUp {
  dropDownButton: ElementFinder;
  foodProviderInputs: ElementArrayFinder;
  noFoodProviderInputs: ElementArrayFinder;

  constructor() {
    this.dropDownButton = element(by.id('dropdownMenuButton'));
  }

  // tslint:disable:typedef
  navigateTo() {
    return browser.get('/signup');
  }

  async chooseFoodProvider() {
    await this.dropDownButton.click();
    this.foodProviderInputs = $$('input');
  }
  async chooseNoFoodProvider() {
    await this.dropDownButton.click();
    this.noFoodProviderInputs = $$('input');
  }
}
