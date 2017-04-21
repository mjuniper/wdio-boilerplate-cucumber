/*
 * Then Steps
 */

const examplePage = require('../pages/example.page');
const opendataPage = require('../pages/opendata.page');
const opendataSigninPage = require('../pages/opendata-signin.page');
const opendataSitesListPage = require('../pages/opendata-sites-list.page');
const opendataAdminPage = require('../pages/opendata-admin.page');

var arcgis = require('arcgis')

module.exports = function(){

    this.Then(/^I should see a list of search results$/, () => {
        browser.pause(2000);
        browser.waitForVisible(examplePage.resultsList);
        return browser.isVisible(examplePage.resultsList).should.be.true;
    });

    this.Then(/^I should see the umbrella home page$/, () => {
        browser.waitForVisible(opendataPage.newestData);
        const newstDataPresent = browser.isVisible(opendataPage.newestData).should.be.true;
        const pageTitleIsCorrect = browser.getTitle().should.equal(opendataPage.pageTitle);
        return newstDataPresent && pageTitleIsCorrect;
    });

    this.Then(/^I should see the umbrella sign in button$/, () => {
        browser.waitForVisible(opendataPage.signinButton);
        return browser.isVisible(opendataPage.signinButton).should.be.true;
    });

    this.Then(/^the signout button should be present$/, () => {
        //browser.pause(2000)
        //var signinButtonIsExisting;
        //signinButtonIsExisting = browser.isExisting(opendataPage.signinButton);
        //console.log("signinButtonIsExisting is ", signinButtonIsExisting);
        //browser.pause(2000)

        //browser.pause(2000)
        //return browser.isExisting(opendataPage.signoutButton);
        return browser.waitForExist(opendataPage.signoutButton,1000);

    });

    this.Then(/^I should see the signin page$/, () => {
        browser.waitForVisible(opendataSigninPage.iframe);
        return browser.isVisible(opendataSigninPage.iframe).should.be.true;
    });

    this.Then(/^I should see the sites list$/, () => {
        browser.waitForVisible(opendataSitesListPage.sitesListItem);
        const sitesListItems = browser.elements(opendataSitesListPage.sitesListItem);
        return sitesListItems.value.length.should.equal(10);
    });

    this.Then(/^I should see the initiatives tab$/, () => {
        browser.waitForVisible(opendataAdminPage.initiativesTab);
        return browser.isVisible(opendataAdminPage.initiativesTab);
    });

    this.Then(/^I should see the custom initiatives panel$/, () => {
        browser.waitForVisible(opendataAdminPage.initiativePanelTitle);
        browser.getText(opendataAdminPage.defaultInitiativePanelTitle).should.equal('Custom Initiative');
        browser.getText(opendataAdminPage.defaultInitiativePanelFooterViewLink).should.equal('Preview');
        return true
    });

    this.Then(/^I should be at an initiative configuration page$/, () => {
        browser.waitForExist(opendataAdminPage.initiativeGetStartedButton);
    });

    this.Then(/^I verify the collaboration group and initiative item$/, () => {
        console.log ("verifying this.initiativeTitle is "+ this.initiativeTitle + " ...");
        var agoidentities = require('../../config/agoidentities')
        console.log ("agoidentitites is: ", agoidentities);
        arcgis.request().then( function (results) { console.log("results is ", results) } )
        return true
    });

    this.Then(/^I call myFunc$/, () => {
        console.log ("entering, I call myfunc");
        opendataPage.myFunc1.get(1);
        console.log ("");
        opendataPage.myFunc2.get();
        console.log ("");
        console.log ("myFunc3.foo returns:", opendataPage.myFunc3.foo("abc"));
        // console.log ("foo2? returns:", opendataPage.myFunc4.foo2("abc"));
        // console.log ("myFunc5? returns:", opendataPage.myFunc5("abc"));

        console.log ("leaving, I call myfunc");
        return true
    });

};
