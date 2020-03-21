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
 * The Shippment model module.
 * @module model/Shippment
 * @version 2.1.0
 */
var Shippment = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Shippment</code>.
   * Datos de despacho
   * @alias module:model/Shippment
   * @param contactName {String} Nombre de contacto
   * @param phone {String} Número de teléfono
   * @param region {String} Región
   * @param city {String} Ciudad
   * @param address {String} Dirección
   * @param municipality {String} Municipio
   * @param rut {String} Rut
   */
  function Shippment(contactName, phone, region, city, address, municipality, rut) {
    _classCallCheck(this, Shippment);

    Shippment.initialize(this, contactName, phone, region, city, address, municipality, rut);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Shippment, null, [{
    key: "initialize",
    value: function initialize(obj, contactName, phone, region, city, address, municipality, rut) {
      obj['contact_name'] = contactName;
      obj['phone'] = phone;
      obj['region'] = region;
      obj['city'] = city;
      obj['address'] = address;
      obj['municipality'] = municipality;
      obj['rut'] = rut;
    }
    /**
     * Constructs a <code>Shippment</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Shippment} obj Optional instance to populate.
     * @return {module:model/Shippment} The populated <code>Shippment</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Shippment();

        if (data.hasOwnProperty('contact_name')) {
          obj['contact_name'] = _ApiClient["default"].convertToType(data['contact_name'], 'String');
        }

        if (data.hasOwnProperty('phone')) {
          obj['phone'] = _ApiClient["default"].convertToType(data['phone'], 'String');
        }

        if (data.hasOwnProperty('region')) {
          obj['region'] = _ApiClient["default"].convertToType(data['region'], 'String');
        }

        if (data.hasOwnProperty('city')) {
          obj['city'] = _ApiClient["default"].convertToType(data['city'], 'String');
        }

        if (data.hasOwnProperty('address')) {
          obj['address'] = _ApiClient["default"].convertToType(data['address'], 'String');
        }

        if (data.hasOwnProperty('municipality')) {
          obj['municipality'] = _ApiClient["default"].convertToType(data['municipality'], 'String');
        }

        if (data.hasOwnProperty('rut')) {
          obj['rut'] = _ApiClient["default"].convertToType(data['rut'], 'String');
        }

        if (data.hasOwnProperty('country')) {
          obj['country'] = _ApiClient["default"].convertToType(data['country'], 'String');
        }

        if (data.hasOwnProperty('zip')) {
          obj['zip'] = _ApiClient["default"].convertToType(data['zip'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Shippment;
}();
/**
 * Nombre de contacto
 * @member {String} contact_name
 */


Shippment.prototype['contact_name'] = undefined;
/**
 * Número de teléfono
 * @member {String} phone
 */

Shippment.prototype['phone'] = undefined;
/**
 * Región
 * @member {String} region
 */

Shippment.prototype['region'] = undefined;
/**
 * Ciudad
 * @member {String} city
 */

Shippment.prototype['city'] = undefined;
/**
 * Dirección
 * @member {String} address
 */

Shippment.prototype['address'] = undefined;
/**
 * Municipio
 * @member {String} municipality
 */

Shippment.prototype['municipality'] = undefined;
/**
 * Rut
 * @member {String} rut
 */

Shippment.prototype['rut'] = undefined;
/**
 * País en donde se encuentra la tienda (dos caracteres)
 * @member {String} country
 */

Shippment.prototype['country'] = undefined;
/**
 * Código postal
 * @member {String} zip
 */

Shippment.prototype['zip'] = undefined;
var _default = Shippment;
exports["default"] = _default;