// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace Treasury {
      /**
       * The Transaction object.
       */
      interface Transaction {
        /**
         * Unique identifier for the object.
         */
        id: string;

        /**
         * String representing the object's type. Objects of the same type share the same value.
         */
        object: 'treasury.transaction';

        /**
         * Amount (in cents) transferred.
         */
        amount: number;

        /**
         * Change to a FinancialAccount's balance
         */
        balance_impact: Transaction.BalanceImpact;

        /**
         * Time at which the object was created. Measured in seconds since the Unix epoch.
         */
        created: number;

        /**
         * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
         */
        currency: string;

        /**
         * An arbitrary string attached to the object. Often useful for displaying to users.
         */
        description: string;

        /**
         * A list of TransactionEntries that are part of this Transaction. This cannot be expanded in any list endpoints.
         */
        entries: ApiList<Stripe.Treasury.TransactionEntry> | null;

        /**
         * The FinancialAccount associated with this object.
         */
        financial_account: string;

        /**
         * ID of the flow that created the Transaction.
         */
        flow: string | null;

        /**
         * Details of the flow that created the Transaction.
         */
        flow_details: Transaction.FlowDetails | null;

        /**
         * Type of the flow that created the Transaction.
         */
        flow_type: Transaction.FlowType;

        /**
         * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
         */
        livemode: boolean;

        /**
         * Status of the Transaction.
         */
        status: Transaction.Status;

        status_transitions: Transaction.StatusTransitions;
      }

      namespace Transaction {
        interface BalanceImpact {
          /**
           * The change made to funds the user can spend right now.
           */
          cash: number;

          /**
           * The change made to funds that are not spendable yet, but will become available at a later time.
           */
          inbound_pending: number;

          /**
           * The change made to funds in the account, but not spendable because they are being held for pending outbound flows.
           */
          outbound_pending: number;
        }

        interface FlowDetails {
          /**
           * You can reverse some [ReceivedCredits](https://stripe.com/docs/api#received_credits). Whether or not you can reverse them depends on their network and source flow. Reversing a ReceivedCredit leads to the creation of a new object known as a CreditReversal.
           *
           * [Stripe Treasury](https://stripe.com/treasury) is currently in beta development. Members of the beta program have access to CreditReversals APIs.
           */
          credit_reversal?: Stripe.Treasury.CreditReversal;

          /**
           * You can reverse some [ReceivedDebits](https://stripe.com/docs/api#received_debits). Whether or not you can reverse them depends on their network and source flow. Reversing a ReceivedDebit leads to the creation of a new object known as a DebitReversal.
           *
           * [Stripe Treasury](https://stripe.com/treasury) is currently in beta development. Members of the beta program have access to DebitReversals APIs.
           */
          debit_reversal?: Stripe.Treasury.DebitReversal;

          /**
           * InboundTransfers allow users to add funds to their [FinancialAccount](https://stripe.com/docs/api#financial_accounts) via a PaymentMethod that is owned by them. Funds are transferred via an ACH debit.
           *
           * [Stripe Treasury](https://stripe.com/treasury) is currently in beta development. Members of the beta program have access to InboundTransfers APIs.
           */
          inbound_transfer?: Stripe.Treasury.InboundTransfer;

          /**
           * When an [issued card](https://stripe.com/docs/issuing) is used to make a purchase, an Issuing `Authorization`
           * object is created. [Authorizations](https://stripe.com/docs/issuing/purchases/authorizations) must be approved for the
           * purchase to be completed successfully.
           *
           * Related guide: [Issued Card Authorizations](https://stripe.com/docs/issuing/purchases/authorizations).
           */
          issuing_authorization?: Stripe.Issuing.Authorization;

          /**
           * OutboundPayments are used to send funds to another party's external bank account or Stripe account. To send money to an account belonging to the same user, use an [OutboundTransfer](https://stripe.com/docs/api#outbound_transfers).
           *
           * Simulate OutboundPayment state changes with the `/v1/test_helpers/outbound_payments` endpoints. These methods can only be called on test mode objects.
           *
           * [Stripe Treasury](https://stripe.com/treasury) is currently in beta development. Members of the beta program have access to OutboundPayments APIs.
           */
          outbound_payment?: Stripe.Treasury.OutboundPayment;

          /**
           * OutboundTransfers can be used to transfer funds from a [FinancialAccount](https://stripe.com/docs/api#financial_accounts) to a PaymentMethod belonging to the same entity. To send funds to a different party, [OutboundPayments](https://stripe.com/docs/api#outbound_payments) should be used instead. Funds can be sent over ACH rails or through a domestic wire transfer to a user's own external bank account.
           *
           * Simulate OutboundTransfer state changes with the `/v1/test_helpers/outbound_transfers` endpoints. These methods can only be called on test mode objects.
           *
           * [Stripe Treasury](https://stripe.com/treasury) is currently in beta development. Members of the beta program have access to OutboundTransfers APIs.
           */
          outbound_transfer?: Stripe.Treasury.OutboundTransfer;

          /**
           * ReceivedCredits represent funds sent to a [FinancialAccount](https://stripe.com/docs/api#financial_accounts) (for example, via ACH or wire). These money movements are not initiated from the FinancialAccount.
           *
           * [Stripe Treasury](https://stripe.com/treasury) is currently in beta development. Members of the beta program have access to ReceivedCredits APIs.
           */
          received_credit?: Stripe.Treasury.ReceivedCredit;

          /**
           * ReceivedDebits represent funds pulled from a [FinancialAccount](https://stripe.com/docs/api#financial_accounts). These are not initiated from the FinancialAccount.
           *
           * [Stripe Treasury](https://stripe.com/treasury) is currently in beta development. Members of the beta program have access to ReceivedDebits APIs.
           */
          received_debit?: Stripe.Treasury.ReceivedDebit;

          /**
           * Type of the flow that created the Transaction. Set to the same value as `flow_type`.
           */
          type: FlowDetails.Type;
        }

        namespace FlowDetails {
          type Type =
            | 'credit_reversal'
            | 'debit_reversal'
            | 'inbound_transfer'
            | 'issuing_authorization'
            | 'other'
            | 'outbound_payment'
            | 'outbound_transfer'
            | 'received_credit'
            | 'received_debit';
        }

        type FlowType =
          | 'credit_reversal'
          | 'debit_reversal'
          | 'inbound_transfer'
          | 'issuing_authorization'
          | 'other'
          | 'outbound_payment'
          | 'outbound_transfer'
          | 'received_credit'
          | 'received_debit';

        type Status = 'open' | 'posted' | 'void';

        interface StatusTransitions {
          /**
           * Timestamp describing when the Transaction changed status to `posted`.
           */
          posted_at: number | null;

          /**
           * Timestamp describing when the Transaction changed status to `void`.
           */
          void_at: number | null;
        }
      }

      interface TransactionRetrieveParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
      }

      interface TransactionListParams extends PaginationParams {
        /**
         * Returns objects associated with this FinancialAccount.
         */
        financial_account: string;

        created?: Stripe.RangeQueryParam | number;

        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;

        /**
         * The results are in reverse chronological order by `created` or `posted_at`. The default is `created`.
         */
        order_by?: TransactionListParams.OrderBy;

        /**
         * Only return Transactions that have the given status: `open`, `posted`, or `void`.
         */
        status?: TransactionListParams.Status;

        /**
         * A filter for the `status_transitions.posted_at` timestamp. When using this filter, `status=posted` and `order_by=posted_at` must also be specified.
         */
        status_transitions?: TransactionListParams.StatusTransitions;
      }

      namespace TransactionListParams {
        type OrderBy = 'created' | 'posted_at';

        type Status = 'open' | 'posted' | 'void';

        interface StatusTransitions {
          /**
           * Returns Transactions with `posted_at` within the specified range.
           */
          posted_at?: Stripe.RangeQueryParam | number;
        }
      }

      class TransactionsResource {
        /**
         * Retrieves the details of an existing Transaction. Supply the unique Transaction ID, and Stripe returns the corresponding Transaction information.
         *
         * SDK support for languages shown in examples (other than cURL) coming soon.
         */
        retrieve(
          id: string,
          params?: TransactionRetrieveParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Treasury.Transaction>>;
        retrieve(
          id: string,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Treasury.Transaction>>;

        /**
         * Retrieves a list of Transaction objects.
         *
         * SDK support for languages shown in examples (other than cURL) coming soon.
         */
        list(
          params: TransactionListParams,
          options?: RequestOptions
        ): ApiListPromise<Stripe.Treasury.Transaction>;
      }
    }
  }
}
