/**
 * agoidentities.js
 * central location for looking up identity and organization information
 * we use a js file so we can easily require it into other files and also
 * have comments in-line
 */


module.exports = {
  //Production AGO information
  prod: {

  },
  //QA information - used for devt and testing
  qa: {
    baseUrl: 'https://qaext.arcgis.com',
    orgs: {
      //origin org owns the initiative templates, and solution templates
      //this simulates the `esri` org in production
      origin: {
        portalUrl: 'https://dc.mapsqa.arcgis.com',
        users: {
          admin: {
            username: 'dcadminqa',
            password: 'dcadminqa1'
          }
        }
      },
      //consumer org owns the configuration items
      //this simulates the city/community org in production
      consumer: {
        portalUrl:'https://rlod.mapsqa.arcgis.com',
        users:{
          admin: {
            username: 'rlodadminqa',
            password: 'rlodadminqa1'
          },
          hubAdmin: {
            username: 'hubAdmin',
            password: ''
          },
          initManager: {
            username: 'initMgr',
            password: ''
          }
        }
      }
    }
  }

};
