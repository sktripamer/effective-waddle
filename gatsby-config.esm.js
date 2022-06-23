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
          perPage: 10, // currently set to 20
          previewRequestConcurrency: 1, // currently set to 2
          
        },
        type: {
          Customer: {
            exclude: true,
          },
          Taxonomy: {
            exclude: true,
          },
        },
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.inline\.svg$/,
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
    `gatsby-plugin-remove-trailing-slashes`,
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
                      "databaseId": 1502,
                      "name": "Entrepreneurial Espresso Denim T-Shirt",
                      "slug": "entrepreneurial-espresso-denim-t-shirt",
                      "productCategories": {
                        "nodes": [
                          {
                            "slug": "shirts"
                          }
                        ]
                      },
                      "price": "$30.00",
                      "featuredImage": {
                        "node": {
                          "sourceUrl": "https://portal.revrevdev.xyz/wp-content/uploads/2022/05/unisex-denim-t-shirt-black-front-62758f6f2e306.jpg"
                        }
                      }
                    }
                  },
                  {
                    "node": {
                      "databaseId": 1492,
                      "name": "Entrepreneurial Espresso Denim Hat",
                      "slug": "entrepreneurial-espresso-denim-hat",
                      "productCategories": {
                        "nodes": [
                          {
                            "slug": "hats"
                          }
                        ]
                      },
                      "price": "$25.00",
                      "featuredImage": {
                        "node": {
                          "sourceUrl": "https://portal.revrevdev.xyz/wp-content/uploads/2022/05/denim-hat-blue-front-62758c99c14d6.jpg"
                        }
                      }
                    }
                  },
                  {
                    "node": {
                      "databaseId": 1473,
                      "name": "Entrepreneurial Espresso Organic Ribbed Beanie",
                      "slug": "entrepreneurial-espresso-organic-ribbed-beanie",
                      "productCategories": {
                        "nodes": [
                          {
                            "slug": "hats"
                          }
                        ]
                      },
                      "price": "$25.00",
                      "featuredImage": {
                        "node": {
                          "sourceUrl": "https://portal.revrevdev.xyz/wp-content/uploads/2022/05/organic-ribbed-beanie-black-front-62758b9bc42ca.jpg"
                        }
                      }
                    }
                  },
                  {
                    "node": {
                      "databaseId": 1440,
                      "name": "REVREV Women's Racerback Tank",
                      "slug": "revrev-womens-racerback-tank",
                      "productCategories": {
                        "nodes": [
                          {
                            "slug": "shirts"
                          }
                        ]
                      },
                      "price": "$25.00",
                      "featuredImage": {
                        "node": {
                          "sourceUrl": "https://portal.revrevdev.xyz/wp-content/uploads/2022/05/womens-racerback-tank-top-heather-white-front-62756a730fb92.jpg"
                        }
                      }
                    }
                  },
                  {
                    "node": {
                      "databaseId": 1412,
                      "name": "REVREV Mens Gradient Tank Top",
                      "slug": "revrev-mens-gradient-tank-top",
                      "productCategories": {
                        "nodes": [
                          {
                            "slug": "shirts"
                          }
                        ]
                      },
                      "price": "$25.00",
                      "featuredImage": {
                        "node": {
                          "sourceUrl": "https://portal.revrevdev.xyz/wp-content/uploads/2022/05/mens-staple-tank-top-black-front-627569d9591ec.jpg"
                        }
                      }
                    }
                  },
                  {
                    "node": {
                      "databaseId": 1208,
                      "name": "REVREV Blue iPhone Case",
                      "slug": "revrev-blue-iphone-case",
                      "productCategories": {
                        "nodes": [
                          {
                            "slug": "accessories"
                          }
                        ]
                      },
                      "price": "$20.00",
                      "featuredImage": {
                        "node": {
                          "sourceUrl": "https://portal.revrevdev.xyz/wp-content/uploads/2022/05/iphone-case-iphone-12-pro-max-case-with-phone-62754bd6447b8.jpg"
                        }
                      }
                    }
                  },
                  {
                    "node": {
                      "databaseId": 1179,
                      "name": "REVREV Men's Premium Polo",
                      "slug": "revrev-mens-premium-polo",
                      "productCategories": {
                        "nodes": [
                          {
                            "slug": "shirts"
                          }
                        ]
                      },
                      "price": "$30.00",
                      "featuredImage": {
                        "node": {
                          "sourceUrl": "https://portal.revrevdev.xyz/wp-content/uploads/2022/05/premium-polo-shirt-black-front-62754ae533556.jpg"
                        }
                      }
                    }
                  },
                  {
                    "node": {
                      "databaseId": 1100,
                      "name": "REVREV Patriotic iPhone Case",
                      "slug": "revrev-patriotic-iphone-case",
                      "productCategories": {
                        "nodes": [
                          {
                            "slug": "accessories"
                          }
                        ]
                      },
                      "price": "$20.00",
                      "featuredImage": {
                        "node": {
                          "sourceUrl": "https://portal.revrevdev.xyz/wp-content/uploads/2022/05/iphone-case-iphone-xs-max-case-with-phone-627549a916b18.jpg"
                        }
                      }
                    }
                  },
                  {
                    "node": {
                      "databaseId": 1062,
                      "name": "REVREV Bio-degradable Floral iPhone case",
                      "slug": "revrev-bio-degradable-floral-iphone-case",
                      "productCategories": {
                        "nodes": [
                          {
                            "slug": "accessories"
                          }
                        ]
                      },
                      "price": "$20.00",
                      "featuredImage": {
                        "node": {
                          "sourceUrl": "https://portal.revrevdev.xyz/wp-content/uploads/2022/05/speckled-iphone-case-iphone-11-case-on-phone-62754903a0eaa.jpg"
                        }
                      }
                    }
                  },
                  {
                    "node": {
                      "databaseId": 983,
                      "name": "REVREV Woodland iPhone Case",
                      "slug": "revrev-woodland-iphone-case",
                      "productCategories": {
                        "nodes": [
                          {
                            "slug": "accessories"
                          }
                        ]
                      },
                      "price": "$20.00",
                      "featuredImage": {
                        "node": {
                          "sourceUrl": "https://portal.revrevdev.xyz/wp-content/uploads/2022/05/iphone-case-iphone-12-pro-case-with-phone-6275487c30269.jpg"
                        }
                      }
                    }
                  },
                  {
                    "node": {
                      "databaseId": 938,
                      "name": "Entrepreneurial Espresso Ladies’ Muscle Tank",
                      "slug": "entrepreneurial-espresso-ladies-muscle-tank",
                      "productCategories": {
                        "nodes": [
                          {
                            "slug": "shirts"
                          }
                        ]
                      },
                      "price": "$25.00",
                      "featuredImage": {
                        "node": {
                          "sourceUrl": "https://portal.revrevdev.xyz/wp-content/uploads/2022/05/womens-muscle-tank-white-front-627547ebef4b3.jpg"
                        }
                      }
                    }
                  },
                  {
                    "node": {
                      "databaseId": 886,
                      "name": "REVREV Men's Tank Top",
                      "slug": "revrev-mens-tank-top",
                      "productCategories": {
                        "nodes": [
                          {
                            "slug": "shirts"
                          }
                        ]
                      },
                      "price": "$25.00",
                      "featuredImage": {
                        "node": {
                          "sourceUrl": "https://portal.revrevdev.xyz/wp-content/uploads/2022/05/mens-staple-tank-top-asphalt-front-627544d608ace.jpg"
                        }
                      }
                    }
                  },
                  {
                    "node": {
                      "databaseId": 832,
                      "name": "REVREV Unisex Duel Blend Hoodie",
                      "slug": "revrev-unisex-duel-blend-hoodie",
                      "productCategories": {
                        "nodes": [
                          {
                            "slug": "shirts"
                          }
                        ]
                      },
                      "price": "$40.00",
                      "featuredImage": {
                        "node": {
                          "sourceUrl": "https://portal.revrevdev.xyz/wp-content/uploads/2022/05/unisex-heavy-blend-hoodie-black-front-627543f0d0547.jpg"
                        }
                      }
                    }
                  },
                  {
                    "node": {
                      "databaseId": 802,
                      "name": "REVREV Flex Fit Hat",
                      "slug": "revrev-flex-fit-hat",
                      "productCategories": {
                        "nodes": [
                          {
                            "slug": "hats"
                          }
                        ]
                      },
                      "price": "$30.00",
                      "featuredImage": {
                        "node": {
                          "sourceUrl": "https://portal.revrevdev.xyz/wp-content/uploads/2022/05/closed-back-structured-cap-dark-navy-front-62753f9f7bc42.jpg"
                        }
                      }
                    }
                  },
                  {
                    "node": {
                      "databaseId": 775,
                      "name": "REVREV Cuffed Beanie",
                      "slug": "revrev-cuffed-beanie",
                      "productCategories": {
                        "nodes": [
                          {
                            "slug": "hats"
                          }
                        ]
                      },
                      "price": "$20.00",
                      "featuredImage": {
                        "node": {
                          "sourceUrl": "https://portal.revrevdev.xyz/wp-content/uploads/2022/05/cuffed-beanie-heather-grey-front-62753f108ce52.jpg"
                        }
                      }
                    }
                  },
                  {
                    "node": {
                      "databaseId": 739,
                      "name": "REVREV Khaki Baseball Cap",
                      "slug": "revrev-khaki-baseball-cap",
                      "productCategories": {
                        "nodes": [
                          {
                            "slug": "hats"
                          }
                        ]
                      },
                      "price": "$27.00",
                      "featuredImage": {
                        "node": {
                          "sourceUrl": "https://portal.revrevdev.xyz/wp-content/uploads/2022/05/classic-dad-hat-khaki-front-62753e5e6fa4b.jpg"
                        }
                      }
                    }
                  },
                  {
                    "node": {
                      "databaseId": 701,
                      "name": "REVREV Premium Unisex Hoodie",
                      "slug": "revrev-premium-unisex-hoodie",
                      "productCategories": {
                        "nodes": [
                          {
                            "slug": "shirts"
                          }
                        ]
                      },
                      "price": "$45.00",
                      "featuredImage": {
                        "node": {
                          "sourceUrl": "https://portal.revrevdev.xyz/wp-content/uploads/2022/05/unisex-premium-hoodie-white-front-62753cb6144d2.jpg"
                        }
                      }
                    }
                  },
                  {
                    "node": {
                      "databaseId": 668,
                      "name": "REVREV Tri-blend Short-Sleeve Unisex T-Shirt",
                      "slug": "revrev-tri-blend-short-sleeve-unisex-t-shirt",
                      "productCategories": {
                        "nodes": [
                          {
                            "slug": "shirts"
                          }
                        ]
                      },
                      "price": "$28.00",
                      "featuredImage": {
                        "node": {
                          "sourceUrl": "https://portal.revrevdev.xyz/wp-content/uploads/2022/05/unisex-tri-blend-t-shirt-charcoal-black-triblend-front-62753b0b31483.jpg"
                        }
                      }
                    }
                  },
                  {
                    "node": {
                      "databaseId": 596,
                      "name": "REVREV Mind, Soul, Body Unisex Long Sleeve Tee",
                      "slug": "revrev-mind-soul-body-unisex-long-sleeve-tee",
                      "productCategories": {
                        "nodes": [
                          {
                            "slug": "shirts"
                          }
                        ]
                      },
                      "price": "$35.00",
                      "featuredImage": {
                        "node": {
                          "sourceUrl": "https://portal.revrevdev.xyz/wp-content/uploads/2022/05/unisex-long-sleeve-tee-maroon-front-6275378daecbb.jpg"
                        }
                      }
                    }
                  },
                  {
                    "node": {
                      "databaseId": 552,
                      "name": "Entrepreneurial Espresso Unisex Long Sleeve Tee",
                      "slug": "entrepreneurial-espresso-unisex-long-sleeve-tee",
                      "productCategories": {
                        "nodes": [
                          {
                            "slug": "shirts"
                          }
                        ]
                      },
                      "price": "$35.00",
                      "featuredImage": {
                        "node": {
                          "sourceUrl": "https://portal.revrevdev.xyz/wp-content/uploads/2022/05/unisex-long-sleeve-tee-black-heather-front-627534827ddf8.jpg"
                        }
                      }
                    }
                  },
                  {
                    "node": {
                      "databaseId": 516,
                      "name": "REV REV Short Sleeve Unisex t-shirt",
                      "slug": "rev-rev-short-sleeve-unisex-t-shirt",
                      "productCategories": {
                        "nodes": [
                          {
                            "slug": "shirts"
                          }
                        ]
                      },
                      "price": "$30.00",
                      "featuredImage": {
                        "node": {
                          "sourceUrl": "https://portal.revrevdev.xyz/wp-content/uploads/2022/05/unisex-staple-t-shirt-army-front-6275332f961ab.jpg"
                        }
                      }
                    }
                  },
                  {
                    "node": {
                      "databaseId": 508,
                      "name": "Enamel Mug",
                      "slug": "enamel-mug",
                      "productCategories": {
                        "nodes": [
                          {
                            "slug": "accessories"
                          }
                        ]
                      },
                      "price": "$18.00",
                      "featuredImage": {
                        "node": {
                          "sourceUrl": "https://portal.revrevdev.xyz/wp-content/uploads/2022/05/enamel-mug-white-12oz-front-62753225d2623.jpg"
                        }
                      }
                    }
                  },
                  {
                    "node": {
                      "databaseId": 487,
                      "name": "Entrepreneurial Espresso Khaki Stone Dad Hat",
                      "slug": "entrepreneurial-espresso-khaki-stone-dad-hat",
                      "productCategories": {
                        "nodes": [
                          {
                            "slug": "hats"
                          }
                        ]
                      },
                      "price": "$25.00",
                      "featuredImage": {
                        "node": {
                          "sourceUrl": "https://portal.revrevdev.xyz/wp-content/uploads/2022/05/classic-dad-hat-white-front-62745dcccfe9a.jpg"
                        }
                      }
                    }
                  },
                  {
                    "node": {
                      "databaseId": 455,
                      "name": "Entrepreneurial Espresso Morning Motivation Unisex T-Shirt",
                      "slug": "entrepreneurial-espresso-morning-motivation-unisex-t-shirt",
                      "productCategories": {
                        "nodes": [
                          {
                            "slug": "shirts"
                          }
                        ]
                      },
                      "price": "$25.00 - $25.50",
                      "featuredImage": {
                        "node": {
                          "sourceUrl": "https://portal.revrevdev.xyz/wp-content/uploads/2022/05/unisex-basic-softstyle-t-shirt-black-front-62745ac671d90.jpg"
                        }
                      }
                    }
                  },
                  {
                    "node": {
                      "databaseId": 436,
                      "name": "REVREV Men's Curved Hem T-Shirt",
                      "slug": "revrev-mens-curved-hem-t-shirt",
                      "productCategories": {
                        "nodes": [
                          {
                            "slug": "shirts"
                          }
                        ]
                      },
                      "price": "$25.00",
                      "featuredImage": {
                        "node": {
                          "sourceUrl": "https://portal.revrevdev.xyz/wp-content/uploads/2022/05/mens-curved-hem-t-shirt-black-front-62745990a1de6.jpg"
                        }
                      }
                    }
                  },
                  {
                    "node": {
                      "databaseId": 428,
                      "name": "REVREV Enamel Mug",
                      "slug": "revrev-enamel-mug",
                      "productCategories": {
                        "nodes": [
                          {
                            "slug": "accessories"
                          }
                        ]
                      },
                      "price": "$25.00",
                      "featuredImage": {
                        "node": {
                          "sourceUrl": "https://portal.revrevdev.xyz/wp-content/uploads/2022/05/enamel-mug-white-12oz-front-627459416a219.jpg"
                        }
                      }
                    }
                  },
                  {
                    "node": {
                      "databaseId": 414,
                      "name": "REVREV Black Sticker",
                      "slug": "revrev-black-sticker",
                      "productCategories": {
                        "nodes": [
                          {
                            "slug": "hats"
                          }
                        ]
                      },
                      "price": "$3.00 - $3.50",
                      "featuredImage": {
                        "node": {
                          "sourceUrl": "https://portal.revrevdev.xyz/wp-content/uploads/2022/05/kiss-cut-stickers-3x3-default-6274588a32f8e.jpg"
                        }
                      }
                    }
                  },
                  {
                    "node": {
                      "databaseId": 403,
                      "name": "REVREV Red Sticker",
                      "slug": "revrev-red-sticker",
                      "productCategories": {
                        "nodes": [
                          {
                            "slug": "hats"
                          }
                        ]
                      },
                      "price": "$3.00 - $3.50",
                      "featuredImage": {
                        "node": {
                          "sourceUrl": "https://portal.revrevdev.xyz/wp-content/uploads/2022/05/kiss-cut-stickers-3x3-default-627458672cdab.jpg"
                        }
                      }
                    }
                  },
                  {
                    "node": {
                      "databaseId": 392,
                      "name": "REVREV Gradient Sticker",
                      "slug": "revrev-gradient-sticker",
                      "productCategories": {
                        "nodes": [
                          {
                            "slug": "hats"
                          }
                        ]
                      },
                      "price": "$3.00 - $3.50",
                      "featuredImage": {
                        "node": {
                          "sourceUrl": "https://portal.revrevdev.xyz/wp-content/uploads/2022/05/kiss-cut-stickers-3x3-default-627457f56cf4e.jpg"
                        }
                      }
                    }
                  },
                  {
                    "node": {
                      "databaseId": 341,
                      "name": "REVIVAL OF REVENUE FORMULA UNISEX T-SHIRT",
                      "slug": "revival-of-revenue-formula-unisex-t-shirt",
                      "productCategories": {
                        "nodes": [
                          {
                            "slug": "hats"
                          }
                        ]
                      },
                      "price": "$30.00",
                      "featuredImage": {
                        "node": {
                          "sourceUrl": "https://portal.revrevdev.xyz/wp-content/uploads/2022/05/unisex-staple-t-shirt-red-front-6274574c6ad0e.jpg"
                        }
                      }
                    }
                  },
                  {
                    "node": {
                      "databaseId": 319,
                      "name": "REVREV Red White & Blue Hat",
                      "slug": "revrev-red-white-blue-hat",
                      "productCategories": {
                        "nodes": [
                          {
                            "slug": "hats"
                          }
                        ]
                      },
                      "price": "$26.00",
                      "featuredImage": {
                        "node": {
                          "sourceUrl": "https://portal.revrevdev.xyz/wp-content/uploads/2022/05/classic-dad-hat-white-front-627455d239bc1.jpg"
                        }
                      }
                    }
                  },
                  {
                    "node": {
                      "databaseId": 281,
                      "name": "REVREV Short-Sleeve Unisex T-Shirt",
                      "slug": "revrev-short-sleeve-unisex-t-shirt",
                      "productCategories": {
                        "nodes": [
                          {
                            "slug": "hats"
                          }
                        ]
                      },
                      "price": "$25.00",
                      "featuredImage": {
                        "node": {
                          "sourceUrl": "https://portal.revrevdev.xyz/wp-content/uploads/2022/05/unisex-basic-softstyle-t-shirt-white-front-627454062f880.jpg"
                        }
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
