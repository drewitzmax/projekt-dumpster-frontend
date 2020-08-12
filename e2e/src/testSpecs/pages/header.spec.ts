// HeaderPo TestSpec
import {Header} from '../../pageObjects/margins/header.po';
import {browser} from 'protractor';

describe('Header TestSpec', () => {
  const header = new Header();

  beforeEach(async () => {
    await browser.get(browser.baseUrl);
  });

  it('All header elements are displayed', async () => {
    await expect(header.headerImg.isDisplayed);
    await expect(header.homeButton.isDisplayed);
    await expect(header.signUpButton.isDisplayed);
    await expect(header.aboutButton.isDisplayed);
  });
});
