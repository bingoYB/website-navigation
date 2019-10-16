define([
  'require'
], function (require) {
  'use strict';
  let localKey = 'nav-data'
  return {
    getLocal(){
      let local = localStorage.getItem(localKey)
      let jsonLocal = JSON.parse(localStorage.getItem(localKey)) 
      this.data = jsonLocal
      if (local){
        return jsonLocal
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