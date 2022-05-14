const path = require("path");
const common = require("./webpack.common");
const webpackMerge = require("webpack-merge");

module.exports = webpackMerge.merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    static: "./dist",
    hot: true,
    historyApiFallback: true,
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
});
