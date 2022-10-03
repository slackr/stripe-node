// File generated from our OpenAPI spec

'use strict';

import StripeResource = require('../../StripeResource');
const stripeMethod = StripeResource.method;

namespace Stripe {
  namespace Terminal {
    export /**
     * A Location represents a grouping of readers.
     *
     * Related guide: [Fleet Management](https://stripe.com/docs/terminal/fleet/locations).
     */
    interface Location {
      /**
       * Unique identifier for the object.
       */
      id: string;

      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object: 'terminal.location';

      address: Stripe.Address;

      /**
       * The ID of a configuration that will be used to customize all readers in this location.
       */
      configuration_overrides?: string;

      deleted?: void;

      /**
       * The display name of the location.
       */
      display_name: string;

      /**
       * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
       */
      livemode: boolean;

      /**
       * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
       */
      metadata: Stripe.Metadata;
    }

    export /**
     * The DeletedLocation object.
     */
    interface DeletedLocation {
      /**
       * Unique identifier for the object.
       */
      id: string;

      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object: 'terminal.location';

      /**
       * Always true for a deleted object
       */
      deleted: true;
    }

    export interface LocationCreateParams {
      /**
       * The full address of the location.
       */
      address: LocationCreateParams.Address;

      /**
       * A name for the location.
       */
      display_name: string;

      /**
       * The ID of a configuration that will be used to customize all readers in this location.
       */
      configuration_overrides?: string;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
       */
      metadata?: Stripe.Emptyable<Stripe.MetadataParam>;
    }

    namespace LocationCreateParams {
      export interface Address {
        /**
         * City, district, suburb, town, or village.
         */
        city?: string;

        /**
         * Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
         */
        country: string;

        /**
         * Address line 1 (e.g., street, PO Box, or company name).
         */
        line1?: string;

        /**
         * Address line 2 (e.g., apartment, suite, unit, or building).
         */
        line2?: string;

        /**
         * ZIP or postal code.
         */
        postal_code?: string;

        /**
         * State, county, province, or region.
         */
        state?: string;
      }
    }

    export interface LocationRetrieveParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    export interface LocationUpdateParams {
      /**
       * The full address of the location.
       */
      address?: Stripe.AddressParam;

      /**
       * The ID of a configuration that will be used to customize all readers in this location.
       */
      configuration_overrides?: string;

      /**
       * A name for the location.
       */
      display_name?: string;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
       */
      metadata?: Stripe.Emptyable<Stripe.MetadataParam>;
    }

    export interface LocationListParams extends PaginationParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    export interface LocationDeleteParams {}

    export interface LocationsResource {
      create: (
        params: LocationCreateParams,
        options?: RequestOptions
      ) => Promise<Stripe.Response<Stripe.Terminal.Location>>;

      retrieve:
        | ((
            id: string,
            params?: LocationRetrieveParams,
            options?: RequestOptions
          ) => Promise<
            Stripe.Response<
              Stripe.Terminal.Location | Stripe.Terminal.DeletedLocation
            >
          >)
        | ((
            id: string,
            options?: RequestOptions
          ) => Promise<
            Stripe.Response<
              Stripe.Terminal.Location | Stripe.Terminal.DeletedLocation
            >
          >);

      update: (
        id: string,
        params?: LocationUpdateParams,
        options?: RequestOptions
      ) => Promise<
        Stripe.Response<
          Stripe.Terminal.Location | Stripe.Terminal.DeletedLocation
        >
      >;

      list:
        | ((
            params?: LocationListParams,
            options?: RequestOptions
          ) => ApiListPromise<Stripe.Terminal.Location>)
        | ((
            options?: RequestOptions
          ) => ApiListPromise<Stripe.Terminal.Location>);

      del:
        | ((
            id: string,
            params?: LocationDeleteParams,
            options?: RequestOptions
          ) => Promise<Stripe.Response<Stripe.Terminal.DeletedLocation>>)
        | ((
            id: string,
            options?: RequestOptions
          ) => Promise<Stripe.Response<Stripe.Terminal.DeletedLocation>>);
    }
  }
}

const resource: LocationsResource = StripeResource.extend({
  path: 'terminal/locations',

  create: stripeMethod({
    method: 'POST',
    path: '',
  }),

  retrieve: stripeMethod({
    method: 'GET',
    path: '/{location}',
  }),

  update: stripeMethod({
    method: 'POST',
    path: '/{location}',
  }),

  list: stripeMethod({
    method: 'GET',
    path: '',
    methodType: 'list',
  }),

  del: stripeMethod({
    method: 'DELETE',
    path: '/{location}',
  }),
});

export = resource;
