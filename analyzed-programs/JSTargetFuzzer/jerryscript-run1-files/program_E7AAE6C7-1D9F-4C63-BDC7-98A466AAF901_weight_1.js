new Uint8ClampedArray(1);
const v5 = new Int8Array(1);
new Float32Array(5);
function F9(a11, a12, a13, a14) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = a12;
}
new F9(5, 1, 1, v5);
const v16 = new F9(5, 5, 5, Float32Array);
new F9(5, 1, 1, v16);
const v20 = new Int32Array(2083);
new Uint8Array(255);
const v26 = new Int16Array(7);
function f27(a28, a29, a30) {
    const o37 = {
        "h": Int32Array,
        set e(a32) {
            e = a29;
            [a30,a29];
            [v20];
            [Int16Array,Uint8Array];
            this.h;
        },
        __proto__: v26,
        "b": Uint8Array,
        "c": 255,
        ...a28,
        1053877365: a29,
    };
    return o37;
}
const v38 = f27(2083, 255, 7);
const v39 = f27(v38, 7, 2083);
f27(f27, 255, 7);
v38[-2] &= 2083;
v26[-1] -= 7;
let v41 = 10;
for (; v41--;) {
    v39.h;
    v39[Symbol.toPrimitive] = 7;
}
