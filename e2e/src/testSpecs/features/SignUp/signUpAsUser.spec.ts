import {Header} from '../../../pageObjects/margins/header.po';
import {browser} from 'protractor';
import {SignUp} from '../../../pageObjects/signUp.po';
import {Success} from '../../../pageObjects/success.po';
import {SignUpUser} from '../../../pageObjects/signUp_User.po';
import {user} from '../../../dataObjects/user.data';

// Successful SignUp as a User
describe('Successful SignUp as a User - TestSpec', () => {
  const header = new Header();
  const signUp = new SignUp();
  const signUpUser = new SignUpUser();
  const success = new Success();
  const userdata = user;

  it('User navigate to signUp page', async () => {
    await browser.get(browser.baseUrl);
    await header.signUpButton.click();
    expect(await browser.getCurrentUrl()).toEqual('http://localhost:4200/signup');
  });

  it('User choose user', async () => {
    await signUp.chooseUser();
    expect(await browser.getCurrentUrl()).toEqual('http://localhost:4200/signup/user');
  });

  it('User input data in all mandatory fields', async () => {
    await signUpUser.firstname.sendKeys(userdata.firstname);
    await signUpUser.lastname.sendKeys(userdata.lastname);
    await signUpUser.email.sendKeys(userdata.email);
    await signUpUser.username.sendKeys(userdata.username);
    await signUpUser.password.sendKeys(userdata.password);
  });

  it('User should be possible to signUp', async () => {
    await signUpUser.signUp.click();
  });

  it('User should see the success message', async () => {
    expect(await success.successMessage.getText()).toEqual('Thanks for joining our Community!');
  });

  afterAll(async () => {
    browser.executeScript('window.sessionStorage.clear();');
    browser.executeScript('window.localStorage.clear();');
  });
});

// Not successful SignUp as a User
describe('Not successful SignUp as a User - TestSpec', () => {
  const header = new Header();
  const signUp = new SignUp();
  const signUpUser = new SignUpUser();
  const success = new Success();
  const userdata = user;

  it('User navigate to signUp page', async () => {
    await browser.get(browser.baseUrl);
    await header.signUpButton.click();
    expect(await browser.getCurrentUrl()).toEqual('http://localhost:4200/signup');
  });

  it('User choose user', async () => {
    await signUp.chooseUser();
    expect(await browser.getCurrentUrl()).toEqual('http://localhost:4200/signup/user');
  });

  it('User dont input all mandatory data', async () => {
    await signUpUser.username.sendKeys(userdata.username);
    await signUpUser.password.sendKeys(userdata.password);
  });

  it('User click signUp Button', async () => {
    await signUpUser.signUp.click();
  });

  it('User should not see the success message', async () => {
    expect(await success.successMessage.isDisplayed()).toEqual(false);
  });

  afterAll(async () => {
    browser.executeScript('window.sessionStorage.clear();');
    browser.executeScript('window.localStorage.clear();');
  });
});
