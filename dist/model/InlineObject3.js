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
 * The InlineObject3 model module.
 * @module model/InlineObject3
 * @version 2.1.0
 */
var InlineObject3 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineObject3</code>.
   * @alias module:model/InlineObject3
   * @param url {String} La url que recibirá un POST para notificaciones
   * @param method {module:model/InlineObject3.MethodEnum} Método HTTP a ser usado durante el callback
   * @param webhook {module:model/InlineObject3.WebhookEnum} Tipo de webhook
   */
  function InlineObject3(url, method, webhook) {
    _classCallCheck(this, InlineObject3);

    InlineObject3.initialize(this, url, method, webhook);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineObject3, null, [{
    key: "initialize",
    value: function initialize(obj, url, method, webhook) {
      obj['url'] = url;
      obj['method'] = method;
      obj['webhook'] = webhook;
    }
    /**
     * Constructs a <code>InlineObject3</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject3} obj Optional instance to populate.
     * @return {module:model/InlineObject3} The populated <code>InlineObject3</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineObject3();

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }

        if (data.hasOwnProperty('method')) {
          obj['method'] = _ApiClient["default"].convertToType(data['method'], 'String');
        }

        if (data.hasOwnProperty('webhook')) {
          obj['webhook'] = _ApiClient["default"].convertToType(data['webhook'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InlineObject3;
}();
/**
 * La url que recibirá un POST para notificaciones
 * @member {String} url
 */


InlineObject3.prototype['url'] = undefined;
/**
 * Método HTTP a ser usado durante el callback
 * @member {module:model/InlineObject3.MethodEnum} method
 */

InlineObject3.prototype['method'] = undefined;
/**
 * Tipo de webhook
 * @member {module:model/InlineObject3.WebhookEnum} webhook
 */

InlineObject3.prototype['webhook'] = undefined;
/**
 * Allowed values for the <code>method</code> property.
 * @enum {String}
 * @readonly
 */

InlineObject3['MethodEnum'] = {
  /**
   * value: "POST"
   * @const
   */
  "POST": "POST",

  /**
   * value: "GET"
   * @const
   */
  "GET": "GET"
};
/**
 * Allowed values for the <code>webhook</code> property.
 * @enum {String}
 * @readonly
 */

InlineObject3['WebhookEnum'] = {
  /**
   * value: "remittances"
   * @const
   */
  "remittances": "remittances"
};
var _default = InlineObject3;
exports["default"] = _default;