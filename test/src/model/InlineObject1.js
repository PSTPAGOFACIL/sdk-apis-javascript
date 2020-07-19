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
import NullificationType from './NullificationType';

/**
 * The InlineObject1 model module.
 * @module model/InlineObject1
 * @version 2.1.0
 */
class InlineObject1 {
    /**
     * Constructs a new <code>InlineObject1</code>.
     * @alias module:model/InlineObject1
     * @param amount {Number} Monto de la transacción
     * @param type {module:model/NullificationType} 
     */
    constructor(amount, type) { 
        
        InlineObject1.initialize(this, amount, type);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, amount, type) { 
        obj['amount'] = amount;
        obj['type'] = type;
    }

    /**
     * Constructs a <code>InlineObject1</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject1} obj Optional instance to populate.
     * @return {module:model/InlineObject1} The populated <code>InlineObject1</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineObject1();

            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = NullificationType.constructFromObject(data['type']);
            }
            if (data.hasOwnProperty('nullifyTbk')) {
                obj['nullifyTbk'] = ApiClient.convertToType(data['nullifyTbk'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * Monto de la transacción
 * @member {Number} amount
 */
InlineObject1.prototype['amount'] = undefined;

/**
 * @member {module:model/NullificationType} type
 */
InlineObject1.prototype['type'] = undefined;

/**
 * Identifica si se desea anular la trasacción en transbank
 * @member {Boolean} nullifyTbk
 */
InlineObject1.prototype['nullifyTbk'] = undefined;






export default InlineObject1;
