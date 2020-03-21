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
 * The DataLoginResponse model module.
 * @module model/DataLoginResponse
 * @version 2.1.0
 */
var DataLoginResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>DataLoginResponse</code>.
   * Respuesta de login
   * @alias module:model/DataLoginResponse
   */
  function DataLoginResponse() {
    _classCallCheck(this, DataLoginResponse);

    DataLoginResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DataLoginResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>DataLoginResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DataLoginResponse} obj Optional instance to populate.
     * @return {module:model/DataLoginResponse} The populated <code>DataLoginResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DataLoginResponse();

        if (data.hasOwnProperty('access_token_jwt')) {
          obj['access_token_jwt'] = _ApiClient["default"].convertToType(data['access_token_jwt'], 'String');
        }

        if (data.hasOwnProperty('expires_in')) {
          obj['expires_in'] = _ApiClient["default"].convertToType(data['expires_in'], 'Number');
        }

        if (data.hasOwnProperty('token_type')) {
          obj['token_type'] = _ApiClient["default"].convertToType(data['token_type'], 'String');
        }
      }

      return obj;
    }
  }]);

  return DataLoginResponse;
}();
/**
 * JWT (JSON Web Token) que se usará para las llamadas del API
 * @member {String} access_token_jwt
 */


DataLoginResponse.prototype['access_token_jwt'] = undefined;
/**
 * Tiempo por el cual el JWT será valido
 * @member {Number} expires_in
 */

DataLoginResponse.prototype['expires_in'] = undefined;
/**
 * Tipo de Token
 * @member {String} token_type
 */

DataLoginResponse.prototype['token_type'] = undefined;
var _default = DataLoginResponse;
exports["default"] = _default;