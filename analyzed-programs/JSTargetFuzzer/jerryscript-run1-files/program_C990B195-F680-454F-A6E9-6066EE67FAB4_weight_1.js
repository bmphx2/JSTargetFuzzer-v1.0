const v0 = [];
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = v0;
}
const v3 = new F1();
new F1();
const v5 = new F1();
function f6() {
    return F1;
}
const v9 = new Uint32Array(4);
new Uint8Array(4068);
const v15 = new Int8Array(632);
function f16() {
    const v17 = -Infinity;
    const o25 = {
        "g": 255,
        valueOf(a21) {
            a21.valueOf = a21;
            for (const v22 in this) {
                try {
                    super.getOwnPropertyDescriptors(this, -1033928124, 255, v17);
                } catch(e24) {
                }
            }
            return 255;
        },
        [v17]: v17,
        "d": v15,
    };
    return o25;
}
const v26 = f16();
const v27 = f16();
const v28 = f16();
function f32(a33, a34, a35, a36) {
    const o60 = {
        ...F1,
        "g": 4.0,
        set a(a38) {
            a38[a33] = a38;
            let v40;
            try { v40 = a38(this); } catch (e) {}
            new BigUint64Array(3654);
            v27.valueOf = a35;
            try { v40(v5, a34, a36); } catch (e) {}
            new Int16Array(64);
            new Uint16Array(7);
            new BigInt64Array(3);
            new Uint8Array(28);
            new Int32Array(78);
        },
    };
    return o60;
}
const v61 = f32(v28, 1000000000000.0, 1000000000000.0, 1000000.0);
f32(v27, 1000000000000.0, 1000000000000.0, 1000000.0);
const v63 = f32(v26, 4.0, 4.0, 1000000000000.0);
const v66 = f32(-9223372036854775808, v3, f6, -9223372036854775808);
for (let v67 = 0; v67 < 32; v67++) {
    v9["p" + v67] = v67;
}
const o71 = {
    __proto__: v61,
    4037: v27,
    "a": v28,
};
const o72 = {
    "h": 1000000.0,
    ...v63,
    "f": f32,
    "c": f32,
    ...v66,
    ...v15,
    "b": v9,
    __proto__: v26,
    [f32]: v61,
    "a": Int8Array,
    [F1]: -1511039590,
    "a": 1000000000000.0,
    /*
    __proto__: v26,
    */
    "d": v61,
    "b": v26,
};
