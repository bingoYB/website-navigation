const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');

let webpackConfig = merge(common, {
	mode: 'production',
	plugins:[
		new HtmlWebpackPlugin({
			template: './public/index.html',
			reactPath: './react.production.min.js',
			reactDomPath: '././react-dom.production.min.js'
		}),
	]
});
module.exports = webpackConfig;