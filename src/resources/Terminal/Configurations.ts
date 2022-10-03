// File generated from our OpenAPI spec

'use strict';

import StripeResource = require('../../StripeResource');
const stripeMethod = StripeResource.method;

namespace Stripe {
  namespace Terminal {
    export /**
     * A Configurations object represents how features should be configured for terminal readers.
     */
    interface Configuration {
      /**
       * Unique identifier for the object.
       */
      id: string;

      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object: 'terminal.configuration';

      bbpos_wisepos_e?: Configuration.BbposWiseposE;

      deleted?: void;

      /**
       * Whether this Configuration is the default for your account
       */
      is_account_default: boolean | null;

      /**
       * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
       */
      livemode: boolean;

      tipping?: Configuration.Tipping;

      verifone_p400?: Configuration.VerifoneP400;
    }

    namespace Configuration {
      export interface BbposWiseposE {
        /**
         * A File ID representing an image you would like displayed on the reader.
         */
        splashscreen?: string | Stripe.File;
      }

      export interface Tipping {
        aud?: Tipping.Aud;

        cad?: Tipping.Cad;

        chf?: Tipping.Chf;

        czk?: Tipping.Czk;

        dkk?: Tipping.Dkk;

        eur?: Tipping.Eur;

        gbp?: Tipping.Gbp;

        hkd?: Tipping.Hkd;

        myr?: Tipping.Myr;

        nok?: Tipping.Nok;

        nzd?: Tipping.Nzd;

        sek?: Tipping.Sek;

        sgd?: Tipping.Sgd;

        usd?: Tipping.Usd;
      }

      export interface VerifoneP400 {
        /**
         * A File ID representing an image you would like displayed on the reader.
         */
        splashscreen?: string | Stripe.File;
      }

      namespace Tipping {
        export interface Aud {
          /**
           * Fixed amounts displayed when collecting a tip
           */
          fixed_amounts?: Array<number> | null;

          /**
           * Percentages displayed when collecting a tip
           */
          percentages?: Array<number> | null;

          /**
           * Below this amount, fixed amounts will be displayed; above it, percentages will be displayed
           */
          smart_tip_threshold?: number;
        }

        export interface Cad {
          /**
           * Fixed amounts displayed when collecting a tip
           */
          fixed_amounts?: Array<number> | null;

          /**
           * Percentages displayed when collecting a tip
           */
          percentages?: Array<number> | null;

          /**
           * Below this amount, fixed amounts will be displayed; above it, percentages will be displayed
           */
          smart_tip_threshold?: number;
        }

        export interface Chf {
          /**
           * Fixed amounts displayed when collecting a tip
           */
          fixed_amounts?: Array<number> | null;

          /**
           * Percentages displayed when collecting a tip
           */
          percentages?: Array<number> | null;

          /**
           * Below this amount, fixed amounts will be displayed; above it, percentages will be displayed
           */
          smart_tip_threshold?: number;
        }

        export interface Czk {
          /**
           * Fixed amounts displayed when collecting a tip
           */
          fixed_amounts?: Array<number> | null;

          /**
           * Percentages displayed when collecting a tip
           */
          percentages?: Array<number> | null;

          /**
           * Below this amount, fixed amounts will be displayed; above it, percentages will be displayed
           */
          smart_tip_threshold?: number;
        }

        export interface Dkk {
          /**
           * Fixed amounts displayed when collecting a tip
           */
          fixed_amounts?: Array<number> | null;

          /**
           * Percentages displayed when collecting a tip
           */
          percentages?: Array<number> | null;

          /**
           * Below this amount, fixed amounts will be displayed; above it, percentages will be displayed
           */
          smart_tip_threshold?: number;
        }

        export interface Eur {
          /**
           * Fixed amounts displayed when collecting a tip
           */
          fixed_amounts?: Array<number> | null;

          /**
           * Percentages displayed when collecting a tip
           */
          percentages?: Array<number> | null;

          /**
           * Below this amount, fixed amounts will be displayed; above it, percentages will be displayed
           */
          smart_tip_threshold?: number;
        }

        export interface Gbp {
          /**
           * Fixed amounts displayed when collecting a tip
           */
          fixed_amounts?: Array<number> | null;

