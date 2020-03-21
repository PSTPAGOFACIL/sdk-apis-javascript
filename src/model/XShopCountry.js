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
 * The XShopCountry model module.
 * @module model/XShopCountry
 * @version 2.1.4
 */
class XShopCountry {
    /**
     * Constructs a new <code>XShopCountry</code>.
     * Codigo de 2 caracteres para paises. &lt;br&gt;&lt;br&gt; Info:&lt;a href&#x3D;&#39;https://en.wikipedia.org/wiki/ISO_3166-1#Current_codes&#39;&gt;ISO 3166-1 Alpha2-code&lt;/a&gt;
     * @alias module:model/XShopCountry
     */
    constructor() { 
        
        XShopCountry.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>XShopCountry</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/XShopCountry} obj Optional instance to populate.
     * @return {module:model/XShopCountry} The populated <code>XShopCountry</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new XShopCountry();

        }
        return obj;
    }


}






export default XShopCountry;

