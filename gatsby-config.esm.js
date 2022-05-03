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
          query: `{
            "data": {
              "products": {
                "edges": [
                  {
                    "node": {
                      "databaseId": 179,
                      "name": "Test Hat 2",
                      "productCategories": {
                        "nodes": [
                          {
                            "slug": "hats"
                          }
                        ]
                      }
                    }
                  },
                  {
                    "node": {
                      "databaseId": 171,
                      "name": "Test Hat 1",
                      "productCategories": {
                        "nodes": [
                          {
                            "slug": "hats"
                          }
                        ]
                      }
                    }
                  },
                  {
                    "node": {
                      "databaseId": 105,
                      "name": "test subscription",
                      "productCategories": {
                        "nodes": [
                          {
                            "slug": "uncategorized"
                          }
                        ]
                      }
                    }
                  },
                  {
                    "node": {
                      "databaseId": 101,
                      "name": "test course",
                      "productCategories": {
                        "nodes": [
                          {
                            "slug": "uncategorized"
                          }
                        ]
                      }
                    }
                  },
                  {
                    "node": {
                      "databaseId": 91,
                      "name": "Revival of Revenue - Hardcover Copy",
                      "productCategories": {
                        "nodes": [
                          {
                            "slug": "uncategorized"
                          }
                        ]
                      }
                    }
                  },
                  {
                    "node": {
                      "databaseId": 30,
                      "name": "Finish the video for $1!",
                      "productCategories": {
                        "nodes": [
                          {
                            "slug": "uncategorized"
                          }
                        ]
                      }
                    }
                  }
                ]
              }
            },
            "extensions": {
              "debug": []
            }
          }`,
          ref: 'databaseId',
          index:['name'],
          store: ['name', 'slug'],
          normalizer: ({ data }) =>
          data.products.edges.map(node => ({
            databaseId: node.node.databaseId,
            name: node.node.name,
            slug: node.node.productCategories.nodes[0].slug,
        })),
      }
  },
  ],
};
