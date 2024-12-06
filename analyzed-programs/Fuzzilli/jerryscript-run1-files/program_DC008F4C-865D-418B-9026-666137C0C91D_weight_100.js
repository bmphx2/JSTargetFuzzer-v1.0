function f0() {
    const o14 = {
        __proto__: "symbol",
        valueOf(a5, a6) {
            a6[6] = this;
            Math.acosh(0.5749026003085075);
            let v12 = 3.182192900018176 >>> 0.5749026003085075;
            v12++;
            return a6;
        },
    };
    return o14;
}
f0();
f0();
f0();
new WeakMap();
const t17 = "337585966";
t17[512] = 53831411;
const o26 = {
    "call": f0,
    "construct": f0,
    "deleteProperty": f0,
    "get": f0,
    "getOwnPropertyDescriptor": f0,
    "getPrototypeOf": f0,
    "has": f0,
    "isExtensible": f0,
    "ownKeys": f0,
    "setPrototypeOf": f0,
};
new Proxy("b", o26);
