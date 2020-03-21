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
 * The BillingDetails model module.
 * @module model/BillingDetails
 * @version 2.1.0
 */
var BillingDetails = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>BillingDetails</code>.
   * Datos de facturación
   * @alias module:model/BillingDetails
   * @param rut {String} Rut
   * @param city {String} Ciudad
   * @param company {String} Empresa
   * @param municipality {String} Municipio
   * @param activity {String} Giro de la emmpresa
   * @param address {String} Dirección
   * @param country {String} País en donde se encuentra la tienda (dos caracteres)
   */
  function BillingDetails(rut, city, company, municipality, activity, address, country) {
    _classCallCheck(this, BillingDetails);

    BillingDetails.initialize(this, rut, city, company, municipality, activity, address, country);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(BillingDetails, null, [{
    key: "initialize",
    value: function initialize(obj, rut, city, company, municipality, activity, address, country) {
      obj['rut'] = rut;
      obj['city'] = city;
      obj['company'] = company;
      obj['municipality'] = municipality;
      obj['activity'] = activity;
      obj['address'] = address;
      obj['country'] = country;
    }
    /**
     * Constructs a <code>BillingDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BillingDetails} obj Optional instance to populate.
     * @return {module:model/BillingDetails} The populated <code>BillingDetails</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BillingDetails();

        if (data.hasOwnProperty('rut')) {
          obj['rut'] = _ApiClient["default"].convertToType(data['rut'], 'String');
        }

        if (data.hasOwnProperty('city')) {
          obj['city'] = _ApiClient["default"].convertToType(data['city'], 'String');
        }

        if (data.hasOwnProperty('company')) {
          obj['company'] = _ApiClient["default"].convertToType(data['company'], 'String');
        }

        if (data.hasOwnProperty('municipality')) {
          obj['municipality'] = _ApiClient["default"].convertToType(data['municipality'], 'String');
        }

        if (data.hasOwnProperty('activity')) {
          obj['activity'] = _ApiClient["default"].convertToType(data['activity'], 'String');
        }

        if (data.hasOwnProperty('address')) {
          obj['address'] = _ApiClient["default"].convertToType(data['address'], 'String');
        }

        if (data.hasOwnProperty('country')) {
          obj['country'] = _ApiClient["default"].convertToType(data['country'], 'String');
        }
      }

      return obj;
    }
  }]);

  return BillingDetails;
}();
/**
 * Rut
 * @member {String} rut
 */


BillingDetails.prototype['rut'] = undefined;
/**
 * Ciudad
 * @member {String} city
 */

BillingDetails.prototype['city'] = undefined;
/**
 * Empresa
 * @member {String} company
 */

BillingDetails.prototype['company'] = undefined;
/**
 * Municipio
 * @member {String} municipality
 */

BillingDetails.prototype['municipality'] = undefined;
/**
 * Giro de la emmpresa
 * @member {String} activity
 */

BillingDetails.prototype['activity'] = undefined;
/**
 * Dirección
 * @member {String} address
 */

BillingDetails.prototype['address'] = undefined;
/**
 * País en donde se encuentra la tienda (dos caracteres)
 * @member {String} country
 */

BillingDetails.prototype['country'] = undefined;
var _default = BillingDetails;
exports["default"] = _default;