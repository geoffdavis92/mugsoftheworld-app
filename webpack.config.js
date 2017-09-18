"use strict";

const webpack = require("webpack");
// const DashboardPlugin = require('webpack-dashboard/plugin');

const path = require("path");

module.exports = {
  entry: "./src/app.js",
  devtool: "inline-source-map",
  output: {
    path: path.join(`${__dirname}/assets/js/`),
    filename: "app.js",
  },
  resolve: {
    enforceExtension: false,
    extensions: [".js", ".jsx", ".json"],
    alias: {
      components: path.resolve(__dirname, "src/components"),
      utilities: path.resolve(__dirname, "src/utilities"),
      views: path.resolve(__dirname, "src/views"),
    },
  },
  module: {
    rules: [
      {
        test: /\.js(x)*$/,
        exclude: /node_modules/,
        loader:
          "babel-loader?presets[]=es2017&presets[]=react&plugins[]=transform-decorators",
      },
    ],
  },
  plugins: [
    process.env.NODE_ENV && process.env.NODE_ENV === "production"
      ? new webpack.DefinePlugin({
          "process.env": {
            NODE_ENV: JSON.stringify("production"),
          },
        })
      : () => null,
    process.env.NODE_ENV && process.env.NODE_ENV === "production"
      ? new webpack.optimize.UglifyJsPlugin()
      : () => null,
  ],
  devServer: {
    contentBase: path.join(__dirname),
    compress: true,
    // hot: true,
    port: 5555,
  },
};
