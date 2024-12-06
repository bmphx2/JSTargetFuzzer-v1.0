function F6(a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = a8;
    this.a = a8;
}
const v10 = new F6(-10, 2147483648);
new F6(2147483648, F6);
new F6(2147483648, 2147483648);
const v15 = new Int32Array(2083);
new Uint8Array(255);
const v21 = new Int16Array(7);
function f22(a23, a24, a25) {
    const o32 = {
        "h": v10,
        set e(a27) {
            e = a24;
            [a25,a24];
            [v15];
            [Int16Array,Uint8Array];
            this.h;
        },
        __proto__: v21,
        "b": Uint8Array,
        "c": 255,
        ...a23,
        1053877365: a24,
    };
    return o32;
}
const v33 = f22(2083, 255, 7);
const v34 = f22(v33, 7, -10);
f22(f22, 255, 7);
v33[-2] &= 2083;
v21[-1] -= 7;
let v36 = 10;
for (; v36--;) {
    v34.h;
    v34[Symbol.toPrimitive] = 7;
}
