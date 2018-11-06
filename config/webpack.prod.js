const path = require("path");
const webpack = require("webpack");
const HTMLWebpackPlugin = require("html-webpack-plugin");
// const MinifyPlugin = require("babel-minify-webpack-plugin");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
module.exports = env => {
	return {
		entry: {
			main: "./src/main.js"
		},
		mode: "production",
		output: {
			filename: "[name]-bundle.js",
			path: path.resolve(__dirname, "../dist"),
			publicPath: "/"
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
					exclude: /node_modules/
				},
				{
					test: /\.css$/,
					use: [
						{
							loader: MiniCSSExtractPlugin.loader
						},
						{
							loader: "css-loader",
							options: {
								minimize: true
							}
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
		},
		plugins: [
			new MiniCSSExtractPlugin(),
			new OptimizeCSSAssetsPlugin({
				assetNameRegExp: /\.css$/g,
				cssProcessor: require("cssnano"),
				cssProcessorOptions: { discardComments: { removeAll: true } },
				canPrint: true
			}),
			new HTMLWebpackPlugin({
				template: "./src/index.html",
				inject: true
			}),
			new webpack.DefinePlugin({
				'process.env': {
					'NODE_ENV': JSON.stringify(env.NODE_ENV)
				}
			}),
			// new MinifyPlugin()
			new UglifyJSPlugin()
		]
	}

};

