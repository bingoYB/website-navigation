// javascript
// const core = require('@actions/core')
let axios = require('axios')
let fs = require('fs')
let path = require('path')
let fileList = [
  // '../src/data/film.json',
  '../src/data/life.json',
  // '../src/data/tools.json',
  // '../src/data/study.json'
]

checkNet().then(()=>{
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
    Promise.all(taskList).then(()=>{
      console.log('start reset file')
      dealFile(filePath, dataJson)
    })
  }
}

function dealFile(filePath,data) {
  fs.writeFile(path.resolve(__dirname,filePath), JSON.stringify(data), 'utf8', (err) => {
    if (err) throw err;
    console.log('done');
  })
}

function checkUrl(web) {
  return axios.get(web.url, { timeout: 30000 })
    .then(function (response) {
      web.disabled = false
    })
    .catch(function (error) {
      web.disabled = true
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