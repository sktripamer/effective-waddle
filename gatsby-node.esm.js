    import {ApolloClient, gql, HttpLink, InMemoryCache } from "@apollo/client";
    import fetch from "cross-fetch";
    const { slash }         = require( `gatsby-core-utils` );
    const singleProductPageTemplate = require.resolve( `./src/templates/singleProduct.js` );
    const hatsPageTemplate = require.resolve( `./src/templates/hatsCat.js` );
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
                products(first: 100) {
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
                query: gql` query GET_SHIRTS {
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
                        }
                      }
                    }
                  }`
            })
                .then(result =>{ return result});
            return hey;
        }
    const shirtData = async () =>  await shirts();


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
            console.log(finalShirtData)
                console.log('inside')
                actions.createPage({
                    path: `shop/shirts`,
                    component: slash( hatsPageTemplate ),
                    context: { pagedata: edge},
                })
            
            data.products.edges.forEach(edge => {

                actions.createPage({
                    path: `shop/${edge.node.productCategories.nodes[0].slug}/${edge.node.slug}`,
                    component: slash( singleProductPageTemplate ),
                    context: { id: edge.node.databaseId, slug: edge.node.slug, name: edge.node.name, type: edge.node.type, description: edge.node.description, featured: edge.node.featured, cat: edge.node.productCategories.nodes[0].name},
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
