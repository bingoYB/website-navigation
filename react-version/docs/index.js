/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/main.jsx":
/*!**********************!*\
  !*** ./src/main.jsx ***!
  \**********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wget_Layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wget/Layout */ \"./src/wget/Layout/index.jsx\");\n// import React from 'react'\n// import ReactDOM from 'react-dom'\n\nReactDOM.render( /*#__PURE__*/React.createElement(_wget_Layout__WEBPACK_IMPORTED_MODULE_0__.default, null), document.getElementById('app'));\n\n//# sourceURL=webpack://react-version/./src/main.jsx?");

/***/ }),

/***/ "./src/wget/Layout/Container.jsx":
/*!***************************************!*\
  !*** ./src/wget/Layout/Container.jsx ***!
  \***************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ Container\n/* harmony export */ });\n/* harmony import */ var _NavHeader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NavHeader */ \"./src/wget/Layout/NavHeader.jsx\");\n\nfunction Container(props) {\n  return /*#__PURE__*/React.createElement(\"div\", {\n    id: \"container\"\n  }, /*#__PURE__*/React.createElement(\"main\", null, /*#__PURE__*/React.createElement(_NavHeader__WEBPACK_IMPORTED_MODULE_0__.default, null), /*#__PURE__*/React.createElement(\"div\", {\n    id: \"page-content\",\n    className: \"content\"\n  }, props.children)));\n}\n\n//# sourceURL=webpack://react-version/./src/wget/Layout/Container.jsx?");

/***/ }),

/***/ "./src/wget/Layout/NavHeader.jsx":
/*!***************************************!*\
  !*** ./src/wget/Layout/NavHeader.jsx ***!
  \***************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ NavHeader\n/* harmony export */ });\nfunction NavHeader() {\n  return /*#__PURE__*/React.createElement(\"div\", {\n    id: \"header\"\n  }, /*#__PURE__*/React.createElement(\"div\", {\n    className: \"header\"\n  }, /*#__PURE__*/React.createElement(\"div\", {\n    className: \"row\"\n  }, /*#__PURE__*/React.createElement(\"div\", {\n    className: \"header-title\",\n    id: \"header-title\"\n  }, /*#__PURE__*/React.createElement(\"div\", {\n    className: \"header-title-icon\"\n  }, /*#__PURE__*/React.createElement(\"i\", {\n    className: \"iconfont icon-design\"\n  })), /*#__PURE__*/React.createElement(\"h1\", {\n    className: \"header-title-text zh\"\n  }, \"\\u5BFC\\u822A\")), /*#__PURE__*/React.createElement(\"div\", {\n    className: \"btn-git\"\n  }, /*#__PURE__*/React.createElement(\"a\", {\n    className: \"button gray has-icon\",\n    href: \"https://github.com/bingoYB/website-navigation\",\n    target: \"_blank\"\n  }, /*#__PURE__*/React.createElement(\"svg\", {\n    \"aria-labelledby\": \"simpleicons-github-dark-icon\",\n    lang: \"\",\n    role: \"img\",\n    viewBox: \"0 0 24 24\",\n    xmlns: \"http://www.w3.org/2000/svg\"\n  }, /*#__PURE__*/React.createElement(\"title\", {\n    id: \"simpleicons-github-icon\",\n    lang: \"en\"\n  }, \"GitHub Dark icon\"), /*#__PURE__*/React.createElement(\"path\", {\n    fill: \"#7F8C8D\",\n    d: \"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12\"\n  })))), /*#__PURE__*/React.createElement(\"div\", {\n    className: \"btn-lang\"\n  }))));\n}\n\n//# sourceURL=webpack://react-version/./src/wget/Layout/NavHeader.jsx?");

/***/ }),

