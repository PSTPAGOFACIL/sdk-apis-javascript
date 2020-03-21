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
/**
* Enum class NullificationStatus.
* @enum {}
* @readonly
*/
export default class NullificationStatus {
    
        /**
         * value: "processing"
         * @const
         */
        "processing" = "processing";

    
        /**
         * value: "failed"
         * @const
         */
        "failed" = "failed";

    
        /**
         * value: "completed"
         * @const
         */
        "completed" = "completed";

    

    /**
    * Returns a <code>NullificationStatus</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/NullificationStatus} The enum <code>NullificationStatus</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}
