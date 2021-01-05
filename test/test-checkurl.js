const checkUrl = require('../action/util')

console.log('start check')

checkUrl({
	url: 'http://www.wuhaozhan.net'
}).then((rs) => {
	console.log('is ok')
	console.log(rs)
}).catch((err)=>{
	console.log(err)
})