          /**
           * Percentages displayed when collecting a tip
           */
          percentages?: Array<number> | null;

          /**
           * Below this amount, fixed amounts will be displayed; above it, percentages will be displayed
           */
          smart_tip_threshold?: number;
        }

        export interface Hkd {
          /**
           * Fixed amounts displayed when collecting a tip
           */
          fixed_amounts?: Array<number> | null;

          /**
           * Percentages displayed when collecting a tip
           */
          percentages?: Array<number> | null;

          /**
           * Below this amount, fixed amounts will be displayed; above it, percentages will be displayed
           */
          smart_tip_threshold?: number;
        }

        export interface Myr {
          /**
           * Fixed amounts displayed when collecting a tip
           */
          fixed_amounts?: Array<number> | null;

          /**
           * Percentages displayed when collecting a tip
           */
          percentages?: Array<number> | null;

          /**
           * Below this amount, fixed amounts will be displayed; above it, percentages will be displayed
           */
          smart_tip_threshold?: number;
        }

        export interface Nok {
          /**
           * Fixed amounts displayed when collecting a tip
           */
          fixed_amounts?: Array<number> | null;

          /**
           * Percentages displayed when collecting a tip
           */
          percentages?: Array<number> | null;

          /**
           * Below this amount, fixed amounts will be displayed; above it, percentages will be displayed
           */
          smart_tip_threshold?: number;
        }

        export interface Nzd {
          /**
           * Fixed amounts displayed when collecting a tip
           */
          fixed_amounts?: Array<number> | null;

          /**
           * Percentages displayed when collecting a tip
           */
          percentages?: Array<number> | null;

          /**
           * Below this amount, fixed amounts will be displayed; above it, percentages will be displayed
           */
          smart_tip_threshold?: number;
        }

        export interface Sek {
          /**
           * Fixed amounts displayed when collecting a tip
           */
          fixed_amounts?: Array<number> | null;

          /**
           * Percentages displayed when collecting a tip
           */
          percentages?: Array<number> | null;

          /**
           * Below this amount, fixed amounts will be displayed; above it, percentages will be displayed
           */
          smart_tip_threshold?: number;
        }

        export interface Sgd {
          /**
           * Fixed amounts displayed when collecting a tip
           */
          fixed_amounts?: Array<number> | null;

          /**
           * Percentages displayed when collecting a tip
           */
          percentages?: Array<number> | null;

          /**
           * Below this amount, fixed amounts will be displayed; above it, percentages will be displayed
           */
          smart_tip_threshold?: number;
        }

        export interface Usd {
          /**
           * Fixed amounts displayed when collecting a tip
           */
          fixed_amounts?: Array<number> | null;

          /**
           * Percentages displayed when collecting a tip
           */
          percentages?: Array<number> | null;

          /**
           * Below this amount, fixed amounts will be displayed; above it, percentages will be displayed
           */
          smart_tip_threshold?: number;
        }
      }
    }

    export /**
     * The DeletedConfiguration object.
     */
    interface DeletedConfiguration {
      /**
       * Unique identifier for the object.
       */
      id: string;

      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object: 'terminal.configuration';

      /**
       * Always true for a deleted object
       */
      deleted: true;
    }

    export interface ConfigurationCreateParams {
      /**
       * An object containing device type specific settings for BBPOS WisePOS E readers
       */
      bbpos_wisepos_e?: ConfigurationCreateParams.BbposWiseposE;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * Tipping configurations for readers supporting on-reader tips
       */
      tipping?: Stripe.Emptyable<ConfigurationCreateParams.Tipping>;

      /**
       * An object containing device type specific settings for Verifone P400 readers
       */
      verifone_p400?: ConfigurationCreateParams.VerifoneP400;
    }

    namespace ConfigurationCreateParams {
      export interface BbposWiseposE {
        /**
         * A File ID representing an image you would like displayed on the reader.
         */
        splashscreen?: Stripe.Emptyable<string>;
      }

      export interface Tipping {
        /**
         * Tipping configuration for AUD
         */
        aud?: Tipping.Aud;

        /**
         * Tipping configuration for CAD
         */
        cad?: Tipping.Cad;

