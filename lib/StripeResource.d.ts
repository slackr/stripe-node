/**
 * Encapsulates request logic for a Stripe Resource
 */
declare function StripeResource(stripe: any, deprecatedUrlData: any): void;
declare namespace StripeResource {
    var extend: (sub: any) => any;
    var method: any;
    var BASIC_METHODS: any;
    var MAX_BUFFERED_REQUEST_METRICS: number;
}
export = StripeResource;
