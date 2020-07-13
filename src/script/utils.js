define([
  'require',
], function (require, factory) {
  'use strict';
  return {
    /**
    * 频率控制 返回函数连续调用时，action 执行频率限定为 次 / delay
    * @param delay  {number}    延迟时间，单位毫秒
    * @param action {function}  请求关联函数，实际应用需要调用的函数
    * @return {function}    返回客户调用函数
    */
    throttle(fn, mustRun = 100) {
      const timer = null;
      let previous = null;
      const context = this;
      return function () {
        const now = new Date();
        const args = arguments;
        if (!previous) {
          previous = now;
        }
        const remaining = now - previous;
        if (mustRun && remaining >= mustRun) {
          fn.apply(context, args);
          previous = now;
        }
      }
    },
    /**
    * 空闲控制 返回函数连续调用时，空闲时间必须大于或等于 idle，action 才会执行
    * @param idle   {number}    空闲时间，单位毫秒
    * @param action {function}  请求关联函数，实际应用需要调用的函数
    * @return {function}    返回客户调用函数
    */
    debounce(action, idle) {
      if (typeof action != 'function') {
        throw new TypeError('Expected a function')
      }
      let timer = null
      return function () {
        let context = this
        let arg = arguments
        if (timer) {
          clearTimeout(timer)
        }
        timer = setTimeout(() => {
          action.apply(context, arg)
        }, idle)
      }
    },

    lazyLoad(options){
      let { content, imgs = [] } = options
      let index = 0
      checkImgs()
      content.onscroll = this.throttle(checkImgs)

      function isInSight(el) {
        const bound = el.getBoundingClientRect();
        const clientHeight = window.innerHeight;
        //如果只考虑向下滚动加载
        //const clientWidth=window.innerWeight;
        return bound.top <= clientHeight;
      }

      function loadImg(el) {
        if (!el.src) {
          const source = el.dataset.src;
          el.src = source;
        }
      }

      function checkImgs() {
        for (let i = index; i < imgs.length; i++) {
          if (isInSight(imgs[i])) {
            loadImg(imgs[i]);
            index = i;
          }
        }
      }
    }
  }
});