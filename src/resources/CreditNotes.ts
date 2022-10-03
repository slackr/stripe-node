// File generated from our OpenAPI spec

'use strict';

import StripeResource = require('../StripeResource');
const stripeMethod = StripeResource.method;

namespace Stripe {
  namespace CreditNote {
    export interface DiscountAmount {
      /**
       * The amount, in %s, of the discount.
       */
      amount: number;

      /**
       * The discount that was applied to get this discount amount.
       */
      discount: string | Stripe.Discount | Stripe.DeletedDiscount;
    }

    export type Reason =
      | 'duplicate'
      | 'fraudulent'
      | 'order_change'
      | 'product_unsatisfactory';

    export type Status = 'issued' | 'void';

    export interface TaxAmount {
      /**
       * The amount, in %s, of the tax.
       */
      amount: number;

      /**
       * Whether this tax amount is inclusive or exclusive.
       */
      inclusive: boolean;

      /**
       * The tax rate that was applied to get this tax amount.
       */
      tax_rate: string | Stripe.TaxRate;
    }

    export type Type = 'post_payment' | 'pre_payment';
  }

  export /**
   * Issue a credit note to adjust an invoice's amount after the invoice is finalized.
   *
   * Related guide: [Credit Notes](https://stripe.com/docs/billing/invoices/credit-notes).
   */
  interface CreditNote {
    /**
     * Unique identifier for the object.
     */
    id: string;

    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: 'credit_note';

    /**
     * The integer amount in %s representing the total amount of the credit note, including tax.
     */
    amount: number;

    /**
     * Time at which the object was created. Measured in seconds since the Unix epoch.
     */
    created: number;

    /**
     * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
     */
    currency: string;

    /**
     * ID of the customer.
     */
    customer: string | Stripe.Customer | Stripe.DeletedCustomer;

    /**
     * Customer balance transaction related to this credit note.
     */
    customer_balance_transaction:
      | string
      | Stripe.CustomerBalanceTransaction
      | null;

    /**
     * The integer amount in %s representing the total amount of discount that was credited.
     */
    discount_amount: number;

    /**
     * The aggregate amounts calculated per discount for all line items.
     */
    discount_amounts: Array<CreditNote.DiscountAmount>;

    /**
     * ID of the invoice.
     */
    invoice: string | Stripe.Invoice;

    /**
     * Line items that make up the credit note
     */
    lines: ApiList<Stripe.CreditNoteLineItem>;

    /**
     * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
     */
    livemode: boolean;

    /**
     * Customer-facing text that appears on the credit note PDF.
     */
    memo: string | null;

    /**
     * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
     */
    metadata: Stripe.Metadata | null;

    /**
     * A unique number that identifies this particular credit note and appears on the PDF of the credit note and its associated invoice.
     */
    number: string;

    /**
     * Amount that was credited outside of Stripe.
     */
    out_of_band_amount: number | null;

    /**
     * The link to download the PDF of the credit note.
     */
    pdf: string;

    /**
     * Reason for issuing this credit note, one of `duplicate`, `fraudulent`, `order_change`, or `product_unsatisfactory`
     */
    reason: CreditNote.Reason | null;

    /**
     * Refund related to this credit note.
     */
    refund: string | Stripe.Refund | null;

    /**
     * Status of this credit note, one of `issued` or `void`. Learn more about [voiding credit notes](https://stripe.com/docs/billing/invoices/credit-notes#voiding).
     */
    status: CreditNote.Status;

    /**
     * The integer amount in %s representing the amount of the credit note, excluding exclusive tax and invoice level discounts.
     */
    subtotal: number;

    /**
     * The integer amount in %s representing the amount of the credit note, excluding all tax and invoice level discounts.
     */
    subtotal_excluding_tax: number | null;

    /**
     * The aggregate amounts calculated per tax rate for all line items.
     */
    tax_amounts: Array<CreditNote.TaxAmount>;

    /**
     * The integer amount in %s representing the total amount of the credit note, including tax and all discount.
     */
    total: number;

