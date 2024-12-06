function f3() {
    return 0.49372417459311446;
}
const v9 = new BigUint64Array(1000);
const v11 = f3();
const o14 = {
    "maxByteLength": 2371,
};
const v16 = new ArrayBuffer(64, o14);
const v18 = new Float64Array(v16);
const v20 = new BigUint64Array(1);
const v23 = new BigUint64Array(113);
const v26 = new Int8Array(2);
const v29 = new BigUint64Array(300);
const o30 = {
    29: v23,
    "e": v11,
    4: 4,
    "f": 113,
    0: v20,
    ...v29,
    [v26]: 2,
    "d": v16,
    [f3]: -41020,
    1: v18,
    ...v16,
    ...v9,
};
try { o30.getFloat32(); } catch (e) {}
