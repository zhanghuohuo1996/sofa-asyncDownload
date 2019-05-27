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

/* harmony import */ var _PushDownloadQueue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pushDownloadQueue", function() { return _PushDownloadQueue__WEBPACK_IMPORTED_MODULE_1__["default"]; });






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
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
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
    color: '#999',
    display: 'flex',
    height: '20px',
    alignItems: 'center'
  },
  'download_link': {
    cursor: 'pointer',
    display: 'flex',
    height: '20px',
    alignItems: 'center'
  },
  'display_content': {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    display: 'flex',
    height: '20px',
    alignItems: 'center'
  }
};
var IconImage = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: 'AsyncDownload__IconImage'
})(['width: 25px;height: 25px;display: inline-block;background-size: cover;cursor: pointer;background-image: url(\'data:image/png;base64,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\');\n']);
var ListMdoal = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: 'AsyncDownload__ListMdoal'
})(['::-webkit-scrollbar {width: 3px;}max-height: 400px;min-height: 200px;position: absolute;top: 30px;z-index: 1000;background-color: #fefefe;box-shadow: 0px 2px 20px #999; -webkit-box-shadow:0px 2px 20px #999; box-shadow:0px 2px 20px #999;overflow: auto;user-select:none;']);
var ListItem = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: 'AsyncDownload__ListItem'
})(['width: 100%;display: flex;flex-direction: row;justify-content: space-between;padding: 0px 10px 0px 15px;// border-bottom: 1px solid #f0f0f0;\ncolor: #666;height: 24px;align-items: center;']);
var BlankContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: 'AsyncDownload__BlankContainer'
})(['width: 100%;height: 200px;display: flex;justify-content: center;align-items: center;color: #999;']);

