'use strict';

define(['require', 'text!template/item.tpl', 'script/data', 'script/router'], function (require, tpl, data, router) {
  'use strict';
  // 页面加载渲染

  var Render = {
    getNav: function getNav() {
      var key = router.getPageParam().class;
      //预编译模板
      var template = Handlebars.compile(tpl);
      //匹配json内容
      var html = template(data[key]);
      //输入模板
      $('.my-nav').html(html);
    }
  };
  return function () {
    Render.getNav();
  };
});