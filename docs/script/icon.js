'use strict';

define(['require'], function (require) {
  var Gcon = Gcon || {};
  var domainReg = /(.+?:\/\/.+?)\//i;
  var iconTagReg = /<link.+?shortcut.+?>/i;
  var iconUrlReg = /href="(.+?)"/i;

  // 因为存在跨域问题无法使用

  function getIconFromFile(url, callback) {
    url += '/';
    var iconUrl = url.match(domainReg)[1] + '/favicon.ico';
    $.ajax({
      url: iconUrl,
      success: function success(xhr) {
        if (xhr.responseText) {
          callback(iconUrl);
        } else {
          getIconFromHtml(url, callback);
        }
      },
      error: function error(xhr) {
        getIconFromHtml(url, callback);
      }
    });
  }

  function getIconFromHtml(url, callback) {
    $.ajax({
      url: url,
      success: function success(xhr) {
        if (xhr.responseText) {
          var html = xhr.responseText;
          var iconTag = html.match(iconTagReg)[0];
          iconTag = iconTag.replace(/\s/g, '');
          var iUrl = iconTag.match(iconUrlReg)[1];
          callback(iUrl);
        } else {
          callback(null);
        }
        if (xhr.responseText) {
          callback(iconUrl);
        } else {
          getIconFromHtml(url, callback);
        }
      },
      error: function error(xhr) {
        callback(null);
      }
    });
  }
  Gcon.getIcon = function (url, callback) {
    var icon = '';
    getIconFromFile(url, callback);
  };

  return Gcon;
});