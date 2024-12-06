const v2 = new Array(4051);
function f6(a7, a8, a9) {
    const o13 = {
        ...a9,
        12: 1000000.0,
        get growable() {
            a9 << undefined;
            return v2;
        },
        9: a8,
        "MAX_SAFE_INTEGER": a9,
        "c": a8,
        __proto__: 4051,
        ...v2,
    };
    return o13;
}
const v14 = f6(1000000.0, 767.3211171373262, Array);
const v15 = f6(767.3211171373262, 1000000.0, v14);
const v16 = f6(NaN, 1000000.0, 767.3211171373262);
function f17(a18, a19, a20) {
    const o28 = {
        "a": v16,
        set e(a22) {
            a19 < v2;
        },
        "f": v14,
        ...v2,
        "d": Array,
        [v15](a25, a26) {
            const o27 = {
                __proto__: v16,
                6: a26,
                "stack": 1000000.0,
            };
            a25[1] = v16;
            return v16;
        },
    };
    return f6;
}
f17(v14, 4051, NaN);
f17(v16, f6, f17(767.3211171373262, v16, Array));
function F32() {
    if (!new.target) { throw 'must be called with new'; }
}
f6[91] = F32;
