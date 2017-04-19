/** Example PageObject **/

const Page = require('./page');

const iframeId = 'torii-iframe';

module.exports = Object.create(Page, {

    /*
     * Template
     */

    //$name:  { get: function () { return browser.element('$selector'); } },
    //$name:  { value: '$value' },

    // pageTitle:    { value: 'ArcGIS Open Data Administration' },
    url:          { value: 'https://opendatadev.arcgis.com/admin/signin' },
    iframeId:       { value: iframeId },
    iframe:       { value: `iframe#${iframeId}` },
    username:     { value: '#user_username' },
    password:     { value: '#user_password' },
    signinButton:     { value: '#signIn' }
    // searchInput:        { value: '#lst-ib' },
    // searchButton:       { value: '#tsf > div.tsf-p > div.jsb > center > input[type="submit"]:nth-child(1)' },
    // newestData:        { value: '.featurette-new .row' },

});
