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
import InlineObject2 from '../model/InlineObject2';
import InlineObject3 from '../model/InlineObject3';
import InlineResponse2007 from '../model/InlineResponse2007';
import InlineResponse201 from '../model/InlineResponse201';
import InlineResponse400 from '../model/InlineResponse400';
import InlineResponse403 from '../model/InlineResponse403';
import InlineResponse500 from '../model/InlineResponse500';

/**
* Webhooks service.
* @module api/WebhooksApi
* @version 2.1.0
*/
export default class WebhooksApi {

    /**
    * Constructs a new WebhooksApi. 
    * @alias module:api/WebhooksApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
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
    webhooksIdUserGet(idUser, callback) {
      let postBody = null;
      // verify the required parameter 'idUser' is set
      if (idUser === undefined || idUser === null) {
        throw new Error("Missing the required parameter 'idUser' when calling webhooksIdUserGet");
      }

      let pathParams = {
        'idUser': idUser
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse2007;
      return this.apiClient.callApi(
        '/webhooks/{idUser}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
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
    webhooksIdUserWebhookDelete(idUser, webhook, callback) {
      let postBody = null;
      // verify the required parameter 'idUser' is set
      if (idUser === undefined || idUser === null) {
        throw new Error("Missing the required parameter 'idUser' when calling webhooksIdUserWebhookDelete");
      }
      // verify the required parameter 'webhook' is set
      if (webhook === undefined || webhook === null) {
        throw new Error("Missing the required parameter 'webhook' when calling webhooksIdUserWebhookDelete");
      }

      let pathParams = {
        'idUser': idUser,
        'webhook': webhook
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse201;
      return this.apiClient.callApi(
        '/webhooks/{idUser}/{webhook}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
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
    webhooksIdUserWebhookPut(idUser, webhook, opts, callback) {
      opts = opts || {};
      let postBody = opts['inlineObject3'];
      // verify the required parameter 'idUser' is set
      if (idUser === undefined || idUser === null) {
        throw new Error("Missing the required parameter 'idUser' when calling webhooksIdUserWebhookPut");
      }
      // verify the required parameter 'webhook' is set
      if (webhook === undefined || webhook === null) {
        throw new Error("Missing the required parameter 'webhook' when calling webhooksIdUserWebhookPut");
      }

      let pathParams = {
        'idUser': idUser,
        'webhook': webhook
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
      let returnType = InlineResponse201;
      return this.apiClient.callApi(
        '/webhooks/{idUser}/{webhook}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
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
    webhooksPost(opts, callback) {
      opts = opts || {};
      let postBody = opts['inlineObject2'];

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
      let returnType = InlineResponse201;
      return this.apiClient.callApi(
        '/webhooks', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}