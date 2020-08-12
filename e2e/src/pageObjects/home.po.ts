import {browser, $, ElementFinder, ElementArrayFinder} from 'protractor';

export class Home {
  welcomeMessage: ElementFinder;
  providerList: ElementArrayFinder;

  constructor() {
    this.welcomeMessage = $('h1[class="lead text-center"]');
    this.providerList = $('#supplierAccordion').$$('div[class="card"]');
  }


  async navigateTo(): Promise<void> {
    await browser.get(browser.baseUrl);
  }
}
