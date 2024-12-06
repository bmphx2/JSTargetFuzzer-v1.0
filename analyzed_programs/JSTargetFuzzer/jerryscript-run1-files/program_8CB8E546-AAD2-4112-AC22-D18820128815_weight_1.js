function f3() {
    return 0.49372417459311446;
}
function f8(a9, a10) {
    const o11 = {
        "f": -536870912,
        "c": 0.49372417459311446,
        ...f3,
    };
    return o11;
}
f8(0.34951542971712013, 1000);
const v13 = f8(0.49372417459311446, -41020);
const v14 = f8(0.34951542971712013, 4);
const v16 = new BigUint64Array(1000);
v14.c |= -41020;
let [...v18] = v16;
const v22 = f3();
const o25 = {
    "maxByteLength": 2371,
    "h": v13,
    [-41020]: ArrayBuffer,
    [v16]: v16,
    __proto__: v13,
    [4]: 34858,
};
const v27 = new ArrayBuffer(64, o25);
const v29 = new Float64Array(v27);
const v31 = new BigUint64Array(1);
const v34 = new BigUint64Array(113);
const v37 = new Int8Array(2);
const v40 = new BigUint64Array(300);
const o41 = {
    29: v34,
    "e": v22,
    4: 4,
    "f": 113,
    0: v31,
    ...v40,
    [v37]: 2,
    "d": v27,
    [f3]: -41020,
    1: v29,
    ...v27,
    ...v16,
};
try { o41.getFloat32(); } catch (e) {}
