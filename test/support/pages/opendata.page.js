/** PageObject -- umbrella/open data landing page **/

const Page = require('./page');

module.exports = Object.create(Page, {

    /*
     * Template
     */

    //$name:  { get: function () { return browser.element('$selector'); } },
    //$name:  { value: '$value' },

    // from: http://stackoverflow.com/questions/37276705/webdriver-io-pageobject-pattern-define-element-selector-by-passing-argument :
    myFunc1:  { value: { get: function (i) { console.log("in myFunc1 get, i is", i); return true; } } },
    myFunc2:  { value: { get: function () { console.log("in myFunc2 get"); return true; } } },
    myFunc3:  { value: { get2: function () { console.log("in myFunc3 get2"); return true; } } },
    // call from a step definition like this: opendataPage.myFunc1.get(1);

    pageTitle:    { value: 'ArcGIS Open Data' },
    url:          { value: 'http://opendataqa.arcgis.com/' },
    newestData:        { value: '.featurette-new .row' },
    signinButton: { value: '#navbar .navbar-nav li:nth-child(3) a' },
    signoutButton: { value: '.signout' },
    userDropdown: { value: '.od-user-dropdown-component button' },
    manageSitesOption: { value: '.dropdown-menu li:nth-child(2) a' },

    expectedSignoutButtonText: { value: 'Signout' },

});
