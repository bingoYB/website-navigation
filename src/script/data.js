define([
  'require',
  '../data/film.json',
  '../data/life.json',
  '../data/tools.json',
  '../data/study.json',
  '../script/local'
], function (require, film, life, tools, study, local) {
  'use strict';
  let data = [{
    "title": "首页",
    "icon": "icon-shouye",
    "id": "home",
    "hashUrl": "#",
    "sub": []
  }, {
    "title": "影视",
    "icon": "icon-dianying",
    "id": "nav",
    "hashUrl": "#nav?class=1",
    "sub": film
  }, {
    "title": "学习",
    "icon": "icon-xuexizhongxin",
    "id": "nav",
    "hashUrl": "#nav?class=2",
    "sub": study
  }, {
    "title": "生活",
    "icon": "icon-tubiaozhizuomobanyihuifu-",
    "id": "nav",
    "hashUrl": "#nav?class=3",
    "sub": life
  }, {
    "title": "工具",
    "icon": "icon-tool",
    "id": "nav",
    "hashUrl": "#nav?class=4",
    "sub": tools
  }]

  // 大类存储
  let typeList = []
  // 小类存储
  let subTypeList = {}
  // 处理数据 合并本地数据并建立索引
  function dataDeal() {
    let m = new Map()
    let localData = local.getLocal()
    for (const key in data) {
      const el = data[key].sub
      let title = data[key].title
      const localext = localData[title]
      // 存储信息
      if (title!=='首页'){
        typeList.push(title)
        subTypeList[title] = []
      }
      
      for (let i = 0; i < el.length; i++) {
        const item = el[i].item
        if (localext && localext[el[i].title]) {
          item.push(...localext[el[i].title])
        }
        for (let j = 0; j < item.length; j++) {
          const meta = item[j];
          let querystr = ''
          let sks = Object.keys(meta)
          sks.forEach((k) => {
            if (meta.hasOwnProperty(k))
              querystr += " " + meta[k]
          })
          m.set(meta, querystr)
        }
        // 存储小类
        subTypeList[title].push(el[i].title)
      }
    }
    return m
  }

  let index = dataDeal()
  console.log(data)
  return {
    navData: data,
    index,
    subTypeList,
    typeList
  }
});