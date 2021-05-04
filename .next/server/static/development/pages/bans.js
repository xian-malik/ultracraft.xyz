module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/footer.js":
/*!******************************!*\
  !*** ./components/footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_lazyload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-lazyload */ "react-lazyload");
/* harmony import */ var react_lazyload__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_lazyload__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_effectslash_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/effectslash.module */ "./components/modules/effectslash.module.js");
var _jsxFileName = "C:\\wamp64\\www\\ultracraft\\components\\footer.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function Footer() {
  return __jsx(react_lazyload__WEBPACK_IMPORTED_MODULE_1___default.a, {
    offset: 50,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, __jsx("footer", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }, __jsx("picture", {
    className: "dividerTop",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, __jsx("source", {
    srcSet: "https://res.cloudinary.com/xianmalik/image/upload/w_480,h_50,c_fill,f_auto,q_auto/v1589059497/UltraCraft/Borders/bottom_dark.jp2",
    media: "(max-width: 480px)",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 11
    }
  }), __jsx("source", {
    srcSet: "https://res.cloudinary.com/xianmalik/image/upload/w_768,h_50,c_fill,f_auto,q_auto/v1589059497/UltraCraft/Borders/bottom_dark.jp2",
    media: "(max-width: 768px)",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 11
    }
  }), __jsx("source", {
    srcSet: "https://res.cloudinary.com/xianmalik/image/upload/w_1080,h_95,c_fill,f_auto,q_auto/v1589059497/UltraCraft/Borders/bottom_dark.jp2",
    media: "(max-width: 1080px)",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 11
    }
  }), __jsx("img", {
    className: "dividerTop",
    src: "https://res.cloudinary.com/xianmalik/image/upload/w_1871,h_95,c_fill,f_auto,q_auto/v1589138371/UltraCraft/Borders/bottom_dark.png",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "col-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }
  }, __jsx("h3", {
    className: "footer-logo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 15
    }
  }, "UltraCraft"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 15
    }
  }, "Ultracraft is a Bangladeshi server")), __jsx("div", {
    className: "col-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }, __jsx("ul", {
    className: "footer-links",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 15
    }
  }, __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 17
    }
  }, __jsx(_modules_effectslash_module__WEBPACK_IMPORTED_MODULE_2__["default"], {
    href: "/",
    title: "Home",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 21
    }
  })), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 17
    }
  }, __jsx(_modules_effectslash_module__WEBPACK_IMPORTED_MODULE_2__["default"], {
    href: "/sta",
    title: "Home",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 21
    }
  })), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 17
    }
  }, __jsx(_modules_effectslash_module__WEBPACK_IMPORTED_MODULE_2__["default"], {
    href: "/rules",
    title: "Server Rules",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 21
    }
  })), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 17
    }
  }, __jsx(_modules_effectslash_module__WEBPACK_IMPORTED_MODULE_2__["default"], {
    href: "/support",
    title: "Support",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 21
    }
  })))), __jsx("div", {
    className: "col-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  })))));
}

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/header.js":
/*!******************************!*\
  !*** ./components/header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_effectslash_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/effectslash.module */ "./components/modules/effectslash.module.js");
