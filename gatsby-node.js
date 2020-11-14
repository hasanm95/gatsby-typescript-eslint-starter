/* eslint-disable prettier/prettier */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");

exports.onCreateWebpackConfig = ({ actions }) => {
	actions.setWebpackConfig({
		resolve: {
			alias: {
				"@theme": path.resolve(
					__dirname,
					"./src/gatsby-plugin-theme-ui"
				),
				"@components": path.resolve(__dirname, "./src/components"),
				"@shared": path.resolve(__dirname, "./src/components/shared"),
				"@containers": path.resolve(__dirname, "./src/containers"),
				"@layout": path.resolve(__dirname, "./src/layouts"),
				"@assets": path.resolve(__dirname, "./src/assets"),
				"@utils": path.resolve(__dirname, "./src/utils"),
				"@hooks": path.resolve(__dirname, "./src/hooks")
			},
		},
	});
};
