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
 * The InlineResponse2001DataDocument model module.
 * @module model/InlineResponse2001DataDocument
 * @version 2.1.0
 */
var InlineResponse2001DataDocument = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse2001DataDocument</code>.
   * @alias module:model/InlineResponse2001DataDocument
   */
  function InlineResponse2001DataDocument() {
    _classCallCheck(this, InlineResponse2001DataDocument);

    InlineResponse2001DataDocument.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse2001DataDocument, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InlineResponse2001DataDocument</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2001DataDocument} obj Optional instance to populate.
     * @return {module:model/InlineResponse2001DataDocument} The populated <code>InlineResponse2001DataDocument</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse2001DataDocument();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InlineResponse2001DataDocument;
}();
/**
 * @member {Number} id
 */


InlineResponse2001DataDocument.prototype['id'] = undefined;
/**
 * @member {String} type
 */

InlineResponse2001DataDocument.prototype['type'] = undefined;
var _default = InlineResponse2001DataDocument;
exports["default"] = _default;