// File generated from our OpenAPI spec

'use strict';

import StripeResource = require('../StripeResource');
const stripeMethod = StripeResource.method;

namespace Stripe {
  namespace Customer {
    export interface InvoiceSettings {
      /**
       * Default custom fields to be displayed on invoices for this customer.
       */
      custom_fields: Array<InvoiceSettings.CustomField> | null;

      /**
       * ID of a payment method that's attached to the customer, to be used as the customer's default payment method for subscriptions and invoices.
       */
      default_payment_method: string | Stripe.PaymentMethod | null;

      /**
       * Default footer to be displayed on invoices for this customer.
       */
      footer: string | null;

      /**
       * Default options for invoice PDF rendering for this customer.
       */
      rendering_options: InvoiceSettings.RenderingOptions | null;
    }

    export interface Shipping {
      address?: Stripe.Address;

      /**
       * The delivery service that shipped a physical product, such as Fedex, UPS, USPS, etc.
       */
      carrier?: string | null;

      /**
       * Recipient name.
       */
      name?: string;

      /**
       * Recipient phone (including extension).
       */
      phone?: string | null;

      /**
       * The tracking number for a physical product, obtained from the delivery service. If multiple tracking numbers were generated for this purchase, please separate them with commas.
       */
      tracking_number?: string | null;
    }

    export interface Tax {
      /**
       * Surfaces if automatic tax computation is possible given the current customer location information.
       */
      automatic_tax: Tax.AutomaticTax;

      /**
       * A recent IP address of the customer used for tax reporting and tax location inference.
       */
      ip_address: string | null;

      /**
       * The customer's location as identified by Stripe Tax.
       */
      location: Tax.Location | null;
    }

    export type TaxExempt = 'exempt' | 'none' | 'reverse';

    namespace InvoiceSettings {
      export interface CustomField {
        /**
         * The name of the custom field.
         */
        name: string;

        /**
         * The value of the custom field.
         */
        value: string;
      }

      export interface RenderingOptions {
        /**
         * How line-item prices and amounts will be displayed with respect to tax on invoice PDFs.
         */
        amount_tax_display: string | null;
      }
    }

    namespace Tax {
      export type AutomaticTax =
        | 'failed'
        | 'not_collecting'
        | 'supported'
        | 'unrecognized_location';

      export interface Location {
        /**
         * The customer's country as identified by Stripe Tax.
         */
        country: string;

        /**
         * The data source used to infer the customer's location.
         */
        source: Location.Source;

        /**
         * The customer's state, county, province, or region as identified by Stripe Tax.
         */
        state: string | null;
      }

      namespace Location {
        export type Source =
          | 'billing_address'
          | 'ip_address'
          | 'payment_method'
          | 'shipping_destination';
      }
    }
  }

  export /**
   * This object represents a customer of your business. It lets you create recurring charges and track payments that belong to the same customer.
   *
   * Related guide: [Save a card during payment](https://stripe.com/docs/payments/save-during-payment).
   */
  interface Customer {
    /**
     * Unique identifier for the object.
     */
    id: string;

    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: 'customer';

    /**
     * The customer's address.
     */
    address?: Stripe.Address | null;

    /**
     * Current balance, if any, being stored on the customer. If negative, the customer has credit to apply to their next invoice. If positive, the customer has an amount owed that will be added to their next invoice. The balance does not refer to any unpaid invoices; it solely takes into account amounts that have yet to be successfully applied to any invoice. This balance is only taken into account as invoices are finalized.
     */
    balance: number;

    /**
     * The current funds being held by Stripe on behalf of the customer. These funds can be applied towards payment intents with source "cash_balance".The settings[reconciliation_mode] field describes whether these funds are applied to such payment intents manually or automatically.
     */
    cash_balance?: Stripe.CashBalance | null;

    /**
     * Time at which the object was created. Measured in seconds since the Unix epoch.
     */
    created: number;

    /**
     * Three-letter [ISO code for the currency](https://stripe.com/docs/currencies) the customer can be charged in for recurring billing purposes.
     */
    currency?: string | null;

    /**
     * ID of the default payment source for the customer.
     *
     * If you are using payment methods created via the PaymentMethods API, see the [invoice_settings.default_payment_method](https://stripe.com/docs/api/customers/object#customer_object-invoice_settings-default_payment_method) field instead.
     */
    default_source: string | Stripe.CustomerSource | null;

    deleted?: void;

