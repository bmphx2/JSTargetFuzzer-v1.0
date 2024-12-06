const v0 = [];
const v3 = new Uint8Array(1);
const v6 = new Int32Array(135);
const v9 = new Uint32Array(128);
function f10(a11, a12, a13, a14) {
    const o19 = {
        ...v9,
        "c": a11,
        ...v6,
        __proto__: v0,
        "f": 128,
        p(a16, a17) {
            const o18 = {
                __proto__: v3,
                "b": a12,
            };
            this[7] *= a14;
            return v9;
        },
        [v9]: a12,
        "a": v3,
    };
    return o19;
}
f10(128, Uint8Array, 128, 128);
f10(128, Int32Array, 1, 135);
const v22 = f10(135, v3, 135, 1);
function F23(a25, a26, a27, a28) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a27;
}
const v29 = new F23(F23, 1, 128, v22);
const v30 = new F23(v29, 128, 135, v29);
new F23(v30, 1, 135, v30);
const v33 = new Date();
class C34 extends Date {
}
new C34(v33);
