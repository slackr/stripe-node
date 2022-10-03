/// <reference types="node" />
declare type Settings = {
    timeout?: number;
    maxNetworkRetries?: number;
};
declare type Options = {
    auth?: string;
    host?: string;
    settings?: Settings;
    streaming?: boolean;
    headers?: Record<string, string>;
};
declare const utils: {
    isOptionsHash(o: any): boolean;
    /**
     * Stringifies an Object, accommodating nested objects
     * (forming the conventional key 'parent[child]=value')
     */
    stringifyRequestData: (data: any) => any;
    /**
     * Outputs a new function with interpolated object property values.
     * Use like so:
     *   const fn = makeURLInterpolator('some/url/{param1}/{param2}');
     *   fn({ param1: 123, param2: 456 }); // => 'some/url/123/456'
     */
    makeURLInterpolator: (str: any) => (outputs: any) => any;
    extractUrlParams: (path: any) => any;
    /**
     * Return the data argument from a list of arguments
     *
     * @param {object[]} args
     * @returns {object}
     */
    getDataFromArgs(args: any): any;
    /**
     * Return the options hash from a list of arguments
     */
    getOptionsFromArgs: (args: any) => Options;
    /**
     * Provide simple "Class" extension mechanism
     */
    protoExtend(sub: any): any;
    /**
     * Secure compare, from https://github.com/freewil/scmp
     */
    secureCompare: (a: any, b: any) => any;
    /**
     * Remove empty values from an object
     */
    removeNullish: (obj: any) => {};
    /**
     * Normalize standard HTTP Headers:
     * {'foo-bar': 'hi'}
     * becomes
     * {'Foo-Bar': 'hi'}
     */
    normalizeHeaders: (obj: any) => any;
    /**
     * Stolen from https://github.com/marten-de-vries/header-case-normalizer/blob/master/index.js#L36-L41
     * without the exceptions which are irrelevant to us.
     */
    normalizeHeader: (header: any) => any;
    /**
     * Determine if file data is a derivative of EventEmitter class.
     * https://nodejs.org/api/events.html#events_events
     */
    checkForStream: (obj: any) => boolean;
    callbackifyPromiseWithTimeout: (promise: any, callback: any) => any;
    /**
     * Allow for special capitalization cases (such as OAuth)
     */
    pascalToCamelCase: (name: any) => any;
    emitWarning: typeof emitWarning;
    /**
     * Node's built in `exec` function sometimes throws outright,
     * and sometimes has a callback with an error,
     * depending on the type of error.
     *
     * This unifies that interface.
     */
    safeExec: (cmd: any, cb: any) => void;
    _exec: any;
    isObject: (obj: any) => boolean;
    flattenAndStringify: (data: any) => {};
    /**
     * https://stackoverflow.com/a/2117523
     */
    uuid4: () => string;
    validateInteger: (name: any, n: any, defaultVal: any) => any;
    determineProcessUserAgentProperties: () => {
        lang_version?: undefined;
        platform?: undefined;
    } | {
        lang_version: string;
        platform: NodeJS.Platform;
    };
};
declare function emitWarning(warning: any): void;
export = utils;