        /**
         * Tipping configuration for CHF
         */
        chf?: Tipping.Chf;

        /**
         * Tipping configuration for CZK
         */
        czk?: Tipping.Czk;

        /**
         * Tipping configuration for DKK
         */
        dkk?: Tipping.Dkk;

        /**
         * Tipping configuration for EUR
         */
        eur?: Tipping.Eur;

        /**
         * Tipping configuration for GBP
         */
        gbp?: Tipping.Gbp;

        /**
         * Tipping configuration for HKD
         */
        hkd?: Tipping.Hkd;

        /**
         * Tipping configuration for MYR
         */
        myr?: Tipping.Myr;

        /**
         * Tipping configuration for NOK
         */
        nok?: Tipping.Nok;

        /**
         * Tipping configuration for NZD
         */
        nzd?: Tipping.Nzd;

        /**
         * Tipping configuration for SEK
         */
        sek?: Tipping.Sek;

        /**
         * Tipping configuration for SGD
         */
        sgd?: Tipping.Sgd;

        /**
         * Tipping configuration for USD
         */
        usd?: Tipping.Usd;
      }

      export interface VerifoneP400 {
        /**
         * A File ID representing an image you would like displayed on the reader.
         */
        splashscreen?: Stripe.Emptyable<string>;
      }

      namespace Tipping {
        export interface Aud {
          /**
           * Fixed amounts displayed when collecting a tip
           */
          fixed_amounts?: Array<number>;

          /**
           * Percentages displayed when collecting a tip
           */
          percentages?: Array<number>;

          /**
           * Below this amount, fixed amounts will be displayed; above it, percentages will be displayed
           */
          smart_tip_threshold?: number;
        }

        export interface Cad {
          /**
           * Fixed amounts displayed when collecting a tip
           */
          fixed_amounts?: Array<number>;

          /**
           * Percentages displayed when collecting a tip
           */
          percentages?: Array<number>;

          /**
           * Below this amount, fixed amounts will be displayed; above it, percentages will be displayed
           */
          smart_tip_threshold?: number;
        }

        export interface Chf {
          /**
           * Fixed amounts displayed when collecting a tip
           */
          fixed_amounts?: Array<number>;

          /**
           * Percentages displayed when collecting a tip
           */
          percentages?: Array<number>;

          /**
           * Below this amount, fixed amounts will be displayed; above it, percentages will be displayed
           */
          smart_tip_threshold?: number;
        }

        export interface Czk {
          /**
           * Fixed amounts displayed when collecting a tip
           */
          fixed_amounts?: Array<number>;

          /**
           * Percentages displayed when collecting a tip
           */
          percentages?: Array<number>;

          /**
           * Below this amount, fixed amounts will be displayed; above it, percentages will be displayed
           */
          smart_tip_threshold?: number;
        }

        export interface Dkk {
          /**
           * Fixed amounts displayed when collecting a tip
           */
          fixed_amounts?: Array<number>;

          /**
           * Percentages displayed when collecting a tip
           */
          percentages?: Array<number>;

          /**
           * Below this amount, fixed amounts will be displayed; above it, percentages will be displayed
           */
          smart_tip_threshold?: number;
        }

        export interface Eur {
          /**
           * Fixed amounts displayed when collecting a tip
           */
          fixed_amounts?: Array<number>;

          /**
           * Percentages displayed when collecting a tip
           */
          percentages?: Array<number>;

          /**
           * Below this amount, fixed amounts will be displayed; above it, percentages will be displayed
           */
          smart_tip_threshold?: number;
        }

        export interface Gbp {
          /**
           * Fixed amounts displayed when collecting a tip
           */
          fixed_amounts?: Array<number>;

          /**
           * Percentages displayed when collecting a tip
           */
          percentages?: Array<number>;

          /**
           * Below this amount, fixed amounts will be displayed; above it, percentages will be displayed
           */
          smart_tip_threshold?: number;
        }

        export interface Hkd {
          /**
           * Fixed amounts displayed when collecting a tip
           */
          fixed_amounts?: Array<number>;

          /**
           * Percentages displayed when collecting a tip
           */
          percentages?: Array<number>;

