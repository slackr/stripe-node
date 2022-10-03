// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace TestHelpers {
      namespace Treasury {
        export interface InboundTransferFailParams {
          /**
           * Specifies which fields in the response should be expanded.
           */
          expand?: Array<string>;

          /**
           * Details about a failed InboundTransfer.
           */
          failure_details?: InboundTransferFailParams.FailureDetails;
        }

        namespace InboundTransferFailParams {
          export interface FailureDetails {
            /**
             * Reason for the failure.
             */
            code?: FailureDetails.Code;
          }

          namespace FailureDetails {
            export type Code =
              | 'account_closed'
              | 'account_frozen'
              | 'bank_account_restricted'
              | 'bank_ownership_changed'
              | 'debit_not_authorized'
              | 'incorrect_account_holder_address'
              | 'incorrect_account_holder_name'
              | 'incorrect_account_holder_tax_id'
              | 'insufficient_funds'
              | 'invalid_account_number'
              | 'invalid_currency'
              | 'no_account'
              | 'other';
          }
        }
      }

      namespace Treasury {
        export interface InboundTransferReturnInboundTransferParams {
          /**
           * Specifies which fields in the response should be expanded.
           */
          expand?: Array<string>;
        }
      }

      namespace Treasury {
        export interface InboundTransferSucceedParams {
          /**
           * Specifies which fields in the response should be expanded.
           */
          expand?: Array<string>;
        }
      }

      namespace Treasury {
        class InboundTransfersResource {
          /**
           * Transitions a test mode created InboundTransfer to the failed status. The InboundTransfer must already be in the processing state.
           */
          fail(
            id: string,
            params?: InboundTransferFailParams,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.Treasury.InboundTransfer>>;
          fail(
            id: string,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.Treasury.InboundTransfer>>;

          /**
           * Marks the test mode InboundTransfer object as returned and links the InboundTransfer to a ReceivedDebit. The InboundTransfer must already be in the succeeded state.
           */
          returnInboundTransfer(
            id: string,
            params?: InboundTransferReturnInboundTransferParams,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.Treasury.InboundTransfer>>;
          returnInboundTransfer(
            id: string,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.Treasury.InboundTransfer>>;

          /**
           * Transitions a test mode created InboundTransfer to the succeeded status. The InboundTransfer must already be in the processing state.
           */
          succeed(
            id: string,
            params?: InboundTransferSucceedParams,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.Treasury.InboundTransfer>>;
          succeed(
            id: string,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.Treasury.InboundTransfer>>;
        }
      }
    }
  }
}
