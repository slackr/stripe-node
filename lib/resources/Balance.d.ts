import { Stripe } from '../lib';
interface BalanceRetrieveParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
}
interface BalanceResource {
    retrieve: ((params?: BalanceRetrieveParams, options?: Stripe.RequestOptions) => Promise<Stripe.Response<Stripe.Balance>>) | ((options?: Stripe.RequestOptions) => Promise<Stripe.Response<Stripe.Balance>>);
}
declare const resource: BalanceResource;
export = resource;
