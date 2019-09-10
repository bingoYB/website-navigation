'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

define(['require', 'data/film', 'data/life', 'data/tools', 'data/study', 'script/local'], function (require, film, life, tools, study, local) {
  'use strict';

  var data = [{
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
  }];

  // 大类存储
  var typeList = [];
  // 小类存储
  var subTypeList = {};
  // 处理数据 合并本地数据并建立索引
  function dataDeal() {
    var m = new Map();
    var localData = local.getLocal();
    for (var key in data) {
      var el = data[key].sub;
      var title = data[key].title;
      var localext = localData[title];
      // 存储信息
      if (title !== '首页') {
        typeList.push(title);
        subTypeList[title] = [];
      }

      for (var i = 0; i < el.length; i++) {
        var item = el[i].item;
        if (localext && localext[el[i].title]) {
          item.push.apply(item, _toConsumableArray(localext[el[i].title]));
        }

        var _loop = function _loop(j) {
          var meta = item[j];
          var querystr = '';
          var sks = Object.keys(meta);
          sks.forEach(function (k) {
            if (meta.hasOwnProperty(k)) querystr += " " + meta[k];
          });
          m.set(meta, querystr);
        };

        for (var j = 0; j < item.length; j++) {
          _loop(j);
        }
        // 存储小类
        subTypeList[title].push(el[i].title);
      }
    }
    return m;
  }

  var index = dataDeal();

  return {
    navData: data,
    index: index,
    subTypeList: subTypeList,
    typeList: typeList
  };
});