/// <reference types="node" />
/// <reference types="node" />
import http = require('http');
import https = require('https');
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
 * HTTP client which uses the Node `http` and `https` packages to issue
 * requests.`
 */
declare class NodeHttpClient extends HttpClient {
    _agent: http.Agent | https.Agent;
    constructor(agent: any);
    /** @override. */
    getClientName(): string;
    makeRequest(host: any, port: any, path: any, method: any, headers: any, requestData: any, protocol: any, timeout: any): Promise<unknown>;
}
declare class NodeHttpClientResponse extends HttpClientResponse {
    _res: http.IncomingMessage;
    constructor(res: http.IncomingMessage);
    getRawResponse(): http.IncomingMessage;
    toStream(streamCompleteCallback: any): http.IncomingMessage;
    toJSON(): any;
}
declare const _default: {
    NodeHttpClient: typeof NodeHttpClient;
    NodeHttpClientResponse: typeof NodeHttpClientResponse;
};
export = _default;
