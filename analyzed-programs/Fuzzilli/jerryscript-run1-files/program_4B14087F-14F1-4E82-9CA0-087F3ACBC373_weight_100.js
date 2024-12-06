function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = 1109057908;
    this.a = 1109057908;
    this.c = 1109057908;
}
new F0();
const v4 = new F0();
const v5 = new F0();
function f9(a10, a11) {
    const o22 = {
        "d": v4,
        ...v4,
        set c(a13) {
            let v16 = 0.7304779831918593;
            Math.cbrt(++v16);
            Math.sinh(F0);
            ~-48773;
            --v16;
        },
    };
    return o22;
}
let v23 = f9(v4, -46426);
f9(v5, -46426);
const v25 = f9(v4, -46426);
function f26(a27, a28, a29) {
    const o34 = {
        "g": a28,
        [a28](a31, a32, a33) {
            v23.c = F0;
            return a29;
        },
        987331813: -5,
        __proto__: v4,
        "f": a28,
        536870912: a27,
        [v25]: a28,
        [v4]: F0,
        "a": a28,
    };
    return o34;
}
f26(v4, 1374144150, F0);
f26(v4, -5, -46426);
const v37 = f26(v5, -5, v23);
v37.c = 1374144150;
(v23 = v25)[1073741825];
v37.__proto__ = v25;
if (v23 > v4) {
    const o40 = {
        "call": f9,
        "construct": f26,
        "defineProperty": f26,
        "deleteProperty": f26,
        "getOwnPropertyDescriptor": f26,
        "has": f9,
        "isExtensible": f26,
        "ownKeys": f26,
        "preventExtensions": f26,
        "set": f9,
        "setPrototypeOf": f9,
    };
    new Proxy(v25, o40);
} else {
    v25[10] = f9;
    Object.defineProperty(v37, 1794, { writable: true, configurable: true, enumerable: true, set: f9 });
    new BigUint64Array(1000);
    new Uint8ClampedArray(9);
    new BigInt64Array(2903);
}
