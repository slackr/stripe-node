// File generated from our OpenAPI spec
'use strict';
const StripeResource = require("../StripeResource");
const stripeMethod = StripeResource.method;
const resource = StripeResource.extend({
    path: 'shipping_rates',
    create: stripeMethod({
        method: 'POST',
        path: '',
    }),
    retrieve: stripeMethod({
        method: 'GET',
        path: '/{shippingRateToken}',
    }),
    update: stripeMethod({
        method: 'POST',
        path: '/{shippingRateToken}',
    }),
    list: stripeMethod({
        method: 'GET',
        path: '',
        methodType: 'list',
    }),
});
module.exports = resource;
