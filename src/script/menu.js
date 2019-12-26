define([
  'require',
  './router',
  'text-loader!../template/menu.tpl',
  './data'
], function (require, router, tpl, data) {
  'use strict';
  var isMobile = window.CONF.isMobile
  // 页面交互部分
  var Interactive = {
    menuClick() {
      $('menu').on('click', '.item', function (e) {
        $(this).addClass('active').siblings().removeClass('active')
        // 标题更改
        let icon = $(this).find('.item-text .iconfont')
        let title = $(this).find('.item-text>span')[1].innerHTML
        $('#header-title').find('h1').html(title)
        $('#header-title').find('.iconfont').removeClass().addClass(icon.attr('class'))

        if (isMobile()) {
          $('menu').toggleClass('active')
        }
      });
    },
    subMenuClick() {
      $('#menu').on('click', '.sub-item', function () {
        $(this).addClass('active').siblings().removeClass('active')

        // scrollto
        let text = $(this).find('.sub-item-text').text()
        if ($('[data-title="' + text + '"').length) {
          let scrollTop = $('[data-title="' + text + '"')[0].offsetTop
          // smooth scrollto
          $('html, body').animate({ scrollTop: scrollTop }, '500')
        }

        let top = $(this).position().top
        $(this).siblings().find('.nonius').css('top', top)

        if (isMobile()) {
          $('menu').toggleClass('active')
        }
      });
    },
    // 移动版菜单的显隐
    toogleMenu() {
      $('.btn-menu').on('click', function () {
        $('menu').toggleClass('active')
      });

      $('.side-mask').on('click', function () {
        $('menu').removeClass('active')
      });
    }
  }

  var Render = {
    menuList() {
      // $.get('data/menu.json').then((menu) => {
      //预编译模板
      var template = Handlebars.compile(tpl)
      //匹配json内容
      let html = template(data.navData)
      //输入模板
      $('#menu').html(html)
      // })
    }
  }

  return function () {
    Interactive.menuClick()
    Interactive.subMenuClick()

    if (isMobile) {
      Interactive.toogleMenu()
    }
    Render.menuList()
  }
});