// File generated from our OpenAPI spec

'use strict';

import StripeResource = require('../StripeResource');
const stripeMethod = StripeResource.method;

namespace Stripe {
  export /**
   * To share the contents of a `File` object with non-Stripe users, you can
   * create a `FileLink`. `FileLink`s contain a URL that can be used to
   * retrieve the contents of the file without authentication.
   */
  interface FileLink {
    /**
     * Unique identifier for the object.
     */
    id: string;

    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: 'file_link';

    /**
     * Time at which the object was created. Measured in seconds since the Unix epoch.
     */
    created: number;

    /**
     * Whether this link is already expired.
     */
    expired: boolean;

    /**
     * Time at which the link expires.
     */
    expires_at: number | null;

    /**
     * The file object this link points to.
     */
    file: string | Stripe.File;

    /**
     * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
     */
    livemode: boolean;

    /**
     * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
     */
    metadata: Stripe.Metadata;

    /**
     * The publicly accessible URL to download the file.
     */
    url: string | null;
  }

  export interface FileLinkCreateParams {
    /**
     * The ID of the file. The file's `purpose` must be one of the following: `business_icon`, `business_logo`, `customer_signature`, `dispute_evidence`, `finance_report_run`, `identity_document_downloadable`, `pci_document`, `selfie`, `sigma_scheduled_query`, `tax_document_user_upload`, or `terminal_reader_splashscreen`.
     */
    file: string;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * A future timestamp after which the link will no longer be usable.
     */
    expires_at?: number;

    /**
     * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
     */
    metadata?: Stripe.Emptyable<Stripe.MetadataParam>;
  }

  export interface FileLinkRetrieveParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }

  export interface FileLinkUpdateParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * A future timestamp after which the link will no longer be usable, or `now` to expire the link immediately.
     */
    expires_at?: Stripe.Emptyable<'now' | number>;

    /**
     * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
     */
    metadata?: Stripe.Emptyable<Stripe.MetadataParam>;
  }

  export interface FileLinkListParams extends PaginationParams {
    created?: Stripe.RangeQueryParam | number;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * Filter links by their expiration status. By default, all links are returned.
     */
    expired?: boolean;

    /**
     * Only return links for the given file.
     */
    file?: string;
  }

  export interface FileLinksResource {
    create: (
      params: FileLinkCreateParams,
      options?: RequestOptions
    ) => Promise<Stripe.Response<Stripe.FileLink>>;

    retrieve:
      | ((
          id: string,
          params?: FileLinkRetrieveParams,
          options?: RequestOptions
        ) => Promise<Stripe.Response<Stripe.FileLink>>)
      | ((
          id: string,
          options?: RequestOptions
        ) => Promise<Stripe.Response<Stripe.FileLink>>);

    update: (
      id: string,
      params?: FileLinkUpdateParams,
      options?: RequestOptions
    ) => Promise<Stripe.Response<Stripe.FileLink>>;

    list:
      | ((
          params?: FileLinkListParams,
          options?: RequestOptions
        ) => ApiListPromise<Stripe.FileLink>)
      | ((options?: RequestOptions) => ApiListPromise<Stripe.FileLink>);
  }
}

const resource: FileLinksResource = StripeResource.extend({
  path: 'file_links',

  create: stripeMethod({
    method: 'POST',
    path: '',
  }),

  retrieve: stripeMethod({
    method: 'GET',
    path: '/{link}',
  }),

  update: stripeMethod({
    method: 'POST',
    path: '/{link}',
  }),

  list: stripeMethod({
    method: 'GET',
    path: '',
    methodType: 'list',
  }),
});

export = resource;
