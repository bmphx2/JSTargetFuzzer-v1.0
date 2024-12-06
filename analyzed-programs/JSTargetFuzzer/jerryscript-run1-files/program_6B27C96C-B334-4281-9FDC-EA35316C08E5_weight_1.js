function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.d = 4096;
    this.g = 4096;
}
const v3 = new F0();
const v4 = new F0();
new F0();
function F9(a11, a12) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = v4;
    this.e = a11;
}
new F9(-9007199254740991, -9007199254740991);
new F9(-4294967297, v4);
const v15 = new F9(7368, v3);
new Int32Array(2083);
new Uint8Array(255);
const v27 = new Int16Array(7);
function f28(a29, a30, a31) {
    const o38 = {
        "h": Int32Array,
        set e(a33) {
            e = a30;
            [a31,a30];
            [v15];
            [Int16Array,Uint8Array];
            this.h;
        },
        __proto__: v27,
        "b": Uint8Array,
        "c": 255,
        ...a29,
        1053877365: a30,
    };
    return o38;
}
const v39 = f28(2083, 255, 7);
const v40 = f28(v39, 7, 2083);
f28(f28, 255, 7);
v39[-2] &= 2083;
v27[-1] -= 7;
let v42 = 10;
for (; v42--;) {
    v40.h;
    v40[Symbol.toPrimitive] = 7;
}
