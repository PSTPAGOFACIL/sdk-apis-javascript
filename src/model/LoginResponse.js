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

import ApiClient from '../ApiClient';
import DataLoginResponse from './DataLoginResponse';

/**
 * The LoginResponse model module.
 * @module model/LoginResponse
 * @version 2.1.0
 */
class LoginResponse {
    /**
     * Constructs a new <code>LoginResponse</code>.
     * @alias module:model/LoginResponse
     */
    constructor() { 
        
        LoginResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LoginResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LoginResponse} obj Optional instance to populate.
     * @return {module:model/LoginResponse} The populated <code>LoginResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LoginResponse();

            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
            if (data.hasOwnProperty('error')) {
                obj['error'] = ApiClient.convertToType(data['error'], 'String');
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = DataLoginResponse.constructFromObject(data['data']);
            }
        }
        return obj;
    }


}

/**
 * Mensaje
 * @member {String} message
 */
LoginResponse.prototype['message'] = undefined;

/**
 * Errores
 * @member {String} error
 */
LoginResponse.prototype['error'] = undefined;

/**
 * @member {module:model/DataLoginResponse} data
 */
LoginResponse.prototype['data'] = undefined;






export default LoginResponse;

