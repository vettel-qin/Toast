const path = require('path');
const nodeExternals = require('webpack-node-externals');
const MiniCssExtractPlguin = require('mini-css-extract-plugin');
const cleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  mode: 'production',

  entry: './src/index.tsx',

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../lib'),
    libraryTarget: 'umd',
  },

  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },

  module: {
    rules: [
      {
        test: /\.(js(x?)|ts(x?))$/,
        use: [
          // tsc编译后，再用babel处理
          {
            loader: "babel-loader"
          },
          {
            loader: "ts-loader",
            options: {
              // 加快编译速度
              transpileOnly: true,
              // 指定特定的ts编译配置，为了区分脚本的ts配置
              configFile: path.resolve(__dirname, "../tsconfig.json")
            }
          }
        ],
        exclude: /node_modules/
      },

      {
        test: /\.(css|sass|scss)$/,
        rules: [
          {
            loader: MiniCssExtractPlguin.loader
          },

          {
            loader: "css-loader",
            options: {
              sourceMap: false,
              modules: true
            }
          },

          {
            loader: "postcss-loader",
            options: {
              plugins: [
                require("autoprefixer")({})
              ]
            }
          },

          {
            test: /\.(scss|sass)$/,
            loader: "sass-loader",
            options: {
              data: '@import "style/variables.scss";',
              sourceMap: false,
            }
          }
        ]
      }
    ]
  },

  plugins: [
    new cleanWebpackPlugin(),
    new MiniCssExtractPlguin({
      filename: "[name].[contenthash:8].css",
      chunkFilename: "[name].[contenthash:8].css"
    }),
  ],

  externals: [nodeExternals()]
};