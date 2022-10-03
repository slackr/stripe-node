// File generated from our OpenAPI spec

'use strict';

import StripeResource = require('../../StripeResource');
const stripeMethod = StripeResource.method;

namespace Stripe {
  namespace TestHelpers {
    export interface RefundExpireParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    export interface RefundsResource {
      expire:
        | ((
            id: string,
            params?: RefundExpireParams,
            options?: RequestOptions
          ) => Promise<Stripe.Response<Stripe.Refund>>)
        | ((
            id: string,
            options?: RequestOptions
          ) => Promise<Stripe.Response<Stripe.Refund>>);
    }
  }
}

const resource: RefundsResource = StripeResource.extend({
  path: 'test_helpers/refunds',

  expire: stripeMethod({
    method: 'POST',
    path: '/{refund}/expire',
  }),
});

export = resource;
