"use strict";
(self["webpackChunkorder_summary_component_main"] = self["webpackChunkorder_summary_component_main"] || []).push([["index"],{

/***/ "./src/index.html":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ "./node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images//pattern-background-mobile.svg */ "./src/images/pattern-background-mobile.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./images/pattern-background-desktop.svg */ "./src/images/pattern-background-desktop.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./images/illustration-hero.svg */ "./src/images/illustration-hero.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./images/icon-music.svg */ "./src/images/icon-music.svg"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);
var ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);
var ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);
var code = "<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n  <meta charset=\"UTF-8\">\n  <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <link referrerpolicy=\"no-referrer\" />\n</head>\n\n<body>\n  <main class=\"summery-container\">\n    <picture class=\"summery-wall\">\n      <source srcset=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" media=\"(max-width: 460px)\">\n      <img src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"\" />\n    </picture>\n\n    <section class=\"container-section\">\n\n      <div class=\"summery-hero\">\n        <img src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"Illustration image\" />\n      </div>\n\n      <section class=\"summery-details\">\n\n          <div class=\"summery-description\">\n            <h1>Order Summary</h1>\n            <p>You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!</p>\n          </div>\n          \n          <div class=\"summery-subscribtion-section\">\n\n            <div class=\"icon\">\n              <img src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" alt=\"music icon\" />\n            </div>\n\n            <div class=\"summery-plan\">\n              <span>Annual Plan</span>\n              <span>59.99/year</span>\n            </div>\n\n            <div class=\"link\">\n              <a href=\"#\">Change</a>\n            </div>\n\n          </div>\n\n          <div class=\"summery-checkout\">\n            <button>Proceed To Payment</button>\n            <a href=\"#\">Cancel Order</a>\n          </div>\n\n      </section>\n    </section>\n  </main>\n</body>\n\n</html>";
// Exports
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./node_modules/html-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ./node_modules/html-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ (function(module) {



module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }

  if (!url) {
    return url;
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = String(url.__esModule ? url.default : url);

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  }

  if (options.maybeNeedQuotes && /[\t\n\f\r "'=<>`]/.test(url)) {
    return "\"".concat(url, "\"");
  }

  return url;
};

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ (function() {

// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.html */ "./src/index.html");



/***/ }),

/***/ "./src/images/icon-music.svg":
/*!***********************************!*\
  !*** ./src/images/icon-music.svg ***!
  \***********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/f20c7787426b3847880e.svg";

/***/ }),

/***/ "./src/images/illustration-hero.svg":
/*!******************************************!*\
  !*** ./src/images/illustration-hero.svg ***!
  \******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/7303258392501e7adc15.svg";

/***/ }),

/***/ "./src/images/pattern-background-desktop.svg":
/*!***************************************************!*\
  !*** ./src/images/pattern-background-desktop.svg ***!
  \***************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/5a0ab6898fc956557d00.svg";

/***/ }),

