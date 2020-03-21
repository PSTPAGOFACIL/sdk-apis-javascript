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
 * The RemittanceByDate model module.
 * @module model/RemittanceByDate
 * @version 2.1.0
 */
var RemittanceByDate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RemittanceByDate</code>.
   * Monto del abono relacionado a las transacciones que se debieron pagar el dia indicado y dichas transacciones
   * @alias module:model/RemittanceByDate
   */
  function RemittanceByDate() {
    _classCallCheck(this, RemittanceByDate);

    RemittanceByDate.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RemittanceByDate, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>RemittanceByDate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RemittanceByDate} obj Optional instance to populate.
     * @return {module:model/RemittanceByDate} The populated <code>RemittanceByDate</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RemittanceByDate();

        if (data.hasOwnProperty('total')) {
          obj['total'] = _ApiClient["default"].convertToType(data['total'], 'Number');
        }

        if (data.hasOwnProperty('trxs')) {
          obj['trxs'] = _ApiClient["default"].convertToType(data['trxs'], [Object]);
        }
      }

      return obj;
    }
  }]);

  return RemittanceByDate;
}();
/**
 * Monto de la transacción
 * @member {Number} total
 */


RemittanceByDate.prototype['total'] = undefined;
/**
 * Objeto de transacciones
 * @member {Array.<Object>} trxs
 */

RemittanceByDate.prototype['trxs'] = undefined;
var _default = RemittanceByDate;
exports["default"] = _default;