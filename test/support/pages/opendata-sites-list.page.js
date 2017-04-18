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
    url:                    { value: 'https://opendatadev.arcgis.com/admin/sites' },
    sitesListItem:          { value: '.site-list-block' },
    sitesListPagination:    { value: '.item-list-pager ul.pagination' },
    // searchButton:       { value: '#tsf > div.tsf-p > div.jsb > center > input[type="submit"]:nth-child(1)' },
    // newestData:        { value: '.featurette-new .row' },

});
