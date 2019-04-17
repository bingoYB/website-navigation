define([
  'require',
  'script/router'
], function (require,router) {
  'use strict';
    var isMobile = window.CONF.isMobile
  // 页面交互部分
  var Interactive = {
    menuClick(){
      $('#menu').on('click','.item', function () {
        $(this).addClass('active').siblings().removeClass('active')
        // 标题更改
        let icon = $(this).find('.item-text .iconfont')
        let title = $(this).find('.item-text>span')[1].innerHTML
        $('#header-title').find('h1').html(title)
        $('#header-title').find('.iconfont').removeClass().addClass(icon.attr('class'))

        if (isMobile()) {
          $('.side').toggleClass('active')
        }
      });
    },
    subMenuClick(){
      $('#menu').on('click', '.sub-item', function () {
        $(this).addClass('active').siblings().removeClass('active')
        
        if(isMobile()){
          $('.side').toggleClass('active')
        }
      });
    },
    // 移动版菜单的显隐
    toogleMenu(){
      $('.btn-menu').on('click', function () {
        $('.side').toggleClass('active')
      });

      $('#container').on('click', function () {
        $('.side').removeClass('active')
      });
    }
  }

  var Render = {
    menuList(){
      $.get('data/menu.json').then((menu)=>{
        $.get('template/menu.html').then(tpl=>{
          //预编译模板
          var template = Handlebars.compile(tpl)
           //匹配json内容
          let html = template(menu.menu)
          //输入模板
          $('#menu').html(html)

        })
      })
    }
  }
  
  return function () {
    Interactive.menuClick()
    Interactive.subMenuClick()
    
    if (isMobile){
      Interactive.toogleMenu()
    }
    Render.menuList()
  }
});