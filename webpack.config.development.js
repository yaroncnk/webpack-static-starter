"use strict";

const webpack = require("webpack");
const baseConfig = require("./webpack.config.base.js");
const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

let config = Object.create(baseConfig);

config.entry = [].concat(
	config.entry, ['webpack-hot-middleware/client?reload=true']
);

config.output = Object.assign(config.output, {
	filename: '[name]-[hash].js',
});

config.module.loaders = [].concat(
	config.module.loaders, [
		{
			test: /\.css$/,
			loaders: [
				'style-loader',
				'css-loader',
				'postcss-loader'
			]
		}
	]
);

// Plugins
config.plugins = [].concat(
	config.plugins, [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin(),
	]
);

module.exports = config;
