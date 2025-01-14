// File generated from our OpenAPI spec
'use strict';
const StripeResource = require('../../StripeResource');
const stripeMethod = StripeResource.method;
module.exports = StripeResource.extend({
  path: 'issuing/disputes',
  create: stripeMethod({
    method: 'POST',
    path: '',
  }),
  retrieve: stripeMethod({
    method: 'GET',
    path: '/{dispute}',
  }),
  update: stripeMethod({
    method: 'POST',
    path: '/{dispute}',
  }),
  list: stripeMethod({
    method: 'GET',
    path: '',
    methodType: 'list',
  }),
  submit: stripeMethod({
    method: 'POST',
    path: '/{dispute}/submit',
  }),
});
