var path = require('path');
var webpack = require('webpack');
var appName = 'monty';
var pathJS = './js/app.js';
var pathSCSS = './js/app.js';
var pathOutput = 'assets';

// JS
var MinifyPlugin = require("babel-minify-webpack-plugin");

module.exports = [{
  entry: {'alabama.min': pathJS},
  output: {
    library: appName,
    libraryTarget: 'var',
    path: path.resolve(__dirname, pathOutput),
    filename: '[name].js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader"
      }
    }]
  },
  resolve: {extensions: ['*', '.js']},
  plugins: [new MinifyPlugin({}, {comments: false})],
  stats: {colors: true, warnings: false}
}];
