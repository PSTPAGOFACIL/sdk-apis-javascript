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
    instance = new ApiPagoFacil.InlineResponse2007();
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

  describe('InlineResponse2007', function() {
    it('should create an instance of InlineResponse2007', function() {
      // uncomment below and update the code to test InlineResponse2007
      //var instane = new ApiPagoFacil.InlineResponse2007();
      //expect(instance).to.be.a(ApiPagoFacil.InlineResponse2007);
    });

    it('should have the property message (base name: "message")', function() {
      // uncomment below and update the code to test the property message
      //var instane = new ApiPagoFacil.InlineResponse2007();
      //expect(instance).to.be();
    });

    it('should have the property errors (base name: "errors")', function() {
      // uncomment below and update the code to test the property errors
      //var instane = new ApiPagoFacil.InlineResponse2007();
      //expect(instance).to.be();
    });

    it('should have the property data (base name: "data")', function() {
      // uncomment below and update the code to test the property data
      //var instane = new ApiPagoFacil.InlineResponse2007();
      //expect(instance).to.be();
    });

  });

}));