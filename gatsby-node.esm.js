import {ApolloClient, gql, HttpLink, InMemoryCache } from "@apollo/client";
import fetch from "cross-fetch";


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


const client = new ApolloClient({
    link: new HttpLink({ uri: process.env.GATSBY_WORDPRESS_API_URL, fetch }),
    cache: new InMemoryCache(),
  });
  
  const cool = () => {
    client.query({
        query: gql`query GET_POSTS {
            products {
                edges {
                    node {
                        databaseId
                    }
                }
            }
        }`
      })
        .then(result => {
            console.log(result)
            return result;
        } );
  }
 //const cool = await

	exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
		if (stage === "build-html") {
			actions.setWebpackConfig({
			module: {
				rules: [
				{
					test: /@vime/,
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
			databaseId: String
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

	

	exports.createPages = async function({actions, graphql}) {
        console.log(await cool())
		const { data } = await productQuery
		
		data.products.edges.forEach(edge => {
			const slug = edge.node.databaseId
			const id = edge.node.databaseId
			actions.createPages({
				path: slug,
				component: require.resolve(`.src/templates/singleProduct.js`),
				context: { id },
			})
		})
	}




	// exports.createPages = ({ graphql, actions }) => {
	// 	const { createPage } = actions;
	// 	return new Promise((resolve, reject) => {
	// 	  graphql(`
	// 	  query GET_POSTS 	{
	// 			products {
	// 				edges {
	// 					node {
	// 						databaseId
	// 					}
	// 				}
	// 			}
	// 		}
	// 	  `).then(result => {
	// 		  console.log(result)
	// 		result.data.products.edges.forEach(({ node }) => {
	// 		  createPage({
	// 			path: node.node.databaseId,
	// 			component: path.resolve(`.src/templates/singleProduct.js`),
	// 			context: {
	// 			 id: node.node.databaseId,
	// 			},
	// 		  });
	// 		});
	// 		resolve();
	// 	  });
	// 	});
	//   };
