import {browser, by, element, $, $$, ElementFinder, ElementArrayFinder} from 'protractor';

export class Home {
  welcomeMessage: ElementArrayFinder;
  providerList: ElementArrayFinder;

  constructor() {
    this.welcomeMessage = $$('h1[class="lead text-center"]');
    this.providerList = element(by.id('supplierAccordion')).$$('div[class="card"]');
  }

  // tslint:disable:typedef
  navigateTo() {
    return browser.get(browser.baseUrl);
  }
}
