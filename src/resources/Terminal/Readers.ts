// File generated from our OpenAPI spec

'use strict';

import StripeResource = require('../../StripeResource');
const stripeMethod = StripeResource.method;

namespace Stripe {
  namespace Terminal {
    export /**
     * A Reader represents a physical device for accepting payment details.
     *
     * Related guide: [Connecting to a Reader](https://stripe.com/docs/terminal/payments/connect-reader).
     */
    interface Reader {
      /**
       * Unique identifier for the object.
       */
      id: string;

      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object: 'terminal.reader';

      /**
       * The most recent action performed by the reader.
       */
      action: Reader.Action | null;

      deleted?: void;

      /**
       * The current software version of the reader.
       */
      device_sw_version: string | null;

      /**
       * Type of reader, one of `bbpos_wisepad3`, `stripe_m2`, `bbpos_chipper2x`, `bbpos_wisepos_e`, `verifone_P400`, or `simulated_wisepos_e`.
       */
      device_type: Reader.DeviceType;

      /**
       * The local IP address of the reader.
       */
      ip_address: string | null;

      /**
       * Custom label given to the reader for easier identification.
       */
      label: string;

      /**
       * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
       */
      livemode: boolean;

      /**
       * The location identifier of the reader.
       */
      location: string | Stripe.Terminal.Location | null;

      /**
       * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
       */
      metadata: Stripe.Metadata;

      /**
       * Serial number of the reader.
       */
      serial_number: string;

      /**
       * The networking status of the reader.
       */
      status: string | null;
    }

    namespace Reader {
      export interface Action {
        /**
         * Failure code, only set if status is `failed`.
         */
        failure_code: string | null;

        /**
         * Detailed failure message, only set if status is `failed`.
         */
        failure_message: string | null;

        /**
         * Represents a reader action to process a payment intent
         */
        process_payment_intent?: Action.ProcessPaymentIntent;

        /**
         * Represents a reader action to process a setup intent
         */
        process_setup_intent?: Action.ProcessSetupIntent;

        /**
         * Represents a reader action to set the reader display
         */
        set_reader_display?: Action.SetReaderDisplay;

        /**
         * Status of the action performed by the reader.
         */
        status: Action.Status;

        /**
         * Type of action performed by the reader.
         */
        type: Action.Type;
      }

      export type DeviceType =
        | 'bbpos_chipper2x'
        | 'bbpos_wisepad3'
        | 'bbpos_wisepos_e'
        | 'simulated_wisepos_e'
        | 'stripe_m2'
        | 'verifone_P400';

      namespace Action {
        export interface ProcessPaymentIntent {
          /**
           * Most recent PaymentIntent processed by the reader.
           */
          payment_intent: string | Stripe.PaymentIntent;

          /**
           * Represents a per-transaction override of a reader configuration
           */
          process_config?: ProcessPaymentIntent.ProcessConfig;
        }

        export interface ProcessSetupIntent {
          /**
           * ID of a card PaymentMethod generated from the card_present PaymentMethod that may be attached to a Customer for future transactions. Only present if it was possible to generate a card PaymentMethod.
           */
          generated_card?: string;

          /**
           * Most recent SetupIntent processed by the reader.
           */
          setup_intent: string | Stripe.SetupIntent;
        }

        export interface SetReaderDisplay {
          /**
           * Cart object to be displayed by the reader.
           */
          cart: SetReaderDisplay.Cart | null;

          /**
           * Type of information to be displayed by the reader.
           */
          type: 'cart';
        }

        export type Status = 'failed' | 'in_progress' | 'succeeded';

        export type Type =
          | 'process_payment_intent'
          | 'process_setup_intent'
          | 'set_reader_display';

        namespace ProcessPaymentIntent {
          export interface ProcessConfig {
            /**
             * Override showing a tipping selection screen on this transaction.
             */
            skip_tipping?: boolean;
          }
        }

        namespace SetReaderDisplay {
          export interface Cart {
            /**
             * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
             */
            currency: string;

            /**
             * List of line items in the cart.
             */
            line_items: Array<Cart.LineItem>;

            /**
             * Tax amount for the entire cart. A positive integer in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal).
             */
            tax: number | null;

            /**
             * Total amount for the entire cart, including tax. A positive integer in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal).
             */
            total: number;
          }

          namespace Cart {
            export interface LineItem {
              /**
               * The amount of the line item. A positive integer in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal).
               */
              amount: number;

              /**
               * Description of the line item.
               */
              description: string;

              /**
               * The quantity of the line item.
               */
              quantity: number;
            }
          }
        }
      }
    }

    export /**
     * The DeletedReader object.
     */
    interface DeletedReader {
      /**
       * Unique identifier for the object.
       */
      id: string;

      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object: 'terminal.reader';

      /**
       * Always true for a deleted object
       */
      deleted: true;
    }

    export interface ReaderCreateParams {
      /**
       * A code generated by the reader used for registering to an account.
       */
      registration_code: string;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * Custom label given to the reader for easier identification. If no label is specified, the registration code will be used.
       */
      label?: string;

      /**
       * The location to assign the reader to.
       */
      location?: string;

      /**
       * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
       */
      metadata?: Stripe.Emptyable<Stripe.MetadataParam>;
    }

    export interface ReaderRetrieveParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    export interface ReaderUpdateParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * The new label of the reader.
       */
      label?: string;

      /**
       * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
       */
      metadata?: Stripe.Emptyable<Stripe.MetadataParam>;
    }

    export interface ReaderListParams extends PaginationParams {
      /**
       * Filters readers by device type
       */
      device_type?: ReaderListParams.DeviceType;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * A location ID to filter the response list to only readers at the specific location
       */
      location?: string;

