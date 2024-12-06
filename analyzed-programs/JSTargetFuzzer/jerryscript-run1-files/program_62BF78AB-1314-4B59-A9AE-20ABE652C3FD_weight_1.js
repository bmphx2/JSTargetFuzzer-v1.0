function f0() {
    const o14 = {
        "d": 268435456,
        ..."number",
        "a": "number",
        ..."bigint",
        o(a5, a6) {
            const o9 = {
                "maxByteLength": 1000,
            };
            const v11 = new SharedArrayBuffer(1000, o9);
            new Int32Array(v11);
            return v11;
        },
    };
    return f0;
}
const v15 = f0();
const v16 = f0();
const v17 = f0();
new WeakSet();
function F20(a22, a23) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = a22;
    this.e = a23;
    this.f = a23;
}
new F20(v15, v16);
new F20(v15, v17);
new F20(v15, v17);
function f30() {
    const v31 = -Infinity;
    const o39 = {
        "g": 255,
        valueOf(a35) {
            a35.valueOf = a35;
            for (const v36 in v31) {
                try {
                    super.getOwnPropertyDescriptors(this, -1033928124, 255, v31);
                } catch(e38) {
                }
            }
            return 255;
        },
        [v31]: v31,
        "d": -1033928124,
    };
    return o39;
}
const v40 = f30();
const v41 = f30();
const v42 = f30();
function f46(a47, a48, a49, a50) {
    const o64 = {
        ...v41,
        "g": 4.0,
        set a(a52) {
            a52[a47] = v42;
            try {
            const t0 = -14548;
            t0(this);
            } catch (e) {}
            new BigUint64Array(3654);
            new Uint8Array(28);
            new Int32Array(78);
        },
    };
    return o64;
}
const v65 = f46(v42, 1000000000000.0, 1000000000000.0, 1000000.0);
f46(v41, 1000000000000.0, 1000000000000.0, 1000000.0);
const v67 = f46(v40, 4.0, 4.0, 1000000000000.0);
const o71 = {
    __proto__: v65,
    4037: v41,
    "a": v42,
};
const o72 = {
    "h": WeakSet,
    ...v67,
    "f": f46,
    "c": f46,
    "b": v40,
};
