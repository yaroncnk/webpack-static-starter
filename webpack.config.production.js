"use strict";

const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const baseConfig = require("./webpack.config.base.js");

let config = Object.create(baseConfig);

// // Modules
// config.module.loaders = [].concat(
//   config.module.loaders, []
// );

// Plugins
config.plugins = [].concat(
  config.plugins,
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    }
  })
);

module.exports = config;
