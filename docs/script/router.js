define([
  'require',
  'script/http'
], function (require, http) {
  'use strict';
  var Router = {
    // 承载页面容器
    container: '#container',
    // 默认加载页面
    defaultHashPage: CONF.defaultPage,


    
    init(addUrl) {

      // 页面刷新时检查页面路由
      this.checkURL();
      // 额外路径配置
      if (addUrl) {
        this.addUrl = addUrl;
      }
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
    checkURL: function () {
      var thiz = this;
      var url = location.href;

      var arr = url.split("#");
      var hash = '';
      if (arr.length > 1) {
        hash = arr[1];
      }
      if (hash !== '') {
        thiz.loadURL(hash);
      } else {
        if (url.indexOf("admin2") != -1 || url.indexOf("admin3") != -1) {
          thiz.loadURL(thiz.defaultHashPage[1]);
        } else {
          thiz.loadURL(thiz.defaultHashPage[0]);
        }
      }
    },
    /**
     * loadURL 根据解析路由加载URL页面，调用Ajax.getHTML方法
     *
     * @method loadURL
     * @param {String}
     *            url 页面请求地址
     */
    loadURL: function (url) {
      var thiz = this;
      // 调用Ajax加载页面，默认开启缓存，可进行配置
      http.getHtml(url, function (html, state) {
        // if (state) {
        //   // 加载页面对应的JS模块，并初始化
        //   seajs.use(thiz.addUrl + url.split('.')[0], function (Page) {
        //     Page && Page["init"] && Page.init();
        //   });

        // } else {
        //   $content.html("<div class='error-construction'><h4>很抱歉！无法加载到您要的资源...</h4></div>");
        // }
      }, thiz.cache);
    },
    /**
     * setHeaderTitle 设置当前页标题
     *
     * @desc 获取a标签里的text设置当前页面标题，data-title='自定义标题'，可进行自定义
     */
    changeURL(url, data) {
      var thiz = this;
      var urlArray = location.href.split("#");
      var base = '';
      if (urlArray.length > 1) {
        base = urlArray[0];
      }
      location.href = base + '#' + url;
      $(thiz.container).data("data", data);
    },
    getPageData() {
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

  }

  return Router
});