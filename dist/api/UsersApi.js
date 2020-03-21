"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InlineResponse = _interopRequireDefault(require("../model/InlineResponse2009"));

var _InlineResponse2 = _interopRequireDefault(require("../model/InlineResponse400"));

var _InlineResponse3 = _interopRequireDefault(require("../model/InlineResponse4012"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Users service.
* @module api/UsersApi
* @version 2.1.0
*/
var UsersApi = /*#__PURE__*/function () {
  /**
  * Constructs a new UsersApi. 
  * @alias module:api/UsersApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function UsersApi(apiClient) {
    _classCallCheck(this, UsersApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the usersGet operation.
   * @callback module:api/UsersApi~usersGetCallback
   * @param {String} error Error message, if any.
   * @param {module:model/InlineResponse2009} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Obtener informacion del usuario.
   * Este endpoint retorna la informacion del usuario.
   * @param {module:api/UsersApi~usersGetCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/InlineResponse2009}
   */


  _createClass(UsersApi, [{
    key: "usersGet",
    value: function usersGet(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['JWTToken'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _InlineResponse["default"];
      return this.apiClient.callApi('/users', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return UsersApi;
}();

exports["default"] = UsersApi;