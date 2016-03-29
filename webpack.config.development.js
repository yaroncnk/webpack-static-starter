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

// Plugins
config.plugins = [].concat(
  config.plugins, [
    new ExtractTextPlugin("[name]-[hash].css"),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
);

module.exports = config;
