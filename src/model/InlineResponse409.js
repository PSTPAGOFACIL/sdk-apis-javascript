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

import ApiClient from '../ApiClient';

/**
 * The InlineResponse409 model module.
 * @module model/InlineResponse409
 * @version 2.1.4
 */
class InlineResponse409 {
    /**
     * Constructs a new <code>InlineResponse409</code>.
     * @alias module:model/InlineResponse409
     */
    constructor() { 
        
        InlineResponse409.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse409</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse409} obj Optional instance to populate.
     * @return {module:model/InlineResponse409} The populated <code>InlineResponse409</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse409();

            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
            if (data.hasOwnProperty('errors')) {
                obj['errors'] = ApiClient.convertToType(data['errors'], [Object]);
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], Object);
            }
        }
        return obj;
    }


}

/**
 * @member {String} message
 */
InlineResponse409.prototype['message'] = undefined;

/**
 * @member {Array.<Object>} errors
 */
InlineResponse409.prototype['errors'] = undefined;

/**
 * @member {Object} data
 */
InlineResponse409.prototype['data'] = undefined;






export default InlineResponse409;

