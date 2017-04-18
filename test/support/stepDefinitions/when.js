/*
 * When Steps
 */

const examplePage = require('../pages/example.page');

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
};
