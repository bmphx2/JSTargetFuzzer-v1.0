const v0 = [];
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = v0;
    this.e = v0;
}
const v3 = new F1(F1);
const v4 = new F1();
const v5 = new F1();
function f6() {
    return F1;
}
function f7() {
    return F1;
}
function F14(a16, a17, a18) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = a17;
}
new F14(-4, "c", v0);
const v20 = new F14(F14, "IdRW", v3);
new F14(v20, "o", v0);
const v24 = new Int32Array(2083);
new Uint8Array(255, f6);
const v30 = new Int16Array(7);
function f31(a32, a33, a34) {
    const o41 = {
        "h": Int32Array,
        set e(a36) {
            e = a33;
            [a34,a33];
            [v24,a36,v5,v4];
            [Int16Array,Uint8Array];
            this.h;
        },
        __proto__: v30,
        "b": Uint8Array,
        "c": 255,
        ...a32,
        1053877365: a33,
    };
    return o41;
}
const v42 = f31(2083, 255, 7);
const v43 = f31(v42, 7, 2083, Int16Array, -1935491388, F14);
f31(f31, 255, 7);
v42[-2] &= 2083;
v30[-1] -= 7;
let v45 = 10;
for (; v45--;) {
    v43.cause;
    v43[Symbol.toPrimitive] = 7;
}
