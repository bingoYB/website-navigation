'use strict';

define(['require', 'script/router', 'text!template/menu.tpl', 'script/data'], function (require, router, tpl, data) {
  'use strict';

  var isMobile = window.CONF.isMobile;
  // 页面交互部分
  var Interactive = {
    menuClick: function menuClick() {
      $('menu').on('click', '.item', function (e) {
        $(this).addClass('active').siblings().removeClass('active');
        // 标题更改
        var icon = $(this).find('.item-text .iconfont');
        var title = $(this).find('.item-text>span')[1].innerHTML;
        $('#header-title').find('h1').html(title);
        $('#header-title').find('.iconfont').removeClass().addClass(icon.attr('class'));

        if (isMobile()) {
          $('menu').toggleClass('active');
        }
      });
    },
    subMenuClick: function subMenuClick() {
      $('#menu').on('click', '.sub-item', function () {
        $(this).addClass('active').siblings().removeClass('active');

        // scrollto
        var text = $(this).find('.sub-item-text').text();
        if ($('[data-title="' + text + '"').length) {
          var scrollTop = $('[data-title="' + text + '"')[0].offsetTop;
          // smooth scrollto
          $('html, body').animate({ scrollTop: scrollTop }, '500');
        }

        var top = $(this).position().top;
        $(this).siblings().find('.nonius').css('top', top);

        if (isMobile()) {
          $('menu').toggleClass('active');
        }
      });
    },

    // 移动版菜单的显隐
    toogleMenu: function toogleMenu() {
      $('.btn-menu').on('click', function () {
        $('menu').toggleClass('active');
      });

      $('.side-mask').on('click', function () {
        $('menu').removeClass('active');
      });
    }
  };

  var Render = {
    menuList: function menuList() {
      // $.get('data/menu.json').then((menu) => {
      //预编译模板
      var template = Handlebars.compile(tpl);
      //匹配json内容
      var html = template(data);
      //输入模板
      $('#menu').html(html);
      // })
    }
  };

  return function () {
    Interactive.menuClick();
    Interactive.subMenuClick();

    if (isMobile) {
      Interactive.toogleMenu();
    }
    Render.menuList();
  };
});