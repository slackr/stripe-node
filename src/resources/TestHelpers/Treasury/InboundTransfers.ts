// File generated from our OpenAPI spec

'use strict';

import StripeResource = require('../../../StripeResource');
const stripeMethod = StripeResource.method;

namespace Stripe {
  namespace TestHelpers {
    namespace Treasury {
      export interface InboundTransferFailParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;

        /**
         * Details about a failed InboundTransfer.
         */
        failure_details?: InboundTransferFailParams.FailureDetails;
      }

      namespace InboundTransferFailParams {
        export interface FailureDetails {
          /**
           * Reason for the failure.
           */
          code?: FailureDetails.Code;
        }

        namespace FailureDetails {
          export type Code =
            | 'account_closed'
            | 'account_frozen'
            | 'bank_account_restricted'
            | 'bank_ownership_changed'
            | 'debit_not_authorized'
            | 'incorrect_account_holder_address'
            | 'incorrect_account_holder_name'
            | 'incorrect_account_holder_tax_id'
            | 'insufficient_funds'
            | 'invalid_account_number'
            | 'invalid_currency'
            | 'no_account'
            | 'other';
        }
      }
    }

    namespace Treasury {
      export interface InboundTransferReturnInboundTransferParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
      }
    }

    namespace Treasury {
      export interface InboundTransferSucceedParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
      }
    }

    namespace Treasury {
      export interface InboundTransfersResource {
        fail:
          | ((
              id: string,
              params?: InboundTransferFailParams,
              options?: RequestOptions
            ) => Promise<Stripe.Response<Stripe.Treasury.InboundTransfer>>)
          | ((
              id: string,
              options?: RequestOptions
            ) => Promise<Stripe.Response<Stripe.Treasury.InboundTransfer>>);

        returnInboundTransfer:
          | ((
              id: string,
              params?: InboundTransferReturnInboundTransferParams,
              options?: RequestOptions
            ) => Promise<Stripe.Response<Stripe.Treasury.InboundTransfer>>)
          | ((
              id: string,
              options?: RequestOptions
            ) => Promise<Stripe.Response<Stripe.Treasury.InboundTransfer>>);

        succeed:
          | ((
              id: string,
              params?: InboundTransferSucceedParams,
              options?: RequestOptions
            ) => Promise<Stripe.Response<Stripe.Treasury.InboundTransfer>>)
          | ((
              id: string,
              options?: RequestOptions
            ) => Promise<Stripe.Response<Stripe.Treasury.InboundTransfer>>);
      }
    }
  }
}

const resource: InboundTransfersResource = StripeResource.extend({
  path: 'test_helpers/treasury/inbound_transfers',

  fail: stripeMethod({
    method: 'POST',
    path: '/{id}/fail',
  }),

  returnInboundTransfer: stripeMethod({
    method: 'POST',
    path: '/{id}/return',
  }),

  succeed: stripeMethod({
    method: 'POST',
    path: '/{id}/succeed',
  }),
});

export = resource;
