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
import Status from './Status';

/**
 * The InlineResponse2003Data model module.
 * @module model/InlineResponse2003Data
 * @version 2.1.0
 */
class InlineResponse2003Data {
    /**
     * Constructs a new <code>InlineResponse2003Data</code>.
     * @alias module:model/InlineResponse2003Data
     */
    constructor() { 
        
        InlineResponse2003Data.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse2003Data</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2003Data} obj Optional instance to populate.
     * @return {module:model/InlineResponse2003Data} The populated <code>InlineResponse2003Data</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2003Data();

            if (data.hasOwnProperty('idTrx')) {
                obj['idTrx'] = ApiClient.convertToType(data['idTrx'], 'Number');
            }
            if (data.hasOwnProperty('idService')) {
                obj['idService'] = ApiClient.convertToType(data['idService'], 'Number');
            }
            if (data.hasOwnProperty('orderIdTienda')) {
                obj['orderIdTienda'] = ApiClient.convertToType(data['orderIdTienda'], 'String');
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
            }
            if (data.hasOwnProperty('cost')) {
                obj['cost'] = ApiClient.convertToType(data['cost'], 'Number');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('authCode')) {
                obj['authCode'] = ApiClient.convertToType(data['authCode'], 'Number');
            }
            if (data.hasOwnProperty('createdAt')) {
                obj['createdAt'] = ApiClient.convertToType(data['createdAt'], 'Date');
            }
            if (data.hasOwnProperty('updatedAt')) {
                obj['updatedAt'] = ApiClient.convertToType(data['updatedAt'], 'Date');
            }
            if (data.hasOwnProperty('callbackURL')) {
                obj['callbackURL'] = ApiClient.convertToType(data['callbackURL'], 'String');
            }
            if (data.hasOwnProperty('completeURL')) {
                obj['completeURL'] = ApiClient.convertToType(data['completeURL'], 'String');
            }
            if (data.hasOwnProperty('cancelURL')) {
                obj['cancelURL'] = ApiClient.convertToType(data['cancelURL'], 'String');
            }
            if (data.hasOwnProperty('ip')) {
                obj['ip'] = ApiClient.convertToType(data['ip'], 'String');
            }
            if (data.hasOwnProperty('browserData')) {
                obj['browserData'] = ApiClient.convertToType(data['browserData'], 'String');
            }
            if (data.hasOwnProperty('source')) {
                obj['source'] = ApiClient.convertToType(data['source'], 'String');
            }
            if (data.hasOwnProperty('timestamp')) {
                obj['timestamp'] = ApiClient.convertToType(data['timestamp'], 'String');
            }
            if (data.hasOwnProperty('paymentTypeCode')) {
                obj['paymentTypeCode'] = ApiClient.convertToType(data['paymentTypeCode'], 'String');
            }
            if (data.hasOwnProperty('sharesNumber')) {
                obj['sharesNumber'] = ApiClient.convertToType(data['sharesNumber'], 'Number');
            }
            if (data.hasOwnProperty('responceCode')) {
                obj['responceCode'] = ApiClient.convertToType(data['responceCode'], 'Number');
            }
            if (data.hasOwnProperty('vci')) {
                obj['vci'] = ApiClient.convertToType(data['vci'], 'String');
            }
            if (data.hasOwnProperty('abonos')) {
                obj['abonos'] = ApiClient.convertToType(data['abonos'], ['String']);
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = Status.constructFromObject(data['status']);
            }
        }
        return obj;
    }


}

/**
 * ID de la transacción en Pago Fácil
 * @member {Number} idTrx
 */
InlineResponse2003Data.prototype['idTrx'] = undefined;

/**
 * ID del servicio
 * @member {Number} idService
 */
InlineResponse2003Data.prototype['idService'] = undefined;

/**
 * ID del comercio para identificar su tienda
 * @member {String} orderIdTienda
 */
InlineResponse2003Data.prototype['orderIdTienda'] = undefined;

/**
 * Monto de la transacción
 * @member {Number} amount
 */
InlineResponse2003Data.prototype['amount'] = undefined;

/**
 * Costo de la transacción
 * @member {Number} cost
 */
InlineResponse2003Data.prototype['cost'] = undefined;

/**
 * Email
 * @member {String} email
 */
InlineResponse2003Data.prototype['email'] = undefined;

/**
 * Codigo de autorizacion de la compra
 * @member {Number} authCode
 */
InlineResponse2003Data.prototype['authCode'] = undefined;

/**
 * Fecha de creación
 * @member {Date} createdAt
 */
InlineResponse2003Data.prototype['createdAt'] = undefined;

/**
 * Fecha de actualización
 * @member {Date} updatedAt
 */
InlineResponse2003Data.prototype['updatedAt'] = undefined;

/**
 * url a la que se llama una vez la transacción es completada
 * @member {String} callbackURL
 */
InlineResponse2003Data.prototype['callbackURL'] = undefined;

/**
 * url a la que se redireciona al cliente una vez la transacción es completada
 * @member {String} completeURL
 */
InlineResponse2003Data.prototype['completeURL'] = undefined;

/**
 * currently out of order
 * @member {String} cancelURL
 */
InlineResponse2003Data.prototype['cancelURL'] = undefined;

/**
 * ip adress of the device from where transaction was completed
 * @member {String} ip
 */
InlineResponse2003Data.prototype['ip'] = undefined;

/**
 * data from the browser where the transaction was completed
 * @member {String} browserData
 */
InlineResponse2003Data.prototype['browserData'] = undefined;

/**
 * Método de pago
 * @member {String} source
 */
InlineResponse2003Data.prototype['source'] = undefined;

/**
 * uso transbank
 * @member {String} timestamp
 */
InlineResponse2003Data.prototype['timestamp'] = undefined;

/**
 * Forma de pago que usa el cliente
 * @member {String} paymentTypeCode
 */
InlineResponse2003Data.prototype['paymentTypeCode'] = undefined;

/**
 * Cuotas de la transacción
 * @member {Number} sharesNumber
 */
InlineResponse2003Data.prototype['sharesNumber'] = undefined;

/**
 * uso transbank
 * @member {Number} responceCode
 */
InlineResponse2003Data.prototype['responceCode'] = undefined;

/**
 * uso transbank
 * @member {String} vci
 */
InlineResponse2003Data.prototype['vci'] = undefined;

/**
 * Abonos relacionados a la transacción
 * @member {Array.<String>} abonos
 */
InlineResponse2003Data.prototype['abonos'] = undefined;

/**
 * @member {module:model/Status} status
 */
InlineResponse2003Data.prototype['status'] = undefined;






export default InlineResponse2003Data;

