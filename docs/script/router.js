'use strict';

define(['require'], function (require) {
  'use strict';

  var Router = {
    // 承载页面容器
    container: '#page-content',
    // 默认加载页面
    defaultHashPage: CONF.defaultPage,

    baseUrl: 'page/',

    init: function init() {
      NProgress.configure({ parent: '#page-content' });
      // 页面刷新时检查页面路由
      this.checkURL();
      // 过滤空的路由链接
      $(document).on("click", 'a.router[href="#"]', function (e) {
        e.preventDefault();
      });

      // 实时检测路由变化
      $(window).on('hashchange', function () {
        Router.checkURL();
      });
    },


    /**
     * checkURL 解析路由
     * @method checkURL
     * @desc: 解析浏览器路由，当为空时，加载默认页面，否则加载解析出的页面
     */
    checkURL: function checkURL() {
      var thiz = this;
      var url = location.href;
      var arr = url.split("#");
      var hash = '';
      if (arr.length > 1) {
        hash = arr[1].split('?')[0];
      }
      if (hash !== '') {
        thiz.loadURL(hash);
      } else {
        thiz.loadURL(thiz.defaultHashPage);
      }
    },
    /**
     * loadURL 根据解析路由加载URL页面，调用Ajax.getHTML方法
     *
     * @method loadURL
     * @param {String}
     *            url 页面请求地址
     */
    loadURL: function loadURL(url) {
      var thiz = this;
      var pageurl = this.baseUrl + url + '.html';

      NProgress.start();

      $(thiz.container).html('');
      // $('#loading').show()

      // 调用Ajax加载页面，默认开启缓存，可进行配置
      $.get(pageurl, function (html, state) {
        if (state == 'success') {
          $(thiz.container).html(html);
          // 加载页面对应的JS模块，并初始化
          requirejs([pageurl.split('.')[0]], function (render) {
            render ? render() : 1;
            // $('#loading').hide()
            NProgress.done();
          });
        } else {
          $(thiz.container).html("<div class='error-construction'><h4>很抱歉！无法加载到您要的资源...</h4></div>");
        }
      });
    },

    getPageParam: function getPageParam() {
      var thiz = this;
      var depositData = $(thiz.container).data("data");
      if (depositData) {
        return depositData;
      } else {
        var urls = location.href.split("?");
        var paramUrl = urls.length > 1 && urls[1];
        var obj = {};
        if (paramUrl) {
          var params = paramUrl.split("&");
          if (params) {
            for (var i = 0; i < params.length; i++) {
              var param = params[i];
              var nameAndValue = param.split("=");
              if (nameAndValue.length == 2) {
                obj[nameAndValue[0]] = nameAndValue[1];
              }
            }
          }
        }

        return obj;
      }
    }
  };

  return Router;
});