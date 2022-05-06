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

        schema: {
          requestConcurrency: 2, // currently set to 5
          perPage: 2, // currently set to 20
          previewRequestConcurrency: 1, // currently set to 2
          
        },
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
                      "slug": "test-hat-2",
                      "price": "$15.00",
                      "featuredImage": {
                        "node": {
                          "sourceUrl": "https://portal.revrevdev.xyz/wp-content/uploads/2022/04/baggy-cap-navy-blue-500x500-1.jpg"
                        }
                      },
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
                      "slug": "test-hat-1",
                      "price": "$20.00",
                      "featuredImage": {
                        "node": {
                          "sourceUrl": "https://portal.revrevdev.xyz/wp-content/uploads/2022/04/plain-red-cap-500x500-1.jpg"
                        }
                      },
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
                      "slug": "test-subscription",
                      "price": "$30.00",
                      "featuredImage": {
                        "node": {
                          "sourceUrl": "https://portal.revrevdev.xyz/wp-content/uploads/woocommerce-placeholder.png"
                        }
                      },
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
                      "slug": "test-course",
                      "price": "$20.00",
                      "featuredImage": {
                        "node": {
                          "sourceUrl": "https://portal.revrevdev.xyz/wp-content/uploads/woocommerce-placeholder.png"
                        }
                      },
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
                      "slug": "revival-of-revenue-hardcover-copy",
                      "price": "$30.00",
                      "featuredImage": {
                        "node": {
                          "sourceUrl": "https://portal.revrevdev.xyz/wp-content/uploads/2022/03/mockup-1.png"
                        }
                      },
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
                      "slug": "test-product",
                      "price": "$1.00",
                      "featuredImage": {
                        "node": {
                          "sourceUrl": "https://portal.revrevdev.xyz/wp-content/uploads/2021/12/mockup-1.png"
                        }
                      },
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
          store: ['name', 'slug', 'price', 'image'],
          normalizer: ({ data }) =>
          data.products.edges.map(node => ({
            databaseId: node.node.databaseId,
            name: node.node.name,
            slug: node.node.productCategories.nodes[0].slug + '/' + node.node.slug,
            price: node.node.price,
            image: node.node.featuredImage.node.sourceUrl
        })),
      }
  },
  ],
};
