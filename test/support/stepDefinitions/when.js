/*
 * When Steps
 */
const examplePage = require('../pages/example.page');
const opendataSigninPage = require('../pages/opendata-signin.page');

module.exports = function(){

    this.When(/^I enter "([^"]*)" into the search box$/, arg1 => {
        browser.click(examplePage.searchInput);
        browser.clearElement(examplePage.searchInput);
        browser.setValue(examplePage.searchInput, arg1);
        browser.getValue(examplePage.searchInput).should.equal(arg1);
        browser.pause(2000);

    });

    this.When(/^I click the search button$/, () => {
        // browser.click(examplePage.searchButton);
        browser.keys('Enter');
    });

    this.When(/^I enter my credentials$/, () => {
        browser.waitForExist(opendataSigninPage.iframe);
        browser.frame(opendataSigninPage.iframeId);

        browser.click(opendataSigninPage.username);
        browser.clearElement(opendataSigninPage.username);
        browser.setValue(opendataSigninPage.username, process.env.username);
        // browser.getValue(opendataSigninPage.username).should.equal(process.env.username);

        browser.click(opendataSigninPage.password);
        browser.clearElement(opendataSigninPage.password);
        browser.setValue(opendataSigninPage.password, process.env.password);
        // browser.getValue(opendataSigninPage.password).should.equal(process.env.password);
    });

    this.When(/^I click the signin button$/, () => {
        browser.click(opendataSigninPage.signinButton);
    });
};
