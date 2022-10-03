// File generated from our OpenAPI spec
'use strict';
const StripeResource = require("../../../StripeResource");
const stripeMethod = StripeResource.method;
const resource = StripeResource.extend({
    path: 'test_helpers/terminal/readers',
    presentPaymentMethod: stripeMethod({
        method: 'POST',
        path: '/{reader}/present_payment_method',
    }),
});
module.exports = resource;
