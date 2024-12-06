const v2 = new BigInt64Array(966);
const v5 = new Float32Array(6);
const v8 = new Int16Array(8);
function f9(a10, a11) {
    const o20 = {
        "f": a10,
        "h": a11,
        ...v5,
        [8]: a10,
        [v2](a13, a14, a15, a16) {
            return a11;
        },
        __proto__: v8,
        "d": a11,
        "e": 966,
        [Float32Array]: a10,
    };
    return o20;
}
f9(8, Float32Array);
const v22 = f9(Int16Array, 8, 966, 966, v8);
f9(v22, v22);
function F24(a26, a27) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = a26;
    this.e = a27;
    this.d = a26;
}
new F24(v8, 966);
const v29 = new F24(v2, 8);
new F24(966, 8);
const v34 = new Int16Array(v29, 8, BigInt64Array);
v34.copyWithin(256, 1717, 1717);
