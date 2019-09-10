define([
  'require'
], function (require) {
  'use strict';
  let localKey = 'nav-data'
  return {
    getLocal(){
      let local = localStorage.getItem(localKey)
      if (local){
        return JSON.parse(localStorage.getItem(localKey)) 
      }else{
        return {}
      }
    },
    setLocal(jsonString){
      localStorage.setItem(localKey, jsonString);
    },
    clearLocal(){
      localStorage.clear()
    }
  }
});