// Karma configuration
// Generated on Wed Feb 03 2021 15:58:15 GMT+0800 (中国标准时间)
const { resolve } = require('path');

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
		frameworks: ['mocha', 'chai'],


    // list of files / patterns to load in the browser
		files: ['src/**/*.js', 'tests/**/*.js'],


    // list of files / patterns to exclude
    exclude: [],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
			"src/**/*.js": ['webpack', 'coverage'],
			"tests/**/*.js": ['webpack']
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
		reporters: ['progress', 'spec','coverage',],

		coverageReporter: {
			dir: 'report/',
			// 将结果输出到'./coverage/'
			reporters: [
				{ type: 'html', subdir: 'coverage/html', },
				{ type: 'lcov', subdir: 'coverage/lcov'},
				{ type: 'text', subdir: 'coverage/text', file: 'text.txt' },
				{ type: 'text-summary', subdir:'coverage/text', file: 'text-summary.txt' }
			]
		},


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: [ 'Chrome' ],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
		concurrency: Infinity,

		webpack: {
			mode: 'development',
			module: {
				rules: [
					{
						// 匹配 JavaScript 文件
						test: /\.js$/,
						// 排除 node_modules 和 bower_components 目录
						exclude: /(node_modules|bower_components)/,
						use: {
							// 使用的 loader
							loader: 'babel-loader',
							// 传递给 babel-loader 的参数
							options: {
								presets: ['@babel/preset-env'],
								plugins: ['istanbul']
							}
						}
					}
				]
			},
			resolve: {
				alias: {
					'@': resolve(__dirname, 'src/'),
				},
				extensions: ['.jsx', '.mjs', '.js', '.json']
			}

		},
  })
}
