const checkUrl = require('../action/util')

console.log('start check')

checkUrl({
	url: 'https://www.halihali.vip/'
}).then((rs) => {
	console.log('is ok')
	console.log(rs)
}).catch((err)=>{
	console.log(err)
})