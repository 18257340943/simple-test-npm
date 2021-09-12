const path = require("path");
const webpack = require("webpack");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const srcDir = path.resolve(__dirname, "./src");

module.exports = {
  mode: "development",
  entry: {
    index: path.resolve(__dirname, "./src/index.js"),
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].js",
    library: "@zxhj-rzj/simple-test-npm",
    libraryTarget: "umd",
    // libraryExport: "default",
  },
  devServer: {
    port: 9001,
    host: "127.0.0.1",
    hot: true,
    open: true,
    historyApiFallback: true,
    compress: true,
    watchOptions: {
      aggregateTimeout: 500,
    },
  },
  module: {
    rules: [
      {
        oneOf: [
          {
            test: /\.(js|jsx)$/,
            include: [srcDir],
            exclude: /(node_modules|bower_components)/,
            // use: ['happypack/loader?id=happybabel'],
            use: ["babel-loader"],
          },
        ],
      },
    ],
  },
  plugins: [
    // new HtmlWebpackPlugin(),
    new CleanWebpackPlugin(),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    // new BundleAnalyzerPlugin(),
  ].filter(Boolean),
  externals: ["react", "react-dom", "antd"],
  resolve: {
    alias: {},
    extensions: [".js", ".jsx"],
  },
  optimization: {
    // runtimeChunk: {
    //   name: (entrypoint) => `runtime-${entrypoint.name}`,
    // },
    // splitChunks: {
    //   chunks: "all", // 默认只作用于异步模块，为`all`时对所有模块生效,`initial`对同步模块有效
    // },
  },
};
