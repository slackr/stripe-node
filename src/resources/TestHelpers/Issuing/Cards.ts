// File generated from our OpenAPI spec

'use strict';

import StripeResource = require('../../../StripeResource');
const stripeMethod = StripeResource.method;

namespace Stripe {
  namespace TestHelpers {
    namespace Issuing {
      export interface CardDeliverCardParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
      }
    }

    namespace Issuing {
      export interface CardFailCardParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
      }
    }

    namespace Issuing {
      export interface CardReturnCardParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
      }
    }

    namespace Issuing {
      export interface CardShipCardParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
      }
    }

    namespace Issuing {
      export interface CardsResource {
        deliverCard:
          | ((
              id: string,
              params?: CardDeliverCardParams,
              options?: RequestOptions
            ) => Promise<Stripe.Response<Stripe.Issuing.Card>>)
          | ((
              id: string,
              options?: RequestOptions
            ) => Promise<Stripe.Response<Stripe.Issuing.Card>>);

        failCard:
          | ((
              id: string,
              params?: CardFailCardParams,
              options?: RequestOptions
            ) => Promise<Stripe.Response<Stripe.Issuing.Card>>)
          | ((
              id: string,
              options?: RequestOptions
            ) => Promise<Stripe.Response<Stripe.Issuing.Card>>);

        returnCard:
          | ((
              id: string,
              params?: CardReturnCardParams,
              options?: RequestOptions
            ) => Promise<Stripe.Response<Stripe.Issuing.Card>>)
          | ((
              id: string,
              options?: RequestOptions
            ) => Promise<Stripe.Response<Stripe.Issuing.Card>>);

        shipCard:
          | ((
              id: string,
              params?: CardShipCardParams,
              options?: RequestOptions
            ) => Promise<Stripe.Response<Stripe.Issuing.Card>>)
          | ((
              id: string,
              options?: RequestOptions
            ) => Promise<Stripe.Response<Stripe.Issuing.Card>>);
      }
    }
  }
}

const resource: CardsResource = StripeResource.extend({
  path: 'test_helpers/issuing/cards',

  deliverCard: stripeMethod({
    method: 'POST',
    path: '/{card}/shipping/deliver',
  }),

  failCard: stripeMethod({
    method: 'POST',
    path: '/{card}/shipping/fail',
  }),

  returnCard: stripeMethod({
    method: 'POST',
    path: '/{card}/shipping/return',
  }),

  shipCard: stripeMethod({
    method: 'POST',
    path: '/{card}/shipping/ship',
  }),
});

export = resource;
