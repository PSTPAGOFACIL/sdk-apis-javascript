"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InlineResponse2006Data = _interopRequireDefault(require("./InlineResponse2006Data"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InlineResponse2006 model module.
 * @module model/InlineResponse2006
 * @version 2.1.0
 */
var InlineResponse2006 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse2006</code>.
   * @alias module:model/InlineResponse2006
   */
  function InlineResponse2006() {
    _classCallCheck(this, InlineResponse2006);

    InlineResponse2006.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse2006, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InlineResponse2006</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2006} obj Optional instance to populate.
     * @return {module:model/InlineResponse2006} The populated <code>InlineResponse2006</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse2006();

        if (data.hasOwnProperty('message')) {
          obj['message'] = _ApiClient["default"].convertToType(data['message'], 'String');
        }

        if (data.hasOwnProperty('data')) {
          obj['data'] = _InlineResponse2006Data["default"].constructFromObject(data['data']);
        }
      }

      return obj;
    }
  }]);

  return InlineResponse2006;
}();
/**
 * Mensaje de respuesta
 * @member {String} message
 */


InlineResponse2006.prototype['message'] = undefined;
/**
 * @member {module:model/InlineResponse2006Data} data
 */

InlineResponse2006.prototype['data'] = undefined;
var _default = InlineResponse2006;
exports["default"] = _default;