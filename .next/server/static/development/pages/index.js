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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
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
var _jsxFileName = "E:\\Workspace\\ultracraft.xyz\\components\\footer.js";

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
var _jsxFileName = "E:\\Workspace\\ultracraft.xyz\\components\\header.js";
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
    }, "UltracrafT"))), __jsx("div", {
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
var _jsxFileName = "E:\\Workspace\\ultracraft.xyz\\components\\modules\\effectslash.module.js";
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

/***/ "./components/particle.js":
/*!********************************!*\
  !*** ./components/particle.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_particles_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-particles-js */ "react-particles-js");
/* harmony import */ var react_particles_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_particles_js__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "E:\\Workspace\\ultracraft.xyz\\components\\particle.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class ParticleView extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return __jsx(react_particles_js__WEBPACK_IMPORTED_MODULE_1___default.a, {
      className: "particles",
      params: {
        "particles": {
          "number": {
            "value": 355,
            "density": {
              "enable": true,
              "value_area": 789.1476416322727
            }
          },
          "color": {
            "value": "#ffffff"
          },
          "shape": {
            "type": "circle",
            "stroke": {
              "width": 0,
              "color": "#000000"
            },
            "polygon": {
              "nb_sides": 5
            },
            "image": {
              "src": "img/github.svg",
              "width": 100,
              "height": 100
            }
          },
          "opacity": {
            "value": 0.48927153781200905,
            "random": false,
            "anim": {
              "enable": true,
              "speed": 0.2,
              "opacity_min": 0,
              "sync": false
            }
          },
          "size": {
            "value": 2,
            "random": true,
            "anim": {
              "enable": true,
              "speed": 2,
              "size_min": 0,
              "sync": false
            }
          },
          "line_linked": {
            "enable": false,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
          },
          "move": {
            "enable": true,
            "speed": 0.2,
            "direction": "none",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
              "enable": false,
              "rotateX": 600,
              "rotateY": 1200
            }
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": {
              "enable": true,
              "mode": "bubble"
            },
            "onclick": {
              "enable": true,
              "mode": "push"
            },
            "resize": true
          },
          "modes": {
            "grab": {
              "distance": 400,
              "line_linked": {
                "opacity": 1
              }
            },
            "bubble": {
              "distance": 83.91608391608392,
              "size": 1,
              "duration": 3,
              "opacity": 1,
              "speed": 3
            },
            "repulse": {
              "distance": 200,
              "duration": 0.4
            },
            "push": {
              "particles_nb": 4
            },
            "remove": {
              "particles_nb": 2
            }
          }
        },
        "retina_detect": true
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 7
      }
    });
  }

}

/* harmony default export */ __webpack_exports__["default"] = (ParticleView);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
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
/* harmony import */ var _components_particle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/particle */ "./components/particle.js");
/* harmony import */ var _components_modules_effectslash_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/modules/effectslash.module */ "./components/modules/effectslash.module.js");
var _jsxFileName = "E:\\Workspace\\ultracraft.xyz\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








