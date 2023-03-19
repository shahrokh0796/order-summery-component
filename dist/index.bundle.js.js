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
var code = "<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n  <meta charset=\"UTF-8\">\n  <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <link referrerpolicy=\"no-referrer\" />\n</head>\n\n<body>\n  <main class=\"summery-container\">\n    <picture class=\"summery-wall\">\n      <source srcset=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" media=\"(max-width: 460px)\">\n      <img src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"\" />\n    </picture>\n\n    <section class=\"container-section\">\n\n      <div class=\"summery-hero\">\n        <img src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"Illustration image\" />\n      </div>\n\n      <section class=\"summery-details\">\n\n          <div class=\"summery-description\">\n            <h1>Order Summary</h1>\n            <p>You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!</p>\n          </div>\n          \n          <div class=\"summery-subscribtion-section\">\n\n            <div class=\"icon\">\n              <img src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" alt=\"music icon\" />\n            </div>\n\n            <div class=\"summery-plan\">\n              <span>Annual Plan</span>\n              <span>59.99/year</span>\n            </div>\n\n            <div class=\"link\">\n              <a href=\"#\">Change</a>\n            </div>\n\n          </div>\n\n          <div class=\"summery-checkout\">\n            <button>Proceed To Payment</button>\n            <a href=\"#\">Cancel Order</a>\n          </div>\n\n      </section>\n    </section>\n  </main>\n\n  <footer class=\"attribution\">\n    Challenge by <a href=\"https://www.frontendmentor.io?ref=challenge\" target=\"_blank\">Frontend Mentor</a> \n    Coded by <a href=\"https://www.frontendmentor.io/profile/shahrokh0796\">Said Shahrokh Temori</a>\n  </footer>\n</body>\n</html>";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDMUcseUNBQXlDLDBKQUEwRDtBQUNuRyx5Q0FBeUMsMkpBQTBEO0FBQ25HLHlDQUF5Qyx5SUFBaUQ7QUFDMUYseUNBQXlDLDJIQUEwQztBQUNuRjtBQUNBLHNDQUFzQyx1RkFBd0M7QUFDOUUsc0NBQXNDLHVGQUF3QztBQUM5RSxzQ0FBc0MsdUZBQXdDO0FBQzlFLHNDQUFzQyx1RkFBd0M7QUFDOUU7QUFDQTtBQUNBLHNFQUFlLElBQUk7Ozs7Ozs7Ozs7QUNiTjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7OztBQ3pCQTs7Ozs7Ozs7Ozs7OztBQ0FzQiIsInNvdXJjZXMiOlsid2VicGFjazovL29yZGVyLXN1bW1hcnktY29tcG9uZW50LW1haW4vLi9zcmMvaW5kZXguaHRtbCIsIndlYnBhY2s6Ly9vcmRlci1zdW1tYXJ5LWNvbXBvbmVudC1tYWluLy4vbm9kZV9tb2R1bGVzL2h0bWwtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vb3JkZXItc3VtbWFyeS1jb21wb25lbnQtbWFpbi8uL3NyYy9zdHlsZS5zY3NzIiwid2VicGFjazovL29yZGVyLXN1bW1hcnktY29tcG9uZW50LW1haW4vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0hUTUxfTE9BREVSX0dFVF9TT1VSQ0VfRlJPTV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9odG1sLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fSFRNTF9MT0FERVJfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9pbWFnZXMvL3BhdHRlcm4tYmFja2dyb3VuZC1tb2JpbGUuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fSFRNTF9MT0FERVJfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9pbWFnZXMvcGF0dGVybi1iYWNrZ3JvdW5kLWRlc2t0b3Auc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fSFRNTF9MT0FERVJfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi9pbWFnZXMvaWxsdXN0cmF0aW9uLWhlcm8uc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fSFRNTF9MT0FERVJfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi9pbWFnZXMvaWNvbi1tdXNpYy5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbi8vIE1vZHVsZVxudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzBfX18gPSBfX19IVE1MX0xPQURFUl9HRVRfU09VUkNFX0ZST01fSU1QT1JUX19fKF9fX0hUTUxfTE9BREVSX0lNUE9SVF8wX19fKTtcbnZhciBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8xX19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfMV9fXyk7XG52YXIgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0hUTUxfTE9BREVSX0dFVF9TT1VSQ0VfRlJPTV9JTVBPUlRfX18oX19fSFRNTF9MT0FERVJfSU1QT1JUXzJfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzNfX18gPSBfX19IVE1MX0xPQURFUl9HRVRfU09VUkNFX0ZST01fSU1QT1JUX19fKF9fX0hUTUxfTE9BREVSX0lNUE9SVF8zX19fKTtcbnZhciBjb2RlID0gXCI8IURPQ1RZUEUgaHRtbD5cXG48aHRtbCBsYW5nPVxcXCJlblxcXCI+XFxuXFxuPGhlYWQ+XFxuICA8bWV0YSBjaGFyc2V0PVxcXCJVVEYtOFxcXCI+XFxuICA8bWV0YSBodHRwLWVxdWl2PVxcXCJYLVVBLUNvbXBhdGlibGVcXFwiIGNvbnRlbnQ9XFxcIklFPWVkZ2VcXFwiPlxcbiAgPG1ldGEgbmFtZT1cXFwidmlld3BvcnRcXFwiIGNvbnRlbnQ9XFxcIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjBcXFwiPlxcbiAgPGxpbmsgcmVmZXJyZXJwb2xpY3k9XFxcIm5vLXJlZmVycmVyXFxcIiAvPlxcbjwvaGVhZD5cXG5cXG48Ym9keT5cXG4gIDxtYWluIGNsYXNzPVxcXCJzdW1tZXJ5LWNvbnRhaW5lclxcXCI+XFxuICAgIDxwaWN0dXJlIGNsYXNzPVxcXCJzdW1tZXJ5LXdhbGxcXFwiPlxcbiAgICAgIDxzb3VyY2Ugc3Jjc2V0PVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzBfX18gKyBcIlxcXCIgbWVkaWE9XFxcIihtYXgtd2lkdGg6IDQ2MHB4KVxcXCI+XFxuICAgICAgPGltZyBzcmM9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMV9fXyArIFwiXFxcIiBhbHQ9XFxcIlxcXCIgLz5cXG4gICAgPC9waWN0dXJlPlxcblxcbiAgICA8c2VjdGlvbiBjbGFzcz1cXFwiY29udGFpbmVyLXNlY3Rpb25cXFwiPlxcblxcbiAgICAgIDxkaXYgY2xhc3M9XFxcInN1bW1lcnktaGVyb1xcXCI+XFxuICAgICAgICA8aW1nIHNyYz1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8yX19fICsgXCJcXFwiIGFsdD1cXFwiSWxsdXN0cmF0aW9uIGltYWdlXFxcIiAvPlxcbiAgICAgIDwvZGl2PlxcblxcbiAgICAgIDxzZWN0aW9uIGNsYXNzPVxcXCJzdW1tZXJ5LWRldGFpbHNcXFwiPlxcblxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzdW1tZXJ5LWRlc2NyaXB0aW9uXFxcIj5cXG4gICAgICAgICAgICA8aDE+T3JkZXIgU3VtbWFyeTwvaDE+XFxuICAgICAgICAgICAgPHA+WW91IGNhbiBub3cgbGlzdGVuIHRvIG1pbGxpb25zIG9mIHNvbmdzLCBhdWRpb2Jvb2tzLCBhbmQgcG9kY2FzdHMgb24gYW55IGRldmljZSBhbnl3aGVyZSB5b3UgbGlrZSE8L3A+XFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICBcXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwic3VtbWVyeS1zdWJzY3JpYnRpb24tc2VjdGlvblxcXCI+XFxuXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaWNvblxcXCI+XFxuICAgICAgICAgICAgICA8aW1nIHNyYz1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8zX19fICsgXCJcXFwiIGFsdD1cXFwibXVzaWMgaWNvblxcXCIgLz5cXG4gICAgICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzdW1tZXJ5LXBsYW5cXFwiPlxcbiAgICAgICAgICAgICAgPHNwYW4+QW5udWFsIFBsYW48L3NwYW4+XFxuICAgICAgICAgICAgICA8c3Bhbj41OS45OS95ZWFyPC9zcGFuPlxcbiAgICAgICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImxpbmtcXFwiPlxcbiAgICAgICAgICAgICAgPGEgaHJlZj1cXFwiI1xcXCI+Q2hhbmdlPC9hPlxcbiAgICAgICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwic3VtbWVyeS1jaGVja291dFxcXCI+XFxuICAgICAgICAgICAgPGJ1dHRvbj5Qcm9jZWVkIFRvIFBheW1lbnQ8L2J1dHRvbj5cXG4gICAgICAgICAgICA8YSBocmVmPVxcXCIjXFxcIj5DYW5jZWwgT3JkZXI8L2E+XFxuICAgICAgICAgIDwvZGl2PlxcblxcbiAgICAgIDwvc2VjdGlvbj5cXG4gICAgPC9zZWN0aW9uPlxcbiAgPC9tYWluPlxcblxcbiAgPGZvb3RlciBjbGFzcz1cXFwiYXR0cmlidXRpb25cXFwiPlxcbiAgICBDaGFsbGVuZ2UgYnkgPGEgaHJlZj1cXFwiaHR0cHM6Ly93d3cuZnJvbnRlbmRtZW50b3IuaW8/cmVmPWNoYWxsZW5nZVxcXCIgdGFyZ2V0PVxcXCJfYmxhbmtcXFwiPkZyb250ZW5kIE1lbnRvcjwvYT4gXFxuICAgIENvZGVkIGJ5IDxhIGhyZWY9XFxcImh0dHBzOi8vd3d3LmZyb250ZW5kbWVudG9yLmlvL3Byb2ZpbGUvc2hhaHJva2gwNzk2XFxcIj5TYWlkIFNoYWhyb2toIFRlbW9yaTwvYT5cXG4gIDwvZm9vdGVyPlxcbjwvYm9keT5cXG48L2h0bWw+XCI7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBjb2RlOyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlcnNjb3JlLWRhbmdsZSwgbm8tcGFyYW0tcmVhc3NpZ25cblxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIGlmIChvcHRpb25zLm1heWJlTmVlZFF1b3RlcyAmJiAvW1xcdFxcblxcZlxcciBcIic9PD5gXS8udGVzdCh1cmwpKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwsIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCBcIi4vc3R5bGUuc2Nzc1wiO1xyXG5pbXBvcnQgXCIuL2luZGV4Lmh0bWxcIjsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=