// @ts-check
// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const {SpecReporter, StacktraceOption} = require('jasmine-spec-reporter');
const Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

/**
 * @type { import("protractor").Config }
 */

exports.config = {
  // Turn off the promise_manager
  SELENIUM_PROMISE_MANAGER: false,
  allScriptsTimeout: 11000,
  suites: {
    all: ['./src/testSpecs/pages/*.spec.ts','./src/testSpecs/features/SignUp/*.spec.ts','./src/testSpecs/features/Login/*.spec.ts'],
    pages: ['./src/testSpecs/pages/*.spec.ts'],
    allfeatures: ['./src/testSpecs/features/SignUp/*.spec.ts','./src/testSpecs/features/Login/*.spec.ts'],
    login: ['./src/testSpecs/features/Login/*.spec.ts'],
    signup: ['./src/testSpecs/features/SignUp/*.spec.ts'],
  },

  multiCapabilities: [
    {'browserName': 'chrome'},
    {'browserName': 'firefox'},
  ],
  maxSessions: 2,


  directConnect: true,
  baseUrl: 'http://localhost:4200/',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function () {
    }
  },

  onPrepare() {
    require('ts-node').register({
      project: require('path').join(__dirname, './tsconfig.json')
    });

    // Get sessionId and browserName from browser object (browser obj is accessible without import in function "onPrepare")
    return browser.getCapabilities().then((caps) => {
      var sessionId = caps.get("sessionid" + 'webdriver.remote.sessionid');
      var browsername = caps.get('browserName');

      // Jasmine instance
      const env = jasmine.getEnv()

      // Add HTML2Reporter
      env.addReporter(new Jasmine2HtmlReporter({
        savePath: './e2e/reporter/reports - ' + browsername,
        screenshotsFolder: './e2e/reporter/images - ' + browsername,
        takeScreenshots: true,
        takeScreenshotsOnlyOnFailures: false,
      }));

      // Add SpecReporter for console output
      env.addReporter(new SpecReporter({
        spec: {
          displayStacktrace: StacktraceOption.PRETTY
        }
      }))

    });
  }
};
