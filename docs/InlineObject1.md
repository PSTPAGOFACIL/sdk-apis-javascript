# ApiPagoFacil.InlineObject1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**xAccountId** | **String** | Corresponde al &lt;u&gt;Token Service&lt;/u&gt; relacionado al servicio con el que deseas generar el cobro. | 
**xAmount** | **Number** | Monto de la transacción. Admite decimales si la divisa utilizada los utiliza. | 
**xCurrency** | **String** | Codigo de 3 caracteres para paises. &lt;br&gt;&lt;br&gt; Info:&lt;a href&#x3D;&#39;https://en.wikipedia.org/wiki/ISO_4217#Active_codes&#39; target&#x3D;_blank&gt;ISO_4217&lt;/a&gt; | 
**xReference** | **String** | \\\&quot;Tú\\\&quot; número de orden. Este número debería ser único por servicio para no tener problema de duplicidad de pagos. | 
**xCustomerEmail** | **String** | Correo en dónde se enviará la confirmación de pago al cliente. | 
**xUrlComplete** | **String** | Dirección en dónde se redireccionará al momento de completar la transacción. Se enviará un POST a esta URL con los mismos datos del callback explicado en la sección response. | 
**xUrlCancel** | **String** | Dirección en dónde se redireccionará en caso de cancelación. Se recomienda usar la dirección del carrito de compras. | 
**xUrlCallback** | **String** | Dirección en donde se avisará de los cambios en la transacción de manera asincrónica a través de un método POST. | 
**xSignature** | **String** | Mensaje Firmado. Para más información sobre la creación de la firma revisa https://apidocs.pagofacil.cl/proceso-de-firmado | 
**xShopCountry** | **String** | Codigo de 2 caracteres para paises. &lt;br&gt;&lt;br&gt; Info:&lt;a href&#x3D;&#39;https://en.wikipedia.org/wiki/ISO_3166-1#Current_codes&#39;&gt;ISO 3166-1 Alpha2-code&lt;/a&gt; | 
**xSessionId** | **String** | Identificador único de la sesión del usuario que realiza el pago. Se agrega como capa de seguridad para validar la transacción. Max. 61 caracteres. | 
**xProducts** | **[Object]** | Productos asociados a la transacción | [optional] 
**xBillingDetails** | [**BillingDetails**](BillingDetails.md) |  | [optional] 
**xShippment** | [**Shippment**](Shippment.md) |  | [optional] 
**xDocument** | [**Document**](Document.md) |  | [optional] 


