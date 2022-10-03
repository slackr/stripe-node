// File generated from our OpenAPI spec

'use strict';

import StripeResource = require('../StripeResource');
const stripeMethod = StripeResource.method;

namespace Stripe {
  export /**
   * The ApplicationFee object.
   */
  interface ApplicationFee {
    /**
     * Unique identifier for the object.
     */
    id: string;

    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: 'application_fee';

    /**
     * ID of the Stripe account this fee was taken from.
     */
    account: string | Stripe.Account;

    /**
     * Amount earned, in %s.
     */
    amount: number;

    /**
     * Amount in %s refunded (can be less than the amount attribute on the fee if a partial refund was issued)
     */
    amount_refunded: number;

    /**
     * ID of the Connect application that earned the fee.
     */
    application: string | Stripe.Application;

    /**
     * Balance transaction that describes the impact of this collected application fee on your account balance (not including refunds).
     */
    balance_transaction: string | Stripe.BalanceTransaction | null;

    /**
     * ID of the charge that the application fee was taken from.
     */
    charge: string | Stripe.Charge;

    /**
     * Time at which the object was created. Measured in seconds since the Unix epoch.
     */
    created: number;

    /**
     * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
     */
    currency: string;

    /**
     * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
     */
    livemode: boolean;

    /**
     * ID of the corresponding charge on the platform account, if this fee was the result of a charge using the `destination` parameter.
     */
    originating_transaction: string | Stripe.Charge | null;

    /**
     * Whether the fee has been fully refunded. If the fee is only partially refunded, this attribute will still be false.
     */
    refunded: boolean;

    /**
     * A list of refunds that have been applied to the fee.
     */
    refunds: ApiList<Stripe.FeeRefund>;
  }

  export interface ApplicationFeeRetrieveParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }

  export interface ApplicationFeeListParams extends PaginationParams {
    /**
     * Only return application fees for the charge specified by this charge ID.
     */
    charge?: string;

    created?: Stripe.RangeQueryParam | number;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }

  export interface ApplicationFeesResource {
    retrieve:
      | ((
          id: string,
          params?: ApplicationFeeRetrieveParams,
          options?: RequestOptions
        ) => Promise<Stripe.Response<Stripe.ApplicationFee>>)
      | ((
          id: string,
          options?: RequestOptions
        ) => Promise<Stripe.Response<Stripe.ApplicationFee>>);

    list:
      | ((
          params?: ApplicationFeeListParams,
          options?: RequestOptions
        ) => ApiListPromise<Stripe.ApplicationFee>)
      | ((options?: RequestOptions) => ApiListPromise<Stripe.ApplicationFee>);

    createRefund:
      | ((
          id: string,
          params?: FeeRefundCreateParams,
          options?: RequestOptions
        ) => Promise<Stripe.Response<Stripe.FeeRefund>>)
      | ((
          id: string,
          options?: RequestOptions
        ) => Promise<Stripe.Response<Stripe.FeeRefund>>);

    retrieveRefund:
      | ((
          feeId: string,
          id: string,
          params?: FeeRefundRetrieveParams,
          options?: RequestOptions
        ) => Promise<Stripe.Response<Stripe.FeeRefund>>)
      | ((
          feeId: string,
          id: string,
          options?: RequestOptions
        ) => Promise<Stripe.Response<Stripe.FeeRefund>>);

    updateRefund: (
      feeId: string,
      id: string,
      params?: FeeRefundUpdateParams,
      options?: RequestOptions
    ) => Promise<Stripe.Response<Stripe.FeeRefund>>;

    listRefunds:
      | ((
          id: string,
          params?: FeeRefundListParams,
          options?: RequestOptions
        ) => ApiListPromise<Stripe.FeeRefund>)
      | ((
          id: string,
          options?: RequestOptions
        ) => ApiListPromise<Stripe.FeeRefund>);
  }
}

const resource: ApplicationFeesResource = StripeResource.extend({
  path: 'application_fees',

  retrieve: stripeMethod({
    method: 'GET',
    path: '/{id}',
  }),

  list: stripeMethod({
    method: 'GET',
    path: '',
    methodType: 'list',
  }),

  createRefund: stripeMethod({
    method: 'POST',
    path: '/{id}/refunds',
  }),

  retrieveRefund: stripeMethod({
    method: 'GET',
    path: '/{fee}/refunds/{id}',
  }),

  updateRefund: stripeMethod({
    method: 'POST',
    path: '/{fee}/refunds/{id}',
  }),

  listRefunds: stripeMethod({
    method: 'GET',
    path: '/{id}/refunds',
    methodType: 'list',
  }),
});

export = resource;
