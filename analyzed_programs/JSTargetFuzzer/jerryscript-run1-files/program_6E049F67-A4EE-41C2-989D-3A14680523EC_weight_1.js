new Array(7);
function F9(a11, a12) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = a12;
}
new F9(2.220446049250313e-16, 7);
new F9(0.2976242099212312, 7);
new F9(-4.4983070009231625, 512);
const v18 = new Int32Array(2083);
new Uint8Array(255);
const v24 = new Int16Array(7);
function f25(a26, a27, a28) {
    const o35 = {
        "h": Int32Array,
        set e(a30) {
            e = a27;
            [v24,a27];
            [v18];
            [Int16Array,Uint8Array];
            this.h;
        },
        __proto__: v24,
        "b": Uint8Array,
        "c": 255,
        ...a26,
        1053877365: a27,
    };
    return a28;
}
const v36 = f25(2083, 255, 7);
const v37 = f25(v36, 7, 2083);
f25(f25, 255, 7);
v36[-2] &= 2083;
v24[-1] -= 7;
let v39 = 10;
for (; v39--;) {
    v37.h;
    v37[Symbol.toPrimitive] = 7;
}
