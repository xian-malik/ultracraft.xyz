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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("RNiq");


/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "RNiq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// CONCATENATED MODULE: ./components/modules/effectslash.module.js
var __jsx = external_react_default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class effectslash_module_EffectSlash extends external_react_default.a.Component {
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
      active: this.props.active
    }, __jsx("div", {
      className: "effect-inner"
    }, __jsx("span", {
      className: "effect-l"
    }, __jsx("span", null, title)), __jsx("span", {
      className: "effect-r"
    }, __jsx("span", null, title)), __jsx("span", {
      className: "effect-shade"
    }, __jsx("span", null, title))));
  }

}

/* harmony default export */ var effectslash_module = (effectslash_module_EffectSlash);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// CONCATENATED MODULE: ./components/header.js
var header_jsx = external_react_default.a.createElement;




class header_Header extends external_react_default.a.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const router = Object(router_["useRouter"])();
    return header_jsx("header", {
      id: "header"
    }, header_jsx("div", {
      className: "header"
    }, header_jsx("div", {
      className: "container"
    }, header_jsx("div", {
      className: "row"
    }, header_jsx("div", {
      className: "col-3"
    }, header_jsx("div", {
      className: "logo"
    }, header_jsx("img", {
      src: "/images/UltraCraft.png",
      alt: "UltraCraft",
      hidden: true
    }), header_jsx("img", {
      src: "/images/logo.png",
      alt: "UltraCraft",
      hidden: true
    }), header_jsx("h1", {
      className: "logo-text"
    }, "UltraCraft"))), header_jsx("div", {
      className: "col-9"
    }, header_jsx("nav", {
      className: "navbar"
    }, header_jsx("ul", {
      className: "navbar-nav text-right"
    }, header_jsx("li", null, header_jsx(effectslash_module, {
      href: "/",
      title: "Home",
      active: "true"
    })), header_jsx("li", null, header_jsx(effectslash_module, {
      href: "/calender",
      title: "Calender"
    })), header_jsx("li", null, header_jsx(effectslash_module, {
      href: "/punishments",
      title: "Punishments"
    })), header_jsx("li", null, header_jsx(effectslash_module, {
      href: "/resources",
      title: "Resources"
    })), header_jsx("li", null, header_jsx(effectslash_module, {
      href: "/support",
      title: "Support"
    })), header_jsx("li", null, header_jsx(effectslash_module, {
      href: "/store",
      title: "Store"
    })), header_jsx("li", {
      active: "true"
    }, header_jsx(effectslash_module, {
      href: "/login",
      title: "Login",
      extra: "btn-effect"
    })))))))));
  }

}

/* harmony default export */ var header = (header_Header);
// CONCATENATED MODULE: ./components/footer.js

var footer_jsx = external_react_default.a.createElement;

class footer_Footer extends external_react_default.a.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return footer_jsx("footer", null, footer_jsx("img", {
      src: "images/bottom_dark.png",
      className: "dividerTop"
    }), footer_jsx("div", {
      className: "container"
    }, footer_jsx("div", {
      className: "row"
    }, footer_jsx("div", {
      className: "col-4"
    }, footer_jsx("h3", {
      className: "footer-logo"
    }, "UltraCraft"), footer_jsx("p", null, "Ultracraft is a Bangladeshi server")), footer_jsx("div", {
      className: "col-4"
    }), footer_jsx("div", {
      className: "col-4"
    }, footer_jsx("iframe", {
      src: "https://discordapp.com/widget?id=630088304901226506&theme=dark",
      width: "350",
      height: "400"
    })))));
  }

}

/* harmony default export */ var footer = (footer_Footer);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// CONCATENATED MODULE: ./pages/index.js

var pages_jsx = external_react_default.a.createElement;




