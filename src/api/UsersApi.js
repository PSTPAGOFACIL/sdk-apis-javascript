/**
 * API Pago Facil
 * API de Pago Fácil
 *
 * The version of the OpenAPI document: 2.1.4
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import InlineResponse2009 from '../model/InlineResponse2009';
import InlineResponse400 from '../model/InlineResponse400';
import InlineResponse4012 from '../model/InlineResponse4012';

/**
* Users service.
* @module api/UsersApi
* @version 2.1.4
*/
export default class UsersApi {

    /**
    * Constructs a new UsersApi. 
    * @alias module:api/UsersApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
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
    usersGet(callback) {
      let postBody = null;

      let pathParams = {
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
      let returnType = InlineResponse2009;
      return this.apiClient.callApi(
        '/users', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
