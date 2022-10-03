// File generated from our OpenAPI spec

'use strict';

import StripeResource = require('../StripeResource');
const stripeMethod = StripeResource.method;

namespace Stripe {
  namespace Topup {
    export type Status =
      | 'canceled'
      | 'failed'
      | 'pending'
      | 'reversed'
      | 'succeeded';
  }

  export /**
   * To top up your Stripe balance, you create a top-up object. You can retrieve
   * individual top-ups, as well as list all top-ups. Top-ups are identified by a
   * unique, random ID.
   *
   * Related guide: [Topping Up your Platform Account](https://stripe.com/docs/connect/top-ups).
   */
  interface Topup {
    /**
     * Unique identifier for the object.
     */
    id: string;

    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: 'topup';

    /**
     * Amount transferred.
     */
    amount: number;

    /**
     * ID of the balance transaction that describes the impact of this top-up on your account balance. May not be specified depending on status of top-up.
     */
    balance_transaction: string | Stripe.BalanceTransaction | null;

    /**
     * Time at which the object was created. Measured in seconds since the Unix epoch.
     */
    created: number;

    /**
     * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
     */
    currency: string;

    /**
     * An arbitrary string attached to the object. Often useful for displaying to users.
     */
    description: string | null;

    /**
     * Date the funds are expected to arrive in your Stripe account for payouts. This factors in delays like weekends or bank holidays. May not be specified depending on status of top-up.
     */
    expected_availability_date: number | null;

    /**
     * Error code explaining reason for top-up failure if available (see [the errors section](https://stripe.com/docs/api#errors) for a list of codes).
     */
    failure_code: string | null;

    /**
     * Message to user further explaining reason for top-up failure if available.
     */
    failure_message: string | null;

    /**
     * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
     */
    livemode: boolean;

    /**
     * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
     */
    metadata: Stripe.Metadata;

    /**
     * For most Stripe users, the source of every top-up is a bank account. This hash is then the [source object](https://stripe.com/docs/api#source_object) describing that bank account.
     */
    source: Stripe.Source | null;

    /**
     * Extra information about a top-up. This will appear on your source's bank statement. It must contain at least one letter.
     */
    statement_descriptor: string | null;

    /**
     * The status of the top-up is either `canceled`, `failed`, `pending`, `reversed`, or `succeeded`.
     */
    status: Topup.Status;

    /**
     * A string that identifies this top-up as part of a group.
     */
    transfer_group: string | null;
  }

  export interface TopupCreateParams {
    /**
     * A positive integer representing how much to transfer.
     */
    amount: number;

    /**
     * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
     */
    currency: string;

    /**
     * An arbitrary string attached to the object. Often useful for displaying to users.
     */
    description?: string;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
     */
    metadata?: Stripe.Emptyable<Stripe.MetadataParam>;

    /**
     * The ID of a source to transfer funds from. For most users, this should be left unspecified which will use the bank account that was set up in the dashboard for the specified currency. In test mode, this can be a test bank token (see [Testing Top-ups](https://stripe.com/docs/connect/testing#testing-top-ups)).
     */
    source?: string;

    /**
     * Extra information about a top-up for the source's bank statement. Limited to 15 ASCII characters.
     */
    statement_descriptor?: string;

    /**
     * A string that identifies this top-up as part of a group.
     */
    transfer_group?: string;
  }

  export interface TopupRetrieveParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }

  export interface TopupUpdateParams {
    /**
     * An arbitrary string attached to the object. Often useful for displaying to users.
     */
    description?: string;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
     */
    metadata?: Stripe.Emptyable<Stripe.MetadataParam>;
  }

  namespace TopupListParams {
    export type Status = 'canceled' | 'failed' | 'pending' | 'succeeded';
  }

  export interface TopupListParams extends PaginationParams {
    /**
     * A positive integer representing how much to transfer.
     */
    amount?: Stripe.RangeQueryParam | number;

    /**
     * A filter on the list, based on the object `created` field. The value can be a string with an integer Unix timestamp, or it can be a dictionary with a number of different query options.
     */
    created?: Stripe.RangeQueryParam | number;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * Only return top-ups that have the given status. One of `canceled`, `failed`, `pending` or `succeeded`.
     */
    status?: TopupListParams.Status;
  }

  export interface TopupCancelParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }

  export interface TopupsResource {
    create: (
      params: TopupCreateParams,
      options?: RequestOptions
    ) => Promise<Stripe.Response<Stripe.Topup>>;

    retrieve:
      | ((
          id: string,
          params?: TopupRetrieveParams,
          options?: RequestOptions
        ) => Promise<Stripe.Response<Stripe.Topup>>)
      | ((
          id: string,
          options?: RequestOptions
        ) => Promise<Stripe.Response<Stripe.Topup>>);

    update: (
      id: string,
      params?: TopupUpdateParams,
      options?: RequestOptions
    ) => Promise<Stripe.Response<Stripe.Topup>>;

    list:
      | ((
          params?: TopupListParams,
          options?: RequestOptions
        ) => ApiListPromise<Stripe.Topup>)
      | ((options?: RequestOptions) => ApiListPromise<Stripe.Topup>);

    cancel:
      | ((
          id: string,
          params?: TopupCancelParams,
          options?: RequestOptions
        ) => Promise<Stripe.Response<Stripe.Topup>>)
      | ((
          id: string,
          options?: RequestOptions
        ) => Promise<Stripe.Response<Stripe.Topup>>);
  }
}

const resource: TopupsResource = StripeResource.extend({
  path: 'topups',

  create: stripeMethod({
    method: 'POST',
    path: '',
  }),

  retrieve: stripeMethod({
    method: 'GET',
    path: '/{topup}',
  }),

  update: stripeMethod({
    method: 'POST',
    path: '/{topup}',
  }),

  list: stripeMethod({
    method: 'GET',
    path: '',
    methodType: 'list',
  }),

  cancel: stripeMethod({
    method: 'POST',
    path: '/{topup}/cancel',
  }),
});

export = resource;
