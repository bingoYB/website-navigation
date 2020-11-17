const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin'); //通过 npm 安装
// const webpack = require('webpack'); //访问内置的插件
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = function (env, args) {
    return {
        entry: {
            index: './src/main.jsx'
        },
        mode: 'development',
        output: {
            path: path.resolve(__dirname, 'docs'),
            filename: '[name].js'
        },
        module: {
            rules: [
                {
                    test: /\.m?jsx$/,
                    exclude: /(node_modules|bower_components)/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env']
                        }
                    }
                }
            ]
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
        resolve: {
            extensions: ['.jsx', '.mjs', '.js', '.json']
        }
    }

}