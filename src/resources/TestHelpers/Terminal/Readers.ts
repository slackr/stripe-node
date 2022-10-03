// File generated from our OpenAPI spec

'use strict';

import StripeResource = require('../../../StripeResource');
const stripeMethod = StripeResource.method;

namespace Stripe {
  namespace TestHelpers {
    namespace Terminal {
      export interface ReaderPresentPaymentMethodParams {
        /**
         * Simulated data for the card_present payment method
         */
        card_present?: ReaderPresentPaymentMethodParams.CardPresent;

        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;

        /**
         * Simulated payment type
         */
        type?: 'card_present';
      }

      namespace ReaderPresentPaymentMethodParams {
        export interface CardPresent {
          /**
           * Card Number
           */
          number?: string;
        }
      }
    }

    namespace Terminal {
      export interface ReadersResource {
        presentPaymentMethod:
          | ((
              id: string,
              params?: ReaderPresentPaymentMethodParams,
              options?: RequestOptions
            ) => Promise<Stripe.Response<Stripe.Terminal.Reader>>)
          | ((
              id: string,
              options?: RequestOptions
            ) => Promise<Stripe.Response<Stripe.Terminal.Reader>>);
      }
    }
  }
}

const resource: ReadersResource = StripeResource.extend({
  path: 'test_helpers/terminal/readers',

  presentPaymentMethod: stripeMethod({
    method: 'POST',
    path: '/{reader}/present_payment_method',
  }),
});

export = resource;
