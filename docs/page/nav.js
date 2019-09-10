'use strict';

define(['require', 'text!template/item.tpl', 'script/data', 'script/router', 'script/lazyLoad'], function (require, tpl, data, router, lazyLoad) {
  'use strict';
  // 页面加载渲染

  var Render = {
    getNav: function getNav() {
      var navData = data.navData;
      var key = router.getPageParam().class;
      //预编译模板
      var template = Handlebars.compile(tpl);
      //匹配json内容
      var html = template(navData[key].sub);
      //输入模板
      $('.my-nav').html(html);

      new lazyLoad({
        content: window,
        imgs: $('.my-nav')[0].querySelectorAll('img')
      });
      // title render
      $('#header-title').find('h1').html(navData[key].title);
      $('#header-title').find('.iconfont').removeClass().addClass('iconfont ' + navData[key].icon);
    }
  };
  return function () {
    Render.getNav();
  };
});