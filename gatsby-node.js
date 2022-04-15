

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
		const typeDefs = `
		type products implements Node {	
			edges: Edges
		}
		type Edges implements Node {	
			node: Node
		}
		type Node implements Node {	
			databaseId: ID!
		}
		`
		createTypes(typeDefs)
	}

	exports.createSchemaCustomization = ({ actions }) => {
		const { createTypes } = actions
		const typeDefs = `
		  type MarkdownRemark implements Node {
			frontmatter: Frontmatter
		  }
		  type Frontmatter {
			tags: [String!]!
		  }
		`
		createTypes(typeDefs)
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
		const { data } = await graphql( GET_POSTS )


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

