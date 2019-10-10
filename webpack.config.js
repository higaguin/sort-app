const webpack = require("webpack");
const path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var MiniCssExtractPlugin = require("mini-css-extract-plugin");

const VENDOR_LIB = ["react", "react-dom"];

module.exports = {
  entry: {
    bundle: "./src/index.js",
    vendor: VENDOR_LIB
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].[chuckhash].js"
  },
  module: {
    rules: [
      {
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react"]
          }
        },
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          "css-loader",
          "sass-loader"
        ],
        test: /\.(sa|sc|c)ss$/
      }
      // {
      //     test: /\.(png)$/,
      //     use: ["file-loader"]
      // }
    ]
  },
  optimization: {
    splitChunks: {
      chunks: "all",
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        }
      }
    }
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "style.css"
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      favicon: "./public/favicon.png"
    })
  ]
};
