/*
 * Then Steps
 */

const examplePage = require('../pages/example.page');
const opendataPage = require('../pages/opendata.page');
const opendataSigninPage = require('../pages/opendata-signin.page');
const opendataSitesListPage = require('../pages/opendata-sites-list.page');
const opendataAdminPage = require('../pages/opendata-admin.page');

var request = require('request');
var arcgis = require('arcgis');

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
        // var agoidentities = require('../../config/agoidentities')
        // console.log ("agoidentitites is: ", agoidentities);

        // // var ago = arcgis();
        // // var opts = {
        // //     url: '/generateToken',
        // //     form: {
        // //         username: process.env.username,
        // //         password: process.env.password,
        // //         referrer: 'https ://qaext.arcgis.com/sharing/rest/',
        // //         f: 'json'
        // //     },
        // //     post: true,
        // //     rootUrl: 'https://qaext.arcgis.com/sharing/rest'
        // // };
        // // console.log('calling ago.request...');
        // // ago.request(opts)
        // // .then(function (results) {
        // //     console.log('>>>>> got results from generateToken: ');
        // // })
        // // .catch(function (err) {
        // //     console.log('>>>>> got error from generateToken: ');
        // // });
        //
        // // var opts = {
        // //     url: 'https://qaext.arcgis.com/sharing/rest/generateToken',
        // //     timeout: 1000,
        // //     formData: {
        // //         username: process.env.username,
        // //         password: process.env.password,
        // //         referrer: 'https ://qaext.arcgis.com/sharing/rest/',
        // //         f: 'json'
        // //     },
        // // };
        // // console.log('>>>>> making request');
        // // request.post(opts, function (err, resp, body) {
        // //     console.log('>>>>> YAY! <<<<<');
        // // });
        //
        // console.log('>>>>> making request');
        // // request('http://www.google.com', function (error, response, body) {
        // //   console.log('error:', error); // Print the error if one occurred
        // //   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        // //   console.log('body:', body); // Print the HTML for the Google homepage.
        // // });
        // request.post({
        //     // url: 'https://qaext.arcgis.com/sharing/rest/oauth2/token/',
        //     url: 'https://qaext.arcgis.com/sharing/rest/generateToken',
        //     json: true,
        //     timeout: 500,
        //     form: {
        //         username: process.env.username,
        //         password: process.env.password,
        //         referrer: 'https ://qaext.arcgis.com/sharing/rest/',
        //         f: 'json'
        //     }
        // }, function(err, res) {
        //     console.log('>>>>> YAY? <<<<<');
        // });
        // console.log('>>>>> made request');
        
        // global.token = "WRONG";
        // console.log('>>>> before, token is ' + global.token);
        // console.log('>>>> begin...');
        // var ago = arcgis();
        // var opts = {
        //     url: '/generateToken',
        //     form: {
        //         username: process.env.username,
        //         password: process.env.password,
        //         referer: 'qaext.arcgis.com',
        //         f: 'json'
        //     },
        //     post: true,
        //     rootUrl: 'https://qaext.arcgis.com/sharing/rest'
        // };
        // 
        // ago.request(opts)
        // .then(function (results) {
        //     console.log('flerpy');
        //     console.log('>>>>> token: ', results.token);
        //     console.log('glerpityflop');
        //     global.token = results.token;
        //     console.log('Hi, jeremy');
        // })
        // .catch(function (err) {
        //     console.log('>>>>> got error from generateToken: ', err);
        // });
        // console.log('>>>> end...');
        // console.log('>>>> after, token is ' + global.token);
        //

        console.log('>>>>> in group verification: this.flerpp is: ' + this.flerpp );
        console.log('>>>>> in group verification: global.flerg is: ' + global.flerg );
        console.log('>>>>> in group verification: global.agoToken is: ' + global.agoToken );
        console.log('>>>>> in group verification: this.crapola is: ' + this.crapola );

        console.log('>>>>> trying browser.call(async stuff)');

        var ago = arcgis();
        var opts = {
            url: '/generateToken',
            form: {
                username: process.env.username,
                password: process.env.password,
                referer: 'qaext.arcgis.com',
                f: 'json'
            },
            post: true,
            rootUrl: 'https://qaext.arcgis.com/sharing/rest'
        };

        browser.call(function () {
            return ago.request(opts).then(function(results) {
                console.log('>>>>> from browser.call, token is ' + results.token)
                global.agoToken2 = results.token
            })
        })

        console.log('>>>>> after browser.call, global.agoToken2 is ' + global.agoToken2);

        return true
    });

    this.Then(/^I call myFunc$/, () => {
        console.log ("entering, I call myfunc");
        // opendataPage.myFunc1.get(1); // works
        // console.log ("");
        // opendataPage.myFunc2.get();
        // console.log ("");
        console.log ("myFunc3.foo returns:", opendataPage.myFunc3.foo("abc"));
        console.log ("in I call myFunc, myFunc7.getToken returns:", opendataPage.myFunc7.getToken());
        // console.log ("foo2? returns:", opendataPage.myFunc4.foo2("abc")); // doesn't work
        // console.log ("myFunc5? returns:", opendataPage.myFunc5("abc")); // doesn't work

        console.log ("leaving, I call myfunc");
        return true
    });

};
