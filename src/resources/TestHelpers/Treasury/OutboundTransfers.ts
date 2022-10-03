// File generated from our OpenAPI spec

'use strict';

import StripeResource = require('../../../StripeResource');
const stripeMethod = StripeResource.method;

namespace Stripe {
  namespace TestHelpers {
    namespace Treasury {
      export interface OutboundTransferFailParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
      }
    }

    namespace Treasury {
      export interface OutboundTransferPostParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
      }
    }

    namespace Treasury {
      export interface OutboundTransferReturnOutboundTransferParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;

        /**
         * Details about a returned OutboundTransfer.
         */
        returned_details?: OutboundTransferReturnOutboundTransferParams.ReturnedDetails;
      }

      namespace OutboundTransferReturnOutboundTransferParams {
        export interface ReturnedDetails {
          /**
           * Reason for the return.
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
      export interface OutboundTransfersResource {
        fail:
          | ((
              id: string,
              params?: OutboundTransferFailParams,
              options?: RequestOptions
            ) => Promise<Stripe.Response<Stripe.Treasury.OutboundTransfer>>)
          | ((
              id: string,
              options?: RequestOptions
            ) => Promise<Stripe.Response<Stripe.Treasury.OutboundTransfer>>);

        post:
          | ((
              id: string,
              params?: OutboundTransferPostParams,
              options?: RequestOptions
            ) => Promise<Stripe.Response<Stripe.Treasury.OutboundTransfer>>)
          | ((
              id: string,
              options?: RequestOptions
            ) => Promise<Stripe.Response<Stripe.Treasury.OutboundTransfer>>);

        returnOutboundTransfer:
          | ((
              id: string,
              params?: OutboundTransferReturnOutboundTransferParams,
              options?: RequestOptions
            ) => Promise<Stripe.Response<Stripe.Treasury.OutboundTransfer>>)
          | ((
              id: string,
              options?: RequestOptions
            ) => Promise<Stripe.Response<Stripe.Treasury.OutboundTransfer>>);
      }
    }
  }
}

const resource: OutboundTransfersResource = StripeResource.extend({
  path: 'test_helpers/treasury/outbound_transfers',

  fail: stripeMethod({
    method: 'POST',
    path: '/{outboundTransfer}/fail',
  }),

  post: stripeMethod({
    method: 'POST',
    path: '/{outboundTransfer}/post',
  }),

  returnOutboundTransfer: stripeMethod({
    method: 'POST',
    path: '/{outboundTransfer}/return',
  }),
});

export = resource;
