const checkUrl = require('../action/util')

console.log('start check')

checkUrl({
	url: 'http://open.163.com/special/opencourse/aspacetimeodyssey.html'
}).then((rs) => {
	console.log('is ok')
}).catch((err)=>{
	console.log(err)
})