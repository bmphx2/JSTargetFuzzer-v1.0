[];
new Uint8ClampedArray(27);
new Uint32Array(300);
new Int8Array(5);
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
            return 255;
        },
        [v11]: v11,
        "d": -1033928124,
    };
    return o19;
}
const v20 = f10();
const v21 = f10();
const v22 = f10();
v22[1] = 1000000.0;
v22.d;
function f30(a31, a32, a33, a34) {
    const o48 = {
        "a": v22,
        90: f30,
        ...v20,
        "f": a33,
        "b": 1e-15,
        ...v21,
        "g": 4.0,
        set a(a36) {
            a36[a31] = a36;
            try { a36(this); } catch (e) {}
            new BigUint64Array(3654);
            new Uint8Array(28);
            new Int32Array(78);
        },
    };
    return o48;
}
const v49 = f30(v22, 1000000000000.0, 1000000000000.0, 1000000.0);
f30(v21, 1000000000000.0, 1000000000000.0, 1000000.0);
const v51 = f30(v20, 4.0, 4.0, 1000000000000.0);
const o55 = {
    __proto__: v49,
    4037: v21,
    "a": v22,
};
const o56 = {
    "h": 1000000.0,
    ...v51,
    "f": f30,
    "c": f30,
    "b": v20,
};
