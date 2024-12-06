function f0() {
    const o16 = {
        ["symbol"](a5, a6) {
            new Int8Array(9);
            new BigInt64Array(129);
            new Float32Array(933);
            return -8;
        },
        "e": -8,
    };
    return o16;
}
const v17 = f0();
const v18 = f0();
const v19 = f0();
function f23(a24, a25, a26) {
    const o31 = {
        "h": f0,
        "e": a25,
        __proto__: v19,
        ...v19,
        get c() {
            const o28 = {
                "call": f0,
                "construct": f0,
                "get": f0,
                "getOwnPropertyDescriptor": f0,
                "preventExtensions": f0,
            };
            new Proxy(v18, o28);
            return a26;
        },
    };
    return o31;
}
f23(9007199254740992, v18, v17);
const v33 = f23(9007199254740992, v19, v17);
f23(14, v33, v33);
new Float64Array(1230);
for (const v41 of "preventExtensions") {
    break;
}
new Float64Array(2);
new Uint8Array(3584);
try {
    for (const v47 of "preventExtensions") {
        break;
    }
} finally {
}
