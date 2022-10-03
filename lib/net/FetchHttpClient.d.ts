declare const HttpClient: {
    new (): {
        getClientName(): void;
        makeRequest(host: any, port: any, path: any, method: any, headers: any, requestData: any, protocol: any, timeout: any): void;
    };
    CONNECTION_CLOSED_ERROR_CODES: string[];
    TIMEOUT_ERROR_CODE: string;
    makeTimeoutError(): TypeError & {
        code?: string;
    };
}, HttpClientResponse: {
    new (statusCode: any, headers: any): {
        _statusCode: number;
        _headers: Record<string, string>;
        getStatusCode(): number;
        getHeaders(): Record<string, string>;
        getRawResponse(): void;
        toStream(streamCompleteCallback: any): void;
        toJSON(): any;
    };
};
/**
 * HTTP client which uses a `fetch` function to issue requests.
 *
 * By default relies on the global `fetch` function, but an optional function
 * can be passed in. If passing in a function, it is expected to match the Web
 * Fetch API. As an example, this could be the function provided by the
 * node-fetch package (https://github.com/node-fetch/node-fetch).
 */
declare class FetchHttpClient extends HttpClient {
    _fetchFn: (input: RequestInfo | URL, init?: RequestInit | undefined) => Promise<Response>;
    _res: Response;
    constructor(fetchFn: any);
    /** @override. */
    getClientName(): string;
    makeRequest(host: any, port: any, path: any, method: any, headers: any, requestData: any, protocol: any, timeout: any): Promise<FetchHttpClientResponse>;
}
declare class FetchHttpClientResponse extends HttpClientResponse {
    _res: Response;
    constructor(res: any);
    getRawResponse(): Response;
    toStream(streamCompleteCallback: any): ReadableStream<Uint8Array>;
    toJSON(): Promise<any>;
    static _transformHeadersToObject(headers: any): {};
}
declare const _default: {
    FetchHttpClient: typeof FetchHttpClient;
    FetchHttpClientResponse: typeof FetchHttpClientResponse;
};
export = _default;