var _jsxFileName = "C:\\wamp64\\www\\ultracraft\\components\\header.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class Header extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "cursor", e => {
      const cursor = document.querySelector('.custom-cursor-sword');
      cursor.style.transform = 'matrix(1, 0, 0, 1, ' + e.pageX + ', ' + (e.pageY - window.scrollY) + ')';
    });

    this.state = {
      menuOpen: false
    };
  }

  handleMenu(e) {
    this.setState({
      menuOpen: !this.state.menuOpen
    });
  }

  componentDidMount() {
    window.addEventListener("mousemove", this.cursor);
  }

  render() {
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
    }, __jsx(_modules_effectslash_module__WEBPACK_IMPORTED_MODULE_1__["default"], {
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
    }, __jsx(_modules_effectslash_module__WEBPACK_IMPORTED_MODULE_1__["default"], {
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
    }, __jsx(_modules_effectslash_module__WEBPACK_IMPORTED_MODULE_1__["default"], {
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
    }, __jsx(_modules_effectslash_module__WEBPACK_IMPORTED_MODULE_1__["default"], {
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
    }, __jsx(_modules_effectslash_module__WEBPACK_IMPORTED_MODULE_1__["default"], {
      href: "/bans",
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
    }, __jsx(_modules_effectslash_module__WEBPACK_IMPORTED_MODULE_1__["default"], {
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
    }, __jsx(_modules_effectslash_module__WEBPACK_IMPORTED_MODULE_1__["default"], {
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

}

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/modules/effectslash.module.js":
/*!**************************************************!*\
  !*** ./components/modules/effectslash.module.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\wamp64\\www\\ultracraft\\components\\modules\\effectslash.module.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class EffectSlash extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleClick", e => this.props.href == "#" ? e.preventDefault() : null);

    this.state = {
      pathname: '/'
    };
  }

  render() {
    const {
      href,
      title,
      extra
    } = this.props || '';
    return __jsx("a", {
      href: this.props.href,
      onClick: this.handleClick,
      className: extra + " effect-slash",
      active: this.props.active,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 12
      }
    }, __jsx("div", {
      className: "effect-inner",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 7
      }
    }, __jsx("span", {
      className: "effect-l",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }
    }, __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 36
      }
    }, title)), __jsx("span", {
      className: "effect-r",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }
    }, __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 36
      }
    }, title)), __jsx("span", {
      className: "effect-shade",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }
    }, __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 40
      }
    }, title))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (EffectSlash);

/***/ }),

/***/ "./pages/bans.js":
/*!***********************!*\
  !*** ./pages/bans.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_lazyload__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-lazyload */ "react-lazyload");
/* harmony import */ var react_lazyload__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_lazyload__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/header */ "./components/header.js");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/footer */ "./components/footer.js");
var _jsxFileName = "C:\\wamp64\\www\\ultracraft\\pages\\bans.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






class Bans extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
  }

  componentDidMount() {
    let data = new FormData();
    data.append('username', 'rgxvenom');
    let config = {
      headers: {
        authkey: 'ce2fea7d-6279-417e-8f5d-23313e2f6e53'
      },
      crossDomain: true
    };
    axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('http://localhost/ultracraft-api/routes/user/getuser.php', data, config).then(response => {
      console.log(response.data);
    });
  }

  render() {
    return __jsx("main", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 7
      }
    }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }
    }, __jsx("title", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 11
      }
    }, "Punishments | UltraCraft")), __jsx("div", {
      className: "page-wrapper",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }
    }, __jsx(_components_header__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 11
      }
    }), __jsx("section", {
      className: "page-title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 11
      }
    }, __jsx("picture", {
      className: "image-bg",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 13
      }
    }, __jsx("source", {
      srcSet: "https://res.cloudinary.com/xianmalik/image/upload/w_480,h_768,c_fill,f_auto,q_auto/v1589059497/UltraCraft/uc_nether.jp2",
      media: "(max-width: 480px)",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 15
      }
    }), __jsx("source", {
      srcSet: "https://res.cloudinary.com/xianmalik/image/upload/w_768,h_768,c_fill,f_auto,q_auto/v1589059497/UltraCraft/uc_nether.jp2",
      media: "(max-width: 768px)",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 15
      }
    }), __jsx("source", {
      srcSet: "https://res.cloudinary.com/xianmalik/image/upload/w_1080,h_768,c_fill,f_auto,q_auto/v1589059497/UltraCraft/uc_nether.jp2",
      media: "(max-width: 1080px)",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 15
      }
    }), __jsx("img", {
      src: "https://res.cloudinary.com/xianmalik/image/upload/c_fill,f_auto,q_auto/v1589143340/UltraCraft/uc_nether.jpg",
      className: "image-bg",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 15
      }
    })), __jsx("div", {
      className: "container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "row",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 15
      }
    }, __jsx("div", {
      className: "col-12",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 17
      }
    }, __jsx("h3", {
      style: {
        margin: 0
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 19
      }
    }, "The Hall Of Shame"), __jsx("h1", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 19
      }
    }, "PunishmentS")))), __jsx("picture", {
      className: "dividerBottom",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 13
      }
    }, __jsx("source", {
      srcSet: "https://res.cloudinary.com/xianmalik/image/upload/w_480,h_50,c_fill,f_auto,q_auto/v1589059497/UltraCraft/Borders/header1.jp2",
      media: "(max-width: 480px)",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 15
      }
    }), __jsx("source", {
      srcSet: "https://res.cloudinary.com/xianmalik/image/upload/w_768,h_50,c_fill,f_auto,q_auto/v1589059497/UltraCraft/Borders/header1.jp2",
      media: "(max-width: 768px)",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 15
      }
    }), __jsx("source", {
      srcSet: "https://res.cloudinary.com/xianmalik/image/upload/w_1080,h_95,c_fill,f_auto,q_auto/v1589059497/UltraCraft/Borders/header1.jp2",
      media: "(max-width: 1080px)",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 15
      }
    }), __jsx("img", {
      className: "dividerBottom",
      src: "https://res.cloudinary.com/xianmalik/image/upload/w_1871,h_95,c_fill,f_auto,q_auto/v1589138371/UltraCraft/Borders/header1.png",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 15
      }
    }))), __jsx("section", {
      id: "Section2",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 11
      }
    }, __jsx("div", {
      className: "container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "row column-height",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 15
      }
    }, __jsx("div", {
      className: "col-6 col-md-6",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 17
      }
    }, __jsx(react_lazyload__WEBPACK_IMPORTED_MODULE_3___default.a, {
      offset: 50,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 19
      }
    }, __jsx("picture", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 21
      }
    }, __jsx("source", {
      srcSet: "https://res.cloudinary.com/xianmalik/image/upload/w_450,h_300,c_fill,f_auto,q_auto/v1589059497/UltraCraft/uc_introduction.jp2",
      media: "(max-width: 480px)",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 23
      }
    }), __jsx("source", {
      srcSet: "https://res.cloudinary.com/xianmalik/image/upload/w_768,h_320,c_fill,f_auto,q_auto/v1589059497/UltraCraft/uc_introduction.jp2",
      media: "(max-width: 768px)",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 23
      }
    }), __jsx("source", {
      srcSet: "https://res.cloudinary.com/xianmalik/image/upload/w_440,h_400,c_fill,f_auto,q_auto/v1589059497/UltraCraft/uc_introduction.jp2",
      media: "(max-width: 1080px)",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 23
      }
    }), __jsx("img", {
      src: "https://res.cloudinary.com/xianmalik/image/upload/w_540,h_450,c_fill,f_auto,q_auto/v1589059497/UltraCraft/uc_introduction.jp2",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 23
      }
    })))), __jsx("div", {
      className: "col-6 col-md-6",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 17
      }
    }, __jsx("h5", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 19
      }
    }, "INTRODUCTION"), __jsx("h2", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 19
      }
    }, "What Is... ", __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 32
      }
    }), "UltraCraft?"), __jsx("h6", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 19
      }
    }, "A Survival & SkyBlock Server"), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 19
      }
    }, "Started back in October 2019, Ultracraft was founded by four of Minecraft Enthusiasts who are eager enough to start their own community of players. Main goal of UltraCraft till now is to provide lag free, toxicity free community to the players of Bangladesh."), __jsx("a", {
      href: "#",
      className: "btn-effect btn-white-bg effect-slash",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 19
      }
    }, __jsx("div", {
      className: "effect-inner",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 21
      }
    }, __jsx("span", {
      className: "effect-l",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 23
      }
    }, __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 50
      }
    }, "Learn More")), __jsx("span", {
      className: "effect-r",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 23
      }
    }, __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 50
      }
    }, "Learn More")), __jsx("span", {
      className: "effect-shade",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 23
      }
    }, __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 54
      }
    }, "Learn More"))))))), __jsx("picture", {
      className: "dividerBottom",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 13
      }
    }, __jsx("source", {
      srcSet: "https://res.cloudinary.com/xianmalik/image/upload/w_480,h_50,c_fill,f_auto,q_auto/v1589059497/UltraCraft/Borders/top_dark.jp2",
      media: "(max-width: 480px)",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 15
      }
    }), __jsx("source", {
      srcSet: "https://res.cloudinary.com/xianmalik/image/upload/w_768,h_50,c_fill,f_auto,q_auto/v1589059497/UltraCraft/Borders/top_dark.jp2",
      media: "(max-width: 768px)",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 15
      }
    }), __jsx("source", {
      srcSet: "https://res.cloudinary.com/xianmalik/image/upload/w_1080,h_95,c_fill,f_auto,q_auto/v1589059497/UltraCraft/Borders/top_dark.jp2",
      media: "(max-width: 1080px)",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 15
      }
    }), __jsx("img", {
      className: "dividerBottom",
      src: "https://res.cloudinary.com/xianmalik/image/upload/w_1871,h_95,c_fill,f_auto,q_auto/v1589138371/UltraCraft/Borders/top_dark.png",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 15
      }
    }))), __jsx(_components_footer__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 11
      }
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Bans);

/***/ }),

/***/ 5:
/*!*****************************!*\
  !*** multi ./pages/bans.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\wamp64\www\ultracraft\pages\bans.js */"./pages/bans.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-lazyload":
/*!*********************************!*\
  !*** external "react-lazyload" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-lazyload");

/***/ })

/******/ });
//# sourceMappingURL=bans.js.map