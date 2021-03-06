/**
 * API Pago Facil
 * API de Pago Fácil
 *
 * The version of the OpenAPI document: 2.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import InlineObject from '../model/InlineObject';
import InlineObject1 from '../model/InlineObject1';
import InlineResponse2002 from '../model/InlineResponse2002';
import InlineResponse2003 from '../model/InlineResponse2003';
import InlineResponse2004 from '../model/InlineResponse2004';
import InlineResponse2005 from '../model/InlineResponse2005';
import InlineResponse2006 from '../model/InlineResponse2006';
import InlineResponse400 from '../model/InlineResponse400';
import InlineResponse4011 from '../model/InlineResponse4011';
import InlineResponse409 from '../model/InlineResponse409';
import InlineResponse500 from '../model/InlineResponse500';

/**
* Trxs service.
* @module api/TrxsApi
* @version 2.1.0
*/
export default class TrxsApi {

    /**
    * Constructs a new TrxsApi. 
    * @alias module:api/TrxsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
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
    trxsIdGet(id, callback) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling trxsIdGet");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['JWTToken'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse2003;
      return this.apiClient.callApi(
        '/trxs/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
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
    trxsIdTrxNullificationGet(idTrx, callback) {
      let postBody = null;
      // verify the required parameter 'idTrx' is set
      if (idTrx === undefined || idTrx === null) {
        throw new Error("Missing the required parameter 'idTrx' when calling trxsIdTrxNullificationGet");
      }

      let pathParams = {
        'idTrx': idTrx
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['JWTToken'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse2005;
      return this.apiClient.callApi(
        '/trxs/{idTrx}/nullification/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
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
    trxsIdTrxNullificationPost(idTrx, opts, callback) {
      opts = opts || {};
      let postBody = opts['inlineObject1'];
      // verify the required parameter 'idTrx' is set
      if (idTrx === undefined || idTrx === null) {
        throw new Error("Missing the required parameter 'idTrx' when calling trxsIdTrxNullificationPost");
      }

      let pathParams = {
        'idTrx': idTrx
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['JWTToken'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = InlineResponse2004;
      return this.apiClient.callApi(
        '/trxs/{idTrx}/nullification', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
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
    trxsIdTrxNullificationStatusGet(idTrx, verificationToken, callback) {
      let postBody = null;
      // verify the required parameter 'idTrx' is set
      if (idTrx === undefined || idTrx === null) {
        throw new Error("Missing the required parameter 'idTrx' when calling trxsIdTrxNullificationStatusGet");
      }
      // verify the required parameter 'verificationToken' is set
      if (verificationToken === undefined || verificationToken === null) {
        throw new Error("Missing the required parameter 'verificationToken' when calling trxsIdTrxNullificationStatusGet");
      }

      let pathParams = {
        'idTrx': idTrx
      };
      let queryParams = {
        'verificationToken': verificationToken
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['JWTToken'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse2006;
      return this.apiClient.callApi(
        '/trxs/{idTrx}/nullification/status', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
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
    trxsPost(opts, callback) {
      opts = opts || {};
      let postBody = opts['inlineObject'];

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = InlineResponse2002;
      return this.apiClient.callApi(
        '/trxs', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
