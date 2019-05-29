define([
  'require',
  'script/router',
  'script/menu'
], function(require, Router,menu) {
  'use strict';
  menu();
  Router.init()
});