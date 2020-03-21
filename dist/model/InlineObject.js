"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _BillingDetails = _interopRequireDefault(require("./BillingDetails"));

var _Document = _interopRequireDefault(require("./Document"));

var _Shippment = _interopRequireDefault(require("./Shippment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InlineObject model module.
 * @module model/InlineObject
 * @version 2.1.0
 */
var InlineObject = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineObject</code>.
   * @alias module:model/InlineObject
   * @param xAccountId {String} Corresponde al <u>Token Service</u> relacionado al servicio con el que deseas generar el cobro.
   * @param xAmount {Number} Monto de la transacción. Admite decimales si la divisa utilizada los utiliza.
   * @param xCurrency {String} Codigo de 3 caracteres para paises. <br><br> Info:<a href='https://en.wikipedia.org/wiki/ISO_4217#Active_codes' target=_blank>ISO_4217</a>
   * @param xReference {String} \\\"Tú\\\" número de orden. Este número debería ser único por servicio para no tener problema de duplicidad de pagos.
   * @param xCustomerEmail {String} Correo en dónde se enviará la confirmación de pago al cliente.
   * @param xUrlComplete {String} Dirección en dónde se redireccionará al momento de completar la transacción. Se enviará un POST a esta URL con los mismos datos del callback explicado en la sección response.
   * @param xUrlCancel {String} Dirección en dónde se redireccionará en caso de cancelación. Se recomienda usar la dirección del carrito de compras.
   * @param xUrlCallback {String} Dirección en donde se avisará de los cambios en la transacción de manera asincrónica a través de un método POST.
   * @param xSignature {String} Mensaje Firmado. Para más información sobre la creación de la firma revisa https://apidocs.pagofacil.cl/proceso-de-firmado
   * @param xShopCountry {String} Codigo de 2 caracteres para paises. <br><br> Info:<a href='https://en.wikipedia.org/wiki/ISO_3166-1#Current_codes'>ISO 3166-1 Alpha2-code</a>
   * @param xSessionId {String} Identificador único de la sesión del usuario que realiza el pago. Se agrega como capa de seguridad para validar la transacción. Max. 61 caracteres.
   */
  function InlineObject(xAccountId, xAmount, xCurrency, xReference, xCustomerEmail, xUrlComplete, xUrlCancel, xUrlCallback, xSignature, xShopCountry, xSessionId) {
    _classCallCheck(this, InlineObject);

    InlineObject.initialize(this, xAccountId, xAmount, xCurrency, xReference, xCustomerEmail, xUrlComplete, xUrlCancel, xUrlCallback, xSignature, xShopCountry, xSessionId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineObject, null, [{
    key: "initialize",
    value: function initialize(obj, xAccountId, xAmount, xCurrency, xReference, xCustomerEmail, xUrlComplete, xUrlCancel, xUrlCallback, xSignature, xShopCountry, xSessionId) {
      obj['x_account_id'] = xAccountId;
      obj['x_amount'] = xAmount;
      obj['x_currency'] = xCurrency;
      obj['x_reference'] = xReference;
      obj['x_customer_email'] = xCustomerEmail;
      obj['x_url_complete'] = xUrlComplete;
      obj['x_url_cancel'] = xUrlCancel;
      obj['x_url_callback'] = xUrlCallback;
      obj['x_signature'] = xSignature;
      obj['x_shop_country'] = xShopCountry;
      obj['x_session_id'] = xSessionId;
    }
    /**
     * Constructs a <code>InlineObject</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject} obj Optional instance to populate.
     * @return {module:model/InlineObject} The populated <code>InlineObject</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineObject();

        if (data.hasOwnProperty('x_account_id')) {
          obj['x_account_id'] = _ApiClient["default"].convertToType(data['x_account_id'], 'String');
        }

        if (data.hasOwnProperty('x_amount')) {
          obj['x_amount'] = _ApiClient["default"].convertToType(data['x_amount'], 'Number');
        }

        if (data.hasOwnProperty('x_currency')) {
          obj['x_currency'] = _ApiClient["default"].convertToType(data['x_currency'], 'String');
        }

        if (data.hasOwnProperty('x_reference')) {
          obj['x_reference'] = _ApiClient["default"].convertToType(data['x_reference'], 'String');
        }

        if (data.hasOwnProperty('x_customer_email')) {
          obj['x_customer_email'] = _ApiClient["default"].convertToType(data['x_customer_email'], 'String');
        }

        if (data.hasOwnProperty('x_url_complete')) {
          obj['x_url_complete'] = _ApiClient["default"].convertToType(data['x_url_complete'], 'String');
        }

        if (data.hasOwnProperty('x_url_cancel')) {
          obj['x_url_cancel'] = _ApiClient["default"].convertToType(data['x_url_cancel'], 'String');
        }

        if (data.hasOwnProperty('x_url_callback')) {
          obj['x_url_callback'] = _ApiClient["default"].convertToType(data['x_url_callback'], 'String');
        }

        if (data.hasOwnProperty('x_signature')) {
          obj['x_signature'] = _ApiClient["default"].convertToType(data['x_signature'], 'String');
        }

        if (data.hasOwnProperty('x_shop_country')) {
          obj['x_shop_country'] = _ApiClient["default"].convertToType(data['x_shop_country'], 'String');
        }

        if (data.hasOwnProperty('x_session_id')) {
          obj['x_session_id'] = _ApiClient["default"].convertToType(data['x_session_id'], 'String');
        }

        if (data.hasOwnProperty('x_products')) {
          obj['x_products'] = _ApiClient["default"].convertToType(data['x_products'], [Object]);
        }

        if (data.hasOwnProperty('x_billing_details')) {
          obj['x_billing_details'] = _BillingDetails["default"].constructFromObject(data['x_billing_details']);
        }

        if (data.hasOwnProperty('x_shippment')) {
          obj['x_shippment'] = _Shippment["default"].constructFromObject(data['x_shippment']);
        }

        if (data.hasOwnProperty('x_document')) {
          obj['x_document'] = _Document["default"].constructFromObject(data['x_document']);
        }
      }

      return obj;
    }
  }]);

  return InlineObject;
}();
/**
 * Corresponde al <u>Token Service</u> relacionado al servicio con el que deseas generar el cobro.
 * @member {String} x_account_id
 */


InlineObject.prototype['x_account_id'] = undefined;
/**
 * Monto de la transacción. Admite decimales si la divisa utilizada los utiliza.
 * @member {Number} x_amount
 */

InlineObject.prototype['x_amount'] = undefined;
/**
 * Codigo de 3 caracteres para paises. <br><br> Info:<a href='https://en.wikipedia.org/wiki/ISO_4217#Active_codes' target=_blank>ISO_4217</a>
 * @member {String} x_currency
 */

InlineObject.prototype['x_currency'] = undefined;
/**
 * \\\"Tú\\\" número de orden. Este número debería ser único por servicio para no tener problema de duplicidad de pagos.
 * @member {String} x_reference
 */

InlineObject.prototype['x_reference'] = undefined;
/**
 * Correo en dónde se enviará la confirmación de pago al cliente.
 * @member {String} x_customer_email
 */

InlineObject.prototype['x_customer_email'] = undefined;
/**
 * Dirección en dónde se redireccionará al momento de completar la transacción. Se enviará un POST a esta URL con los mismos datos del callback explicado en la sección response.
 * @member {String} x_url_complete
 */

InlineObject.prototype['x_url_complete'] = undefined;
/**
 * Dirección en dónde se redireccionará en caso de cancelación. Se recomienda usar la dirección del carrito de compras.
 * @member {String} x_url_cancel
 */

InlineObject.prototype['x_url_cancel'] = undefined;
/**
 * Dirección en donde se avisará de los cambios en la transacción de manera asincrónica a través de un método POST.
 * @member {String} x_url_callback
 */

InlineObject.prototype['x_url_callback'] = undefined;
/**
 * Mensaje Firmado. Para más información sobre la creación de la firma revisa https://apidocs.pagofacil.cl/proceso-de-firmado
 * @member {String} x_signature
 */

InlineObject.prototype['x_signature'] = undefined;
/**
 * Codigo de 2 caracteres para paises. <br><br> Info:<a href='https://en.wikipedia.org/wiki/ISO_3166-1#Current_codes'>ISO 3166-1 Alpha2-code</a>
 * @member {String} x_shop_country
 */

InlineObject.prototype['x_shop_country'] = undefined;
/**
 * Identificador único de la sesión del usuario que realiza el pago. Se agrega como capa de seguridad para validar la transacción. Max. 61 caracteres.
 * @member {String} x_session_id
 */

InlineObject.prototype['x_session_id'] = undefined;
/**
 * Productos asociados a la transacción
 * @member {Array.<Object>} x_products
 */

InlineObject.prototype['x_products'] = undefined;
/**
 * @member {module:model/BillingDetails} x_billing_details
 */

InlineObject.prototype['x_billing_details'] = undefined;
/**
 * @member {module:model/Shippment} x_shippment
 */

InlineObject.prototype['x_shippment'] = undefined;
/**
 * @member {module:model/Document} x_document
 */

InlineObject.prototype['x_document'] = undefined;
var _default = InlineObject;
exports["default"] = _default;