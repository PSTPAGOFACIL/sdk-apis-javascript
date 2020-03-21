"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InlineResponse2002BodyData = _interopRequireDefault(require("./InlineResponse2002BodyData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InlineResponse2002Body model module.
 * @module model/InlineResponse2002Body
 * @version 2.1.0
 */
var InlineResponse2002Body = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse2002Body</code>.
   * @alias module:model/InlineResponse2002Body
   */
  function InlineResponse2002Body() {
    _classCallCheck(this, InlineResponse2002Body);

    InlineResponse2002Body.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse2002Body, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InlineResponse2002Body</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2002Body} obj Optional instance to populate.
     * @return {module:model/InlineResponse2002Body} The populated <code>InlineResponse2002Body</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse2002Body();

        if (data.hasOwnProperty('message')) {
          obj['message'] = _ApiClient["default"].convertToType(data['message'], 'String');
        }

        if (data.hasOwnProperty('data')) {
          obj['data'] = _InlineResponse2002BodyData["default"].constructFromObject(data['data']);
        }
      }

      return obj;
    }
  }]);

  return InlineResponse2002Body;
}();
/**
 * @member {String} message
 */


InlineResponse2002Body.prototype['message'] = undefined;
/**
 * @member {module:model/InlineResponse2002BodyData} data
 */

InlineResponse2002Body.prototype['data'] = undefined;
var _default = InlineResponse2002Body;
exports["default"] = _default;