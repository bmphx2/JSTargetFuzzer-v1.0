function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = 536870912;
    this.d = 536870912;
}
new F0();
new F0();
new F0();
new BigInt64Array(3856);
new Int16Array(1898);
new Uint16Array(5);
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
        __proto__: a27,
        "b": Uint8Array,
        "c": 255,
        ...a25,
        1053877365: a26,
    };
    return o34;
}
const v35 = f24(2083, 255, 7);
const v36 = f24(v35, 7, 2083);
f24(f24, 255, 7);
v35[-2] &= 2083;
v23[-1] -= 7;
let v38 = 10;
for (; v38--;) {
    v36.h;
    v36[Symbol.toPrimitive] = 7;
}
