"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InlineResponse2001DataNullifications model module.
 * @module model/InlineResponse2001DataNullifications
 * @version 2.1.0
 */
var InlineResponse2001DataNullifications = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse2001DataNullifications</code>.
   * @alias module:model/InlineResponse2001DataNullifications
   */
  function InlineResponse2001DataNullifications() {
    _classCallCheck(this, InlineResponse2001DataNullifications);

    InlineResponse2001DataNullifications.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse2001DataNullifications, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InlineResponse2001DataNullifications</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2001DataNullifications} obj Optional instance to populate.
     * @return {module:model/InlineResponse2001DataNullifications} The populated <code>InlineResponse2001DataNullifications</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse2001DataNullifications();

        if (data.hasOwnProperty('tipo')) {
          obj['tipo'] = _ApiClient["default"].convertToType(data['tipo'], 'String');
        }

        if (data.hasOwnProperty('montoAnulado')) {
          obj['montoAnulado'] = _ApiClient["default"].convertToType(data['montoAnulado'], 'Number');
        }

        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient["default"].convertToType(data['status'], 'String');
        }

        if (data.hasOwnProperty('timestamp')) {
          obj['timestamp'] = _ApiClient["default"].convertToType(data['timestamp'], 'Number');
        }

        if (data.hasOwnProperty('dateTime')) {
          obj['dateTime'] = _ApiClient["default"].convertToType(data['dateTime'], 'Date');
        }
      }

      return obj;
    }
  }]);

  return InlineResponse2001DataNullifications;
}();
/**
 * @member {String} tipo
 */


InlineResponse2001DataNullifications.prototype['tipo'] = undefined;
/**
 * @member {Number} montoAnulado
 */

InlineResponse2001DataNullifications.prototype['montoAnulado'] = undefined;
/**
 * @member {String} status
 */

InlineResponse2001DataNullifications.prototype['status'] = undefined;
/**
 * Timestamp de unix en segundos
 * @member {Number} timestamp
 */

InlineResponse2001DataNullifications.prototype['timestamp'] = undefined;
/**
 * @member {Date} dateTime
 */

InlineResponse2001DataNullifications.prototype['dateTime'] = undefined;
var _default = InlineResponse2001DataNullifications;
exports["default"] = _default;