# ApiPagoFacil.AuthApi

All URIs are relative to *https://apis.pgf.cl*

Method | HTTP request | Description
------------- | ------------- | -------------
[**usersLoginPost**](AuthApi.md#usersLoginPost) | **POST** /users/login | Autentificación con usuario y clave.



## usersLoginPost

> LoginResponse usersLoginPost(opts)

Autentificación con usuario y clave.

Retorna un token con el que se deben realizar las llamadas al resto de los endpoints del API. Sin este token no se pueden acceder a los endpoints. &lt;br&gt; Se deben ingresar \&quot;user\&quot; y \&quot;password\&quot; válidos, creados a través del dashborad de Pago Fácil &lt;br&gt; No requiere configuración de autorización &lt;br&gt; Endpoints &lt;br&gt; - Producción https://apis.pgf.cl &lt;br&gt; - Desarrollo https://apis-dev.pgf.cl

### Example

```javascript
import ApiPagoFacil from 'api_pago_facil';

let apiInstance = new ApiPagoFacil.AuthApi();
let opts = {
  'loginBody': new ApiPagoFacil.LoginBody() // LoginBody | 
};
apiInstance.usersLoginPost(opts, (error, data, response) => {
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
 **loginBody** | [**LoginBody**](LoginBody.md)|  | [optional] 

### Return type

[**LoginResponse**](LoginResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

