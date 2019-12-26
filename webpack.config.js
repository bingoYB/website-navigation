const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin'); //通过 npm 安装

module.exports = {
    entry: {
        index: './src/script/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin(),
        new HtmlWebpackPlugin({ template: './public/index.html' })
    ]
    // module: {
    //     rules: [
    //       { 
    //         test: /\.handlebars$/, 
    //         use: __dirname + "/../../?helperDirs[]=" + __dirname + "/helpers" }

    //     ]
    //   },

}