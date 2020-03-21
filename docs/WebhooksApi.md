# ApiPagoFacil.WebhooksApi

All URIs are relative to *https://apis.pgf.cl*

Method | HTTP request | Description
------------- | ------------- | -------------
[**webhooksIdUserGet**](WebhooksApi.md#webhooksIdUserGet) | **GET** /webhooks/{idUser} | 
[**webhooksIdUserWebhookDelete**](WebhooksApi.md#webhooksIdUserWebhookDelete) | **DELETE** /webhooks/{idUser}/{webhook} | 
[**webhooksIdUserWebhookPut**](WebhooksApi.md#webhooksIdUserWebhookPut) | **PUT** /webhooks/{idUser}/{webhook} | 
[**webhooksPost**](WebhooksApi.md#webhooksPost) | **POST** /webhooks | 



## webhooksIdUserGet

> InlineResponse2007 webhooksIdUserGet(idUser)



Obtiene la lista de webhooks de un usuario. 

### Example

```javascript
import ApiPagoFacil from 'api_pago_facil';

let apiInstance = new ApiPagoFacil.WebhooksApi();
let idUser = 123; // String | ID del usuario a consultar
apiInstance.webhooksIdUserGet(idUser, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idUser** | **String**| ID del usuario a consultar | 

### Return type

[**InlineResponse2007**](InlineResponse2007.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## webhooksIdUserWebhookDelete

> InlineResponse201 webhooksIdUserWebhookDelete(idUser, webhook)



Elimina un webhook del usuario y tipo especificados

### Example

```javascript
import ApiPagoFacil from 'api_pago_facil';

let apiInstance = new ApiPagoFacil.WebhooksApi();
let idUser = 123; // String | ID del usuario a consultar
let webhook = remittances; // String | Tipo de evento del webhook
apiInstance.webhooksIdUserWebhookDelete(idUser, webhook, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idUser** | **String**| ID del usuario a consultar | 
 **webhook** | **String**| Tipo de evento del webhook | 

### Return type

[**InlineResponse201**](InlineResponse201.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## webhooksIdUserWebhookPut

> InlineResponse201 webhooksIdUserWebhookPut(idUser, webhook, opts)



Actualiza un webhook para tus servicios. 

### Example

```javascript
import ApiPagoFacil from 'api_pago_facil';

let apiInstance = new ApiPagoFacil.WebhooksApi();
let idUser = 123; // String | ID del usuario a consultar
let webhook = remittances; // String | Tipo de evento del webhook
let opts = {
  'inlineObject3': new ApiPagoFacil.InlineObject3() // InlineObject3 | 
};
apiInstance.webhooksIdUserWebhookPut(idUser, webhook, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idUser** | **String**| ID del usuario a consultar | 
 **webhook** | **String**| Tipo de evento del webhook | 
 **inlineObject3** | [**InlineObject3**](InlineObject3.md)|  | [optional] 

### Return type

[**InlineResponse201**](InlineResponse201.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## webhooksPost

> InlineResponse201 webhooksPost(opts)



Crea un webhook para tus servicios. &lt;br&gt; Se enviará un POST a esta URL cuando se realicen eventos como abonos a tu cuenta.

### Example

```javascript
import ApiPagoFacil from 'api_pago_facil';

let apiInstance = new ApiPagoFacil.WebhooksApi();
let opts = {
  'inlineObject2': new ApiPagoFacil.InlineObject2() // InlineObject2 | 
};
apiInstance.webhooksPost(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inlineObject2** | [**InlineObject2**](InlineObject2.md)|  | [optional] 

### Return type

[**InlineResponse201**](InlineResponse201.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

