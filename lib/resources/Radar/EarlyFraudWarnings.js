// File generated from our OpenAPI spec
'use strict';
const StripeResource = require("../../StripeResource");
const stripeMethod = StripeResource.method;
const resource = StripeResource.extend({
    path: 'radar/early_fraud_warnings',
    retrieve: stripeMethod({
        method: 'GET',
        path: '/{earlyFraudWarning}',
    }),
    list: stripeMethod({
        method: 'GET',
        path: '',
        methodType: 'list',
    }),
});
module.exports = resource;
