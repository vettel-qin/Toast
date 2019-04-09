const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlguin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const cleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  mode: 'production',

  entry: './example/src/index.js',

  output: {
    filename: "[name].[chunkhash:8].js",
    path: path.resolve(__dirname, '../dist'),
  },

  resolve: {
    modules: ["node_modules"],
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
    new htmlWebpackPlugin({
      template: "example/index.html",
      // 使用的是该插件内部集成的HTMLMinifier
      minify: {
        // 是对html文件进行压缩
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true // 去掉属性的双引号
      },
      hash: true, // 为了开发中js有缓存效果，所以加入hash,这样可以有效避免缓存js
      favicon: "example/favicon.ico"
    }),
    new cleanWebpackPlugin(),
    new MiniCssExtractPlguin({
      filename: "[name].[contenthash:8].css",
      chunkFilename: "[name].[contenthash:8].css"
    }),
  ],

  optimization: {
    runtimeChunk: true, // 抽离webpack的runtime代码
    // 指定需要进行分块的代码，和分块后文件名
    splitChunks: {
      chunks: "all", // 异步、非异步均纳入抽离范围
      minSize: 0, // 抽离包大小下限不做限制，30k以下的也抽离
      maxSize: 80000, // 抽离包大小上限，抽离后大小若超过上限，且包含多个可再拆分的模块时，会再次拆分，保证单个文件不会过大
      cacheGroups: {
        default: false,
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendor",
          chunks: "all"
        }
      }
    },

    minimizer: [
      new UglifyJsPlugin({
        // 使用文件缓存，当js文件没有变化时候就利用缓存
        cache: true,
        // 采用多线程来加速压缩
        parallel: true,
        sourceMap: true
      }),

      new OptimizeCSSAssetsPlugin()
    ]
  },
};