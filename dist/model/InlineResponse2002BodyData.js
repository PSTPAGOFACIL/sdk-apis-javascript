"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InlineResponse2002BodyDataPayUrl = _interopRequireDefault(require("./InlineResponse2002BodyDataPayUrl"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InlineResponse2002BodyData model module.
 * @module model/InlineResponse2002BodyData
 * @version 2.1.0
 */
var InlineResponse2002BodyData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse2002BodyData</code>.
   * @alias module:model/InlineResponse2002BodyData
   */
  function InlineResponse2002BodyData() {
    _classCallCheck(this, InlineResponse2002BodyData);

    InlineResponse2002BodyData.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse2002BodyData, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InlineResponse2002BodyData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2002BodyData} obj Optional instance to populate.
     * @return {module:model/InlineResponse2002BodyData} The populated <code>InlineResponse2002BodyData</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse2002BodyData();

        if (data.hasOwnProperty('idTrx')) {
          obj['idTrx'] = _ApiClient["default"].convertToType(data['idTrx'], 'Number');
        }

        if (data.hasOwnProperty('payUrl')) {
          obj['payUrl'] = _ApiClient["default"].convertToType(data['payUrl'], [_InlineResponse2002BodyDataPayUrl["default"]]);
        }
      }

      return obj;
    }
  }]);

  return InlineResponse2002BodyData;
}();
/**
 * id de la transaccion
 * @member {Number} idTrx
 */


InlineResponse2002BodyData.prototype['idTrx'] = undefined;
/**
 * Opciones diferentes de pago. <br> Para mostrar todas las opciones utilizar 'gateway'. <br> Para ir directamente a un metodo de pago, utilizar las demás disponibles
 * @member {Array.<module:model/InlineResponse2002BodyDataPayUrl>} payUrl
 */

InlineResponse2002BodyData.prototype['payUrl'] = undefined;
var _default = InlineResponse2002BodyData;
exports["default"] = _default;