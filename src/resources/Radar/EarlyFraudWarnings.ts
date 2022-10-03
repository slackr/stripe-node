// File generated from our OpenAPI spec

'use strict';

import StripeResource = require('../../StripeResource');
const stripeMethod = StripeResource.method;

namespace Stripe {
  namespace Radar {
    export /**
     * An early fraud warning indicates that the card issuer has notified us that a
     * charge may be fraudulent.
     *
     * Related guide: [Early Fraud Warnings](https://stripe.com/docs/disputes/measuring#early-fraud-warnings).
     */
    interface EarlyFraudWarning {
      /**
       * Unique identifier for the object.
       */
      id: string;

      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object: 'radar.early_fraud_warning';

      /**
       * An EFW is actionable if it has not received a dispute and has not been fully refunded. You may wish to proactively refund a charge that receives an EFW, in order to avoid receiving a dispute later.
       */
      actionable: boolean;

      /**
       * ID of the charge this early fraud warning is for, optionally expanded.
       */
      charge: string | Stripe.Charge;

      /**
       * Time at which the object was created. Measured in seconds since the Unix epoch.
       */
      created: number;

      /**
       * The type of fraud labelled by the issuer. One of `card_never_received`, `fraudulent_card_application`, `made_with_counterfeit_card`, `made_with_lost_card`, `made_with_stolen_card`, `misc`, `unauthorized_use_of_card`.
       */
      fraud_type: string;

      /**
       * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
       */
      livemode: boolean;

      /**
       * ID of the Payment Intent this early fraud warning is for, optionally expanded.
       */
      payment_intent?: string | Stripe.PaymentIntent;
    }

    export interface EarlyFraudWarningRetrieveParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    export interface EarlyFraudWarningListParams extends PaginationParams {
      /**
       * Only return early fraud warnings for the charge specified by this charge ID.
       */
      charge?: string;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * Only return early fraud warnings for charges that were created by the PaymentIntent specified by this PaymentIntent ID.
       */
      payment_intent?: string;
    }

    export interface EarlyFraudWarningsResource {
      retrieve:
        | ((
            id: string,
            params?: EarlyFraudWarningRetrieveParams,
            options?: RequestOptions
          ) => Promise<Stripe.Response<Stripe.Radar.EarlyFraudWarning>>)
        | ((
            id: string,
            options?: RequestOptions
          ) => Promise<Stripe.Response<Stripe.Radar.EarlyFraudWarning>>);

      list:
        | ((
            params?: EarlyFraudWarningListParams,
            options?: RequestOptions
          ) => ApiListPromise<Stripe.Radar.EarlyFraudWarning>)
        | ((
            options?: RequestOptions
          ) => ApiListPromise<Stripe.Radar.EarlyFraudWarning>);
    }
  }
}

const resource: EarlyFraudWarningsResource = StripeResource.extend({
  path: 'radar/early_fraud_warnings',

  retrieve: stripeMethod({
    method: 'GET',
    path: '/{earlyFraudWarning}',
  }),

  list: stripeMethod({
    method: 'GET',
    path: '',
    methodType: 'list',
  }),
});

export = resource;
