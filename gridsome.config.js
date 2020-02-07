const configData = require("./src/assets/content/data/config.json");
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
    siteName: configData.title,
    siteDescription: configData.description,
    infoData: infoData,
    configData: configData,
    homeData: homeData,
  },

  plugins: [
    {
      use: '@gridsome/source-wordpress',
      options: {
        baseUrl: configData.WP_base, // required
        typeName: 'WordPress', // GraphQL schema name (Optional)
        apiBase: 'wp-json',
        perPage: 100,
        concurrent: 10,
        splitPostsIntoFragments: true, // default false
        downloadRemoteImagesFromPosts: true, // default false
        downloadRemoteFeaturedImages: true, // default false
        downloadACFImages: true, // default false
      }
    },
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: configData.G_Analytics
      }
    },
    {
      use: 'gridsome-plugin-tailwindcss',
      /* These are the default options. You don't need to set any options to get going.
      options: {
        tailwindConfig: './some/file/js',
        purgeConfig: {},
        presetEnvConfig: {},
        shouldPurge: true,
        shouldImport: true,
        shouldTimeTravel: true
      }
      */
    },
    {
      use: 'gridsome-plugin-gtm',
      options: {
        id: 'GTM-PJQ7WC4',
        enabled: true,
        debug: true
      }
    }
  ]
};
