# ApiPagoFacil.InlineResponse2003Data

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**idTrx** | **Number** | ID de la transacción en Pago Fácil | [optional] 
**idService** | **Number** | ID del servicio | [optional] 
**orderIdTienda** | **String** | ID del comercio para identificar su tienda | [optional] 
**amount** | **Number** | Monto de la transacción | [optional] 
**cost** | **Number** | Costo de la transacción | [optional] 
**email** | **String** | Email | [optional] 
**authCode** | **Number** | Codigo de autorizacion de la compra | [optional] 
**createdAt** | **Date** | Fecha de creación | [optional] 
**updatedAt** | **Date** | Fecha de actualización | [optional] 
**callbackURL** | **String** | url a la que se llama una vez la transacción es completada | [optional] 
**completeURL** | **String** | url a la que se redireciona al cliente una vez la transacción es completada | [optional] 
**cancelURL** | **String** | currently out of order | [optional] 
**ip** | **String** | ip adress of the device from where transaction was completed | [optional] 
**browserData** | **String** | data from the browser where the transaction was completed | [optional] 
**source** | **String** | Método de pago | [optional] 
**timestamp** | **String** | uso transbank | [optional] 
**paymentTypeCode** | **String** | Forma de pago que usa el cliente | [optional] 
**sharesNumber** | **Number** | Cuotas de la transacción | [optional] 
**responceCode** | **Number** | uso transbank | [optional] 
**vci** | **String** | uso transbank | [optional] 
**abonos** | **[String]** | Abonos relacionados a la transacción | [optional] 
**status** | [**Status**](Status.md) |  | [optional] 


