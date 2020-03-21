"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InlineObject = _interopRequireDefault(require("../model/InlineObject"));

var _InlineObject2 = _interopRequireDefault(require("../model/InlineObject1"));

var _InlineResponse = _interopRequireDefault(require("../model/InlineResponse2002"));

var _InlineResponse2 = _interopRequireDefault(require("../model/InlineResponse2003"));

var _InlineResponse3 = _interopRequireDefault(require("../model/InlineResponse2004"));

var _InlineResponse4 = _interopRequireDefault(require("../model/InlineResponse2005"));

var _InlineResponse5 = _interopRequireDefault(require("../model/InlineResponse2006"));

var _InlineResponse6 = _interopRequireDefault(require("../model/InlineResponse400"));

var _InlineResponse7 = _interopRequireDefault(require("../model/InlineResponse4011"));

var _InlineResponse8 = _interopRequireDefault(require("../model/InlineResponse409"));

var _InlineResponse9 = _interopRequireDefault(require("../model/InlineResponse500"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Trxs service.
* @module api/TrxsApi
* @version 2.1.0
*/
var TrxsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new TrxsApi. 
  * @alias module:api/TrxsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function TrxsApi(apiClient) {
    _classCallCheck(this, TrxsApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the trxsIdGet operation.
   * @callback module:api/TrxsApi~trxsIdGetCallback
   * @param {String} error Error message, if any.
   * @param {module:model/InlineResponse2003} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Obtiene la informacion de la transacción exitosa, asociada a un id
   * Retorna información de una transacción asociada a un id, para lo que debe ingresarse en el URL el ID de la transacción a consultar. <br> El token de autorización es el obtenido a través de /Login (\"Inherit from parent\") <br> Endpoints <br> - Producción https://apis.pgf.cl/trxs/{id} <br> - Desarrollo https://apis-dev.pgf.cl/trxs/{id}
   * @param {Number} id 
   * @param {module:api/TrxsApi~trxsIdGetCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/InlineResponse2003}
   */


  _createClass(TrxsApi, [{
    key: "trxsIdGet",
    value: function trxsIdGet(id, callback) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling trxsIdGet");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['JWTToken'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _InlineResponse2["default"];
      return this.apiClient.callApi('/trxs/{id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the trxsIdTrxNullificationGet operation.
     * @callback module:api/TrxsApi~trxsIdTrxNullificationGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2005} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Obtiene las anulaciones asociadas a una transacción
     * @param {Number} idTrx 
     * @param {module:api/TrxsApi~trxsIdTrxNullificationGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2005}
     */

  }, {
    key: "trxsIdTrxNullificationGet",
    value: function trxsIdTrxNullificationGet(idTrx, callback) {
      var postBody = null; // verify the required parameter 'idTrx' is set

      if (idTrx === undefined || idTrx === null) {
        throw new Error("Missing the required parameter 'idTrx' when calling trxsIdTrxNullificationGet");
      }

      var pathParams = {
        'idTrx': idTrx
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['JWTToken'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _InlineResponse4["default"];
      return this.apiClient.callApi('/trxs/{idTrx}/nullification/', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the trxsIdTrxNullificationPost operation.
     * @callback module:api/TrxsApi~trxsIdTrxNullificationPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2004} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Envía una transacción a anular
     * @param {Number} idTrx 
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject1} opts.inlineObject1 
     * @param {module:api/TrxsApi~trxsIdTrxNullificationPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2004}
     */

  }, {
    key: "trxsIdTrxNullificationPost",
    value: function trxsIdTrxNullificationPost(idTrx, opts, callback) {
      opts = opts || {};
      var postBody = opts['inlineObject1']; // verify the required parameter 'idTrx' is set

      if (idTrx === undefined || idTrx === null) {
        throw new Error("Missing the required parameter 'idTrx' when calling trxsIdTrxNullificationPost");
      }

      var pathParams = {
        'idTrx': idTrx
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['JWTToken'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _InlineResponse3["default"];
      return this.apiClient.callApi('/trxs/{idTrx}/nullification', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the trxsIdTrxNullificationStatusGet operation.
     * @callback module:api/TrxsApi~trxsIdTrxNullificationStatusGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2006} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Obtiene el estado de una anulación
     * @param {Number} idTrx 
     * @param {String} verificationToken 
     * @param {module:api/TrxsApi~trxsIdTrxNullificationStatusGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2006}
     */

  }, {
    key: "trxsIdTrxNullificationStatusGet",
    value: function trxsIdTrxNullificationStatusGet(idTrx, verificationToken, callback) {
      var postBody = null; // verify the required parameter 'idTrx' is set

      if (idTrx === undefined || idTrx === null) {
        throw new Error("Missing the required parameter 'idTrx' when calling trxsIdTrxNullificationStatusGet");
      } // verify the required parameter 'verificationToken' is set


      if (verificationToken === undefined || verificationToken === null) {
        throw new Error("Missing the required parameter 'verificationToken' when calling trxsIdTrxNullificationStatusGet");
      }

      var pathParams = {
        'idTrx': idTrx
      };
      var queryParams = {
        'verificationToken': verificationToken
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['JWTToken'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _InlineResponse5["default"];
      return this.apiClient.callApi('/trxs/{idTrx}/nullification/status', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the trxsPost operation.
     * @callback module:api/TrxsApi~trxsPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2002} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Crea una transaccion en estado pendiente. <br> La respuesta tiene distintos métodos y URLs para pago
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject} opts.inlineObject 
     * @param {module:api/TrxsApi~trxsPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2002}
     */

  }, {
    key: "trxsPost",
    value: function trxsPost(opts, callback) {
      opts = opts || {};
      var postBody = opts['inlineObject'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _InlineResponse["default"];
      return this.apiClient.callApi('/trxs', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return TrxsApi;
}();

exports["default"] = TrxsApi;