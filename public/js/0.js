(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./resources/js/Layouts/Main.tsx":
/*!***************************************!*\
  !*** ./resources/js/Layouts/Main.tsx ***!
  \***************************************/
/*! exports provided: MainLayout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainLayout", function() { return MainLayout; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var MainLayout = function MainLayout(_ref) {
  var children = _ref.children,
      className = _ref.className;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "min-h-screen bg-gray-300 ".concat(className)
  }, children);
};

/***/ }),

/***/ "./resources/js/Layouts/index.ts":
/*!***************************************!*\
  !*** ./resources/js/Layouts/index.ts ***!
  \***************************************/
/*! exports provided: MainLayout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Main */ "./resources/js/Layouts/Main.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MainLayout", function() { return _Main__WEBPACK_IMPORTED_MODULE_0__["MainLayout"]; });



/***/ }),

/***/ "./resources/js/Pages/Sample/Index.tsx":
/*!*********************************************!*\
  !*** ./resources/js/Pages/Sample/Index.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Layouts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Layouts */ "./resources/js/Layouts/index.ts");



var Index = function Index(_ref) {
  var links = _ref.links;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Layouts__WEBPACK_IMPORTED_MODULE_1__["MainLayout"], {
    className: "flex items-center justify-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex flex-col"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "min-h-screen flex items-center justify-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex flex-col justify-around h-full"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "text-gray-600 text-center font-light tracking-wider text-5xl mb-6"
  }, "Laravel"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "list-reset"
  }, links.map(function (link) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      className: "inline pr-8",
      key: link.name
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: link.link,
      className: "no-underline hover:underline text-sm font-normal text-teal-800 uppercase",
      title: link.name
    }, link.name));
  })))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

}]);