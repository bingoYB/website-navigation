define([
  'require',
  'script/router',
  'script/menu'
], function (require, Router, menu) {
  'use strict';

  let bro = CONF.browseVersion()
  if (bro.ie && bro.ie < 11) {
    alert('请使用其他浏览器打开或者更高版本的IE浏览器打开。建议使用Chrome浏览器')
  }

  menu();
  Router.init()
  ToolTip.init({
    delay: 200,
    fadeDuration: 250,
    fontSize: '12PX',
    // theme: 'light',
    // textColor: '#757575',
    // shadowColor: '#000',
    // fontFamily: "'Roboto-Medium', 'Roboto-Regular', Arial"
  });
});