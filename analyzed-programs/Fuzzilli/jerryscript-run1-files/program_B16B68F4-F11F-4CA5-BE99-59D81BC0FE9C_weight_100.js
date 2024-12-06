new Uint8Array(6);
const v5 = new BigUint64Array(4096);
const v8 = new Int8Array(4096);
const v9 = [-4096,10];
const v10 = [52725,-256,503207458,4294967295,-6,-3];
const v11 = [-451376015,-9007199254740992,1024,-4294967297,-65535,-4294967295,-1229786830,65536,-65536];
function f12(a13, a14, a15) {
    const o23 = {
        ...v9,
        "g": a14,
        [a14]: 6,
        p(a17, a18, a19) {
            return a18;
        },
        ...a14,
        "d": v9,
        __proto__: v8,
        ...v11,
    };
    return o23;
}
const v24 = f12(v9, v9, Int8Array);
const v25 = f12(v10, v9, v5);
const v26 = f12(v11, v9, v25);
for (let v27 = 0; v27 < 32; v27++) {
    v8["p" + v27] = v27;
}
function f30(a31, a32, a33, a34) {
    const o35 = {
        "d": Int8Array,
        "a": v26,
        "f": a33,
    };
    return o35;
}
f30(v24, 6, v11, v11);
f30(v25, 4096, v9, v11);
f30(v26, 4096, v10, v11);
