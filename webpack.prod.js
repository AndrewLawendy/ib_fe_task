const path = require("path");
const common = require("./webpack.common");
const webpackMerge = require("webpack-merge");

module.exports = webpackMerge.merge(common, {
  mode: "production",
  output: {
    filename: "[name].[contenthash].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
});
