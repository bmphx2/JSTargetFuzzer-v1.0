new Float64Array(6, Float64Array, Float64Array);
new Uint16Array(16);
new Uint16Array(99);
function f10() {
    const v11 = -Infinity;
    const o19 = {
        "g": 255,
        valueOf(a15) {
            a15.valueOf = a15;
            for (const v16 in this) {
                try {
                    super.getOwnPropertyDescriptors(this, -1033928124, 255, v11);
                } catch(e18) {
                }
            }
            return -1033928124;
        },
        [v11]: v11,
        "d": -1033928124,
    };
    return o19;
}
const v20 = f10();
const v21 = f10();
const v22 = f10(f10);
function f26(a27, a28, a29, a30) {
    const o50 = {
        ...v21,
        "g": 4.0,
        set a(a32) {
            a32[a27] = a32;
            try { a32(this); } catch (e) {}
            new BigUint64Array(3654, Uint16Array, BigUint64Array);
            new ReferenceError(28);
            new Int32Array(78);
        },
    };
    return o50;
}
const v51 = f26(v22, 1000000000000.0, 1000000000000.0, 1000000.0);
f26(v21, 1000000000000.0, 1000000000000.0, 1000000.0);
const v53 = f26(Uint16Array, 4.0, 4.0, 1000000000000.0);
const o57 = {
    __proto__: v51,
    4037: v21,
    "a": v22,
};
const o58 = {
    "h": 1000000.0,
    ...v53,
    "f": f26,
    "c": f26,
    "b": v20,
};
