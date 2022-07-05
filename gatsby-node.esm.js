    import {ApolloClient, gql, HttpLink, InMemoryCache } from "@apollo/client";
    import fetch from "cross-fetch";
    const { slash }         = require( `gatsby-core-utils` );
    const singleProductPageTemplate = require.resolve( `./src/templates/singleProduct.js` );
    const hatsPageTemplate = require.resolve( `./src/templates/hatsCat.js` );
    const shirtsPageTemplate = require.resolve( `./src/templates/shirtsCat.js` );
    const accsPageTemplate = require.resolve( `./src/templates/accsCat.js` );
    const coursesPageTemplate = require.resolve( `./src/templates/coursesCat.js` );
    const eePageTemplate = require.resolve( `./src/templates/ee-home.js` );
    const singleEETemplate = require.resolve( `./src/templates/ee-post.js` );
    const ShopPageTemplate = require.resolve( `./src/templates/shopPage.js` );
    
    // const path = require(`path`);

    const productQuery = gql`
    query GET_POSTS {
        products {
            edges {
                node {
                    databaseId
                }
            }
        }
    }
    `



        exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
            if (stage === "build-html") {
                actions.setWebpackConfig({
                module: {
                    rules: [
                    {
                        test: /@vime/,
                        use: loaders.null(),
                    },
                    {
                        test: /@polymer/,
                        use: loaders.null(),
                    },
                    ],
                },
                })
            }
        };

        exports.createSchemaCustomization = ({ actions }) => {
            const { createTypes } = actions
        
            createTypes(`
            type products implements Node {
                edges: ProductsEdges
            }
            type ProductsEdges {
                node: ProductsEdgesNode
            }
            type ProductsEdgesNode {
                databaseId: String,
                name: String,
                productCategories: NodeProductCategories
            }
            type NodeProductCategories {
                nodes: ProductsCategoriesNodes
            }
            type ProductsCategoriesNodes {
                slug: String
            }
            `)
        }
        const GET_POSTS = `
        query GET_POSTS {
            products {
                edges {
                    node {
                        databaseId
                    }
                }
            }
        }
        `;

        
    const client = new ApolloClient({
        link: new HttpLink({ uri: process.env.GATSBY_WORDPRESS_API_URL, fetch }),
        cache: new InMemoryCache(),
    });
    

    const cool = async () => {
    const hey = await client.query({
            query: gql`query GET_POSTS {
                products(first: 100, where: {categoryIdNotIn: 31}) {
                  edges {
                    node {
                      databaseId
                      slug
                      name
                      description(format: RAW)
                      type
                      featured
                      productCategories {
                        nodes {
                          name
                          slug
                        }
                      }
                      ... on VariableProduct {
                        id
                        name
                        price
                        featuredImage {
                          node {
                            sourceUrl
                          }
                        }
                      }
                      ... on SimpleProduct {
                        id
                        name
                        price
                        featuredImage {
                          node {
                            sourceUrl
                          }
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
        

   
//272 is shirts id.
//hardcode these queries for now, since we want higher degree of customization for only a few cats.

      const shirts = async () => {
        const hey = await client.query({
                query: gql`query GET_SHIRTS {
                    products(first: 100, where: {categoryId: 272}) {
                      edges {
                        node {
                          databaseId
                          slug
                          name
                          featured
                          productCategories {
                            nodes {
                              slug
                            }
                          }
                          reviewCount
                          averageRating
                          ... on VariableProduct {
                            price
                            featuredImage {
                              node {
                                sourceUrl
                              }
                            }
                          }
                          ... on SimpleProduct {
                            price
                            featuredImage {
                              node {
                                sourceUrl
                              }
                            }
                          }
                          productTags {
                            edges {
                              node {
                                name
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                  `
            })
                .then(result =>{ return result});
            return hey;
        }
    const shirtData = async () =>  await shirts();




    
    const hats = async () => {
        const hey = await client.query({
                query: gql`query GET_HATS {
                    products(first: 100, where: {categoryId: 108}) {
                      edges {
                        node {
                          databaseId
                          slug
                          name
                          featured
                          productCategories {
                            nodes {
                              slug
                            }
                          }
                          reviewCount
                          averageRating
                          ... on VariableProduct {
                            price
                            featuredImage {
                              node {
                                sourceUrl
                              }
                            }
                          }
                          ... on SimpleProduct {
                            price
                            featuredImage {
                              node {
                                sourceUrl
                              }
                            }
                          }
                          productTags {
                            edges {
                              node {
                                name
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                  `
            })
                .then(result =>{ return result});
            return hey;
        }


        



          const ee = async () => {
            const hey = await client.query({
                    query: gql`query GET_EE {
                        posts(where: {categoryId: 1178, password: "o5hUyXW4rYe0877m68"}, last: 1000) {
                          edges {
                            node {
                              databaseId
                              title
                              slug
                            }
                          }
                        }
                      }
                      
                      `
                })
                    .then(result =>{ return result});
                return hey;
            }


        const accs = async () => {
            const hey = await client.query({
                    query: gql`query GET_ACCS {
                        products(first: 100, where: {categoryId: 274}) {
                          edges {
                            node {
                              databaseId
                              slug
                              name
                              featured
                              productCategories {
                                nodes {
                                  slug
                                }
                              }
                              reviewCount
                              averageRating
                              ... on VariableProduct {
                                price
                                featuredImage {
                                  node {
                                    sourceUrl
                                  }
                                }
                              }
                              ... on SimpleProduct {
                                price
                                featuredImage {
                                  node {
                                    sourceUrl
                                  }
                                }
                              }
                              productTags {
                                edges {
                                  node {
                                    name
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                      `
                })
                    .then(result =>{ return result});
                return hey;
            }


            const courses = async () => {
                const hey = await client.query({
                        query: gql`query GET_ACCS {
                            products(first: 100, where: {categoryId: 1129}) {
                              edges {
                                node {
                                  databaseId
                                  slug
                                  name
                                  featured
                                  productCategories {
                                    nodes {
                                      slug
                                    }
                                  }
                                  reviewCount
                                  averageRating
                                  ... on VariableProduct {
                                    price
                                    featuredImage {
                                      node {
                                        sourceUrl
                                      }
                                    }
                                  }
                                  ... on SimpleProduct {
                                    price
                                    featuredImage {
                                      node {
                                        sourceUrl
                                      }
                                    }
                                  }
                                  productTags {
                                    edges {
                                      node {
                                        name
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                          `
                    })
                        .then(result =>{ return result});
                    return hey;
                }

        // actions.createPage({
        //     path: `shop/shirts`,
        //     component: slash( hatsPageTemplate ),
        //     context: { pagedata: shirtData},
        //   })
        // exports.onCreatePage = ({ actions }) => {
        //     const { data } = await shirts()
        //     const { createPage } = actions
          
        //     // You can access the variable "house" in your page queries now
        //     createPage({
        //         path: `shop/shirts`,
        //         component: slash( hatsPageTemplate ),
        //         context: { pagedata: data},
        //     })
        //   }

        exports.createPages = async function({actions, gql}) {
            const { data } = await cool()
            console.log('here123')


            const finalShirtData = await shirts()
                console.log('inside')
                actions.createPage({
                    path: `shop/shirts`,
                    component: slash( hatsPageTemplate ),
                    context: { pagedata: finalShirtData},
                })

                const finalHatData = await hats()
                console.log('inside')
                actions.createPage({
                    path: `shop/hats`,
                    component: slash( shirtsPageTemplate ),
                    context: { pagedata: finalHatData},
                })

                const finalAccData = await accs()
                console.log('inside')
                actions.createPage({
                    path: `shop/accessories`,
                    component: slash( accsPageTemplate ),
                    context: { pagedata: finalAccData},
                })

                const finalCourseData = await courses()
                console.log('inside')
                actions.createPage({
                    path: `shop/courses`,
                    component: slash( coursesPageTemplate ),
                    context: { pagedata: finalCourseData},
                })

                const finalEEData = await ee()
                console.log('insideww')
                console.log(finalEEData)
                actions.createPage({
                    path: `entrepreneurial-espresso`,
                    component: slash( eePageTemplate ),
                    context: { pagedata: finalEEData},
                })
                const shopData = await cool()
                actions.createPage({
                    path: `shop`,
                    component: slash( ShopPageTemplate ),
                    context: { pagedata: shopData},
                })


                finalEEData.data.posts.edges.forEach(edge => {
                    actions.createPage({
                        path: `entrepreneurial-espresso/${edge.node.slug}`,
                        component: slash( singleEETemplate ),
                        context: { id: edge.node.databaseId, title: edge.node.title },
                    })
                })
                
            data.products.edges.forEach(edge => {

                actions.createPage({
                    path: `shop/${edge.node.productCategories.nodes[0].slug}/${edge.node.slug}`,
                    component: slash( singleProductPageTemplate ),
                    context: { image: edge.node.featuredImage.node.sourceUrl, id: edge.node.databaseId, slug: edge.node.slug, name: edge.node.name, type: edge.node.type, description: edge.node.description, featured: edge.node.featured, cat: edge.node.productCategories.nodes[0].name},
                })
                
            })
        }




        // exports.createPages = ({ actions }) => {
        // 	const { createPage } = actions;
        // 	const newp = await cool()
        //     newp.data.products.edges.forEach(({ node }) => {
        // 		  createPage({
        // 			path: node.node.databaseId,
        // 			component: path.resolve(`src/templates/singleProduct.js`),
        // 			context: {
        // 			 id: node.node.databaseId,
        // 			},
        // 		  });
        // 		});
                

        //   };
