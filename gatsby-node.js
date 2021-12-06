exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
	if (stage === "build-html") {
		actions.setWebpackConfig({
		  module: {
			rules: [
			  {
				test: /custom-react-player/,
				use: loaders.null(),
			  },
			],
		  },
		})
	  }
	actions.setWebpackConfig({
		resolve: {
			alias: {
				'~': path.resolve(__dirname, '../../node_modules')
			}
		},
	})
};
