function f0() {
}
const v1 = [f0,f0,f0,f0];
const v2 = [v1,v1,f0];
[v1,v2,v1,v2];
function f10(a11, a12, a13) {
    const o24 = {
        "h": a12,
        __proto__: v1,
        "g": f0,
        "f": a12,
        get b() {
            v1[1073741823];
            const o21 = {
                "apply": f0,
                "call": f0,
                "construct": f0,
                "defineProperty": f0,
                "deleteProperty": f0,
                "getOwnPropertyDescriptor": f0,
                "getPrototypeOf": a13,
                set c(a17) {
                },
                "has": f0,
                "isExtensible": Infinity,
                "ownKeys": f0,
                "preventExtensions": f0,
                "set": f0,
            };
            new Proxy(v1, o21);
            return -16;
        },
    };
    return o24;
}
const v25 = f10(-16, Infinity, 5.0);
const v26 = f10(5.0, Infinity, Infinity);
const v27 = f10(9223372036854775807, -1000.0, Infinity);
for (let i = 0; i < 5; i++) {
}
for (let i = 0; i < 5; i++) {
    v27[v25] = -4096;
    for (let v28 = 0; v28 < 32; v28++) {
        v26["p" + v28] = v28;
    }
}