    /**
     * The integer amount in %s representing the total amount of the credit note, excluding tax, but including discounts.
     */
    total_excluding_tax: number | null;

    /**
     * Type of this credit note, one of `pre_payment` or `post_payment`. A `pre_payment` credit note means it was issued when the invoice was open. A `post_payment` credit note means it was issued when the invoice was paid.
     */
    type: CreditNote.Type;

    /**
     * The time that the credit note was voided.
     */
    voided_at: number | null;
  }

  namespace CreditNoteCreateParams {
    export interface Line {
      /**
       * The line item amount to credit. Only valid when `type` is `invoice_line_item`.
       */
      amount?: number;

      /**
       * The description of the credit note line item. Only valid when the `type` is `custom_line_item`.
       */
      description?: string;

      /**
       * The invoice line item to credit. Only valid when the `type` is `invoice_line_item`.
       */
      invoice_line_item?: string;

      /**
       * The line item quantity to credit.
       */
      quantity?: number;

      /**
       * The tax rates which apply to the credit note line item. Only valid when the `type` is `custom_line_item`.
       */
      tax_rates?: Stripe.Emptyable<Array<string>>;

      /**
       * Type of the credit note line item, one of `invoice_line_item` or `custom_line_item`
       */
      type: Line.Type;

      /**
       * The integer unit amount in cents (or local equivalent) of the credit note line item. This `unit_amount` will be multiplied by the quantity to get the full amount to credit for this line item. Only valid when `type` is `custom_line_item`.
       */
      unit_amount?: number;

      /**
       * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
       */
      unit_amount_decimal?: string;
    }

    export type Reason =
      | 'duplicate'
      | 'fraudulent'
      | 'order_change'
      | 'product_unsatisfactory';

    namespace Line {
      export type Type = 'custom_line_item' | 'invoice_line_item';
    }
  }

  export interface CreditNoteCreateParams {
    /**
     * ID of the invoice.
     */
    invoice: string;

    /**
     * The integer amount in cents (or local equivalent) representing the total amount of the credit note.
     */
    amount?: number;

    /**
     * The integer amount in cents (or local equivalent) representing the amount to credit the customer's balance, which will be automatically applied to their next invoice.
     */
    credit_amount?: number;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * Line items that make up the credit note.
     */
    lines?: Array<CreditNoteCreateParams.Line>;

    /**
     * The credit note's memo appears on the credit note PDF.
     */
    memo?: string;

    /**
     * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
     */
    metadata?: Stripe.MetadataParam;

    /**
     * The integer amount in cents (or local equivalent) representing the amount that is credited outside of Stripe.
     */
    out_of_band_amount?: number;

    /**
     * Reason for issuing this credit note, one of `duplicate`, `fraudulent`, `order_change`, or `product_unsatisfactory`
     */
    reason?: CreditNoteCreateParams.Reason;

    /**
     * ID of an existing refund to link this credit note to.
     */
    refund?: string;

    /**
     * The integer amount in cents (or local equivalent) representing the amount to refund. If set, a refund will be created for the charge associated with the invoice.
     */
    refund_amount?: number;
  }

