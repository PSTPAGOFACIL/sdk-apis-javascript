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
 * The InlineResponse2004Data model module.
 * @module model/InlineResponse2004Data
 * @version 2.1.0
 */
var InlineResponse2004Data = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse2004Data</code>.
   * @alias module:model/InlineResponse2004Data
   */
  function InlineResponse2004Data() {
    _classCallCheck(this, InlineResponse2004Data);

    InlineResponse2004Data.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse2004Data, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InlineResponse2004Data</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2004Data} obj Optional instance to populate.
     * @return {module:model/InlineResponse2004Data} The populated <code>InlineResponse2004Data</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse2004Data();

        if (data.hasOwnProperty('verificationToken')) {
          obj['verificationToken'] = _ApiClient["default"].convertToType(data['verificationToken'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InlineResponse2004Data;
}();
/**
 * Token uuid
 * @member {String} verificationToken
 */


InlineResponse2004Data.prototype['verificationToken'] = undefined;
var _default = InlineResponse2004Data;
exports["default"] = _default;