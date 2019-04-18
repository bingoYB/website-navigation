define([
  'require',
  'script/data'
], function (require, data) {
  'use strict';
  class search {
    constructor(data, option) {
      this.option = option ? option : {}
      this.datainit(data)
    }

    search(v) {
      console.time('搜索时间:')
      let results = []
      // 等同于使用map.entries()
      for (let [key, value] of this.queryArrayMap) {
        if (value.match(v)) {
          results.push(key)
        }
      }
      console.timeEnd('搜索时间:')
      return results
    }

    datainit(data) {
      let m = this.queryArrayMap = new Map()
      let sks = this.option.searchKeys
      for (const key in data) {
        const el = data[key]
        for (let i = 0; i < el.length; i++) {
          const item = el[i].item
          for (let j = 0; j < item.length; j++) {
            const meta = item[j];
            let querystr = ''
            let sks = this.option.searchKeys ? this.option.searchKeys : Object.keys(meta)
            sks.forEach((k) => {
              if (meta.hasOwnProperty(k))
                querystr += " " + meta[k]
            })
            m.set(meta, querystr)
          }
        }
      }
    }
  }

  return new search(data)
});