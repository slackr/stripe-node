// File generated from our OpenAPI spec

'use strict';

import StripeResource = require('../StripeResource');
const stripeMethod = StripeResource.method;

namespace Stripe {
  namespace Balance {
    export interface Available {
      /**
       * Balance amount.
       */
      amount: number;

      /**
       * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
       */
      currency: string;

      source_types?: Available.SourceTypes;
    }

    export interface ConnectReserved {
      /**
       * Balance amount.
       */
      amount: number;

      /**
       * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
       */
      currency: string;

      source_types?: ConnectReserved.SourceTypes;
    }

    export interface InstantAvailable {
      /**
       * Balance amount.
       */
      amount: number;

      /**
       * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
       */
      currency: string;

      source_types?: InstantAvailable.SourceTypes;
    }

    export interface Issuing {
      /**
       * Funds that are available for use.
       */
      available: Array<Issuing.Available>;
    }

    export interface Pending {
      /**
       * Balance amount.
       */
      amount: number;

      /**
       * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
       */
      currency: string;

      source_types?: Pending.SourceTypes;
    }

    namespace Available {
      export interface SourceTypes {
        /**
         * Amount for bank account.
         */
        bank_account?: number;

        /**
         * Amount for card.
         */
        card?: number;

        /**
         * Amount for FPX.
         */
        fpx?: number;
      }
    }

    namespace ConnectReserved {
      export interface SourceTypes {
        /**
         * Amount for bank account.
         */
        bank_account?: number;

        /**
         * Amount for card.
         */
        card?: number;

        /**
         * Amount for FPX.
         */
        fpx?: number;
      }
    }

    namespace InstantAvailable {
      export interface SourceTypes {
        /**
         * Amount for bank account.
         */
        bank_account?: number;

        /**
         * Amount for card.
         */
        card?: number;

        /**
         * Amount for FPX.
         */
        fpx?: number;
      }
    }

    namespace Issuing {
      export interface Available {
        /**
         * Balance amount.
         */
        amount: number;

        /**
         * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
         */
        currency: string;

        source_types?: Available.SourceTypes;
      }

      namespace Available {
        export interface SourceTypes {
          /**
           * Amount for bank account.
           */
          bank_account?: number;

          /**
           * Amount for card.
           */
          card?: number;

          /**
           * Amount for FPX.
           */
          fpx?: number;
        }
      }
    }

    namespace Pending {
      export interface SourceTypes {
        /**
         * Amount for bank account.
         */
        bank_account?: number;

        /**
         * Amount for card.
         */
        card?: number;

        /**
         * Amount for FPX.
         */
        fpx?: number;
      }
    }
  }

  export /**
   * This is an object representing your Stripe balance. You can retrieve it to see
   * the balance currently on your Stripe account.
   *
   * You can also retrieve the balance history, which contains a list of
   * [transactions](https://stripe.com/docs/reporting/balance-transaction-types) that contributed to the balance
   * (charges, payouts, and so forth).
   *
   * The available and pending amounts for each currency are broken down further by
   * payment source types.
   *
   * Related guide: [Understanding Connect Account Balances](https://stripe.com/docs/connect/account-balances).
   */
  interface Balance {
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: 'balance';

    /**
     * Funds that are available to be transferred or paid out, whether automatically by Stripe or explicitly via the [Transfers API](https://stripe.com/docs/api#transfers) or [Payouts API](https://stripe.com/docs/api#payouts). The available balance for each currency and payment type can be found in the `source_types` property.
     */
    available: Array<Balance.Available>;

    /**
     * Funds held due to negative balances on connected Custom accounts. The connect reserve balance for each currency and payment type can be found in the `source_types` property.
     */
    connect_reserved?: Array<Balance.ConnectReserved>;

    /**
     * Funds that can be paid out using Instant Payouts.
     */
    instant_available?: Array<Balance.InstantAvailable>;

    issuing?: Balance.Issuing;

    /**
     * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
     */
    livemode: boolean;

    /**
     * Funds that are not yet available in the balance, due to the 7-day rolling pay cycle. The pending balance for each currency, and for each payment type, can be found in the `source_types` property.
     */
    pending: Array<Balance.Pending>;
  }

  export interface BalanceRetrieveParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }

  export interface BalanceResource {
    retrieve:
      | ((
          params?: BalanceRetrieveParams,
          options?: RequestOptions
        ) => Promise<Stripe.Response<Stripe.Balance>>)
      | ((
          options?: RequestOptions
        ) => Promise<Stripe.Response<Stripe.Balance>>);
  }
}

const resource: BalanceResource = StripeResource.extend({
  path: 'balance',

  retrieve: stripeMethod({
    method: 'GET',
    path: '',
  }),
});

export = resource;
