'use strict';

const path = require("path");
const webpack = require("webpack");
const bourbon = require('node-bourbon').includePaths;
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  devtool: 'eval-source-map',
  entry: [
    path.join(__dirname, 'src/assets/js/index.js')
  ],
  output: {
    path: path.join(__dirname, "/dist/"),
    publicPath: '/'
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
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract("style-loader", `css-loader?minimize!postcss-loader!sass-loader?outputStyle=expanded&includePaths[]=${bourbon}`)
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new CopyPlugin([{
      from: "src/assets/img",
      to: "../dist/img"
    }]),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src/views/index.html'),
      inject: 'body',
      filename: 'index.html'
    })
  ],
  postcss: [
    require('autoprefixer')({
      browsers: '> 1%'
    })
  ]
};
