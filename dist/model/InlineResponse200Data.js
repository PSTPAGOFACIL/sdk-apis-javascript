"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _FutureRemittances = _interopRequireDefault(require("./FutureRemittances"));

var _RemittanceByDate = _interopRequireDefault(require("./RemittanceByDate"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InlineResponse200Data model module.
 * @module model/InlineResponse200Data
 * @version 2.1.0
 */
var InlineResponse200Data = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse200Data</code>.
   * @alias module:model/InlineResponse200Data
   */
  function InlineResponse200Data() {
    _classCallCheck(this, InlineResponse200Data);

    InlineResponse200Data.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse200Data, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InlineResponse200Data</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse200Data} obj Optional instance to populate.
     * @return {module:model/InlineResponse200Data} The populated <code>InlineResponse200Data</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse200Data();

        if (data.hasOwnProperty('availableBalance')) {
          obj['availableBalance'] = _ApiClient["default"].convertToType(data['availableBalance'], 'Number');
        }

        if (data.hasOwnProperty('remittanceByDate')) {
          obj['remittanceByDate'] = _RemittanceByDate["default"].constructFromObject(data['remittanceByDate']);
        }

        if (data.hasOwnProperty('futureRemittances')) {
          obj['futureRemittances'] = _FutureRemittances["default"].constructFromObject(data['futureRemittances']);
        }
      }

      return obj;
    }
  }]);

  return InlineResponse200Data;
}();
/**
 * Monto de la transacción
 * @member {Number} availableBalance
 */


InlineResponse200Data.prototype['availableBalance'] = undefined;
/**
 * @member {module:model/RemittanceByDate} remittanceByDate
 */

InlineResponse200Data.prototype['remittanceByDate'] = undefined;
/**
 * @member {module:model/FutureRemittances} futureRemittances
 */

InlineResponse200Data.prototype['futureRemittances'] = undefined;
var _default = InlineResponse200Data;
exports["default"] = _default;