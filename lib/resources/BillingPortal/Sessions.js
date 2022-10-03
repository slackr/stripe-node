// File generated from our OpenAPI spec
'use strict';
const StripeResource = require("../../StripeResource");
const stripeMethod = StripeResource.method;
const resource = StripeResource.extend({
    path: 'billing_portal/sessions',
    create: stripeMethod({
        method: 'POST',
        path: '',
    }),
});
module.exports = resource;
