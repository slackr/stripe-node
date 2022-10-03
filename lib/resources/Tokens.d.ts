import { Stripe } from '../lib';
declare namespace TokenCreateParams {
}
interface TokenCreateParams {
    /**
     * Information for the account this token will represent.
     */
    account?: TokenCreateParams.Account;
    /**
     * The bank account this token will represent.
     */
    bank_account?: string | TokenCreateParams.BankAccount;
    card?: TokenCreateParams.Card | string;
    /**
     * The customer (owned by the application's account) for which to create a token. This can be used only with an [OAuth access token](https://stripe.com/docs/connect/standard-accounts) or [Stripe-Account header](https://stripe.com/docs/connect/authentication). For more details, see [Cloning Saved Payment Methods](https://stripe.com/docs/connect/cloning-saved-payment-methods).
     */
    customer?: string;
    /**
     * The updated CVC value this token will represent.
     */
    cvc_update?: TokenCreateParams.CvcUpdate;
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
    /**
     * Information for the person this token will represent.
     */
    person?: TokenCreateParams.Person;
    /**
     * The PII this token will represent.
     */
    pii?: TokenCreateParams.Pii;
}
interface TokenRetrieveParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
}
interface TokensResource {
    create: ((params?: TokenCreateParams, options?: Stripe.RequestOptions) => Promise<Stripe.Response<Stripe.Token>>) | ((options?: Stripe.RequestOptions) => Promise<Stripe.Response<Stripe.Token>>);
    retrieve: ((id: string, params?: TokenRetrieveParams, options?: Stripe.RequestOptions) => Promise<Stripe.Response<Stripe.Token>>) | ((id: string, options?: Stripe.RequestOptions) => Promise<Stripe.Response<Stripe.Token>>);
}
declare const resource: TokensResource;
export = resource;
