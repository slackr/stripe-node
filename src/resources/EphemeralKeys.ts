// File generated from our OpenAPI spec

'use strict';

import StripeResource = require('../StripeResource');
const stripeMethod = StripeResource.method;

namespace Stripe {
  export /**
   * The EphemeralKey object.
   */
  interface EphemeralKey {
    /**
     * Unique identifier for the object.
     */
    id: string;

    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: 'ephemeral_key';

    /**
     * Time at which the object was created. Measured in seconds since the Unix epoch.
     */
    created: number;

    /**
     * Time at which the key will expire. Measured in seconds since the Unix epoch.
     */
    expires: number;

    /**
     * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
     */
    livemode: boolean;

    /**
     * The key's secret. You can use this value to make authorized requests to the Stripe API.
     */
    secret?: string;
  }

  export interface EphemeralKeyCreateParams {
    /**
     * The ID of the Customer you'd like to modify using the resulting ephemeral key.
     */
    customer?: string;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * The ID of the Issuing Card you'd like to access using the resulting ephemeral key.
     */
    issuing_card?: string;
  }

  export interface EphemeralKeyDeleteParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }

  export interface EphemeralKeysResource {
    create:
      | ((
          params?: EphemeralKeyCreateParams,
          options?: RequestOptions
        ) => Promise<Stripe.Response<Stripe.EphemeralKey>>)
      | ((
          options?: RequestOptions
        ) => Promise<Stripe.Response<Stripe.EphemeralKey>>);

    del:
      | ((
          id: string,
          params?: EphemeralKeyDeleteParams,
          options?: RequestOptions
        ) => Promise<Stripe.Response<Stripe.EphemeralKey>>)
      | ((
          id: string,
          options?: RequestOptions
        ) => Promise<Stripe.Response<Stripe.EphemeralKey>>);
  }
}

const resource: EphemeralKeysResource = StripeResource.extend({
  path: 'ephemeral_keys',

  create: stripeMethod({
    method: 'POST',
    path: '',
    validator: (data, options) => {
      if (!options.headers || !options.headers['Stripe-Version']) {
        throw new Error(
          'Passing apiVersion in a separate options hash is required to create an ephemeral key. See https://stripe.com/docs/api/versioning?lang=node'
        );
      }
    },
  }),

  del: stripeMethod({
    method: 'DELETE',
    path: '/{key}',
  }),
});

export = resource;