class HomePage extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      ip: "play.ultracraft.xyz",
      port: 25582,
      playerCount: "N/A",
      ipText: __jsx("span", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 15
        }
      }, __jsx("small", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 21
        }
      }, "play"), ".UltraCraft.", __jsx("small", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 52
        }
      }, "xyz"))
    };
  }

  componentDidMount() {
    const {
      ip,
      port
    } = this.state;
    axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('https://mcapi.us/server/status?ip=' + ip + '&port=' + port + '', {
      'Content-Type': 'application/json'
    }).then(response => {
      this.setState({
        playerCount: response.data.online ? response.data.players.now : "N/A"
      });
    });
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  handleIpCopy(e) {
    this.setState({
      ipText: __jsx("span", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 28
        }
      }, "IP Copied!")
    });
    navigator.clipboard.writeText(this.state.ip);
    this.timeout = setTimeout(() => {
      this.setState({
        ipText: __jsx("span", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 30
          }
        }, __jsx("small", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 36
          }
        }, "play"), ".UltraCraft.", __jsx("small", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 67
          }
        }, "xyz"))
      });
    }, 800);
  }

  render() {
    return __jsx("main", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 7
      }
    }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }
    }, __jsx("title", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 11
      }
    }, "UltraCraft")), __jsx("div", {
      className: "page-wrapper",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }
    }, __jsx(_components_header__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 11
      }
    }), __jsx("section", {
      id: "Slider",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 13
      }
    }, __jsx(_components_particle__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 15
      }
    }), __jsx("picture", {
      className: "image-bg",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 15
      }
    }, __jsx("source", {
      srcSet: "https://res.cloudinary.com/xianmalik/image/upload/w_480,h_768,c_fill,f_auto,q_auto/v1589059497/UltraCraft/home_background.jpg",
      media: "(max-width: 480px)",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 17
      }
    }), __jsx("source", {
      srcSet: "https://res.cloudinary.com/xianmalik/image/upload/w_768,h_768,c_fill,f_auto,q_auto/v1589059497/UltraCraft/home_background.jpg",
      media: "(max-width: 768px)",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 17
      }
    }), __jsx("source", {
      srcSet: "https://res.cloudinary.com/xianmalik/image/upload/w_1080,h_768,c_fill,f_auto,q_auto/v1589059497/UltraCraft/home_background.jpg",
      media: "(max-width: 1080px)",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 17
      }
    }), __jsx("img", {
      src: "https://res.cloudinary.com/xianmalik/image/upload/c_fill,f_auto,q_auto/v1589059497/UltraCraft/home_background.jpg",
      className: "image-bg",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 17
      }
    })), __jsx("div", {
      className: "container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 15
      }
    }, __jsx("div", {
      className: "row",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "col-12",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 19
      }
    }, __jsx("div", {
      style: {
        margin: '0 0 5% 0'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 21
      }
    }, __jsx("h3", {
      style: {
        margin: 0
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 23
      }
    }, "Survival ", __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 34
      }
    }, "//"), " Skyblock ", __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 59
      }
    }, "//"), " Skywars"), __jsx("h1", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 23
      }
    }, "UltraCrafT"))), __jsx("div", {
      className: "col-12",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 19
      }
    }, __jsx("h3", {
      className: "slider-playercount",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 21
      }
    }, "Join ", this.state.playerCount, " other players"), __jsx("a", {
      href: "#",
      className: "server-ip btn-effect btn-secondary effect-slash",
      onClick: () => this.handleIpCopy(),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 21
      }
    }, __jsx("div", {
      className: "effect-inner",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 23
      }
    }, __jsx("span", {
      className: "effect-l",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 25
      }
    }, this.state.ipText), __jsx("span", {
      className: "effect-r",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 25
      }
    }, this.state.ipText), __jsx("span", {
      className: "effect-shade",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 25
      }
    }, this.state.ipText)))))), __jsx("picture", {
      className: "dividerBottom",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 15
      }
    }, __jsx("source", {
      srcSet: "https://res.cloudinary.com/xianmalik/image/upload/w_480,h_50,c_fill,f_auto,q_auto/v1589059497/UltraCraft/Borders/header1.jp2",
      media: "(max-width: 480px)",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 17
      }
    }), __jsx("source", {
      srcSet: "https://res.cloudinary.com/xianmalik/image/upload/w_768,h_50,c_fill,f_auto,q_auto/v1589059497/UltraCraft/Borders/header1.jp2",
      media: "(max-width: 768px)",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 17
      }
    }), __jsx("source", {
      srcSet: "https://res.cloudinary.com/xianmalik/image/upload/w_1080,h_95,c_fill,f_auto,q_auto/v1589059497/UltraCraft/Borders/header1.jp2",
      media: "(max-width: 1080px)",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 17
      }
    }), __jsx("img", {
      className: "dividerBottom",
      src: "https://res.cloudinary.com/xianmalik/image/upload/w_1871,h_95,c_fill,f_auto,q_auto/v1589138371/UltraCraft/Borders/header1.png",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 17
      }
    }))), __jsx("section", {
      id: "Section2",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 15
      }
    }, __jsx("div", {
      className: "row column-height",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "col-6 col-md-6",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 19
      }
    }, __jsx(react_lazyload__WEBPACK_IMPORTED_MODULE_3___default.a, {
      offset: 50,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 21
      }
    }, __jsx("picture", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 23
      }
    }, __jsx("source", {
      srcSet: "https://res.cloudinary.com/xianmalik/image/upload/w_450,h_300,c_fill,f_auto,q_auto/v1589059497/UltraCraft/uc_introduction.jp2",
      media: "(max-width: 480px)",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 25
      }
    }), __jsx("source", {
      srcSet: "https://res.cloudinary.com/xianmalik/image/upload/w_768,h_320,c_fill,f_auto,q_auto/v1589059497/UltraCraft/uc_introduction.jp2",
      media: "(max-width: 768px)",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 25
      }
    }), __jsx("source", {
      srcSet: "https://res.cloudinary.com/xianmalik/image/upload/w_440,h_400,c_fill,f_auto,q_auto/v1589059497/UltraCraft/uc_introduction.jp2",
      media: "(max-width: 1080px)",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 25
      }
    }), __jsx("img", {
      src: "https://res.cloudinary.com/xianmalik/image/upload/w_540,h_450,c_fill,f_auto,q_auto/v1589059497/UltraCraft/uc_introduction.jpg",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 25
      }
    })))), __jsx("div", {
      className: "col-6 col-md-6",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 19
      }
    }, __jsx("h5", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 21
      }
    }, "INTRODUCTION"), __jsx("h2", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 21
      }
    }, "What Is... ", __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 34
      }
    }), "UltraCraft?"), __jsx("h6", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 21
      }
    }, "A Survival & SkyBlock Server"), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 21
      }
    }, "Started back in October 2019, Ultracraft was founded by four of Minecraft Enthusiasts who are eager enough to start their own community of players. Main goal of UltraCraft till now is to provide lag free, toxicity free community to the players of Bangladesh."), __jsx(_components_modules_effectslash_module__WEBPACK_IMPORTED_MODULE_7__["default"], {
      href: "/#",
      title: "Learn More",
      extra: "btn-effect btn-white-bg",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 21
      }
    })))), __jsx("picture", {
      className: "dividerBottom",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 15
      }
    }, __jsx("source", {
      srcSet: "https://res.cloudinary.com/xianmalik/image/upload/w_480,h_50,c_fill,f_auto,q_auto/v1589059497/UltraCraft/Borders/top_dark.jp2",
      media: "(max-width: 480px)",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 17
      }
    }), __jsx("source", {
      srcSet: "https://res.cloudinary.com/xianmalik/image/upload/w_768,h_50,c_fill,f_auto,q_auto/v1589059497/UltraCraft/Borders/top_dark.jp2",
      media: "(max-width: 768px)",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 17
      }
    }), __jsx("source", {
      srcSet: "https://res.cloudinary.com/xianmalik/image/upload/w_1080,h_95,c_fill,f_auto,q_auto/v1589059497/UltraCraft/Borders/top_dark.jp2",
      media: "(max-width: 1080px)",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 17
      }
    }), __jsx("img", {
      className: "dividerBottom",
      src: "https://res.cloudinary.com/xianmalik/image/upload/w_1871,h_95,c_fill,f_auto,q_auto/v1589138371/UltraCraft/Borders/top_dark.png",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 17
      }
    }))), __jsx("section", {
      id: "Section3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 15
      }
    }, __jsx(react_lazyload__WEBPACK_IMPORTED_MODULE_3___default.a, {
      offset: 50,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "row column-height clearfix",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 19
      }
    }, __jsx("div", {
      className: "col-6 col-md-6 col-push-6",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 21
      }
    }, __jsx("picture", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 23
      }
    }, __jsx("source", {
      srcSet: "https://res.cloudinary.com/xianmalik/image/upload/w_450,h_300,c_fill,f_auto,q_auto/v1589059497/UltraCraft/uc_survival.jp2",
      media: "(max-width: 480px)",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 25
      }
    }), __jsx("source", {
      srcSet: "https://res.cloudinary.com/xianmalik/image/upload/w_768,h_320,c_fill,f_auto,q_auto/v1589059497/UltraCraft/uc_survival.jp2",
      media: "(max-width: 768px)",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 25
      }
    }), __jsx("source", {
      srcSet: "https://res.cloudinary.com/xianmalik/image/upload/w_440,h_350,c_fill,f_auto,q_auto/v1589059497/UltraCraft/uc_survival.jp2",
      media: "(max-width: 1080px)",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 25
      }
    }), __jsx("img", {
      src: "https://res.cloudinary.com/xianmalik/image/upload/w_540,h_350,c_fill,f_auto,q_auto/v1589059497/UltraCraft/uc_survival.jp2",
      alt: "Survival",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 25
      }
    }))), __jsx("div", {
      className: "col-6 col-md-6 col-pull-6 text-right",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 21
      }
    }, __jsx("h5", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 23
      }
    }, "GAMEMODES"), __jsx("h2", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 23
      }
    }, "Survival"), __jsx("h6", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 23
      }
    }, "An Enhanced Survival Experience"), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 23
      }
    }, "Survival mode is one of the main game modes in Minecraft. Players must collect resources, build structures, battle mobs, eat, and explore the world in an effort to thrive and survive."), __jsx(_components_modules_effectslash_module__WEBPACK_IMPORTED_MODULE_7__["default"], {
      href: "/gamemode/survival",
      title: "Survival Guide",
      extra: "btn-effect btn-white-bg",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 23
      }
    })))), __jsx(react_lazyload__WEBPACK_IMPORTED_MODULE_3___default.a, {
      offset: 50,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 17
      }
    }, __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 19
      }
    }), __jsx("div", {
      className: "row column-height",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144,
        columnNumber: 19
      }
    }, __jsx("div", {
      className: "col-6 col-md-6",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145,
        columnNumber: 21
      }
    }, __jsx("picture", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 23
      }
    }, __jsx("source", {
      srcSet: "https://res.cloudinary.com/xianmalik/image/upload/w_450,h_300,c_fill,f_auto,q_auto/v1589059497/UltraCraft/uc_skyblock.jp2",
      media: "(max-width: 480px)",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 147,
        columnNumber: 25
      }
    }), __jsx("source", {
      srcSet: "https://res.cloudinary.com/xianmalik/image/upload/w_768,h_320,c_fill,f_auto,q_auto/v1589059497/UltraCraft/uc_skyblock.jp2",
      media: "(max-width: 768px)",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148,
        columnNumber: 25
      }
    }), __jsx("source", {
      srcSet: "https://res.cloudinary.com/xianmalik/image/upload/w_440,h_350,c_fill,f_auto,q_auto/v1589059497/UltraCraft/uc_skyblock.jp2",
      media: "(max-width: 1080px)",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 149,
        columnNumber: 25
      }
    }), __jsx("img", {
      src: "https://res.cloudinary.com/xianmalik/image/upload/w_540,h_350,c_fill,f_auto,q_auto/v1589059497/UltraCraft/uc_skyblock.jp2",
      alt: "Survival",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150,
        columnNumber: 25
      }
    }))), __jsx("div", {
      className: "col-6 col-md-6",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 21
      }
    }, __jsx("h5", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154,
        columnNumber: 23
      }
    }, "GAMEMODES"), __jsx("h2", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155,
        columnNumber: 23
      }
    }, "SkyBlock"), __jsx("h6", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158,
        columnNumber: 23
      }
    }, "Enhanced Skyblock ", __jsx("small", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158,
        columnNumber: 45
      }
    }, "(Coming Soon)")), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 159,
        columnNumber: 23
      }
    }, "SkyBlock is a survival gamemode where players live and build on a floating island. The goal of the map is to survive without cheating, expand your island, grow your own food and thrive."), __jsx(_components_modules_effectslash_module__WEBPACK_IMPORTED_MODULE_7__["default"], {
      href: "/gamemode/skyblock",
      title: "SkyBlock Guide",
      extra: "btn-effect btn-white-bg",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162,
        columnNumber: 23
      }
    })))))), __jsx(_components_footer__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168,
        columnNumber: 11
      }
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (HomePage);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Workspace\ultracraft.xyz\pages\index.js */"./pages/index.js");


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

/***/ }),

/***/ "react-particles-js":
/*!*************************************!*\
  !*** external "react-particles-js" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-particles-js");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map