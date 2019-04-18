'use strict';

define(['require', 'text!template/item.tpl'], function (require, tpl) {
  'use strict';
  // 页面交互事件

  var Interactive = {
    searchInput: function searchInput() {},
    searchEnter: function searchEnter() {},
    changeSearch: function changeSearch() {
      $('.sChoiceBtn').on('click', function (e) {
        $('.scBigBox').css({
          display: 'block',
          height: '160px'
        });
      });

      $('.scBigBox').on('click', '.scSmallBox', function (e) {
        var imgUrl = $(this).find('img')[0].src;
        $('.sChoiceBtn').css('background', 'url(' + imgUrl + ')');
        $('.scBigBox').hide();
      });
    }
  };

  // 页面加载渲染
  var Render = {
    getOften: function getOften() {
      $.getJSON('data/often.json', function (data, textStatus, jqXHR) {
        //预编译模板
        var template = Handlebars.compile(tpl);
        //匹配json内容
        var html = template(data);
        //输入模板
        $('.often').html(html);
      });
    },
    getSearchRst: function getSearchRst() {}
  };

  return function () {
    Render.getOften();
    Interactive.searchEnter();
    Interactive.searchInput();
    Interactive.changeSearch();
  };
});