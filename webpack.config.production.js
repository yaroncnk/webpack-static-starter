"use strict";

const webpack = require("webpack");
const baseConfig = require("./webpack.config.base.js");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

let config = Object.create(baseConfig);

// // Modules
// config.module.loaders = [].concat(
//   config.module.loaders, []
// );

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
