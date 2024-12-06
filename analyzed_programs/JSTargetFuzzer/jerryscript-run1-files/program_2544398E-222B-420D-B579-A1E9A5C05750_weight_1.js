function f0() {
}
let v1 = -256n;
function f4(a5, a6) {
    const o11 = {
        "a": 257n,
        "g": f0,
        get c() {
            return 256n;
        },
        "d": 256n,
        __proto__: f0,
    };
    return o11;
}
const v12 = f4(256n, v1);
f4(v1, 256n);
f4(v1, v1);
v1 |= 256n;
const o16 = {
    "call": f0,
    "defineProperty": f4,
    "getOwnPropertyDescriptor": f0,
    "preventExtensions": f4,
    "set": f4,
    "setPrototypeOf": f0,
};
new Proxy(v12, o16);
new WeakSet();
class C20 {
    constructor(a22, a23) {
    }
}
for (const v24 in C20) {
    try {
        1n ^ -2;
    } catch(e28) {
    } finally {
    }
}
