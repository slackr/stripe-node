// File generated from our OpenAPI spec

'use strict';

const {multipartRequestDataProcessor} = require('../multipart');
import StripeResource = require('../StripeResource');
const stripeMethod = StripeResource.method;

namespace Stripe {
  namespace File {
    export type Purpose =
      | 'account_requirement'
      | 'additional_verification'
      | 'business_icon'
      | 'business_logo'
      | 'customer_signature'
      | 'dispute_evidence'
      | 'document_provider_identity_document'
      | 'finance_report_run'
      | 'identity_document'
      | 'identity_document_downloadable'
      | 'pci_document'
      | 'selfie'
      | 'sigma_scheduled_query'
      | 'tax_document_user_upload'
      | 'terminal_reader_splashscreen';
  }

  export /**
   * This is an object representing a file hosted on Stripe's servers. The
   * file may have been uploaded by yourself using the [create file](https://stripe.com/docs/api#create_file)
   * request (for example, when uploading dispute evidence) or it may have
   * been created by Stripe (for example, the results of a [Sigma scheduled
   * query](https://stripe.com/docs/api#scheduled_queries)).
   *
   * Related guide: [File Upload Guide](https://stripe.com/docs/file-upload).
   */
  interface File {
    /**
     * Unique identifier for the object.
     */
    id: string;

    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: 'file';

    /**
     * Time at which the object was created. Measured in seconds since the Unix epoch.
     */
    created: number;

    /**
     * The time at which the file expires and is no longer available in epoch seconds.
     */
    expires_at: number | null;

    /**
     * A filename for the file, suitable for saving to a filesystem.
     */
    filename: string | null;

    /**
     * A list of [file links](https://stripe.com/docs/api#file_links) that point at this file.
     */
    links?: ApiList<Stripe.FileLink> | null;

    /**
     * The [purpose](https://stripe.com/docs/file-upload#uploading-a-file) of the uploaded file.
     */
    purpose: File.Purpose;

    /**
     * The size in bytes of the file object.
     */
    size: number;

    /**
     * A user friendly title for the document.
     */
    title: string | null;

    /**
     * The type of the file returned (e.g., `csv`, `pdf`, `jpg`, or `png`).
     */
    type: string | null;

    /**
     * The URL from which the file can be downloaded using your live secret API key.
     */
    url: string | null;
  }

  export interface FileCreateParams {}

  export interface FileRetrieveParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }

  namespace FileListParams {
    export type Purpose =
      | 'account_requirement'
      | 'additional_verification'
      | 'business_icon'
      | 'business_logo'
      | 'customer_signature'
      | 'dispute_evidence'
      | 'document_provider_identity_document'
      | 'finance_report_run'
      | 'identity_document'
      | 'identity_document_downloadable'
      | 'pci_document'
      | 'selfie'
      | 'sigma_scheduled_query'
      | 'tax_document_user_upload'
      | 'terminal_reader_splashscreen';
  }

  export interface FileListParams extends PaginationParams {
    created?: Stripe.RangeQueryParam | number;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * The file purpose to filter queries by. If none is provided, files will not be filtered by purpose.
     */
    purpose?: FileListParams.Purpose;
  }

  export interface FilesResource {
    create:
      | ((
          params?: FileCreateParams,
          options?: RequestOptions
        ) => Promise<Stripe.Response<Stripe.File>>)
      | ((options?: RequestOptions) => Promise<Stripe.Response<Stripe.File>>);

    retrieve:
      | ((
          id: string,
          params?: FileRetrieveParams,
          options?: RequestOptions
        ) => Promise<Stripe.Response<Stripe.File>>)
      | ((
          id: string,
          options?: RequestOptions
        ) => Promise<Stripe.Response<Stripe.File>>);

    list:
      | ((
          params?: FileListParams,
          options?: RequestOptions
        ) => ApiListPromise<Stripe.File>)
      | ((options?: RequestOptions) => ApiListPromise<Stripe.File>);
  }
}

const resource: FilesResource = StripeResource.extend({
  path: 'files',

  create: stripeMethod({
    method: 'POST',
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    host: 'files.stripe.com',
  }),

  retrieve: stripeMethod({
    method: 'GET',
    path: '/{file}',
  }),

  list: stripeMethod({
    method: 'GET',
    path: '',
    methodType: 'list',
  }),

  requestDataProcessor: multipartRequestDataProcessor,
});

export = resource;
