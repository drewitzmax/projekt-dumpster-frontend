import {$, ElementFinder} from 'protractor';

export class Success {
  successMessage: ElementFinder;
  successButton: ElementFinder;

  constructor() {
    this.successMessage = $('h1[class=display-1]');
    this.successButton = $('button[routerlink="btn btn-primary"]');
  }
}
