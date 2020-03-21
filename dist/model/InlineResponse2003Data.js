"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Status = _interopRequireDefault(require("./Status"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InlineResponse2003Data model module.
 * @module model/InlineResponse2003Data
 * @version 2.1.0
 */
var InlineResponse2003Data = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse2003Data</code>.
   * @alias module:model/InlineResponse2003Data
   */
  function InlineResponse2003Data() {
    _classCallCheck(this, InlineResponse2003Data);

    InlineResponse2003Data.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse2003Data, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InlineResponse2003Data</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2003Data} obj Optional instance to populate.
     * @return {module:model/InlineResponse2003Data} The populated <code>InlineResponse2003Data</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse2003Data();

        if (data.hasOwnProperty('idTrx')) {
          obj['idTrx'] = _ApiClient["default"].convertToType(data['idTrx'], 'Number');
        }

        if (data.hasOwnProperty('idService')) {
          obj['idService'] = _ApiClient["default"].convertToType(data['idService'], 'Number');
        }

        if (data.hasOwnProperty('orderIdTienda')) {
          obj['orderIdTienda'] = _ApiClient["default"].convertToType(data['orderIdTienda'], 'String');
        }

        if (data.hasOwnProperty('amount')) {
          obj['amount'] = _ApiClient["default"].convertToType(data['amount'], 'Number');
        }

        if (data.hasOwnProperty('cost')) {
          obj['cost'] = _ApiClient["default"].convertToType(data['cost'], 'Number');
        }

        if (data.hasOwnProperty('email')) {
          obj['email'] = _ApiClient["default"].convertToType(data['email'], 'String');
        }

        if (data.hasOwnProperty('authCode')) {
          obj['authCode'] = _ApiClient["default"].convertToType(data['authCode'], 'Number');
        }

        if (data.hasOwnProperty('createdAt')) {
          obj['createdAt'] = _ApiClient["default"].convertToType(data['createdAt'], 'Date');
        }

        if (data.hasOwnProperty('updatedAt')) {
          obj['updatedAt'] = _ApiClient["default"].convertToType(data['updatedAt'], 'Date');
        }

        if (data.hasOwnProperty('callbackURL')) {
          obj['callbackURL'] = _ApiClient["default"].convertToType(data['callbackURL'], 'String');
        }

        if (data.hasOwnProperty('completeURL')) {
          obj['completeURL'] = _ApiClient["default"].convertToType(data['completeURL'], 'String');
        }

        if (data.hasOwnProperty('cancelURL')) {
          obj['cancelURL'] = _ApiClient["default"].convertToType(data['cancelURL'], 'String');
        }

        if (data.hasOwnProperty('ip')) {
          obj['ip'] = _ApiClient["default"].convertToType(data['ip'], 'String');
        }

        if (data.hasOwnProperty('browserData')) {
          obj['browserData'] = _ApiClient["default"].convertToType(data['browserData'], 'String');
        }

        if (data.hasOwnProperty('source')) {
          obj['source'] = _ApiClient["default"].convertToType(data['source'], 'String');
        }

        if (data.hasOwnProperty('timestamp')) {
          obj['timestamp'] = _ApiClient["default"].convertToType(data['timestamp'], 'String');
        }

        if (data.hasOwnProperty('paymentTypeCode')) {
          obj['paymentTypeCode'] = _ApiClient["default"].convertToType(data['paymentTypeCode'], 'String');
        }

        if (data.hasOwnProperty('sharesNumber')) {
          obj['sharesNumber'] = _ApiClient["default"].convertToType(data['sharesNumber'], 'Number');
        }

        if (data.hasOwnProperty('responceCode')) {
          obj['responceCode'] = _ApiClient["default"].convertToType(data['responceCode'], 'Number');
        }

        if (data.hasOwnProperty('vci')) {
          obj['vci'] = _ApiClient["default"].convertToType(data['vci'], 'String');
        }

        if (data.hasOwnProperty('abonos')) {
          obj['abonos'] = _ApiClient["default"].convertToType(data['abonos'], ['String']);
        }

        if (data.hasOwnProperty('status')) {
          obj['status'] = _Status["default"].constructFromObject(data['status']);
        }
      }

      return obj;
    }
  }]);

  return InlineResponse2003Data;
}();
/**
 * ID de la transacción en Pago Fácil
 * @member {Number} idTrx
 */


InlineResponse2003Data.prototype['idTrx'] = undefined;
/**
 * ID del servicio
 * @member {Number} idService
 */

InlineResponse2003Data.prototype['idService'] = undefined;
/**
 * ID del comercio para identificar su tienda
 * @member {String} orderIdTienda
 */

InlineResponse2003Data.prototype['orderIdTienda'] = undefined;
/**
 * Monto de la transacción
 * @member {Number} amount
 */

InlineResponse2003Data.prototype['amount'] = undefined;
/**
 * Costo de la transacción
 * @member {Number} cost
 */

InlineResponse2003Data.prototype['cost'] = undefined;
/**
 * Email
 * @member {String} email
 */

InlineResponse2003Data.prototype['email'] = undefined;
/**
 * Codigo de autorizacion de la compra
 * @member {Number} authCode
 */

InlineResponse2003Data.prototype['authCode'] = undefined;
/**
 * Fecha de creación
 * @member {Date} createdAt
 */

InlineResponse2003Data.prototype['createdAt'] = undefined;
/**
 * Fecha de actualización
 * @member {Date} updatedAt
 */

InlineResponse2003Data.prototype['updatedAt'] = undefined;
/**
 * url a la que se llama una vez la transacción es completada
 * @member {String} callbackURL
 */

InlineResponse2003Data.prototype['callbackURL'] = undefined;
/**
 * url a la que se redireciona al cliente una vez la transacción es completada
 * @member {String} completeURL
 */

InlineResponse2003Data.prototype['completeURL'] = undefined;
/**
 * currently out of order
 * @member {String} cancelURL
 */

InlineResponse2003Data.prototype['cancelURL'] = undefined;
/**
 * ip adress of the device from where transaction was completed
 * @member {String} ip
 */

InlineResponse2003Data.prototype['ip'] = undefined;
/**
 * data from the browser where the transaction was completed
 * @member {String} browserData
 */

InlineResponse2003Data.prototype['browserData'] = undefined;
/**
 * Método de pago
 * @member {String} source
 */

InlineResponse2003Data.prototype['source'] = undefined;
/**
 * uso transbank
 * @member {String} timestamp
 */

InlineResponse2003Data.prototype['timestamp'] = undefined;
/**
 * Forma de pago que usa el cliente
 * @member {String} paymentTypeCode
 */

InlineResponse2003Data.prototype['paymentTypeCode'] = undefined;
/**
 * Cuotas de la transacción
 * @member {Number} sharesNumber
 */

InlineResponse2003Data.prototype['sharesNumber'] = undefined;
/**
 * uso transbank
 * @member {Number} responceCode
 */

InlineResponse2003Data.prototype['responceCode'] = undefined;
/**
 * uso transbank
 * @member {String} vci
 */

InlineResponse2003Data.prototype['vci'] = undefined;
/**
 * Abonos relacionados a la transacción
 * @member {Array.<String>} abonos
 */

InlineResponse2003Data.prototype['abonos'] = undefined;
/**
 * @member {module:model/Status} status
 */

InlineResponse2003Data.prototype['status'] = undefined;
var _default = InlineResponse2003Data;
exports["default"] = _default;