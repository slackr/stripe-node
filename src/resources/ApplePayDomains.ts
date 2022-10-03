// File generated from our OpenAPI spec

'use strict';

import StripeResource = require('../StripeResource');
const stripeMethod = StripeResource.method;

namespace Stripe {
  export /**
   * The ApplePayDomain object.
   */
  interface ApplePayDomain {
    /**
     * Unique identifier for the object.
     */
    id: string;

    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: 'apple_pay_domain';

    /**
     * Time at which the object was created. Measured in seconds since the Unix epoch.
     */
    created: number;

    deleted?: void;

    domain_name: string;

    /**
     * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
     */
    livemode: boolean;
  }

  export /**
   * The DeletedApplePayDomain object.
   */
  interface DeletedApplePayDomain {
    /**
     * Unique identifier for the object.
     */
    id: string;

    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: 'apple_pay_domain';

    /**
     * Always true for a deleted object
     */
    deleted: true;
  }

  export interface ApplePayDomainCreateParams {
    domain_name: string;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }

  export interface ApplePayDomainRetrieveParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }

  export interface ApplePayDomainListParams extends PaginationParams {
    domain_name?: string;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }

  export interface ApplePayDomainDeleteParams {}

  export interface ApplePayDomainsResource {
    create: (
      params: ApplePayDomainCreateParams,
      options?: RequestOptions
    ) => Promise<Stripe.Response<Stripe.ApplePayDomain>>;

    retrieve:
      | ((
          id: string,
          params?: ApplePayDomainRetrieveParams,
          options?: RequestOptions
        ) => Promise<Stripe.Response<Stripe.ApplePayDomain>>)
      | ((
          id: string,
          options?: RequestOptions
        ) => Promise<Stripe.Response<Stripe.ApplePayDomain>>);

    list:
      | ((
          params?: ApplePayDomainListParams,
          options?: RequestOptions
        ) => ApiListPromise<Stripe.ApplePayDomain>)
      | ((options?: RequestOptions) => ApiListPromise<Stripe.ApplePayDomain>);

    del:
      | ((
          id: string,
          params?: ApplePayDomainDeleteParams,
          options?: RequestOptions
        ) => Promise<Stripe.Response<Stripe.DeletedApplePayDomain>>)
      | ((
          id: string,
          options?: RequestOptions
        ) => Promise<Stripe.Response<Stripe.DeletedApplePayDomain>>);
  }
}

const resource: ApplePayDomainsResource = StripeResource.extend({
  path: 'apple_pay/domains',

  create: stripeMethod({
    method: 'POST',
    path: '',
  }),

  retrieve: stripeMethod({
    method: 'GET',
    path: '/{domain}',
  }),

  list: stripeMethod({
    method: 'GET',
    path: '',
    methodType: 'list',
  }),

  del: stripeMethod({
    method: 'DELETE',
    path: '/{domain}',
  }),
});

export = resource;
