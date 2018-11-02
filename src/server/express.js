import  express from "express";
import path from "path";

const server = express();

const staticMiddleware = express.static("dist");

const webpack = require("webpack");
const config = require("../../config/webpack.dev");
const compiler = webpack(config);
const webpackMiddleware = require("webpack-dev-middleware")(
	compiler, config.devServer
);
server.use(webpackMiddleware);

const webpackHotMiddleware = require("webpack-hot-middleware")(compiler);

server.use(webpackMiddleware);
server.use(webpackHotMiddleware);
server.use(staticMiddleware);

const PORT = process.env.PORT || 8000;

server.listen(PORT, () => {
	console.log(`server is listening on localhost:${PORT}`);
});
