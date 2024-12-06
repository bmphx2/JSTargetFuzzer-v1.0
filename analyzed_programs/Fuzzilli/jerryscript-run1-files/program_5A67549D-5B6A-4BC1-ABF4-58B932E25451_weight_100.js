const v2 = new Uint16Array(15);
const v5 = new Int16Array(368);
let v6 = 4096;
new Int16Array(v6);
function f9(a10, a11, a12, a13) {
    const o18 = {
        get d() {
            return v2;
        },
        "g": Int16Array,
        "e": v5,
        "d": v2,
        "a": a12,
    };
    return o18;
}
f9(v6, v2, 15, v6);
f9(15, Uint16Array, v6, 368);
f9(v6, v2, 15, 368);
368 + v5;
for (let i24 = 0; i24 < 9; i24++) {
    v6 = i24;
    v6 <<= i24;
    const o30 = {
        "call": f9,
        "construct": f9,
        "deleteProperty": f9,
        "get": f9,
        "getOwnPropertyDescriptor": f9,
        "has": f9,
        "isExtensible": f9,
        "ownKeys": f9,
        "preventExtensions": f9,
        "set": f9,
        "setPrototypeOf": f9,
    };
    new Proxy(v5, o30);
}
