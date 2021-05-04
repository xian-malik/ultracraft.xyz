webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/header.js":
/*!******************************!*\
  !*** ./components/header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _modules_effectslash_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/effectslash.module */ "./components/modules/effectslash.module.js");







var _jsxFileName = "C:\\wamp64\\www\\ultracraft\\components\\header.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }




var Header = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Header, _React$Component);

  var _super = _createSuper(Header);

  function Header(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Header);

    _this = _super.call(this, props);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "cursor", function (e) {
      var cursor = document.querySelector('.custom-cursor-sword');
      cursor.style.transform = 'matrix(1, 0, 0, 1, ' + e.pageX + ', ' + (e.pageY - window.scrollY) + ')';
    });

    _this.state = {
      menuOpen: false
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Header, [{
    key: "handleMenu",
    value: function handleMenu(e) {
      this.setState({
        menuOpen: !this.state.menuOpen
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener("mousemove", this.cursor);
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx("header", {
        id: "header",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 7
        }
      }, __jsx("div", {
        className: "header",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 9
        }
      }, __jsx("div", {
        className: "container-fluid",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 11
        }
      }, __jsx("div", {
        className: "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "col-12",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 15
        }
      }, __jsx("nav", {
        className: "navbar" + (this.state.menuOpen ? " responsive-active" : ""),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 17
        }
      }, __jsx("ul", {
        className: "navbar-nav navbar-left",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 19
        }
      }, __jsx("li", {
        className: "nomargin",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 21
        }
      }, __jsx("a", {
        href: "/facebook",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 46
        }
      }, __jsx("i", {
        className: "fab fa-discord fa-lg",
        "aria-hidden": "true",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 66
        }
      }))), __jsx("li", {
        className: "nomargin",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 21
        }
      }, __jsx("a", {
        href: "/discord",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 46
        }
      }, __jsx("i", {
        className: "fab fa-facebook-messenger fa-lg",
        "aria-hidden": "true",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 65
        }
      })))), __jsx("ul", {
        className: "navbar-nav navbar-center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 19
        }
      }, __jsx("div", {
        className: "nav-left-part",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 21
        }
      }, __jsx("li", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 23
        }
      }, __jsx(_modules_effectslash_module__WEBPACK_IMPORTED_MODULE_8__["default"], {
        href: "/community",
        title: "Community",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 27
        }
      })), __jsx("li", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 23
        }
      }, __jsx(_modules_effectslash_module__WEBPACK_IMPORTED_MODULE_8__["default"], {
        href: "/forum",
        title: "Forum",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 27
        }
      })), __jsx("li", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 23
        }
      }, __jsx(_modules_effectslash_module__WEBPACK_IMPORTED_MODULE_8__["default"], {
        href: "/rules",
        title: "Rules",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 27
        }
      }))), __jsx("li", {
        className: "logo-wrap",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 21
        }
      }, __jsx("a", {
        href: "/",
        className: "logo",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 23
        }
      }, __jsx("h1", {
        className: "logo-text",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 25
        }
      }, "Ultr", __jsx("small", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 55
        }
      }, "ac"), "rafT"))), __jsx("div", {
        className: "nav-right-part",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 21
        }
      }, __jsx("li", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 23
        }
      }, __jsx(_modules_effectslash_module__WEBPACK_IMPORTED_MODULE_8__["default"], {
        href: "/resources",
        title: "Resources",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 27
        }
      })), __jsx("li", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 23
        }
      }, __jsx(_modules_effectslash_module__WEBPACK_IMPORTED_MODULE_8__["default"], {
        href: "/rules",
        title: "Bans",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 27
        }
      })), __jsx("li", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 23
        }
      }, __jsx(_modules_effectslash_module__WEBPACK_IMPORTED_MODULE_8__["default"], {
        href: "/store",
        title: "Store",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 27
        }
      })))), __jsx("ul", {
        className: "navbar-nav navbar-right",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 19
        }
      }, __jsx("li", {
        className: "nomargin",
        active: "true",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 21
        }
      }, __jsx(_modules_effectslash_module__WEBPACK_IMPORTED_MODULE_8__["default"], {
        href: "/u/login",
        title: "Login",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 23
        }
      })))))))));
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=index.js.f6cc01e3f83cda45a8c8.hot-update.js.map