/***/ "./src/images/pattern-background-mobile.svg":
/*!**************************************************!*\
  !*** ./src/images/pattern-background-mobile.svg ***!
  \**************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/c8d50fcb68aa27a01e4d.svg";

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDMUcseUNBQXlDLDBKQUEwRDtBQUNuRyx5Q0FBeUMsMkpBQTBEO0FBQ25HLHlDQUF5Qyx5SUFBaUQ7QUFDMUYseUNBQXlDLDJIQUEwQztBQUNuRjtBQUNBLHNDQUFzQyx1RkFBd0M7QUFDOUUsc0NBQXNDLHVGQUF3QztBQUM5RSxzQ0FBc0MsdUZBQXdDO0FBQzlFLHNDQUFzQyx1RkFBd0M7QUFDOUU7QUFDQTtBQUNBLHNFQUFlLElBQUk7Ozs7Ozs7Ozs7QUNiTjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7OztBQ3pCQTs7Ozs7Ozs7Ozs7OztBQ0FzQiIsInNvdXJjZXMiOlsid2VicGFjazovL29yZGVyLXN1bW1hcnktY29tcG9uZW50LW1haW4vLi9zcmMvaW5kZXguaHRtbCIsIndlYnBhY2s6Ly9vcmRlci1zdW1tYXJ5LWNvbXBvbmVudC1tYWluLy4vbm9kZV9tb2R1bGVzL2h0bWwtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vb3JkZXItc3VtbWFyeS1jb21wb25lbnQtbWFpbi8uL3NyYy9zdHlsZS5zY3NzPzU4ODIiLCJ3ZWJwYWNrOi8vb3JkZXItc3VtbWFyeS1jb21wb25lbnQtbWFpbi8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2h0bWwtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19IVE1MX0xPQURFUl9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ltYWdlcy8vcGF0dGVybi1iYWNrZ3JvdW5kLW1vYmlsZS5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19IVE1MX0xPQURFUl9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2ltYWdlcy9wYXR0ZXJuLWJhY2tncm91bmQtZGVza3RvcC5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19IVE1MX0xPQURFUl9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuL2ltYWdlcy9pbGx1c3RyYXRpb24taGVyby5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19IVE1MX0xPQURFUl9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCIuL2ltYWdlcy9pY29uLW11c2ljLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xuLy8gTW9kdWxlXG52YXIgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0hUTUxfTE9BREVSX0dFVF9TT1VSQ0VfRlJPTV9JTVBPUlRfX18oX19fSFRNTF9MT0FERVJfSU1QT1JUXzBfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzFfX18gPSBfX19IVE1MX0xPQURFUl9HRVRfU09VUkNFX0ZST01fSU1QT1JUX19fKF9fX0hUTUxfTE9BREVSX0lNUE9SVF8xX19fKTtcbnZhciBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8yX19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfMl9fXyk7XG52YXIgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0hUTUxfTE9BREVSX0dFVF9TT1VSQ0VfRlJPTV9JTVBPUlRfX18oX19fSFRNTF9MT0FERVJfSU1QT1JUXzNfX18pO1xudmFyIGNvZGUgPSBcIjwhRE9DVFlQRSBodG1sPlxcbjxodG1sIGxhbmc9XFxcImVuXFxcIj5cXG5cXG48aGVhZD5cXG4gIDxtZXRhIGNoYXJzZXQ9XFxcIlVURi04XFxcIj5cXG4gIDxtZXRhIGh0dHAtZXF1aXY9XFxcIlgtVUEtQ29tcGF0aWJsZVxcXCIgY29udGVudD1cXFwiSUU9ZWRnZVxcXCI+XFxuICA8bWV0YSBuYW1lPVxcXCJ2aWV3cG9ydFxcXCIgY29udGVudD1cXFwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMFxcXCI+XFxuICA8bGluayByZWZlcnJlcnBvbGljeT1cXFwibm8tcmVmZXJyZXJcXFwiIC8+XFxuPC9oZWFkPlxcblxcbjxib2R5PlxcbiAgPG1haW4gY2xhc3M9XFxcInN1bW1lcnktY29udGFpbmVyXFxcIj5cXG4gICAgPHBpY3R1cmUgY2xhc3M9XFxcInN1bW1lcnktd2FsbFxcXCI+XFxuICAgICAgPHNvdXJjZSBzcmNzZXQ9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMF9fXyArIFwiXFxcIiBtZWRpYT1cXFwiKG1heC13aWR0aDogNDYwcHgpXFxcIj5cXG4gICAgICA8aW1nIHNyYz1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8xX19fICsgXCJcXFwiIGFsdD1cXFwiXFxcIiAvPlxcbiAgICA8L3BpY3R1cmU+XFxuXFxuICAgIDxzZWN0aW9uIGNsYXNzPVxcXCJjb250YWluZXItc2VjdGlvblxcXCI+XFxuXFxuICAgICAgPGRpdiBjbGFzcz1cXFwic3VtbWVyeS1oZXJvXFxcIj5cXG4gICAgICAgIDxpbWcgc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzJfX18gKyBcIlxcXCIgYWx0PVxcXCJJbGx1c3RyYXRpb24gaW1hZ2VcXFwiIC8+XFxuICAgICAgPC9kaXY+XFxuXFxuICAgICAgPHNlY3Rpb24gY2xhc3M9XFxcInN1bW1lcnktZGV0YWlsc1xcXCI+XFxuXFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInN1bW1lcnktZGVzY3JpcHRpb25cXFwiPlxcbiAgICAgICAgICAgIDxoMT5PcmRlciBTdW1tYXJ5PC9oMT5cXG4gICAgICAgICAgICA8cD5Zb3UgY2FuIG5vdyBsaXN0ZW4gdG8gbWlsbGlvbnMgb2Ygc29uZ3MsIGF1ZGlvYm9va3MsIGFuZCBwb2RjYXN0cyBvbiBhbnkgZGV2aWNlIGFueXdoZXJlIHlvdSBsaWtlITwvcD5cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgIFxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzdW1tZXJ5LXN1YnNjcmlidGlvbi1zZWN0aW9uXFxcIj5cXG5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpY29uXFxcIj5cXG4gICAgICAgICAgICAgIDxpbWcgc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzNfX18gKyBcIlxcXCIgYWx0PVxcXCJtdXNpYyBpY29uXFxcIiAvPlxcbiAgICAgICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInN1bW1lcnktcGxhblxcXCI+XFxuICAgICAgICAgICAgICA8c3Bhbj5Bbm51YWwgUGxhbjwvc3Bhbj5cXG4gICAgICAgICAgICAgIDxzcGFuPjU5Ljk5L3llYXI8L3NwYW4+XFxuICAgICAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibGlua1xcXCI+XFxuICAgICAgICAgICAgICA8YSBocmVmPVxcXCIjXFxcIj5DaGFuZ2U8L2E+XFxuICAgICAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzdW1tZXJ5LWNoZWNrb3V0XFxcIj5cXG4gICAgICAgICAgICA8YnV0dG9uPlByb2NlZWQgVG8gUGF5bWVudDwvYnV0dG9uPlxcbiAgICAgICAgICAgIDxhIGhyZWY9XFxcIiNcXFwiPkNhbmNlbCBPcmRlcjwvYT5cXG4gICAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgPC9zZWN0aW9uPlxcbiAgICA8L3NlY3Rpb24+XFxuICA8L21haW4+XFxuPC9ib2R5PlxcblxcbjwvaHRtbD5cIjtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IGNvZGU7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVyc2NvcmUtZGFuZ2xlLCBuby1wYXJhbS1yZWFzc2lnblxuXG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMubWF5YmVOZWVkUXVvdGVzICYmIC9bXFx0XFxuXFxmXFxyIFwiJz08PmBdLy50ZXN0KHVybCkpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybCwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiaW1wb3J0IFwiLi9zdHlsZS5zY3NzXCI7XHJcbmltcG9ydCBcIi4vaW5kZXguaHRtbFwiOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==