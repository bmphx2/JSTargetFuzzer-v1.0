function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.f = -14;
}
new F0();
const v4 = new F0();
new F0();
function f9() {
    return v4;
}
new Float32Array(1553);
new BigUint64Array(255);
new Float32Array(228);
const v24 = new Int32Array(2083);
new Uint8Array(255);
const v30 = new Int16Array(7);
function f31(a32, a33, a34) {
    const o41 = {
        "h": Int32Array,
        set e(a36) {
            e = a33;
            [a34,a33];
            [v24];
            [Int16Array,Uint8Array];
            this.h;
        },
        __proto__: v30,
        "b": Uint8Array,
        "c": a33,
        ...a32,
        1053877365: a33,
    };
    return o41;
}
const v43 = f31(f31(2083, 255, 7), 7, 2083);
f31(f31, 255, 7);
v43[-2] &= 2083;
v30[-1] -= 7;
let v45 = 10;
for (; v45--;) {
    v43.h;
    v43[Symbol.toPrimitive] = 7;
}