          /**
           * Below this amount, fixed amounts will be displayed; above it, percentages will be displayed
           */
          smart_tip_threshold?: number;
        }

        export interface Myr {
          /**
           * Fixed amounts displayed when collecting a tip
           */
          fixed_amounts?: Array<number>;

          /**
           * Percentages displayed when collecting a tip
           */
          percentages?: Array<number>;

          /**
           * Below this amount, fixed amounts will be displayed; above it, percentages will be displayed
           */
          smart_tip_threshold?: number;
        }

        export interface Nok {
          /**
           * Fixed amounts displayed when collecting a tip
           */
          fixed_amounts?: Array<number>;

          /**
           * Percentages displayed when collecting a tip
           */
          percentages?: Array<number>;

          /**
           * Below this amount, fixed amounts will be displayed; above it, percentages will be displayed
           */
          smart_tip_threshold?: number;
        }

        export interface Nzd {
          /**
           * Fixed amounts displayed when collecting a tip
           */
          fixed_amounts?: Array<number>;

          /**
           * Percentages displayed when collecting a tip
           */
          percentages?: Array<number>;

          /**
           * Below this amount, fixed amounts will be displayed; above it, percentages will be displayed
           */
          smart_tip_threshold?: number;
        }

        export interface Sek {
          /**
           * Fixed amounts displayed when collecting a tip
           */
          fixed_amounts?: Array<number>;

          /**
           * Percentages displayed when collecting a tip
           */
          percentages?: Array<number>;

          /**
           * Below this amount, fixed amounts will be displayed; above it, percentages will be displayed
           */
          smart_tip_threshold?: number;
        }

        export interface Sgd {
          /**
           * Fixed amounts displayed when collecting a tip
           */
          fixed_amounts?: Array<number>;

          /**
           * Percentages displayed when collecting a tip
           */
          percentages?: Array<number>;

          /**
           * Below this amount, fixed amounts will be displayed; above it, percentages will be displayed
           */
          smart_tip_threshold?: number;
        }

        export interface Usd {
          /**
           * Fixed amounts displayed when collecting a tip
           */
          fixed_amounts?: Array<number>;

          /**
           * Percentages displayed when collecting a tip
           */
          percentages?: Array<number>;

          /**
           * Below this amount, fixed amounts will be displayed; above it, percentages will be displayed
           */
          smart_tip_threshold?: number;
        }
      }
    }

    export interface ConfigurationRetrieveParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    export interface ConfigurationUpdateParams {
      /**
       * An object containing device type specific settings for BBPOS WisePOS E readers
       */
      bbpos_wisepos_e?: Stripe.Emptyable<
        ConfigurationUpdateParams.BbposWiseposE
      >;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * Tipping configurations for readers supporting on-reader tips
       */
      tipping?: Stripe.Emptyable<ConfigurationUpdateParams.Tipping>;

      /**
       * An object containing device type specific settings for Verifone P400 readers
       */
      verifone_p400?: Stripe.Emptyable<ConfigurationUpdateParams.VerifoneP400>;
    }

    namespace ConfigurationUpdateParams {
      export interface BbposWiseposE {
        /**
         * A File ID representing an image you would like displayed on the reader.
         */
        splashscreen?: Stripe.Emptyable<string>;
      }

      export interface Tipping {
        /**
         * Tipping configuration for AUD
         */
        aud?: Tipping.Aud;

        /**
         * Tipping configuration for CAD
         */
        cad?: Tipping.Cad;

        /**
         * Tipping configuration for CHF
         */
        chf?: Tipping.Chf;

        /**
         * Tipping configuration for CZK
         */
        czk?: Tipping.Czk;

        /**
         * Tipping configuration for DKK
         */
        dkk?: Tipping.Dkk;

        /**
         * Tipping configuration for EUR
         */
        eur?: Tipping.Eur;

        /**
         * Tipping configuration for GBP
         */
        gbp?: Tipping.Gbp;

        /**
         * Tipping configuration for HKD
         */
        hkd?: Tipping.Hkd;

        /**
         * Tipping configuration for MYR
         */
        myr?: Tipping.Myr;

        /**
         * Tipping configuration for NOK
         */
        nok?: Tipping.Nok;

