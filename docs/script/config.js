window.CONF = {
  requireBase: ['/docs/','/website-navigation/'],
  defaultPage:'home',
  // 根据端口获取联调环境状态：本地=8888 else 联调环境
  getEnv: function () {
    return window.location.href.indexOf('localhost') >= 0 ? 0 : 1;
  }
}


require.config(
  {
    // Sea.js 的基础路径
    baseUrl: CONF.requireBase[CONF.getEnv()]
  }
)