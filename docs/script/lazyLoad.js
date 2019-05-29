'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

define(['require'], function (require) {
  var LZload = function () {
    function LZload(option) {
      _classCallCheck(this, LZload);

      var content = option.content,
          _option$imgs = option.imgs,
          imgs = _option$imgs === undefined ? [] : _option$imgs;

      this.index = 0;
      this.imgs = imgs;
      this.checkImgs();
      content.onscroll = this.throttle(this.checkImgs);
    }

    _createClass(LZload, [{
      key: 'isInSight',
      value: function isInSight(el) {
        var bound = el.getBoundingClientRect();
        var clientHeight = window.innerHeight;
        //如果只考虑向下滚动加载
        //const clientWidth=window.innerWeight;
        return bound.top <= clientHeight;
      }
    }, {
      key: 'loadImg',
      value: function loadImg(el) {
        if (!el.src) {
          var source = el.dataset.src;
          el.src = source;
        }
      }
    }, {
      key: 'checkImgs',
      value: function checkImgs() {
        var imgs = this.imgs;
        var index = this.index;
        for (var i = index; i < imgs.length; i++) {
          if (this.isInSight(imgs[i])) {
            this.loadImg(imgs[i]);
            index = i;
          }
        }
      }

      // 函数防抖

    }, {
      key: 'throttle',
      value: function throttle(fn) {
        var mustRun = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;

        var timer = null;
        var previous = null;
        var context = this;
        return function () {
          var now = new Date();
          var args = arguments;
          if (!previous) {
            previous = now;
          }
          var remaining = now - previous;
          if (mustRun && remaining >= mustRun) {
            fn.apply(context, args);
            previous = now;
          }
        };
      }
    }]);

    return LZload;
  }();

  return LZload;
});