var AsyncDownload = function (_React$Component) {
  _inherits(AsyncDownload, _React$Component);

  function AsyncDownload(props) {
    _classCallCheck(this, AsyncDownload);

    var _this = _possibleConstructorReturn(this, (AsyncDownload.__proto__ || Object.getPrototypeOf(AsyncDownload)).call(this, props));

    _this.state = {
      showList: false,
      result: [],
      timer: null
    };

    _this.fetchData = function (url, params) {
      var baseUrl = window.location.host;
      axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(url, baseUrl, {
        params: params
      }).then(function (response) {
        if (Array.isArray(response.data.data)) {
          var data = _this.props.maxCount ? response.data.data.reverse().slice(0, _this.props.maxCount) : response.data.data.reverse();
          _this.setState({
            result: data
          });
        }
      }).catch(function (error) {
        console.log(error);
      });
    };

    _this.handleClickIcon = function () {
      var _this$props = _this.props,
          url = _this$props.url,
          fields = _this$props.fields;

      !_this.state.showList && _this.fetchData(url, _this.props.urlParams);
      _this.setState({
        showList: !_this.state.showList
      });
    };

    _this.handleDownloadFile = function (item) {
      var targetPathField = _this.props.targetPathField;

      window.location = item[targetPathField];
    };

    return _this;
  }

  _createClass(AsyncDownload, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      if (this.props.interval) {
        this.setState({
          timer: window.setInterval(function () {
            _this2.state.showList && _this2.fetchData(_this2.props.url, _this2.props.urlParams);
          }, this.props.interval)
        });
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.setState({
        timer: null
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var url = this.props.url;

      var length = Object.keys(this.props.statusMap || {}).length - 1;
      var completeKey = Object.keys(this.props.statusMap || {})[length];
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        'div',
        { style: { position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' } },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconImage, { id: this.props.downloadListId, onClick: function onClick() {
            return _this3.handleClickIcon();
          } }),
        this.state.showList ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          ListMdoal,
          { id: this.props.downloadListId + '-listModal', style: { width: this.props.width, left: -this.props.width + 12 } },
          this.state.result.length ? this.state.result.map(function (item, itemIndex) {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              'div',
              { style: { display: 'flex', flexDirection: 'column' } },
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                ListItem,
                { key: itemIndex },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  'span',
                  { style: _extends({ backgroundColor: '#999' }, styles.list_item_badge) },
                  itemIndex + 1
                ),
                _this3.props.fields.map(function (field, index) {
                  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    'span',
                    { style: _extends({ width: (_this3.props.width - 30) / (_this3.props.fields.length + 1) }, styles.display_content), key: index },
                    item[field]
                  );
                }),
                item[_this3.props.statusField] == completeKey ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  'span',
                  { style: _extends({ color: _this3.props.successColor }, styles.download_link), onClick: function onClick() {
                      return _this3.handleDownloadFile(item);
                    } },
                  _this3.props.statusMap[item[_this3.props.statusField]]
                ) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  'span',
                  { style: styles.waiting_download },
                  _this3.props.statusMap[item[_this3.props.statusField]]
                )
              ),
              _this3.props.processField ? item[_this3.props.processField] ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'div',
                { style: { display: 'flex', flexDirection: 'row' } },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('div', { style: { width: (item[_this3.props.processField] || 0) + '%', height: 2, backgroundColor: _this3.props.successColor } }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('div', { style: { width: (100 - item[_this3.props.processField] || 0) + '%', height: 2, backgroundColor: '#f0f0f0' } })
              ) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('div', { style: { width: '100%', height: 2, backgroundColor: '#f0f0f0' } }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('div', { style: { width: '100%', height: 2, backgroundColor: '#f0f0f0' } })
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
  targetPathField: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  successColor: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  width: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  urlParams: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  interval: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,
  statusField: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  statusMap: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  maxCount: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  processField: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  downloadListId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
};
AsyncDownload.defaultProps = {
  url: '',
  fields: [],
  targetPathField: '',
  successColor: '#219040',
  width: 200,
  urlParams: {},
  interval: null,
  statusField: '',
  statusMap: {},
  maxCount: null,
  processField: '',
  downloadListId: ''
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
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return pushDownloadQueue; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Toast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);



function pushDownloadQueue(downloadListId, url) {
  var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var callDownloadList = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var successMessage = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '已加入下载队列';
  var errorMessage = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : '加入队列失败';

  if (!url || !downloadListId) {
    console.error('url和downloadListId为必传参数');
    return false;
  }
  var baseUrl = window.location.host;
  axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(url, baseUrl, {
    params: params
  }).then(function (response) {
    if (response.data.data) {
      _components_Toast__WEBPACK_IMPORTED_MODULE_1__["default"].success(successMessage);
      if (callDownloadList) {
        if (!document.getElementById(downloadListId + '-listModal')) {
          document.getElementById(downloadListId).click();
        }
      }
    } else {
      _components_Toast__WEBPACK_IMPORTED_MODULE_1__["default"].success(successMessage);
    }
  });
}

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _toast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9);
/* harmony import */ var _toast_less__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10);
/* harmony import */ var _toast_less__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_toast_less__WEBPACK_IMPORTED_MODULE_3__);





function createNotification() {
  var div = document.createElement('div');
  document.body.appendChild(div);
  var notification = react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_toast__WEBPACK_IMPORTED_MODULE_2__["default"], null), div);
  return {
    addNotice: function addNotice(notice) {
      return notification.addNotice(notice);
    },
    destroy: function destroy() {
      react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.unmountComponentAtNode(div);
      document.body.removeChild(div);
    }
  };
}

var notification = void 0;
var notice = function notice(type, content) {
  var duration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1600;
  var onClose = arguments[3];

  if (!notification) notification = createNotification();
  return notification.addNotice({ type: type, content: content, duration: duration, onClose: onClose });
};

