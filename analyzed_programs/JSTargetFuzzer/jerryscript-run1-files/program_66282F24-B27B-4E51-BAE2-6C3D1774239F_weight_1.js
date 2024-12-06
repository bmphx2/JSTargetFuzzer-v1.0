new WeakMap();
function F5(a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = a8;
    this.f = -2147483649;
}
new F5(7, -14);
new F5(-2147483649, -2147483649);
new F5(7, -14);
const v17 = new Int32Array(2083);
new Uint8Array(255);
const v23 = new Int16Array(7);
function f24(a25, a26, a27) {
    const o34 = {
        "h": Int32Array,
        set e(a29) {
            e = a26;
            [a27,a26];
            [v17];
            [Int16Array,Uint8Array];
            this.h;
        },
        __proto__: v23,
        "b": Uint8Array,
        "c": 255,
        ...a25,
        1053877365: a26,
    };
    return o34;
}
([[]]).flat();
const v38 = f24(2083, 255, 7);
const v39 = f24(v38, 7, 2083);
f24(f24, 255, 7);
v38[-2] &= 2083;
v23[-1] -= 7;
let v41 = 10;
for (; v41--;) {
    v39.h;
    v39[Symbol.toPrimitive] = 7;
}