/***/ "./src/wget/Layout/NavMenu.jsx":
/*!*************************************!*\
  !*** ./src/wget/Layout/NavMenu.jsx ***!
  \*************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ NavMenu\n/* harmony export */ });\nfunction NavMenu() {\n  return /*#__PURE__*/React.createElement(\"menu\", null, /*#__PURE__*/React.createElement(\"div\", {\n    className: \"side\"\n  }, /*#__PURE__*/React.createElement(\"a\", {\n    href: \"#\",\n    className: \"logo-link\"\n  }, /*#__PURE__*/React.createElement(\"i\", {\n    className: \"iconfont icon-logo-slogan\"\n  })), /*#__PURE__*/React.createElement(\"div\", {\n    className: \"logo\"\n  }, /*#__PURE__*/React.createElement(\"i\", {\n    className: \"iconfont icon-logo-slogan\"\n  })), /*#__PURE__*/React.createElement(\"div\", {\n    id: \"menu\",\n    className: \"menu\"\n  }), /*#__PURE__*/React.createElement(\"div\", {\n    className: \"btn-side-close\"\n  }, /*#__PURE__*/React.createElement(\"i\", {\n    className: \"iconfont icon-menu-close\"\n  })), /*#__PURE__*/React.createElement(\"div\", {\n    className: \"btn-lang-side\"\n  }, /*#__PURE__*/React.createElement(\"i\", {\n    className: \"iconfont icon-lang\",\n    style: {\n      fontSize: '28px',\n      color: '#aaa'\n    }\n  }))), /*#__PURE__*/React.createElement(\"div\", {\n    className: \"side-mask\"\n  }));\n}\n\n//# sourceURL=webpack://react-version/./src/wget/Layout/NavMenu.jsx?");

/***/ }),

/***/ "./src/wget/Layout/Top.jsx":
/*!*********************************!*\
  !*** ./src/wget/Layout/Top.jsx ***!
  \*********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ Top\n/* harmony export */ });\nfunction Top() {\n  return /*#__PURE__*/React.createElement(\"div\", {\n    className: \"top\"\n  }, /*#__PURE__*/React.createElement(\"div\", {\n    className: \"nav\"\n  }, /*#__PURE__*/React.createElement(\"div\", {\n    className: \"btn-menu\"\n  }, /*#__PURE__*/React.createElement(\"i\", {\n    className: \"iconfont icon-xuexi\"\n  })), /*#__PURE__*/React.createElement(\"div\", {\n    className: \"nav-logo\"\n  }, /*#__PURE__*/React.createElement(\"i\", {\n    className: \"iconfont icon-logo\"\n  })), /*#__PURE__*/React.createElement(\"div\", {\n    className: \"btn-account\"\n  }, /*#__PURE__*/React.createElement(\"i\", {\n    className: \"iconfont icon-user\"\n  }))));\n}\n\n//# sourceURL=webpack://react-version/./src/wget/Layout/Top.jsx?");

/***/ }),

/***/ "./src/wget/Layout/index.jsx":
/*!***********************************!*\
  !*** ./src/wget/Layout/index.jsx ***!
  \***********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ App\n/* harmony export */ });\n/* harmony import */ var _NavMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NavMenu */ \"./src/wget/Layout/NavMenu.jsx\");\n/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Container */ \"./src/wget/Layout/Container.jsx\");\n/* harmony import */ var _Top__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Top */ \"./src/wget/Layout/Top.jsx\");\n\n\n\nfunction App() {\n  return /*#__PURE__*/React.createElement(\"div\", {\n    id: \"app\"\n  }, /*#__PURE__*/React.createElement(_Top__WEBPACK_IMPORTED_MODULE_2__.default, null), /*#__PURE__*/React.createElement(_NavMenu__WEBPACK_IMPORTED_MODULE_0__.default, null), /*#__PURE__*/React.createElement(_Container__WEBPACK_IMPORTED_MODULE_1__.default, null));\n}\n\n//# sourceURL=webpack://react-version/./src/wget/Layout/index.jsx?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/main.jsx");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;