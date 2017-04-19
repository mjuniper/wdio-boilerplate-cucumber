/*
 * Given Steps
 */

const examplePage = require('../pages/example.page');
const opendataPage = require('../pages/opendata.page');
const opendataSigninPage = require('../pages/opendata-signin.page');

module.exports = function(){

    this.Given(/^I am on the search page$/, () => {
        browser.url(examplePage.googleUrl);
        browser.getTitle().should.equal(examplePage.googlePageTitle);
    });

    this.Given(/^I am on the home page$/, () => {
        browser.url(opendataPage.url);
    });

    this.Given(/^I am on the signin page$/, () => {
        browser.url(opendataSigninPage.url);
    });
};
