declare function makeAutoPaginationMethods(self: any, requestArgs: any, spec: any, firstPagePromise: any): {
    [x: string]: (opts: any, onDone: any) => any;
    autoPagingEach: () => any;
    autoPagingToArray: (opts: any, onDone: any) => any;
    next: () => any;
    return: () => {};
};
declare const _default: {
    makeAutoPaginationMethods: typeof makeAutoPaginationMethods;
};
export = _default;
