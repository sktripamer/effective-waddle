require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: "headless-wp-cookie-auth-gatsby",
  },
  plugins: [
    {
      resolve: `gatsby-source-wordpress`,
      alias: {
        'react-dom$': 'react-dom/profiling',
      },
      options: {
        url: process.env.GATSBY_WORDPRESS_API_URL,
        type: {
          Customer: {
            exclude: true,
          },
        },
      },
    },
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-gatsby-cloud`,
      options: {
      
        allPageHeaders: [
          "Access-Control-Allow-Origin: '*'",
        ],
        mergeSecurityHeaders: false,
      },
    },
  ],
};
