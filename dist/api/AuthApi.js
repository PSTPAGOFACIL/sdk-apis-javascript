"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InlineResponse = _interopRequireDefault(require("../model/InlineResponse400"));

var _InlineResponse2 = _interopRequireDefault(require("../model/InlineResponse401"));

var _InlineResponse3 = _interopRequireDefault(require("../model/InlineResponse500"));

var _LoginBody = _interopRequireDefault(require("../model/LoginBody"));

var _LoginResponse = _interopRequireDefault(require("../model/LoginResponse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Auth service.
* @module api/AuthApi
* @version 2.1.0
*/
var AuthApi = /*#__PURE__*/function () {
  /**
  * Constructs a new AuthApi. 
  * @alias module:api/AuthApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function AuthApi(apiClient) {
    _classCallCheck(this, AuthApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the usersLoginPost operation.
   * @callback module:api/AuthApi~usersLoginPostCallback
   * @param {String} error Error message, if any.
   * @param {module:model/LoginResponse} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Autentificación con usuario y clave.
   * Retorna un token con el que se deben realizar las llamadas al resto de los endpoints del API. Sin este token no se pueden acceder a los endpoints. <br> Se deben ingresar \"user\" y \"password\" válidos, creados a través del dashborad de Pago Fácil <br> No requiere configuración de autorización <br> Endpoints <br> - Producción https://apis.pgf.cl <br> - Desarrollo https://apis-dev.pgf.cl
   * @param {Object} opts Optional parameters
   * @param {module:model/LoginBody} opts.loginBody 
   * @param {module:api/AuthApi~usersLoginPostCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/LoginResponse}
   */


  _createClass(AuthApi, [{
    key: "usersLoginPost",
    value: function usersLoginPost(opts, callback) {
      opts = opts || {};
      var postBody = opts['loginBody'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _LoginResponse["default"];
      return this.apiClient.callApi('/users/login', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return AuthApi;
}();

exports["default"] = AuthApi;