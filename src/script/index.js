define([
  'require',
  'script/router',
  'script/menu',
  'script/data'
], function(require, Router,menu,data) {
  'use strict';
  menu();
  Router.init()
});