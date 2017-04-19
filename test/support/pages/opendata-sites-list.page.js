/** PageObject -- sites list page **/

const Page = require('./page');

module.exports = Object.create(Page, {

    /*
     * Template
     */

    //$name:  { get: function () { return browser.element('$selector'); } },
    //$name:  { value: '$value' },

    // pageTitle:    { value: 'ArcGIS Open Data Administration' },
    url:                    { value: 'https://opendataqa.arcgis.com/admin/sites' },
    sitesListItem:          { value: '.site-list-block' },
    sitesListPagination:    { value: '.item-list-pager ul.pagination' },

});
