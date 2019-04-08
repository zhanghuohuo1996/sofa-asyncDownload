module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _printPage_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PrintPage", function() { return _printPage_index__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _pageBreak_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PageBreak", function() { return _pageBreak_index__WEBPACK_IMPORTED_MODULE_1__["default"]; });






/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_to_print__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var react_to_print__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_to_print__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_4__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var PreviewBox = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: 'printPage__PreviewBox'
})(['height: 100%;box-sizing: content-box;background-color: #f5f5f5;', ''], function (props) {
  return props.pageWidth && Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["css"])(['width: ', 'px;padding: 0 calc((100% - ', 'px)/2);'], props.pageWidth, props.pageWidth);
});

var ActionBar = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: 'printPage__ActionBar'
})(['', 'height: 50px;display: flex;justify-content: flex-end;align-items: center;position: fixed;z-index: 1;background: #f4f4f4;box-shadow: 0 3px 5px #ccc;'], function (props) {
  return props.pageWidth && Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["css"])(['width: ', 'px;'], props.pageWidth);
});

var Button = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.button.withConfig({
  displayName: 'printPage__Button'
})(['line-height: 1.2;display: inline-block;font-weight: 400;text-align: center;touch-action: manipulation;cursor: pointer;background-image: none;border: 1px solid transparent;white-space: nowrap;padding: 0 15px;font-size: 12px;border-radius: 4px;height: 28px;user-select: none;transition: all .3s cubic-bezier(.645,.045,.355,1);color: rgba(0,0,0,.65);background-color: #fff;border-color: #d9d9d9;outline: none;margin-right: 10px;']);

var PrintPage = function (_React$Component) {
  _inherits(PrintPage, _React$Component);

  function PrintPage() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, PrintPage);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = PrintPage.__proto__ || Object.getPrototypeOf(PrintPage)).call.apply(_ref, [this].concat(args))), _this), _this.printMethod = function () {
      document.getElementById('sofa-print-button').click();
    }, _this.handlePrint = function () {
      _this.printMethod();
    }, _this.handleGoBack = function () {
      _this.props.goBack();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(PrintPage, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          previewStyle = _props.previewStyle,
          pageWidth = _props.pageWidth,
          showGoBackButton = _props.showGoBackButton;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        'div',
        null,
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_to_print__WEBPACK_IMPORTED_MODULE_2___default.a, {
          trigger: function trigger() {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('a', { style: { visibility: 'hidden' }, id: 'sofa-print-button', href: '#' });
          },
          content: function content() {
            return _this2.componentRef;
          },
          onAfterPrint: this.props.onAfterPrint,
          onBeforePrint: this.props.onBeforePrint
        }),
        previewStyle ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          PreviewBox,
          { pageWidth: pageWidth },
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            ActionBar,
            { pageWidth: pageWidth },
            showGoBackButton && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              Button,
              { onClick: this.handleGoBack },
              '\u8FD4\u56DE'
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              Button,
              { onClick: this.handlePrint },
              '\u6253\u5370'
            )
          ),
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('div', { style: { height: '53px' } }),
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'div',
            { ref: function ref(el) {
                return _this2.componentRef = el;
              } },
            this.props.children
          )
        ) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          'div',
          { ref: function ref(el) {
              return _this2.componentRef = el;
            } },
          this.props.children
        )
      );
    }
  }]);

  return PrintPage;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

PrintPage.propTypes = {
  previewStyle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  pageWidth: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  goBack: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onBeforePrint: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onAfterPrint: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  showGoBackButton: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
PrintPage.defaultProps = {
  previewStyle: false,
  pageWidth: 764,
  showGoBackButton: true,
  goBack: undefined,
  onBeforePrint: undefined,
  onAfterPrint: undefined
};

/* harmony default export */ __webpack_exports__["default"] = (PrintPage);

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-to-print");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_1__);



var PageBreak = function PageBreak() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('div', { className: 'sofa-print-page-break' });
};

/* harmony default export */ __webpack_exports__["default"] = (PageBreak);

/***/ })
/******/ ]);