import {Header} from '../pageObjects/margins/header.po';
import {Home} from '../pageObjects/home.po';
import {browser} from 'protractor';

// Header TestSpec
describe('Header TestSpec', () => {
  const header = new Header();

  beforeEach(async () => {
    await header.navigateTo();
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

// Home TestSpec
describe('Home TestSpec', () => {
  const home = new Home();

  beforeEach(async () => {
    await home.navigateTo();
  });

  it('should display - Browse all Food Providers', async () => {
    expect(await home.welcomeMessage.get(0).getText()).toEqual('Browse all Food Providers');
  });

  it('should have the expected providers', async () => {
    expect(await home.providerList.count()).toEqual(3);
  });
});
