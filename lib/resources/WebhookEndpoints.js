// File generated from our OpenAPI spec
'use strict';
const StripeResource = require("../StripeResource");
const stripeMethod = StripeResource.method;
const resource = StripeResource.extend({
    path: 'webhook_endpoints',
    create: stripeMethod({
        method: 'POST',
        path: '',
    }),
    retrieve: stripeMethod({
        method: 'GET',
        path: '/{webhookEndpoint}',
    }),
    update: stripeMethod({
        method: 'POST',
        path: '/{webhookEndpoint}',
    }),
    list: stripeMethod({
        method: 'GET',
        path: '',
        methodType: 'list',
    }),
    del: stripeMethod({
        method: 'DELETE',
        path: '/{webhookEndpoint}',
    }),
});
module.exports = resource;
