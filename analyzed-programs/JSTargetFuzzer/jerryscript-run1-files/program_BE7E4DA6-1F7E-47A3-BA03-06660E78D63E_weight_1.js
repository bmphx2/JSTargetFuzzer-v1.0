[];
const v3 = new Uint32Array(128);
const v6 = new Float32Array(1109);
const v9 = new Uint16Array(2451);
function f10(a11, a12, a13) {
    const o14 = {
        "defineProperty": f10,
        "deleteProperty": f10,
        "getOwnPropertyDescriptor": f10,
        "has": f10,
        "setPrototypeOf": f10,
    };
    new Proxy(v3, o14);
    const o22 = {
        "f": v6,
        set c(a18) {
            this[a18 + this] >>>= a11;
            return;
            try {
                super.unregister(v3, a13, this, v3);
            } catch(e21) {
            }
        },
        [a12]: v9,
        "h": a13,
        7: a11,
        "a": Uint16Array,
    };
    return o22;
}
f10(1109, 2451, 128);
f10(1109, 1109, 1109);
f10(1109, 2451, 2451);
let v26 = 9007199254740991n;
v26 &= v26;
