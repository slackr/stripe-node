// File generated from our OpenAPI spec
'use strict';
const StripeResource = require("../../StripeResource");
const stripeMethod = StripeResource.method;
const resource = StripeResource.extend({
    path: 'apps/secrets',
    create: stripeMethod({
        method: 'POST',
        path: '',
    }),
    list: stripeMethod({
        method: 'GET',
        path: '',
        methodType: 'list',
    }),
    deleteWhere: stripeMethod({
        method: 'POST',
        path: '/delete',
    }),
    find: stripeMethod({
        method: 'GET',
        path: '/find',
    }),
});
module.exports = resource;
