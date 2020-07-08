define([
  'require',
  './utils'
], function (require,ut) {

  class LZload {
    constructor(option) {
      let {content,imgs=[]} = option
      this.index = 0
      this.imgs = imgs
      this.checkImgs()
      content.onscroll = ut.throttle(this.checkImgs)
    }

    isInSight(el) {
      const bound = el.getBoundingClientRect();
      const clientHeight = window.innerHeight;
      //如果只考虑向下滚动加载
      //const clientWidth=window.innerWeight;
      return bound.top <= clientHeight;
    }

    loadImg(el) {
      if (!el.src) {
        const source = el.dataset.src;
        el.src = source;
      }
    }

    checkImgs() {
      const imgs = this.imgs;
      let index = this.index
      for (let i = index; i < imgs.length; i++) {
        if (this.isInSight(imgs[i])) {
          this.loadImg(imgs[i]);
          index = i;
        }
      }
    }
  }

  return LZload

});