  export interface CreditNoteRetrieveParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }

  export interface CreditNoteUpdateParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * Credit note memo.
     */
    memo?: string;

    /**
     * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
     */
    metadata?: Stripe.MetadataParam;
  }

  export interface CreditNoteListParams extends PaginationParams {
    /**
     * Only return credit notes for the customer specified by this customer ID.
     */
    customer?: string;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * Only return credit notes for the invoice specified by this invoice ID.
     */
    invoice?: string;
  }

  namespace CreditNoteListPreviewLineItemsParams {
    export interface Line {
      /**
       * The line item amount to credit. Only valid when `type` is `invoice_line_item`.
       */
      amount?: number;

      /**
       * The description of the credit note line item. Only valid when the `type` is `custom_line_item`.
       */
      description?: string;

      /**
       * The invoice line item to credit. Only valid when the `type` is `invoice_line_item`.
       */
      invoice_line_item?: string;

      /**
       * The line item quantity to credit.
       */
      quantity?: number;

      /**
       * The tax rates which apply to the credit note line item. Only valid when the `type` is `custom_line_item`.
       */
      tax_rates?: Stripe.Emptyable<Array<string>>;

      /**
       * Type of the credit note line item, one of `invoice_line_item` or `custom_line_item`
       */
      type: Line.Type;

      /**
       * The integer unit amount in cents (or local equivalent) of the credit note line item. This `unit_amount` will be multiplied by the quantity to get the full amount to credit for this line item. Only valid when `type` is `custom_line_item`.
       */
      unit_amount?: number;

      /**
       * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
       */
      unit_amount_decimal?: string;
    }

    export type Reason =
      | 'duplicate'
      | 'fraudulent'
      | 'order_change'
      | 'product_unsatisfactory';

    namespace Line {
      export type Type = 'custom_line_item' | 'invoice_line_item';
    }
  }

  export interface CreditNoteListPreviewLineItemsParams
    extends PaginationParams {
    /**
     * ID of the invoice.
     */
    invoice: string;

    /**
     * The integer amount in cents (or local equivalent) representing the total amount of the credit note.
     */
    amount?: number;

    /**
     * The integer amount in cents (or local equivalent) representing the amount to credit the customer's balance, which will be automatically applied to their next invoice.
     */
    credit_amount?: number;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * Line items that make up the credit note.
     */
    lines?: Array<CreditNoteListPreviewLineItemsParams.Line>;

    /**
     * The credit note's memo appears on the credit note PDF.
     */
    memo?: string;

    /**
     * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
     */
    metadata?: Stripe.MetadataParam;

    /**
     * The integer amount in cents (or local equivalent) representing the amount that is credited outside of Stripe.
     */
    out_of_band_amount?: number;

    /**
     * Reason for issuing this credit note, one of `duplicate`, `fraudulent`, `order_change`, or `product_unsatisfactory`
     */
    reason?: CreditNoteListPreviewLineItemsParams.Reason;

    /**
     * ID of an existing refund to link this credit note to.
     */
    refund?: string;

    /**
     * The integer amount in cents (or local equivalent) representing the amount to refund. If set, a refund will be created for the charge associated with the invoice.
     */
    refund_amount?: number;
  }

  namespace CreditNotePreviewParams {
    export interface Line {
      /**
       * The line item amount to credit. Only valid when `type` is `invoice_line_item`.
       */
      amount?: number;

      /**
       * The description of the credit note line item. Only valid when the `type` is `custom_line_item`.
       */
      description?: string;

      /**
       * The invoice line item to credit. Only valid when the `type` is `invoice_line_item`.
       */
      invoice_line_item?: string;

      /**
       * The line item quantity to credit.
       */
      quantity?: number;

      /**
       * The tax rates which apply to the credit note line item. Only valid when the `type` is `custom_line_item`.
       */
      tax_rates?: Stripe.Emptyable<Array<string>>;

      /**
       * Type of the credit note line item, one of `invoice_line_item` or `custom_line_item`
       */
      type: Line.Type;

      /**
       * The integer unit amount in cents (or local equivalent) of the credit note line item. This `unit_amount` will be multiplied by the quantity to get the full amount to credit for this line item. Only valid when `type` is `custom_line_item`.
       */
      unit_amount?: number;

      /**
       * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
       */
      unit_amount_decimal?: string;
    }

    export type Reason =
      | 'duplicate'
      | 'fraudulent'
      | 'order_change'
      | 'product_unsatisfactory';

    namespace Line {
      export type Type = 'custom_line_item' | 'invoice_line_item';
    }
  }

  export interface CreditNotePreviewParams {
    /**
     * ID of the invoice.
     */
    invoice: string;

    /**
     * The integer amount in cents (or local equivalent) representing the total amount of the credit note.
     */
    amount?: number;

    /**
     * The integer amount in cents (or local equivalent) representing the amount to credit the customer's balance, which will be automatically applied to their next invoice.
     */
    credit_amount?: number;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * Line items that make up the credit note.
     */
    lines?: Array<CreditNotePreviewParams.Line>;

    /**
     * The credit note's memo appears on the credit note PDF.
     */
    memo?: string;

    /**
     * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
     */
    metadata?: Stripe.MetadataParam;

    /**
     * The integer amount in cents (or local equivalent) representing the amount that is credited outside of Stripe.
     */
    out_of_band_amount?: number;

    /**
     * Reason for issuing this credit note, one of `duplicate`, `fraudulent`, `order_change`, or `product_unsatisfactory`
     */
    reason?: CreditNotePreviewParams.Reason;

    /**
     * ID of an existing refund to link this credit note to.
     */
    refund?: string;

    /**
     * The integer amount in cents (or local equivalent) representing the amount to refund. If set, a refund will be created for the charge associated with the invoice.
     */
    refund_amount?: number;
  }

  export interface CreditNoteVoidCreditNoteParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }

  export interface CreditNotesResource {
    create: (
      params: CreditNoteCreateParams,
      options?: RequestOptions
    ) => Promise<Stripe.Response<Stripe.CreditNote>>;

    retrieve:
      | ((
          id: string,
          params?: CreditNoteRetrieveParams,
          options?: RequestOptions
        ) => Promise<Stripe.Response<Stripe.CreditNote>>)
      | ((
          id: string,
          options?: RequestOptions
        ) => Promise<Stripe.Response<Stripe.CreditNote>>);

    update: (
      id: string,
      params?: CreditNoteUpdateParams,
      options?: RequestOptions
    ) => Promise<Stripe.Response<Stripe.CreditNote>>;

    list:
      | ((
          params?: CreditNoteListParams,
          options?: RequestOptions
        ) => ApiListPromise<Stripe.CreditNote>)
      | ((options?: RequestOptions) => ApiListPromise<Stripe.CreditNote>);

    listPreviewLineItems: (
      params: CreditNoteListPreviewLineItemsParams,
      options?: RequestOptions
    ) => ApiListPromise<Stripe.CreditNoteLineItem>;

    preview: (
      params: CreditNotePreviewParams,
      options?: RequestOptions
    ) => Promise<Stripe.Response<Stripe.CreditNote>>;

    voidCreditNote:
      | ((
          id: string,
          params?: CreditNoteVoidCreditNoteParams,
          options?: RequestOptions
        ) => Promise<Stripe.Response<Stripe.CreditNote>>)
      | ((
          id: string,
          options?: RequestOptions
        ) => Promise<Stripe.Response<Stripe.CreditNote>>);

    listLineItems:
      | ((
          id: string,
          params?: CreditNoteLineItemListParams,
          options?: RequestOptions
        ) => ApiListPromise<Stripe.CreditNoteLineItem>)
      | ((
          id: string,
          options?: RequestOptions
        ) => ApiListPromise<Stripe.CreditNoteLineItem>);
  }
}

const resource: CreditNotesResource = StripeResource.extend({
  path: 'credit_notes',

  create: stripeMethod({
    method: 'POST',
    path: '',
  }),

  retrieve: stripeMethod({
    method: 'GET',
    path: '/{id}',
  }),

  update: stripeMethod({
    method: 'POST',
    path: '/{id}',
  }),

  list: stripeMethod({
    method: 'GET',
    path: '',
    methodType: 'list',
  }),

  listPreviewLineItems: stripeMethod({
    method: 'GET',
    path: '/preview/lines',
    methodType: 'list',
  }),

  preview: stripeMethod({
    method: 'GET',
    path: '/preview',
  }),

  voidCreditNote: stripeMethod({
    method: 'POST',
    path: '/{id}/void',
  }),

  listLineItems: stripeMethod({
    method: 'GET',
    path: '/{creditNote}/lines',
    methodType: 'list',
  }),
});

export = resource;
