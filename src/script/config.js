window.CONF = {
  requireBase: ['/src/', '/website-navigation/'],
  defaultPage: 'home',
  // 根据端口获取联调环境状态：本地=8888 else 联调环境
  getEnv: function () {
    let m = ['localhost', '127.0.0.1']
    return m.indexOf(window.location.hostname) >= 0 ? 0 : 1;
  },
  isMobile: function () {
    return document.body.clientWidth <= 613
  },
  getWebsiteIcon(img) {
    let url = $(img).parents('a')[0].href
    let getIconApiUrl = 'https://ico.mikelin.cn/'
    if (img.src.indexOf(getIconApiUrl) >= 0) {
      img.src = 'img/404-1.png'
    } else {
      img.src = getIconApiUrl + url
    }
  },
  // 获取浏览器版本
  browseVersion() {
    // 浏览器检查结果
    var ua = navigator.userAgent;
    var ret = {},
      webkit = ua.match(/WebKit\/([\d.]+)/),
      chrome = ua.match(/Chrome\/([\d.]+)/) ||
        ua.match(/CriOS\/([\d.]+)/),

      ie = ua.match(/MSIE\s([\d\.]+)/) ||
        ua.match(/(?:trident)(?:.*rv:([\w.]+))?/i),
      firefox = ua.match(/Firefox\/([\d.]+)/),
      safari = ua.match(/Safari\/([\d.]+)/),
      opera = ua.match(/OPR\/([\d.]+)/);

    webkit && (ret.webkit = parseFloat(webkit[1]));
    chrome && (ret.chrome = parseFloat(chrome[1]));
    ie && (ret.ie = parseFloat(ie[1]));
    firefox && (ret.firefox = parseFloat(firefox[1]));
    safari && (ret.safari = parseFloat(safari[1]));
    opera && (ret.opera = parseFloat(opera[1]));
    return ret;
  }
}


require.config(
  {
    // Sea.js 的基础路径
    baseUrl: window.CONF.requireBase[CONF.getEnv()],
    // 文本插件
    paths: {
      text: "lib/text",
    },

  }
)