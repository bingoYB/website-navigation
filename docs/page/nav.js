define([
  'require',
], function (require) {
  'use strict';
  // 页面加载渲染
  let Render = {
    getNav() {
      $.getJSON('data/data.json',
        function (data, textStatus, jqXHR) {
          $.get('template/item.html').then(tpl => {
            //预编译模板
            var template = Handlebars.compile(tpl)
            //匹配json内容
            let html = template(data)
            //输入模板
            $('.my-nav').html(html)
          })
        }
      );
    }
  }

  return function () {
    Render.getNav()
  }
});