function f0() {
    const o12 = {
        __proto__: "maxByteLength",
        ["maxByteLength"]: 1000.0,
        m(a5, a6) {
            a6 in "maxByteLength";
            class C8 {
                0;
            }
            new C8();
            new C8();
            const v11 = new C8();
            return v11;
        },
        215: "96C4S",
    };
    return o12;
}
f0();
const v14 = f0();
f0();
const o28 = {
    "apply": f0,
    "construct": f0,
    "deleteProperty": f0,
    "get": f0,
    "getOwnPropertyDescriptor": f0,
    "getPrototypeOf": f0,
    "has": f0,
    "isExtensible": f0,
    "ownKeys": f0,
    "preventExtensions": f0,
    "set": f0,
    "setPrototypeOf": f0,
};
new Proxy(v14, o28);
