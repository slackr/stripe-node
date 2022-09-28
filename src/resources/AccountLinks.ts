// File generated from our OpenAPI spec

import StripeResource = require('../StripeResource');
const stripeMethod = StripeResource.method;

import {Stripe} from '../lib';

// define any special types
type Collect = 'currently_due' | 'eventually_due';

type Type =
  | 'account_onboarding'
  | 'account_update'
  | 'custom_account_update'
  | 'custom_account_verification';

interface AccountLink {
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: 'account_link';

  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;

  /**
   * The timestamp at which this account link will expire.
   */
  expires_at: number;

  /**
   * The URL for the account link.
   */
  url: string;
}

// define params interface
interface AccountLinkCreateParams {
  account: string;
  type: Type;
  collect?: Collect;
  expand?: Array<string>;
  refresh_url?: string;
  return_url?: string;
}

// define `${service.resource.name}Resource type`
type AccountLinksResource = AccountLink & {
  create: (
    params: AccountLinkCreateParams,
    options?: Stripe.RequestOptions
  ) => Promise<Stripe.Response<AccountLink>>;
};

const resource: AccountLinksResource = StripeResource.extend({
  path: 'account_links',
  create: stripeMethod({
    method: 'POST',
    path: '',
  }),
});

export = resource;
