import {browser} from 'protractor';

export class About {

  constructor() {
  }

  async navigateTo(): Promise<void> {
    await browser.get('/about');
  }
}
