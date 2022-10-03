// File generated from our OpenAPI spec

'use strict';

import StripeResource = require('../../../StripeResource');
const stripeMethod = StripeResource.method;

namespace Stripe {
  namespace TestHelpers {
    namespace Treasury {
      export interface OutboundPaymentFailParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
      }
    }

    namespace Treasury {
      export interface OutboundPaymentPostParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
      }
    }

    namespace Treasury {
      export interface OutboundPaymentReturnOutboundPaymentParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;

        /**
         * Optional hash to set the the return code.
         */
        returned_details?: OutboundPaymentReturnOutboundPaymentParams.ReturnedDetails;
      }

      namespace OutboundPaymentReturnOutboundPaymentParams {
        export interface ReturnedDetails {
          /**
           * The return code to be set on the OutboundPayment object.
           */
          code?: ReturnedDetails.Code;
        }

        namespace ReturnedDetails {
          export type Code =
            | 'account_closed'
            | 'account_frozen'
            | 'bank_account_restricted'
            | 'bank_ownership_changed'
            | 'declined'
            | 'incorrect_account_holder_name'
            | 'invalid_account_number'
            | 'invalid_currency'
            | 'no_account'
            | 'other';
        }
      }
    }

    namespace Treasury {
      export interface OutboundPaymentsResource {
        fail:
          | ((
              id: string,
              params?: OutboundPaymentFailParams,
              options?: RequestOptions
            ) => Promise<Stripe.Response<Stripe.Treasury.OutboundPayment>>)
          | ((
              id: string,
              options?: RequestOptions
            ) => Promise<Stripe.Response<Stripe.Treasury.OutboundPayment>>);

        post:
          | ((
              id: string,
              params?: OutboundPaymentPostParams,
              options?: RequestOptions
            ) => Promise<Stripe.Response<Stripe.Treasury.OutboundPayment>>)
          | ((
              id: string,
              options?: RequestOptions
            ) => Promise<Stripe.Response<Stripe.Treasury.OutboundPayment>>);

        returnOutboundPayment:
          | ((
              id: string,
              params?: OutboundPaymentReturnOutboundPaymentParams,
              options?: RequestOptions
            ) => Promise<Stripe.Response<Stripe.Treasury.OutboundPayment>>)
          | ((
              id: string,
              options?: RequestOptions
            ) => Promise<Stripe.Response<Stripe.Treasury.OutboundPayment>>);
      }
    }
  }
}

const resource: OutboundPaymentsResource = StripeResource.extend({
  path: 'test_helpers/treasury/outbound_payments',

  fail: stripeMethod({
    method: 'POST',
    path: '/{id}/fail',
  }),

  post: stripeMethod({
    method: 'POST',
    path: '/{id}/post',
  }),

  returnOutboundPayment: stripeMethod({
    method: 'POST',
    path: '/{id}/return',
  }),
});

export = resource;
