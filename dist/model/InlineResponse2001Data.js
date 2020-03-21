"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InlineResponse2001DataItems = _interopRequireDefault(require("./InlineResponse2001DataItems"));

var _InlineResponse2001DataNullifications = _interopRequireDefault(require("./InlineResponse2001DataNullifications"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InlineResponse2001Data model module.
 * @module model/InlineResponse2001Data
 * @version 2.1.0
 */
var InlineResponse2001Data = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse2001Data</code>.
   * @alias module:model/InlineResponse2001Data
   */
  function InlineResponse2001Data() {
    _classCallCheck(this, InlineResponse2001Data);

    InlineResponse2001Data.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse2001Data, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InlineResponse2001Data</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2001Data} obj Optional instance to populate.
     * @return {module:model/InlineResponse2001Data} The populated <code>InlineResponse2001Data</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse2001Data();

        if (data.hasOwnProperty('totalRemittances')) {
          obj['totalRemittances'] = _ApiClient["default"].convertToType(data['totalRemittances'], 'Number');
        }

        if (data.hasOwnProperty('items')) {
          obj['items'] = _ApiClient["default"].convertToType(data['items'], [_InlineResponse2001DataItems["default"]]);
        }

        if (data.hasOwnProperty('totalTransactions')) {
          obj['totalTransactions'] = _ApiClient["default"].convertToType(data['totalTransactions'], 'Number');
        }

        if (data.hasOwnProperty('totalNullification')) {
          obj['totalNullification'] = _ApiClient["default"].convertToType(data['totalNullification'], 'Number');
        }

        if (data.hasOwnProperty('nullifications')) {
          obj['nullifications'] = _ApiClient["default"].convertToType(data['nullifications'], [_InlineResponse2001DataNullifications["default"]]);
        }
      }

      return obj;
    }
  }]);

  return InlineResponse2001Data;
}();
/**
 * Total de los abonos
 * @member {Number} totalRemittances
 */


InlineResponse2001Data.prototype['totalRemittances'] = undefined;
/**
 * @member {Array.<module:model/InlineResponse2001DataItems>} items
 */

InlineResponse2001Data.prototype['items'] = undefined;
/**
 * Total de transacciones
 * @member {Number} totalTransactions
 */

InlineResponse2001Data.prototype['totalTransactions'] = undefined;
/**
 * Total de anulaciones
 * @member {Number} totalNullification
 */

InlineResponse2001Data.prototype['totalNullification'] = undefined;
/**
 * @member {Array.<module:model/InlineResponse2001DataNullifications>} nullifications
 */

InlineResponse2001Data.prototype['nullifications'] = undefined;
var _default = InlineResponse2001Data;
exports["default"] = _default;