let v1 = 44793;
function f9(a10, a11, a12) {
    const o18 = {
        __proto__: a12,
        "h": v1,
        "c": a12,
        "a": -16,
        ...a10,
        "e": a10,
        get d() {
            super.a = a11;
            super.h;
            const v15 = this[8];
            v15 >= v15 ? v15 : v15;
            return v15;
        },
    };
    return o18;
}
f9(-11599793, -9252, -9252);
const v20 = f9(-41185, 3225, -16);
f9(7, -33527, 3225);
v1 = -41185;
const o22 = {
    "call": f9,
    "construct": f9,
    "get": f9,
    "getOwnPropertyDescriptor": f9,
    "getPrototypeOf": f9,
    "ownKeys": f9,
    "preventExtensions": f9,
    "set": f9,
};
new Proxy(v20, o22);
