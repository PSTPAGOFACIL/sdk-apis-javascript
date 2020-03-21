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
 * The InlineResponse2009 model module.
 * @module model/InlineResponse2009
 * @version 2.1.0
 */
var InlineResponse2009 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse2009</code>.
   * @alias module:model/InlineResponse2009
   * @param id {Number} Identificador del usuario
   * @param idAuth0 {String} Identificador del usuario
   * @param username {String} Nombre del usuario
   * @param email {String} Email del usuario
   * @param status {Number} Define el estado del usuario en inscripcion
   * @param bloqueo {Boolean} Define si el usuario esta bloqueado
   * @param createdAt {String} Fecha de creacion del usuario
   */
  function InlineResponse2009(id, idAuth0, username, email, status, bloqueo, createdAt) {
    _classCallCheck(this, InlineResponse2009);

    InlineResponse2009.initialize(this, id, idAuth0, username, email, status, bloqueo, createdAt);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse2009, null, [{
    key: "initialize",
    value: function initialize(obj, id, idAuth0, username, email, status, bloqueo, createdAt) {
      obj['id'] = id;
      obj['idAuth0'] = idAuth0;
      obj['username'] = username;
      obj['email'] = email;
      obj['status'] = status;
      obj['bloqueo'] = bloqueo;
      obj['createdAt'] = createdAt;
    }
    /**
     * Constructs a <code>InlineResponse2009</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2009} obj Optional instance to populate.
     * @return {module:model/InlineResponse2009} The populated <code>InlineResponse2009</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse2009();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('idAuth0')) {
          obj['idAuth0'] = _ApiClient["default"].convertToType(data['idAuth0'], 'String');
        }

        if (data.hasOwnProperty('username')) {
          obj['username'] = _ApiClient["default"].convertToType(data['username'], 'String');
        }

        if (data.hasOwnProperty('email')) {
          obj['email'] = _ApiClient["default"].convertToType(data['email'], 'String');
        }

        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient["default"].convertToType(data['status'], 'Number');
        }

        if (data.hasOwnProperty('bloqueo')) {
          obj['bloqueo'] = _ApiClient["default"].convertToType(data['bloqueo'], 'Boolean');
        }

        if (data.hasOwnProperty('createdAt')) {
          obj['createdAt'] = _ApiClient["default"].convertToType(data['createdAt'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InlineResponse2009;
}();
/**
 * Identificador del usuario
 * @member {Number} id
 */


InlineResponse2009.prototype['id'] = undefined;
/**
 * Identificador del usuario
 * @member {String} idAuth0
 */

InlineResponse2009.prototype['idAuth0'] = undefined;
/**
 * Nombre del usuario
 * @member {String} username
 */

InlineResponse2009.prototype['username'] = undefined;
/**
 * Email del usuario
 * @member {String} email
 */

InlineResponse2009.prototype['email'] = undefined;
/**
 * Define el estado del usuario en inscripcion
 * @member {Number} status
 */

InlineResponse2009.prototype['status'] = undefined;
/**
 * Define si el usuario esta bloqueado
 * @member {Boolean} bloqueo
 */

InlineResponse2009.prototype['bloqueo'] = undefined;
/**
 * Fecha de creacion del usuario
 * @member {String} createdAt
 */

InlineResponse2009.prototype['createdAt'] = undefined;
var _default = InlineResponse2009;
exports["default"] = _default;