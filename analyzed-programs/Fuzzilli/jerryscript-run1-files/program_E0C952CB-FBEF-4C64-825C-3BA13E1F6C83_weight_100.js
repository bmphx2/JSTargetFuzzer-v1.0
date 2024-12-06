new BigInt64Array(3142);
new Uint8Array(127);
const v8 = new Int32Array(29);
v8[16] %= -50429;
const v16 = Symbol.toPrimitive;
const o22 = {
    [v16]() {
        Object.defineProperty(this[-1], v16, { writable: true, configurable: true, get: Symbol, set: Symbol });
        const o19 = {
            "apply": Symbol,
            "construct": Symbol,
            "defineProperty": Symbol,
            "deleteProperty": Symbol,
            "get": Symbol,
            "getOwnPropertyDescriptor": Symbol,
            "getPrototypeOf": Symbol,
            "has": Symbol,
            "isExtensible": Symbol,
            "ownKeys": Symbol,
            "preventExtensions": Symbol,
            "set": Symbol,
            "setPrototypeOf": Symbol,
        };
        new Proxy(v16, o19);
        return -50429;
    },
};
