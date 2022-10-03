declare type TimeoutError = TypeError & {
    code?: string;
};
/**
 * Encapsulates the logic for issuing a request to the Stripe API.
 *
 * A custom HTTP client should should implement:
 * 1. A response class which extends HttpClientResponse and wraps around their
 *    own internal representation of a response.
 * 2. A client class which extends HttpClient and implements all methods,
 *    returning their own response class when making requests.
 */
declare class HttpClient {
    static CONNECTION_CLOSED_ERROR_CODES: string[];
    static TIMEOUT_ERROR_CODE: string;
    /** The client name used for diagnostics. */
    getClientName(): void;
    makeRequest(host: any, port: any, path: any, method: any, headers: any, requestData: any, protocol: any, timeout: any): void;
    /** Helper to make a consistent timeout error across implementations. */
    static makeTimeoutError(): TimeoutError;
}
declare class HttpClientResponse {
    _statusCode: number;
    _headers: Record<string, string>;
    constructor(statusCode: any, headers: any);
    getStatusCode(): number;
    getHeaders(): Record<string, string>;
    getRawResponse(): void;
    toStream(streamCompleteCallback: any): void;
    toJSON(): any;
}
declare const _default: {
    HttpClient: typeof HttpClient;
    HttpClientResponse: typeof HttpClientResponse;
};
export = _default;
