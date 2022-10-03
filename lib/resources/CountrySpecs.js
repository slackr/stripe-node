// File generated from our OpenAPI spec
'use strict';
const StripeResource = require("../StripeResource");
const stripeMethod = StripeResource.method;
const resource = StripeResource.extend({
    path: 'country_specs',
    retrieve: stripeMethod({
        method: 'GET',
        path: '/{country}',
    }),
    list: stripeMethod({
        method: 'GET',
        path: '',
        methodType: 'list',
    }),
});
module.exports = resource;
