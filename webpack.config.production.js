"use strict";

const webpack = require("webpack");
const baseConfig = require("./webpack.config.base.js");
const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

let config = Object.create(baseConfig);

// // Modules
config.module.loaders = [].concat(
	config.module.loaders, [{
		test: /\.css$/,
		loader: ExtractTextPlugin.extract({
			fallbackLoader: "style-loader",
			loader: ['css-loader', 'postcss-loader']
		})
	}]
);

config.output = Object.assign(config.output, {
	filename: '[name]-[hash].min.js',
});

// Plugins
config.plugins = [].concat(
	config.plugins,
	new ExtractTextPlugin('[name]-[hash].min.css'),
	new webpack.optimize.UglifyJsPlugin({
		compressor: {
			warnings: false,
			screw_ie8: true
		}
	})
);

module.exports = config;
