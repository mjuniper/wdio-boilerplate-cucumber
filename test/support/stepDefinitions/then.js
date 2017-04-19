/*
 * Then Steps
 */

const examplePage = require('../pages/example.page');
const opendataPage = require('../pages/opendata.page');
const opendataSigninPage = require('../pages/opendata-signin.page');
const opendataSitesListPage = require('../pages/opendata-sites-list.page');

module.exports = function(){

    this.Then(/^I should see a list of search results$/, () => {
        browser.pause(2000);
        browser.waitForVisible(examplePage.resultsList);
        return browser.isVisible(examplePage.resultsList).should.be.true;
    });

    this.Then(/^I should see the umbrella home page$/, () => {
        // browser.pause(5000);
        browser.waitForVisible(opendataPage.newestData);
        const newstDataPresent = browser.isVisible(opendataPage.newestData).should.be.true;
        const pageTitleIsCorrect = browser.getTitle().should.equal(opendataPage.pageTitle);
        return newstDataPresent && pageTitleIsCorrect;
    });

    this.Then(/^I should see the signin page$/, () => {
        // browser.pause(5000);
        browser.waitForVisible(opendataSigninPage.iframe);
        return browser.isVisible(opendataSigninPage.iframe).should.be.true;
    });

    this.Then(/^I should see the sites list$/, () => {
        browser.waitForVisible(opendataSitesListPage.sitesListItem);
        const sitesListItems = browser.elements(opendataSitesListPage.sitesListItem);
        return sitesListItems.value.length.should.equal(10);
    });
};
