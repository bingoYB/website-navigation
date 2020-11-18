(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/text-loader/index.js!./src/template/item.tpl":
/*!**********************************************************!*\
  !*** ./node_modules/text-loader!./src/template/item.tpl ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<div class=\\\"block block-list\\\">\\r\\n  {{#each this}}\\r\\n  <section class=\\\"section\\\" data-title=\\\"{{title}}\\\">\\r\\n    <div class=\\\"title\\\">\\r\\n      {{!-- <div class=\\\"title-icon\\\"><i class=\\\"iconfont {{icon}}\\\"></i></div> --}}\\r\\n      <h2 class=\\\"title-text\\\">{{title}}</h2>\\r\\n    </div>\\r\\n    <div class=\\\"list\\\">\\r\\n      <div class=\\\"card-wrapper\\\">\\r\\n        <div class=\\\"pure-g\\\">\\r\\n          {{#each item}}\\r\\n          <div class=\\\"pure-u-lg-1-4 pure-u-md-1-3 pure-u-sm-23-24 pure-u-1-2\\\">\\r\\n            <div class=\\\"card hint--bottom hint--bounce hint--medium\\\" aria-label=\\\"{{desc}}\\\">\\r\\n              {{#if disabled}}\\r\\n              <div class=\\\"diabled-item-badge\\\">失效</div>\\r\\n              {{/if}}\\r\\n              <a href=\\\"{{url}}\\\" rel=\\\"nofollow\\\" target=\\\"_blank\\\" class=\\\"card-default  {{#if disabled}}web-disabled{{/if}}\\\">\\r\\n                <div>\\r\\n                  <img class=\\\"card-icon\\\" alt=\\\"loading\\\" data-src=\\\"{{icon}}\\\" onerror=\\\"CONF.getWebsiteIcon(this)\\\">\\r\\n                  <div class=\\\"card-main\\\">\\r\\n                    <div class=\\\"card-name\\\">\\r\\n                      {{name}}\\r\\n                    </div>\\r\\n                    <div style=\\\"width:100%;\\\">\\r\\n                      <div class=\\\"card-des\\\">{{desc}}</div>\\r\\n                    </div>\\r\\n                  </div>\\r\\n                </div>\\r\\n              </a>\\r\\n            </div>\\r\\n          </div>\\r\\n          {{/each}}\\r\\n        </div>\\r\\n      </div>\\r\\n    </div>\\r\\n  </section>\\r\\n  {{/each}}\\r\\n</div>\"\n\n//# sourceURL=webpack:///./src/template/item.tpl?./node_modules/text-loader");

/***/ }),

/***/ "./src/page/nav.js":
/*!*************************!*\
  !*** ./src/page/nav.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [\r\n  __webpack_require__,\r\n  __webpack_require__(/*! text-loader!../template/item.tpl */ \"./node_modules/text-loader/index.js!./src/template/item.tpl\"),\r\n  __webpack_require__(/*! ../script/data */ \"./src/script/data.js\"),\r\n  __webpack_require__(/*! ../script/router */ \"./src/script/router.js\"),\r\n  __webpack_require__(/*! ../script/utils */ \"./src/script/utils.js\"),\r\n], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, tpl, data, router,ut) {\r\n  'use strict';\r\n  // 页面加载渲染\r\n  let Render = {\r\n    getNav() {\r\n      let navData = data.navData\r\n      let key = router.getPageParam().class\r\n      //预编译模板\r\n      let template = Handlebars.compile(tpl)\r\n      //匹配json内容\r\n      let html = template(navData[key].sub)\r\n      //输入模板\r\n      $('.my-nav').html(html)\r\n      console.log($('.my-nav')[0].querySelectorAll('.card-icon').length)\r\n      ut.lazyLoad({\r\n        content:window,\r\n        imgs: $('.my-nav')[0].querySelectorAll('.card-icon')\r\n      })\r\n      // title render\r\n      $('#header-title').find('h1').html(navData[key].title)\r\n      $('#header-title').find('.iconfont').removeClass().addClass('iconfont ' + navData[key].icon)\r\n    }\r\n  }\r\n  return function () {\r\n    Render.getNav()\r\n  }\r\n}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\n//# sourceURL=webpack:///./src/page/nav.js?");

/***/ }),

/***/ "./src/script/utils.js":
/*!*****************************!*\
  !*** ./src/script/utils.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [\r\n  __webpack_require__,\r\n], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, factory) {\r\n  'use strict';\r\n  return {\r\n    /**\r\n    * 频率控制 返回函数连续调用时，action 执行频率限定为 次 / delay\r\n    * @param delay  {number}    延迟时间，单位毫秒\r\n    * @param action {function}  请求关联函数，实际应用需要调用的函数\r\n    * @return {function}    返回客户调用函数\r\n    */\r\n    throttle(fn, mustRun = 100) {\r\n      const timer = null;\r\n      let previous = null;\r\n      const context = this;\r\n      return function () {\r\n        const now = new Date();\r\n        const args = arguments;\r\n        if (!previous) {\r\n          previous = now;\r\n        }\r\n        const remaining = now - previous;\r\n        if (mustRun && remaining >= mustRun) {\r\n          fn.apply(context, args);\r\n          previous = now;\r\n        }\r\n      }\r\n    },\r\n    /**\r\n    * 空闲控制 返回函数连续调用时，空闲时间必须大于或等于 idle，action 才会执行\r\n    * @param idle   {number}    空闲时间，单位毫秒\r\n    * @param action {function}  请求关联函数，实际应用需要调用的函数\r\n    * @return {function}    返回客户调用函数\r\n    */\r\n    debounce(action, idle) {\r\n      if (typeof action != 'function') {\r\n        throw new TypeError('Expected a function')\r\n      }\r\n      let timer = null\r\n      return function () {\r\n        let context = this\r\n        let arg = arguments\r\n        if (timer) {\r\n          clearTimeout(timer)\r\n        }\r\n        timer = setTimeout(() => {\r\n          action.apply(context, arg)\r\n        }, idle)\r\n      }\r\n    },\r\n\r\n    lazyLoad(options){\r\n      let { content, imgs = [] } = options\r\n      let index = 0\r\n      checkImgs()\r\n      content.onscroll = this.throttle(checkImgs)\r\n\r\n      function isInSight(el) {\r\n        const bound = el.getBoundingClientRect();\r\n        const clientHeight = window.innerHeight;\r\n        //如果只考虑向下滚动加载\r\n        //const clientWidth=window.innerWeight;\r\n        return bound.top <= clientHeight;\r\n      }\r\n\r\n      function loadImg(el) {\r\n        if (!el.src) {\r\n          const source = el.dataset.src;\r\n          el.src = source;\r\n        }\r\n      }\r\n\r\n      function checkImgs() {\r\n        for (let i = index; i < imgs.length; i++) {\r\n          if (isInSight(imgs[i])) {\r\n            loadImg(imgs[i]);\r\n            index = i;\r\n          }\r\n        }\r\n      }\r\n    }\r\n  }\r\n}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\n//# sourceURL=webpack:///./src/script/utils.js?");

/***/ })

}]);