declare const Webhook: {
    DEFAULT_TOLERANCE: number;
    signature: any;
    constructEvent(payload: any, header: any, secret: any, tolerance: any, cryptoProvider: any): any;
    constructEventAsync(payload: any, header: any, secret: any, tolerance: any, cryptoProvider: any): Promise<any>;
    /**
     * Generates a header to be used for webhook mocking
     *
     * @typedef {object} opts
     * @property {number} timestamp - Timestamp of the header. Defaults to Date.now()
     * @property {string} payload - JSON stringified payload object, containing the 'id' and 'object' parameters
     * @property {string} secret - Stripe webhook secret 'whsec_...'
     * @property {string} scheme - Version of API to hit. Defaults to 'v1'.
     * @property {string} signature - Computed webhook signature
     * @property {CryptoProvider} cryptoProvider - Crypto provider to use for computing the signature if none was provided. Defaults to NodeCryptoProvider.
     */
    generateTestHeaderString: (opts: any) => string;
};
export = Webhook;
