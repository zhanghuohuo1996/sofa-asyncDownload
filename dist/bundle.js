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
/* harmony import */ var _AsyncDownload_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AsyncDownload", function() { return _AsyncDownload_index__WEBPACK_IMPORTED_MODULE_0__["default"]; });





/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_3__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var styles = {
  'list_item_badge': {
    width: '16px',
    height: '16px',
    borderRadius: '10px',
    color: '#fff',
    fontWeight: 'bold',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  'waiting_download': {
    color: '#999'
  },
  'download_link': {
    cursor: 'pointer'
  }
};
var IconImage = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: 'AsyncDownload__IconImage'
})(['background-image: url(\'data:image/png;base64,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\');width: 25px;height: 25px;display: inline-block;background-size: cover;cursor: pointer;']);
var ListMdoal = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: 'AsyncDownload__ListMdoal'
})(['max-height: 400px;min-height: 200px;position: absolute;top: 30px;z-index: 1000;background-color: #fff;box-shadow: 0px 0px 5px #999;overflow: auto;user-select:none;']);
var ListItem = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: 'AsyncDownload__ListItem'
})(['width: 100%;display: flex;flex-direction: row;justify-content: space-between;padding: 5px 5px;border-bottom: 1px solid #f0f0f0;']);
var BlankContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: 'AsyncDownload__BlankContainer'
})(['width: 100%;height: 200px;display: flex;justify-content: center;align-items: center;color: #999;']);

var AsyncDownload = function (_React$Component) {
  _inherits(AsyncDownload, _React$Component);

  function AsyncDownload() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, AsyncDownload);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AsyncDownload.__proto__ || Object.getPrototypeOf(AsyncDownload)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      showList: false,
      result: []
    }, _this.fetchData = function (url, params) {
      console.log('fetchData');
      _this.setState({
        result: [{
          'file_name': '运单导出',
          'create_time': '2019-03-14',
          'status': 1,
          'donwload_template': 'https://baidu.com'
        }, {
          'file_name': '运单导出',
          'create_time': '2019-03-14',
          'status': 1,
          'donwload_template': ''
        }].reverse()
      });
    }, _this.handleClickIcon = function () {
      var _this$props = _this.props,
          url = _this$props.url,
          fields = _this$props.fields;

      !_this.state.showList && _this.fetchData(url, _this.props.urlParams);
      _this.setState({
        showList: !_this.state.showList
      });
    }, _this.handleDownloadFile = function (item) {
      var targetPathField = _this.props.targetPathField;

      window.location = item[targetPathField];
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(AsyncDownload, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      if (this.props.interval) {
        var timer = window.setInterval(function () {
          _this2.state.showList && _this2.fetchData(_this2.props.url, _this2.props.urlParams);
        }, this.props.interval);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var url = this.props.url;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        'div',
        { style: { position: 'relative' } },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconImage, { onClick: function onClick() {
            return _this3.handleClickIcon();
          } }),
        this.state.showList ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          ListMdoal,
          { style: { width: this.props.width, left: -this.props.width / 2 + 12 } },
          this.state.result.length ? this.state.result.map(function (item, itemIndex) {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              ListItem,
              { key: itemIndex },
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'span',
                { style: _extends({ backgroundColor: _this3.props.primaryColor }, styles.list_item_badge) },
                itemIndex + 1
              ),
              _this3.props.fields.map(function (field, index) {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  'span',
                  { key: index },
                  item[field]
                );
              }),
              item[_this3.props.targetPathField] ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'span',
                { style: _extends({ color: _this3.props.primaryColor }, styles.download_link), onClick: function onClick() {
                    return _this3.handleDownloadFile(item);
                  } },
                '\u4E0B\u8F7D\u5B8C\u6210'
              ) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'span',
                { style: styles.waiting_download },
                '\u7B49\u5F85\u4E0B\u8F7D'
              )
            );
          }) : null,
          !this.state.result.length ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            BlankContainer,
            null,
            '\u6682\u65E0\u4E0B\u8F7D'
          ) : null
        ) : null
      );
    }
  }]);

  return AsyncDownload;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

AsyncDownload.propTypes = {
  url: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  fields: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array.isRequired,
  targetPathField: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array.isRequired,
  primaryColor: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  width: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  urlParams: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  interval: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any
};
AsyncDownload.defaultProps = {
  url: '',
  fields: [],
  targetPathField: '',
  primaryColor: '#ff0000',
  width: 200,
  urlParams: {},
  interval: null
};

/* harmony default export */ __webpack_exports__["default"] = (AsyncDownload);

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

module.exports = require("styled-components");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })
/******/ ]);