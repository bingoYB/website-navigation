let axios = require('axios')
module.exports = function checkUrl(web) {
	return axios.get(web.url, {
		timeout: 30000
		,// 模拟浏览器请求头
		headers: {
			'Connection': 'Keep-Alive',
			"accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3",
			'accept-encoding': 'gzip, deflate, br',
			'accept-language': 'zh-CN,zh;q=0.9',
			'cache-control': 'no-cache',
			'cookie': '',
			'pragma': 'no-cache',
			'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36'
		},
	})
		.then(function (response) {
			web.disabled = false
			return response
		})
		.catch(function (error) {
			// 有些网站做了反爬虫限制，导致一些网站返回403，实际网站是有效的
			// 所以这里做了一些处理
			if (error.response) {
				if (error.response.status !== 403 && error.response.status !== 401) {
					web.disabled = true
					console.log(web.url + ' is undisabled!!!')
				} else {
					web.disabled = false
					console.log(web.url + ' is not authorized')
				}
			} else {
				web.disabled = true
				console.log('check false',web.url)
				// console.log(error)
			}

		})
}