const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');

let webpackConfig = merge(common, {
	devtool: 'source-map',
	devServer: {
		// host: "localhost",
		// contentBase: './docs',
		// before(app) { },
		// proxy: {
		//   "/api": "http://localhost:3000"
		// },
		// 一切服务都启用gzip 压缩：
		// compress: true,
		port: 7777,
		// local服务器自动打开浏览器。
		open: true,
		// quiet: true,
	},plugins:[
		new HtmlWebpackPlugin({
			template: './public/index.html',
			reactPath: './react.development.js',
			reactDomPath: '././react-dom.development.js'
		})
	]
});
console.log(webpackConfig)
module.exports = webpackConfig;
// module.exports = smp.wrap(merge(webpackConfig));