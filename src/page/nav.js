define([
  'require',
  'text!template/item.tpl',
  'script/data',
  'script/router'
], function (require, tpl, data, router) {
  'use strict';
  // 页面加载渲染
  let Render = {
    getNav() {
      let key = router.getPageParam().class
      //预编译模板
      let template = Handlebars.compile(tpl)
      //匹配json内容
      let html = template(data[key])
      //输入模板
      $('.my-nav').html(html)
    }
  }
  return function () {
    Render.getNav()
  }
});