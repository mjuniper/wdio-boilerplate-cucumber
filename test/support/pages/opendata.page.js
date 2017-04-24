/** PageObject -- umbrella/open data landing page **/

const Page = require('./page');
var arcgis = require('arcgis');

module.exports = Object.create(Page, {

    /*
     * Template
     */

    //$name:  { get: function () { return browser.element('$selector'); } },
    //$name:  { value: '$value' },

    // from: http://stackoverflow.com/questions/37276705/webdriver-io-pageobject-pattern-define-element-selector-by-passing-argument :
    myFunc1:  { value: { get: function (i) { console.log("in myFunc1 get, i is", i); return true; } } },
    // call from a step definition like this: opendataPage.myFunc1.get(1);
    myFunc2:  { value: { get: function () { console.log("in myFunc2 get"); return true; } } },
    myFunc3:  { value: { foo: function (s) { console.log("in myFunc3 foo"); return s+s; } } },
    // myFunc4:  { foo2: function (s) { console.log("in myFunc4 foo2"); return s+s+s; } }, // doesn't work!!
    // myFunc5:  { function (s) { console.log("in myFunc5 foo2"); return s+s+s; } }, // doesn't work

    // JEREMY - TRY THIS!
    // myFunc6: function (arg) { console.log(arg); }, // doesn't work

    myFunc7: { value: { getToken: function () {

        console.log(">>>>> entering myFunc7");
        global.flerg = "WRONG";
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

        return ago.request(opts)
        .then(function (results) {
            console.log('>>>>> in myfunc7.getToken: results.token: ', results.token);
            global.flerg = results.token
            this.flerpp = results.token
            console.log('>>>>> in myfunc7.getToken: first global.flerg: ' + global.flerg);
            console.log('>>>>> in myfunc7.getToken: first this.flerpp: ' + this.flerpp);
            return results.token
        })
        .catch(function (err) {
            console.log('>>>>> in myfunc7.getToken: got error from generateToken: ', err);
        });

//        console.log('>>>>> in myfunc7.getToken: second this.flerpp: ' + this.flerpp);
//        console.log('>>>>> in myfunc7.getToken: second global.flerg: ' + global.flerg);
//        console.log(">>>>> leaving myFunc7");
//        return global.flerg;
    } } },

    pageTitle:    { value: 'ArcGIS Open Data' },
    url:          { value: 'http://opendataqa.arcgis.com/' },
    newestData:        { value: '.featurette-new .row' },
    signinButton: { value: '#navbar .navbar-nav li:nth-child(3) a' },
    signoutButton: { value: '.signout' },
    userDropdown: { value: '.od-user-dropdown-component button' },
    manageSitesOption: { value: '.dropdown-menu li:nth-child(2) a' },

    expectedSignoutButtonText: { value: 'Signout' },

});
