'use strict';

define(['require', 'text!template/item.tpl'], function (require, tpl) {
  'use strict';
  // 页面加载渲染

  var Render = {
    getNav: function getNav() {
      $.getJSON('data/data.json', function (data, textStatus, jqXHR) {
        //预编译模板
        var template = Handlebars.compile(tpl);
        //匹配json内容
        var html = template(data);
        //输入模板
        $('.my-nav').html(html);
      });
    }
  };
  return function () {
    Render.getNav();
  };
});