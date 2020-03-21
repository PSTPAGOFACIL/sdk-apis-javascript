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
 * The InlineResponse4012 model module.
 * @module model/InlineResponse4012
 * @version 2.1.0
 */
var InlineResponse4012 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse4012</code>.
   * @alias module:model/InlineResponse4012
   */
  function InlineResponse4012() {
    _classCallCheck(this, InlineResponse4012);

    InlineResponse4012.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse4012, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InlineResponse4012</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse4012} obj Optional instance to populate.
     * @return {module:model/InlineResponse4012} The populated <code>InlineResponse4012</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse4012();

        if (data.hasOwnProperty('message')) {
          obj['message'] = _ApiClient["default"].convertToType(data['message'], 'String');
        }

        if (data.hasOwnProperty('errors')) {
          obj['errors'] = _ApiClient["default"].convertToType(data['errors'], [Object]);
        }

        if (data.hasOwnProperty('data')) {
          obj['data'] = _ApiClient["default"].convertToType(data['data'], Object);
        }
      }

      return obj;
    }
  }]);

  return InlineResponse4012;
}();
/**
 * @member {String} message
 */


InlineResponse4012.prototype['message'] = undefined;
/**
 * @member {Array.<Object>} errors
 */

InlineResponse4012.prototype['errors'] = undefined;
/**
 * @member {Object} data
 */

InlineResponse4012.prototype['data'] = undefined;
var _default = InlineResponse4012;
exports["default"] = _default;