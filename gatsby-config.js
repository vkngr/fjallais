module.exports = {
  siteMetadata: {
    title: `Fjallaþjónustan`,
    description: `Fjallaþjónustan Travel Agency brings life to your dreams of Iceland.`,
    author: `@vkngr`,
    siteUrl: `https://fjalla.is`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-ZNZQZNXQ2G", // Google Analytics / GA
        ],
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
        },
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `7mck7fbwfpae`,
        accessToken: `CORMin56zbx3bXnlz2lzIvVMZvb_H7lJ7k56pqsXeAo`,
      },
    },
    "gatsby-plugin-postcss",
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `fjallais`,
        short_name: `fjalla`,
        start_url: `/`,
        background_color: `#0369a1`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#0369a1`,
        display: `minimal-ui`,
        icon: `src/images/black-mountain.svg`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
