define([
  'require',
  'script/data'
], function (require, data) {
  'use strict';
  class search {
    constructor(data) {
      this.datainit(data)
    }

    search(v) {
      let results = []
      // 等同于使用map.entries()
      for (let [key, value] of this.queryArrayMap) {
        if(value.match(v)){
          results.push(key)
        }
      }

      return results
    }

    datainit(data) {
      let m = this.queryArrayMap = new Map()
      for (const key in data) {
        const el = data[key]
        for (let i = 0; i < el.length; i++) {
          const item = el[i].item
          for (let j = 0; j < item.length; j++) {
            const meta = item[j];
            m.set(meta, JSON.stringify(meta)) 
          }
        }
      }
    }
  }

  return new search(data)
});