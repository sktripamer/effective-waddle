

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

	// exports.createSchemaCustomization = ({ actions }) => {
	// 	const { createTypes } = actions
	// 	const typeDefs = `
	// 	type products implements Node @dontInfer {	
	// 		edges: Edges
	// 	}
	// 	type Edges implements Node @dontInfer {	
	// 		node: Node
	// 	}
	// 	type Node implements Node @dontInfer {	
	// 		databaseId: ID!
	// 	}
	// 	`
	// 	createTypes(typeDefs)
	// }




	// const GET_POSTS = `
	// query GET_POSTS {
	// 	products {
	// 		edges {
	// 			node {
	// 				databaseId
	// 			}
	// 		}
	// 	}
	// }
	// `;

	

	// exports.createPages = async function({actions, graphql}) {
	// 	const { data } = await graphql( GET_POSTS )


	// 	data.products.edges.forEach(edge => {
	// 		const slug = edge.node.databaseId
	// 		const id = edge.node.databaseId
	// 		actions.createPages({
	// 			path: slug,
	// 			component: require.resolve(`.src/templates/singleProduct.js`),
	// 			context: { id },
	// 		})
	// 	})


	exports.createSchemaCustomization = ({ actions, schema }) => {
		const { createTypes } = actions
		const typeDefs = [
		  schema.buildObjectType({
			name: "products",
			fields: {
			  edges: {
				node: {
					databaseId: "ID!",
					type: "Object"
				},
				type: "Object"
			  },
			},
			interfaces: ["Node"],
			 extensions: {
				   // While in SDL you have two different directives, @infer and @dontInfer to
				 // control inference behavior, Gatsby Type Builders take a single `infer`
				  // extension which accepts a Boolean
			   infer: false
			 },
		  }),
		]
		createTypes(typeDefs)
	  }

	exports.createPages = ({ graphql, actions }) => {
		const { createPage } = actions;
		return new Promise((resolve, reject) => {
		  graphql(`
			{
				products {
					edges {
						node {
							databaseId
						}
					}
				}
			}
		  `).then(result => {
			result.data.products.edges.forEach(({ node }) => {
			  createPage({
				path: node.databaseId,
				component: path.resolve(`.src/templates/singleProduct.js`),
				context: {
				 id: node.databaseId,
				},
			  });
			});
			resolve();
		  });
		});
	  };
