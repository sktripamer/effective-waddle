import {ApolloClient, gql, HttpLink, InMemoryCache } from "@apollo/client";
import fetch from "cross-fetch";
const client = new ApolloClient({
  link: new HttpLink({ uri: process.env.GATSBY_WORDPRESS_API_URL, fetch }),
  cache: new InMemoryCache(),
});
const cool = async () => {
  const hey = await client.query({
       query: gql`query {
        products {
          edges {
            node {
              databaseId
              name
              slug
              productCategories {
                nodes {
                  slug
                }
              }
            }
          }
        }
        }`
     })
       .then(result =>{ return result});
   return hey;
 }


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
    {
      resolve: 'gatsby-plugin-local-search',
      options: {
          name: 'pages',
          engine: 'flexsearch',
          query: `query {
             products {
               edges {
                 node {
                  databaseId
                  name
                  productCategories {
                    nodes {
                      slug
                    }
                  }
                 }
               }
             }
             }`,
          uri: process.env.GATSBY_WORDPRESS_API_URL,
          ref: 'slug',
          index:['name'],
          store: ['name', 'slug'],
          normalizer: ({ data }) =>
          data.products.edges.map(node => ({
              name: node.name,
              slug: node.productCategories.nodes[0].slug,
          })),
      }
  },
  ],
};
