# ApiPagoFacil.PaymentsApi

All URIs are relative to *https://apis.pgf.cl*

Method | HTTP request | Description
------------- | ------------- | -------------
[**paymentsGet**](PaymentsApi.md#paymentsGet) | **GET** /payments | 



## paymentsGet

> InlineResponse2008 paymentsGet(authorization)



Obtiene los medios de pago disponible

### Example

```javascript
import ApiPagoFacil from 'api_pago_facil';

let apiInstance = new ApiPagoFacil.PaymentsApi();
let authorization = "authorization_example"; // String | 
apiInstance.paymentsGet(authorization, (error, data, response) => {
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
 **authorization** | **String**|  | 

### Return type

[**InlineResponse2008**](InlineResponse2008.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

