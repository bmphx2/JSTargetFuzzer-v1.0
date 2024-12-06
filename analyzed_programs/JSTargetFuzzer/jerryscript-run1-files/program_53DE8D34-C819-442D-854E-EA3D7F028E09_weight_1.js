const v1 = new WeakSet();
const v3 = new WeakSet();
function F4(a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = v1;
    this.c = a6;
    this.e = v3;
}
const v8 = new F4(F4, v3);
new F4(v8, v8);
new F4(WeakSet, WeakSet);
const v16 = new Int32Array(2083);
new Uint8Array(255);
const v22 = new Int16Array(7);
function f23(a24, a25, a26) {
    const o33 = {
        "h": Int32Array,
        set e(a28) {
            e = a25;
            [a26,a25];
            [v16];
            [Int16Array,Uint8Array];
            this.h;
        },
        __proto__: v22,
        "b": Uint8Array,
        "c": 255,
        ...a24,
        1053877365: a25,
    };
    return o33;
}
const v34 = f23(2083, 255, 7);
const v35 = f23(v34, 7, 2083);
f23(f23, 255, 7);
v34[-2] &= v3;
v22[-1] -= 7;
let v37 = 10;
for (; v37--;) {
    v35.h;
    v35[Symbol.toPrimitive] = 7;
}
