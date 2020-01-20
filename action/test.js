let fs = require('fs')
let path = require('path')
console.log(__dirname)
fs.writeFile(path.resolve(__dirname, './user.json'), '[123]', 'utf8', (err) => {
  if (err) throw err;
  console.log('done');
})