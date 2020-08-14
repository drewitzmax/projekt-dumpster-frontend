import {Header} from '../../../pageObjects/margins/header.po';
import {browser} from 'protractor';
import {SignUp} from '../../../pageObjects/signUp.po';
import {SignUpFoodProvider} from '../../../pageObjects/signUp_FoodProvider.po';
import {Success} from '../../../pageObjects/success.po';
import {foodprovider} from '../../../dataObjects/foodprovider.data';

// Successful SignUp as a Foodprovider
describe('Successful SignUp as a Foodprovider - TestSpec', () => {
  const header = new Header();
  const signUp = new SignUp();
  const signUpProvider = new SignUpFoodProvider();
  const success = new Success();

  it('User navigate to signUp page', async () => {
    await browser.get(browser.baseUrl);
    await header.signUpButton.click();
    expect(await browser.getCurrentUrl()).toEqual('http://localhost:4200/signup');
  });

  it('User choose food supplier', async () => {
    await signUp.chooseFoodProvider();
    expect(await browser.getCurrentUrl()).toEqual('http://localhost:4200/signup/supplier');
  });

  it('Foodprovider input data in all mandatory fields', async () => {
    await signUpProvider.name.sendKeys(foodprovider.name);
    await signUpProvider.address.sendKeys(foodprovider.address);
    await signUpProvider.email.sendKeys(foodprovider.email);
    await signUpProvider.password.sendKeys(foodprovider.password);
    await signUpProvider.phone.sendKeys(foodprovider.phone);
  });

  it('Foodprovider should be possible to signUp', async () => {
    await signUpProvider.signUp.click();
  });

  it('Foodprovider should see the success message', async () => {
    expect(await success.successMessage.getText()).toEqual('Thanks for joining our Community!');
  });

  afterAll(async () => {
    browser.executeScript('window.sessionStorage.clear();');
    browser.executeScript('window.localStorage.clear();');
  });
});

// Not successful SignUp as a Foodprovider
describe('Not successful SignUp as a Foodprovider - TestSpec', () => {
  const header = new Header();
  const signUp = new SignUp();
  const signUpProvider = new SignUpFoodProvider();
  const success = new Success();

  it('User navigate to signUp page', async () => {
    await browser.get(browser.baseUrl);
    await header.signUpButton.click();
    expect(await browser.getCurrentUrl()).toEqual('http://localhost:4200/signup');
  });

  it('User choose food supplier', async () => {
    await signUp.chooseFoodProvider();
    expect(await browser.getCurrentUrl()).toEqual('http://localhost:4200/signup/supplier');
  });

  it('Foodprovider dont input all mandatory data', async () => {
    await signUpProvider.email.sendKeys(foodprovider.email);
    await signUpProvider.password.sendKeys(foodprovider.password);
  });

  it('Foodprovider click signUp button', async () => {
    await signUpProvider.signUp.click();
  });

  it('Foodprovider should not see the success message', async () => {
    expect(await success.successMessage.isDisplayed()).toEqual(false);
  });

  afterAll(async () => {
    browser.executeScript('window.sessionStorage.clear();');
    browser.executeScript('window.localStorage.clear();');
  });
});
