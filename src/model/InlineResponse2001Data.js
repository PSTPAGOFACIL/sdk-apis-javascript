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
import InlineResponse2001DataItems from './InlineResponse2001DataItems';
import InlineResponse2001DataNullifications from './InlineResponse2001DataNullifications';

/**
 * The InlineResponse2001Data model module.
 * @module model/InlineResponse2001Data
 * @version 2.1.4
 */
class InlineResponse2001Data {
    /**
     * Constructs a new <code>InlineResponse2001Data</code>.
     * @alias module:model/InlineResponse2001Data
     */
    constructor() { 
        
        InlineResponse2001Data.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse2001Data</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2001Data} obj Optional instance to populate.
     * @return {module:model/InlineResponse2001Data} The populated <code>InlineResponse2001Data</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2001Data();

            if (data.hasOwnProperty('totalRemittances')) {
                obj['totalRemittances'] = ApiClient.convertToType(data['totalRemittances'], 'Number');
            }
            if (data.hasOwnProperty('items')) {
                obj['items'] = ApiClient.convertToType(data['items'], [InlineResponse2001DataItems]);
            }
            if (data.hasOwnProperty('totalTransactions')) {
                obj['totalTransactions'] = ApiClient.convertToType(data['totalTransactions'], 'Number');
            }
            if (data.hasOwnProperty('totalNullification')) {
                obj['totalNullification'] = ApiClient.convertToType(data['totalNullification'], 'Number');
            }
            if (data.hasOwnProperty('nullifications')) {
                obj['nullifications'] = ApiClient.convertToType(data['nullifications'], [InlineResponse2001DataNullifications]);
            }
        }
        return obj;
    }


}

/**
 * Total de los abonos
 * @member {Number} totalRemittances
 */
InlineResponse2001Data.prototype['totalRemittances'] = undefined;

/**
 * @member {Array.<module:model/InlineResponse2001DataItems>} items
 */
InlineResponse2001Data.prototype['items'] = undefined;

/**
 * Total de transacciones
 * @member {Number} totalTransactions
 */
InlineResponse2001Data.prototype['totalTransactions'] = undefined;

/**
 * Total de anulaciones
 * @member {Number} totalNullification
 */
InlineResponse2001Data.prototype['totalNullification'] = undefined;

/**
 * @member {Array.<module:model/InlineResponse2001DataNullifications>} nullifications
 */
InlineResponse2001Data.prototype['nullifications'] = undefined;






export default InlineResponse2001Data;

