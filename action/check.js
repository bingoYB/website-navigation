// javascript
// const core = require('@actions/core')
let axios = require('axios')
let fs = require('fs')
let path = require('path')
let fileList = [
  '../src/data/film.json',
  '../src/data/life.json',
  '../src/data/tools.json',
  '../src/data/study.json'
]

checkNet().then(() => {
  start()
})

function start() {
  for (let i = 0; i < fileList.length; i++) {
    const filePath = fileList[i]
    let dataJson = require(filePath)
    let taskList = []
    dataJson.forEach(el => {
      el.item.forEach(web => {
        taskList.push(checkUrl(web))
      })
    })
    // axios返回的对象应该不标准，Promise.all都无法得知失败
    Promise.all(taskList).then(() => {
      console.log('start reset file')
      dealFile(filePath, dataJson)
    })
  }
}

function dealFile(filePath, data) {
  fs.writeFile(path.resolve(__dirname, filePath), JSON.stringify(data), 'utf8', (err) => {
    if (err) throw err;
    console.log('done');
  })
}

function checkUrl(web) {
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
    })
    .catch(function (error) {
      // 有些网站做了反爬虫限制，导致一些网站返回403，实际网站是有效的
      // 所以这里做了一些处理
      if (error.response.status !== 403 && error.response.status !== 401) {
        web.disabled = true
        console.log(web.url + 'is undisabled!!!')
      }
    })
}

function checkNet() {
  console.log('net check')
  return axios.get('https://www.baidu.com', { timeout: 30000 })
    .then(function (response) {
      console.log('net check success')
    })
    .catch(function (error) {
      console.log('net check fail')
    })
}