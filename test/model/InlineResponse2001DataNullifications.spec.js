/**
 * API Pago Facil
 * API de Pago Fácil
 *
 * The version of the OpenAPI document: 2.1.4
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
    instance = new ApiPagoFacil.InlineResponse2001DataNullifications();
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

  describe('InlineResponse2001DataNullifications', function() {
    it('should create an instance of InlineResponse2001DataNullifications', function() {
      // uncomment below and update the code to test InlineResponse2001DataNullifications
      //var instane = new ApiPagoFacil.InlineResponse2001DataNullifications();
      //expect(instance).to.be.a(ApiPagoFacil.InlineResponse2001DataNullifications);
    });

    it('should have the property tipo (base name: "tipo")', function() {
      // uncomment below and update the code to test the property tipo
      //var instane = new ApiPagoFacil.InlineResponse2001DataNullifications();
      //expect(instance).to.be();
    });

    it('should have the property montoAnulado (base name: "montoAnulado")', function() {
      // uncomment below and update the code to test the property montoAnulado
      //var instane = new ApiPagoFacil.InlineResponse2001DataNullifications();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instane = new ApiPagoFacil.InlineResponse2001DataNullifications();
      //expect(instance).to.be();
    });

    it('should have the property timestamp (base name: "timestamp")', function() {
      // uncomment below and update the code to test the property timestamp
      //var instane = new ApiPagoFacil.InlineResponse2001DataNullifications();
      //expect(instance).to.be();
    });

    it('should have the property dateTime (base name: "dateTime")', function() {
      // uncomment below and update the code to test the property dateTime
      //var instane = new ApiPagoFacil.InlineResponse2001DataNullifications();
      //expect(instance).to.be();
    });

  });

}));
