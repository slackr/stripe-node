// File generated from our OpenAPI spec

'use strict';

import StripeResource = require('../../StripeResource');
const stripeMethod = StripeResource.method;

namespace Stripe {
  namespace Identity {
    export /**
     * A VerificationReport is the result of an attempt to collect and verify data from a user.
     * The collection of verification checks performed is determined from the `type` and `options`
     * parameters used. You can find the result of each verification check performed in the
     * appropriate sub-resource: `document`, `id_number`, `selfie`.
     *
     * Each VerificationReport contains a copy of any data collected by the user as well as
     * reference IDs which can be used to access collected images through the [FileUpload](https://stripe.com/docs/api/files)
     * API. To configure and create VerificationReports, use the
     * [VerificationSession](https://stripe.com/docs/api/identity/verification_sessions) API.
     *
     * Related guides: [Accessing verification results](https://stripe.com/docs/identity/verification-sessions#results).
     */
    interface VerificationReport {
      /**
       * Unique identifier for the object.
       */
      id: string;

      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object: 'identity.verification_report';

      /**
       * Time at which the object was created. Measured in seconds since the Unix epoch.
       */
      created: number;

      /**
       * Result from a document check
       */
      document?: VerificationReport.Document;

      /**
       * Result from an id_number check
       */
      id_number?: VerificationReport.IdNumber;

      /**
       * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
       */
      livemode: boolean;

      options: VerificationReport.Options;

      /**
       * Result from a selfie check
       */
      selfie?: VerificationReport.Selfie;

      /**
       * Type of report.
       */
      type: VerificationReport.Type;

      /**
       * ID of the VerificationSession that created this report.
       */
      verification_session: string | null;
    }

    namespace VerificationReport {
      export interface Document {
        /**
         * Address as it appears in the document.
         */
        address: Stripe.Address | null;

        /**
         * Date of birth as it appears in the document.
         */
        dob: Document.Dob | null;

        /**
         * Details on the verification error. Present when status is `unverified`.
         */
        error: Document.Error | null;

        /**
         * Expiration date of the document.
         */
        expiration_date: Document.ExpirationDate | null;

        /**
         * Array of [File](https://stripe.com/docs/api/files) ids containing images for this document.
         */
        files: Array<string> | null;

        /**
         * First name as it appears in the document.
         */
        first_name: string | null;

        /**
         * Issued date of the document.
         */
        issued_date: Document.IssuedDate | null;

        /**
         * Issuing country of the document.
         */
        issuing_country: string | null;

        /**
         * Last name as it appears in the document.
         */
        last_name: string | null;

        /**
         * Document ID number.
         */
        number: string | null;

        /**
         * Status of this `document` check.
         */
        status: Document.Status;

        /**
         * Type of the document.
         */
        type: Document.Type | null;
      }

      export interface IdNumber {
        /**
         * Date of birth.
         */
        dob: IdNumber.Dob | null;

        /**
         * Details on the verification error. Present when status is `unverified`.
         */
        error: IdNumber.Error | null;

        /**
         * First name.
         */
        first_name: string | null;

        /**
         * ID number.
         */
        id_number: string | null;

        /**
         * Type of ID number.
         */
        id_number_type: IdNumber.IdNumberType | null;

        /**
         * Last name.
         */
        last_name: string | null;

        /**
         * Status of this `id_number` check.
         */
        status: IdNumber.Status;
      }

      export interface Options {
        document?: Options.Document;

        id_number?: Options.IdNumber;
      }

      export interface Selfie {
        /**
         * ID of the [File](https://stripe.com/docs/api/files) holding the image of the identity document used in this check.
         */
        document: string | null;

        /**
         * Details on the verification error. Present when status is `unverified`.
         */
        error: Selfie.Error | null;

        /**
         * ID of the [File](https://stripe.com/docs/api/files) holding the image of the selfie used in this check.
         */
        selfie: string | null;

        /**
         * Status of this `selfie` check.
         */
        status: Selfie.Status;
      }

      export type Type = 'document' | 'id_number';

      namespace Document {
        export interface Dob {
          /**
           * Numerical day between 1 and 31.
           */
          day: number | null;

          /**
           * Numerical month between 1 and 12.
           */
          month: number | null;

          /**
           * The four-digit year.
           */
          year: number | null;
        }

        export interface Error {
          /**
           * A short machine-readable string giving the reason for the verification failure.
           */
          code: Error.Code | null;

          /**
           * A human-readable message giving the reason for the failure. These messages can be shown to your users.
           */
          reason: string | null;
        }

