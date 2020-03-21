/**
 * API Pago Facil
 * API de Pago Fácil
 *
 * The version of the OpenAPI document: 2.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.ApiPagoFacil);
  }
}(this, function(expect, ApiPagoFacil) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new ApiPagoFacil.InlineResponse2001DataItems();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('InlineResponse2001DataItems', function() {
    it('should create an instance of InlineResponse2001DataItems', function() {
      // uncomment below and update the code to test InlineResponse2001DataItems
      //var instane = new ApiPagoFacil.InlineResponse2001DataItems();
      //expect(instance).to.be.a(ApiPagoFacil.InlineResponse2001DataItems);
    });

    it('should have the property amount (base name: "amount")', function() {
      // uncomment below and update the code to test the property amount
      //var instane = new ApiPagoFacil.InlineResponse2001DataItems();
      //expect(instance).to.be();
    });

    it('should have the property cost (base name: "cost")', function() {
      // uncomment below and update the code to test the property cost
      //var instane = new ApiPagoFacil.InlineResponse2001DataItems();
      //expect(instance).to.be();
    });

    it('should have the property total (base name: "total")', function() {
      // uncomment below and update the code to test the property total
      //var instane = new ApiPagoFacil.InlineResponse2001DataItems();
      //expect(instance).to.be();
    });

    it('should have the property idTrx (base name: "idTrx")', function() {
      // uncomment below and update the code to test the property idTrx
      //var instane = new ApiPagoFacil.InlineResponse2001DataItems();
      //expect(instance).to.be();
    });

    it('should have the property orderIdTienda (base name: "order_id_tienda")', function() {
      // uncomment below and update the code to test the property orderIdTienda
      //var instane = new ApiPagoFacil.InlineResponse2001DataItems();
      //expect(instance).to.be();
    });

    it('should have the property createdAt (base name: "createdAt")', function() {
      // uncomment below and update the code to test the property createdAt
      //var instane = new ApiPagoFacil.InlineResponse2001DataItems();
      //expect(instance).to.be();
    });

    it('should have the property dateTimeCreatedAt (base name: "dateTimeCreatedAt")', function() {
      // uncomment below and update the code to test the property dateTimeCreatedAt
      //var instane = new ApiPagoFacil.InlineResponse2001DataItems();
      //expect(instance).to.be();
    });

    it('should have the property isTotalNullified (base name: "isTotalNullified")', function() {
      // uncomment below and update the code to test the property isTotalNullified
      //var instane = new ApiPagoFacil.InlineResponse2001DataItems();
      //expect(instance).to.be();
    });

    it('should have the property isParcialNullified (base name: "isParcialNullified")', function() {
      // uncomment below and update the code to test the property isParcialNullified
      //var instane = new ApiPagoFacil.InlineResponse2001DataItems();
      //expect(instance).to.be();
    });

    it('should have the property currency (base name: "currency")', function() {
      // uncomment below and update the code to test the property currency
      //var instane = new ApiPagoFacil.InlineResponse2001DataItems();
      //expect(instance).to.be();
    });

    it('should have the property document (base name: "document")', function() {
      // uncomment below and update the code to test the property document
      //var instane = new ApiPagoFacil.InlineResponse2001DataItems();
      //expect(instance).to.be();
    });

  });

}));