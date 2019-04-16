define([
  'require',
], function (require) {
  'use strict';
  // 页面交互事件
  let Interactive = {
    searchInput() {

    },
    searchEnter() {

    },
    changeSearch(){
      $('.sChoiceBtn').on('click', function (e) {
        $('.scBigBox').css({
          display: 'block',
          height:'160px'
        });
      });
      
      $('.scBigBox').on('click','.scSmallBox', function (e) {
        let imgUrl = $(this).find('img')[0].src
        $('.sChoiceBtn').css('background', 'url('+imgUrl+')')
        $('.scBigBox').hide()
      });
    }
  }

  // 页面加载渲染
  let Render = {
    getOften() {
      $.getJSON('data/often.json',
        function (data, textStatus, jqXHR) {
          $.get('template/item.html').then(tpl=>{
            //预编译模板
            var template = Handlebars.compile(tpl)
            //匹配json内容
            let html = template(data)
            //输入模板
            $('.often').html(html)
          })
        }
      );
    },
    getSearchRst() {

    }
  }

  return function () {
    Render.getOften()
    Interactive.searchEnter()
    Interactive.searchInput()
    Interactive.changeSearch()
  }
});