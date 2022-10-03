import { Stripe } from '../lib';
interface MandateRetrieveParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
}
interface MandatesResource {
    retrieve: ((id: string, params?: MandateRetrieveParams, options?: Stripe.RequestOptions) => Promise<Stripe.Response<Stripe.Mandate>>) | ((id: string, options?: Stripe.RequestOptions) => Promise<Stripe.Response<Stripe.Mandate>>);
}
declare const resource: MandatesResource;
export = resource;
