/*
 * When Steps
 */
const examplePage = require('../pages/example.page');
const opendataSigninPage = require('../pages/opendata-signin.page');
const opendataPage = require('../pages/opendata.page');
const opendataAdminPage = require('../pages/opendata-admin.page');

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

    this.When(/^I click umbrella sign in$/, () => {
        browser.waitForExist(opendataPage.signinButton);
        browser.click(opendataPage.signinButton);
    });

    this.When(/^I click the signin button$/, () => {
        browser.click(opendataSigninPage.signinButton);
    });

    this.When(/^I click the initiatives gallery tab$/, () => {
        browser.waitForExist(opendataAdminPage.initiativesGalleryTab);
        browser.waitForVisible(opendataAdminPage.initiativesGalleryTab);
        browser.click(opendataAdminPage.initiativesGalleryTab);
    });

    this.When(/^I click the default initiative preview link$/, () => {
        browser.click(opendataAdminPage.defaultInitiativePanelFooterViewLink);
    });

    this.When(/^I click the initiative get started button$/, () => {
        browser.waitForExist(opendataAdminPage.initiativeGetStartedButton);
        browser.waitForVisible(opendataAdminPage.initiativeGetStartedButton);
        browser.click(opendataAdminPage.initiativeGetStartedButton);
    });

    this.When(/^I supply a title for the initiative$/, () => {
        browser.waitForExist(opendataAdminPage.initiativeTitleInput);
        browser.waitForVisible(opendataAdminPage.initiativeTitleInput);
        var disabled;
        disabled = browser.getAttribute(opendataAdminPage.initiativeCreateNextButton, 'disabled');
        console.log ("disabled is ", disabled);
        browser.setValue(opendataAdminPage.initiativeTitleInput,"cucumber new inititative");
        disabled = browser.getAttribute(opendataAdminPage.initiativeCreateNextButton, 'disabled');
        console.log ("disabled is ", disabled);
    });

    this.When(/^I click the initiative create next button$/, () => {
        browser.click(opendataAdminPage.initiativeCreateNextButton);
    });

    this.When(/^I wait for and dismiss the initiative creation progress modal$/, () => {
        browser.waitForExist(opendataAdminPage.initiativeProgressModalOkayButton);
        browser.waitForVisible(opendataAdminPage.initiativeProgressModalOkayButton);
        browser.click(opendataAdminPage.initiativeProgressModalOkayButton);
        browser.waitForExist(opendataAdminPage.initiativeProgressModalOkayButton, true);
    });

    this.When(/^I click the initiatives tab$/, () => {
        browser.waitForExist(opendataAdminPage.initiativesTab);
        browser.waitForVisible(opendataAdminPage.initiativesTab);
        browser.click(opendataAdminPage.initiativesTab);
    });

    this.When(/^I go to sites admin$/, () => {
        browser.waitForVisible(opendataPage.userDropdown);
        browser.click(opendataPage.userDropdown);
        browser.waitForVisible(opendataPage.manageSitesOption);
        browser.click(opendataPage.manageSitesOption);
    });
};