      /**
       * A status filter to filter readers to only offline or online readers
       */
      status?: ReaderListParams.Status;
    }

    namespace ReaderListParams {
      export type DeviceType =
        | 'bbpos_chipper2x'
        | 'bbpos_wisepad3'
        | 'bbpos_wisepos_e'
        | 'simulated_wisepos_e'
        | 'stripe_m2'
        | 'verifone_P400';

      export type Status = 'offline' | 'online';
    }

    export interface ReaderDeleteParams {}

    export interface ReaderCancelActionParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    export interface ReaderProcessPaymentIntentParams {
      /**
       * PaymentIntent ID
       */
      payment_intent: string;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * Configuration overrides
       */
      process_config?: ReaderProcessPaymentIntentParams.ProcessConfig;
    }

    namespace ReaderProcessPaymentIntentParams {
      export interface ProcessConfig {
        /**
         * Override showing a tipping selection screen on this transaction.
         */
        skip_tipping?: boolean;
      }
    }

    export interface ReaderProcessSetupIntentParams {
      /**
       * Customer Consent Collected
       */
      customer_consent_collected: boolean;

      /**
       * SetupIntent ID
       */
      setup_intent: string;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    export interface ReaderSetReaderDisplayParams {
      /**
       * Type
       */
      type: 'cart';

      /**
       * Cart
       */
      cart?: ReaderSetReaderDisplayParams.Cart;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    namespace ReaderSetReaderDisplayParams {
      export interface Cart {
        /**
         * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
         */
        currency: string;

        /**
         * Array of line items that were purchased.
         */
        line_items: Array<Cart.LineItem>;

        /**
         * The amount of tax in cents.
         */
        tax?: number;

        /**
         * Total balance of cart due in cents.
         */
        total: number;
      }

      namespace Cart {
        export interface LineItem {
          /**
           * The price of the item in cents.
           */
          amount: number;

          /**
           * The description or name of the item.
           */
          description: string;

          /**
           * The quantity of the line item being purchased.
           */
          quantity: number;
        }
      }
    }

    export interface ReadersResource {
      create: (
        params: ReaderCreateParams,
        options?: RequestOptions
      ) => Promise<Stripe.Response<Stripe.Terminal.Reader>>;

      retrieve:
        | ((
            id: string,
            params?: ReaderRetrieveParams,
            options?: RequestOptions
          ) => Promise<
            Stripe.Response<
              Stripe.Terminal.Reader | Stripe.Terminal.DeletedReader
            >
          >)
        | ((
            id: string,
            options?: RequestOptions
          ) => Promise<
            Stripe.Response<
              Stripe.Terminal.Reader | Stripe.Terminal.DeletedReader
            >
          >);

      update: (
        id: string,
        params?: ReaderUpdateParams,
        options?: RequestOptions
      ) => Promise<
        Stripe.Response<Stripe.Terminal.Reader | Stripe.Terminal.DeletedReader>
      >;

      list:
        | ((
            params?: ReaderListParams,
            options?: RequestOptions
          ) => ApiListPromise<Stripe.Terminal.Reader>)
        | ((
            options?: RequestOptions
          ) => ApiListPromise<Stripe.Terminal.Reader>);

      del:
        | ((
            id: string,
            params?: ReaderDeleteParams,
            options?: RequestOptions
          ) => Promise<Stripe.Response<Stripe.Terminal.DeletedReader>>)
        | ((
            id: string,
            options?: RequestOptions
          ) => Promise<Stripe.Response<Stripe.Terminal.DeletedReader>>);

      cancelAction:
        | ((
            id: string,
            params?: ReaderCancelActionParams,
            options?: RequestOptions
          ) => Promise<Stripe.Response<Stripe.Terminal.Reader>>)
        | ((
            id: string,
            options?: RequestOptions
          ) => Promise<Stripe.Response<Stripe.Terminal.Reader>>);

      processPaymentIntent: (
        id: string,
        params: ReaderProcessPaymentIntentParams,
        options?: RequestOptions
      ) => Promise<Stripe.Response<Stripe.Terminal.Reader>>;

      processSetupIntent: (
        id: string,
        params: ReaderProcessSetupIntentParams,
        options?: RequestOptions
      ) => Promise<Stripe.Response<Stripe.Terminal.Reader>>;

      setReaderDisplay: (
        id: string,
        params: ReaderSetReaderDisplayParams,
        options?: RequestOptions
      ) => Promise<Stripe.Response<Stripe.Terminal.Reader>>;
    }
  }
}

const resource: ReadersResource = StripeResource.extend({
  path: 'terminal/readers',

  create: stripeMethod({
    method: 'POST',
    path: '',
  }),

  retrieve: stripeMethod({
    method: 'GET',
    path: '/{reader}',
  }),

  update: stripeMethod({
    method: 'POST',
    path: '/{reader}',
  }),

  list: stripeMethod({
    method: 'GET',
    path: '',
    methodType: 'list',
  }),

  del: stripeMethod({
    method: 'DELETE',
    path: '/{reader}',
  }),

  cancelAction: stripeMethod({
    method: 'POST',
    path: '/{reader}/cancel_action',
  }),

  processPaymentIntent: stripeMethod({
    method: 'POST',
    path: '/{reader}/process_payment_intent',
  }),

  processSetupIntent: stripeMethod({
    method: 'POST',
    path: '/{reader}/process_setup_intent',
  }),

  setReaderDisplay: stripeMethod({
    method: 'POST',
    path: '/{reader}/set_reader_display',
  }),
});

export = resource;
