'use strict';

define(['require'], function (require) {
  'use strict';

  var localKey = 'nav-data';
  return {
    getLocal: function getLocal() {
      var local = localStorage.getItem(localKey);
      if (local) {
        return JSON.parse(localStorage.getItem(localKey));
      } else {
        return {};
      }
    },
    setLocal: function setLocal(jsonString) {
      localStorage.setItem(localKey, jsonString);
    },
    clearLocal: function clearLocal() {
      localStorage.clear();
    }
  };
});