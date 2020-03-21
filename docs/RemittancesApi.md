# ApiPagoFacil.RemittancesApi

All URIs are relative to *https://apis.pgf.cl*

Method | HTTP request | Description
------------- | ------------- | -------------
[**remittancesConciliationGet**](RemittancesApi.md#remittancesConciliationGet) | **GET** /remittances/conciliation | 



## remittancesConciliationGet

> InlineResponse2001 remittancesConciliationGet(email, _date)



Permite obtener la conciliación de los abonos

### Example

```javascript
import ApiPagoFacil from 'api_pago_facil';
let defaultClient = ApiPagoFacil.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: JWTToken
let JWTToken = defaultClient.authentications['JWTToken'];
JWTToken.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ApiPagoFacil.RemittancesApi();
let email = marcela@pagofacil.cl; // String | Email a consultar
let _date = 2020-01-22; // Date | Fecha de consulta año-mes-dia <br> Ej: 2019-12-31
apiInstance.remittancesConciliationGet(email, _date, (error, data, response) => {
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
 **email** | [**String**](.md)| Email a consultar | 
 **_date** | **Date**| Fecha de consulta año-mes-dia &lt;br&gt; Ej: 2019-12-31 | 

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

[JWTToken](../README.md#JWTToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

