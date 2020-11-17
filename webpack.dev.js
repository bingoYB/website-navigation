const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const common = require('./webpack.config.js');

module.exports = merge(common, {
	mode: 'development',
	devtool: 'inline-source-map',
	devServer: {
		compress: true,
		port: 8011,
		// local服务器自动打开浏览器。
		open: true,
		// 除了初始启动信息之外的任何内容都不会被打印到控制台。这也意味着来自 webpack 的错误或警告在控制台不可见。
		// quiet: true,
		// 浏览器中访问的相对路径
		// publicPath: config.local.assetsPublicPath,
	}
});