const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',

  entry: './example/src/index.js',

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../dist'),
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
            loader: "style-loader"
          },

          {
            loader: "css-loader",
            options: {
              sourceMap: true,
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
              sourceMap: true,
            }
          }
        ]
      }
    ]
  },

  devServer: {
    contentBase: './dist'
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
  ]
}