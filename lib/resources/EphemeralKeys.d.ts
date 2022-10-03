import { Stripe } from '../lib';
interface EphemeralKeyCreateParams {
    /**
     * The ID of the Customer you'd like to modify using the resulting ephemeral key.
     */
    customer?: string;
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
    /**
     * The ID of the Issuing Card you'd like to access using the resulting ephemeral key.
     */
    issuing_card?: string;
}
interface EphemeralKeyDeleteParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
}
interface EphemeralKeysResource {
    create: ((params?: EphemeralKeyCreateParams, options?: Stripe.RequestOptions) => Promise<Stripe.Response<Stripe.EphemeralKey>>) | ((options?: Stripe.RequestOptions) => Promise<Stripe.Response<Stripe.EphemeralKey>>);
    del: ((id: string, params?: EphemeralKeyDeleteParams, options?: Stripe.RequestOptions) => Promise<Stripe.Response<Stripe.EphemeralKey>>) | ((id: string, options?: Stripe.RequestOptions) => Promise<Stripe.Response<Stripe.EphemeralKey>>);
}
declare const resource: EphemeralKeysResource;
export = resource;
