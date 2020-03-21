"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InlineResponse = _interopRequireDefault(require("../model/InlineResponse200"));

var _InlineResponse2 = _interopRequireDefault(require("../model/InlineResponse400"));

var _InlineResponse3 = _interopRequireDefault(require("../model/InlineResponse403"));

var _InlineResponse4 = _interopRequireDefault(require("../model/InlineResponse404"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Indicators service.
* @module api/IndicatorsApi
* @version 2.1.0
*/
var IndicatorsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new IndicatorsApi. 
  * @alias module:api/IndicatorsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function IndicatorsApi(apiClient) {
    _classCallCheck(this, IndicatorsApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the indicatorsRemittancesGet operation.
   * @callback module:api/IndicatorsApi~indicatorsRemittancesGetCallback
   * @param {String} error Error message, if any.
   * @param {module:model/InlineResponse200} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Obtiene los datos de los abonos (remittances) realizados en una fecha específica y los futuros, además del saldo disponible
   * 1.-Requiere el uso del Token rescatado en el LOGIN (autorización heredada) <br> 2.-Se debe configurar los parámetros como \"Query Params\" <br> 3.-Solo los usuarios Administradores pueden obtener información etregando el parámetros \"IdUser\". Para usuarios no Administradores este parámetro no se informa y siempre retronará información del usuario logado. 4.-Se debe informar alguno de los parámetros, de lo contrario la API responde con un error <br>     -Setear en true or false los parámetros \"availableBalance\" o \"futureRemittances\" <br>     -Entregar una fecha en el parámetro \"remittanceByDate\"<br>     
   * @param {Object} opts Optional parameters
   * @param {Number} opts.idUser ID del usuario a consultar
   * @param {Number} opts.idTrx ID de la transacción a consultar
   * @param {Boolean} opts.availableBalance Define si se desea obtener el saldo disponible del usuario
   * @param {Date} opts.remittanceByDate Fecha de la que se desea obtener información del abono
   * @param {Boolean} opts.futureRemittances Define si se desea obtener los abonos futuros
   * @param {module:api/IndicatorsApi~indicatorsRemittancesGetCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/InlineResponse200}
   */


  _createClass(IndicatorsApi, [{
    key: "indicatorsRemittancesGet",
    value: function indicatorsRemittancesGet(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'idUser': opts['idUser'],
        'idTrx': opts['idTrx'],
        'availableBalance': opts['availableBalance'],
        'remittanceByDate': opts['remittanceByDate'],
        'futureRemittances': opts['futureRemittances']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['JWTToken'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _InlineResponse["default"];
      return this.apiClient.callApi('/indicators/remittances', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return IndicatorsApi;
}();

exports["default"] = IndicatorsApi;