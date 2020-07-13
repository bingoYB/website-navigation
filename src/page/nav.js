define([
  'require',
  'text-loader!../template/item.tpl',
  '../script/data',
  '../script/router',
  '../script/utils',
], function (require, tpl, data, router,ut) {
  'use strict';
  // 页面加载渲染
  let Render = {
    getNav() {
      let navData = data.navData
      let key = router.getPageParam().class
      //预编译模板
      let template = Handlebars.compile(tpl)
      //匹配json内容
      let html = template(navData[key].sub)
      //输入模板
      $('.my-nav').html(html)
      console.log($('.my-nav')[0].querySelectorAll('.card-icon').length)
      ut.lazyLoad({
        content:window,
        imgs: $('.my-nav')[0].querySelectorAll('.card-icon')
      })
      // title render
      $('#header-title').find('h1').html(navData[key].title)
      $('#header-title').find('.iconfont').removeClass().addClass('iconfont ' + navData[key].icon)
    }
  }
  return function () {
    Render.getNav()
  }
});