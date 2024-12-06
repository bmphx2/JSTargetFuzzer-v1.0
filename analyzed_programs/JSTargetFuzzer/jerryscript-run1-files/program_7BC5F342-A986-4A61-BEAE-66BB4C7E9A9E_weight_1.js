function f0() {
}
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.c = f0;
}
new F1();
new F1();
new F1();
new Int8Array(10);
new Int8Array(Int8Array);
new Int32Array(24);
const v23 = new Int32Array(2083);
new Uint8Array(255);
const v29 = new Int16Array(7);
function f30(a31, a32, a33) {
    const o46 = {
        "h": Int32Array,
        set e(a35) {
            e = a32;
            [a33,a32];
            [v23];
            [Int16Array,Uint8Array];
            this.h;
        },
        __proto__: v29,
        "b": Uint8Array,
        "c": 255,
        o(a41, a42, a43) {
            24 % this;
            return this;
        },
        ...a31,
        1053877365: a32,
    };
    return o46;
}
const v47 = f30(2083, 255, 7);
const v48 = f30(v47, 7, 2083);
f30(f30, 255, 7);
v47[-2] &= 2083;
v29[-1] -= 7;
let v50 = 10;
for (; v50--;) {
    v48.h;
    v48[Symbol.toPrimitive] = 7;
}
