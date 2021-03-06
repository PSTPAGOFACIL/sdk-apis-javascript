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
    instance = new ApiPagoFacil.WebhooksApi();
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

  describe('WebhooksApi', function() {
    describe('webhooksIdUserGet', function() {
      it('should call webhooksIdUserGet successfully', function(done) {
        //uncomment below and update the code to test webhooksIdUserGet
        //instance.webhooksIdUserGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('webhooksIdUserWebhookDelete', function() {
      it('should call webhooksIdUserWebhookDelete successfully', function(done) {
        //uncomment below and update the code to test webhooksIdUserWebhookDelete
        //instance.webhooksIdUserWebhookDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('webhooksIdUserWebhookPut', function() {
      it('should call webhooksIdUserWebhookPut successfully', function(done) {
        //uncomment below and update the code to test webhooksIdUserWebhookPut
        //instance.webhooksIdUserWebhookPut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('webhooksPost', function() {
      it('should call webhooksPost successfully', function(done) {
        //uncomment below and update the code to test webhooksPost
        //instance.webhooksPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
