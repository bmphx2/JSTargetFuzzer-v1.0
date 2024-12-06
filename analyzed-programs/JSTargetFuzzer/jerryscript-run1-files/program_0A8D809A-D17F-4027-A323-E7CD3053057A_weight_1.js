function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = 7;
    this.g = 7;
    this.h = 7;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function f6(a7) {
    const o18 = {
        8: a7,
        ...v3,
        9: F0,
        "g": a7,
        [a7]: a7,
        [v3]: a7,
        [F0]: f6,
        "a": a7,
        [v4]: F0,
        "c": v4,
        [v5]: v3,
        [a7](a9, a10) {
            v3[v3];
            let {"a":v15,"d":v16,"f":v17,} = a7;
            Object.defineProperty(this, 7, { configurable: true, enumerable: true, value: this });
            return v17;
        },
    };
    return o18;
}
f6(v3);
const v20 = f6(v3);
new F0(v5, v5, F0, v20, f6(v20), F0);
new BigUint64Array(2749);
new BigInt64Array(8);
new Int8Array(352);
([-2.2250738585072014e-308]).reduce(Uint8Array);