class pages_HomePage extends external_react_default.a.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return pages_jsx("div", null, pages_jsx(head_default.a, null, pages_jsx("title", null, "UltraCraft")), pages_jsx("div", {
      className: "page-wrapper"
    }, pages_jsx(header, null), pages_jsx("main", null, pages_jsx("section", {
      id: "Slider"
    }, pages_jsx("div", {
      id: "particles-js"
    }), pages_jsx("picture", {
      className: "image-bg",
      style: {
        opacity: .5
      }
    }, pages_jsx("source", {
      srcset: "https://res.cloudinary.com/xianmalik/image/upload/w_768,h_768,c_fill,f_auto,q_auto/v1589059497/UltraCraft/home-bg_f2hhbg.jp2",
      media: "(max-width: 768px)"
    }), pages_jsx("source", {
      srcset: "https://res.cloudinary.com/xianmalik/image/upload/w_1080,h_768,c_fill,f_auto,q_auto/v1589059497/UltraCraft/home-bg_f2hhbg.jp2",
      media: "(max-width: 1080px)"
    }), pages_jsx("img", {
      src: "https://res.cloudinary.com/xianmalik/image/upload/c_fill,f_auto,q_auto/v1589059497/UltraCraft/home-bg_f2hhbg.jp2",
      className: "image-bg"
    })), pages_jsx("div", {
      className: "container"
    }, pages_jsx("div", {
      className: "row"
    }, pages_jsx("div", {
      className: "col-12"
    }, pages_jsx("div", {
      style: {
        margin: '0 0 5% 0'
      }
    }, pages_jsx("h3", {
      style: {
        margin: 0
      }
    }, "Survival ", pages_jsx("span", null, "//"), " Skyblock ", pages_jsx("span", null, "//"), " Skywars"), pages_jsx("h1", null, "UltraCrafT"))), pages_jsx("div", {
      className: "col-12"
    }, pages_jsx("h3", {
      className: "slider-playercount"
    }, "Join ", pages_jsx("span", {
      className: "player-count",
      "data-ip": "play.ultracraft.xyz",
      "data-port": "25582"
    }, "0"), " other players"), pages_jsx("a", {
      href: "#",
      className: "server-ip btn-effect btn-secondary effect-slash"
    }, pages_jsx("div", {
      className: "effect-inner"
    }, pages_jsx("span", {
      className: "effect-l"
    }, pages_jsx("span", null, pages_jsx("small", null, "play"), ".UltraCraft.", pages_jsx("small", null, "xyz"))), pages_jsx("span", {
      className: "effect-r"
    }, pages_jsx("span", null, pages_jsx("small", null, "play"), ".UltraCraft.", pages_jsx("small", null, "xyz"))), pages_jsx("span", {
      className: "effect-shade"
    }, pages_jsx("span", null, pages_jsx("small", null, "play"), ".UltraCraft.", pages_jsx("small", null, "xyz")))))))), pages_jsx("img", {
      src: "images/header1.png",
      className: "dividerBottom"
    })), pages_jsx("section", {
      id: "Section2"
    }, pages_jsx("div", {
      className: "container"
    }, pages_jsx("div", {
      className: "row column-height"
    }, pages_jsx("div", {
      className: "col-6 col-md-6"
    }, pages_jsx("img", {
      className: "image-responsive",
      src: "images/section1.png"
    })), pages_jsx("div", {
      className: "col-6 col-md-6"
    }, pages_jsx("h5", null, "INTRODUCTION"), pages_jsx("h2", null, "What Is... UltraCraft?"), pages_jsx("h6", null, "A Survival & SkyBlock Server"), pages_jsx("p", null, "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book."), pages_jsx("a", {
      href: "#",
      className: "btn-effect btn-white-bg effect-slash"
    }, pages_jsx("div", {
      className: "effect-inner"
    }, pages_jsx("span", {
      className: "effect-l"
    }, pages_jsx("span", null, "Learn More")), pages_jsx("span", {
      className: "effect-r"
    }, pages_jsx("span", null, "Learn More")), pages_jsx("span", {
      className: "effect-shade"
    }, pages_jsx("span", null, "Learn More"))))))), pages_jsx("img", {
      src: "images/top_dark.png",
      className: "dividerBottom"
    })), pages_jsx("section", {
      id: "Section3"
    }, pages_jsx("div", {
      className: "container"
    }, pages_jsx("div", {
      className: "row column-height clearfix"
    }, pages_jsx("div", {
      className: "col-6 col-md-6 text-right"
    }, pages_jsx("h5", null, "GAMEMODES"), pages_jsx("h2", null, "Survival"), pages_jsx("h6", null, "An Enhanced Survival Experience"), pages_jsx("p", null, "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.")), pages_jsx("div", {
      className: "col-6 col-md-6"
    }, pages_jsx("img", {
      className: "image-responsive",
      src: "images/survival.jpg",
      alt: "Survival"
    }))), pages_jsx("br", null), pages_jsx("div", {
      className: "row column-height"
    }, pages_jsx("div", {
      className: "col-6 col-md-6"
    }, pages_jsx("img", {
      className: "image-responsive",
      src: "images/skyblock.jpg",
      alt: "Skyblock"
    })), pages_jsx("div", {
      className: "col-6 col-md-6"
    }, pages_jsx("h5", null, "GAMEMODES"), pages_jsx("h2", null, "SkyBlock"), pages_jsx("h6", null, "Classic Skyblock (Currently Offline)"), pages_jsx("p", null, "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.")))))), pages_jsx(footer, null)));
  }

}

/* harmony default export */ var pages = __webpack_exports__["default"] = (pages_HomePage);

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });