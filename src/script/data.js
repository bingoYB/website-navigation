define([
  'require',
  'data/film',
  'data/life',
  'data/tools',
  'data/study',
], function (require, film, life, tools, study) {
  'use strict';
  let data = [{
    "title": "首页",
    "icon": "icon-shouye-",
    "id": "home",
    "hashUrl": "#",
    "sub": []
  }, {
    "title": "影视",
    "icon": "icon-yingshi",
    "id": "nav",
    "hashUrl": "#nav?class=1",
    "sub": film
  }, {
    "title": "学习",
    "icon": "icon-xuexi1",
    "id": "nav",
    "hashUrl": "#nav?class=2",
    "sub": study
  }, {
    "title": "生活",
    "icon": "icon-yingshi",
    "id": "nav",
    "hashUrl": "#nav?class=3",
    "sub": life
  }, {
    "title": "工具",
    "icon": "icon-Tools",
    "id": "nav",
    "hashUrl": "#nav?class=4", 
    "sub": tools
  }]
  return data
});