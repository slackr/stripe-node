import CryptoProvider = require('./CryptoProvider');
/**
 * `CryptoProvider which uses the Node `crypto` package for its computations.
 */
declare class NodeCryptoProvider extends CryptoProvider {
    /** @override */
    computeHMACSignature(payload: string, secret: string): string;
    /** @override */
    computeHMACSignatureAsync(payload: string, secret: string): Promise<string>;
}
export = NodeCryptoProvider;
