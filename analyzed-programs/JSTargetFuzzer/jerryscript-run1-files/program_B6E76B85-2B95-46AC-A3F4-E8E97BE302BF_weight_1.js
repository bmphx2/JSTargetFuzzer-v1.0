[];
const v3 = new Uint32Array(128);
const v6 = new Float32Array(1109);
const v9 = new Uint16Array(2451);
function f10(a11, a12, a13) {
    try {
        a12 in "p";
    } finally {
        return a12;
    }
    return a12;
}
function f16(a17, a18, a19) {
    const o20 = {
        "defineProperty": f16,
        "deleteProperty": f16,
        "getOwnPropertyDescriptor": a19,
        "has": f16,
        "setPrototypeOf": f16,
    };
    new Proxy(v3, o20);
    const o28 = {
        "f": v6,
        set c(a24) {
            this[a24 + this] >>>= a17;
            return;
            try {
                super.unregister(v3, a19, this, v3);
            } catch(e27) {
            }
        },
        [a18]: v9,
        "h": a19,
        7: 128,
        "a": Uint16Array,
    };
    return o28;
}
f16(1109, 2451, 128);
f16(1109, 1109, 1109);
f16(1109, 2451, 2451);
let v32 = 9007199254740991n;
v32 &= v32;
