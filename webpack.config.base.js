'use strict';

const path = require("path");
const webpack = require("webpack");
const bourbon = require('node-bourbon').includePaths;
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: [
    path.join(__dirname, 'src/assets/js/index.js')
  ],
  output: {
    path: path.join(__dirname, "dist/"),
    filename: "main.js"
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: "babel-loader",
      exclude: /node_modules/,
      query: {
        cacheDirectory: true,
        presets: ["es2015"]
      }
    }, {
      test: /\.html$/,
      loader: "raw-loader"
    }, {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract("style-loader", `css-loader?minimize!postcss-loader!sass-loader?outputStyle=expanded&includePaths[]=${bourbon}`)
    }]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    }),
    new HtmlWebpackPlugin({
      template: 'src/html/index.html',
      inject: 'body'
    }),
    new CopyPlugin([{
        from: "src/html",
        to: "../"
      }, {
        from: "src/assets/img",
        to: "../img"
      }
      // Any other files you'd like to copy from src to dist can be specified
      // here. :)
    ])
  ],
  postcss: [
    require('autoprefixer')({
      browsers: '> 1%'
    })
  ]
};
