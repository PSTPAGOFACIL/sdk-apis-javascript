# ApiPagoFacil.TrxsApi

All URIs are relative to *https://apis.pgf.cl*

Method | HTTP request | Description
------------- | ------------- | -------------
[**trxsIdGet**](TrxsApi.md#trxsIdGet) | **GET** /trxs/{id} | Obtiene la informacion de la transacción exitosa, asociada a un id
[**trxsIdTrxNullificationGet**](TrxsApi.md#trxsIdTrxNullificationGet) | **GET** /trxs/{idTrx}/nullification/ | 
[**trxsIdTrxNullificationPost**](TrxsApi.md#trxsIdTrxNullificationPost) | **POST** /trxs/{idTrx}/nullification | 
[**trxsIdTrxNullificationStatusGet**](TrxsApi.md#trxsIdTrxNullificationStatusGet) | **GET** /trxs/{idTrx}/nullification/status | 
[**trxsPost**](TrxsApi.md#trxsPost) | **POST** /trxs | 



## trxsIdGet

> InlineResponse2003 trxsIdGet(id)

Obtiene la informacion de la transacción exitosa, asociada a un id

Retorna información de una transacción asociada a un id, para lo que debe ingresarse en el URL el ID de la transacción a consultar. &lt;br&gt; El token de autorización es el obtenido a través de /Login (\&quot;Inherit from parent\&quot;) &lt;br&gt; Endpoints &lt;br&gt; - Producción https://apis.pgf.cl/trxs/{id} &lt;br&gt; - Desarrollo https://apis-dev.pgf.cl/trxs/{id}

### Example

```javascript
import ApiPagoFacil from 'api_pago_facil';
let defaultClient = ApiPagoFacil.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: JWTToken
let JWTToken = defaultClient.authentications['JWTToken'];
JWTToken.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ApiPagoFacil.TrxsApi();
let id = 3.4; // Number | 
apiInstance.trxsIdGet(id, (error, data, response) => {
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
 **id** | **Number**|  | 

### Return type

[**InlineResponse2003**](InlineResponse2003.md)

### Authorization

[JWTToken](../README.md#JWTToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## trxsIdTrxNullificationGet

> InlineResponse2005 trxsIdTrxNullificationGet(idTrx)



Obtiene las anulaciones asociadas a una transacción

### Example

```javascript
import ApiPagoFacil from 'api_pago_facil';
let defaultClient = ApiPagoFacil.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: JWTToken
let JWTToken = defaultClient.authentications['JWTToken'];
JWTToken.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ApiPagoFacil.TrxsApi();
let idTrx = 3.4; // Number | 
apiInstance.trxsIdTrxNullificationGet(idTrx, (error, data, response) => {
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
 **idTrx** | **Number**|  | 

### Return type

[**InlineResponse2005**](InlineResponse2005.md)

### Authorization

[JWTToken](../README.md#JWTToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## trxsIdTrxNullificationPost

> InlineResponse2004 trxsIdTrxNullificationPost(idTrx, opts)



Envía una transacción a anular

### Example

```javascript
import ApiPagoFacil from 'api_pago_facil';
let defaultClient = ApiPagoFacil.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: JWTToken
let JWTToken = defaultClient.authentications['JWTToken'];
JWTToken.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ApiPagoFacil.TrxsApi();
let idTrx = 3.4; // Number | 
let opts = {
  'inlineObject1': new ApiPagoFacil.InlineObject1() // InlineObject1 | 
};
apiInstance.trxsIdTrxNullificationPost(idTrx, opts, (error, data, response) => {
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
 **idTrx** | **Number**|  | 
 **inlineObject1** | [**InlineObject1**](InlineObject1.md)|  | [optional] 

### Return type

[**InlineResponse2004**](InlineResponse2004.md)

### Authorization

[JWTToken](../README.md#JWTToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## trxsIdTrxNullificationStatusGet

> InlineResponse2006 trxsIdTrxNullificationStatusGet(idTrx, verificationToken)



Obtiene el estado de una anulación

### Example

```javascript
import ApiPagoFacil from 'api_pago_facil';
let defaultClient = ApiPagoFacil.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: JWTToken
let JWTToken = defaultClient.authentications['JWTToken'];
JWTToken.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ApiPagoFacil.TrxsApi();
let idTrx = 3.4; // Number | 
let verificationToken = "verificationToken_example"; // String | 
apiInstance.trxsIdTrxNullificationStatusGet(idTrx, verificationToken, (error, data, response) => {
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
 **idTrx** | **Number**|  | 
 **verificationToken** | **String**|  | 

### Return type

[**InlineResponse2006**](InlineResponse2006.md)

### Authorization

[JWTToken](../README.md#JWTToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## trxsPost

> InlineResponse2002 trxsPost(opts)



Crea una transaccion en estado pendiente. &lt;br&gt; La respuesta tiene distintos métodos y URLs para pago

### Example

```javascript
import ApiPagoFacil from 'api_pago_facil';

let apiInstance = new ApiPagoFacil.TrxsApi();
let opts = {
  'inlineObject': new ApiPagoFacil.InlineObject() // InlineObject | 
};
apiInstance.trxsPost(opts, (error, data, response) => {
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
 **inlineObject** | [**InlineObject**](InlineObject.md)|  | [optional] 

### Return type

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

