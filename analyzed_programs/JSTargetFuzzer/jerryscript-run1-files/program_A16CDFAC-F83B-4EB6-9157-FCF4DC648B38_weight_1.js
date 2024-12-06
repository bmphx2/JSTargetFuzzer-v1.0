new Array(2);
new BigUint64Array(1);
new Int8Array(4096);
new BigInt64Array(12);
new Int32Array(2083);
new Uint8Array(255);
const v23 = new Int16Array(7);
function f24(a25, a26, a27) {
    const v29 = new Int32Array();
    let v30;
    try { v30 = v29.filter(); } catch (e) {}
    const o32 = {
    };
    const v34 = new Proxy(Int8Array, o32);
    new v34(o32);
    for (const v36 in v30) {
    }
    const o43 = {
        "h": Int32Array,
        set e(a38) {
            e = a26;
            [a27,a26];
            [a38];
            [Int16Array,Uint8Array];
            this.h;
        },
        __proto__: v23,
        "b": Uint8Array,
        "c": 255,
        ...a25,
        1053877365: a26,
    };
    return o43;
}
const v44 = f24(2083, 255, 7);
const v45 = f24(v44, 7, 2083);
const v46 = f24(f24, 255, 7);
v44[-2] &= 2083;
v23[-1] -= 7;
let v47 = 10;
for (; v47--;) {
    v45.h;
    v46[Symbol.toPrimitive] = 7;
}