        /**
         * Tipping configuration for NZD
         */
        nzd?: Tipping.Nzd;

        /**
         * Tipping configuration for SEK
         */
        sek?: Tipping.Sek;

        /**
         * Tipping configuration for SGD
         */
        sgd?: Tipping.Sgd;

        /**
         * Tipping configuration for USD
         */
        usd?: Tipping.Usd;
      }

      export interface VerifoneP400 {
        /**
         * A File ID representing an image you would like displayed on the reader.
         */
        splashscreen?: Stripe.Emptyable<string>;
      }

      namespace Tipping {
        export interface Aud {
          /**
           * Fixed amounts displayed when collecting a tip
           */
          fixed_amounts?: Array<number>;

          /**
           * Percentages displayed when collecting a tip
           */
          percentages?: Array<number>;

          /**
           * Below this amount, fixed amounts will be displayed; above it, percentages will be displayed
           */
          smart_tip_threshold?: number;
        }

        export interface Cad {
          /**
           * Fixed amounts displayed when collecting a tip
           */
          fixed_amounts?: Array<number>;

          /**
           * Percentages displayed when collecting a tip
           */
          percentages?: Array<number>;

          /**
           * Below this amount, fixed amounts will be displayed; above it, percentages will be displayed
           */
          smart_tip_threshold?: number;
        }

        export interface Chf {
          /**
           * Fixed amounts displayed when collecting a tip
           */
          fixed_amounts?: Array<number>;

          /**
           * Percentages displayed when collecting a tip
           */
          percentages?: Array<number>;

          /**
           * Below this amount, fixed amounts will be displayed; above it, percentages will be displayed
           */
          smart_tip_threshold?: number;
        }

        export interface Czk {
          /**
           * Fixed amounts displayed when collecting a tip
           */
          fixed_amounts?: Array<number>;

          /**
           * Percentages displayed when collecting a tip
           */
          percentages?: Array<number>;

          /**
           * Below this amount, fixed amounts will be displayed; above it, percentages will be displayed
           */
          smart_tip_threshold?: number;
        }

        export interface Dkk {
          /**
           * Fixed amounts displayed when collecting a tip
           */
          fixed_amounts?: Array<number>;

          /**
           * Percentages displayed when collecting a tip
           */
          percentages?: Array<number>;

          /**
           * Below this amount, fixed amounts will be displayed; above it, percentages will be displayed
           */
          smart_tip_threshold?: number;
        }

        export interface Eur {
          /**
           * Fixed amounts displayed when collecting a tip
           */
          fixed_amounts?: Array<number>;

          /**
           * Percentages displayed when collecting a tip
           */
          percentages?: Array<number>;

          /**
           * Below this amount, fixed amounts will be displayed; above it, percentages will be displayed
           */
          smart_tip_threshold?: number;
        }

        export interface Gbp {
          /**
           * Fixed amounts displayed when collecting a tip
           */
          fixed_amounts?: Array<number>;

          /**
           * Percentages displayed when collecting a tip
           */
          percentages?: Array<number>;

          /**
           * Below this amount, fixed amounts will be displayed; above it, percentages will be displayed
           */
          smart_tip_threshold?: number;
        }

        export interface Hkd {
          /**
           * Fixed amounts displayed when collecting a tip
           */
          fixed_amounts?: Array<number>;

          /**
           * Percentages displayed when collecting a tip
           */
          percentages?: Array<number>;

          /**
           * Below this amount, fixed amounts will be displayed; above it, percentages will be displayed
           */
          smart_tip_threshold?: number;
        }

        export interface Myr {
          /**
           * Fixed amounts displayed when collecting a tip
           */
          fixed_amounts?: Array<number>;

          /**
           * Percentages displayed when collecting a tip
           */
          percentages?: Array<number>;

          /**
           * Below this amount, fixed amounts will be displayed; above it, percentages will be displayed
           */
          smart_tip_threshold?: number;
        }

        export interface Nok {
          /**
           * Fixed amounts displayed when collecting a tip
           */
          fixed_amounts?: Array<number>;

          /**
           * Percentages displayed when collecting a tip
           */
          percentages?: Array<number>;

