var path = require('path');
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
 

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
    publicPath: "build/"
  },
  plugins: [
    new HtmlWebpackPlugin({ template: "./index.html" })
    // new HtmlWebpackPlugin()
  ]
};