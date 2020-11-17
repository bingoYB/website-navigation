(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/text-loader/index.js!./src/template/item.tpl":
/*!**********************************************************!*\
  !*** ./node_modules/text-loader!./src/template/item.tpl ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<div class=\\\"block block-list\\\">\\n  {{#each this}}\\n  <section class=\\\"section\\\" data-title=\\\"{{title}}\\\">\\n    <div class=\\\"title\\\">\\n      {{!-- <div class=\\\"title-icon\\\"><i class=\\\"iconfont {{icon}}\\\"></i></div> --}}\\n      <h2 class=\\\"title-text\\\">{{title}}</h2>\\n    </div>\\n    <div class=\\\"list\\\">\\n      <div class=\\\"card-wrapper\\\">\\n        <div class=\\\"pure-g\\\">\\n          {{#each item}}\\n          <div class=\\\"pure-u-lg-1-4 pure-u-md-1-3 pure-u-sm-23-24 pure-u-1-2\\\">\\n            <div class=\\\"card hint--bottom hint--bounce hint--medium\\\" aria-label=\\\"{{desc}}\\\">\\n              {{#if disabled}}\\n              <div class=\\\"diabled-item-badge\\\">失效</div>\\n              {{/if}}\\n              <a href=\\\"{{url}}\\\" rel=\\\"nofollow\\\" target=\\\"_blank\\\" class=\\\"card-default  {{#if disabled}}web-disabled{{/if}}\\\">\\n                <div>\\n                  <img class=\\\"card-icon\\\" alt=\\\"loading\\\" data-src=\\\"{{icon}}\\\" onerror=\\\"CONF.getWebsiteIcon(this)\\\">\\n                  <div class=\\\"card-main\\\">\\n                    <div class=\\\"card-name\\\">\\n                      {{name}}\\n                    </div>\\n                    <div style=\\\"width:100%;\\\">\\n                      <div class=\\\"card-des\\\">{{desc}}</div>\\n                    </div>\\n                  </div>\\n                </div>\\n              </a>\\n            </div>\\n          </div>\\n          {{/each}}\\n        </div>\\n      </div>\\n    </div>\\n  </section>\\n  {{/each}}\\n</div>\"\n\n//# sourceURL=webpack:///./src/template/item.tpl?./node_modules/text-loader");

/***/ }),

/***/ "./src/page/nav.js":
/*!*************************!*\
  !*** ./src/page/nav.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [\n  __webpack_require__,\n  __webpack_require__(/*! text-loader!../template/item.tpl */ \"./node_modules/text-loader/index.js!./src/template/item.tpl\"),\n  __webpack_require__(/*! ../script/data */ \"./src/script/data.js\"),\n  __webpack_require__(/*! ../script/router */ \"./src/script/router.js\"),\n  __webpack_require__(/*! ../script/utils */ \"./src/script/utils.js\"),\n], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, tpl, data, router,ut) {\n  'use strict';\n  // 页面加载渲染\n  let Render = {\n    getNav() {\n      let navData = data.navData\n      let key = router.getPageParam().class\n      //预编译模板\n      let template = Handlebars.compile(tpl)\n      //匹配json内容\n      let html = template(navData[key].sub)\n      //输入模板\n      $('.my-nav').html(html)\n      console.log($('.my-nav')[0].querySelectorAll('.card-icon').length)\n      ut.lazyLoad({\n        content:window,\n        imgs: $('.my-nav')[0].querySelectorAll('.card-icon')\n      })\n      // title render\n      $('#header-title').find('h1').html(navData[key].title)\n      $('#header-title').find('.iconfont').removeClass().addClass('iconfont ' + navData[key].icon)\n    }\n  }\n  return function () {\n    Render.getNav()\n  }\n}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\n//# sourceURL=webpack:///./src/page/nav.js?");

/***/ }),

/***/ "./src/script/utils.js":
/*!*****************************!*\
  !*** ./src/script/utils.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [\n  __webpack_require__,\n], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, factory) {\n  'use strict';\n  return {\n    /**\n    * 频率控制 返回函数连续调用时，action 执行频率限定为 次 / delay\n    * @param delay  {number}    延迟时间，单位毫秒\n    * @param action {function}  请求关联函数，实际应用需要调用的函数\n    * @return {function}    返回客户调用函数\n    */\n    throttle(fn, mustRun = 100) {\n      const timer = null;\n      let previous = null;\n      const context = this;\n      return function () {\n        const now = new Date();\n        const args = arguments;\n        if (!previous) {\n          previous = now;\n        }\n        const remaining = now - previous;\n        if (mustRun && remaining >= mustRun) {\n          fn.apply(context, args);\n          previous = now;\n        }\n      }\n    },\n    /**\n    * 空闲控制 返回函数连续调用时，空闲时间必须大于或等于 idle，action 才会执行\n    * @param idle   {number}    空闲时间，单位毫秒\n    * @param action {function}  请求关联函数，实际应用需要调用的函数\n    * @return {function}    返回客户调用函数\n    */\n    debounce(action, idle) {\n      if (typeof action != 'function') {\n        throw new TypeError('Expected a function')\n      }\n      let timer = null\n      return function () {\n        let context = this\n        let arg = arguments\n        if (timer) {\n          clearTimeout(timer)\n        }\n        timer = setTimeout(() => {\n          action.apply(context, arg)\n        }, idle)\n      }\n    },\n\n    lazyLoad(options){\n      let { content, imgs = [] } = options\n      let index = 0\n      checkImgs()\n      content.onscroll = this.throttle(checkImgs)\n\n      function isInSight(el) {\n        const bound = el.getBoundingClientRect();\n        const clientHeight = window.innerHeight;\n        //如果只考虑向下滚动加载\n        //const clientWidth=window.innerWeight;\n        return bound.top <= clientHeight;\n      }\n\n      function loadImg(el) {\n        if (!el.src) {\n          const source = el.dataset.src;\n          el.src = source;\n        }\n      }\n\n      function checkImgs() {\n        for (let i = index; i < imgs.length; i++) {\n          if (isInSight(imgs[i])) {\n            loadImg(imgs[i]);\n            index = i;\n          }\n        }\n      }\n    }\n  }\n}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\n//# sourceURL=webpack:///./src/script/utils.js?");

/***/ })

}]);