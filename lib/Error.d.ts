declare type RawErrorType = 'card_error' | 'invalid_request_error' | 'api_error' | 'idempotency_error' | 'rate_limit_error' | 'authentication_error' | 'invalid_grant';
declare type StripeRawError = {
    message?: string;
    type?: RawErrorType;
    headers?: {
        [header: string]: string;
    };
    statusCode?: number;
    requestId?: string;
    code?: string;
    doc_url?: string;
    decline_code?: string;
    param?: string;
    detail?: string;
    charge?: string;
    payment_method_type?: string;
    payment_intent?: any;
    payment_method?: any;
    setup_intent?: any;
    source?: any;
    exception?: any;
};
/**
 * StripeError is the base error from which all other more specific Stripe errors derive.
 * Specifically for errors returned from Stripe's REST API.
 */
declare class StripeError extends Error {
    readonly message: string;
    readonly type: string;
    readonly raw: unknown;
    readonly rawType: RawErrorType;
    readonly headers: {
        [header: string]: string;
    };
    readonly requestId: string;
    readonly code?: string;
    readonly doc_url?: string;
    readonly param?: string;
    readonly detail?: string;
    readonly statusCode?: number;
    readonly charge?: string;
    readonly decline_code?: string;
    readonly payment_method_type?: string;
    readonly payment_intent?: any;
    readonly payment_method?: any;
    readonly setup_intent?: any;
    readonly source?: any;
    constructor(raw?: StripeRawError);
    /**
     * Helper factory which takes raw stripe errors and outputs wrapping instances
     */
    static generate(rawStripeError: any): StripeCardError | StripeInvalidRequestError | StripeAPIError | StripeAuthenticationError | StripeRateLimitError | StripeIdempotencyError | StripeInvalidGrantError | StripeUnknownError;
}
/**
 * CardError is raised when a user enters a card that can't be charged for
 * some reason.
 */
declare class StripeCardError extends StripeError {
}
/**
 * InvalidRequestError is raised when a request is initiated with invalid
 * parameters.
 */
declare class StripeInvalidRequestError extends StripeError {
}
/**
 * APIError is a generic error that may be raised in cases where none of the
 * other named errors cover the problem. It could also be raised in the case
 * that a new error has been introduced in the API, but this version of the
 * Node.JS SDK doesn't know how to handle it.
 */
declare class StripeAPIError extends StripeError {
}
/**
 * AuthenticationError is raised when invalid credentials are used to connect
 * to Stripe's servers.
 */
declare class StripeAuthenticationError extends StripeError {
}
/**
 * PermissionError is raised in cases where access was attempted on a resource
 * that wasn't allowed.
 */
declare class StripePermissionError extends StripeError {
}
/**
 * RateLimitError is raised in cases where an account is putting too much load
 * on Stripe's API servers (usually by performing too many requests). Please
 * back off on request rate.
 */
declare class StripeRateLimitError extends StripeError {
}
/**
 * StripeConnectionError is raised in the event that the SDK can't connect to
 * Stripe's servers. That can be for a variety of different reasons from a
 * downed network to a bad TLS certificate.
 */
declare class StripeConnectionError extends StripeError {
}
/**
 * SignatureVerificationError is raised when the signature verification for a
 * webhook fails
 */
declare class StripeSignatureVerificationError extends StripeError {
}
/**
 * IdempotencyError is raised in cases where an idempotency key was used
 * improperly.
 */
declare class StripeIdempotencyError extends StripeError {
}
/**
 * InvalidGrantError is raised when a specified code doesn't exist, is
 * expired, has been used, or doesn't belong to you; a refresh token doesn't
 * exist, or doesn't belong to you; or if an API key's mode (live or test)
 * doesn't match the mode of a code or refresh token.
 */
declare class StripeInvalidGrantError extends StripeError {
}
/**
 * Any other error from Stripe not specifically captured above
 */
declare class StripeUnknownError extends StripeError {
}
declare const _default: {
    generate: typeof StripeError.generate;
    StripeError: typeof StripeError;
    StripeCardError: typeof StripeCardError;
    StripeInvalidRequestError: typeof StripeInvalidRequestError;
    StripeAPIError: typeof StripeAPIError;
    StripeAuthenticationError: typeof StripeAuthenticationError;
    StripePermissionError: typeof StripePermissionError;
    StripeRateLimitError: typeof StripeRateLimitError;
    StripeConnectionError: typeof StripeConnectionError;
    StripeSignatureVerificationError: typeof StripeSignatureVerificationError;
    StripeIdempotencyError: typeof StripeIdempotencyError;
    StripeInvalidGrantError: typeof StripeInvalidGrantError;
    StripeUnknownError: typeof StripeUnknownError;
};
export = _default;
