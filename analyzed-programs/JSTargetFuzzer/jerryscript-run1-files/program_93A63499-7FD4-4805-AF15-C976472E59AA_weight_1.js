const v1 = new WeakSet();
function F2(a4) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = v1;
    this.f = a4;
    this.a = WeakSet;
}
const v5 = new F2(v1);
new F2(WeakSet);
new F2(v5);
new Array(1178);
new BigInt64Array(127);
new BigInt64Array(128);
new Uint8ClampedArray(35);
const v22 = new Int32Array(2083);
new Uint8Array(255);
const v28 = new Int16Array(7);
function f29(a30, a31, a32) {
    const o39 = {
        "h": Int32Array,
        set e(a34) {
            e = a31;
            [a32,a31];
            [v22];
            [Int16Array,Uint8Array];
            this.h;
        },
        __proto__: v28,
        "b": Uint8Array,
        "c": 255,
        ...a30,
        1053877365: a31,
    };
    return o39;
}
try { BigUint64Array(); } catch (e) {}
`A6AOe${Uint8ClampedArray}32553${Int16Array}gn`;
Math.cos();
Math.clz32(Int16Array);
const v48 = f29(2083, 255, 7);
const v49 = f29(v48, 7, 2083);
f29(f29, 255, 7);
v48[-2] &= 2083;
v28[-1] -= 7;
let v51 = 10;
for (; v51--;) {
    v49.h;
    v49[Symbol.toPrimitive] = 7;
}
