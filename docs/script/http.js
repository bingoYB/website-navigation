define([
  'require',
], function(require) {
  'use strict';
  return {
    getHtml(url,callback){
      $.get(url, (data, status)=>{
        callback(data,status)
      })
    }
  }
});