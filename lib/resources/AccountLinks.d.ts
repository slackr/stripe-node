import { Stripe } from '../lib';
/**
 * Account Links are the means by which a Connect platform grants a connected account permission to access
 * Stripe-hosted applications, such as Connect Onboarding.
 *
 * Related guide: [Connect Onboarding](https://stripe.com/docs/connect/connect-onboarding).
 */
interface AccountLink {
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: 'account_link';
    /**
     * Time at which the object was created. Measured in seconds since the Unix epoch.
     */
    created: number;
    /**
     * The timestamp at which this account link will expire.
     */
    expires_at: number;
    /**
     * The URL for the account link.
     */
    url: string;
}
declare namespace AccountLinkCreateParams {
    type Type = 'account_onboarding' | 'account_update' | 'custom_account_update' | 'custom_account_verification';
    type Collect = 'currently_due' | 'eventually_due';
}
interface AccountLinkCreateParams {
    /**
     * The identifier of the account to create an account link for.
     */
    account: string;
    /**
     * The type of account link the user is requesting. Possible values are `account_onboarding` or `account_update`.
     */
    type: AccountLinkCreateParams.Type;
    /**
     * Which information the platform needs to collect from the user. One of `currently_due` or `eventually_due`. Default is `currently_due`.
     */
    collect?: AccountLinkCreateParams.Collect;
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
    /**
     * The URL the user will be redirected to if the account link is expired, has been previously-visited, or is otherwise invalid. The URL you specify should attempt to generate a new account link with the same parameters used to create the original account link, then redirect the user to the new account link's URL so they can continue with Connect Onboarding. If a new account link cannot be generated or the redirect fails you should display a useful error to the user.
     */
    refresh_url?: string;
    /**
     * The URL that the user will be redirected to upon leaving or completing the linked flow.
     */
    return_url?: string;
}
declare class AccountLinksResource {
    create: (params: AccountLinkCreateParams, options?: Stripe.RequestOptions) => Promise<Stripe.Response<AccountLink>>;
}
declare const resource: AccountLinksResource;
export = resource;
