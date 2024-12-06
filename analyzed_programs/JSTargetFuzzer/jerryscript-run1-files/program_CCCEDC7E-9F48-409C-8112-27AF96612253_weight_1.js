function f0() {
    const t1 = "toPrimitive" || -9007199254740991;
    delete t1[268435439];
    const v6 = new Set();
    new Set(v6);
    const o12 = {
        __proto__: "toPrimitive",
        ..."toPrimitive",
        "c": -9007199254740991,
        1: "toPrimitive",
        536870912: -1000000000.0,
        "g": -1000000000.0,
        "h": -1000000000.0,
        "replace": -9007199254740991,
        "b": "toPrimitive",
        "matchAll": -9007199254740991,
        o(a10) {
            const v11 = super.b;
            Object.defineProperty(this, 4294967295, { writable: true, configurable: true, get: f0 });
            return v11;
        },
    };
    return o12;
}
const v13 = f0();
const v14 = f0();
const v16 = f0();
const o17 = {
    "apply": f0,
    "construct": isNaN,
    "defineProperty": f0,
    "deleteProperty": f0,
    "get": f0,
    "getOwnPropertyDescriptor": isNaN,
    "getPrototypeOf": isNaN,
    "has": f0,
    "isExtensible": isNaN,
    "ownKeys": f0,
    "preventExtensions": f0,
    "set": f0,
};
const v19 = new Proxy(v16, o17);
isNaN.apply(isNaN, isNaN, v14, v19, v13);
f0();
"9007199254740992" || [-4294967296,8,-2147483648,-9007199254740992,-12326];
