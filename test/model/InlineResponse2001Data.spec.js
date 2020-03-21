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
    instance = new ApiPagoFacil.InlineResponse2001Data();
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

  describe('InlineResponse2001Data', function() {
    it('should create an instance of InlineResponse2001Data', function() {
      // uncomment below and update the code to test InlineResponse2001Data
      //var instane = new ApiPagoFacil.InlineResponse2001Data();
      //expect(instance).to.be.a(ApiPagoFacil.InlineResponse2001Data);
    });

    it('should have the property totalRemittances (base name: "totalRemittances")', function() {
      // uncomment below and update the code to test the property totalRemittances
      //var instane = new ApiPagoFacil.InlineResponse2001Data();
      //expect(instance).to.be();
    });

    it('should have the property items (base name: "items")', function() {
      // uncomment below and update the code to test the property items
      //var instane = new ApiPagoFacil.InlineResponse2001Data();
      //expect(instance).to.be();
    });

    it('should have the property totalTransactions (base name: "totalTransactions")', function() {
      // uncomment below and update the code to test the property totalTransactions
      //var instane = new ApiPagoFacil.InlineResponse2001Data();
      //expect(instance).to.be();
    });

    it('should have the property totalNullification (base name: "totalNullification")', function() {
      // uncomment below and update the code to test the property totalNullification
      //var instane = new ApiPagoFacil.InlineResponse2001Data();
      //expect(instance).to.be();
    });

    it('should have the property nullifications (base name: "nullifications")', function() {
      // uncomment below and update the code to test the property nullifications
      //var instane = new ApiPagoFacil.InlineResponse2001Data();
      //expect(instance).to.be();
    });

  });

}));