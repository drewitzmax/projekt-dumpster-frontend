// Header TestSpec
import {Header} from '../../pageObjects/margins/header.po';
import {browser} from 'protractor';

describe('Header TestSpec', () => {
  const header = new Header();

  beforeEach(async () => {
    await browser.get(browser.baseUrl);
  });

  it('should have the correct headerimage', async () => {
    expect(await header.headerImg.getAttribute('src')).toEqual('http://localhost:4200/assets/images/header-image.jpg');
  });

  it('should be possible to click the homeButton', async () => {
    await header.homeButton.click();
    expect(await browser.getCurrentUrl()).toEqual('http://localhost:4200/');
  });

  it('should be possible to click the signUpButton', async () => {
    await header.signUpButton.click();
    expect(await browser.getCurrentUrl()).toEqual('http://localhost:4200/signup');
  });

  it('should be possible to click the aboutButton', async () => {
    await header.aboutButton.click();
    expect(await browser.getCurrentUrl()).toEqual('http://localhost:4200/about');
  });
});
