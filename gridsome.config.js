const config = require("./src/assets/content/data/config.json");
const homeData = require("./src/assets/content/data/home.json");
const infoData = require("./src/assets/content/data/info.json");

module.exports = {
  siteName: 'Bulma Energy',
  siteDescription: 'Por una transición limpia a la indendencia energética',

  templates: {
    WordPressCategory: '/category/:slug', // adds route for "category" post type (Optional)
    WordPressPost: '/:year/:month/:day/:slug', //adds route for "post" post type (Optional)
    WordPressPostTag: '/tag/:slug' // adds route for "post_tag" post type (Optional)
  },
  
  metadata: {
    siteName: config.title,
    siteDescription: config.description,
    infoData: infoData,
    configData: config,
    homeData: homeData,
  },

  plugins: [
    {
      use: '@gridsome/source-wordpress',
      options: {
        baseUrl: config.WP_base, // required
        typeName: 'WordPress', // GraphQL schema name (Optional)
        apiBase: 'wp-json',
        perPage: 100,
        concurrent: 10
      }
    },
/*    {
      use: 'gridsome-source-google-docs',
      options: {
        foldersIds: ['a8o3d384gdjbvxlfdi8rsz3'],
        clientId: '534534534553-sdify73yriw3sy3ri7y33fis73yfis.apps.googleusercontent.com',
        clientSecret: 'fsidufhsie734fhsi7si3',
        apiKey: 'asdas7ir3irshek8hsduska3udhsdu',
      },
    },*/
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: config.G_Analytics
      }
    },
  ]
}
