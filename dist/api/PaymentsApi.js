"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InlineResponse = _interopRequireDefault(require("../model/InlineResponse2008"));

var _InlineResponse2 = _interopRequireDefault(require("../model/InlineResponse500"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Payments service.
* @module api/PaymentsApi
* @version 2.1.0
*/
var PaymentsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new PaymentsApi. 
  * @alias module:api/PaymentsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function PaymentsApi(apiClient) {
    _classCallCheck(this, PaymentsApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the paymentsGet operation.
   * @callback module:api/PaymentsApi~paymentsGetCallback
   * @param {String} error Error message, if any.
   * @param {module:model/InlineResponse2008} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Obtiene los medios de pago disponible
   * @param {String} authorization 
   * @param {module:api/PaymentsApi~paymentsGetCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/InlineResponse2008}
   */


  _createClass(PaymentsApi, [{
    key: "paymentsGet",
    value: function paymentsGet(authorization, callback) {
      var postBody = null; // verify the required parameter 'authorization' is set

      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling paymentsGet");
      }

      var pathParams = {};
      var queryParams = {
        'Authorization': authorization
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _InlineResponse["default"];
      return this.apiClient.callApi('/payments', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return PaymentsApi;
}();

exports["default"] = PaymentsApi;