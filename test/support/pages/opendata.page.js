/** PageObject -- umbrella/open data landing page **/

const Page = require('./page');

module.exports = Object.create(Page, {

    /*
     * Template
     */

    //$name:  { get: function () { return browser.element('$selector'); } },
    //$name:  { value: '$value' },

    pageTitle:    { value: 'ArcGIS Open Data' },
    url:          { value: 'http://opendataqa.arcgis.com/' },
    newestData:        { value: '.featurette-new .row' },
    signinButton: { value: '#navbar .navbar-nav li:nth-child(3) a' },
    signoutButton: { value: '.signout' },
    userDropdown: { value: '.od-user-dropdown-component button' },
    manageSitesOption: { value: '.dropdown-menu li:nth-child(2) a' },

    expectedSignoutButtonText: { value: 'Signout' },

});
