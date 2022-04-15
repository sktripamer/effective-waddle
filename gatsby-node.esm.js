import {ApolloClient, gql, HttpLink, InMemoryCache } from "@apollo/client";
import fetch from "cross-fetch";
const path = require(`path`);

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

	
const client = new ApolloClient({
    link: new HttpLink({ uri: process.env.GATSBY_WORDPRESS_API_URL, fetch }),
    cache: new InMemoryCache(),
  });
  

  const cool = async () => {
   const hey = await client.query({
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
        .then(result =>{ return result});
    return hey;
  }
     

	exports.createPages = async function({actions}) {
        const newp = await cool()
        console.log(newp.data.products.edges)
        console.log(newp.data.products.edges[0].node.databaseId)
		const { data } = await cool()
		
		data.products.edges.forEach(edge => {
			const slug = edge.node.databaseId
			const id = edge.node.databaseId
			actions.createPages({
				path: slug,
				component: path.resolve(`.src/templates/singleProduct.js`),
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