    /**
     * When the customer's latest invoice is billed by charging automatically, `delinquent` is `true` if the invoice's latest charge failed. When the customer's latest invoice is billed by sending an invoice, `delinquent` is `true` if the invoice isn't paid by its due date.
     *
     * If an invoice is marked uncollectible by [dunning](https://stripe.com/docs/billing/automatic-collection), `delinquent` doesn't get reset to `false`.
     */
    delinquent?: boolean | null;

    /**
     * An arbitrary string attached to the object. Often useful for displaying to users.
     */
    description: string | null;

    /**
     * Describes the current discount active on the customer, if there is one.
     */
    discount?: Stripe.Discount | null;

    /**
     * The customer's email address.
     */
    email: string | null;

    /**
     * The current multi-currency balances, if any, being stored on the customer.If positive in a currency, the customer has a credit to apply to their next invoice denominated in that currency.If negative, the customer has an amount owed that will be added to their next invoice denominated in that currency. These balances do not refer to any unpaid invoices.They solely track amounts that have yet to be successfully applied to any invoice. A balance in a particular currency is only applied to any invoice as an invoice in that currency is finalized.
     */
    invoice_credit_balance?: {
      [key: string]: number;
    };

    /**
     * The prefix for the customer used to generate unique invoice numbers.
     */
    invoice_prefix?: string | null;

    invoice_settings: Customer.InvoiceSettings;

    /**
     * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
     */
    livemode: boolean;

    /**
     * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
     */
    metadata: Stripe.Metadata;

    /**
     * The customer's full name or business name.
     */
    name?: string | null;

    /**
     * The suffix of the customer's next invoice number, e.g., 0001.
     */
    next_invoice_sequence?: number;

    /**
     * The customer's phone number.
     */
    phone?: string | null;

    /**
     * The customer's preferred locales (languages), ordered by preference.
     */
    preferred_locales?: Array<string> | null;

    /**
     * Mailing and shipping address for the customer. Appears on invoices emailed to this customer.
     */
    shipping: Customer.Shipping | null;

    /**
     * The customer's payment sources, if any.
     */
    sources?: ApiList<Stripe.CustomerSource>;

    /**
     * The customer's current subscriptions, if any.
     */
    subscriptions?: ApiList<Stripe.Subscription>;

    tax?: Customer.Tax;

    /**
     * Describes the customer's tax exemption status. One of `none`, `exempt`, or `reverse`. When set to `reverse`, invoice and receipt PDFs include the text **"Reverse charge"**.
     */
    tax_exempt?: Customer.TaxExempt | null;

    /**
     * The customer's tax IDs.
     */
    tax_ids?: ApiList<Stripe.TaxId>;

    /**
     * ID of the test clock this customer belongs to.
     */
    test_clock?: string | Stripe.TestHelpers.TestClock | null;
  }

  export /**
   * The DeletedCustomer object.
   */
  interface DeletedCustomer {
    /**
     * Unique identifier for the object.
     */
    id: string;

    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: 'customer';

    /**
     * Always true for a deleted object
     */
    deleted: true;
  }

  namespace CustomerCreateParams {
    export interface CashBalance {
      /**
       * Settings controlling the behavior of the customer's cash balance,
       * such as reconciliation of funds received.
       */
      settings?: CashBalance.Settings;
    }

    export interface InvoiceSettings {
      /**
       * Default custom fields to be displayed on invoices for this customer. When updating, pass an empty string to remove previously-defined fields.
       */
      custom_fields?: Stripe.Emptyable<Array<InvoiceSettings.CustomField>>;

      /**
       * ID of a payment method that's attached to the customer, to be used as the customer's default payment method for subscriptions and invoices.
       */
      default_payment_method?: string;

      /**
       * Default footer to be displayed on invoices for this customer.
       */
      footer?: string;

      /**
       * Default options for invoice PDF rendering for this customer.
       */
      rendering_options?: Stripe.Emptyable<InvoiceSettings.RenderingOptions>;
    }

    export interface Shipping {
      /**
       * Customer shipping address.
       */
      address: Stripe.AddressParam;

      /**
       * Customer name.
       */
      name: string;

      /**
       * Customer phone (including extension).
       */
      phone?: string;
    }

    export interface Tax {
      /**
       * A recent IP address of the customer used for tax reporting and tax location inference. Stripe recommends updating the IP address when a new PaymentMethod is attached or the address field on the customer is updated. We recommend against updating this field more frequently since it could result in unexpected tax location/reporting outcomes.
       */
      ip_address?: Stripe.Emptyable<string>;
    }

    export type TaxExempt = 'exempt' | 'none' | 'reverse';

    export interface TaxIdDatum {
      /**
       * Type of the tax ID, one of `ae_trn`, `au_abn`, `au_arn`, `bg_uic`, `br_cnpj`, `br_cpf`, `ca_bn`, `ca_gst_hst`, `ca_pst_bc`, `ca_pst_mb`, `ca_pst_sk`, `ca_qst`, `ch_vat`, `cl_tin`, `es_cif`, `eu_oss_vat`, `eu_vat`, `gb_vat`, `ge_vat`, `hk_br`, `hu_tin`, `id_npwp`, `il_vat`, `in_gst`, `is_vat`, `jp_cn`, `jp_rn`, `kr_brn`, `li_uid`, `mx_rfc`, `my_frp`, `my_itn`, `my_sst`, `no_vat`, `nz_gst`, `ru_inn`, `ru_kpp`, `sa_vat`, `sg_gst`, `sg_uen`, `si_tin`, `th_vat`, `tw_vat`, `ua_vat`, `us_ein`, or `za_vat`
       */
      type: TaxIdDatum.Type;

      /**
       * Value of the tax ID.
       */
      value: string;
    }

    namespace CashBalance {
      export interface Settings {
        /**
         * Controls how funds transferred by the customer are applied to payment intents and invoices. Valid options are `automatic` or `manual`. For more information about these reconciliation modes, see [Reconciliation](https://stripe.com/docs/payments/customer-balance/reconciliation).
         */
        reconciliation_mode?: Settings.ReconciliationMode;
      }

      namespace Settings {
        export type ReconciliationMode = 'automatic' | 'manual';
      }
    }

    namespace InvoiceSettings {
      export interface CustomField {
        /**
         * The name of the custom field. This may be up to 30 characters.
         */
        name: string;

        /**
         * The value of the custom field. This may be up to 30 characters.
         */
        value: string;
      }

      export interface RenderingOptions {
        /**
         * How line-item prices and amounts will be displayed with respect to tax on invoice PDFs. One of `exclude_tax` or `include_inclusive_tax`. `include_inclusive_tax` will include inclusive tax (and exclude exclusive tax) in invoice PDF amounts. `exclude_tax` will exclude all tax (inclusive and exclusive alike) from invoice PDF amounts.
         */
        amount_tax_display?: Stripe.Emptyable<
          RenderingOptions.AmountTaxDisplay
        >;
      }

      namespace RenderingOptions {
        export type AmountTaxDisplay = 'exclude_tax' | 'include_inclusive_tax';
      }
    }

    namespace TaxIdDatum {
      export type Type =
        | 'ae_trn'
        | 'au_abn'
        | 'au_arn'
        | 'bg_uic'
        | 'br_cnpj'
        | 'br_cpf'
        | 'ca_bn'
        | 'ca_gst_hst'
        | 'ca_pst_bc'
        | 'ca_pst_mb'
        | 'ca_pst_sk'
        | 'ca_qst'
        | 'ch_vat'
        | 'cl_tin'
        | 'es_cif'
        | 'eu_oss_vat'
        | 'eu_vat'
        | 'gb_vat'
        | 'ge_vat'
        | 'hk_br'
        | 'hu_tin'
        | 'id_npwp'
        | 'il_vat'
        | 'in_gst'
        | 'is_vat'
        | 'jp_cn'
        | 'jp_rn'
        | 'kr_brn'
        | 'li_uid'
        | 'mx_rfc'
        | 'my_frp'
        | 'my_itn'
        | 'my_sst'
        | 'no_vat'
        | 'nz_gst'
        | 'ru_inn'
        | 'ru_kpp'
        | 'sa_vat'
        | 'sg_gst'
        | 'sg_uen'
        | 'si_tin'
        | 'th_vat'
        | 'tw_vat'
        | 'ua_vat'
        | 'us_ein'
        | 'za_vat';
    }
  }

  export interface CustomerCreateParams {
    /**
     * The customer's address.
     */
    address?: Stripe.Emptyable<Stripe.AddressParam>;

    /**
     * An integer amount in cents (or local equivalent) that represents the customer's current balance, which affect the customer's future invoices. A negative amount represents a credit that decreases the amount due on an invoice; a positive amount increases the amount due on an invoice.
     */
    balance?: number;

    /**
     * Balance information and default balance settings for this customer.
     */
    cash_balance?: CustomerCreateParams.CashBalance;

    coupon?: string;

    /**
     * An arbitrary string that you can attach to a customer object. It is displayed alongside the customer in the dashboard.
     */
    description?: string;

    /**
     * Customer's email address. It's displayed alongside the customer in your dashboard and can be useful for searching and tracking. This may be up to *512 characters*.
     */
    email?: string;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * The prefix for the customer used to generate unique invoice numbers. Must be 3–12 uppercase letters or numbers.
     */
    invoice_prefix?: string;

    /**
     * Default invoice settings for this customer.
     */
    invoice_settings?: CustomerCreateParams.InvoiceSettings;

    /**
     * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
     */
    metadata?: Stripe.Emptyable<Stripe.MetadataParam>;

    /**
     * The customer's full name or business name.
     */
    name?: string;

    /**
     * The sequence to be used on the customer's next invoice. Defaults to 1.
     */
    next_invoice_sequence?: number;

    payment_method?: string;

    /**
     * The customer's phone number.
     */
    phone?: string;

    /**
     * Customer's preferred languages, ordered by preference.
     */
    preferred_locales?: Array<string>;

    /**
     * The API ID of a promotion code to apply to the customer. The customer will have a discount applied on all recurring payments. Charges you create through the API will not have the discount.
     */
    promotion_code?: string;

    /**
     * The customer's shipping information. Appears on invoices emailed to this customer.
     */
    shipping?: Stripe.Emptyable<CustomerCreateParams.Shipping>;

    source?: string;

    /**
     * Tax details about the customer.
     */
    tax?: CustomerCreateParams.Tax;

    /**
     * The customer's tax exemption. One of `none`, `exempt`, or `reverse`.
     */
    tax_exempt?: Stripe.Emptyable<CustomerCreateParams.TaxExempt>;

    /**
     * The customer's tax IDs.
     */
    tax_id_data?: Array<CustomerCreateParams.TaxIdDatum>;

    /**
     * ID of the test clock to attach to the customer.
     */
    test_clock?: string;

    validate?: boolean;
  }

  export interface CustomerRetrieveParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }

  namespace CustomerUpdateParams {
    export interface CashBalance {
      /**
       * Settings controlling the behavior of the customer's cash balance,
       * such as reconciliation of funds received.
       */
      settings?: CashBalance.Settings;
    }

    export interface InvoiceSettings {
      /**
       * Default custom fields to be displayed on invoices for this customer. When updating, pass an empty string to remove previously-defined fields.
       */
      custom_fields?: Stripe.Emptyable<Array<InvoiceSettings.CustomField>>;

      /**
       * ID of a payment method that's attached to the customer, to be used as the customer's default payment method for subscriptions and invoices.
       */
      default_payment_method?: string;

      /**
       * Default footer to be displayed on invoices for this customer.
       */
      footer?: string;

      /**
       * Default options for invoice PDF rendering for this customer.
       */
      rendering_options?: Stripe.Emptyable<InvoiceSettings.RenderingOptions>;
    }

    export interface Shipping {
      /**
       * Customer shipping address.
       */
      address: Stripe.AddressParam;

      /**
       * Customer name.
       */
      name: string;

      /**
       * Customer phone (including extension).
       */
      phone?: string;
    }

    export interface Tax {
      /**
       * A recent IP address of the customer used for tax reporting and tax location inference. Stripe recommends updating the IP address when a new PaymentMethod is attached or the address field on the customer is updated. We recommend against updating this field more frequently since it could result in unexpected tax location/reporting outcomes.
       */
      ip_address?: Stripe.Emptyable<string>;
    }

    export type TaxExempt = 'exempt' | 'none' | 'reverse';

    namespace CashBalance {
      export interface Settings {
        /**
         * Controls how funds transferred by the customer are applied to payment intents and invoices. Valid options are `automatic` or `manual`. For more information about these reconciliation modes, see [Reconciliation](https://stripe.com/docs/payments/customer-balance/reconciliation).
         */
        reconciliation_mode?: Settings.ReconciliationMode;
      }

      namespace Settings {
        export type ReconciliationMode = 'automatic' | 'manual';
      }
    }

    namespace InvoiceSettings {
      export interface CustomField {
        /**
         * The name of the custom field. This may be up to 30 characters.
         */
        name: string;

        /**
         * The value of the custom field. This may be up to 30 characters.
         */
        value: string;
      }

      export interface RenderingOptions {
        /**
         * How line-item prices and amounts will be displayed with respect to tax on invoice PDFs. One of `exclude_tax` or `include_inclusive_tax`. `include_inclusive_tax` will include inclusive tax (and exclude exclusive tax) in invoice PDF amounts. `exclude_tax` will exclude all tax (inclusive and exclusive alike) from invoice PDF amounts.
         */
        amount_tax_display?: Stripe.Emptyable<
          RenderingOptions.AmountTaxDisplay
        >;
      }

      namespace RenderingOptions {
        export type AmountTaxDisplay = 'exclude_tax' | 'include_inclusive_tax';
      }
    }
  }

  export interface CustomerUpdateParams {
    /**
     * The customer's address.
     */
    address?: Stripe.Emptyable<Stripe.AddressParam>;

    /**
     * An integer amount in cents (or local equivalent) that represents the customer's current balance, which affect the customer's future invoices. A negative amount represents a credit that decreases the amount due on an invoice; a positive amount increases the amount due on an invoice.
     */
    balance?: number;

    /**
     * Balance information and default balance settings for this customer.
     */
    cash_balance?: CustomerUpdateParams.CashBalance;

    coupon?: string;

    /**
     * If you are using payment methods created via the PaymentMethods API, see the [invoice_settings.default_payment_method](https://stripe.com/docs/api/customers/update#update_customer-invoice_settings-default_payment_method) parameter.
     *
     * Provide the ID of a payment source already attached to this customer to make it this customer's default payment source.
     *
     * If you want to add a new payment source and make it the default, see the [source](https://stripe.com/docs/api/customers/update#update_customer-source) property.
     */
    default_source?: string;

    /**
     * An arbitrary string that you can attach to a customer object. It is displayed alongside the customer in the dashboard.
     */
    description?: string;

    /**
     * Customer's email address. It's displayed alongside the customer in your dashboard and can be useful for searching and tracking. This may be up to *512 characters*.
     */
    email?: string;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * The prefix for the customer used to generate unique invoice numbers. Must be 3–12 uppercase letters or numbers.
     */
    invoice_prefix?: string;

    /**
     * Default invoice settings for this customer.
     */
    invoice_settings?: CustomerUpdateParams.InvoiceSettings;

    /**
     * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
     */
    metadata?: Stripe.Emptyable<Stripe.MetadataParam>;

    /**
     * The customer's full name or business name.
     */
    name?: string;

    /**
     * The sequence to be used on the customer's next invoice. Defaults to 1.
     */
    next_invoice_sequence?: number;

    /**
     * The customer's phone number.
     */
    phone?: string;

    /**
     * Customer's preferred languages, ordered by preference.
     */
    preferred_locales?: Array<string>;

    /**
     * The API ID of a promotion code to apply to the customer. The customer will have a discount applied on all recurring payments. Charges you create through the API will not have the discount.
     */
    promotion_code?: string;

    /**
     * The customer's shipping information. Appears on invoices emailed to this customer.
     */
    shipping?: Stripe.Emptyable<CustomerUpdateParams.Shipping>;

    source?: string;

    /**
     * Tax details about the customer.
     */
    tax?: CustomerUpdateParams.Tax;

    /**
     * The customer's tax exemption. One of `none`, `exempt`, or `reverse`.
     */
    tax_exempt?: Stripe.Emptyable<CustomerUpdateParams.TaxExempt>;

    validate?: boolean;
  }

  export interface CustomerListParams extends PaginationParams {
    created?: Stripe.RangeQueryParam | number;

    /**
     * A case-sensitive filter on the list based on the customer's `email` field. The value must be a string.
     */
    email?: string;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * Provides a list of customers that are associated with the specified test clock. The response will not include customers with test clocks if this parameter is not set.
     */
    test_clock?: string;
  }

  export interface CustomerDeleteParams {}

  namespace CustomerCreateFundingInstructionsParams {
    export interface BankTransfer {
      /**
       * Configuration for eu_bank_transfer funding type.
       */
      eu_bank_transfer?: BankTransfer.EuBankTransfer;

      /**
       * List of address types that should be returned in the financial_addresses response. If not specified, all valid types will be returned.
       *
       * Permitted values include: `sort_code`, `zengin`, `iban`, or `spei`.
       */
      requested_address_types?: Array<BankTransfer.RequestedAddressType>;

      /**
       * The type of the `bank_transfer`
       */
      type: BankTransfer.Type;
    }

    namespace BankTransfer {
      export interface EuBankTransfer {
        /**
         * The desired country code of the bank account information. Permitted values include: `DE`, `ES`, `FR`, `IE`, or `NL`.
         */
        country: string;
      }

      export type RequestedAddressType =
        | 'iban'
        | 'sort_code'
        | 'spei'
        | 'zengin';

      export type Type =
        | 'eu_bank_transfer'
        | 'gb_bank_transfer'
        | 'jp_bank_transfer'
        | 'mx_bank_transfer';
    }
  }

  export interface CustomerCreateFundingInstructionsParams {
    /**
     * Additional parameters for `bank_transfer` funding types
     */
    bank_transfer: CustomerCreateFundingInstructionsParams.BankTransfer;

    /**
     * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
     */
    currency: string;

    /**
     * The `funding_type` to get the instructions for.
     */
    funding_type: 'bank_transfer';

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }

  export interface CustomerDeleteDiscountParams {}

  namespace CustomerListPaymentMethodsParams {
    export type Type =
      | 'acss_debit'
      | 'affirm'
      | 'afterpay_clearpay'
      | 'alipay'
      | 'au_becs_debit'
      | 'bacs_debit'
      | 'bancontact'
      | 'blik'
      | 'boleto'
      | 'card'
      | 'card_present'
      | 'customer_balance'
      | 'eps'
      | 'fpx'
      | 'giropay'
      | 'grabpay'
      | 'ideal'
      | 'klarna'
      | 'konbini'
      | 'link'
      | 'oxxo'
      | 'p24'
      | 'paynow'
      | 'pix'
      | 'promptpay'
      | 'sepa_debit'
      | 'sofort'
      | 'us_bank_account'
      | 'wechat_pay';
  }

  export interface CustomerListPaymentMethodsParams extends PaginationParams {
    /**
     * A required filter on the list, based on the object `type` field.
     */
    type: CustomerListPaymentMethodsParams.Type;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }

  export interface CustomerRetrievePaymentMethodParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }

  export interface CustomerSearchParams {
    /**
     * The search query string. See [search query language](https://stripe.com/docs/search#search-query-language) and the list of supported [query fields for customers](https://stripe.com/docs/search#query-fields-for-customers).
     */
    query: string;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
     */
    limit?: number;

    /**
     * A cursor for pagination across multiple pages of results. Don't include this parameter on the first call. Use the next_page value returned in a previous response to request subsequent results.
     */
    page?: string;
  }

  export interface CustomersResource {
    create:
      | ((
          params?: CustomerCreateParams,
          options?: RequestOptions
        ) => Promise<Stripe.Response<Stripe.Customer>>)
      | ((
          options?: RequestOptions
        ) => Promise<Stripe.Response<Stripe.Customer>>);

    retrieve:
      | ((
          id: string,
          params?: CustomerRetrieveParams,
          options?: RequestOptions
        ) => Promise<Stripe.Response<Stripe.Customer | Stripe.DeletedCustomer>>)
      | ((
          id: string,
          options?: RequestOptions
        ) => Promise<
          Stripe.Response<Stripe.Customer | Stripe.DeletedCustomer>
        >);

    update: (
      id: string,
      params?: CustomerUpdateParams,
      options?: RequestOptions
    ) => Promise<Stripe.Response<Stripe.Customer>>;

    list:
      | ((
          params?: CustomerListParams,
          options?: RequestOptions
        ) => ApiListPromise<Stripe.Customer>)
      | ((options?: RequestOptions) => ApiListPromise<Stripe.Customer>);

    del:
      | ((
          id: string,
          params?: CustomerDeleteParams,
          options?: RequestOptions
        ) => Promise<Stripe.Response<Stripe.DeletedCustomer>>)
      | ((
          id: string,
          options?: RequestOptions
        ) => Promise<Stripe.Response<Stripe.DeletedCustomer>>);

    createFundingInstructions: (
      id: string,
      params: CustomerCreateFundingInstructionsParams,
      options?: RequestOptions
    ) => Promise<Stripe.Response<Stripe.FundingInstructions>>;

    deleteDiscount:
      | ((
          id: string,
          params?: CustomerDeleteDiscountParams,
          options?: RequestOptions
        ) => Promise<Stripe.Response<Stripe.DeletedDiscount>>)
      | ((
          id: string,
          options?: RequestOptions
        ) => Promise<Stripe.Response<Stripe.DeletedDiscount>>);

    listPaymentMethods: (
      id: string,
      params: CustomerListPaymentMethodsParams,
      options?: RequestOptions
    ) => ApiListPromise<Stripe.PaymentMethod>;

    retrievePaymentMethod:
      | ((
          customerId: string,
          id: string,
          params?: CustomerRetrievePaymentMethodParams,
          options?: RequestOptions
        ) => Promise<Stripe.Response<Stripe.PaymentMethod>>)
      | ((
          customerId: string,
          id: string,
          options?: RequestOptions
        ) => Promise<Stripe.Response<Stripe.PaymentMethod>>);

    search: (
      params: CustomerSearchParams,
      options?: RequestOptions
    ) => ApiSearchResultPromise<Stripe.Customer>;

    retrieveCashBalance:
      | ((
          id: string,
          params?: CashBalanceRetrieveParams,
          options?: RequestOptions
        ) => Promise<Stripe.Response<Stripe.CashBalance>>)
      | ((
          id: string,
          options?: RequestOptions
        ) => Promise<Stripe.Response<Stripe.CashBalance>>);

    updateCashBalance: (
      id: string,
      params?: CashBalanceUpdateParams,
      options?: RequestOptions
    ) => Promise<Stripe.Response<Stripe.CashBalance>>;

    createBalanceTransaction: (
      id: string,
      params: CustomerBalanceTransactionCreateParams,
      options?: RequestOptions
    ) => Promise<Stripe.Response<Stripe.CustomerBalanceTransaction>>;

    retrieveBalanceTransaction:
      | ((
          customerId: string,
          id: string,
          params?: CustomerBalanceTransactionRetrieveParams,
          options?: RequestOptions
        ) => Promise<Stripe.Response<Stripe.CustomerBalanceTransaction>>)
      | ((
          customerId: string,
          id: string,
          options?: RequestOptions
        ) => Promise<Stripe.Response<Stripe.CustomerBalanceTransaction>>);

    updateBalanceTransaction: (
      customerId: string,
      id: string,
      params?: CustomerBalanceTransactionUpdateParams,
      options?: RequestOptions
    ) => Promise<Stripe.Response<Stripe.CustomerBalanceTransaction>>;

    listBalanceTransactions:
      | ((
          id: string,
          params?: CustomerBalanceTransactionListParams,
          options?: RequestOptions
        ) => ApiListPromise<Stripe.CustomerBalanceTransaction>)
      | ((
          id: string,
          options?: RequestOptions
        ) => ApiListPromise<Stripe.CustomerBalanceTransaction>);

    retrieveCashBalanceTransaction:
      | ((
          customerId: string,
          id: string,
          params?: CustomerCashBalanceTransactionRetrieveParams,
          options?: RequestOptions
        ) => Promise<Stripe.Response<Stripe.CustomerCashBalanceTransaction>>)
      | ((
          customerId: string,
          id: string,
          options?: RequestOptions
        ) => Promise<Stripe.Response<Stripe.CustomerCashBalanceTransaction>>);

    listCashBalanceTransactions:
      | ((
          id: string,
          params?: CustomerCashBalanceTransactionListParams,
          options?: RequestOptions
        ) => ApiListPromise<Stripe.CustomerCashBalanceTransaction>)
      | ((
          id: string,
          options?: RequestOptions
        ) => ApiListPromise<Stripe.CustomerCashBalanceTransaction>);

    createSource: (
      id: string,
      params: CustomerSourceCreateParams,
      options?: RequestOptions
    ) => Promise<Stripe.Response<Stripe.CustomerSource>>;

    retrieveSource:
      | ((
          customerId: string,
          id: string,
          params?: CustomerSourceRetrieveParams,
          options?: RequestOptions
        ) => Promise<Stripe.Response<Stripe.CustomerSource>>)
      | ((
          customerId: string,
          id: string,
          options?: RequestOptions
        ) => Promise<Stripe.Response<Stripe.CustomerSource>>);

    updateSource: (
      customerId: string,
      id: string,
      params?: CustomerSourceUpdateParams,
      options?: RequestOptions
    ) => Promise<
      Stripe.Response<Stripe.Card | Stripe.BankAccount | Stripe.Source>
    >;

    listSources:
      | ((
          id: string,
          params?: CustomerSourceListParams,
          options?: RequestOptions
        ) => ApiListPromise<Stripe.CustomerSource>)
      | ((
          id: string,
          options?: RequestOptions
        ) => ApiListPromise<Stripe.CustomerSource>);

    deleteSource:
      | ((
          customerId: string,
          id: string,
          params?: CustomerSourceDeleteParams,
          options?: RequestOptions
        ) => Promise<
          Stripe.Response<
            | Stripe.CustomerSource
            | Stripe.DeletedBankAccount
            | Stripe.DeletedCard
          >
        >)
      | ((
          customerId: string,
          id: string,
          options?: RequestOptions
        ) => Promise<
          Stripe.Response<
            | Stripe.CustomerSource
            | Stripe.DeletedBankAccount
            | Stripe.DeletedCard
          >
        >);

    verifySource:
      | ((
          customerId: string,
          id: string,
          params?: CustomerSourceVerifyParams,
          options?: RequestOptions
        ) => Promise<Stripe.Response<Stripe.BankAccount>>)
      | ((
          customerId: string,
          id: string,
          options?: RequestOptions
        ) => Promise<Stripe.Response<Stripe.BankAccount>>);

    createTaxId: (
      id: string,
      params: TaxIdCreateParams,
      options?: RequestOptions
    ) => Promise<Stripe.Response<Stripe.TaxId>>;

    retrieveTaxId:
      | ((
          customerId: string,
          id: string,
          params?: TaxIdRetrieveParams,
          options?: RequestOptions
        ) => Promise<Stripe.Response<Stripe.TaxId>>)
      | ((
          customerId: string,
          id: string,
          options?: RequestOptions
        ) => Promise<Stripe.Response<Stripe.TaxId>>);

    listTaxIds:
      | ((
          id: string,
          params?: TaxIdListParams,
          options?: RequestOptions
        ) => ApiListPromise<Stripe.TaxId>)
      | ((
          id: string,
          options?: RequestOptions
        ) => ApiListPromise<Stripe.TaxId>);

    deleteTaxId:
      | ((
          customerId: string,
          id: string,
          params?: TaxIdDeleteParams,
          options?: RequestOptions
        ) => Promise<Stripe.Response<Stripe.DeletedTaxId>>)
      | ((
          customerId: string,
          id: string,
          options?: RequestOptions
        ) => Promise<Stripe.Response<Stripe.DeletedTaxId>>);
  }
}

const resource: CustomersResource = StripeResource.extend({
  path: 'customers',

  create: stripeMethod({
    method: 'POST',
    path: '',
  }),

  retrieve: stripeMethod({
    method: 'GET',
    path: '/{customer}',
  }),

  update: stripeMethod({
    method: 'POST',
    path: '/{customer}',
  }),

  list: stripeMethod({
    method: 'GET',
    path: '',
    methodType: 'list',
  }),

  del: stripeMethod({
    method: 'DELETE',
    path: '/{customer}',
  }),

  createFundingInstructions: stripeMethod({
    method: 'POST',
    path: '/{customer}/funding_instructions',
  }),

  deleteDiscount: stripeMethod({
    method: 'DELETE',
    path: '/{customer}/discount',
  }),

  listPaymentMethods: stripeMethod({
    method: 'GET',
    path: '/{customer}/payment_methods',
    methodType: 'list',
  }),

  retrievePaymentMethod: stripeMethod({
    method: 'GET',
    path: '/{customer}/payment_methods/{paymentMethod}',
  }),

  search: stripeMethod({
    method: 'GET',
    path: '/search',
    methodType: 'search',
  }),

  retrieveCashBalance: stripeMethod({
    method: 'GET',
    path: '/{customer}/cash_balance',
  }),

  updateCashBalance: stripeMethod({
    method: 'POST',
    path: '/{customer}/cash_balance',
  }),

  createBalanceTransaction: stripeMethod({
    method: 'POST',
    path: '/{customer}/balance_transactions',
  }),

  retrieveBalanceTransaction: stripeMethod({
    method: 'GET',
    path: '/{customer}/balance_transactions/{transaction}',
  }),

  updateBalanceTransaction: stripeMethod({
    method: 'POST',
    path: '/{customer}/balance_transactions/{transaction}',
  }),

  listBalanceTransactions: stripeMethod({
    method: 'GET',
    path: '/{customer}/balance_transactions',
    methodType: 'list',
  }),

  retrieveCashBalanceTransaction: stripeMethod({
    method: 'GET',
    path: '/{customer}/cash_balance_transactions/{transaction}',
  }),

  listCashBalanceTransactions: stripeMethod({
    method: 'GET',
    path: '/{customer}/cash_balance_transactions',
    methodType: 'list',
  }),

  createSource: stripeMethod({
    method: 'POST',
    path: '/{customer}/sources',
  }),

  retrieveSource: stripeMethod({
    method: 'GET',
    path: '/{customer}/sources/{id}',
  }),

  updateSource: stripeMethod({
    method: 'POST',
    path: '/{customer}/sources/{id}',
  }),

  listSources: stripeMethod({
    method: 'GET',
    path: '/{customer}/sources',
    methodType: 'list',
  }),

  deleteSource: stripeMethod({
    method: 'DELETE',
    path: '/{customer}/sources/{id}',
  }),

  verifySource: stripeMethod({
    method: 'POST',
    path: '/{customer}/sources/{id}/verify',
  }),

  createTaxId: stripeMethod({
    method: 'POST',
    path: '/{customer}/tax_ids',
  }),

  retrieveTaxId: stripeMethod({
    method: 'GET',
    path: '/{customer}/tax_ids/{id}',
  }),

  listTaxIds: stripeMethod({
    method: 'GET',
    path: '/{customer}/tax_ids',
    methodType: 'list',
  }),

  deleteTaxId: stripeMethod({
    method: 'DELETE',
    path: '/{customer}/tax_ids/{id}',
  }),
});

export = resource;
