// File generated from our OpenAPI spec
'use strict';
const StripeResource = require("../../StripeResource");
const stripeMethod = StripeResource.method;
const resource = StripeResource.extend({
    path: 'issuing/cardholders',
    create: stripeMethod({
        method: 'POST',
        path: '',
    }),
    retrieve: stripeMethod({
        method: 'GET',
        path: '/{cardholder}',
    }),
    update: stripeMethod({
        method: 'POST',
        path: '/{cardholder}',
    }),
    list: stripeMethod({
        method: 'GET',
        path: '',
        methodType: 'list',
    }),
});
module.exports = resource;
