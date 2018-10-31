const path = require("path");
module.exports = {
	entry: {
		main: "./src/main.js"
	},
	mode: "development",
	output: {
		filename: "[name]-bundle.js",
		path: path.resolve(__dirname, "../dist"),
		publicPath: "/"
	},
	devServer: {
		contentBase: "dist",
		overlay: true
	},
	module: {
		rules: [
			{
				test: /\.js/,
				use: [
					{
						loader: "babel-loader"
					}
				],
				exclude: /node-modules/
			},
			{
				test: /\.css$/,
				use: [
					{
						loader: "style-loader"
					},
					{
						loader: "css-loader"
					}
				]

			},
			{
				test: /\.html$/,
				use: [
					{
						loader: "html-loader",
						options: {
							attrs: ["img:src"]
						}
					},
					{
						loader: "extract-loader"
					},
					{
						loader: "file-loader",
						options: {
							name: "[name].html"
						}
					}
				]
			},
			{
				test: /\.(jpg|gif|png)$/,
				use: [
					{
						loader: "file-loader",
						options: {
							name: "images/[name].[ext]"
						}
					}
				]
			}
		]
	}
};
