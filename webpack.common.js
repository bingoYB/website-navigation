const path = require('path')
// const webpack = require('webpack'); //访问内置的插件
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
	entry: {
		index: './src/main.jsx'
	},
	mode: 'development',
	output: {
		chunkFilename: "js/[name].js",
		path: path.resolve(__dirname, './docs'),
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
		new CopyWebpackPlugin(
			{
				patterns: [
					{
						from: path.resolve(__dirname, './public'),
						to: path.resolve(__dirname, './docs'),
						globOptions:{
							ignore: ['**.html']
						}
					}
				]
			}
		)
	],
	resolve: {
		extensions: ['.jsx', '.mjs', '.js', '.json']
	}
}

