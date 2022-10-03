// File generated from our OpenAPI spec

'use strict';

import StripeResource = require('../../../StripeResource');
const stripeMethod = StripeResource.method;

namespace Stripe {
  namespace TestHelpers {
    namespace Treasury {
      export interface ReceivedCreditCreateParams {
        /**
         * Amount (in cents) to be transferred.
         */
        amount: number;

        /**
         * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
         */
        currency: string;

        /**
         * The FinancialAccount to send funds to.
         */
        financial_account: string;

        /**
         * The rails used for the object.
         */
        network: ReceivedCreditCreateParams.Network;

        /**
         * An arbitrary string attached to the object. Often useful for displaying to users.
         */
        description?: string;

        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;

        /**
         * Initiating payment method details for the object.
         */
        initiating_payment_method_details?: ReceivedCreditCreateParams.InitiatingPaymentMethodDetails;
      }

      namespace ReceivedCreditCreateParams {
        export type Network = 'ach' | 'us_domestic_wire';

        export interface InitiatingPaymentMethodDetails {
          /**
           * The source type.
           */
          type: 'us_bank_account';

          /**
           * Optional fields for `us_bank_account`.
           */
          us_bank_account?: InitiatingPaymentMethodDetails.UsBankAccount;
        }

        namespace InitiatingPaymentMethodDetails {
          export interface UsBankAccount {
            /**
             * The bank account holder's name.
             */
            account_holder_name?: string;

            /**
             * The bank account number.
             */
            account_number?: string;

            /**
             * The bank account's routing number.
             */
            routing_number?: string;
          }
        }
      }
    }

    namespace Treasury {
      export interface ReceivedCreditsResource {
        create: (
          params: ReceivedCreditCreateParams,
          options?: RequestOptions
        ) => Promise<Stripe.Response<Stripe.Treasury.ReceivedCredit>>;
      }
    }
  }
}

const resource: ReceivedCreditsResource = StripeResource.extend({
  path: 'test_helpers/treasury/received_credits',

  create: stripeMethod({
    method: 'POST',
    path: '',
  }),
});

export = resource;
