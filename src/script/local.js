define([
  'require'
], function (require) {
  'use strict';
  let localKey = 'nav-data'
  return {
    getLocal(){
      return JSON.parse(localStorage.getItem(localKey)) 
    },
    setLocal(jsonString){
      localStorage.setItem(localKey, jsonString);
    },
    combine(data,local){
      
    }
  }
});