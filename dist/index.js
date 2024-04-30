"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var CustomConsole = /*#__PURE__*/function () {
  function CustomConsole(globalHeader, styles) {
    _classCallCheck(this, CustomConsole);
    _defineProperty(this, "styles", {
      info: {
        header: 'color: #fff; background: #606060; font-weight: bold;',
        content: 'color: green; font-weight: bold;'
      },
      log: {
        header: 'color: #fff; background: #606060; font-weight: bold;',
        content: 'color: #000000; font-weight: bold;'
      },
      warn: {
        header: 'color: #fff; background: #FFA500; font-weight: bold;',
        content: 'color: #000000; font-weight: bold;'
      },
      error: {
        header: 'color: #fff; background: #FF0000; font-weight: bold;',
        content: 'color: #000000; font-weight: bold;'
      },
      version: {
        header: 'padding: 2px 1px; border-radius: 3px 0 0 3px; color: #fff; background: #606060; font-weight: bold;',
        content: 'padding: 2px 1px; border-radius: 0 3px 3px 0; color: #fff; background: #42c02e; font-weight: bold;'
      }
    });
    this.globalHeader = globalHeader || 'hello';
    this.originalConsole = global.console;
    if (styles && styles.version) this.styles.version = styles.version;
    if (styles && styles.info) this.styles.info = styles.info;
    if (styles && styles.log) this.styles.log = styles.log;
    if (styles && styles.warn) this.styles.log = styles.warn;
    if (styles && styles.error) this.styles.log = styles.error;
  }
  return _createClass(CustomConsole, [{
    key: "clearLog",
    value: function clearLog() {
      this.originalConsole.log = function () {};
      this.originalConsole.error = function () {};
      this.originalConsole.warn = function () {};
    }
  }, {
    key: "version",
    value: function version() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      this.originalConsole.log("%c ".concat(this.globalHeader, " %c ").concat(args), this.styles.version.header, this.styles.version.content);
    }
  }, {
    key: "log",
    value: function log() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      this.originalConsole.log("%c ".concat(this.globalHeader, " %c ").concat(args), this.styles.log.header, this.styles.log.content);
    }
  }, {
    key: "info",
    value: function info() {
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }
      this.originalConsole.log("%c ".concat(this.globalHeader, " %c ").concat(args), this.styles.info.header, this.styles.info.content);
    }
  }, {
    key: "warn",
    value: function warn() {
      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }
      this.originalConsole.warn("%c ".concat(this.globalHeader, " %c ").concat(args), this.styles.warn.header, this.styles.warn.content);
    }
  }, {
    key: "error",
    value: function error() {
      for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        args[_key5] = arguments[_key5];
      }
      this.originalConsole.error("%c ".concat(this.globalHeader, " %c ").concat(args), this.styles.error.header, this.styles.error.content);
    }
  }]);
}();
module.exports = CustomConsole;