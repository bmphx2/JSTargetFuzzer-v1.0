const v0 = [];
const v3 = new Uint8Array(1);
const v6 = new Int32Array(135);
class C9 {
    valueOf(a11, a12) {
        a12(a12);
    }
}
const v14 = new Uint32Array(128);
function f15(a16, a17, a18, a19) {
    const o24 = {
        ...v14,
        "c": a16,
        ...v6,
        __proto__: v0,
        "f": 128,
        p(a21, a22) {
            const o23 = {
                __proto__: v3,
                "b": a17,
            };
            this[7] *= a19;
            return v14;
        },
        [v14]: a17,
        "a": v3,
    };
    return o24;
}
f15(128, Uint8Array, 128, 128);
f15(128, Int32Array, 1, 135);
const v27 = f15(135, v3, 135, 1);
function F28(a30, a31, a32, a33) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a32;
}
const v34 = new F28(F28, 1, 128, v27);
const v35 = new F28(v34, 128, 135, v34);
new F28(v35, 1, 135, v35);
const v38 = new Date();
class C39 extends Date {
}
new C39(v38);
