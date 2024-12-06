class C3 {
    set a(a5) {
        2.220446049250313e-16 !== this;
        let v7 = 0;
        do {
            a5 **= -2.2250738585072014e-308;
            v7++;
        } while (v7 < 7)
    }
    static #e;
    d;
    static c;
    b;
}
const v11 = new C3();
const v12 = new C3();
const v13 = new C3();
const v14 = [C3];
const v15 = [v14,v11,-2.2250738585072014e-308];
const v16 = [v12,v13,2.220446049250313e-16,v15,v11];
function f20() {
    return v11;
}
function f21(a22, a23, a24, a25) {
    const o39 = {
        __proto__: v15,
        [2147483649](a27, a28, a29) {
            new Uint8Array(7);
            new Uint8Array(257);
            new Int32Array(255);
            return a25;
        },
        [2.220446049250313e-16]: C3,
        "g": 6.80826322322008e+307,
    };
    return o39;
}
f21(v16, -25293, v16, v12);
f21(v16, 2, v14, v13);
const t37 = f21(v15, 2, v15, v11);
t37[-2.2250738585072014e-308] = f21;
let v43 = 0;
do {
    Object.defineProperty(C3, -1, { configurable: true, set: f20 });
    const o46 = {
        "maxByteLength": 268435439,
    };
    const v48 = new SharedArrayBuffer(1000, o46);
    new Uint8Array(v48);
    v43++;
} while (v43 < 4)
