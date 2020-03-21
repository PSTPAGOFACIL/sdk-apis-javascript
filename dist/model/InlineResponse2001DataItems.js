"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InlineResponse2001DataDocument = _interopRequireDefault(require("./InlineResponse2001DataDocument"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InlineResponse2001DataItems model module.
 * @module model/InlineResponse2001DataItems
 * @version 2.1.0
 */
var InlineResponse2001DataItems = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse2001DataItems</code>.
   * @alias module:model/InlineResponse2001DataItems
   */
  function InlineResponse2001DataItems() {
    _classCallCheck(this, InlineResponse2001DataItems);

    InlineResponse2001DataItems.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse2001DataItems, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InlineResponse2001DataItems</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2001DataItems} obj Optional instance to populate.
     * @return {module:model/InlineResponse2001DataItems} The populated <code>InlineResponse2001DataItems</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse2001DataItems();

        if (data.hasOwnProperty('amount')) {
          obj['amount'] = _ApiClient["default"].convertToType(data['amount'], 'Number');
        }

        if (data.hasOwnProperty('cost')) {
          obj['cost'] = _ApiClient["default"].convertToType(data['cost'], 'Number');
        }

        if (data.hasOwnProperty('total')) {
          obj['total'] = _ApiClient["default"].convertToType(data['total'], 'Number');
        }

        if (data.hasOwnProperty('idTrx')) {
          obj['idTrx'] = _ApiClient["default"].convertToType(data['idTrx'], 'Number');
        }

        if (data.hasOwnProperty('order_id_tienda')) {
          obj['order_id_tienda'] = _ApiClient["default"].convertToType(data['order_id_tienda'], 'String');
        }

        if (data.hasOwnProperty('createdAt')) {
          obj['createdAt'] = _ApiClient["default"].convertToType(data['createdAt'], 'Number');
        }

        if (data.hasOwnProperty('dateTimeCreatedAt')) {
          obj['dateTimeCreatedAt'] = _ApiClient["default"].convertToType(data['dateTimeCreatedAt'], 'Date');
        }

        if (data.hasOwnProperty('isTotalNullified')) {
          obj['isTotalNullified'] = _ApiClient["default"].convertToType(data['isTotalNullified'], 'Boolean');
        }

        if (data.hasOwnProperty('isParcialNullified')) {
          obj['isParcialNullified'] = _ApiClient["default"].convertToType(data['isParcialNullified'], 'Boolean');
        }

        if (data.hasOwnProperty('currency')) {
          obj['currency'] = _ApiClient["default"].convertToType(data['currency'], 'String');
        }

        if (data.hasOwnProperty('document')) {
          obj['document'] = _InlineResponse2001DataDocument["default"].constructFromObject(data['document']);
        }
      }

      return obj;
    }
  }]);

  return InlineResponse2001DataItems;
}();
/**
 * @member {Number} amount
 */


InlineResponse2001DataItems.prototype['amount'] = undefined;
/**
 * @member {Number} cost
 */

InlineResponse2001DataItems.prototype['cost'] = undefined;
/**
 * @member {Number} total
 */

InlineResponse2001DataItems.prototype['total'] = undefined;
/**
 * @member {Number} idTrx
 */

InlineResponse2001DataItems.prototype['idTrx'] = undefined;
/**
 * @member {String} order_id_tienda
 */

InlineResponse2001DataItems.prototype['order_id_tienda'] = undefined;
/**
 * Timestamp de unix en milisegundos
 * @member {Number} createdAt
 */

InlineResponse2001DataItems.prototype['createdAt'] = undefined;
/**
 * @member {Date} dateTimeCreatedAt
 */

InlineResponse2001DataItems.prototype['dateTimeCreatedAt'] = undefined;
/**
 * @member {Boolean} isTotalNullified
 */

InlineResponse2001DataItems.prototype['isTotalNullified'] = undefined;
/**
 * @member {Boolean} isParcialNullified
 */

InlineResponse2001DataItems.prototype['isParcialNullified'] = undefined;
/**
 * @member {String} currency
 */

InlineResponse2001DataItems.prototype['currency'] = undefined;
/**
 * @member {module:model/InlineResponse2001DataDocument} document
 */

InlineResponse2001DataItems.prototype['document'] = undefined;
var _default = InlineResponse2001DataItems;
exports["default"] = _default;