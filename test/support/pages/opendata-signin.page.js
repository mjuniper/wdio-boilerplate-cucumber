/** PageObject for Open Data Admin **/

const Page = require('./page');

const iframeId = 'torii-iframe';

module.exports = Object.create(Page, {

    /*
     * Template
     */

    //$name:  { get: function () { return browser.element('$selector'); } },
    //$name:  { value: '$value' },

    // pageTitle:    { value: 'ArcGIS Open Data Administration' },
    url:          { value: 'https://opendataqa.arcgis.com/admin/signin' },
    iframeId:       { value: iframeId },
    iframe:       { value: `iframe#${iframeId}` },
    username:     { value: '#user_username' },
    password:     { value: '#user_password' },
    signinButton:     { value: '#signIn' }

});
