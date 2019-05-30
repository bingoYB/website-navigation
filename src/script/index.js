define([
  'require',
  'script/router',
  'script/menu'
], function (require, Router, menu) {
  'use strict';
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