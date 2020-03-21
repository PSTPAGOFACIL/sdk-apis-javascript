"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _NullificationType = _interopRequireDefault(require("./NullificationType"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InlineObject2 model module.
 * @module model/InlineObject2
 * @version 2.1.0
 */
var InlineObject2 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineObject2</code>.
   * @alias module:model/InlineObject2
   * @param amount {Number} Monto de la transacción
   * @param type {module:model/NullificationType} 
   */
  function InlineObject2(amount, type) {
    _classCallCheck(this, InlineObject2);

    InlineObject2.initialize(this, amount, type);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineObject2, null, [{
    key: "initialize",
    value: function initialize(obj, amount, type) {
      obj['amount'] = amount;
      obj['type'] = type;
    }
    /**
     * Constructs a <code>InlineObject2</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject2} obj Optional instance to populate.
     * @return {module:model/InlineObject2} The populated <code>InlineObject2</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineObject2();

        if (data.hasOwnProperty('amount')) {
          obj['amount'] = _ApiClient["default"].convertToType(data['amount'], 'Number');
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _NullificationType["default"].constructFromObject(data['type']);
        }

        if (data.hasOwnProperty('nullifyTbk')) {
          obj['nullifyTbk'] = _ApiClient["default"].convertToType(data['nullifyTbk'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return InlineObject2;
}();
/**
 * Monto de la transacción
 * @member {Number} amount
 */


InlineObject2.prototype['amount'] = undefined;
/**
 * @member {module:model/NullificationType} type
 */

InlineObject2.prototype['type'] = undefined;
/**
 * Identifica si se desea anular la trasacción en transbank
 * @member {Boolean} nullifyTbk
 */

InlineObject2.prototype['nullifyTbk'] = undefined;
var _default = InlineObject2;
exports["default"] = _default;