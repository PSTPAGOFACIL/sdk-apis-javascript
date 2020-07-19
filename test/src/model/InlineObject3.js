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
 * The InlineObject3 model module.
 * @module model/InlineObject3
 * @version 2.1.0
 */
class InlineObject3 {
    /**
     * Constructs a new <code>InlineObject3</code>.
     * @alias module:model/InlineObject3
     * @param url {String} La url que recibirá un POST para notificaciones
     * @param method {module:model/InlineObject3.MethodEnum} Método HTTP a ser usado durante el callback
     * @param webhook {module:model/InlineObject3.WebhookEnum} Tipo de evento del webhook
     * @param idUser {String} Id del usuario que quiere crear el webhook
     */
    constructor(url, method, webhook, idUser) { 
        
        InlineObject3.initialize(this, url, method, webhook, idUser);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, url, method, webhook, idUser) { 
        obj['url'] = url;
        obj['method'] = method;
        obj['webhook'] = webhook;
        obj['idUser'] = idUser;
    }

    /**
     * Constructs a <code>InlineObject3</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject3} obj Optional instance to populate.
     * @return {module:model/InlineObject3} The populated <code>InlineObject3</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineObject3();

            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('method')) {
                obj['method'] = ApiClient.convertToType(data['method'], 'String');
            }
            if (data.hasOwnProperty('webhook')) {
                obj['webhook'] = ApiClient.convertToType(data['webhook'], 'String');
            }
            if (data.hasOwnProperty('idUser')) {
                obj['idUser'] = ApiClient.convertToType(data['idUser'], 'String');
            }
        }
        return obj;
    }


}

/**
 * La url que recibirá un POST para notificaciones
 * @member {String} url
 */
InlineObject3.prototype['url'] = undefined;

/**
 * Método HTTP a ser usado durante el callback
 * @member {module:model/InlineObject3.MethodEnum} method
 */
InlineObject3.prototype['method'] = undefined;

/**
 * Tipo de evento del webhook
 * @member {module:model/InlineObject3.WebhookEnum} webhook
 */
InlineObject3.prototype['webhook'] = undefined;

/**
 * Id del usuario que quiere crear el webhook
 * @member {String} idUser
 */
InlineObject3.prototype['idUser'] = undefined;





/**
 * Allowed values for the <code>method</code> property.
 * @enum {String}
 * @readonly
 */
InlineObject3['MethodEnum'] = {

    /**
     * value: "POST"
     * @const
     */
    "POST": "POST",

    /**
     * value: "GET"
     * @const
     */
    "GET": "GET"
};


/**
 * Allowed values for the <code>webhook</code> property.
 * @enum {String}
 * @readonly
 */
InlineObject3['WebhookEnum'] = {

    /**
     * value: "remittances"
     * @const
     */
    "remittances": "remittances"
};



export default InlineObject3;
