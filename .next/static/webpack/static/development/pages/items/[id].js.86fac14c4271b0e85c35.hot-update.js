webpackHotUpdate("static/development/pages/items/[id].js",{

/***/ "./pages/items/[id].js":
/*!*****************************!*\
  !*** ./pages/items/[id].js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var _this = undefined,
    _jsxFileName = "/Users/giose/ws/udemy/mercadolibre/pages/items/[id].js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

var Id = function Id(_ref) {
  var news = _ref.news,
      resOne = _ref.resOne;
  console.log('resOne', resOne);
  return __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 5
    }
  }, "Soy el Id");
};

Id.getInitialProps = function _callee(_ref2) {
  var query, news, resOne, res, _resOne;

  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          query = _ref2.query;
          _context.prev = 1;
          _context.next = 4;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(fetch("https://api.mercadolibre.com/items/".concat(query === null || query === void 0 ? void 0 : query.search)));

        case 4:
          res = _context.sent;
          _context.next = 7;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(fetch("https://api.mercadolibre.com/items/".concat(query === null || query === void 0 ? void 0 : query.search, "/description")));

        case 7:
          _resOne = _context.sent;
          _context.next = 10;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(res.json());

        case 10:
          news = _context.sent;
          _context.next = 13;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_resOne.json());

        case 13:
          newsOne = _context.sent;
          _context.next = 19;
          break;

        case 16:
          _context.prev = 16;
          _context.t0 = _context["catch"](1);
          console.log(_context.t0);

        case 19:
          return _context.abrupt("return", {
            resOne: resOne
          });

        case 20:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[1, 16]], Promise);
};

/* harmony default export */ __webpack_exports__["default"] = (Id);

/***/ })

})
//# sourceMappingURL=[id].js.86fac14c4271b0e85c35.hot-update.js.map