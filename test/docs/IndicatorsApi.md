# ApiPagoFacil.IndicatorsApi

All URIs are relative to *https://apis.pgf.cl*

Method | HTTP request | Description
------------- | ------------- | -------------
[**indicatorsRemittancesGet**](IndicatorsApi.md#indicatorsRemittancesGet) | **GET** /indicators/remittances | Obtiene los datos de los abonos (remittances) realizados en una fecha específica y los futuros, además del saldo disponible



## indicatorsRemittancesGet

> InlineResponse200 indicatorsRemittancesGet(opts)

Obtiene los datos de los abonos (remittances) realizados en una fecha específica y los futuros, además del saldo disponible

1.-Requiere el uso del Token rescatado en el LOGIN (autorización heredada) &lt;br&gt; 2.-Se debe configurar los parámetros como \&quot;Query Params\&quot; &lt;br&gt; 3.-Solo los usuarios Administradores pueden obtener información etregando el parámetros \&quot;IdUser\&quot;. Para usuarios no Administradores este parámetro no se informa y siempre retronará información del usuario logado. 4.-Se debe informar alguno de los parámetros, de lo contrario la API responde con un error &lt;br&gt;     -Setear en true or false los parámetros \&quot;availableBalance\&quot; o \&quot;futureRemittances\&quot; &lt;br&gt;     -Entregar una fecha en el parámetro \&quot;remittanceByDate\&quot;&lt;br&gt;     

### Example

```javascript
import ApiPagoFacil from 'api_pago_facil';
let defaultClient = ApiPagoFacil.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: JWTToken
let JWTToken = defaultClient.authentications['JWTToken'];
JWTToken.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new ApiPagoFacil.IndicatorsApi();
let opts = {
  'idUser': 123, // Number | ID del usuario a consultar
  'idTrx': 5500, // Number | ID de la transacción a consultar
  'availableBalance': true, // Boolean | Define si se desea obtener el saldo disponible del usuario
  'remittanceByDate': new Date("2013-10-20"), // Date | Fecha de la que se desea obtener información del abono
  'futureRemittances': true // Boolean | Define si se desea obtener los abonos futuros
};
apiInstance.indicatorsRemittancesGet(opts, (error, data, response) => {
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
 **idUser** | **Number**| ID del usuario a consultar | [optional] 
 **idTrx** | **Number**| ID de la transacción a consultar | [optional] 
 **availableBalance** | **Boolean**| Define si se desea obtener el saldo disponible del usuario | [optional] 
 **remittanceByDate** | **Date**| Fecha de la que se desea obtener información del abono | [optional] 
 **futureRemittances** | **Boolean**| Define si se desea obtener los abonos futuros | [optional] 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[JWTToken](../README.md#JWTToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

