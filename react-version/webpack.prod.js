const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

let webpackConfig = merge(common, {
	mode: 'production',
});
console.log(webpackConfig)
module.exports = webpackConfig;