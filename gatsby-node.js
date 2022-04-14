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

exports.createPages = async function({actions, graphql}) {
	const {data} = await graphql`
	query {
		products {
			edges {
			  node {
				databaseId
			  }
			}
		  }
	}
	`


	data.products.edges.forEach(edge => {
		const slug = edge.node.databaseId
		const id = edge.node.databaseId
		actions.createPages({
			path: slug,
			component: require.resolve(`.src/templates/singleProduct.js`),
			context:{id},
		})
	})
}

