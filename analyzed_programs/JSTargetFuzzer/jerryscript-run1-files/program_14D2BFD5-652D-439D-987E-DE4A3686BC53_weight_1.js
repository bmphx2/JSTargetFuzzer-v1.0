function f0() {
    const o7 = {
        "c": -2.0,
        "a": 268435441,
        "e": -2.0,
        get d() {
            const v5 = super.g;
            const t7 = "object";
            t7.valueOf = v5;
            v5[268435441] = 268435441;
            function f6() {
                return this;
            }
            return 268435441;
        },
    };
    return o7;
}
f0();
const v9 = f0();
const v10 = f0();
function F11(a13) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = a13;
    this.a = v9;
}
new F11(v10);
new F11(v9);
const v16 = new F11(v10);
const v22 = new Int32Array(2083);
new Uint8Array(255);
let v26 = 7;
/Ua{12,/gysm;
const v29 = new Int16Array(v26);
function f30(a31, a32, a33) {
    const o40 = {
        "h": a32,
        set e(a35) {
            e = a32;
            [a33,a32];
            [v22];
            [Int16Array,Uint8Array];
            v16.h;
        },
        __proto__: v29,
        "b": Uint8Array,
        "c": 5,
        ...a31,
        1053877365: a32,
    };
    return o40;
}
const v41 = f30(2083, 255, v26);
const v42 = f30(v41, v26, v41);
f30(f30, 255, v26);
v41[-2] &= 2083;
v29[-1] -= v26;
for (; v26--;) {
    v42.h;
    v42[Symbol.toPrimitive] = v26;
}
