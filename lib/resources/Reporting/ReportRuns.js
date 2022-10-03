// File generated from our OpenAPI spec
'use strict';
const StripeResource = require("../../StripeResource");
const stripeMethod = StripeResource.method;
const resource = StripeResource.extend({
    path: 'reporting/report_runs',
    create: stripeMethod({
        method: 'POST',
        path: '',
    }),
    retrieve: stripeMethod({
        method: 'GET',
        path: '/{reportRun}',
    }),
    list: stripeMethod({
        method: 'GET',
        path: '',
        methodType: 'list',
    }),
});
module.exports = resource;
