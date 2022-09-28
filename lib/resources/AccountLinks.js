"use strict";
// File generated from our OpenAPI spec
const StripeResource = require("../StripeResource");
const stripeMethod = StripeResource.method;
const resource = StripeResource.extend({
    path: 'account_links',
    create: stripeMethod({
        method: 'POST',
        path: '',
    }),
});
module.exports = resource;
