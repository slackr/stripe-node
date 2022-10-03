// File generated from our OpenAPI spec

'use strict';

import StripeResource = require('../StripeResource');
const stripeMethod = StripeResource.method;

namespace Stripe {
  export /**
   * [Tax codes](https://stripe.com/docs/tax/tax-categories) classify goods and services for tax purposes.
   */
  interface TaxCode {
    /**
     * Unique identifier for the object.
     */
    id: string;

    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: 'tax_code';

    /**
     * A detailed description of which types of products the tax code represents.
     */
    description: string;

    /**
     * A short name for the tax code.
     */
    name: string;
  }

  export interface TaxCodeRetrieveParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }

  export interface TaxCodeListParams extends PaginationParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }

  export interface TaxCodesResource {
    retrieve:
      | ((
          id: string,
          params?: TaxCodeRetrieveParams,
          options?: RequestOptions
        ) => Promise<Stripe.Response<Stripe.TaxCode>>)
      | ((
          id: string,
          options?: RequestOptions
        ) => Promise<Stripe.Response<Stripe.TaxCode>>);

    list:
      | ((
          params?: TaxCodeListParams,
          options?: RequestOptions
        ) => ApiListPromise<Stripe.TaxCode>)
      | ((options?: RequestOptions) => ApiListPromise<Stripe.TaxCode>);
  }
}

const resource: TaxCodesResource = StripeResource.extend({
  path: 'tax_codes',

  retrieve: stripeMethod({
    method: 'GET',
    path: '/{id}',
  }),

  list: stripeMethod({
    method: 'GET',
    path: '',
    methodType: 'list',
  }),
});

export = resource;
