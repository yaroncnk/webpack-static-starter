"use strict";

const webpack = require("webpack");
const LiveReloadPlugin = require("webpack-livereload-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const baseConfig = require("./webpack.config.base.js");

let config = Object.create(baseConfig);

// Modules
// Modules
// config.module.loaders = [].concat(
//   config.module.loaders,
//   []
// );

// Plugins
config.plugins = [].concat(
  config.plugins,
  [
    new LiveReloadPlugin({
      port: 35729,
      appendScriptTag: true
    })
  ]
);

module.exports = config;
