"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InlineObject = _interopRequireDefault(require("../model/InlineObject2"));

var _InlineObject2 = _interopRequireDefault(require("../model/InlineObject3"));

var _InlineResponse = _interopRequireDefault(require("../model/InlineResponse2007"));

var _InlineResponse2 = _interopRequireDefault(require("../model/InlineResponse201"));

var _InlineResponse3 = _interopRequireDefault(require("../model/InlineResponse400"));

var _InlineResponse4 = _interopRequireDefault(require("../model/InlineResponse403"));

var _InlineResponse5 = _interopRequireDefault(require("../model/InlineResponse500"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Webhooks service.
* @module api/WebhooksApi
* @version 2.1.0
*/
var WebhooksApi = /*#__PURE__*/function () {
  /**
  * Constructs a new WebhooksApi. 
  * @alias module:api/WebhooksApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function WebhooksApi(apiClient) {
    _classCallCheck(this, WebhooksApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the webhooksIdUserGet operation.
   * @callback module:api/WebhooksApi~webhooksIdUserGetCallback
   * @param {String} error Error message, if any.
   * @param {module:model/InlineResponse2007} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Obtiene la lista de webhooks de un usuario. 
   * @param {String} idUser ID del usuario a consultar
   * @param {module:api/WebhooksApi~webhooksIdUserGetCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/InlineResponse2007}
   */


  _createClass(WebhooksApi, [{
    key: "webhooksIdUserGet",
    value: function webhooksIdUserGet(idUser, callback) {
      var postBody = null; // verify the required parameter 'idUser' is set

      if (idUser === undefined || idUser === null) {
        throw new Error("Missing the required parameter 'idUser' when calling webhooksIdUserGet");
      }

      var pathParams = {
        'idUser': idUser
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _InlineResponse["default"];
      return this.apiClient.callApi('/webhooks/{idUser}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the webhooksIdUserWebhookDelete operation.
     * @callback module:api/WebhooksApi~webhooksIdUserWebhookDeleteCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse201} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Elimina un webhook del usuario y tipo especificados
     * @param {String} idUser ID del usuario a consultar
     * @param {String} webhook Tipo de evento del webhook
     * @param {module:api/WebhooksApi~webhooksIdUserWebhookDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse201}
     */

  }, {
    key: "webhooksIdUserWebhookDelete",
    value: function webhooksIdUserWebhookDelete(idUser, webhook, callback) {
      var postBody = null; // verify the required parameter 'idUser' is set

      if (idUser === undefined || idUser === null) {
        throw new Error("Missing the required parameter 'idUser' when calling webhooksIdUserWebhookDelete");
      } // verify the required parameter 'webhook' is set


      if (webhook === undefined || webhook === null) {
        throw new Error("Missing the required parameter 'webhook' when calling webhooksIdUserWebhookDelete");
      }

      var pathParams = {
        'idUser': idUser,
        'webhook': webhook
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _InlineResponse2["default"];
      return this.apiClient.callApi('/webhooks/{idUser}/{webhook}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the webhooksIdUserWebhookPut operation.
     * @callback module:api/WebhooksApi~webhooksIdUserWebhookPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse201} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Actualiza un webhook para tus servicios. 
     * @param {String} idUser ID del usuario a consultar
     * @param {String} webhook Tipo de evento del webhook
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject3} opts.inlineObject3 
     * @param {module:api/WebhooksApi~webhooksIdUserWebhookPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse201}
     */

  }, {
    key: "webhooksIdUserWebhookPut",
    value: function webhooksIdUserWebhookPut(idUser, webhook, opts, callback) {
      opts = opts || {};
      var postBody = opts['inlineObject3']; // verify the required parameter 'idUser' is set

      if (idUser === undefined || idUser === null) {
        throw new Error("Missing the required parameter 'idUser' when calling webhooksIdUserWebhookPut");
      } // verify the required parameter 'webhook' is set


      if (webhook === undefined || webhook === null) {
        throw new Error("Missing the required parameter 'webhook' when calling webhooksIdUserWebhookPut");
      }

      var pathParams = {
        'idUser': idUser,
        'webhook': webhook
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _InlineResponse2["default"];
      return this.apiClient.callApi('/webhooks/{idUser}/{webhook}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the webhooksPost operation.
     * @callback module:api/WebhooksApi~webhooksPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse201} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Crea un webhook para tus servicios. <br> Se enviará un POST a esta URL cuando se realicen eventos como abonos a tu cuenta.
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject2} opts.inlineObject2 
     * @param {module:api/WebhooksApi~webhooksPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse201}
     */

  }, {
    key: "webhooksPost",
    value: function webhooksPost(opts, callback) {
      opts = opts || {};
      var postBody = opts['inlineObject2'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _InlineResponse2["default"];
      return this.apiClient.callApi('/webhooks', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return WebhooksApi;
}();

exports["default"] = WebhooksApi;