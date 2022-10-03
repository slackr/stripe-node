// File generated from our OpenAPI spec
'use strict';
const StripeResource = require("../StripeResource");
const stripeMethod = StripeResource.method;
const resource = StripeResource.extend({
    path: 'plans',
    create: stripeMethod({
        method: 'POST',
        path: '',
    }),
    retrieve: stripeMethod({
        method: 'GET',
        path: '/{plan}',
    }),
    update: stripeMethod({
        method: 'POST',
        path: '/{plan}',
    }),
    list: stripeMethod({
        method: 'GET',
        path: '',
        methodType: 'list',
    }),
    del: stripeMethod({
        method: 'DELETE',
        path: '/{plan}',
    }),
});
module.exports = resource;
