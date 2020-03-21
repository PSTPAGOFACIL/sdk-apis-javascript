# ApiPagoFacil.InlineObject

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**xAccountId** | **String** | Corresponde al &lt;u&gt;Token Service&lt;/u&gt; relacionado al servicio con el que deseas generar el cobro. Es ditinto para el ambiente de desarrollo y producción. | 
**xAmount** | **Number** | Monto de la transacción. Admite decimales si la divisa utilizada los utiliza. El mínimo depende de la divis. En CLP es 500. | 
**xCurrency** | **String** | Codigo de 3 caracteres para paises. &lt;br&gt;&lt;br&gt; Info:&lt;a href&#x3D;&#39;https://en.wikipedia.org/wiki/ISO_4217#Active_codes&#39; target&#x3D;_blank&gt;ISO_4217&lt;/a&gt; | 
**xReference** | **String** | \\\&quot;Tú\\\&quot; identificador de orden. Este identificador debería ser único por servicio para no tener problema de duplicidad de pagos. Rechazaremos ids duplicados para el mismo servicio. | 
**xCustomerEmail** | **String** | Email | 
**xUrlComplete** | **String** | Una dirección web válida | 
**xUrlCallback** | **String** | Una dirección web válida | 
**xUrlCancel** | **String** | Una dirección web válida | 
**xShopCountry** | **String** | Codigo de 2 caracteres para paises. &lt;br&gt;&lt;br&gt; Info:&lt;a href&#x3D;&#39;https://en.wikipedia.org/wiki/ISO_3166-1#Current_codes&#39;&gt;ISO 3166-1 Alpha2-code&lt;/a&gt; | 
**xSessionId** | **String** | Identificador único de la sesión del usuario que realiza el pago. Se agrega como capa de seguridad para validar la transacción. Max. 61 caracteres. | 
**xProducts** | **[Object]** | Productos asociados a la transacción | [optional] 
**xBillingDetails** | [**BillingDetails**](BillingDetails.md) |  | [optional] 
**xShippment** | [**Shippment**](Shippment.md) |  | [optional] 
**xDocument** | [**Document**](Document.md) |  | [optional] 
**xSignature** | **String** | Mensaje Firmado. Para más información sobre la creación de la firma revisa https://developers.pagofacil.cl/docs/cómo-funciona-el-proceso-de-firmado | 


