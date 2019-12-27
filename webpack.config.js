const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin'); //通过 npm 安装
const webpack = require('webpack'); //访问内置的插件
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: {
    index: './src/script/index.js'
  },
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'docs'),
    filename: '[name].js'
  },
  plugins: [
    // new webpack.optimize.UglifyJsPlugin(),
    new HtmlWebpackPlugin({ template: './public/index.html' }),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, './public'),
        to: path.resolve(__dirname, './docs'),
        ignore: ['.html']
      }
    ])
  ],
  // module: {
  //   rules: [
  //     {
  //       test: /\.json$/,
  //       use: 'json-loader'
  //     }
  //   ]
  // }
}