/* harmony default export */ __webpack_exports__["default"] = ({
  info: function info(content, duration, onClose) {
    return notice('info', content, duration, onClose);
  },
  success: function success() {
    var content = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '操作成功';
    var duration = arguments[1];
    var onClose = arguments[2];

    return notice('success', content, duration, onClose);
  },
  error: function error(content, duration, onClose) {
    return notice('error', content, duration, onClose);
  },
  loading: function loading() {
    var content = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '加载中...';
    var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var onClose = arguments[2];

    return notice('loading', content, duration, onClose);
  }
});

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var Toast = function (_Component) {
  _inherits(Toast, _Component);

  function Toast() {
    _classCallCheck(this, Toast);

    var _this = _possibleConstructorReturn(this, (Toast.__proto__ || Object.getPrototypeOf(Toast)).call(this));

    _this.transitionTime = 300;
    _this.state = { notices: [] };
    _this.removeNotice = _this.removeNotice.bind(_this);
    return _this;
  }

  _createClass(Toast, [{
    key: 'getNoticeKey',
    value: function getNoticeKey() {
      var notices = this.state.notices;

      return 'notice-' + new Date().getTime() + '-' + notices.length;
    }
  }, {
    key: 'addNotice',
    value: function addNotice(notice) {
      var _this2 = this;

      var notices = this.state.notices;

      notice.key = this.getNoticeKey();
      // notices.push(notice);//展示所有的提示
      notices[0] = notice; //仅展示最后一个提示
      this.setState({ notices: notices });
      if (notice.duration > 0) {
        setTimeout(function () {
          _this2.removeNotice(notice.key);
        }, notice.duration);
      }
      return function () {
        _this2.removeNotice(notice.key);
      };
    }
  }, {
    key: 'removeNotice',
    value: function removeNotice(key) {
      var _this3 = this;

      var notices = this.state.notices;

      this.setState({
        notices: notices.filter(function (notice) {
          if (notice.key === key) {
            if (notice.onClose) setTimeout(notice.onClose, _this3.transitionTime);
            return false;
          }
          return true;
        })
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var notices = this.state.notices;

      var icons = {
        info: 'toast_info',
        success: 'toast_success',
        error: 'toast_error',
        loading: 'toast_loading'
      };
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        'div',
        { className: 'toast' },
        notices.map(function (notice) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'div',
            { className: 'toast_bg', key: notice.key },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              'div',
              { className: 'toast_box' },
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('div', { className: 'toast_icon ' + icons[notice.type] }),
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'div',
                { className: 'toast_text' },
                notice.content
              )
            )
          );
        })
      );
    }
  }]);

  return Toast;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Toast);

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(11);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(13)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)(false);
// Module
exports.push([module.i, ".toast {\n  position: fixed;\n  left: 0;\n  top: 0;\n  z-index: 999;\n  display: flex;\n  flex-direction: column;\n}\n.toast_bg {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.toast_box {\n  animation: bounceIn .3s .2s ease both;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background: rgba(0, 0, 0, 0.65);\n  border-radius: 6px;\n  color: #fff;\n  max-width: 45%;\n  -webkit-box-shadow: 0px 2px 20px #666666;\n  box-shadow: 0px 2px 20px #666666;\n}\n.toast_text {\n  text-align: center;\n  padding: 5px 10px;\n  padding-bottom: 10px;\n  font-size: 18px;\n  line-height: 20px;\n}\n.toast_icon {\n  margin-top: 10px;\n  width: 20px;\n  height: 20px;\n}\n.toast_loading {\n  -webkit-animation: loading 1s steps(12, end) infinite;\n  animation: loading 1s steps(12, end) infinite;\n  background: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAM1BMVEUAAAD///////////////////////////////////////////////////////////////+3leKCAAAAEHRSTlMAENCA8KAgsGDgQMCQUDBwhylaLQAAAL1JREFUOMu9U0kSwyAMK9jsS/T/1zZt2pgEZzq9RBeMZYRGDI/70bO5JptjrOAQVTonIJVK5bW2ma9A7VvpK8OdeQfbZectrDnyU+Oo0b68wGK0muDPdxpOciaizq5pkAgiIPAoew2rBVNYZoM2YHbZDNKz/2Ogam3ff5gMEL8wisfh2KKZiFiGWFkk1B7NSbhNQFy4M2+PghbODNsg7y8THM2njiy8gBgcaEUA9GgNJbxh6fJv+NxiFvYmPAFtCQZNK1qZIAAAAABJRU5ErkJggg==\") no-repeat;\n  background-size: 100%;\n}\n.toast_success {\n  background: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAM1BMVEUAAAD///////////////////////////////////////////////////////////////+3leKCAAAAEHRSTlMA8DAQ0GBP4LCggMBwIJBAIttdjAAAAINJREFUOMvdkUsOwyAMBbH5hUCauf9pK1SlohF438x2LPn52f09+8vUfiNb/gighj8FouEjYCUoQDXiBSD7pdcMiK7XC9wCFmlDO3T20Scgx287ne13pwDU89NOJ3g3maCmJDANqIGRtLj8oi1ed1GMdmcB7wXIYX8QdQZJiM5Em3smbyVICDCOrCqSAAAAAElFTkSuQmCC\") no-repeat;\n  background-size: 100%;\n}\n.toast_error {\n  background: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAMFBMVEUAAAD///////////////////////////////////////////////////////////87TQQwAAAAD3RSTlMA0BDAMODwUKBgsCCAQJClzVPvAAAA0UlEQVQoz2MgErAclv9o44Dgc8b/B4KvBTA+t/3XdgeWivjPG6ACbl8ngNXlp0AN+L8IwtD6DzFm2w+Y3v5sMGW/ACbA9Rms9ZsCTIApH2QR608GhoUKQJ4xA8P8AKCAP5CwF2JgUPwIlPwCFDj/AMRRYJIHCnL8AZkJ1AfkAcUYGNhBpso7MICUgBQw8H4EEv/B5ssDFYA4mAKYWjANfd+Aai3CYZ9BDoM63RDkdEGQ0zE9h+l9zADCDEIGt2/wQEZEwwVepGhgYEdEFGZUEgYAW05XI3jSsVwAAAAASUVORK5CYII=\") no-repeat;\n  background-size: 100%;\n}\n.toast_info {\n  background: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAALVBMVEUAAAD///////////////////////////////////////////////////////+hSKubAAAADnRSTlMA4CCAwKBAMJBg8NAQUNhWlbcAAAC+SURBVCjPYyASsLfse+1cgOBzyr0DgocXYHwmv4dtCkwZck8UoAJZDydA1C2H8NnexUAYR99BjNF6CtMbtwhM+QUACUUhIMH6BKz14QEgafcYSPDIgSxifMkAE2CYJwAk6gQQAozPgURfA0KAA0T6JSAE2ECm7lNACDC9BhLvGGACIA6GAFyLohBEC9xQqLeeQKwFA4i1EIfBAeNzuNMVhSBOx/AcpvcxAwgzCDEDGTMaGHhhEYWIShN4VBIGAPvRT5YzufhUAAAAAElFTkSuQmCC\") no-repeat;\n  background-size: 100%;\n}\n@-webkit-keyframes loading {\n  0% {\n    -webkit-transform: rotate3d(0, 0, 1, 0deg);\n    transform: rotate3d(0, 0, 1, 0deg);\n  }\n  100% {\n    -webkit-transform: rotate3d(0, 0, 1, 360deg);\n    transform: rotate3d(0, 0, 1, 360deg);\n  }\n}\n@keyframes loading {\n  0% {\n    -webkit-transform: rotate3d(0, 0, 1, 0deg);\n    transform: rotate3d(0, 0, 1, 0deg);\n  }\n  100% {\n    -webkit-transform: rotate3d(0, 0, 1, 360deg);\n    transform: rotate3d(0, 0, 1, 360deg);\n  }\n}\n.toast-animate {\n  animation: bounceIn .3s .2s ease both;\n}\n@keyframes bounceIn {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale(0.3);\n  }\n  50% {\n    opacity: 1;\n    -webkit-transform: scale(1.05);\n  }\n  70% {\n    -webkit-transform: scale(0.9);\n  }\n  100% {\n    -webkit-transform: scale(1);\n  }\n}\n", ""]);



/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(14);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 14 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ })
/******/ ]);