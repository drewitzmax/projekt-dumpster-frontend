import {browser, by, element, $, $$, ElementFinder, ElementArrayFinder} from 'protractor';

export class Header {
  headerImg: ElementFinder;
  navbarElements: ElementArrayFinder;
  homeButton: ElementFinder;
  signUpButton: ElementFinder;
  aboutButton: ElementFinder;

  constructor() {
    this.headerImg = element(by.className('headerimage'));
    this.navbarElements = $$('li[class="nav-item lead"]');
    this.homeButton = this.navbarElements.get(0);
    this.signUpButton = this.navbarElements.get(1);
    this.aboutButton = this.navbarElements.get(2);
  }

  // tslint:disable:typedef
  navigateTo() {
    return browser.get(browser.baseUrl);
  }
}

