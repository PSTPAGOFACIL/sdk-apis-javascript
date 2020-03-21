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
 * The InlineResponse2008Types model module.
 * @module model/InlineResponse2008Types
 * @version 2.1.0
 */
var InlineResponse2008Types = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse2008Types</code>.
   * @alias module:model/InlineResponse2008Types
   */
  function InlineResponse2008Types() {
    _classCallCheck(this, InlineResponse2008Types);

    InlineResponse2008Types.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse2008Types, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InlineResponse2008Types</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2008Types} obj Optional instance to populate.
     * @return {module:model/InlineResponse2008Types} The populated <code>InlineResponse2008Types</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse2008Types();

        if (data.hasOwnProperty('codigo')) {
          obj['codigo'] = _ApiClient["default"].convertToType(data['codigo'], 'String');
        }

        if (data.hasOwnProperty('nombre')) {
          obj['nombre'] = _ApiClient["default"].convertToType(data['nombre'], 'String');
        }

        if (data.hasOwnProperty('descripcion')) {
          obj['descripcion'] = _ApiClient["default"].convertToType(data['descripcion'], 'String');
        }

        if (data.hasOwnProperty('url_imagen')) {
          obj['url_imagen'] = _ApiClient["default"].convertToType(data['url_imagen'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InlineResponse2008Types;
}();
/**
 * @member {String} codigo
 */


InlineResponse2008Types.prototype['codigo'] = undefined;
/**
 * @member {String} nombre
 */

InlineResponse2008Types.prototype['nombre'] = undefined;
/**
 * @member {String} descripcion
 */

InlineResponse2008Types.prototype['descripcion'] = undefined;
/**
 * @member {String} url_imagen
 */

InlineResponse2008Types.prototype['url_imagen'] = undefined;
var _default = InlineResponse2008Types;
exports["default"] = _default;