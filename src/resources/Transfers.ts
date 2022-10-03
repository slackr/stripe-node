// File generated from our OpenAPI spec

'use strict';

import StripeResource = require('../StripeResource');
const stripeMethod = StripeResource.method;

namespace Stripe {
  export /**
   * A `Transfer` object is created when you move funds between Stripe accounts as
   * part of Connect.
   *
   * Before April 6, 2017, transfers also represented movement of funds from a
   * Stripe account to a card or bank account. This behavior has since been split
   * out into a [Payout](https://stripe.com/docs/api#payout_object) object, with corresponding payout endpoints. For more
   * information, read about the
   * [transfer/payout split](https://stripe.com/docs/transfer-payout-split).
   *
   * Related guide: [Creating Separate Charges and Transfers](https://stripe.com/docs/connect/charges-transfers).
   */
  interface Transfer {
    /**
     * Unique identifier for the object.
     */
    id: string;

    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: 'transfer';

    /**
     * Amount in %s to be transferred.
     */
    amount: number;

    /**
     * Amount in %s reversed (can be less than the amount attribute on the transfer if a partial reversal was issued).
     */
    amount_reversed: number;

    /**
     * Balance transaction that describes the impact of this transfer on your account balance.
     */
    balance_transaction: string | Stripe.BalanceTransaction | null;

    /**
     * Time that this record of the transfer was first created.
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
     * ID of the Stripe account the transfer was sent to.
     */
    destination: string | Stripe.Account | null;

    /**
     * If the destination is a Stripe account, this will be the ID of the payment that the destination account received for the transfer.
     */
    destination_payment?: string | Stripe.Charge;

    /**
     * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
     */
    livemode: boolean;

    /**
     * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
     */
    metadata: Stripe.Metadata;

    /**
     * A list of reversals that have been applied to the transfer.
     */
    reversals: ApiList<Stripe.TransferReversal>;

    /**
     * Whether the transfer has been fully reversed. If the transfer is only partially reversed, this attribute will still be false.
     */
    reversed: boolean;

    /**
     * ID of the charge or payment that was used to fund the transfer. If null, the transfer was funded from the available balance.
     */
    source_transaction: string | Stripe.Charge | null;

    /**
     * The source balance this transfer came from. One of `card`, `fpx`, or `bank_account`.
     */
    source_type?: string;

    /**
     * A string that identifies this transaction as part of a group. See the [Connect documentation](https://stripe.com/docs/connect/charges-transfers#transfer-options) for details.
     */
    transfer_group: string | null;
  }

  namespace TransferCreateParams {
    export type SourceType = 'bank_account' | 'card' | 'fpx';
  }

  export interface TransferCreateParams {
    /**
     * 3-letter [ISO code for currency](https://stripe.com/docs/payouts).
     */
    currency: string;

    /**
     * The ID of a connected Stripe account. [See the Connect documentation](https://stripe.com/docs/connect/charges-transfers) for details.
     */
    destination: string;

    /**
     * A positive integer in cents (or local equivalent) representing how much to transfer.
     */
    amount?: number;

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
    metadata?: Stripe.MetadataParam;

    /**
     * You can use this parameter to transfer funds from a charge before they are added to your available balance. A pending balance will transfer immediately but the funds will not become available until the original charge becomes available. [See the Connect documentation](https://stripe.com/docs/connect/charges-transfers#transfer-availability) for details.
     */
    source_transaction?: string;

    /**
     * The source balance to use for this transfer. One of `bank_account`, `card`, or `fpx`. For most users, this will default to `card`.
     */
    source_type?: TransferCreateParams.SourceType;

    /**
     * A string that identifies this transaction as part of a group. See the [Connect documentation](https://stripe.com/docs/connect/charges-transfers#transfer-options) for details.
     */
    transfer_group?: string;
  }

  export interface TransferRetrieveParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }

  export interface TransferUpdateParams {
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

  export interface TransferListParams extends PaginationParams {
    created?: Stripe.RangeQueryParam | number;

    /**
     * Only return transfers for the destination specified by this account ID.
     */
    destination?: string;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * Only return transfers with the specified transfer group.
     */
    transfer_group?: string;
  }

  export interface TransfersResource {
    create: (
      params: TransferCreateParams,
      options?: RequestOptions
    ) => Promise<Stripe.Response<Stripe.Transfer>>;

    retrieve:
      | ((
          id: string,
          params?: TransferRetrieveParams,
          options?: RequestOptions
        ) => Promise<Stripe.Response<Stripe.Transfer>>)
      | ((
          id: string,
          options?: RequestOptions
        ) => Promise<Stripe.Response<Stripe.Transfer>>);

    update: (
      id: string,
      params?: TransferUpdateParams,
      options?: RequestOptions
    ) => Promise<Stripe.Response<Stripe.Transfer>>;

    list:
      | ((
          params?: TransferListParams,
          options?: RequestOptions
        ) => ApiListPromise<Stripe.Transfer>)
      | ((options?: RequestOptions) => ApiListPromise<Stripe.Transfer>);

    createReversal:
      | ((
          id: string,
          params?: TransferReversalCreateParams,
          options?: RequestOptions
        ) => Promise<Stripe.Response<Stripe.TransferReversal>>)
      | ((
          id: string,
          options?: RequestOptions
        ) => Promise<Stripe.Response<Stripe.TransferReversal>>);

    retrieveReversal:
      | ((
          idId: string,
          id: string,
          params?: TransferReversalRetrieveParams,
          options?: RequestOptions
        ) => Promise<Stripe.Response<Stripe.TransferReversal>>)
      | ((
          idId: string,
          id: string,
          options?: RequestOptions
        ) => Promise<Stripe.Response<Stripe.TransferReversal>>);

    updateReversal: (
      idId: string,
      id: string,
      params?: TransferReversalUpdateParams,
      options?: RequestOptions
    ) => Promise<Stripe.Response<Stripe.TransferReversal>>;

    listReversals:
      | ((
          id: string,
          params?: TransferReversalListParams,
          options?: RequestOptions
        ) => ApiListPromise<Stripe.TransferReversal>)
      | ((
          id: string,
          options?: RequestOptions
        ) => ApiListPromise<Stripe.TransferReversal>);
  }
}

const resource: TransfersResource = StripeResource.extend({
  path: 'transfers',

  create: stripeMethod({
    method: 'POST',
    path: '',
  }),

  retrieve: stripeMethod({
    method: 'GET',
    path: '/{transfer}',
  }),

  update: stripeMethod({
    method: 'POST',
    path: '/{transfer}',
  }),

  list: stripeMethod({
    method: 'GET',
    path: '',
    methodType: 'list',
  }),

  createReversal: stripeMethod({
    method: 'POST',
    path: '/{id}/reversals',
  }),

  retrieveReversal: stripeMethod({
    method: 'GET',
    path: '/{transfer}/reversals/{id}',
  }),

  updateReversal: stripeMethod({
    method: 'POST',
    path: '/{transfer}/reversals/{id}',
  }),

  listReversals: stripeMethod({
    method: 'GET',
    path: '/{id}/reversals',
    methodType: 'list',
  }),
});

export = resource;
