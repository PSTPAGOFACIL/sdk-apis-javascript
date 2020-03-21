"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InlineResponse = _interopRequireDefault(require("../model/InlineResponse2001"));

var _InlineResponse2 = _interopRequireDefault(require("../model/InlineResponse400"));

var _InlineResponse3 = _interopRequireDefault(require("../model/InlineResponse500"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Remittances service.
* @module api/RemittancesApi
* @version 2.1.0
*/
var RemittancesApi = /*#__PURE__*/function () {
  /**
  * Constructs a new RemittancesApi. 
  * @alias module:api/RemittancesApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function RemittancesApi(apiClient) {
    _classCallCheck(this, RemittancesApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the remittancesConciliationGet operation.
   * @callback module:api/RemittancesApi~remittancesConciliationGetCallback
   * @param {String} error Error message, if any.
   * @param {module:model/InlineResponse2001} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Permite obtener la conciliación de los abonos
   * @param {String} email Email a consultar
   * @param {Date} _date Fecha de consulta año-mes-dia <br> Ej: 2019-12-31
   * @param {module:api/RemittancesApi~remittancesConciliationGetCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/InlineResponse2001}
   */


  _createClass(RemittancesApi, [{
    key: "remittancesConciliationGet",
    value: function remittancesConciliationGet(email, _date, callback) {
      var postBody = null; // verify the required parameter 'email' is set

      if (email === undefined || email === null) {
        throw new Error("Missing the required parameter 'email' when calling remittancesConciliationGet");
      } // verify the required parameter '_date' is set


      if (_date === undefined || _date === null) {
        throw new Error("Missing the required parameter '_date' when calling remittancesConciliationGet");
      }

      var pathParams = {};
      var queryParams = {
        'email': email,
        'date': _date
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['JWTToken'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _InlineResponse["default"];
      return this.apiClient.callApi('/remittances/conciliation', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return RemittancesApi;
}();

exports["default"] = RemittancesApi;