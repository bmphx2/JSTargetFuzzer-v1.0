new Set();
new Int32Array(256);
new Int8Array(127);
new Uint32Array(4);
function f11() {
    const v12 = -Infinity;
    const o20 = {
        "g": 255,
        valueOf(a16) {
            a16.valueOf = a16;
            for (const v17 in this) {
                try {
                    super.getOwnPropertyDescriptors(this, -1033928124, 255, v12);
                } catch(e19) {
                }
            }
            return 255;
        },
        [v12]: v12,
        "d": -1033928124,
    };
    return o20;
}
const v21 = f11();
const v22 = f11();
const v23 = f11();
function f27(a28, a29, a30, a31) {
    const o49 = {
        get b() {
            return Int8Array;
        },
        ...a29,
        "g": 4.0,
        set a(a37) {
            a37[a31] = a37;
            try { a37(this); } catch (e) {}
            new BigUint64Array(3654);
            new Uint8Array(28);
            new Int32Array(78);
        },
    };
    return o49;
}
class C50 {
    static 548970496;
    f = 1000000.0;
}
new C50();
new C50();
new C50();
f27(v23, 1000000000000.0, 1000000000000.0, 1000000.0);
f27(v22, 1000000000000.0, 1000000000000.0, 1000000.0);
const v56 = f27(v21, 4.0, 1000000.0, 1000000000000.0);
const o60 = {
    __proto__: v56,
    4037: v22,
    "a": v23,
};
const o61 = {
    "h": 4.0,
    ...v56,
    "f": f27,
    "c": f27,
    "b": v21,
};
