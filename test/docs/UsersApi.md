# ApiPagoFacil.UsersApi

All URIs are relative to *https://apis.pgf.cl*

Method | HTTP request | Description
------------- | ------------- | -------------
[**usersGet**](UsersApi.md#usersGet) | **GET** /users | Obtener informacion del usuario.



## usersGet

> InlineResponse2009 usersGet()

Obtener informacion del usuario.

Este endpoint retorna la informacion del usuario.

### Example

```javascript
import ApiPagoFacil from 'api_pago_facil';
let defaultClient = ApiPagoFacil.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: JWTToken
let JWTToken = defaultClient.authentications['JWTToken'];
JWTToken.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ApiPagoFacil.UsersApi();
apiInstance.usersGet((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**InlineResponse2009**](InlineResponse2009.md)

### Authorization

[JWTToken](../README.md#JWTToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

