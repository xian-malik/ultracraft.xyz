webpackHotUpdate("static\\development\\pages\\resources.js",{

/***/ "./pages/resources.js":
/*!****************************!*\
  !*** ./pages/resources.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_lazyload__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-lazyload */ "./node_modules/react-lazyload/lib/index.js");
/* harmony import */ var react_lazyload__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_lazyload__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/header */ "./components/header.js");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/footer */ "./components/footer.js");





var _jsxFileName = "E:\\Workspace\\ultracraft.xyz\\pages\\resources.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }







var Resources = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(Resources, _React$Component);

  var _super = _createSuper(Resources);

  function Resources(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Resources);

    _this = _super.call(this, props);
    _this.state = {
      data: null
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Resources, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var _this$state = this.state,
          ip = _this$state.ip,
          port = _this$state.port;
      axios__WEBPACK_IMPORTED_MODULE_7___default.a.get('https://mcapi.us/server/status?ip=' + ip + '&port=' + port + '', {
        'Content-Type': 'application/json'
      }).then(function (response) {
        _this2.setState({
          data: response.data
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx("main", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 7
        }
      }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_6___default.a, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 9
        }
      }, __jsx("title", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 11
        }
      }, "Resources | UltraCraft")), __jsx("div", {
        className: "page-wrapper",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 9
        }
      }, __jsx(_components_header__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 11
        }
      }), __jsx("section", {
        className: "page-title",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 11
        }
      }, __jsx("picture", {
        className: "image-bg",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 13
        }
      }, __jsx("source", {
        srcSet: "https://res.cloudinary.com/xianmalik/image/upload/e_blur:200,w_480,h_768,c_fill,f_auto,q_auto/v1589059497/UltraCraft/nether_hub.jp2",
        media: "(max-width: 480px)",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 15
        }
      }), __jsx("source", {
        srcSet: "https://res.cloudinary.com/xianmalik/image/upload/e_blur:200,w_768,h_768,c_fill,f_auto,q_auto/v1589059497/UltraCraft/nether_hub.jp2",
        media: "(max-width: 768px)",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 15
        }
      }), __jsx("source", {
        srcSet: "https://res.cloudinary.com/xianmalik/image/upload/e_blur:200,w_1080,h_768,c_fill,f_auto,q_auto/v1589059497/UltraCraft/nether_hub.jp2",
        media: "(max-width: 1080px)",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 15
        }
      }), __jsx("img", {
        src: "https://res.cloudinary.com/xianmalik/image/upload/e_blur:200,c_fill,f_auto,q_auto/v1589143340/UltraCraft/nether_hub.jpg",
        className: "image-bg",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 15
        }
      })), __jsx("div", {
        className: "container",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 15
        }
      }, __jsx("div", {
        className: "col-12",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 17
        }
      }, __jsx("h3", {
        style: {
          margin: 0
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 19
        }
      }, "Things you need"), __jsx("h1", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 19
        }
      }, "ResourceS")))), __jsx("picture", {
        className: "dividerBottom",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 13
        }
      }, __jsx("source", {
        srcSet: "https://res.cloudinary.com/xianmalik/image/upload/w_480,h_50,c_fill,f_auto,q_auto/v1589059497/UltraCraft/Borders/header1.jp2",
        media: "(max-width: 480px)",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 15
        }
      }), __jsx("source", {
        srcSet: "https://res.cloudinary.com/xianmalik/image/upload/w_768,h_50,c_fill,f_auto,q_auto/v1589059497/UltraCraft/Borders/header1.jp2",
        media: "(max-width: 768px)",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 15
        }
      }), __jsx("source", {
        srcSet: "https://res.cloudinary.com/xianmalik/image/upload/w_1080,h_95,c_fill,f_auto,q_auto/v1589059497/UltraCraft/Borders/header1.jp2",
        media: "(max-width: 1080px)",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 15
        }
      }), __jsx("img", {
        className: "dividerBottom",
        src: "https://res.cloudinary.com/xianmalik/image/upload/w_1871,h_95,c_fill,f_auto,q_auto/v1589138371/UltraCraft/Borders/header1.png",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 15
        }
      }))), __jsx("section", {
        id: "Section2",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 11
        }
      }, __jsx("div", {
        className: "container",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "row column-height",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 15
        }
      }, __jsx("div", {
        className: "col-4",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: "fv-folderView",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 19
        }
      }, __jsx("picture", {
        className: "fv-image",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 21
        }
      }, __jsx("source", {
        srcSet: "https://res.cloudinary.com/xianmalik/image/upload/e_blur:200,w_480,c_limit,f_auto,q_auto/v1589059497/UltraCraft/uc_season2.jp2",
        media: "(max-width: 480px)",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 23
        }
      }), __jsx("source", {
        srcSet: "https://res.cloudinary.com/xianmalik/image/upload/e_blur:200,w_768,c_limit,f_auto,q_auto/v1589059497/UltraCraft/uc_season2.jp2",
        media: "(max-width: 768px)",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 23
        }
      }), __jsx("source", {
        srcSet: "https://res.cloudinary.com/xianmalik/image/upload/e_blur:200,w_480,c_limit,f_auto,q_auto/v1589059497/UltraCraft/uc_season2.jp2",
        media: "(max-width: 1080px)",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 23
        }
      }), __jsx("img", {
        className: "fv-image",
        src: "https://res.cloudinary.com/xianmalik/image/upload/e_blur:200,w_480,c_limit,f_auto,q_auto/v1589138371/UltraCraft/uc_season2.png",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 23
        }
      })), __jsx("div", {
        className: "fv-content",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 21
        }
      }, __jsx("h5", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 23
        }
      }, "SEASONS RESOURCE"), __jsx("h2", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 23
        }
      }, "World Files"), __jsx("h6", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 23
        }
      }, "A Survival & SkyBlock Server"), __jsx("a", {
        href: "#",
        className: "btn-effect effect-slash",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 23
        }
      }, __jsx("div", {
        className: "effect-inner",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 25
        }
      }, __jsx("span", {
        className: "effect-l",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 27
        }
      }, __jsx("span", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 54
        }
      }, "Download")), __jsx("span", {
        className: "effect-r",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 27
        }
      }, __jsx("span", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 54
        }
      }, "Download")), __jsx("span", {
        className: "effect-shade",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 27
        }
      }, __jsx("span", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 58
        }
      }, "Download"))))))))), __jsx("picture", {
        className: "dividerBottom",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 13
        }
      }, __jsx("source", {
        srcSet: "https://res.cloudinary.com/xianmalik/image/upload/w_480,h_50,c_fill,f_auto,q_auto/v1589059497/UltraCraft/Borders/top_dark.jp2",
        media: "(max-width: 480px)",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 15
        }
      }), __jsx("source", {
        srcSet: "https://res.cloudinary.com/xianmalik/image/upload/w_768,h_50,c_fill,f_auto,q_auto/v1589059497/UltraCraft/Borders/top_dark.jp2",
        media: "(max-width: 768px)",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 15
        }
      }), __jsx("source", {
        srcSet: "https://res.cloudinary.com/xianmalik/image/upload/w_1080,h_95,c_fill,f_auto,q_auto/v1589059497/UltraCraft/Borders/top_dark.jp2",
        media: "(max-width: 1080px)",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 15
        }
      }), __jsx("img", {
        className: "dividerBottom",
        src: "https://res.cloudinary.com/xianmalik/image/upload/w_1871,h_95,c_fill,f_auto,q_auto/v1589138371/UltraCraft/Borders/top_dark.png",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 15
        }
      }))), __jsx(_components_footer__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 11
        }
      })));
    }
  }]);

  return Resources;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Resources);

/***/ })

})
//# sourceMappingURL=resources.js.bb1297a34f98209e17d7.hot-update.js.map