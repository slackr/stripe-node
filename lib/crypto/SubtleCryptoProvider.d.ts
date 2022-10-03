import CryptoProvider = require('./CryptoProvider');
/**
 * `CryptoProvider which uses the SubtleCrypto interface of the Web Crypto API.
 *
 * This only supports asynchronous operations.
 */
declare class SubtleCryptoProvider extends CryptoProvider {
    subtleCrypto: SubtleCrypto;
    constructor(subtleCrypto: SubtleCrypto);
    /** @override */
    computeHMACSignature(payload: string, secret: string): string;
    /** @override */
    computeHMACSignatureAsync(payload: string, secret: string): Promise<string>;
}
export = SubtleCryptoProvider;