          /**
           * Below this amount, fixed amounts will be displayed; above it, percentages will be displayed
           */
          smart_tip_threshold?: number;
        }

        export interface Nzd {
          /**
           * Fixed amounts displayed when collecting a tip
           */
          fixed_amounts?: Array<number>;

          /**
           * Percentages displayed when collecting a tip
           */
          percentages?: Array<number>;

          /**
           * Below this amount, fixed amounts will be displayed; above it, percentages will be displayed
           */
          smart_tip_threshold?: number;
        }

        export interface Sek {
          /**
           * Fixed amounts displayed when collecting a tip
           */
          fixed_amounts?: Array<number>;

          /**
           * Percentages displayed when collecting a tip
           */
          percentages?: Array<number>;

          /**
           * Below this amount, fixed amounts will be displayed; above it, percentages will be displayed
           */
          smart_tip_threshold?: number;
        }

        export interface Sgd {
          /**
           * Fixed amounts displayed when collecting a tip
           */
          fixed_amounts?: Array<number>;

          /**
           * Percentages displayed when collecting a tip
           */
          percentages?: Array<number>;

          /**
           * Below this amount, fixed amounts will be displayed; above it, percentages will be displayed
           */
          smart_tip_threshold?: number;
        }

        export interface Usd {
          /**
           * Fixed amounts displayed when collecting a tip
           */
          fixed_amounts?: Array<number>;

          /**
           * Percentages displayed when collecting a tip
           */
          percentages?: Array<number>;

          /**
           * Below this amount, fixed amounts will be displayed; above it, percentages will be displayed
           */
          smart_tip_threshold?: number;
        }
      }
    }

    export interface ConfigurationListParams extends PaginationParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * if present, only return the account default or non-default configurations.
       */
      is_account_default?: boolean;
    }

    export interface ConfigurationDeleteParams {}

    export interface ConfigurationsResource {
      create:
        | ((
            params?: ConfigurationCreateParams,
            options?: RequestOptions
          ) => Promise<Stripe.Response<Stripe.Terminal.Configuration>>)
        | ((
            options?: RequestOptions
          ) => Promise<Stripe.Response<Stripe.Terminal.Configuration>>);

      retrieve:
        | ((
            id: string,
            params?: ConfigurationRetrieveParams,
            options?: RequestOptions
          ) => Promise<
            Stripe.Response<
              | Stripe.Terminal.Configuration
              | Stripe.Terminal.DeletedConfiguration
            >
          >)
        | ((
            id: string,
            options?: RequestOptions
          ) => Promise<
            Stripe.Response<
              | Stripe.Terminal.Configuration
              | Stripe.Terminal.DeletedConfiguration
            >
          >);

      update: (
        id: string,
        params?: ConfigurationUpdateParams,
        options?: RequestOptions
      ) => Promise<
        Stripe.Response<
          Stripe.Terminal.Configuration | Stripe.Terminal.DeletedConfiguration
        >
      >;

      list:
        | ((
            params?: ConfigurationListParams,
            options?: RequestOptions
          ) => ApiListPromise<Stripe.Terminal.Configuration>)
        | ((
            options?: RequestOptions
          ) => ApiListPromise<Stripe.Terminal.Configuration>);

      del:
        | ((
            id: string,
            params?: ConfigurationDeleteParams,
            options?: RequestOptions
          ) => Promise<Stripe.Response<Stripe.Terminal.DeletedConfiguration>>)
        | ((
            id: string,
            options?: RequestOptions
          ) => Promise<Stripe.Response<Stripe.Terminal.DeletedConfiguration>>);
    }
  }
}

const resource: ConfigurationsResource = StripeResource.extend({
  path: 'terminal/configurations',

  create: stripeMethod({
    method: 'POST',
    path: '',
  }),

  retrieve: stripeMethod({
    method: 'GET',
    path: '/{configuration}',
  }),

  update: stripeMethod({
    method: 'POST',
    path: '/{configuration}',
  }),

  list: stripeMethod({
    method: 'GET',
    path: '',
    methodType: 'list',
  }),

  del: stripeMethod({
    method: 'DELETE',
    path: '/{configuration}',
  }),
});

export = resource;
