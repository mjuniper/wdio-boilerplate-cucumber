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

        // Want to verify that:
        // - there is an item: with type keywords: hubInitiative and with title matching (initiative_name)
        // - there is a group named initiative_name + " Initiative Collaboration Group"
        // - the item is shared to the group


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
        var requestOpts = {
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

        console.log('>>>>> requestOpts is ' + JSON.stringify(requestOpts, null, 4));
        browser.call(function () {
            return ago.request(requestOpts).then(function(results) {
                console.log('>>>>> from browser.call, token is ' + results.token);
                global.myToken = results.token;
            })
        })

        console.log('>>>>> after browser.call, global.myToken is ' + global.myToken);

        var authAGO = arcgis({
            token: global.myToken,
            domain: 'qaext.arcgis.com'
        });

        var uuid = this.initiativeTitle.trim(' ').split(' ').splice(-1)[0];
        var itemSearchOpts = {
            queryString: `title:${uuid}`
        };

        console.log('>>>>> itemSearchOpts is ' + JSON.stringify(itemSearchOpts, null, 4));

        var numTries = 5
        var foundIt = false
        do {
            numTries = numTries - 1;
            browser.call(function () {
                return authAGO.search(itemSearchOpts).then(function(results) {
                    global.itemSearchResults = results;
                })
            });
            foundIt = (global.itemSearchResults.results.length >= 1)
            if (foundIt) {
                break;
            } else if (numTries === 0) {
                console.log('>>>>> giving up after 5 tries');
                break;
            } else {
                console.log('>>>>> didn\'t find item; pausing then trying again');
                browser.pause(1000);
            }
        } while (true);

        itemSearchResults = global.itemSearchResults;

        console.log('>>>>> after browser.call, itemSearchResults is ' + JSON.stringify(itemSearchResults, null, 4));
        foundTheItem = (itemSearchResults.results.length === 1);
        foundTheItem.should.be.true;
        console.log(`>>>>> itemSearchResults.results[0].typeKeywords is ${JSON.stringify(itemSearchResults.results[0].typeKeywords, null, 4)}`);
        siteItemTypeKeywords = itemSearchResults.results[0].typeKeywords;
        siteItemTypeKeywords.includes('hubInitiative').should.be.true;
        siteItemGroupId = itemSearchResults.results[0].properties.groupId

        // from https://www.tomas-dvorak.cz/posts/nodejs-request-without-dependencies/
        const getContent = function(url) {
          // return new pending promise
          return new Promise((resolve, reject) => {
            // select http or https module, depending on reqested url
            const lib = url.startsWith('https') ? require('https') : require('http');
            const request = lib.get(url, (response) => {
              // handle http errors
              if (response.statusCode < 200 || response.statusCode > 299) {
                 reject(new Error('Failed to load page, status code: ' + response.statusCode));
               }
              // temporary data holder
              const body = [];
              // on every content chunk, push it to the data array
              response.on('data', (chunk) => body.push(chunk));
              // we are done, resolve promise with those joined chunks
              response.on('end', () => resolve(body.join('')));
            });
            // handle connection errors of the request
            request.on('error', (err) => reject(err))
            })
        };

        var groupsSearchRequest = `https://dc.mapsqa.arcgis.com/sharing/rest/community/groups?q=${uuid}&start=1&num=10&sortField=title&f=json&token=${myToken}`
        console.log(`>>>>> about to get ${groupsSearchRequest}`);
        browser.call (function () {
            return getContent(groupsSearchRequest)
              .then((html) => global.groupsSearchResults = JSON.parse(html))
              .catch((err) => console.error(err));
            });
        var groupsSearchResults = global.groupsSearchResults;
        console.log(`>>>>> groupsSearchResults is: ${JSON.stringify(groupsSearchResults, null, 4)}`);
        groupsSearchResults.results.length.should.be.above(0);

        collaborationGroupId = groupsSearchResults.results[0].id;
        groupsSearchResults.results[0].title.should.equal(`${initiativeTitle} Initiative Collaboration Group`);
        collaborationGroupId.should.equal(siteItemGroupId);





// I could not make the following work:

//        var groupsSearchRequestOpts = {
//          url: `/community/groups?q=${uuid}&start=1&num=10&sortField=title&f=json&token=${myToken}`,
//          rootUrl: 'https://dc.mapsqa.arcgis.com/sharing/rest',
////          rootUrl: '',
////          rootUrl: 'https://dc.mapsqa.arcgis.com/sharing/rest',
////          url: `https://dc.mapsqa.arcgis.com/sharing/rest/community/groups?q=${uuid}&start=1&num=10&sortField=title&f=json&token=${myToken}`,
////          rootUrl: '',
////          rootUrl: 'https://dc.mapsqa.arcgis.com/sharing/rest',
////          rootUrl: 'https://mapsqa.arcgis.com/sharing/rest',
////          rootUrl: 'https://mapsqa.arcgis.com/sharing/rest',
////          rootUrl: 'https://qaext.arcgis.com/sharing/rest',
////          post: false,
////          domain: 'qaext.arcgis.com'
//        };
//
//        console.log(`>>>>> groupsSearchRequestOpts is: ${JSON.stringify(groupsSearchRequestOpts, null, 4)}`)
//
//        console.log('>>>>> about to call browser.call with request for group search results');
//        browser.call(function () {
//            return ago.request(groupsSearchRequestOpts).then(function(results) {
//                global.groupsSearchResults = results;
//            })
//        });
//        console.log(`>>>>> after browser.call, global.groupsSearchResults is ${JSON.stringify(global.groupsSearchResults, null, 4)}`);

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
