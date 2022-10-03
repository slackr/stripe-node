// File generated from our OpenAPI spec
'use strict';
const StripeResource = require("../StripeResource");
const stripeMethod = StripeResource.method;
const resource = StripeResource.extend({
    path: 'promotion_codes',
    create: stripeMethod({
        method: 'POST',
        path: '',
    }),
    retrieve: stripeMethod({
        method: 'GET',
        path: '/{promotionCode}',
    }),
    update: stripeMethod({
        method: 'POST',
        path: '/{promotionCode}',
    }),
    list: stripeMethod({
        method: 'GET',
        path: '',
        methodType: 'list',
    }),
});
module.exports = resource;
