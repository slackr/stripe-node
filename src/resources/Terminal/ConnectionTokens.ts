// File generated from our OpenAPI spec

'use strict';

import StripeResource = require('../../StripeResource');
const stripeMethod = StripeResource.method;

namespace Stripe {
  namespace Terminal {
    export /**
     * A Connection Token is used by the Stripe Terminal SDK to connect to a reader.
     *
     * Related guide: [Fleet Management](https://stripe.com/docs/terminal/fleet/locations).
     */
    interface ConnectionToken {
      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object: 'terminal.connection_token';

      /**
       * The id of the location that this connection token is scoped to. Note that location scoping only applies to internet-connected readers. For more details, see [the docs on scoping connection tokens](https://stripe.com/docs/terminal/fleet/locations#connection-tokens).
       */
      location?: string;

      /**
       * Your application should pass this token to the Stripe Terminal SDK.
       */
      secret: string;
    }

    export interface ConnectionTokenCreateParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * The id of the location that this connection token is scoped to. If specified the connection token will only be usable with readers assigned to that location, otherwise the connection token will be usable with all readers. Note that location scoping only applies to internet-connected readers. For more details, see [the docs on scoping connection tokens](https://stripe.com/docs/terminal/fleet/locations#connection-tokens).
       */
      location?: string;
    }

    export interface ConnectionTokensResource {
      create:
        | ((
            params?: ConnectionTokenCreateParams,
            options?: RequestOptions
          ) => Promise<Stripe.Response<Stripe.Terminal.ConnectionToken>>)
        | ((
            options?: RequestOptions
          ) => Promise<Stripe.Response<Stripe.Terminal.ConnectionToken>>);
    }
  }
}

const resource: ConnectionTokensResource = StripeResource.extend({
  path: 'terminal/connection_tokens',

  create: stripeMethod({
    method: 'POST',
    path: '',
  }),
});

export = resource;