        export interface ExpirationDate {
          /**
           * Numerical day between 1 and 31.
           */
          day: number | null;

          /**
           * Numerical month between 1 and 12.
           */
          month: number | null;

          /**
           * The four-digit year.
           */
          year: number | null;
        }

        export interface IssuedDate {
          /**
           * Numerical day between 1 and 31.
           */
          day: number | null;

          /**
           * Numerical month between 1 and 12.
           */
          month: number | null;

          /**
           * The four-digit year.
           */
          year: number | null;
        }

        export type Status = 'unverified' | 'verified';

        export type Type = 'driving_license' | 'id_card' | 'passport';

        namespace Error {
          export type Code =
            | 'document_expired'
            | 'document_type_not_supported'
            | 'document_unverified_other';
        }
      }

      namespace IdNumber {
        export interface Dob {
          /**
           * Numerical day between 1 and 31.
           */
          day: number | null;

          /**
           * Numerical month between 1 and 12.
           */
          month: number | null;

          /**
           * The four-digit year.
           */
          year: number | null;
        }

        export interface Error {
          /**
           * A short machine-readable string giving the reason for the verification failure.
           */
          code: Error.Code | null;

          /**
           * A human-readable message giving the reason for the failure. These messages can be shown to your users.
           */
          reason: string | null;
        }

        export type IdNumberType = 'br_cpf' | 'sg_nric' | 'us_ssn';

        export type Status = 'unverified' | 'verified';

        namespace Error {
          export type Code =
            | 'id_number_insufficient_document_data'
            | 'id_number_mismatch'
            | 'id_number_unverified_other';
        }
      }

      namespace Options {
        export interface Document {
          /**
           * Array of strings of allowed identity document types. If the provided identity document isn't one of the allowed types, the verification check will fail with a document_type_not_allowed error code.
           */
          allowed_types?: Array<Document.AllowedType>;

          /**
           * Collect an ID number and perform an [ID number check](https://stripe.com/docs/identity/verification-checks?type=id-number) with the document's extracted name and date of birth.
           */
          require_id_number?: boolean;

          /**
           * Disable image uploads, identity document images have to be captured using the device's camera.
           */
          require_live_capture?: boolean;

          /**
           * Capture a face image and perform a [selfie check](https://stripe.com/docs/identity/verification-checks?type=selfie) comparing a photo ID and a picture of your user's face. [Learn more](https://stripe.com/docs/identity/selfie).
           */
          require_matching_selfie?: boolean;
        }

        export interface IdNumber {}

        namespace Document {
          export type AllowedType = 'driving_license' | 'id_card' | 'passport';
        }
      }

      namespace Selfie {
        export interface Error {
          /**
           * A short machine-readable string giving the reason for the verification failure.
           */
          code: Error.Code | null;

          /**
           * A human-readable message giving the reason for the failure. These messages can be shown to your users.
           */
          reason: string | null;
        }

        export type Status = 'unverified' | 'verified';

        namespace Error {
          export type Code =
            | 'selfie_document_missing_photo'
            | 'selfie_face_mismatch'
            | 'selfie_manipulated'
            | 'selfie_unverified_other';
        }
      }
    }

    export interface VerificationReportRetrieveParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    export interface VerificationReportListParams extends PaginationParams {
      created?: Stripe.RangeQueryParam | number;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * Only return VerificationReports of this type
       */
      type?: VerificationReportListParams.Type;

      /**
       * Only return VerificationReports created by this VerificationSession ID. It is allowed to provide a VerificationIntent ID.
       */
      verification_session?: string;
    }

    namespace VerificationReportListParams {
      export type Type = 'document' | 'id_number';
    }

    export interface VerificationReportsResource {
      retrieve:
        | ((
            id: string,
            params?: VerificationReportRetrieveParams,
            options?: RequestOptions
          ) => Promise<Stripe.Response<Stripe.Identity.VerificationReport>>)
        | ((
            id: string,
            options?: RequestOptions
          ) => Promise<Stripe.Response<Stripe.Identity.VerificationReport>>);

      list:
        | ((
            params?: VerificationReportListParams,
            options?: RequestOptions
          ) => ApiListPromise<Stripe.Identity.VerificationReport>)
        | ((
            options?: RequestOptions
          ) => ApiListPromise<Stripe.Identity.VerificationReport>);
    }
  }
}

const resource: VerificationReportsResource = StripeResource.extend({
  path: 'identity/verification_reports',

  retrieve: stripeMethod({
    method: 'GET',
    path: '/{report}',
  }),

  list: stripeMethod({
    method: 'GET',
    path: '',
    methodType: 'list',
  }),
});

export = resource;
